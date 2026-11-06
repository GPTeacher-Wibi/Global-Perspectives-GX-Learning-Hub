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
import { UNIT_3_CAPSTONE_DATA } from '../src/data/games/unit3CapstoneData';
import { UNIT_4_CAPSTONE_DATA } from '../src/data/games/unit4CapstoneData';
import { UNIT_5_CAPSTONE_DATA } from '../src/data/games/unit5CapstoneData';
import { UNIT_6_CAPSTONE_DATA } from '../src/data/games/unit6CapstoneData';
import { UNIT_7_CAPSTONE_DATA } from '../src/data/games/unit7CapstoneData';
import { UNIT_8_CAPSTONE_DATA } from '../src/data/games/unit8CapstoneData';
import { UNIT_9_CAPSTONE_DATA } from '../src/data/games/unit9CapstoneData';
import { UNIT_10_CAPSTONE_DATA } from '../src/data/games/unit10CapstoneData';
import { UNIT_2_RESEARCH_CASES } from '../src/data/games/unit2Game';
import { UNIT_1_CASE_CHALLENGES } from '../src/data/games/unit1Game';

import { G2_2_CHALLENGES } from '../src/data/games/unit2MicroGamesData';
import { G3_1_CHALLENGES, G3_2_CHALLENGES, G3_3_CHALLENGES } from '../src/data/games/unit3MicroGamesData';
import { G4_3_CHALLENGES } from '../src/data/games/unit4MicroGamesData';
import { G8_2_CHALLENGES, G8_3_CHALLENGES } from '../src/data/games/unit8MicroGamesData';
import { G9_2_CHALLENGES, G9_3_CHALLENGES } from '../src/data/games/unit9MicroGamesData';
import { G10_1_CHALLENGES, G10_2_CHALLENGES } from '../src/data/games/unit10MicroGamesData';

console.log('--- PRACTICE QUESTIONS ---');
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
  { unit: 10, questions: UNIT_10_PRACTICE_QUESTIONS },
];

let totalPracticeCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
let totalPracticeQ = 0;

for (const p of practiceSets) {
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  for (const q of p.questions) {
    const idx = q.options.findIndex((o) => o.id === q.correctAnswer);
    const letter = ['A', 'B', 'C', 'D'][idx] || '?';
    counts[letter] = (counts[letter] || 0) + 1;
    totalPracticeCounts[letter] = (totalPracticeCounts[letter] || 0) + 1;
    totalPracticeQ++;
  }
  console.log(`Unit ${p.unit} (${p.questions.length} Qs): A=${counts.A}, B=${counts.B}, C=${counts.C}, D=${counts.D}`);
}
console.log(`Total Practice (${totalPracticeQ} Qs): A=${totalPracticeCounts.A} (${(totalPracticeCounts.A/totalPracticeQ*100).toFixed(1)}%), B=${totalPracticeCounts.B} (${(totalPracticeCounts.B/totalPracticeQ*100).toFixed(1)}%), C=${totalPracticeCounts.C} (${(totalPracticeCounts.C/totalPracticeQ*100).toFixed(1)}%), D=${totalPracticeCounts.D} (${(totalPracticeCounts.D/totalPracticeQ*100).toFixed(1)}%)`);

console.log('\n--- BURGER BLISS ---');
const bbStages = [STAGE_1_ITEMS, STAGE_2_ITEMS, STAGE_3_ITEMS, STAGE_4_ITEMS];
const bbCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
let bbTotal = 0;
bbStages.forEach((items, sIdx) => {
  items.forEach((item, iIdx) => {
    const idx = item.options.findIndex((o) => o.isBestChoice);
    const letter = ['A', 'B', 'C', 'D'][idx];
    bbCounts[letter] = (bbCounts[letter] || 0) + 1;
    bbTotal++;
  });
});
console.log(`Burger Bliss (${bbTotal} items): A=${bbCounts.A}, B=${bbCounts.B}, C=${bbCounts.C}, D=${bbCounts.D}`);

console.log('\n--- CAPSTONES 3-10 ---');
const capstones = [
  UNIT_3_CAPSTONE_DATA,
  UNIT_4_CAPSTONE_DATA,
  UNIT_5_CAPSTONE_DATA,
  UNIT_6_CAPSTONE_DATA,
  UNIT_7_CAPSTONE_DATA,
  UNIT_8_CAPSTONE_DATA,
  UNIT_9_CAPSTONE_DATA,
  UNIT_10_CAPSTONE_DATA,
];
const capCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
let capTotal = 0;
for (const cap of capstones) {
  for (const st of cap.stages) {
    const idx = st.options.findIndex((o) => o.isOptimal);
    const letter = ['A', 'B', 'C', 'D'][idx];
    capCounts[letter] = (capCounts[letter] || 0) + 1;
    capTotal++;
  }
}
console.log(`Capstones 3-10 (${capTotal} stages): A=${capCounts.A}, B=${capCounts.B}, C=${capCounts.C}, D=${capCounts.D}`);

console.log('\n--- CAPSTONE 2 ---');
const c2Counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
let c2Total = 0;
for (const c of UNIT_2_RESEARCH_CASES) {
  for (const st of c.stages) {
    const idx = st.options.findIndex((o) => o.isOptimal);
    const letter = ['A', 'B', 'C', 'D'][idx];
    c2Counts[letter] = (c2Counts[letter] || 0) + 1;
    c2Total++;
  }
}
console.log(`Capstone 2 (${c2Total} stages): A=${c2Counts.A}, B=${c2Counts.B}, C=${c2Counts.C}, D=${c2Counts.D}`);

console.log('\n--- CAPSTONE 1 ---');
const c1Counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
let c1Total = 0;
for (const c of UNIT_1_CASE_CHALLENGES) {
  const s = c.stages;
  const stages = [
    s.stage1Comprehension.options.findIndex(o => o.isCorrect),
    s.stage4ConflictAnalysis.options.findIndex(o => o.isCorrect),
    s.stage5CommonGround.options.findIndex(o => o.isCorrect),
    s.stage6PolicyDecision.options.findIndex(o => o.isOptimalBridge),
    s.stage7TwistAndSynthesis.options.findIndex(o => o.isCorrect),
  ];
  stages.forEach(idx => {
    const letter = ['A', 'B', 'C', 'D'][idx];
    c1Counts[letter] = (c1Counts[letter] || 0) + 1;
    c1Total++;
  });
}
console.log(`Capstone 1 (${c1Total} scored items): A=${c1Counts.A} (${(c1Counts.A/c1Total*100).toFixed(1)}%), B=${c1Counts.B} (${(c1Counts.B/c1Total*100).toFixed(1)}%), C=${c1Counts.C} (${(c1Counts.C/c1Total*100).toFixed(1)}%), D=${c1Counts.D}`);

console.log('\n--- MICRO-GAMES (PREVIOUSLY REBALANCED) ---');
const checkMg = (name: string, challenges: any[], isCorrectFn: (c: any, ch: any) => boolean) => {
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  for (const ch of challenges) {
    const idx = ch.options.findIndex((o: any) => isCorrectFn(o, ch));
    const letter = ['A', 'B', 'C', 'D'][idx];
    counts[letter] = (counts[letter] || 0) + 1;
  }
  const tot = challenges.length;
  console.log(`${name} (${tot} items): A=${counts.A} (${(counts.A/tot*100).toFixed(1)}%), B=${counts.B} (${(counts.B/tot*100).toFixed(1)}%), C=${counts.C} (${(counts.C/tot*100).toFixed(1)}%), D=${counts.D}`);
};

checkMg('G2_2_CHALLENGES', G2_2_CHALLENGES, (o: any) => o.isCorrect);
checkMg('G3_1_CHALLENGES', G3_1_CHALLENGES, (o: any) => o.isCorrect);
checkMg('G3_2_CHALLENGES', G3_2_CHALLENGES, (o: any, ch: any) => o.type === ch.correctChart || o.isCorrect === true);
checkMg('G3_3_CHALLENGES', G3_3_CHALLENGES, (o: any) => o.isCorrect);
checkMg('G4_3_CHALLENGES', G4_3_CHALLENGES, (o: any) => o.isCorrect);
checkMg('G8_2_CHALLENGES', G8_2_CHALLENGES, (o: any) => o.isCorrect);
checkMg('G8_3_CHALLENGES', G8_3_CHALLENGES, (o: any) => o.isEthicalAndEffective);
checkMg('G9_2_CHALLENGES', G9_2_CHALLENGES, (o: any) => o.isCorrectAssumption);
checkMg('G9_3_CHALLENGES', G9_3_CHALLENGES, (o: any) => o.isStrongestCounterMove);
checkMg('G10_1_CHALLENGES', G10_1_CHALLENGES, (o: any) => o.isCorrectDiagnosisOrRepair);
checkMg('G10_2_CHALLENGES', G10_2_CHALLENGES, (o: any) => o.isCorrectVerdict);

console.log('\n--- MICRO-GAMES (PHASE 2F.2 REMEDIATED) ---');
import { G5_3_CHALLENGES } from '../src/data/games/unit5MicroGamesData';
import { G6_1_CHALLENGES, G6_2_CHALLENGES, G6_3_CHALLENGES } from '../src/data/games/unit6MicroGamesData';
import { G7_1_CHALLENGES, G7_2_CHALLENGES, G7_3_CHALLENGES } from '../src/data/games/unit7MicroGamesData';

checkMg('G5_3_CHALLENGES (Defect)', G5_3_CHALLENGES, (o: any, ch: any) => o.defect === ch.primaryDefect);
checkMg('G6_1_CHALLENGES (Defect)', G6_1_CHALLENGES, (o: any, ch: any) => o.defect === ch.correctDefect);
checkMg('G6_2_CHALLENGES (Flaw)', G6_2_CHALLENGES, (o: any, ch: any) => o.rule === ch.identifiedFlaw);
checkMg('G6_3_CHALLENGES (Verdict)', G6_3_CHALLENGES, (o: any, ch: any) => o.violation === ch.verdict);
checkMg('G7_1_CHALLENGES (Mode)', G7_1_CHALLENGES, (o: any, ch: any) => o.mode === ch.correctMode);
checkMg('G7_2_CHALLENGES (Component)', G7_2_CHALLENGES, (o: any, ch: any) => o.component === ch.correctComponent);
checkMg('G7_3_CHALLENGES (Fallacy)', G7_3_CHALLENGES, (o: any, ch: any) => o.fallacy === ch.correctFallacy);

console.log('\n--- SUB-SELECTIONS (STEP 2) ---');
const c5_3_sub: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
G5_3_CHALLENGES.forEach(c => c5_3_sub[c.correctRepairedOption]++);
console.log(`G5_3 Step 2 Repaired Goal (11 items): A=${c5_3_sub.A} (${(c5_3_sub.A/11*100).toFixed(1)}%), B=${c5_3_sub.B} (${(c5_3_sub.B/11*100).toFixed(1)}%), C=${c5_3_sub.C} (${(c5_3_sub.C/11*100).toFixed(1)}%), D=${c5_3_sub.D}`);

const c6_1_sub: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
G6_1_CHALLENGES.forEach(c => c6_1_sub[c.correctPrescription]++);
console.log(`G6_1 Step 2 Prescription (11 items): A=${c6_1_sub.A} (${(c6_1_sub.A/11*100).toFixed(1)}%), B=${c6_1_sub.B} (${(c6_1_sub.B/11*100).toFixed(1)}%), C=${c6_1_sub.C} (${(c6_1_sub.C/11*100).toFixed(1)}%), D=${c6_1_sub.D}`);

