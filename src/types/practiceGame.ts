/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3A.1: HARDENED PRACTICE & GAME ARCHITECTURE TYPE DEFINITIONS
 * ============================================================================
 * Academic Source of Truth: Global Perspectives Grade X (2nd Ed.) — Andri Wibisono
 * Cambridge Assessment International Education (CAIE) Core Framework
 * Target Demographic: Grade 10 Bilingual/Indonesian Students (CEFR B1 English)
 * Deployment Context: Interactive Flat Panels (IFP) & Student Stations (Zero Firebase / Client Persistence)
 *
 * ARCHITECTURAL BOUNDARIES & INTEGRITY RULES:
 * 1. Content-Engine Separation: The engine MUST remain 100% unit-agnostic.
 * 2. Deterministic Match Reproducibility vs. Realtime Sync:
 *    - Shared seeds support deterministic question/option order across devices.
 *    - Realtime cross-device state or leaderboard synchronization is NOT supported by localStorage.
 * 3. Pedagogical Truth Hierarchy:
 *    - Textbook-Derived Content: Verified directly against the course text.
 *    - Instructional Scaffold: Teacher/developer-designed learning bridges.
 *    - Game Mechanic: Technical/gameplay interaction structures.
 *    - Diagnostic Scaffolds: Teacher/developer diagnostic labels (NOT official textbook frameworks).
 * 4. Modular Scoring Policies: Question and game-specific scoring rules, avoiding monolithic formulas.
 */

// ----------------------------------------------------------------------------
// 1. PEDAGOGICAL TAXONOMY & METADATA
// ----------------------------------------------------------------------------

/**
 * Revised Bloom's Cognitive Demand Levels tailored to Grade 10 GP inquiry.
 * Emphasizes thinking over mechanical recall.
 */
export type CognitiveDemand =
  | 'Understand' // Grasping meaning, translating concepts, identifying categories
  | 'Apply'      // Applying concepts to concrete real-world / local scenarios
  | 'Analyse'    // Dissecting claims, identifying warrants, detecting logical fallacies
  | 'Evaluate'   // Judging reliability (CRAAP/SIFT), assessing strength of evidence
  | 'Construct'; // Synthesizing conclusions, assembling arguments, formulating policy

/**
 * Cambridge IGCSE Global Perspectives Four Core Competency Processes
 */
export type CambridgeCoreProcess =
  | 'Deconstruction' // Breaking down arguments, identifying assumptions, analyzing perspectives
  | 'Reconstruction' // Contextualizing, synthesizing multiple sources, building balanced views
  | 'Collaboration'  // Team consensus, role negotiation, addressing groupthink
  | 'Delivery';      // Communicating structured findings, actionable recommendations

/**
 * 5-Tier Cognitive Complexity Scale (Difficulty)
 * Primary factor: Conceptual & analytical demand (NOT speed, vocabulary, or text length)
 */
export type DifficultyTier = 1 | 2 | 3 | 4 | 5;

export interface DifficultyDescriptor {
  tier: DifficultyTier;
  label: 'Foundation' | 'Application' | 'Analysis' | 'Evaluation' | 'Challenge';
  description: string;
  targetCognitiveDemand: CognitiveDemand;
  basePoints: number;
}

/**
 * Source Verification Status
 * Distinguishes verified textbook citations from pending curriculum development references.
 */
export type SourceVerificationStatus = 'verified' | 'pending';

/**
 * Curriculum Source Reference (Traceability Rule)
 * Every curriculum-derived practice or game item cites its textbook origin or scaffold status.
 * Never fabricate page numbers; use status="pending" if awaiting textbook page verification.
 */
export interface SourceReference {
  unitNumber: number;
  section: string;
  pageRange: string;
  sourceTextTitle: string; // e.g., "Global Perspectives Grade X (2nd Ed.)"
  isInstructionalScaffold?: boolean; // True if an instructional bridge rather than literal textbook text
  verificationStatus: SourceVerificationStatus;
  notes?: string;
}

/**
 * Content Review and Lock Status
 */
export type ContentLifecycleStatus = 'draft' | 'validated' | 'locked';

// ----------------------------------------------------------------------------
// 2. DIAGNOSTIC MISCONCEPTION MODEL
// ----------------------------------------------------------------------------

/**
 * Misconception Source Basis
 * Explicitly distinguishes textbook-derived contrasts from teacher/developer-designed diagnostic scaffolds.
 */
export type MisconceptionSourceBasis =
  | 'textbook-misunderstanding'   // Supported by explicit instructional contrast in textbook
  | 'diagnostic-scaffold'         // Teacher/developer-designed diagnostic scaffold based on observed errors
  | 'observed-student-pattern'    // Known empirical student error pattern in bilingual Grade 10
  | 'instructional-contrast';     // Pedagogical counterpoint designed to clarify analytical nuance

export interface MisconceptionRecord {
  id: string;                         // e.g., "misc-u1-emotion-vs-perspective"
  unitNumber: number;                 // 1 through 10
  concept: string;                    // e.g., "Structured Perspective vs. Emotional Reaction"
  description: string;                // Detailed explanation of the misconception
  triggerCondition: string;          // Criteria or distractor that indicates this error
  feedbackMessage: string;           // Clear student-facing remedial explanation (CEFR B1)
  sourceBasis: MisconceptionSourceBasis;
  status: ContentLifecycleStatus;
}

// ----------------------------------------------------------------------------
// 3. GENERIC QUESTION DATA MODEL (DISCRIMINATED UNIONS)
// ----------------------------------------------------------------------------

export type SupportedQuestionType =
  | 'multiple-choice'      // Standard single-select with diagnostic distractors
  | 'multiple-select'      // Multi-select where students identify all valid criteria
  | 'classification'       // Sorting items into distinct conceptual buckets/lenses
  | 'matching'             // Connecting pairs (e.g., method to research question)
  | 'sequencing'           // Ordering steps logically (e.g., 8-step research process)
  | 'scenario-decision'    // Multi-stage decision with reasoning consequence
  | 'evidence-selection'   // Selecting the strongest evidence piece supporting a claim
  | 'true-false-justified' // Binary judgment paired with obligatory rationale
  | 'short-constructed';   // Structured template response (e.g., Toulmin Warrant)

/**
 * Base Question Interface shared across all question types
 */
export interface BaseQuestion {
  id: string;                         // Unique across entire hub (e.g., "u1-q-persp-01")
  unitNumber: number;                 // 1 through 10
  topicId: string;                    // e.g., "1.2-types-of-perspectives"
  type: SupportedQuestionType;
  difficulty: DifficultyTier;
  cognitiveDemand: CognitiveDemand;
  coreProcesses: CambridgeCoreProcess[];
  sourceRef: SourceReference;
  status: ContentLifecycleStatus;
  
  // Student-facing prompts (CEFR B1 English)
  prompt: string;                     // Primary question instruction
  contextScenario?: string;           // Optional scenario or passage (not restricted by arbitrary word cutoffs)
  stimulusMediaUrl?: string;          // Optional chart, photo, or visual stimulus
  
  // Pedagogical Feedback & Diagnostic Tracking
  explanation: string;                // Clear rationale why correct answer is valid
  misconceptionId?: string;           // Key linking to diagnostic misconception record
  misconceptionAlert?: string;        // Explicit student-facing diagnostic scaffold if tripped
  hint?: string;                      // Optional scaffold for struggling learners
  scoringPolicyId?: string;           // Optional link to tailored scoring policy
}

/** 1. Multiple Choice Question */
export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: {
    id: string;
    text: string;
    explanation?: string;            // Why this specific option is right/wrong
    associatedMisconception?: string;
  }[];
  correctOptionId: string;
}

/** 2. Multiple Select Question */
export interface MultipleSelectQuestion extends BaseQuestion {
  type: 'multiple-select';
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation?: string;
  }[];
  minSelections?: number;
  maxSelections?: number;
}

/** 3. Classification / Categorization Question (e.g., 4 Lenses, 4 Levels) */
export interface ClassificationQuestion extends BaseQuestion {
  type: 'classification';
  categories: {
    id: string;
    name: string;
    description?: string;
  }[];
  items: {
    id: string;
    text: string;
    correctCategoryId: string;
    feedback?: string;
  }[];
}

/** 4. Matching Question (e.g., Research Method -> Research Question) */
export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  pairs: {
    id: string;
    leftItem: string;
    rightItem: string;
    relationshipRationale: string;
  }[];
}

/** 5. Sequencing Question (e.g., 8-step Research Cycle, Planning Stages) */
export interface SequencingQuestion extends BaseQuestion {
  type: 'sequencing';
  steps: {
    id: string;
    text: string;
    correctOrderIndex: number; // 0-indexed
    stageRationale?: string;
  }[];
}

/** 6. Scenario Decision Question (Branching / Consequence-driven) */
export interface ScenarioDecisionQuestion extends BaseQuestion {
  type: 'scenario-decision';
  stakeholderRole?: string;
  dilemma: string;
  choices: {
    id: string;
    label: string;
    consequenceText: string;
    scoreWeight: number; // 0 to 1.0
    impactLenses: {
      lens: 'Cultural' | 'Economic' | 'Political' | 'Social' | 'Environmental';
      outcome: 'positive' | 'neutral' | 'negative';
      description: string;
    }[];
    justificationFeedback: string;
  }[];
}

/** 7. Evidence Selection Question (e.g., CRAAP / Toulmin Data test) */
export interface EvidenceSelectionQuestion extends BaseQuestion {
  type: 'evidence-selection';
  targetClaim: string;
  evidenceSnippets: {
    id: string;
    sourceName: string;
    excerpt: string;
    craapRating?: {
      currency?: string;
      authority?: string;
      purpose?: string;
    };
    isOptimalEvidence: boolean;
    flawReason?: string;
  }[];
  correctEvidenceId: string;
}

/** 8. True/False with Obligatory Justification */
export interface TrueFalseJustifiedQuestion extends BaseQuestion {
  type: 'true-false-justified';
  assertion: string;
  isTrue: boolean;
  justificationOptions: {
    id: string;
    rationale: string;
    isCorrectRationale: boolean;
  }[];
  correctJustificationId: string;
}

/** 9. Short Constructed Response (Scaffolded Template) */
export interface ShortConstructedQuestion extends BaseQuestion {
  type: 'short-constructed';
  scaffoldTemplate: string;
  requiredKeywords: string[];
  rubricExemplar: string;
}

/** Union of all validated question types */
export type PracticeGameQuestion =
  | MultipleChoiceQuestion
  | MultipleSelectQuestion
  | ClassificationQuestion
  | MatchingQuestion
  | SequencingQuestion
  | ScenarioDecisionQuestion
  | EvidenceSelectionQuestion
  | TrueFalseJustifiedQuestion
  | ShortConstructedQuestion;

// ----------------------------------------------------------------------------
// 4. REUSABLE GAME MECHANIC FAMILIES & GAME DEFINITIONS
// ----------------------------------------------------------------------------

/**
 * Reusable Game Mechanic Families
 * Pedagogical interactions decouple interaction pattern from curriculum topics.
 * Pedagogy chooses the mechanic; the mechanic does NOT dictate the pedagogy.
 */
export type GameMechanicFamily =
  | 'sort-classify'          // Categorization bins, analytical lens sorting, level triage
  | 'sequence-flow'          // Process workflows, chronological/logical cycle assembly
  | 'scenario-decision'      // Branching stakeholder dilemmas, multi-lens trade-offs
  | 'evidence-evaluation'    // CRAAP / SIFT fact-checking, source credibility testing
  | 'concept-matching'       // Method-to-problem matrices, definition-to-application pairings
  | 'reconstruction-assembly'// Toulmin argument assembly, conclusion builder matrices
  | 'multi-stage-challenge'; // Capstone case study integrating multiple analytical skills

/** Legacy alias retained for backwards compatibility */
export type CoreGameMode = GameMechanicFamily | 'quick-practice';

export interface GameDefinition {
  id: string;                          // e.g., "g1-1"
  unitNumber: number;                  // 1 through 10
  title: string;
  description: string;
  targetConcept: string;
  mechanicFamily: GameMechanicFamily;
  gameMode?: CoreGameMode;             // Backwards-compatible alias
  difficulty: DifficultyTier;
  estimatedMinutes: number;
  skillsDeveloped: string[];
  coreProcesses: CambridgeCoreProcess[];
  supportedQuestionTypes: SupportedQuestionType[];
  status: ContentLifecycleStatus;
  
  // Content and configuration payload
  config: {
    targetItemCount?: number;          // Learning-objective driven (NOT fixed 5-10)
    allowRetryOnMistake: boolean;      // Formative practice setting
    showFeedbackImmediately: boolean;  // Always true for practice, configurable for challenge
    enableTimer: boolean;              // Default false; speed must never dominate thinking
    timerSecondsPerItem?: number;      // Only if speed is an explicit teacher-enabled option
    passAccuracyThreshold: number;     // e.g. 70% to clear challenge
    supportsTeamMode: boolean;         // True if suitable for classroom groups
    scoringPolicyId?: string;          // Tailored scoring policy for this game
  };
}

// ----------------------------------------------------------------------------
// 5. MODULAR SCORING POLICIES & TRANSPARENT BREAKDOWNS
// ----------------------------------------------------------------------------

/**
 * Evaluated Scoring Dimensions
 */
export type ScoringDimension =
  | 'correctness'
  | 'partial-correctness'
  | 'cognitive-difficulty'
  | 'reasoning-quality'
  | 'evidence-quality'
  | 'construction-quality'
  | 'completion'
  | 'hint-penalty'
  | 'streak-bonus'
  | 'time-bonus';

/**
 * Scoring Policy Interface
 * Different question types and game mechanics define which dimensions apply.
 * Never force reasoning or streak bonuses where they are pedagogically irrelevant.
 */
export interface ScoringPolicy {
  id: string;
  name: string;
  description: string;
  activeDimensions: ScoringDimension[];
  useCognitiveTierMultiplier?: boolean;
  reasoningBonusMultiplier?: number;   // e.g., 0.25 (0 if inactive)
  maxStreakBonusMultiplier?: number;   // e.g., 0.20 (0 if inactive, controlled cap)
  hintPenaltyMultiplier?: number;      // e.g., 0.20 (0 if inactive, retains >= 80% marks)
  timeBonusMax?: number;               // 0 by default; speed is strictly secondary
}

export interface ScoreBreakdown {
  policyId: string;
  basePoints: number;                  // Tier 1=100, Tier 2=150, Tier 3=200, Tier 4=250, Tier 5=300
  accuracyModifier: number;            // 0.0 to 1.0 (or partial correctness)
  
  // Dimension breakdowns (only present/positive if active in policy)
  difficultyTier?: DifficultyTier;
  reasoningBonus?: number;             // Extra marks for choosing correct rationale / warrant
  evidenceBonus?: number;              // Extra marks for optimal evidence selection
  constructionBonus?: number;         // Extra marks for valid argument/matrix assembly
  streakBonus?: number;                // Controlled streak bonus (capped at max 20% of base)
  timeBonus?: number;                  // 0 unless timer mode explicitly turned on
  hintPenalty?: number;                // Modest deduction for using scaffold hints
  
  finalItemScore: number;
  appliedDimensions: ScoringDimension[]; // Transparent audit trail of dimensions evaluated
}

export interface PlaythroughScoreResult {
  rawScore: number;
  maxPossibleScore: number;
  accuracyPercentage: number;
  itemsAnswered: number;
  itemsCorrect: number;
  breakdown: ScoreBreakdown[];
  masteryLevelReached: 'Novice' | 'Developing' | 'Proficient' | 'Advanced';
}

// ----------------------------------------------------------------------------
// 6. SESSION & LOCAL PERSISTENCE STATE MODEL
// ----------------------------------------------------------------------------

export type SessionLifecycleStatus =
  | 'INITIALIZING'
  | 'INTRO'
  | 'ACTIVE'
  | 'DECISION_PENDING'
  | 'FEEDBACK_ACTIVE'
  | 'PAUSED'
  | 'COMPLETED'
  | 'ABORTED';

export interface PlayerIdentity {
  mode: 'individual' | 'team';
  nickname: string;                   // "Maya", "Group B", "Team Garuda"
  avatarSeed?: string;                // Visual identifier without personal tracking
  teamMembers?: string[];             // If classroom group
}

export interface StudentItemResponse {
  questionId: string;
  questionType: SupportedQuestionType;
  submittedAnswer: string | string[] | Record<string, string>;
  isCorrect: boolean;
  scoreEarned: number;
  timeSpentSeconds: number;
  misconceptionTriggered?: string;
  timestamp: string;
}

export interface ActiveGameSession {
  sessionId: string;                   // UUID / Timestamp key
  unitNumber: number;
  gameId: string;
  gameMode: CoreGameMode;
  randomSeed: number;                 // Deterministic PRNG seed for reproducible match
  player: PlayerIdentity;
  status: SessionLifecycleStatus;
  currentItemIndex: number;
  totalItems: number;
  
  // Progress & Performance
  score: number;
  currentStreak: number;
  maxStreak: number;
  responses: StudentItemResponse[];
  mistakesByMisconceptionId: Record<string, number>;
  
  // Timestamps
  startedAt: string;
  lastUpdatedAt: string;
  completedAt?: string;
}

// ----------------------------------------------------------------------------
// 7. LOCAL & DETERMINISTIC CLASSROOM LEADERBOARD MODEL
// ----------------------------------------------------------------------------

/**
 * Leaderboard Record
 * NOTE: Stored exclusively on local client device (localStorage).
 * Cross-device realtime leaderboard synchronization is NOT supported in zero-backend architecture.
 */
export interface LeaderboardRecord {
  id: string;
  gameId: string;
  unitNumber: number;
  playerNickname: string;
  isTeam: boolean;
  score: number;
  accuracy: number;
  difficultyTier: DifficultyTier;
  completedAt: string;
  durationSeconds: number;
}

export interface TeacherClassroomAnalytics {
  unitNumber: number;
  totalSessionsPlayed: number;
  averageAccuracy: number;
  hardestQuestionIds: { questionId: string; errorRate: number }[];
  prevalentMisconceptions: { misconceptionId: string; count: number }[];
  cognitiveDemandDistribution: Record<CognitiveDemand, number>;
}

