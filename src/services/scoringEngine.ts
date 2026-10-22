/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3A.1: HARDENED MODULAR SCORING ENGINE SPECIFICATION & IMPLEMENTATION
 * ============================================================================
 * Guiding Philosophy:
 * "Meaningful thinking over fast clicking."
 *
 * Scoring Principles:
 * 1. Policy-Driven: Scoring rules adapt to the specific question type and game mechanic.
 *    No single formula is forced onto every activity (e.g., classification vs. synthesis).
 * 2. Deep analytical reflection is rewarded; speed is never an obligatory requirement (timeBonus = 0 by default).
 * 3. Higher cognitive demand (Evaluate, Construct) yields higher base points than recall.
 * 4. Justification and evidence selection receive explicit reasoning/evidence bonuses ONLY when active in policy.
 * 5. Controlled streaks provide positive reinforcement without distorting academic accuracy.
 * 6. Transparent ScoreBreakdown lists only the dimensions actually evaluated for that item.
 */

import {
  DifficultyTier,
  ScoreBreakdown,
  PlaythroughScoreResult,
  ScoringPolicy,
  ScoringDimension
} from '../types/practiceGame';

export const BASE_POINTS_BY_TIER: Record<DifficultyTier, number> = {
  1: 100, // Foundation (Understand)
  2: 150, // Application (Apply)
  3: 200, // Analysis (Analyse)
  4: 250, // Evaluation (Evaluate)
  5: 300  // Challenge (Construct / Synthesize)
};

// ----------------------------------------------------------------------------
// PRE-CONFIGURED SCORING POLICIES (Question / Game Specific)
// ----------------------------------------------------------------------------

/** Standard Practice Policy (Default for formative checks) */
export const STANDARD_PRACTICE_POLICY: ScoringPolicy = {
  id: 'standard-practice',
  name: 'Standard Practice Policy',
  description: 'Balances correctness, cognitive difficulty, and controlled streaks with hint scaffold retention.',
  activeDimensions: ['correctness', 'cognitive-difficulty', 'reasoning-quality', 'streak-bonus', 'hint-penalty'],
  useCognitiveTierMultiplier: true,
  reasoningBonusMultiplier: 0.25,
  maxStreakBonusMultiplier: 0.20,
  hintPenaltyMultiplier: 0.20,
  timeBonusMax: 0
};

/** Binary Classification Policy (Lens & Level sorting) */
export const BINARY_CLASSIFICATION_POLICY: ScoringPolicy = {
  id: 'binary-classification',
  name: 'Classification & Sorting Policy',
  description: 'Pure focus on conceptual lens/level accuracy and cognitive complexity; no streak distortion.',
  activeDimensions: ['correctness', 'cognitive-difficulty'],
  useCognitiveTierMultiplier: true,
  reasoningBonusMultiplier: 0,
  maxStreakBonusMultiplier: 0,
  hintPenaltyMultiplier: 0.15,
  timeBonusMax: 0
};

/** Evidence & Source Evaluation Policy (CRAAP / SIFT Fact-Checking) */
export const EVIDENCE_EVALUATION_POLICY: ScoringPolicy = {
  id: 'evidence-evaluation',
  name: 'Evidence & Source Evaluation Policy',
  description: 'Rewards evaluating source credibility, identifying bias, and selecting optimal evidentiary backing.',
  activeDimensions: ['correctness', 'cognitive-difficulty', 'reasoning-quality', 'evidence-quality', 'hint-penalty'],
  useCognitiveTierMultiplier: true,
  reasoningBonusMultiplier: 0.30,
  maxStreakBonusMultiplier: 0.10,
  hintPenaltyMultiplier: 0.20,
  timeBonusMax: 0
};

/** Sequence & Process Workflow Policy (8-step research process) */
export const SEQUENCE_FLOW_POLICY: ScoringPolicy = {
  id: 'sequence-flow',
  name: 'Process Sequencing Policy',
  description: 'Rewards correct step ordering, partial sequence alignment, and full cycle completion.',
  activeDimensions: ['partial-correctness', 'cognitive-difficulty', 'completion'],
  useCognitiveTierMultiplier: true,
  reasoningBonusMultiplier: 0,
  maxStreakBonusMultiplier: 0,
  hintPenaltyMultiplier: 0.15,
  timeBonusMax: 0
};

/** Scenario Decision Policy (Stakeholder dilemmas & multi-lens trade-offs) */
export const SCENARIO_DECISION_POLICY: ScoringPolicy = {
  id: 'scenario-decision',
  name: 'Stakeholder Scenario Policy',
  description: 'Evaluates multi-lens trade-offs, constructive compromise, and stakeholder empathy over binary correct/wrong.',
  activeDimensions: ['reasoning-quality', 'construction-quality', 'cognitive-difficulty'],
  useCognitiveTierMultiplier: true,
  reasoningBonusMultiplier: 0.35,
  maxStreakBonusMultiplier: 0,
  hintPenaltyMultiplier: 0,
  timeBonusMax: 0
};

/** Capstone Synthesis Policy (Toulmin argument & Conclusion matrix) */
export const CAPSTONE_SYNTHESIS_POLICY: ScoringPolicy = {
  id: 'capstone-synthesis',
  name: 'Capstone Synthesis Policy',
  description: 'Full multi-dimensional evaluation for Grade 10 synthesis, evidence integration, and counterarguments.',
  activeDimensions: ['correctness', 'cognitive-difficulty', 'reasoning-quality', 'evidence-quality', 'construction-quality'],
  useCognitiveTierMultiplier: true,
  reasoningBonusMultiplier: 0.25,
  maxStreakBonusMultiplier: 0.10,
  hintPenaltyMultiplier: 0.20,
  timeBonusMax: 0
};

export const BUILTIN_SCORING_POLICIES: Record<string, ScoringPolicy> = {
  'standard-practice': STANDARD_PRACTICE_POLICY,
  'binary-classification': BINARY_CLASSIFICATION_POLICY,
  'evidence-evaluation': EVIDENCE_EVALUATION_POLICY,
  'sequence-flow': SEQUENCE_FLOW_POLICY,
  'scenario-decision': SCENARIO_DECISION_POLICY,
  'capstone-synthesis': CAPSTONE_SYNTHESIS_POLICY
};

// ----------------------------------------------------------------------------
// INPUT SPECIFICATION
// ----------------------------------------------------------------------------

export interface CalculateItemScoreInput {
  difficulty: DifficultyTier;
  isCorrect: boolean;
  partialAccuracy?: number;          // 0.0 to 1.0 (for partial multi-select, classification, or sequencing)
  hasCorrectReasoning?: boolean;      // Student provided valid justification/warrant
  hasOptimalEvidence?: boolean;       // Student selected highest-credibility evidence
  constructionQualityScore?: number;  // 0.0 to 1.0 for synthesized argument quality
  isCompleted?: boolean;             // For workflow/sequence completion
  streakCount?: number;              // Current consecutive correct streak
  usedHint?: boolean;                // Whether student requested a scaffold hint
  timeSpentSeconds?: number;
  timerModeActive?: boolean;
}

export const scoringEngine = {
  /**
   * Retrieves a scoring policy by ID, falling back to STANDARD_PRACTICE_POLICY.
   */
  getPolicy(policyIdOrPolicy?: string | ScoringPolicy): ScoringPolicy {
    if (!policyIdOrPolicy) return STANDARD_PRACTICE_POLICY;
    if (typeof policyIdOrPolicy === 'object') return policyIdOrPolicy;
    return BUILTIN_SCORING_POLICIES[policyIdOrPolicy] || STANDARD_PRACTICE_POLICY;
  },

  /**
   * Calculates transparent score breakdown for a single item governed by a ScoringPolicy.
   */
  calculateItemScore(
    input: CalculateItemScoreInput,
    policyOrId?: string | ScoringPolicy
  ): ScoreBreakdown {
    const policy = this.getPolicy(policyOrId);
    const active = new Set<ScoringDimension>(policy.activeDimensions);
    const appliedDimensions: ScoringDimension[] = [];

    // 1. Base points by difficulty tier
    const basePoints = policy.useCognitiveTierMultiplier !== false
      ? BASE_POINTS_BY_TIER[input.difficulty] || 100
      : 100;
    appliedDimensions.push('cognitive-difficulty');

    // 2. Accuracy modifier
    let accuracyModifier = 0;
    if (input.isCorrect) {
      accuracyModifier = 1.0;
      appliedDimensions.push('correctness');
    } else if (active.has('partial-correctness') && input.partialAccuracy !== undefined && input.partialAccuracy > 0) {
      accuracyModifier = Math.max(0, Math.min(1.0, input.partialAccuracy));
      appliedDimensions.push('partial-correctness');
    } else if (input.partialAccuracy !== undefined && input.partialAccuracy > 0 && !active.has('partial-correctness')) {
      // In strictly binary policies without partial correctness, incorrect = 0
      accuracyModifier = 0;
    }

    // If completely incorrect and no construction/reasoning dimension evaluated independently
    if (accuracyModifier === 0 && !active.has('construction-quality') && !active.has('reasoning-quality')) {
      return {
        policyId: policy.id,
        basePoints,
        accuracyModifier: 0,
        difficultyTier: input.difficulty,
        finalItemScore: 0,
        appliedDimensions
      };
    }

    // 3. Reasoning Bonus (ONLY if active in policy)
    let reasoningBonus: number | undefined;
    if (active.has('reasoning-quality') && input.hasCorrectReasoning) {
      const mult = policy.reasoningBonusMultiplier ?? 0.25;
      reasoningBonus = Math.round(basePoints * mult);
      appliedDimensions.push('reasoning-quality');
    }

    // 4. Evidence Quality Bonus (ONLY if active in policy)
    let evidenceBonus: number | undefined;
    if (active.has('evidence-quality') && input.hasOptimalEvidence) {
      evidenceBonus = Math.round(basePoints * 0.20);
      appliedDimensions.push('evidence-quality');
    }

    // 5. Construction Quality Bonus (ONLY if active in policy)
    let constructionBonus: number | undefined;
    if (active.has('construction-quality') && input.constructionQualityScore && input.constructionQualityScore > 0) {
      constructionBonus = Math.round(basePoints * Math.min(1.0, input.constructionQualityScore) * 0.30);
      appliedDimensions.push('construction-quality');
    }

    // 6. Completion Bonus (ONLY if active in policy)
    if (active.has('completion') && input.isCompleted) {
      appliedDimensions.push('completion');
    }

    // 7. Controlled Streak Bonus (ONLY if active in policy)
    let streakBonus: number | undefined;
    if (active.has('streak-bonus') && input.streakCount && input.streakCount > 1) {
      const maxMult = policy.maxStreakBonusMultiplier ?? 0.20;
      const streakStep = Math.min(input.streakCount - 1, 4); // Max 4 steps
      const bonusRate = Math.min(streakStep * 0.05, maxMult);
      streakBonus = Math.round(basePoints * bonusRate);
      appliedDimensions.push('streak-bonus');
    }

    // 8. Hint Deduction (ONLY if active in policy)
    let hintPenalty: number | undefined;
    if (active.has('hint-penalty') && input.usedHint) {
      const penaltyMult = policy.hintPenaltyMultiplier ?? 0.20;
      hintPenalty = Math.round(basePoints * penaltyMult);
      appliedDimensions.push('hint-penalty');
    }

    // 9. Time Bonus (Strictly secondary; 0 by default unless timer mode explicitly turned on)
    let timeBonus: number | undefined;
    if (
      active.has('time-bonus') &&
      policy.timeBonusMax &&
      policy.timeBonusMax > 0 &&
      input.timerModeActive &&
      input.timeSpentSeconds &&
      input.timeSpentSeconds < 15
    ) {
      timeBonus = policy.timeBonusMax;
      appliedDimensions.push('time-bonus');
    }

    // Calculate final item score
    const earnedBase = Math.round(basePoints * accuracyModifier);
    const bonuses = (reasoningBonus || 0) + (evidenceBonus || 0) + (constructionBonus || 0) + (streakBonus || 0) + (timeBonus || 0);
    const deductions = hintPenalty || 0;
    const finalItemScore = Math.max(0, earnedBase + bonuses - deductions);

    return {
      policyId: policy.id,
      basePoints,
      accuracyModifier,
      difficultyTier: input.difficulty,
      reasoningBonus,
      evidenceBonus,
      constructionBonus,
      streakBonus,
      timeBonus,
      hintPenalty,
      finalItemScore,
      appliedDimensions
    };
  },

  /**
   * Aggregates item breakdowns into a comprehensive session result.
   */
  calculateSessionResult(breakdowns: ScoreBreakdown[]): PlaythroughScoreResult {
    const rawScore = breakdowns.reduce((sum, b) => sum + b.finalItemScore, 0);
    const maxPossibleScore = breakdowns.reduce((sum, b) => {
      // Max possible is base points + any potential policy bonuses
      const potentialReasoning = b.reasoningBonus !== undefined || b.appliedDimensions.includes('reasoning-quality')
        ? Math.round(b.basePoints * 0.25)
        : 0;
      return sum + b.basePoints + potentialReasoning;
    }, 0);

    const itemsAnswered = breakdowns.length;
    const itemsCorrect = breakdowns.filter((b) => b.accuracyModifier >= 0.99).length;
    const accuracyPercentage = itemsAnswered > 0
      ? Math.round((itemsCorrect / itemsAnswered) * 100)
      : 0;

    // Determine pedagogical mastery level based on academic accuracy (not speed)
    let masteryLevelReached: 'Novice' | 'Developing' | 'Proficient' | 'Advanced' = 'Novice';
    if (accuracyPercentage >= 90) {
      masteryLevelReached = 'Advanced';
    } else if (accuracyPercentage >= 70) {
      masteryLevelReached = 'Proficient';
    } else if (accuracyPercentage >= 50) {
      masteryLevelReached = 'Developing';
    }

    return {
      rawScore,
      maxPossibleScore,
      accuracyPercentage,
      itemsAnswered,
      itemsCorrect,
      breakdown: breakdowns,
      masteryLevelReached
    };
  }
};

