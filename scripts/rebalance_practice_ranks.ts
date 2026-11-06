import * as fs from 'fs';
import * as path from 'path';

// ----------------------------------------------------------------------------
// 1. PRACTICE BANK (Units 1 - 10)
// Target: make ~55 questions have a distractor longer than correct answer
// ----------------------------------------------------------------------------
const practiceFiles = [
  'src/data/practice/unit1Practice.ts',
  'src/data/practice/unit2Practice.ts',
  'src/data/practice/unit3Practice.ts',
  'src/data/practice/unit4Practice.ts',
  'src/data/practice/unit5Practice.ts',
  'src/data/practice/unit6Practice.ts',
  'src/data/practice/unit7Practice.ts',
  'src/data/practice/unit8Practice.ts',
  'src/data/practice/unit9Practice.ts',
  'src/data/practice/unit10Practice.ts'
];

const distractorExpansions = [
  ', despite failing to account for localized socioeconomic disparities and long-term community resistance.',
  ', although this overlooks critical institutional constraints and unintended regional environmental side effects.',
  ', even though empirical field observations demonstrate significant divergence across diverse municipal contexts.',
  ', while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.',
  ', despite introducing unverified assumptions regarding population compliance and resource availability.'
];

let expIdx = 0;

for (const relPath of practiceFiles) {
  const fullPath = path.resolve(process.cwd(), relPath);
  let content = fs.readFileSync(fullPath, 'utf-8');

  // Find all question blocks
  const qRegex = /id:\s*'(u\d+-p-\d+)'[\s\S]*?options:\s*\[([\s\S]*?)\][\s\S]*?correctAnswer:\s*'([^']+)'/g;
  let match;
  let updatedCount = 0;

  while ((match = qRegex.exec(content)) !== null) {
    const qId = match[1];
    const optionsBlock = match[2];
    const correctAnswer = match[3];

    // Parse options
    const optRegex = /id:\s*'([^']+)'[\s\S]*?text:\s*'([^']+)'/g;
    let optMatch;
    const opts: { id: string; text: string; fullMatch: string }[] = [];
    while ((optMatch = optRegex.exec(optionsBlock)) !== null) {
      opts.push({ id: optMatch[1], text: optMatch[2], fullMatch: optMatch[0] });
    }

    const correctOpt = opts.find(o => o.id === correctAnswer);
    if (!correctOpt) continue;

    const maxLen = Math.max(...opts.map(o => o.text.length));
    // If correct is the longest, expand the first distractor
    if (correctOpt.text.length === maxLen && updatedCount < 7) {
      const distractor = opts.find(o => o.id !== correctAnswer);
      if (distractor) {
        const expansion = distractorExpansions[expIdx % distractorExpansions.length];
        expIdx++;
        // Remove trailing period if present before appending
        const cleanText = distractor.text.endsWith('.') ? distractor.text.slice(0, -1) : distractor.text;
        const newText = cleanText + expansion;
        content = content.replace(`text: '${distractor.text}'`, `text: '${newText}'`);
        updatedCount++;
      }
    }
  }

  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`Updated ${updatedCount} practice items in ${relPath}`);
}

console.log('Practice bank rebalancing complete!');
