/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3A: CONTENT INTEGRITY & SCHEMA VALIDATION ENGINE
 * ============================================================================
 * Validates practice and game content before admission into the live registry.
 * Ensures:
 * 1. Complete schema compliance (no empty or undefined fields).
 * 2. Strict traceability to textbook sections (Unit, Section, Page).
 * 3. Pedagogical clarity (non-empty educational explanations).
 * 4. Distinct option IDs and plausible distractors without duplicates.
 * 5. CEFR B1 language accessibility (prompt length bounds).
 */

import {
  PracticeGameQuestion,
  MultipleChoiceQuestion,
  ClassificationQuestion,
  MatchingQuestion,
  SequencingQuestion,
  ScenarioDecisionQuestion
} from '../types/practiceGame';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export const contentValidator = {
  /**
   * Validates a generic practice or game question item.
   */
  validateQuestion(question: PracticeGameQuestion): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // 1. Fundamental Identity & Routing
    if (!question.id || question.id.trim().length === 0) {
      errors.push('Question ID is missing or empty.');
    }
    if (question.unitNumber < 1 || question.unitNumber > 10) {
      errors.push(`Invalid unit number (${question.unitNumber}). Must be between 1 and 10.`);
    }
    if (!question.topicId || question.topicId.trim().length === 0) {
      errors.push(`Question [${question.id || 'unknown'}]: topicId is missing.`);
    }

    // 2. Source Traceability Rule
    if (!question.sourceRef) {
      errors.push(`Question [${question.id}]: sourceRef is completely missing.`);
    } else {
      const isPending = question.sourceRef.verificationStatus === 'pending';
      if (isPending) {
        // Pending verification is legitimate during authoring; do not reject or force fabricated numbers
        warnings.push(
          `Question [${question.id}]: Textbook source reference is marked 'pending' verification. Do not release to locked status without verified citations.`
        );
      } else {
        // Verified status requires complete section and page range
        if (!question.sourceRef.section || question.sourceRef.section.trim().length === 0) {
          errors.push(`Question [${question.id}]: Verified source requires a valid sourceRef.section.`);
        }
        if (!question.sourceRef.pageRange || question.sourceRef.pageRange.trim().length === 0) {
          errors.push(`Question [${question.id}]: Verified source requires a valid sourceRef.pageRange.`);
        }
      }
    }

    // 3. Prompt & CEFR B1 Readability (Cognitive Load Review, NOT a hard word-count cutoff)
    if (!question.prompt || question.prompt.trim().length === 0) {
      errors.push(`Question [${question.id}]: prompt text is missing.`);
    } else {
      const words = question.prompt.trim().split(/\s+/).length;
      if (words > 75) {
        warnings.push(
          `Question [${question.id}]: Prompt exceeds 75 words (${words} words). Review cognitive load to ensure accessibility for Grade 10 CEFR B1 learners.`
        );
      }
    }

    // 4. Pedagogical Feedback Requirement
    if (!question.explanation || question.explanation.trim().length === 0) {
      errors.push(`Question [${question.id}]: explanation is missing. Formative learning requires feedback.`);
    }

    // 5. Type-Specific Validation Rules
    switch (question.type) {
      case 'multiple-choice':
        this.validateMultipleChoice(question as MultipleChoiceQuestion, errors, warnings);
        break;
      case 'classification':
        this.validateClassification(question as ClassificationQuestion, errors, warnings);
        break;
      case 'matching':
        this.validateMatching(question as MatchingQuestion, errors, warnings);
        break;
      case 'sequencing':
        this.validateSequencing(question as SequencingQuestion, errors, warnings);
        break;
      case 'scenario-decision':
        this.validateScenarioDecision(question as ScenarioDecisionQuestion, errors, warnings);
        break;
      default:
        // Other types adhere to base validation
        break;
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  },

  /**
   * Multiple Choice Specific Validations
   */
  validateMultipleChoice(
    q: MultipleChoiceQuestion,
    errors: string[],
    warnings: string[]
  ): void {
    if (!q.options || q.options.length < 2) {
      errors.push(`MCQ [${q.id}]: Requires at least 2 options, found ${q.options?.length || 0}.`);
      return;
    }

    const optionIds = new Set<string>();
    const optionTexts = new Set<string>();
    let correctFound = false;

    for (const opt of q.options) {
      if (!opt.id || opt.id.trim().length === 0) {
        errors.push(`MCQ [${q.id}]: Contains option with missing ID.`);
      } else if (optionIds.has(opt.id)) {
        errors.push(`MCQ [${q.id}]: Duplicate option ID detected: "${opt.id}".`);
      }
      optionIds.add(opt.id);

      if (!opt.text || opt.text.trim().length === 0) {
        errors.push(`MCQ [${q.id}]: Option "${opt.id}" has empty text.`);
      } else if (optionTexts.has(opt.text.trim().toLowerCase())) {
        warnings.push(`MCQ [${q.id}]: Duplicate option text detected: "${opt.text}".`);
      }
      optionTexts.add(opt.text.trim().toLowerCase());

      if (opt.id === q.correctOptionId) {
        correctFound = true;
      }
    }

    if (!correctFound) {
      errors.push(`MCQ [${q.id}]: correctOptionId "${q.correctOptionId}" does not match any existing option.`);
    }
  },

  /**
   * Classification Specific Validations
   */
  validateClassification(
    q: ClassificationQuestion,
    errors: string[],
    _warnings: string[]
  ): void {
    if (!q.categories || q.categories.length < 2) {
      errors.push(`Classification [${q.id}]: Requires at least 2 categories.`);
      return;
    }
    if (!q.items || q.items.length < 2) {
      errors.push(`Classification [${q.id}]: Requires at least 2 items to sort.`);
      return;
    }

    const categoryIds = new Set(q.categories.map((c) => c.id));
    for (const item of q.items) {
      if (!categoryIds.has(item.correctCategoryId)) {
        errors.push(
          `Classification [${q.id}]: Item "${item.id}" assigns invalid categoryId "${item.correctCategoryId}".`
        );
      }
    }
  },

  /**
   * Matching Specific Validations
   */
  validateMatching(
    q: MatchingQuestion,
    errors: string[],
    _warnings: string[]
  ): void {
    if (!q.pairs || q.pairs.length < 2) {
      errors.push(`Matching [${q.id}]: Requires at least 2 pairs to match.`);
    }
  },

  /**
   * Sequencing Specific Validations
   */
  validateSequencing(
    q: SequencingQuestion,
    errors: string[],
    _warnings: string[]
  ): void {
    if (!q.steps || q.steps.length < 3) {
      errors.push(`Sequencing [${q.id}]: Requires at least 3 steps to form a meaningful sequence.`);
      return;
    }
    const orderIndices = q.steps.map((s) => s.correctOrderIndex).sort((a, b) => a - b);
    for (let i = 0; i < orderIndices.length; i++) {
      if (orderIndices[i] !== i) {
        errors.push(
          `Sequencing [${q.id}]: Step order indices must be sequential from 0 to ${orderIndices.length - 1}.`
        );
        break;
      }
    }
  },

  /**
   * Scenario Decision Validations
   */
  validateScenarioDecision(
    q: ScenarioDecisionQuestion,
    errors: string[],
    _warnings: string[]
  ): void {
    if (!q.choices || q.choices.length < 2) {
      errors.push(`Scenario Decision [${q.id}]: Requires at least 2 decision choices.`);
    }
  },

  /**
   * Batch validator for curriculum content sets.
   */
  validateBatch(questions: PracticeGameQuestion[]): {
    total: number;
    validCount: number;
    invalidCount: number;
    results: Record<string, ValidationResult>;
  } {
    const results: Record<string, ValidationResult> = {};
    let validCount = 0;
    let invalidCount = 0;

    for (const q of questions) {
      const res = this.validateQuestion(q);
      results[q.id] = res;
      if (res.isValid) {
        validCount++;
      } else {
        invalidCount++;
      }
    }

    return {
      total: questions.length,
      validCount,
      invalidCount,
      results
    };
  }
};
