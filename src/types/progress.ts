export interface UnitProgress {
  learn: {
    completed: boolean;
    currentSlide: number;
    maxSlideReached: number;
    totalSlides: number;
  };
  practice: {
    completed: boolean;
    attempts: number;
    bestScore: number;
    totalQuestions: number;
  };
  games: {
    completedCount: number;
    bestScores: Record<string, number>;
  };
  masteredConcepts: string[];
}

export interface OverallStats {
  totalTimeSpentMinutes: number;
  completedUnitsCount: number;
  totalGamesPlayed: number;
  totalPracticeQuestionsAnswered: number;
}

export interface LearningProgress {
  version: string;
  units: Record<number, UnitProgress>;
  overallStats: OverallStats;
  lastActiveUnit?: number;
  lastRoute?: string;
  updatedAt: string;
}
