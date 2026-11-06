import * as fs from 'fs';
import * as path from 'path';

// 1. CAPSTONES 3 TO 10
const capFiles = [
  'src/data/games/unit3CapstoneData.ts',
  'src/data/games/unit4CapstoneData.ts',
  'src/data/games/unit5CapstoneData.ts',
  'src/data/games/unit6CapstoneData.ts',
  'src/data/games/unit7CapstoneData.ts',
  'src/data/games/unit8CapstoneData.ts',
  'src/data/games/unit9CapstoneData.ts',
  'src/data/games/unit10CapstoneData.ts'
];

for (const f of capFiles) {
  const fp = path.resolve(process.cwd(), f);
  let content = fs.readFileSync(fp, 'utf-8');

  // We want to expand the first distractor in stages 1, 3, 5
  // Each stage has `stageNumber: 1`, `stageNumber: 3`, `stageNumber: 5`
  for (const stNum of [1, 3, 5]) {
    const stMarker = `stageNumber: ${stNum}`;
    const stIdx = content.indexOf(stMarker);
    if (stIdx === -1) continue;

    const optBlockStart = content.indexOf('options: [', stIdx);
    if (optBlockStart === -1) continue;

    // Find the first option with isOptimal: false in this stage
    const isOptFalseIdx = content.indexOf('isOptimal: false', optBlockStart);
    if (isOptFalseIdx === -1) continue;

    // Find description for this option
    const descIdx = content.indexOf('description:', isOptFalseIdx);
    if (descIdx === -1) continue;

    const quoteChar = content[descIdx + 12] === "'" ? "'" : '"';
    const descStart = content.indexOf(quoteChar, descIdx);
    const descEnd = content.indexOf(quoteChar, descStart + 1);
    const oldDesc = content.slice(descStart + 1, descEnd);

    if (!oldDesc.includes('although sustained') && !oldDesc.includes('despite requiring')) {
      const cleanDesc = oldDesc.endsWith('.') ? oldDesc.slice(0, -1) : oldDesc;
      const newDesc = cleanDesc + ', although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.';
      content = content.slice(0, descStart + 1) + newDesc + content.slice(descEnd);
    }
  }

  fs.writeFileSync(fp, content, 'utf-8');
  console.log(`Updated capstone ${f}`);
}

// 2. CAPSTONE 1 & CAPSTONE 2
const cap1Path = path.resolve(process.cwd(), 'src/data/games/unit1Game.ts');
let cap1Content = fs.readFileSync(cap1Path, 'utf-8');
// Expand distractors in Case 1 stages 1, 4, 5 and Case 2 stages 1, 4, 5
const cap1Distractors = [
  'Prioritize rapid industrial tax growth by cutting environmental oversight permits completely',
  'Ignore commuter equity to focus solely on high-speed express corridors for private luxury cars',
  'Mandate corporate electric vehicle purchases while defunding all municipal diesel buses'
];
for (const d of cap1Distractors) {
  if (cap1Content.includes(d)) {
    cap1Content = cap1Content.replace(d, d + ', although this strategy introduces severe regulatory vulnerabilities and community opposition across the province');
  }
}
fs.writeFileSync(cap1Path, cap1Content, 'utf-8');

const cap2Path = path.resolve(process.cwd(), 'src/data/games/unit2Game.ts');
let cap2Content = fs.readFileSync(cap2Path, 'utf-8');
const cap2Distractors = [
  'Survey only three commercial fishermen during lunch break at the harbor',
  'Publish raw water toxicity readings on anonymous social media blogs immediately',
  'Conceal chemical laboratory results to preserve tourism revenue in the bay'
];
for (const d of cap2Distractors) {
  if (cap2Content.includes(d)) {
    cap2Content = cap2Content.replace(d, d + ', despite failing to satisfy institutional ethical protocols and scientific peer-review standards');
  }
}
fs.writeFileSync(cap2Path, cap2Content, 'utf-8');

// 3. BURGER BLISS
const bbPath = path.resolve(process.cwd(), 'src/data/games/burgerBlissData.ts');
let bbContent = fs.readFileSync(bbPath, 'utf-8');
const bbDistractorsToExpand = [
  'The executives miscalculated financial foreign exchange rates between US dollars and Indonesian rupiah reserves.',
  'Local customers demanded that the franchise stay open twenty-four hours strictly to host solo late-night video gaming.',
  'A Cultural perspective at the Local scale, defending traditional Sundanese culinary heritage in West Java provinces.',
  'Cultural Lens at the Global scale, monitoring international television ratings and broadcast advertising reach.',
  'Debating whether front-counter cashiers should speak multiple European languages or use non-verbal manual signs.',
  'The restaurant franchise immediately shutters all retail operations and liquidates commercial buildings to airlines.',
  'Double the portion sizes of imported beef patties, increase menu prices by fifty percent, and remove rice completely.',
  'Deploy private armed guards to evict traditional street vendors and erect concrete barriers around parking perimeters.'
];
for (const d of bbDistractorsToExpand) {
  if (bbContent.includes(d)) {
    const clean = d.slice(0, -1);
    bbContent = bbContent.replace(d, clean + ', despite failing to account for localized socioeconomic realities, consumer dining culture, and long-term neighborhood relationships.');
  }
}
fs.writeFileSync(bbPath, bbContent, 'utf-8');

console.log('Capstones 1-10 and Burger Bliss updated!');
