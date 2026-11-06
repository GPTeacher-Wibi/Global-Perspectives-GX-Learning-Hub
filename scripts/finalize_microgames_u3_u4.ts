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

// ----------------------------------------------------------------------------
// G3.1: Needs A=4, B=4, C=3
// Distribution plan:
// A: Item 3, 6, 9, 11 (4)
// B: Item 1, 4, 7, 10 (4)
// C: Item 2, 5, 8 (3)
// ----------------------------------------------------------------------------
const u3File = path.resolve(process.cwd(), 'src/data/games/unit3MicroGamesData.ts');

// Item 1 -> B
updateGameOptions(u3File, 'g3-1-s1-q1', [
  { id: 'opt-1b', text: 'Mean = 25 minutes, Median = 20 minutes (values exaggerated).', isCorrect: false, feedback: 'Incorrect. Sum is 90 / 5 = 18 mins.' },
  { id: 'opt-1a', text: 'Mean = 18 minutes, Median = 15 minutes (exact central value).', isCorrect: true, feedback: 'Correct! Sum is 90 / 5 = 18 mins; middle value is 15 mins.' },
  { id: 'opt-1c', text: 'Mean = 15 minutes, Median = 18 minutes (calculations reversed).', isCorrect: false, feedback: 'Incorrect. 15 is the median.' }
]);

// Item 2 -> C
updateGameOptions(u3File, 'g3-1-s1-q2', [
  { id: 'opt-2b', text: 'Only Mode can be determined because student allowances are qualitative categories.', isCorrect: false, feedback: 'Incorrect. Currency values are continuous quantitative numbers.' },
  { id: 'opt-2c', text: 'Mean = 10,000 IDR and Median = 25,000 IDR (inaccurate calculation).', isCorrect: false, feedback: 'Incorrect. Middle value is 20,000 IDR.' },
  { id: 'opt-2a', text: 'Mean = 21,667 IDR, Median = 20,000 IDR, and Mode = 20,000 IDR.', isCorrect: true, feedback: 'Correct! Sum is 130,000 / 6 = 21,667 IDR; median is 20,000 IDR.' }
]);

// Item 3 -> A
updateGameOptions(u3File, 'g3-1-s1-q3', [
  { id: 'opt-3a', text: 'Mean = 75, Median = 75, and Mode = 75 (perfectly symmetrical unimodal distribution).', isCorrect: true, feedback: 'Correct! In a balanced symmetrical distribution, Mean, Median, and Mode coincide at 75.' },
  { id: 'opt-3b', text: 'Mean = 85, Median = 65, and Mode = 70 (asymmetrical values).', isCorrect: false, feedback: 'Incorrect. Scores balance symmetrically.' },
  { id: 'opt-3c', text: 'Mode = 90 because 90 is the highest numerical value recorded.', isCorrect: false, feedback: 'Incorrect. Mode is the most frequent score, not the highest.' }
]);

// Item 4 -> B
updateGameOptions(u3File, 'g3-1-s1-q4', [
  { id: 'opt-4b', text: 'The dataset has no mode because all four scores occurred at least once.', isCorrect: false, feedback: 'Incorrect. Bimodal distributions have two modes.' },
  { id: 'opt-4a', text: 'The dataset is bimodal with Modes at 60 and 90, indicating two distinct subgroups.', isCorrect: true, feedback: 'Correct! Bimodal distributions exhibit two peaks representing distinct groups.' },
  { id: 'opt-4c', text: 'The dataset has only one mode at 90 because 90 is the top score.', isCorrect: false, feedback: 'Incorrect. 60 and 90 occur with equal frequency.' }
]);

// Item 5 -> C
updateGameOptions(u3File, 'g3-1-s2-q1', [
  { id: 'opt-1b', text: 'The Mean is unaffected because calculating averages automatically eliminates extreme numbers.', isCorrect: false, feedback: 'Incorrect. The Mean is heavily sensitive to outliers.' },
  { id: 'opt-1c', text: 'The Median shifts to 500 million IDR because extreme values pull the center.', isCorrect: false, feedback: 'Incorrect. The Median stays at the middle rank.' },
  { id: 'opt-1a', text: 'The Mean increases dramatically to 92 million IDR, while the Median remains at 20 million IDR.', isCorrect: true, feedback: 'Correct! The 500M CEO salary skews the mean, whereas the median remains stable.' }
]);

// Item 6 -> A
updateGameOptions(u3File, 'g3-1-s2-q2', [
  { id: 'opt-2a', text: 'Median (3.5 million IDR), because extreme wealth outliers create severe positive skew in the Mean.', isCorrect: true, feedback: 'Correct! In highly skewed income datasets, the median represents the true typical earner.' },
  { id: 'opt-2b', text: 'Mean (18.2 million IDR), because arithmetic averages always incorporate every citizen equally.', isCorrect: false, feedback: 'Incorrect. A few billionaires distort the mean upward.' },
  { id: 'opt-2c', text: 'Range (250 million IDR), because maximum income differences define poverty lines.', isCorrect: false, feedback: 'Incorrect. Range measures dispersion, not central tendency.' }
]);

// Item 7 -> B
updateGameOptions(u3File, 'g3-1-s2-q3', [
  { id: 'opt-3b', text: 'Symmetrical normal distribution with zero skewness and identical central metrics.', isCorrect: false, feedback: 'Incorrect. Zero scores create a long tail.' },
  { id: 'opt-3a', text: 'Negatively skewed (left-skewed), with the Mean pulled below the Median by the zero scores.', isCorrect: true, feedback: 'Correct! Extreme low outliers pull the Mean to the left below the Median.' },
  { id: 'opt-3c', text: 'Positively skewed (right-skewed), with high scores pulling the arithmetic average upward.', isCorrect: false, feedback: 'Incorrect. Zeroes pull the mean downward.' }
]);

// Item 8 -> C
updateGameOptions(u3File, 'g3-1-s2-q4', [
  { id: 'opt-4b', text: 'Delete the five zero scores secretly to make class performance appear flawless.', isCorrect: false, feedback: 'Incorrect. Removing valid data violates research ethics.' },
  { id: 'opt-4c', text: 'Report only the maximum score to celebrate top student achievements.', isCorrect: false, feedback: 'Incorrect. Maximum alone conceals learning gaps.' },
  { id: 'opt-4a', text: 'Report both the Mean and Median, note the negative skew, and explain the five absent zeroes.', isCorrect: true, feedback: 'Correct! Transparent reporting contextualizes outliers without distorting reality.' }
]);

// Item 9 -> A
updateGameOptions(u3File, 'g3-1-s3-q1', [
  { id: 'opt-1a', text: 'Class Alpha has higher consistency; Class Beta has wide score variability (high standard deviation).', isCorrect: true, feedback: 'Correct! Lower standard deviation signifies tighter grouping around the mean.' },
  { id: 'opt-1b', text: 'Both classes have identical performance and learning outcomes because their means are 75.', isCorrect: false, feedback: 'Incorrect. Standard deviation reveals dramatic disparity.' },
  { id: 'opt-1c', text: 'Class Beta is superior because higher standard deviation proves students are smarter.', isCorrect: false, feedback: 'Incorrect. High standard deviation indicates high score inequality.' }
]);

// Item 10 -> B
updateGameOptions(u3File, 'g3-1-s3-q2', [
  { id: 'opt-2b', text: 'Route 202, because high standard deviation means the bus will drive faster.', isCorrect: false, feedback: 'Incorrect. High SD means unpredictable delays.' },
  { id: 'opt-2a', text: 'Route 101, because its low standard deviation means delays are highly predictable (4–6 mins).', isCorrect: true, feedback: 'Correct! Low SD means high predictability and low operational risk.' },
  { id: 'opt-2c', text: 'They are identical in risk because their mean delays are both calculated at 5 minutes.', isCorrect: false, feedback: 'Incorrect. The mean ignores the huge difference in variance.' }
]);

// Item 11 -> A
updateGameOptions(u3File, 'g3-1-s3-q3', [
  { id: 'opt-3a', text: 'Approximately 68% of students score within ±1 Standard Deviation (between 60 and 80).', isCorrect: true, feedback: 'Correct! Under the Empirical Rule, ~68% falls within ±1 SD in normal distributions.' },
  { id: 'opt-3b', text: 'Exactly 100% of students must score within 60 and 80 in any standardized examination.', isCorrect: false, feedback: 'Incorrect. Distribution tails extend beyond ±1 SD.' },
  { id: 'opt-3c', text: 'Only 10% of students score in this range because the standard deviation is 10 points.', isCorrect: false, feedback: 'Incorrect. 10 is the spread unit, not a percentage.' }
]);

// ----------------------------------------------------------------------------
// G3.2: Needs A=4, B=4, C=3
// Distribution plan:
// A: Item 3, 4, 5, 7 (4)
// B: Item 1, 6, 8, 9 (4)
// C: Item 2, 10, 11 (3)
// ----------------------------------------------------------------------------
updateGameOptions(u3File, 'g3-2-s1-q1', [ // B: line
  { type: 'pie', label: 'Pie Chart', description: 'Displays static proportional parts of a single whole as slices summing to 100%.' },
  { type: 'line', label: 'Line Graph', description: 'Connects sequential data points to reveal continuous chronological trends over time.' },
  { type: 'scatter', label: 'Scatter Plot', description: 'Plots paired numerical coordinates across two continuous axes to assess correlation.' }
]);

updateGameOptions(u3File, 'g3-2-s1-q2', [ // C: bar
  { type: 'line', label: 'Line Graph', description: 'Connects sequential numerical observations across an ongoing chronological timeline.' },
  { type: 'scatter', label: 'Scatter Plot', description: 'Plots independent numerical variables across dual axes to detect statistical outliers.' },
  { type: 'bar', label: 'Bar Chart (Column Chart)', description: 'Compares discrete, separate categories using rectangular bars whose heights indicate magnitude.' }
]);

updateGameOptions(u3File, 'g3-2-s1-q3', [ // A: scatter
  { type: 'scatter', label: 'Scatter Plot', description: 'Plots paired coordinates (X, Y) on two continuous numerical axes to detect correlation and outliers.' },
  { type: 'pie', label: 'Pie Chart', description: 'Divides a single circular whole into slice percentages representing proportional parts of 100%.' },
  { type: 'bar', label: 'Bar Chart', description: 'Compares discrete, separate categories using vertical rectangular bars displaying comparative amounts.' }
]);

updateGameOptions(u3File, 'g3-2-s1-q4', [ // A: pie
  { type: 'pie', label: 'Pie Chart', description: 'Shows proportional composition of a whole where mutually exclusive slices sum to exactly 100%.' },
  { type: 'line', label: 'Line Graph', description: 'Tracks continuous chronological shifts across successive time intervals and seasons.' },
  { type: 'scatter', label: 'Scatter Plot', description: 'Evaluates statistical correlation between two separate numerical variables over trials.' }
]);

updateGameOptions(u3File, 'g3-2-s2-q1', [ // A: box-plot
  { type: 'box-plot', label: 'Box Plot (Box-and-Whisker)', description: 'Visualizes 5-number summary (Min, Q1, Median, Q3, Max) and identifies extreme score outliers.' },
  { type: 'line', label: 'Line Graph', description: 'Tracks continuous trajectories over time, obscuring median values and interquartile spread.' },
  { type: 'bar', label: 'Bar Chart', description: 'Displays category averages, concealing data spread, skewness, and extreme score outliers.' }
]);

updateGameOptions(u3File, 'g3-2-s2-q2', [ // B: histogram
  { type: 'pie', label: 'Pie Chart', description: 'Divides a circle into proportional slices, unsuited for large continuous frequency counts.' },
  { type: 'histogram', label: 'Histogram (Continuous Bins)', description: 'Groups continuous numerical test scores into contiguous intervals (bins) to reveal distribution shape.' },
  { type: 'bar', label: 'Categorical Bar Chart', description: 'Compares distinct categorical groups with gaps between bars, obscuring continuous bin flow.' }
]);

updateGameOptions(u3File, 'g3-2-s2-q3', [ // A: bar
  { type: 'bar', label: 'Stacked Bar Chart', description: 'Compares discrete categorical groups clearly without implying false chronological continuity.' },
  { type: 'scatter', label: 'Scatter Plot', description: 'Plots individual unlinked coordinate points, making categorical food satisfaction hard to follow.' },
  { type: 'line', label: 'Multi-Line Trend Graph', description: 'Draws continuous lines between nominal food categories, falsely implying continuous transitions.' }
]);

updateGameOptions(u3File, 'g3-2-s2-q4', [ // B: box-plot
  { type: 'scatter', label: 'Scatter Plot with Trendline', description: 'Plots bivariate numerical pairs across dual axes, failing to summarize multi-group quartile spreads.' },
  { type: 'box-plot', label: 'Box Plot (Box-and-Whisker)', description: 'Displays 5-number distribution summary and highlights extreme statistical outliers across regional groups.' },
  { type: 'pie', label: 'Pie Chart', description: 'Displays static percentage slices of a single whole, unable to represent distribution skewness or income gaps.' }
]);

updateGameOptions(u3File, 'g3-2-s3-q1', [ // B: scatter
  { type: 'pie', label: '3D Exploding Pie Chart', description: 'Distorts geometric slice proportions through artificial perspective angles and adds visual clutter.' },
  { type: 'scatter', label: 'Bivariate Scatter Plot', description: 'Plots paired coordinates across two continuous axes to display linear clustering and correlation strength.' },
  { type: 'line', label: 'Connected Line Graph', description: 'Implies false continuous chronological flow between independent schools that share no sequential timeline.' }
]);

updateGameOptions(u3File, 'g3-2-s3-q2', [ // C: histogram
  { type: 'scatter', label: 'Bivariate Scatter Plot', description: 'Correlates two numerical metrics, failing to group single-variable test scores into contiguous score bins.' },
  { type: 'bar', label: 'Simple Categorical Bar Chart', description: 'Compares discrete categories separated by gaps, obscuring continuous numeric frequency distributions.' },
  { type: 'histogram', label: 'Continuous Binned Histogram', description: 'Groups continuous numerical data into contiguous adjacent intervals (bins) to reveal distribution shape.' }
]);

updateGameOptions(u3File, 'g3-2-s3-q3', [ // C: line
  { type: 'pie', label: 'Pie Chart with 35 Slices', description: 'Crowds thirty-five micro-slices into unreadable slivers, making accurate comparison impossible.' },
  { type: 'bar', label: 'Pareto Bar Chart with "Other"', description: 'Compares discrete static totals, unable to show continuous year-by-year trajectory slope differences.' },
  { type: 'line', label: 'Multi-Line Trend Graph', description: 'Tracks and compares three continuous time-series trajectories on shared axes to identify slope differences.' }
]);

// ----------------------------------------------------------------------------
// G4.3: Needs A=4, B=4, C=3
// Distribution plan:
// A: Item 3, 6, 8, 10 (4)
// B: Item 1, 4, 7, 9 (4)
// C: Item 2, 5, 11 (3)
// ----------------------------------------------------------------------------
const u4File = path.resolve(process.cwd(), 'src/data/games/unit4MicroGamesData.ts');

// Item 1 -> B
updateGameOptions(u4File, 'g4-3-s1-q1', [
  { id: 'opt-1b', text: 'Study A is completely accurate, whereas Study B was produced by unqualified researchers whose findings must be rejected.', isCorrect: false, feedback: 'Incorrect. Conflicting findings indicate contextual heterogeneity, not researcher incompetence.' },
  { id: 'opt-1a', text: 'They diverge on academic outcomes: Study A saw gains in public schools, while Study B saw no gains in laptop-equipped academies.', isCorrect: true, feedback: 'Correct! The contradiction dissolves when analyzing institutional context and existing technology baseline.' },
  { id: 'opt-1c', text: 'There is zero divergence between both investigations; both studies proved conclusively that mobile screens cause optical blindness.', isCorrect: false, feedback: 'Incorrect. Neither study examined physiological vision.' }
]);

// Item 2 -> C
updateGameOptions(u4File, 'g4-3-s1-q2', [
  { id: 'opt-2b', text: 'Declare synthetic microplastics completely harmless because Study B detected zero acute hospital admissions over three years.', isCorrect: false, feedback: 'Incorrect. Three years is far too short to detect chronic bioaccumulation risks.' },
  { id: 'opt-2c', text: 'Accuse Study A researchers of falsifying electron microscope photographs to manufacture public alarm.', isCorrect: false, feedback: 'Incorrect. Physical spectroscopy verified plastic fiber presence.' },
  { id: 'opt-2a', text: 'Synthesize across timelines: physical contamination is present, but chronic clinical health impacts may take decades to manifest.', isCorrect: true, feedback: 'Correct! Reconciles environmental presence with the temporal latency of chronic toxicological health effects.' }
]);

// Item 3 -> A
updateGameOptions(u4File, 'g4-3-s1-q3', [
  { id: 'opt-3a', text: 'Contextual difference in baseline resources: rural schools had no prior digital tools, while urban students already owned computers.', isCorrect: true, feedback: 'Correct! New technology produces huge marginal utility in resource-scarce schools, but shows diminishing returns where devices exist.' },
  { id: 'opt-3b', text: 'Rural students possess superior innate intelligence compared to urban adolescents in metropolitan schools.', isCorrect: false, feedback: 'Incorrect. Unsubstantiated and ethnocentric.' },
  { id: 'opt-3c', text: 'Both studies used defective electrical equipment that corrupted standardized examination scoring spreadsheets.', isCorrect: false, feedback: 'Incorrect. Exam equipment operated correctly.' }
]);

// Item 4 -> B
updateGameOptions(u4File, 'g4-3-s1-q4', [
  { id: 'opt-4b', text: 'Disregard the local community survey because subjective interviews carry zero validity compared to mathematical models.', isCorrect: false, feedback: 'Incorrect. Local lived experiences identify ground-level implementation barriers.' },
  { id: 'opt-4a', text: 'Technical generation potential is high, but real-world execution requires resolving land rights and local grid connectivity.', isCorrect: true, feedback: 'Correct! Synthesizes physical engineering feasibility with social and institutional implementation constraints.' },
  { id: 'opt-4c', text: 'Reject satellite data and conclude that solar farms produce negative electrical generation in tropical climates.', isCorrect: false, feedback: 'Incorrect. Solar physics data is empirical.' }
]);

// Item 5 -> C
updateGameOptions(u4File, 'g4-3-s2-q1', [
  { id: 'opt-1b', text: 'Methodological flaw: the university researchers should have forced all mothers to drink formula milk exclusively.', isCorrect: false, feedback: 'Incorrect. Forcing feeding practices violates ethics.' },
  { id: 'opt-1c', text: 'Biological impossibility: maternal nutrition has zero measurable influence on infant growth rates in tropical islands.', isCorrect: false, feedback: 'Incorrect. Nutritional biology is established.' },
  { id: 'opt-1a', text: 'Confounding variable: higher-income families could afford clean drinking water and medical care, masking isolated formula effects.', isCorrect: true, feedback: 'Correct! Income, sanitation, and healthcare access confound the direct relationship between feeding mode and health.' }
]);

// Item 6 -> A
updateGameOptions(u4File, 'g4-3-s2-q2', [
  { id: 'opt-2a', text: 'Seasonal temporal heterogeneity: Study X measured dry-season tourism peaks, while Study Y evaluated wet-season agricultural lulls.', isCorrect: true, feedback: 'Correct! Conflicting economic data often reflects temporal and seasonal cycles in island economies.' },
  { id: 'opt-2b', text: 'Balinese business enterprises intentionally falsified accounting ledgers during one of the two investigation periods.', isCorrect: false, feedback: 'Incorrect. Unsubstantiated fraud accusation.' },
  { id: 'opt-2c', text: 'Island economies operate outside international macroeconomic rules and cannot be evaluated using financial numbers.', isCorrect: false, feedback: 'Incorrect. Island economies follow economic principles.' }
]);

// Item 7 -> B
updateGameOptions(u4File, 'g4-3-s2-q3', [
  { id: 'opt-3b', text: 'Rely solely on the state report because government documents hold superior legal authority over university studies.', isCorrect: false, feedback: 'Incorrect. Independent scholarship often uncovers ground-level realities.' },
  { id: 'opt-3a', text: 'Reconcile metrics: the state measured initial planting saplings, while the university tracked long-term 3-year seedling survival.', isCorrect: true, feedback: 'Correct! Reconciles output metrics (trees planted) with long-term ecological outcome metrics (trees surviving).' },
  { id: 'opt-3c', text: 'Conclude that mangrove trees cause coastal flooding by blocking incoming oceanic tides.', isCorrect: false, feedback: 'Incorrect. Mangroves mitigate wave energy.' }
]);

// Item 8 -> A
updateGameOptions(u4File, 'g4-3-s2-q4', [
  { id: 'opt-4a', text: 'Measurement bias: self-reported questionnaires overestimate productivity, while objective biometric monitors track cognitive fatigue.', isCorrect: true, feedback: 'Correct! Subjective self-perception often diverges sharply from objective physiological and performance metrics.' },
  { id: 'opt-4b', text: 'Coffee has zero chemical or biological effect on the human central nervous system under any circumstance.', isCorrect: false, feedback: 'Incorrect. Caffeine is a proven psychoactive stimulant.' },
  { id: 'opt-4c', text: 'Employees were secretly replaced by paid actors during the laboratory phase of the study.', isCorrect: false, feedback: 'Incorrect. Absurd conspiracy claim.' }
]);

// Item 9 -> B
updateGameOptions(u4File, 'g4-3-s3-q1', [
  { id: 'opt-1b', text: 'Choose one study randomly and discard the other three to keep the policy presentation brief and simple.', isCorrect: false, feedback: 'Incorrect. Cherry-picking data violates research ethics.' },
  { id: 'opt-1a', text: 'A multi-criteria narrative synthesis matrix mapping environmental, economic, social, and technological dimensions simultaneously.', isCorrect: true, feedback: 'Correct! Complex multi-evidence debates require integrated multi-criteria synthesis.' },
  { id: 'opt-1c', text: 'Average the numerical percentages across all studies into a single meaningless arithmetic figure.', isCorrect: false, feedback: 'Incorrect. Averaging diverse qualitative and quantitative metrics is mathematically invalid.' }
]);

// Item 10 -> A
updateGameOptions(u4File, 'g4-3-s3-q2', [
  { id: 'opt-2a', text: 'Identify boundary conditions: AI boosts introductory speed, but risks skill atrophy and requires human pedagogical supervision.', isCorrect: true, feedback: 'Correct! Synthesizes benefits and risks by articulating specific operational boundary conditions.' },
  { id: 'opt-2b', text: 'Ban all computer technologies from all schools nationwide to eliminate all cognitive risks.', isCorrect: false, feedback: 'Incorrect. Extreme overreaction.' },
  { id: 'opt-2c', text: 'Replace all human classroom teachers with artificial intelligence algorithms immediately.', isCorrect: false, feedback: 'Incorrect. Disregards pedagogy and ethics.' }
]);

// Item 11 -> C
updateGameOptions(u4File, 'g4-3-s3-q3', [
  { id: 'opt-3b', text: 'Assert that when peer-reviewed studies disagree, all scientific research is useless and subjective.', isCorrect: false, feedback: 'Incorrect. Divergence reveals complexity, not uselessness.' },
  { id: 'opt-3c', text: 'Falsify evidence citations so that all cited studies appear to agree with the author’s favorite thesis.', isCorrect: false, feedback: 'Incorrect. Academic dishonesty.' },
  { id: 'opt-3a', text: 'Demonstrate intellectual maturity by mapping divergence, explaining underlying variables, and proposing hedged solutions.', isCorrect: true, feedback: 'Correct! Cambridge Global Perspectives rewards critical synthesis of contradictory evidence and nuanced hedging.' }
]);

console.log('Finalized G3.1, G3.2, G4.3 distributions!');
