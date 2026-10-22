export type GradProfileDimension =
  | 'Kewargaan (Citizenship)'
  | 'Penalaran Kritis (Critical Reasoning)'
  | 'Kolaborasi (Collaboration)'
  | 'Kemandirian (Independence)'
  | 'Penalaran Kritis & Kewargaan'
  | 'Kemandirian & Penalaran Kritis';

export interface Unit {
  id: string;
  number: number;
  title: string;
  shortDescription: string;
  dimension: GradProfileDimension;
  themeColor: string;
  accentBg: string;
  objectives: string[];
  keyConcepts: string[];
  keywords: string[];
  textbookPageStart: number;
  textbookPageEnd: number;
  plannedSlidesCount: number;
  plannedQuestionsCount: number;
  plannedGamesCount: number;
  slides?: Slide[];
  sampleQuestions?: PracticeQuestion[];
}

export type SlideType =
  | 'concept'
  | 'definition'
  | 'comparison'
  | 'diagram'
  | 'example'
  | 'case-study'
  | 'tap-to-reveal'
  | 'quick-check'
  | 'discussion-prompt'
  | 'summary'
  | 'misconception';

export interface Slide {
  id: string;
  unitNumber: number;
  slideNumber: number;
  title: string;
  section: string;
  type: SlideType;
  teacherNote?: string;
  sourceRef?: {
    unit: string;
    section: string;
    pages: string;
  };
  content: {
    heading?: string;
    subheading?: string;
    body?: string;
    bullets?: string[];
    keyTakeaway?: string;
    example?: {
      title: string;
      scenario: string;
      takeaway?: string;
    };
    comparison?: {
      itemA: { label: string; points: string[] };
      itemB: { label: string; points: string[] };
    };
    interactiveData?: {
      prompt: string;
      revealedText?: string;
      hint?: string;
      options?: {
        id: string;
        label: string;
        explanation: string;
        isCorrect?: boolean;
      }[];
    };
    sourceCitation?: string;
  };
}

export type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'classification'
  | 'matching'
  | 'scenario-analysis'
  | 'sequencing';

export type QuestionDifficulty =
  | 'Foundation'
  | 'Application'
  | 'Challenge'
  | 'Core'
  | 'Extension'
  | 'Analysis'
  | 'Evaluation';

export interface PracticeQuestion {
  id: string;
  unitNumber: number;
  type: QuestionType;
  difficulty: QuestionDifficulty;
  concept: string;
  question: string;
  scenario?: string;
  options: { id: string; text: string; explanation?: string }[];
  correctAnswer: string | string[];
  explanation: string;
  misconceptionAlert?: string;
  textbookSource?: string;
}
