import * as fs from 'fs';
import * as path from 'path';

function updateGameOptions(filePath: string, itemId: string, newOptions: any[]) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const itemIndex = content.indexOf(`id: '${itemId}'`);
  if (itemIndex === -1) {
    throw new Error(`Item ${itemId} not found in ${filePath}`);
  }

  const optionsStart = content.indexOf('options: [', itemIndex);
  if (optionsStart === -1) {
    throw new Error(`Options start not found for ${itemId} in ${filePath}`);
  }

  let depth = 0;
  let optionsEnd = -1;
  for (let i = optionsStart; i < content.length; i++) {
    if (content[i] === '[') depth++;
    else if (content[i] === ']') {
      depth--;
      if (depth === 0) {
        optionsEnd = i + 1;
        break;
      }
    }
  }

  if (optionsEnd === -1) {
    throw new Error(`Options end not found for ${itemId} in ${filePath}`);
  }

  const formatted = `options: [\n` + newOptions.map(opt => {
    const lines = Object.entries(opt).map(([k, v]) => {
      if (typeof v === 'string') {
        return `        ${k}: '${v.replace(/'/g, "\\'")}'`;
      }
      return `        ${k}: ${v}`;
    });
    return `      {\n${lines.join(',\n')}\n      }`;
  }).join(',\n') + `\n    ]`;

  content = content.slice(0, optionsStart) + formatted + content.slice(optionsEnd);
  fs.writeFileSync(filePath, content, 'utf-8');
}

const u3File = path.resolve(process.cwd(), 'src/data/games/unit3MicroGamesData.ts');

// In G3.2: Item 10 -> B (histogram), Item 11 -> A (line)
updateGameOptions(u3File, 'g3-2-s3-q2', [
  { type: 'scatter', label: 'Bivariate Scatter Plot', description: 'Correlates two numerical metrics, failing to group single-variable test scores into contiguous score bins.' },
  { type: 'histogram', label: 'Continuous Binned Histogram', description: 'Groups continuous numerical data into contiguous adjacent intervals (bins) to reveal distribution shape.' },
  { type: 'bar', label: 'Simple Categorical Bar Chart', description: 'Compares discrete categories separated by gaps, obscuring continuous numeric frequency distributions.' }
]);

updateGameOptions(u3File, 'g3-2-s3-q3', [
  { type: 'line', label: 'Multi-Line Trend Graph', description: 'Tracks and compares three continuous time-series trajectories on shared axes to identify slope differences.' },
  { type: 'pie', label: 'Pie Chart with 35 Slices', description: 'Crowds thirty-five micro-slices into unreadable slivers, making accurate comparison impossible.' },
  { type: 'bar', label: 'Pareto Bar Chart with "Other"', description: 'Compares discrete static totals, unable to show continuous year-by-year trajectory slope differences.' }
]);

// In G3.3: Item 9 (g3-3-s3-q1) -> B (opt-1a)
updateGameOptions(u3File, 'g3-3-s3-q1', [
  { id: 'opt-1b', text: 'The researcher should delete the three negative interviews to make the study appear harmonious.', isCorrect: false, feedback: 'Incorrect. Discarding contradicting data violates academic integrity.' },
  { id: 'opt-1a', text: 'Maintain academic rigor by analyzing negative cases, refining the theme to explain generational divergence.', isCorrect: true, feedback: 'Correct! Incorporating outlier cases prevents confirmation bias.' },
  { id: 'opt-1c', text: 'Declare the entire study invalid and terminate the inquiry project immediately.', isCorrect: false, feedback: 'Incorrect. Divergence enriches qualitative insight.' }
]);

console.log('Adjusted G3.2 and G3.3 positions!');
