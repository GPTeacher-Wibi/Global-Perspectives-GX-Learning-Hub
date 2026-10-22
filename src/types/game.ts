export type GameDifficulty = 'Foundation' | 'Application' | 'Challenge';

export type GameStatus = 'available' | 'coming-soon' | 'planned' | 'implemented';

export type GameType = 'micro' | 'capstone';

export interface Game {
  id: string;
  unitNumber: number;
  title: string;
  description: string;
  targetConcept: string;
  difficulty: GameDifficulty;
  mechanic: string;
  status: GameStatus;
  estimatedMinutes: number;
  skillsDeveloped: string[];
  type?: GameType;
  concepts?: string[];
  componentKey?: string;
}

export interface GameQuestion {
  id: string;
  question: string;
  scenario?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  concept: string;
  difficulty: GameDifficulty;
  misconception?: string;
}

export interface GameResult {
  gameId: string;
  unitNumber: number;
  score: number;
  maxScore: number;
  accuracy: number;
  completedAt: string;
}
