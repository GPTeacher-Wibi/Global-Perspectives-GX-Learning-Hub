import * as fs from 'fs';
import * as path from 'path';

// ----------------------------------------------------------------------------
// 1. CAPSTONES 3 TO 10: JSON Parse and Update
// ----------------------------------------------------------------------------
const capUnits = [3, 4, 5, 6, 7, 8, 9, 10];
const capExpansion = ', although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.';

for (const u of capUnits) {
  const fp = path.resolve(process.cwd(), `src/data/games/unit${u}CapstoneData.ts`);
  const content = fs.readFileSync(fp, 'utf-8');
  const splitMarker = `export const UNIT_${u}_CAPSTONE_DATA: CapstoneMissionData = `;
  const parts = content.split(splitMarker);
  if (parts.length === 2) {
    const jsonStr = parts[1].trim().replace(/;$/, '');
    const data = JSON.parse(jsonStr);

    // Expand first distractor in stages 1, 3, 5
    for (const st of data.stages) {
      if ([1, 3, 5].includes(st.stageNumber)) {
        const dist = st.options.find((o: any) => !o.isOptimal);
        if (dist && !dist.description.includes('although sustained')) {
          const clean = dist.description.endsWith('.') ? dist.description.slice(0, -1) : dist.description;
          dist.description = clean + capExpansion;
        }
      }
    }

    const newContent = parts[0] + splitMarker + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync(fp, newContent, 'utf-8');
    console.log(`Updated Capstone Unit ${u} via JSON serialization!`);
  }
}

// ----------------------------------------------------------------------------
// 2. G5.2 ETIQUETTE (11 items) - Expand first distractor description in 7 items
// ----------------------------------------------------------------------------
const u5File = path.resolve(process.cwd(), 'src/data/games/unit5MicroGamesData.ts');
let u5Content = fs.readFileSync(u5File, 'utf-8');
const g5_2Targets = ['g5-2-s1-q1', 'g5-2-s1-q3', 'g5-2-s2-q1', 'g5-2-s2-q3', 'g5-2-s3-q1', 'g5-2-s3-q3'];
for (const id of g5_2Targets) {
  const itemIdx = u5Content.indexOf(`id: '${id}'`);
  if (itemIdx !== -1) {
    const blockEnd = u5Content.indexOf(`id: 'g5-`, itemIdx + 10);
    const block = u5Content.slice(itemIdx, blockEnd !== -1 ? blockEnd : itemIdx + 2000);
    // Find the first option with strategy that is not correctStrategy
    const m = block.match(/description:\s*'([^']+)'/);
    if (m) {
      const oldDesc = m[1];
      const clean = oldDesc.endsWith('.') ? oldDesc.slice(0, -1) : oldDesc;
      const newDesc = clean + ', despite failing to account for interpersonal group friction, workload inequity, and shared project deadlines.';
      u5Content = u5Content.replace(`description: '${oldDesc}'`, `description: '${newDesc}'`);
    }
  }
}
fs.writeFileSync(u5File, u5Content, 'utf-8');
console.log('Updated G5.2');

// ----------------------------------------------------------------------------
// 3. G8.3 FIELD OBSERVER (11 items) - Expand consequenceExplanation in 6 items
// ----------------------------------------------------------------------------
const u8File = path.resolve(process.cwd(), 'src/data/games/unit8MicroGamesData.ts');
let u8Content = fs.readFileSync(u8File, 'utf-8');
const g8_3Targets = ['g8-3-c1', 'g8-3-c3', 'g8-3-c4', 'g8-3-c6', 'g8-3-c8', 'g8-3-c10'];
for (const id of g8_3Targets) {
  const itemIdx = u8Content.indexOf(`id: '${id}'`);
  if (itemIdx !== -1) {
    const blockEnd = u8Content.indexOf(`id: 'g8-`, itemIdx + 10);
    const block = u8Content.slice(itemIdx, blockEnd !== -1 ? blockEnd : itemIdx + 2000);
    const m = block.match(/consequenceExplanation:\s*'([^']+)'/);
    if (m) {
      const oldExp = m[1];
      const clean = oldExp.endsWith('.') ? oldExp.slice(0, -1) : oldExp;
      const newExp = clean + ', severely undermining fieldwork integrity, institutional trust, and local community safety.';
      u8Content = u8Content.replace(`consequenceExplanation: '${oldExp}'`, `consequenceExplanation: '${newExp}'`);
    }
  }
}
fs.writeFileSync(u8File, u8Content, 'utf-8');
console.log('Updated G8.3');

// ----------------------------------------------------------------------------
// 4. G9.2 & G9.3 (unit9MicroGamesData.ts) - Expand distractors in 6 items each
// ----------------------------------------------------------------------------
const u9File = path.resolve(process.cwd(), 'src/data/games/unit9MicroGamesData.ts');
let u9Content = fs.readFileSync(u9File, 'utf-8');

const g9_2Targets = ['g9-2-c1', 'g9-2-c3', 'g9-2-c4', 'g9-2-c6', 'g9-2-c7', 'g9-2-c9'];
for (const id of g9_2Targets) {
  const itemIdx = u9Content.indexOf(`id: '${id}'`);
  if (itemIdx !== -1) {
    const blockEnd = u9Content.indexOf(`id: 'g9-`, itemIdx + 10);
    const block = u9Content.slice(itemIdx, blockEnd !== -1 ? blockEnd : itemIdx + 2000);
    const m = block.match(/analysisNote:\s*'([^']+)'/);
    if (m) {
      const oldNote = m[1];
      const clean = oldNote.endsWith('.') ? oldNote.slice(0, -1) : oldNote;
      const newNote = clean + ', despite completely failing to address underlying logical warrants and unexamined premises.';
      u9Content = u9Content.replace(`analysisNote: '${oldNote}'`, `analysisNote: '${newNote}'`);
    }
  }
}

const g9_3Targets = ['g9-3-c1', 'g9-3-c3', 'g9-3-c4', 'g9-3-c6', 'g9-3-c7', 'g9-3-c9'];
for (const id of g9_3Targets) {
  const itemIdx = u9Content.indexOf(`id: '${id}'`);
  if (itemIdx !== -1) {
    const blockEnd = u9Content.indexOf(`id: 'g9-`, itemIdx + 10);
    const block = u9Content.slice(itemIdx, blockEnd !== -1 ? blockEnd : itemIdx + 2000);
    const m = block.match(/reasoning:\s*'([^']+)'/);
    if (m) {
      const oldReas = m[1];
      const clean = oldReas.endsWith('.') ? oldReas.slice(0, -1) : oldReas;
      const newReas = clean + ', despite overlooking systemic polarization dynamics, cognitive confirmation biases, and verified empirical evidence.';
      u9Content = u9Content.replace(`reasoning: '${oldReas}'`, `reasoning: '${newReas}'`);
    }
  }
}
fs.writeFileSync(u9File, u9Content, 'utf-8');
console.log('Updated G9.2 and G9.3');

// ----------------------------------------------------------------------------
// 5. G10.1 & G10.2 (unit10MicroGamesData.ts) - Expand distractors in 6 items each
// ----------------------------------------------------------------------------
const u10File = path.resolve(process.cwd(), 'src/data/games/unit10MicroGamesData.ts');
let u10Content = fs.readFileSync(u10File, 'utf-8');

const g10_1Targets = ['g10-1-c1', 'g10-1-c3', 'g10-1-c4', 'g10-1-c6', 'g10-1-c7', 'g10-1-c9'];
for (const id of g10_1Targets) {
  const itemIdx = u10Content.indexOf(`id: '${id}'`);
  if (itemIdx !== -1) {
    const blockEnd = u10Content.indexOf(`id: 'g10-`, itemIdx + 10);
    const block = u10Content.slice(itemIdx, blockEnd !== -1 ? blockEnd : itemIdx + 2000);
    const m = block.match(/analysisNote:\s*'([^']+)'/);
    if (m) {
      const oldNote = m[1];
      const clean = oldNote.endsWith('.') ? oldNote.slice(0, -1) : oldNote;
      const newNote = clean + ', failing to synthesize multi-perspective trade-offs or acknowledge study limitations.';
      u10Content = u10Content.replace(`analysisNote: '${oldNote}'`, `analysisNote: '${newNote}'`);
    }
  }
}

const g10_2Targets = ['g10-2-c1', 'g10-2-c3', 'g10-2-c4', 'g10-2-c6', 'g10-2-c7', 'g10-2-c9'];
for (const id of g10_2Targets) {
  const itemIdx = u10Content.indexOf(`id: '${id}'`);
  if (itemIdx !== -1) {
    const blockEnd = u10Content.indexOf(`id: 'g10-`, itemIdx + 10);
    const block = u10Content.slice(itemIdx, blockEnd !== -1 ? blockEnd : itemIdx + 2000);
    const m = block.match(/critique:\s*'([^']+)'/);
    if (m) {
      const oldCrit = m[1];
      const clean = oldCrit.endsWith('.') ? oldCrit.slice(0, -1) : oldCrit;
      const newCrit = clean + ', completely disregarding methodological validity, representative sampling standards, and empirical rigor.';
      u10Content = u10Content.replace(`critique: '${oldCrit}'`, `critique: '${newCrit}'`);
    }
  }
}
fs.writeFileSync(u10File, u10Content, 'utf-8');
console.log('Updated G10.1 and G10.2');

console.log('Rank rebalancing script finished successfully!');
