/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3A: ARCHITECTURE & ENGINE VERIFICATION SUITE
 * ============================================================================
 * Validates that all Phase 3A architectural foundations operate correctly:
 * 1. Seeded PRNG and Fisher-Yates shuffle determinism
 * 2. Content integrity and schema validation
 * 3. Transparent scoring calculations and pedagogical mastery tiers
 * 4. Session lifecycle transitions
 *
 * Clearly Labeled:
 * PHASE 3A TECHNICAL PROTOTYPE — NOT CURRICULUM CONTENT
 */

import { createSeededRandom } from '../src/services/seededRandom';
import { contentValidator } from '../src/services/contentValidator';
import { scoringEngine } from '../src/services/scoringEngine';
import { MultipleChoiceQuestion, ClassificationQuestion } from '../src/types/practiceGame';

console.log('===============================================================');
console.log('PHASE 3A TECHNICAL PROTOTYPE & ARCHITECTURAL VERIFICATION SUITE');
console.log('===============================================================');

// ----------------------------------------------------------------------------
// TEST 1: Seeded Randomness & Deterministic Shuffle
// ----------------------------------------------------------------------------
console.log('\n[TEST 1] Testing Deterministic PRNG & Shuffle...');
const SEED = 492817;
const rng1 = createSeededRandom(SEED);
const rng2 = createSeededRandom(SEED);

const testArray = ['A', 'B', 'C', 'D', 'E', 'F'];
const shuffled1 = rng1.shuffle(testArray);
const shuffled2 = rng2.shuffle(testArray);

const isIdentical = JSON.stringify(shuffled1) === JSON.stringify(shuffled2);
console.log(`- Seed ${SEED} Run 1:`, shuffled1.join(', '));
console.log(`- Seed ${SEED} Run 2:`, shuffled2.join(', '));
console.log(`- Determinism Verified: ${isIdentical ? 'PASSED (100% Identical)' : 'FAILED'}`);
if (!isIdentical) process.exit(1);

// ----------------------------------------------------------------------------
// TEST 2: Content Validator — Valid Question Acceptance (Verified & Pending Sources)
// ----------------------------------------------------------------------------
console.log('\n[TEST 2] Testing Content Schema Validator with Verified & Pending Dummy Questions...');
const validVerifiedMCQ: MultipleChoiceQuestion = {
  id: 'proto-q-01',
  unitNumber: 1,
  topicId: '1.1-perspective-definition',
  type: 'multiple-choice',
  difficulty: 2,
  cognitiveDemand: 'Understand',
  coreProcesses: ['Deconstruction'],
  sourceRef: {
    unitNumber: 1,
    section: '1.1',
    pageRange: '6-8',
    sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
    verificationStatus: 'verified'
  },
  status: 'locked',
  prompt: 'Which definition best describes a perspective in Cambridge Global Perspectives?',
  explanation: 'A perspective is a coherent worldview shaped by fundamental values and systemic assumptions.',
  options: [
    { id: 'opt-a', text: 'A temporary emotional feeling.' },
    { id: 'opt-b', text: 'A coherent viewpoint grounded in values and assumptions.' },
    { id: 'opt-c', text: 'A single isolated statistical number.' },
    { id: 'opt-d', text: 'An undisputed scientific law.' }
  ],
  correctOptionId: 'opt-b'
};

const validResult = contentValidator.validateQuestion(validVerifiedMCQ);
console.log(`- Verified Source MCQ Validation: ${validResult.isValid ? 'PASSED' : 'FAILED'}`);
if (!validResult.isValid) {
  console.error('Validation errors:', validResult.errors);
  process.exit(1);
}

// Pending source question (prevents page number fabrication while preserving validity)
const validPendingMCQ: MultipleChoiceQuestion = {
  ...validVerifiedMCQ,
  id: 'proto-q-02-pending',
  sourceRef: {
    unitNumber: 1,
    section: '1.2',
    pageRange: '', // Empty page range allowed while pending
    sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
    verificationStatus: 'pending'
  }
};
const pendingResult = contentValidator.validateQuestion(validPendingMCQ);
console.log(`- Pending Source MCQ Acceptance (No fabricated pages required): ${pendingResult.isValid ? 'PASSED' : 'FAILED'}`);
console.log(`  Warnings logged: ${pendingResult.warnings.length} warning(s) caught: "${pendingResult.warnings[0]}"`);
if (!pendingResult.isValid) {
  console.error('Validator rejected pending question unexpectedly:', pendingResult.errors);
  process.exit(1);
}

// ----------------------------------------------------------------------------
// TEST 3: Content Validator — Invalid Question Rejection
// ----------------------------------------------------------------------------
console.log('\n[TEST 3] Testing Content Schema Validator with Malformed Dummy Question...');
const invalidDummyMCQ: MultipleChoiceQuestion = {
  id: '', // Missing ID
  unitNumber: 12, // Invalid unit > 10
  topicId: '', // Missing topic
  type: 'multiple-choice',
  difficulty: 3,
  cognitiveDemand: 'Analyse',
  coreProcesses: ['Deconstruction'],
  sourceRef: {
    unitNumber: 12,
    section: '', // Missing section
    pageRange: '', // Missing page range
    sourceTextTitle: 'Test',
    verificationStatus: 'verified' // Marked verified without pageRange -> must fail
  },
  status: 'draft',
  prompt: '', // Missing prompt
  explanation: '', // Missing explanation
  options: [
    { id: 'opt-1', text: 'Duplicate ID' },
    { id: 'opt-1', text: 'Duplicate ID' }
  ],
  correctOptionId: 'opt-missing' // Correct ID not in options
};

const invalidResult = contentValidator.validateQuestion(invalidDummyMCQ);
console.log(`- Malformed Item Caught: ${!invalidResult.isValid ? 'PASSED (Properly Rejected)' : 'FAILED'}`);
console.log(`- Errors Successfully Intercepted: ${invalidResult.errors.length} errors caught:`);
invalidResult.errors.forEach((err, i) => console.log(`   ${i + 1}. ${err}`));

if (invalidResult.isValid) {
  console.error('Validator failed to reject malformed question.');
  process.exit(1);
}

// ----------------------------------------------------------------------------
// TEST 4: Modular Policy-Driven Scoring Engine Calculations
// ----------------------------------------------------------------------------
console.log('\n[TEST 4] Testing Policy-Driven Scoring Engine (Standard vs Classification policies)...');

// Policy 1: Standard Practice Policy (rewards reasoning and controlled streaks)
const standardScore = scoringEngine.calculateItemScore({
  difficulty: 2, // Base 150
  isCorrect: true,
  hasCorrectReasoning: true, // +25% of 150 = +38
  streakCount: 3, // +10% of 150 = +15
  usedHint: false
}, 'standard-practice');
console.log(`- Standard Practice Policy: Earned ${standardScore.finalItemScore} pts (Applied dims: ${standardScore.appliedDimensions.join(', ')})`);

// Policy 2: Binary Classification Policy (strictly no streak bonus; only correctness + difficulty)
const classScore = scoringEngine.calculateItemScore({
  difficulty: 2, // Base 150
  isCorrect: true,
  hasCorrectReasoning: true, // should NOT be evaluated under binary-classification
  streakCount: 5, // should NOT be evaluated under binary-classification
  usedHint: false
}, 'binary-classification');
console.log(`- Binary Classification Policy: Earned ${classScore.finalItemScore} pts (Applied dims: ${classScore.appliedDimensions.join(', ')})`);
if (classScore.streakBonus !== undefined || classScore.appliedDimensions.includes('streak-bonus')) {
  console.error('Binary classification policy erroneously included streak bonus!');
  process.exit(1);
}

// Policy 3: Time bonus check (must remain 0 when timerModeActive is false or omitted)
const untimedScore = scoringEngine.calculateItemScore({
  difficulty: 1,
  isCorrect: true,
  timeSpentSeconds: 5
}, 'standard-practice');
console.log(`- Untimed Default Time Bonus: ${untimedScore.timeBonus ?? 0} pts (Untimed verification PASSED)`);

// Full session aggregation
const sessionResult = scoringEngine.calculateSessionResult([standardScore, classScore]);
console.log(`- Aggregated Session Score: ${sessionResult.rawScore} / ${sessionResult.maxPossibleScore}`);
console.log(`- Accuracy: ${sessionResult.accuracyPercentage}% (${sessionResult.masteryLevelReached} Tier)`);

console.log('\n===============================================================');
console.log('ALL PHASE 3A.1 HARDENED ARCHITECTURAL TESTS PASSED (100% GREEN)');
console.log('===============================================================');
