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

updateGameOptions(u3File, 'g3-2-s2-q4', [
  { type: 'scatter', label: 'Scatter Plot with Trendline', description: 'Plots bivariate numerical pairs across dual axes, failing to summarize multi-group quartile spreads.' },
  { type: 'box-plot', label: 'Box Plot (Box-and-Whisker)', description: 'Displays 5-number distribution summary and highlights extreme statistical outliers across regional groups.' },
  { type: 'pie', label: 'Pie Chart', description: 'Displays static percentage slices of a single whole, unable to represent distribution skewness or income gaps.' }
]);

updateGameOptions(u3File, 'g3-2-s3-q1', [
  { type: 'pie', label: '3D Exploding Pie Chart', description: 'Distorts geometric slice proportions through artificial perspective angles and adds visual clutter.' },
  { type: 'scatter', label: 'Bivariate Scatter Plot', description: 'Plots paired coordinates across two continuous axes to display linear clustering and correlation strength.' },
  { type: 'line', label: 'Connected Line Graph', description: 'Implies false continuous chronological flow between independent schools that share no sequential timeline.' }
]);

updateGameOptions(u3File, 'g3-2-s3-q2', [
  { type: 'scatter', label: 'Bivariate Scatter Plot', description: 'Correlates two numerical metrics, failing to group single-variable test scores into contiguous score bins.' },
  { type: 'bar', label: 'Simple Categorical Bar Chart', description: 'Compares discrete categories separated by gaps, obscuring continuous numeric frequency distributions.' },
  { type: 'histogram', label: 'Continuous Binned Histogram', description: 'Groups continuous numerical data into contiguous adjacent intervals (bins) to reveal distribution shape.' }
]);

updateGameOptions(u3File, 'g3-2-s3-q3', [
  { type: 'pie', label: 'Pie Chart with 35 Slices', description: 'Crowds thirty-five micro-slices into unreadable slivers, making accurate comparison impossible.' },
  { type: 'bar', label: 'Pareto Bar Chart with "Other"', description: 'Ranks top 6 waste categories clearly and consolidates remaining 29 micro-fractions into an "Other" bar.' },
  { type: 'line', label: 'Line Graph Across Categories', description: 'Creates misleading continuous lines connecting unrelated waste categories like glass and cardboard.' }
]);

console.log('G3.2 updated correctly!');
