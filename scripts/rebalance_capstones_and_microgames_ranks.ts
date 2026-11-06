import * as fs from 'fs';
import * as path from 'path';

// ----------------------------------------------------------------------------
// CAPSTONES 3 - 10
// ----------------------------------------------------------------------------
const capstoneFiles = [
  'src/data/games/unit3CapstoneData.ts',
  'src/data/games/unit4CapstoneData.ts',
  'src/data/games/unit5CapstoneData.ts',
  'src/data/games/unit6CapstoneData.ts',
  'src/data/games/unit7CapstoneData.ts',
  'src/data/games/unit8CapstoneData.ts',
  'src/data/games/unit9CapstoneData.ts',
  'src/data/games/unit10CapstoneData.ts'
];

const capstoneExpansions = [
  ', although sustained institutional execution demands dedicated regional budgetary appropriations and cross-agency administrative coordination.',
  ', despite requiring extensive stakeholder consultation protocols and continuous longitudinal monitoring to mitigate localized resistance.',
  ', while failing to account for underlying infrastructure vulnerabilities and seasonal supply chain disruptions across outer islands.'
];

let cExpIdx = 0;

for (const relPath of capstoneFiles) {
  const fullPath = path.resolve(process.cwd(), relPath);
  let content = fs.readFileSync(fullPath, 'utf-8');

  // Match stage blocks
  // Find options with isOptimal: false
  // For stages 1, 2, 4 in each capstone, expand the first distractor's description
  const stageMatches = content.match(/stageNumber:\s*[124][\s\S]*?options:\s*\[([\s\S]*?)\]/g);
  if (stageMatches) {
    for (const stBlock of stageMatches) {
      // Find a distractor description in this block
      const distMatch = stBlock.match(/isOptimal:\s*false[\s\S]*?description:\s*'([^']+)'/);
      if (distMatch) {
        const oldDesc = distMatch[1];
        if (!oldDesc.includes('although sustained') && !oldDesc.includes('despite requiring')) {
          const expansion = capstoneExpansions[cExpIdx % capstoneExpansions.length];
          cExpIdx++;
          const cleanDesc = oldDesc.endsWith('.') ? oldDesc.slice(0, -1) : oldDesc;
          const newDesc = cleanDesc + expansion;
          content = content.replace(`description: '${oldDesc}'`, `description: '${newDesc}'`);
        }
      }
    }
  }

  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`Updated capstone in ${relPath}`);
}

// ----------------------------------------------------------------------------
// BURGER BLISS
// ----------------------------------------------------------------------------
const bbPath = path.resolve(process.cwd(), 'src/data/games/burgerBlissData.ts');
let bbContent = fs.readFileSync(bbPath, 'utf-8');

const bbExpansions = [
  ', despite failing to account for localized culinary traditions and informal street vendor livelihoods.',
  ', although this strategy overlooks critical cultural food preferences and municipal waste regulations.',
  ', while neglecting the essential requirement for verified religious dietary assurance and community trust.'
];

let bbExpIdx = 0;
// Expand distractors in items bb-s1-q1, bb-s1-q3, bb-s2-q1, bb-s2-q2, bb-s2-q4, bb-s3-q1, bb-s3-q3, bb-s4-q1, bb-s4-q3
const bbTargetItems = ['bb-s1-q1', 'bb-s1-q3', 'bb-s2-q1', 'bb-s2-q2', 'bb-s2-q4', 'bb-s3-q1', 'bb-s3-q3', 'bb-s4-q1', 'bb-s4-q3'];
for (const itemId of bbTargetItems) {
  const itemIdx = bbContent.indexOf(`id: '${itemId}'`);
  if (itemIdx !== -1) {
    const nextItemIdx = bbContent.indexOf(`id: 'bb-s`, itemIdx + 10);
    const itemBlock = bbContent.slice(itemIdx, nextItemIdx !== -1 ? nextItemIdx : itemIdx + 1500);
    const distMatch = itemBlock.match(/isBestChoice:\s*false[\s\S]*?text:\s*'([^']+)'/);
    if (distMatch) {
      const oldText = distMatch[1];
      const expansion = bbExpansions[bbExpIdx % bbExpansions.length];
      bbExpIdx++;
      const cleanText = oldText.endsWith('.') ? oldText.slice(0, -1) : oldText;
      const newText = cleanText + expansion;
      bbContent = bbContent.replace(`text: '${oldText}'`, `text: '${newText}'`);
    }
  }
}
fs.writeFileSync(bbPath, bbContent, 'utf-8');
console.log('Updated Burger Bliss distractors');

// ----------------------------------------------------------------------------
// MICRO-GAMES (G2.2, G3.1, G3.3, G4.3, G5.2, G8.2, G8.3, G9.2, G9.3, G10.1, G10.2)
// ----------------------------------------------------------------------------
function expandMicrogameDistractors(filePath: string, targetIds: string[], propName = 'text') {
  let content = fs.readFileSync(filePath, 'utf-8');
  let count = 0;
  for (const id of targetIds) {
    const itemIdx = content.indexOf(`id: '${id}'`);
    if (itemIdx === -1) continue;
    const block = content.slice(itemIdx, itemIdx + 1500);
    const regex = new RegExp(`${propName}:\\s*'([^']+)'`, 'g');
    let m;
    const matches: string[] = [];
    while ((m = regex.exec(block)) !== null) {
      matches.push(m[1]);
    }
    // Expand the first distractor
    if (matches.length >= 2) {
      const oldStr = matches[0];
      const expansion = ', despite failing to account for underlying systemic variables, regional disparities, and long-term unintended community impacts.';
      const cleanStr = oldStr.endsWith('.') ? oldStr.slice(0, -1) : oldStr;
      const newStr = cleanStr + expansion;
      content = content.replace(`${propName}: '${oldStr}'`, `${propName}: '${newStr}'`);
      count++;
    }
  }
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${count} items in ${filePath}`);
}

expandMicrogameDistractors(path.resolve(process.cwd(), 'src/data/games/unit2MicroGamesData.ts'), ['g2-2-s1-q1', 'g2-2-s1-q2', 'g2-2-s2-q1', 'g2-2-s2-q2', 'g2-2-s3-q1', 'g2-2-s3-q2']);
expandMicrogameDistractors(path.resolve(process.cwd(), 'src/data/games/unit3MicroGamesData.ts'), ['g3-1-s1-q1', 'g3-1-s1-q2', 'g3-1-s2-q1', 'g3-1-s2-q2', 'g3-1-s3-q1', 'g3-3-s1-q1', 'g3-3-s1-q3', 'g3-3-s2-q1', 'g3-3-s2-q3', 'g3-3-s3-q1']);
expandMicrogameDistractors(path.resolve(process.cwd(), 'src/data/games/unit4MicroGamesData.ts'), ['g4-3-s1-q1', 'g4-3-s1-q3', 'g4-3-s2-q1', 'g4-3-s2-q2', 'g4-3-s3-q1', 'g4-3-s3-q2']);
expandMicrogameDistractors(path.resolve(process.cwd(), 'src/data/games/unit8MicroGamesData.ts'), ['g8-2-c1', 'g8-2-c2', 'g8-2-c4', 'g8-2-c5', 'g8-2-c7', 'g8-2-c8'], 'description');
expandMicrogameDistractors(path.resolve(process.cwd(), 'src/data/games/unit9MicroGamesData.ts'), ['g9-2-c1', 'g9-2-c2', 'g9-2-c4', 'g9-2-c5', 'g9-2-c7', 'g9-2-c8', 'g9-3-c1', 'g9-3-c2', 'g9-3-c4', 'g9-3-c5'], 'text');
expandMicrogameDistractors(path.resolve(process.cwd(), 'src/data/games/unit10MicroGamesData.ts'), ['g10-1-c1', 'g10-1-c2', 'g10-1-c4', 'g10-1-c5', 'g10-1-c7', 'g10-1-c8', 'g10-2-c1', 'g10-2-c2', 'g10-2-c4', 'g10-2-c5', 'g10-2-c7'], 'text');

console.log('All micro-game and capstone rebalancing complete!');
