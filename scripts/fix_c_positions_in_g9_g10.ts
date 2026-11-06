import * as fs from 'fs';
import * as path from 'path';

function fixCPositions(filePath: string, targetIds: string[]) {
  let content = fs.readFileSync(filePath, 'utf-8');

  for (const id of targetIds) {
    const itemIdx = content.indexOf(`id: '${id}'`);
    if (itemIdx === -1) {
      throw new Error(`Item ${id} not found in ${filePath}`);
    }

    const optStart = content.indexOf('options: [', itemIdx);
    let depth = 0;
    let optEnd = -1;
    for (let i = optStart; i < content.length; i++) {
      if (content[i] === '[') depth++;
      else if (content[i] === ']') {
        depth--;
        if (depth === 0) {
          optEnd = i + 1;
          break;
        }
      }
    }

    const optionsBlock = content.slice(optStart, optEnd);
    // Find the 3 option objects inside options: [ ... ]
    // Each option is inside { ... }
    const opts: string[] = [];
    let curDepth = 0;
    let curStart = -1;
    for (let i = 0; i < optionsBlock.length; i++) {
      if (optionsBlock[i] === '{') {
        if (curDepth === 0) curStart = i;
        curDepth++;
      } else if (optionsBlock[i] === '}') {
        curDepth--;
        if (curDepth === 0) {
          opts.push(optionsBlock.slice(curStart, i + 1));
        }
      }
    }

    if (opts.length === 3) {
      // Swap opts[1] and opts[2] so the correct option is at index 2 (position C)
      const newBlock = `options: [\n${opts[0]},\n${opts[2]},\n${opts[1]}\n    ]`;
      content = content.slice(0, optStart) + newBlock + content.slice(optEnd);
      console.log(`Swapped options in ${id} to make C correct`);
    } else {
      console.log(`Warning: expected 3 options in ${id}, found ${opts.length}`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

fixCPositions(path.resolve(process.cwd(), 'src/data/games/unit9MicroGamesData.ts'), ['g9-2-c2', 'g9-2-c5', 'g9-2-c8']);
fixCPositions(path.resolve(process.cwd(), 'src/data/games/unit10MicroGamesData.ts'), ['g10-1-c2', 'g10-1-c5', 'g10-1-c8', 'g10-2-c2', 'g10-2-c5', 'g10-2-c8']);

console.log('Position fixes complete!');
