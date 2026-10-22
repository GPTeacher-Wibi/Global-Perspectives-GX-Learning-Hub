import { LearningProgress, UnitProgress } from '../types/progress';

export const GPHUB_PROGRESS_KEY = 'gphub_progress_v1';
export const GPHUB_NICKNAME_KEY = 'gphub_student_nickname';
export const GPHUB_CLASSROOM_MODE_KEY = 'gphub_classroom_mode';

const CURRENT_VERSION = '1.0.0';

export const UNIT_SLIDE_COUNTS: Record<number, number> = {
  1: 27,
  2: 27,
  3: 20,
  4: 18,
  5: 19,
  6: 19,
  7: 21,
  8: 20,
  9: 19,
  10: 25,
};

export function createDefaultUnitProgress(unitNumber: number): UnitProgress {
  return {
    learn: {
      completed: false,
      currentSlide: 1,
      maxSlideReached: 1,
      totalSlides: UNIT_SLIDE_COUNTS[unitNumber] || 20,
    },
    practice: {
      completed: false,
      attempts: 0,
      bestScore: 0,
      totalQuestions: 5,
    },
    games: {
      completedCount: 0,
      bestScores: {},
    },
    masteredConcepts: [],
  };
}

export function createDefaultProgress(): LearningProgress {
  const units: Record<number, UnitProgress> = {};
  for (let i = 1; i <= 10; i++) {
    units[i] = createDefaultUnitProgress(i);
  }

  return {
    version: CURRENT_VERSION,
    units,
    overallStats: {
      totalTimeSpentMinutes: 0,
      completedUnitsCount: 0,
      totalGamesPlayed: 0,
      totalPracticeQuestionsAnswered: 0,
    },
    updatedAt: new Date().toISOString(),
  };
}

export type ProgressChangeListener = (progress: LearningProgress) => void;
const progressListeners = new Set<ProgressChangeListener>();

export const storageService = {
  subscribe(listener: ProgressChangeListener): () => void {
    progressListeners.add(listener);
    return () => {
      progressListeners.delete(listener);
    };
  },

  getProgress(): LearningProgress {
    try {
      const raw = localStorage.getItem(GPHUB_PROGRESS_KEY);
      if (!raw) {
        const initial = createDefaultProgress();
        this.saveProgress(initial);
        return initial;
      }
      const parsed = JSON.parse(raw) as LearningProgress;
      // Ensure all 10 units are present
      for (let i = 1; i <= 10; i++) {
        if (!parsed.units[i]) {
          parsed.units[i] = createDefaultUnitProgress(i);
        }
      }
      return parsed;
    } catch {
      // Return fresh state on parse error
      return createDefaultProgress();
    }
  },

  saveProgress(progress: LearningProgress): void {
    try {
      progress.updatedAt = new Date().toISOString();
      localStorage.setItem(GPHUB_PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // Storage quota or restriction fallback
    }
    progressListeners.forEach((listener) => {
      try {
        listener(progress);
      } catch {
        // Safe execution
      }
    });
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('gphub:progress-updated', { detail: progress })
      );
    }
  },

  getUnitProgress(unitNumber: number): UnitProgress {
    const progress = this.getProgress();
    const up = progress.units[unitNumber] || createDefaultUnitProgress(unitNumber);
    const expectedSlides = UNIT_SLIDE_COUNTS[unitNumber] || 20;
    if (up.learn.totalSlides !== expectedSlides) {
      up.learn.totalSlides = expectedSlides;
    }
    return up;
  },

  updateUnitProgress(
    unitNumber: number,
    updater: (prev: UnitProgress) => UnitProgress
  ): UnitProgress {
    const progress = this.getProgress();
    const current = progress.units[unitNumber] || createDefaultUnitProgress(unitNumber);
    const updated = updater(current);
    progress.units[unitNumber] = updated;

    // Recalculate completed units count
    let completedCount = 0;
    for (let i = 1; i <= 10; i++) {
      const u = progress.units[i];
      if (u && u.learn.completed && u.practice.completed) {
        completedCount++;
      }
    }
    progress.overallStats.completedUnitsCount = completedCount;
    progress.lastActiveUnit = unitNumber;

    this.saveProgress(progress);
    return updated;
  },

  getNickname(): string {
    try {
      return localStorage.getItem(GPHUB_NICKNAME_KEY) || '';
    } catch {
      return '';
    }
  },

  getStudentNickname(): string {
    return this.getNickname();
  },

  setNickname(name: string): void {
    try {
      if (name.trim()) {
        localStorage.setItem(GPHUB_NICKNAME_KEY, name.trim());
      } else {
        localStorage.removeItem(GPHUB_NICKNAME_KEY);
      }
    } catch {
      // Ignore
    }
  },

  saveStudentNickname(name: string): void {
    this.setNickname(name);
  },

  getClassroomMode(): boolean {
    try {
      return localStorage.getItem(GPHUB_CLASSROOM_MODE_KEY) === 'true';
    } catch {
      return false;
    }
  },

  setClassroomMode(enabled: boolean): void {
    try {
      localStorage.setItem(GPHUB_CLASSROOM_MODE_KEY, enabled ? 'true' : 'false');
    } catch {
      // Ignore
    }
  },

  saveClassroomMode(enabled: boolean): void {
    this.setClassroomMode(enabled);
  },

  updateSlideProgress(
    unitNumber: number,
    slideNumber: number,
    isFinished: boolean
  ): UnitProgress {
    return this.updateUnitProgress(unitNumber, (prev) => {
      const maxSlide = Math.max(prev.learn.maxSlideReached, slideNumber);
      return {
        ...prev,
        learn: {
          ...prev.learn,
          currentSlide: slideNumber,
          maxSlideReached: maxSlide,
          completed: prev.learn.completed || isFinished,
        },
      };
    });
  },

  savePracticeScore(unitNumber: number, accuracyPercent: number): UnitProgress {
    return this.updateUnitProgress(unitNumber, (prev) => {
      return {
        ...prev,
        practice: {
          ...prev.practice,
          completed: true,
          attempts: prev.practice.attempts + 1,
          bestScore: Math.max(prev.practice.bestScore, accuracyPercent),
        },
      };
    });
  },

  saveGameScore(unitNumber: number, gameId: string, score: number): UnitProgress {
    return this.updateUnitProgress(unitNumber, (prev) => {
      const bestScores = { ...prev.games.bestScores };
      const previousBest = bestScores[gameId] || 0;
      bestScores[gameId] = Math.max(previousBest, score);

      // Count unique completed games
      const completedCount = Object.keys(bestScores).length;

      return {
        ...prev,
        games: {
          completedCount,
          bestScores,
        },
      };
    });
  },

  resetProgress(): void {
    try {
      const reset = createDefaultProgress();
      this.saveProgress(reset);
    } catch {
      // Ignore
    }
  },
};
