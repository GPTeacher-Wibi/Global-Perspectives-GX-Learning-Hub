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

const allUnits = [
  { unit: 1, qs: UNIT_1_PRACTICE_QUESTIONS },
  { unit: 2, qs: UNIT_2_PRACTICE_QUESTIONS },
  { unit: 3, qs: UNIT_3_PRACTICE_QUESTIONS },
  { unit: 4, qs: UNIT_4_PRACTICE_QUESTIONS },
  { unit: 5, qs: UNIT_5_PRACTICE_QUESTIONS },
  { unit: 6, qs: UNIT_6_PRACTICE_QUESTIONS },
  { unit: 7, qs: UNIT_7_PRACTICE_QUESTIONS },
  { unit: 8, qs: UNIT_8_PRACTICE_QUESTIONS },
  { unit: 9, qs: UNIT_9_PRACTICE_QUESTIONS },
  { unit: 10, qs: UNIT_10_PRACTICE_QUESTIONS },
];

for (const { unit, qs } of allUnits) {
  console.log(`\n=== UNIT ${unit} (${qs.length} Qs) ===`);
  for (const q of qs) {
    const cOpt = q.options.find(o => o.id === q.correctAnswer);
    const dOpts = q.options.filter(o => o.id !== q.correctAnswer);
    const cLen = cOpt ? cOpt.text.length : 0;
    const avgDLen = dOpts.reduce((s, o) => s + o.text.length, 0) / dOpts.length;
    const ratio = avgDLen > 0 ? (cLen / avgDLen).toFixed(2) : '0';
    const isLongest = cOpt ? q.options.every(o => o.id === q.correctAnswer || o.text.length < cLen) : false;
    console.log(`${q.id} [${q.correctAnswer}] ratio=${ratio}x longest=${isLongest} cLen=${cLen} dLens=[${dOpts.map(o => o.text.length).join(', ')}]`);
  }
}
