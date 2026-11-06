import { UNIT_1_PRACTICE_QUESTIONS } from '../src/data/practice/unit1Practice';
import { UNIT_2_PRACTICE_QUESTIONS } from '../src/data/practice/unit2Practice';
import { UNIT_3_PRACTICE_QUESTIONS } from '../src/data/practice/unit3Practice';
import { UNIT_4_PRACTICE_QUESTIONS } from '../src/data/practice/unit4Practice';
import { UNIT_5_PRACTICE_QUESTIONS } from '../src/data/practice/unit5Practice';
import { UNIT_6_PRACTICE_QUESTIONS } from '../src/data/practice/unit6Practice';
import { UNIT_7_PRACTICE_QUESTIONS } from '../src/data/practice/unit7Practice';
import { UNIT_8_PRACTICE_QUESTIONS } from '../src/data/practice/unit8Practice';
import { UNIT_9_PRACTICE_QUESTIONS } from '../src/data/practice/unit9Practice';
import { UNIT_10_PRACTICE_QUESTIONS } from '../src/data/practice/unit10Practice';

import { STAGE_1_ITEMS, STAGE_2_ITEMS, STAGE_3_ITEMS, STAGE_4_ITEMS } from '../src/data/games/burgerBlissData';
import { UNIT_1_CASE_CHALLENGES } from '../src/data/games/unit1Game';
import { UNIT_2_RESEARCH_CASES } from '../src/data/games/unit2Game';
import { UNIT_3_CAPSTONE_DATA } from '../src/data/games/unit3CapstoneData';
import { UNIT_4_CAPSTONE_DATA } from '../src/data/games/unit4CapstoneData';
import { UNIT_5_CAPSTONE_DATA } from '../src/data/games/unit5CapstoneData';
import { UNIT_6_CAPSTONE_DATA } from '../src/data/games/unit6CapstoneData';
import { UNIT_7_CAPSTONE_DATA } from '../src/data/games/unit7CapstoneData';
import { UNIT_8_CAPSTONE_DATA } from '../src/data/games/unit8CapstoneData';
import { UNIT_9_CAPSTONE_DATA } from '../src/data/games/unit9CapstoneData';
import { UNIT_10_CAPSTONE_DATA } from '../src/data/games/unit10CapstoneData';

import { G2_2_CHALLENGES } from '../src/data/games/unit2MicroGamesData';
import { G3_1_CHALLENGES, G3_2_CHALLENGES, G3_3_CHALLENGES } from '../src/data/games/unit3MicroGamesData';
import { G4_3_CHALLENGES } from '../src/data/games/unit4MicroGamesData';
import { G5_2_CHALLENGES, G5_3_CHALLENGES } from '../src/data/games/unit5MicroGamesData';
import { G6_1_CHALLENGES, G6_2_CHALLENGES, G6_3_CHALLENGES } from '../src/data/games/unit6MicroGamesData';
import { G7_1_CHALLENGES, G7_2_CHALLENGES, G7_3_CHALLENGES } from '../src/data/games/unit7MicroGamesData';
import { G8_2_CHALLENGES, G8_3_CHALLENGES } from '../src/data/games/unit8MicroGamesData';
import { G9_2_CHALLENGES, G9_3_CHALLENGES } from '../src/data/games/unit9MicroGamesData';
import { G10_1_CHALLENGES, G10_2_CHALLENGES } from '../src/data/games/unit10MicroGamesData';

interface AuditedItem {
  id: string;
  dataset: string;
  unit: number;
  numChoices: number;
  correctIndex: number;
  choiceLengths: number[];
  choiceWords: number[];
  correctLength: number;
  correctWords: number;
  avgDistractorLength: number;
  avgDistractorWords: number;
  isLongest: boolean;
  isTiedLongest: boolean;
  isTop2Longest: boolean;
  rank: number; // 1 = longest, 2 = 2nd longest, etc.
  ratioToAvgDistractor: number;
}

function normalizeText(text: string): string {
  if (!text) return '';
  return text.trim().replace(/\s+/g, ' ');
}

function analyzeItem(
  id: string,
  dataset: string,
  unit: number,
  choices: string[],
  correctIndex: number
): AuditedItem {
  const normChoices = choices.map(normalizeText);
  const choiceLengths = normChoices.map((c) => c.length);
  const choiceWords = normChoices.map((c) => (c ? c.split(/\s+/).length : 0));

  const correctLength = choiceLengths[correctIndex];
  const correctWords = choiceWords[correctIndex];

  const distractorLengths = choiceLengths.filter((_, i) => i !== correctIndex);
  const distractorWords = choiceWords.filter((_, i) => i !== correctIndex);

  const avgDistractorLength = distractorLengths.reduce((a, b) => a + b, 0) / (distractorLengths.length || 1);
  const avgDistractorWords = distractorWords.reduce((a, b) => a + b, 0) / (distractorWords.length || 1);

  // Compute rank of correct choice: 1 = longest, etc.
  // Handle ties: if length equal, they share rank
  const sortedLengths = [...choiceLengths].sort((a, b) => b - a);
  const maxLen = sortedLengths[0];
  const isTiedLongest = choiceLengths.filter((l) => l === maxLen).length > 1 && correctLength === maxLen;
  const isLongest = correctLength === maxLen && !isTiedLongest;

  const rank = sortedLengths.indexOf(correctLength) + 1;
  const isTop2Longest = rank <= 2;

  const ratioToAvgDistractor = avgDistractorLength > 0 ? correctLength / avgDistractorLength : 1;

  return {
    id,
    dataset,
    unit,
    numChoices: choices.length,
    correctIndex,
    choiceLengths,
    choiceWords,
    correctLength,
    correctWords,
    avgDistractorLength,
    avgDistractorWords,
    isLongest,
    isTiedLongest,
    isTop2Longest,
    rank,
    ratioToAvgDistractor
  };
}

const allAuditedItems: AuditedItem[] = [];

// 1. PRACTICE BANK (110 Qs)
const practiceSets = [
  { unit: 1, questions: UNIT_1_PRACTICE_QUESTIONS },
  { unit: 2, questions: UNIT_2_PRACTICE_QUESTIONS },
  { unit: 3, questions: UNIT_3_PRACTICE_QUESTIONS },
  { unit: 4, questions: UNIT_4_PRACTICE_QUESTIONS },
  { unit: 5, questions: UNIT_5_PRACTICE_QUESTIONS },
  { unit: 6, questions: UNIT_6_PRACTICE_QUESTIONS },
  { unit: 7, questions: UNIT_7_PRACTICE_QUESTIONS },
  { unit: 8, questions: UNIT_8_PRACTICE_QUESTIONS },
  { unit: 9, questions: UNIT_9_PRACTICE_QUESTIONS },
  { unit: 10, questions: UNIT_10_PRACTICE_QUESTIONS }
];

for (const p of practiceSets) {
  for (const q of p.questions) {
    const cIdx = q.options.findIndex((o) => o.id === q.correctAnswer);
    const choices = q.options.map((o) => o.text);
    allAuditedItems.push(analyzeItem(q.id, `Practice-U${p.unit}`, p.unit, choices, cIdx));
  }
}

// 2. BURGER BLISS (16 items)
const bbStages = [
  { stage: 1, items: STAGE_1_ITEMS },
  { stage: 2, items: STAGE_2_ITEMS },
  { stage: 3, items: STAGE_3_ITEMS },
  { stage: 4, items: STAGE_4_ITEMS }
];
for (const s of bbStages) {
  for (const it of s.items) {
    const cIdx = it.options.findIndex((o) => o.isBestChoice);
    const choices = it.options.map((o) => (o as any).text);
    allAuditedItems.push(analyzeItem(it.id, 'BurgerBliss', 1, choices, cIdx));
  }
}

// 3. CAPSTONE 1 (Unit 1 Case Challenges, 10 scored stages)
for (const cs of UNIT_1_CASE_CHALLENGES) {
  const s = cs.stages;
  // Stage 1
  let cIdx = s.stage1Comprehension.options.findIndex((o) => o.isCorrect);
  allAuditedItems.push(
    analyzeItem(`${cs.id}-s1`, `Capstone-U1`, 1, s.stage1Comprehension.options.map((o) => o.text), cIdx)
  );
  // Stage 4
  cIdx = s.stage4ConflictAnalysis.options.findIndex((o) => o.isCorrect);
  allAuditedItems.push(
    analyzeItem(`${cs.id}-s4`, `Capstone-U1`, 1, s.stage4ConflictAnalysis.options.map((o) => o.text), cIdx)
  );
  // Stage 5
  cIdx = s.stage5CommonGround.options.findIndex((o) => o.isCorrect);
  allAuditedItems.push(
    analyzeItem(`${cs.id}-s5`, `Capstone-U1`, 1, s.stage5CommonGround.options.map((o) => o.text), cIdx)
  );
  // Stage 6
  cIdx = s.stage6PolicyDecision.options.findIndex((o) => o.isOptimalBridge);
  allAuditedItems.push(
    analyzeItem(
      `${cs.id}-s6`,
      `Capstone-U1`,
      1,
      s.stage6PolicyDecision.options.map((o) => o.title + ': ' + o.description),
      cIdx
    )
  );
  // Stage 7
  cIdx = s.stage7TwistAndSynthesis.options.findIndex((o) => o.isCorrect);
  allAuditedItems.push(
    analyzeItem(`${cs.id}-s7`, `Capstone-U1`, 1, s.stage7TwistAndSynthesis.options.map((o) => o.text), cIdx)
  );
}

// 4. CAPSTONE 2 (Unit 2 Research Cases, 14 stages)
for (const rc of UNIT_2_RESEARCH_CASES) {
  for (const st of rc.stages) {
    const cIdx = st.options.findIndex((o) => o.isOptimal);
    const choices = st.options.map((o) => o.label + ': ' + o.description);
    allAuditedItems.push(analyzeItem(`${rc.id}-s${st.stageNumber}`, `Capstone-U2`, 2, choices, cIdx));
  }
}

// 5. CAPSTONES 3-10 (40 stages)
const caps = [
  UNIT_3_CAPSTONE_DATA,
  UNIT_4_CAPSTONE_DATA,
  UNIT_5_CAPSTONE_DATA,
  UNIT_6_CAPSTONE_DATA,
  UNIT_7_CAPSTONE_DATA,
  UNIT_8_CAPSTONE_DATA,
  UNIT_9_CAPSTONE_DATA,
  UNIT_10_CAPSTONE_DATA
];
for (const cap of caps) {
  for (const st of cap.stages) {
    const cIdx = st.options.findIndex((o) => o.isOptimal);
    const choices = st.options.map((o) => o.label + ': ' + o.description);
    allAuditedItems.push(analyzeItem(`${cap.id}-s${st.stageNumber}`, `Capstone-U${cap.unitNumber}`, cap.unitNumber, choices, cIdx));
  }
}

// 6. MICRO-GAMES
// G2.2
for (const c of G2_2_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isCorrect);
  allAuditedItems.push(analyzeItem(c.id, 'G2.2-Pipeline', 2, c.options.map((o) => (o as any).text || (o as any).label), cIdx));
}

// G3.1
for (const c of G3_1_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isCorrect);
  allAuditedItems.push(analyzeItem(c.id, 'G3.1-StatsSleuth', 3, c.options.map((o) => (o as any).text || (o as any).label), cIdx));
}

// G3.2
for (const c of G3_2_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.type === c.correctChart || o.isCorrect === true);
  allAuditedItems.push(analyzeItem(c.id, 'G3.2-ChartSelector', 3, c.options.map((o) => ((o as any).label || (o as any).text || '') + ': ' + ((o as any).description || (o as any).feedback || '')), cIdx));
}

// G3.3
for (const c of G3_3_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isCorrect);
  allAuditedItems.push(analyzeItem(c.id, 'G3.3-ThemeCoder', 3, c.options.map((o) => (o as any).text || (o as any).label), cIdx));
}

// G4.3
for (const c of G4_3_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isCorrect);
  allAuditedItems.push(analyzeItem(c.id, 'G4.3-ConnectingDots', 4, c.options.map((o) => (o as any).text || (o as any).label), cIdx));
}

// G5.2
for (const c of G5_2_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.strategy === c.correctStrategy);
  allAuditedItems.push(analyzeItem(c.id, 'G5.2-Etiquette', 5, c.options.map((o) => o.label + ': ' + o.description), cIdx));
}

// G5.3 Step 1 & Step 2
for (const c of G5_3_CHALLENGES) {
  // Step 1
  const cIdx1 = c.options.findIndex((o) => o.defect === c.primaryDefect);
  allAuditedItems.push(analyzeItem(`${c.id}-step1`, 'G5.3-SmartGoal-Step1', 5, c.options.map((o) => o.label + ': ' + o.description), cIdx1));
  // Step 2
  const step2Options = [c.repairedGoalOptionA, c.repairedGoalOptionB, c.repairedGoalOptionC];
  const cIdx2 = ['A', 'B', 'C'].indexOf(c.correctRepairedOption);
  allAuditedItems.push(analyzeItem(`${c.id}-step2`, 'G5.3-SmartGoal-Step2', 5, step2Options, cIdx2));
}

// G6.1 Step 1 & Step 2
for (const c of G6_1_CHALLENGES) {
  // Step 1
  const cIdx1 = c.options.findIndex((o) => o.defect === c.correctDefect);
  allAuditedItems.push(analyzeItem(`${c.id}-step1`, 'G6.1-QuestionDoctor-Step1', 6, c.options.map((o) => o.label + ': ' + o.description), cIdx1));
  // Step 2
  const step2Options = [c.prescriptionOptionA, c.prescriptionOptionB, c.prescriptionOptionC];
  const cIdx2 = ['A', 'B', 'C'].indexOf(c.correctPrescription);
  allAuditedItems.push(analyzeItem(`${c.id}-step2`, 'G6.1-QuestionDoctor-Step2', 6, step2Options, cIdx2));
}

// G6.2
for (const c of G6_2_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.rule === c.identifiedFlaw);
  allAuditedItems.push(analyzeItem(c.id, 'G6.2-SurveyBuilder', 6, c.options.map((o) => o.label + ': ' + o.description), cIdx));
}

// G6.3
for (const c of G6_3_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.violation === c.verdict);
  allAuditedItems.push(analyzeItem(c.id, 'G6.3-NeutralityTrial', 6, c.options.map((o) => o.label + ': ' + o.description), cIdx));
}

// G7.1
for (const c of G7_1_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.mode === c.correctMode);
  allAuditedItems.push(analyzeItem(c.id, 'G7.1-LogicMaster', 7, c.options.map((o) => o.label + ': ' + o.description), cIdx));
}

// G7.2
for (const c of G7_2_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.component === c.correctComponent);
  allAuditedItems.push(analyzeItem(c.id, 'G7.2-ToulminBuilder', 7, c.options.map((o) => o.label + ': ' + o.description), cIdx));
}

// G7.3
for (const c of G7_3_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.fallacy === c.correctFallacy);
  allAuditedItems.push(analyzeItem(c.id, 'G7.3-FallacyPatrol', 7, c.options.map((o) => o.label + ': ' + o.description), cIdx));
}

// G8.2
for (const c of G8_2_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isCorrect);
  allAuditedItems.push(analyzeItem(c.id, 'G8.2-CraapSift', 8, c.options.map((o) => o.label + ': ' + o.description), cIdx));
}

// G8.3
for (const c of G8_3_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isEthicalAndEffective);
  allAuditedItems.push(analyzeItem(c.id, 'G8.3-FieldObserver', 8, c.options.map((o) => (o as any).actionText), cIdx));
}

// G9.2
for (const c of G9_2_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isCorrectAssumption);
  allAuditedItems.push(analyzeItem(c.id, 'G9.2-AssumptionUnmasker', 9, c.options.map((o) => (o as any).text), cIdx));
}

// G9.3
for (const c of G9_3_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isStrongestCounterMove);
  allAuditedItems.push(analyzeItem(c.id, 'G9.3-EchoChamber', 9, c.options.map((o) => (o as any).text), cIdx));
}

// G10.1
for (const c of G10_1_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isCorrectDiagnosisOrRepair);
  allAuditedItems.push(analyzeItem(c.id, 'G10.1-ConclusionMatrix', 10, c.options.map((o) => (o as any).text), cIdx));
}

// G10.2
for (const c of G10_2_CHALLENGES) {
  const cIdx = c.options.findIndex((o) => o.isCorrectVerdict);
  allAuditedItems.push(analyzeItem(c.id, 'G10.2-DefectNeutralizer', 10, c.options.map((o) => (o as any).verdictLabel + ': ' + (o as any).critique), cIdx));
}

// ----------------------------------------------------------------------------
// REPORTING
// ----------------------------------------------------------------------------
console.log(`TOTAL AUDITED MULTIPLE-CHOICE ITEMS: ${allAuditedItems.length}\n`);

// Group by Dataset Category
const categories: Record<string, AuditedItem[]> = {};
for (const item of allAuditedItems) {
  let cat = item.dataset;
  if (cat.startsWith('Practice-U')) cat = 'Practice Bank (110 Qs)';
  else if (cat.startsWith('Capstone-U')) cat = 'Capstones 1-10 (64 stages)';
  else if (cat === 'BurgerBliss') cat = 'Burger Bliss (16 items)';
  else cat = 'Micro-Games';

  if (!categories[cat]) categories[cat] = [];
  categories[cat].push(item);
}

function summarizeGroup(name: string, items: AuditedItem[]) {
  const total = items.length;
  const longest = items.filter((i) => i.isLongest).length;
  const tiedLongest = items.filter((i) => i.isTiedLongest).length;
  const top2 = items.filter((i) => i.isTop2Longest).length;

  const ranks: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
  items.forEach((i) => {
    ranks[i.rank] = (ranks[i.rank] || 0) + 1;
  });

  const avgCorrectLen = items.reduce((a, b) => a + b.correctLength, 0) / total;
  const avgDistractorLen = items.reduce((a, b) => a + b.avgDistractorLength, 0) / total;
  const avgRatio = items.reduce((a, b) => a + b.ratioToAvgDistractor, 0) / total;

  console.log(`=== ${name} (${total} items) ===`);
  console.log(`  Uniquely Longest Correct: ${longest} / ${total} (${((longest / total) * 100).toFixed(1)}%)`);
  console.log(`  Tied Longest Correct:     ${tiedLongest} / ${total} (${((tiedLongest / total) * 100).toFixed(1)}%)`);
  console.log(`  Top 2 Longest Correct:    ${top2} / ${total} (${((top2 / total) * 100).toFixed(1)}%)`);
  console.log(`  Rank 1 (Longest):         ${ranks[1]} (${((ranks[1] / total) * 100).toFixed(1)}%)`);
  console.log(`  Rank 2 (2nd Longest):     ${ranks[2]} (${((ranks[2] / total) * 100).toFixed(1)}%)`);
  console.log(`  Rank 3 (3rd / Middle):    ${ranks[3]} (${((ranks[3] / total) * 100).toFixed(1)}%)`);
  if (ranks[4] !== undefined) {
    console.log(`  Rank 4 (Shortest):        ${ranks[4]} (${((ranks[4] / total) * 100).toFixed(1)}%)`);
  }
  console.log(`  Avg Correct Length:       ${avgCorrectLen.toFixed(1)} chars`);
  console.log(`  Avg Distractor Length:    ${avgDistractorLen.toFixed(1)} chars`);
  console.log(`  Avg Ratio (Correct/Dist): ${avgRatio.toFixed(2)}x\n`);
}

for (const [catName, items] of Object.entries(categories)) {
  summarizeGroup(catName, items);
}

summarizeGroup('OVERALL GRAND TOTAL', allAuditedItems);

// Breakdown by Individual Micro-Game & Practice Unit
console.log('--- INDIVIDUAL DATASETS BREAKDOWN ---');
const byDataset: Record<string, AuditedItem[]> = {};
for (const item of allAuditedItems) {
  if (!byDataset[item.dataset]) byDataset[item.dataset] = [];
  byDataset[item.dataset].push(item);
}

for (const [dsName, items] of Object.entries(byDataset)) {
  const tot = items.length;
  const longest = items.filter((i) => i.isLongest).length;
  const tied = items.filter((i) => i.isTiedLongest).length;
  const avgRatio = items.reduce((a, b) => a + b.ratioToAvgDistractor, 0) / tot;
  console.log(
    `${dsName.padEnd(28)} | ${String(tot).padStart(2)} items | Longest: ${String(longest).padStart(2)} (${(
      (longest / tot) *
      100
    )
      .toFixed(1)
      .padStart(5)}%) | Tied: ${tied} | Ratio: ${avgRatio.toFixed(2)}x`
  );
}

// Find high-risk items where ratio > 1.4 or rank 1 with huge length difference
console.log('\n--- HIGH-RISK ITEMS (Ratio >= 1.4 or Correct > 30 chars longer than next) ---');
const highRisk = allAuditedItems.filter(
  (i) => i.ratioToAvgDistractor >= 1.4 || (i.isLongest && i.correctLength - i.avgDistractorLength > 35)
);
console.log(`Found ${highRisk.length} high-risk items out of ${allAuditedItems.length}.`);
highRisk.slice(0, 30).forEach((h) => {
  console.log(
    `[${h.dataset}] ${h.id}: correctLen=${h.correctLength}, avgDistLen=${h.avgDistractorLength.toFixed(
      1
    )}, ratio=${h.ratioToAvgDistractor.toFixed(2)}x, choices=${h.choiceLengths.join(', ')}`
  );
});
