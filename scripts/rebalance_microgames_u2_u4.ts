import * as fs from 'fs';
import * as path from 'path';

// Helper to update options array in games
function updateGameOptions(filePath: string, itemId: string, newOptions: any[], idProp = 'id') {
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

  // Format new options
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
// G2.2 UPDATES (10 items)
// ----------------------------------------------------------------------------
const g2_2Updates = [
  {
    id: 'g2-2-s1-q1',
    options: [
      { id: 'opt-1b', text: 'Publishing the findings immediately in an international peer-reviewed journal.', isCorrect: false, feedback: 'Incorrect. Publishing occurs at the conclusion of the research lifecycle, not before collecting data.' },
      { id: 'opt-1a', text: 'Conducting a Literature Review to understand established variables and existing findings.', isCorrect: true, feedback: 'Correct! Skipping literature reviews causes researchers to reinvent the wheel or use flawed variables.' },
      { id: 'opt-1c', text: 'Calculating the standard deviation and variance of classroom academic semester grades.', isCorrect: false, feedback: 'Incorrect. Statistical calculation is part of data analysis, which occurs after structured data collection.' }
    ]
  },
  {
    id: 'g2-2-s1-q2',
    options: [
      { id: 'opt-2b', text: 'Step 8: Formulating final municipal policy recommendations and action plans.', isCorrect: false, feedback: 'Incorrect. Recommendations come at the end.' },
      { id: 'opt-2c', text: 'Step 6: Executing advanced thematic qualitative coding matrices.', isCorrect: false, feedback: 'Incorrect. Thematic analysis belongs to Step 6.' },
      { id: 'opt-2a', text: 'Step 4: Methodology & Design (specifying ethical protocols, sampling frameworks, and data tools).', isCorrect: true, feedback: 'Correct! Methodology & Design specifies how sampling is conducted and ensures consent before collecting data.' }
    ]
  },
  {
    id: 'g2-2-s1-q3',
    options: [
      { id: 'opt-3a', text: 'Step 7: Discussion & Interpretation (contextualizing empirical findings against existing literature).', isCorrect: true, feedback: 'Correct! Discussion explains what findings mean in relation to prior published studies.' },
      { id: 'opt-3b', text: 'Step 2: Preparing a comprehensive academic literature review bibliography.', isCorrect: false, feedback: 'Incorrect. Literature reviews precede data collection.' },
      { id: 'opt-3c', text: 'Step 5: Distributing standardized surveys to additional participants.', isCorrect: false, feedback: 'Incorrect. Collecting more data does not substitute for interpreting existing findings.' }
    ]
  },
  {
    id: 'g2-2-s1-q4',
    options: [
      { id: 'opt-4b', text: 'Drafting the concluding bibliography according to APA academic guidelines.', isCorrect: false, feedback: 'Incorrect. Referencing is essential but does not define research focus.' },
      { id: 'opt-4a', text: 'Step 3: Question & Objectives (transforming vague general interest into focused, answerable inquiry).', isCorrect: true, feedback: 'Correct! Framing specific questions defines scope, boundaries, and variables.' },
      { id: 'opt-4c', text: 'Designing colorful presentation slide graphics for the final exhibition.', isCorrect: false, feedback: 'Incorrect. Graphic design does not solve lack of focus.' }
    ]
  },
  {
    id: 'g2-2-s2-q1',
    options: [
      { id: 'opt-1b', text: 'Hypothesis testing requires calculating statistical confidence intervals before collecting evidence.', isCorrect: false, feedback: 'Incorrect. Tests operate on collected data.' },
      { id: 'opt-1c', text: 'Data analysis and data collection must occur simultaneously in qualitative research designs.', isCorrect: false, feedback: 'Incorrect. You cannot run full analysis without data.' },
      { id: 'opt-1a', text: 'Formulating the question, designing the methodology, and obtaining ethics approval must precede data collection.', isCorrect: true, feedback: 'Correct! Data collection requires a question, sampling design, and ethical permissions.' }
    ]
  },
  {
    id: 'g2-2-s2-q2',
    options: [
      { id: 'opt-2a', text: 'Cleaning raw data, verifying participant entries, and computing statistical descriptive frequencies.', isCorrect: true, feedback: 'Correct! Data Analysis (Step 6) structures raw evidence before interpretation.' },
      { id: 'opt-2b', text: 'Submitting policy petitions to provincial parliament committees for legislative review.', isCorrect: false, feedback: 'Incorrect. Action plans come after conclusion.' },
      { id: 'opt-2c', text: 'Re-writing the literature review to match the preferred political beliefs of respondents.', isCorrect: false, feedback: 'Incorrect. Falsifying reviews violates academic integrity.' }
    ]
  },
  {
    id: 'g2-2-s2-q3',
    options: [
      { id: 'opt-3b', text: 'Conducting in-depth semi-structured qualitative interviews with five senior school administrators.', isCorrect: false, feedback: 'Incorrect. Qualitative interviews do not measure statistical incidence.' },
      { id: 'opt-3a', text: 'Administering a structured anonymous survey across a stratified random sample of 250 students.', isCorrect: true, feedback: 'Correct! Quantitative prevalence requires representative probabilistic sampling and standardized tools.' },
      { id: 'opt-3c', text: 'Writing reflective personal journal entries regarding childhood memories of playground exercise.', isCorrect: false, feedback: 'Incorrect. Personal diaries cannot establish population-level rates.' }
    ]
  },
  {
    id: 'g2-2-s2-q4',
    options: [
      { id: 'opt-4b', text: 'Presenting raw survey spreadsheets directly to government ministers without summarizing findings.', isCorrect: false, feedback: 'Incorrect. Raw spreadsheets are uninterpreted.' },
      { id: 'opt-4c', text: 'Claiming that the student’s personal opinions represent universal facts for all provincial schools.', isCorrect: false, feedback: 'Incorrect. Unsubstantiated claims violate research rigor.' },
      { id: 'opt-4a', text: 'Step 8: Conclusion & Recommendations (synthesizing evidence, stating limitations, and proposing actions).', isCorrect: true, feedback: 'Correct! Step 8 translates academic findings into actionable, contextualized solutions.' }
    ]
  },
  {
    id: 'g2-2-s3-q1',
    options: [
      { id: 'opt-1a', text: 'Revising research questions iteratively as unexpected empirical findings reveal deeper underlying mechanisms.', isCorrect: true, feedback: 'Correct! The pipeline is iterative: anomalous data causes researchers to refine questions and models.' },
      { id: 'opt-1b', text: 'Changing survey response numbers secretly when statistical results do not confirm hypotheses.', isCorrect: false, feedback: 'Incorrect. Falsifying data is scientific fraud.' },
      { id: 'opt-1c', text: 'Abandoning scientific methodology to rely entirely on informal peer speculation and rumor.', isCorrect: false, feedback: 'Incorrect. Iteration requires systematic rigor.' }
    ]
  },
  {
    id: 'g2-2-s3-q2',
    options: [
      { id: 'opt-2b', text: 'Rejecting all scientific research because natural environments constantly undergo weather changes.', isCorrect: false, feedback: 'Incorrect. Changing conditions require rigorous updates.' },
      { id: 'opt-2a', text: 'Acknowledge ecological limitations openly, highlight seasonal variations, and recommend longitudinal follow-up.', isCorrect: true, feedback: 'Correct! Robust research explicitly articulates methodological and environmental constraints.' },
      { id: 'opt-2c', text: 'Pretending that rainy season conditions never occurred to make data look cleaner and simpler.', isCorrect: false, feedback: 'Incorrect. Concealing environmental factors destroys study validity.' }
    ]
  }
];

const u2File = path.resolve(process.cwd(), 'src/data/games/unit2MicroGamesData.ts');
for (const u of g2_2Updates) {
  updateGameOptions(u2File, u.id, u.options);
}
console.log('G2.2 updated successfully');

// ----------------------------------------------------------------------------
// G3.1 UPDATES (11 items)
// ----------------------------------------------------------------------------
const g3_1Updates = [
  {
    id: 'g3-1-s1-q1',
    options: [
      { id: 'opt-1b', text: 'Mean = 25 minutes, Median = 20 minutes (values exaggerated).', isCorrect: false, feedback: 'Incorrect. Sum is 90 / 5 = 18 mins.' },
      { id: 'opt-1a', text: 'Mean = 18 minutes, Median = 15 minutes (exact central value).', isCorrect: true, feedback: 'Correct! Sum is 90 / 5 = 18 mins; middle value is 15 mins.' },
      { id: 'opt-1c', text: 'Mean = 15 minutes, Median = 18 minutes (calculations reversed).', isCorrect: false, feedback: 'Incorrect. 15 is the median.' }
    ]
  },
  {
    id: 'g3-1-s1-q2',
    options: [
      { id: 'opt-2b', text: 'Only Mode can be determined because student allowances are qualitative categories.', isCorrect: false, feedback: 'Incorrect. Currency values are continuous quantitative numbers.' },
      { id: 'opt-2c', text: 'Mean = 10,000 IDR and Median = 25,000 IDR (inaccurate calculation).', isCorrect: false, feedback: 'Incorrect. Middle value is 20,000 IDR.' },
      { id: 'opt-2a', text: 'Mean = 21,667 IDR, Median = 20,000 IDR, and Mode = 20,000 IDR.', isCorrect: true, feedback: 'Correct! Sum is 130,000 / 6 = 21,667 IDR; median is 20,000 IDR.' }
    ]
  },
  {
    id: 'g3-1-s1-q3',
    options: [
      { id: 'opt-3a', text: 'Mean = 75, Median = 75, and Mode = 75 (perfectly symmetrical unimodal distribution).', isCorrect: true, feedback: 'Correct! In a balanced symmetrical distribution, Mean, Median, and Mode coincide at 75.' },
      { id: 'opt-3b', text: 'Mean = 85, Median = 65, and Mode = 70 (asymmetrical values).', isCorrect: false, feedback: 'Incorrect. Scores balance symmetrically.' },
      { id: 'opt-3c', text: 'Mode = 90 because 90 is the highest numerical value recorded.', isCorrect: false, feedback: 'Incorrect. Mode is the most frequent score, not the highest.' }
    ]
  },
  {
    id: 'g3-1-s1-q4',
    options: [
      { id: 'opt-4b', text: 'The dataset has no mode because all four scores occurred at least once.', isCorrect: false, feedback: 'Incorrect. Bimodal distributions have two modes.' },
      { id: 'opt-4c', text: 'The dataset has only one mode at 90 because 90 is the top score.', isCorrect: false, feedback: 'Incorrect. 60 and 90 occur with equal frequency.' },
      { id: 'opt-4a', text: 'The dataset is bimodal with Modes at 60 and 90, indicating two distinct subgroups.', isCorrect: true, feedback: 'Correct! Bimodal distributions exhibit two peaks representing distinct groups.' }
    ]
  },
  {
    id: 'g3-1-s2-q1',
    options: [
      { id: 'opt-1b', text: 'The Mean is unaffected because calculating averages automatically eliminates extreme numbers.', isCorrect: false, feedback: 'Incorrect. The Mean is heavily sensitive to outliers.' },
      { id: 'opt-1c', text: 'The Median shifts to 500 million IDR because extreme values pull the center.', isCorrect: false, feedback: 'Incorrect. The Median stays at the middle rank.' },
      { id: 'opt-1a', text: 'The Mean increases dramatically to 92 million IDR, while the Median remains at 20 million IDR.', isCorrect: true, feedback: 'Correct! The 500M CEO salary skews the mean, whereas the median remains stable.' }
    ]
  },
  {
    id: 'g3-1-s2-q2',
    options: [
      { id: 'opt-2a', text: 'Median (3.5 million IDR), because extreme wealth outliers create severe positive skew in the Mean.', isCorrect: true, feedback: 'Correct! In highly skewed income datasets, the median represents the true typical earner.' },
      { id: 'opt-2b', text: 'Mean (18.2 million IDR), because arithmetic averages always incorporate every citizen equally.', isCorrect: false, feedback: 'Incorrect. A few billionaires distort the mean upward.' },
      { id: 'opt-2c', text: 'Range (250 million IDR), because maximum income differences define poverty lines.', isCorrect: false, feedback: 'Incorrect. Range measures dispersion, not central tendency.' }
    ]
  },
  {
    id: 'g3-1-s2-q3',
    options: [
      { id: 'opt-3b', text: 'Symmetrical normal distribution with zero skewness and identical central metrics.', isCorrect: false, feedback: 'Incorrect. Zero scores create a long tail.' },
      { id: 'opt-3a', text: 'Negatively skewed (left-skewed), with the Mean pulled below the Median by the zero scores.', isCorrect: true, feedback: 'Correct! Extreme low outliers pull the Mean to the left below the Median.' },
      { id: 'opt-3c', text: 'Positively skewed (right-skewed), with high scores pulling the arithmetic average upward.', isCorrect: false, feedback: 'Incorrect. Zeroes pull the mean downward.' }
    ]
  },
  {
    id: 'g3-1-s2-q4',
    options: [
      { id: 'opt-4b', text: 'Delete the five zero scores secretly to make class performance appear flawless.', isCorrect: false, feedback: 'Incorrect. Removing valid data violates research ethics.' },
      { id: 'opt-4c', text: 'Report only the maximum score to celebrate top student achievements.', isCorrect: false, feedback: 'Incorrect. Maximum alone conceals learning gaps.' },
      { id: 'opt-4a', text: 'Report both the Mean and Median, note the negative skew, and explain the five absent zeroes.', isCorrect: true, feedback: 'Correct! Transparent reporting contextualizes outliers without distorting reality.' }
    ]
  },
  {
    id: 'g3-1-s3-q1',
    options: [
      { id: 'opt-1a', text: 'Class Alpha has higher consistency; Class Beta has wide score variability (high standard deviation).', isCorrect: true, feedback: 'Correct! Lower standard deviation signifies tighter grouping around the mean.' },
      { id: 'opt-1b', text: 'Both classes have identical performance and learning outcomes because their means are 75.', isCorrect: false, feedback: 'Incorrect. Standard deviation reveals dramatic disparity.' },
      { id: 'opt-1c', text: 'Class Beta is superior because higher standard deviation proves students are smarter.', isCorrect: false, feedback: 'Incorrect. High standard deviation indicates high score inequality.' }
    ]
  },
  {
    id: 'g3-1-s3-q2',
    options: [
      { id: 'opt-2b', text: 'Route 202, because high standard deviation means the bus will drive faster.', isCorrect: false, feedback: 'Incorrect. High SD means unpredictable delays.' },
      { id: 'opt-2a', text: 'Route 101, because its low standard deviation means delays are highly predictable (4–6 mins).', isCorrect: true, feedback: 'Correct! Low SD means high predictability and low operational risk.' },
      { id: 'opt-2c', text: 'They are identical in risk because their mean delays are both calculated at 5 minutes.', isCorrect: false, feedback: 'Incorrect. The mean ignores the huge difference in variance.' }
    ]
  },
  {
    id: 'g3-1-s3-q3',
    options: [
      { id: 'opt-3a', text: 'Approximately 68% of students score within ±1 Standard Deviation (between 60 and 80).', isCorrect: true, feedback: 'Correct! Under the Empirical Rule, ~68% falls within ±1 SD in normal distributions.' },
      { id: 'opt-3b', text: 'Exactly 100% of students must score within 60 and 80 in any standardized examination.', isCorrect: false, feedback: 'Incorrect. Distribution tails extend beyond ±1 SD.' },
      { id: 'opt-3c', text: 'Only 10% of students score in this range because the standard deviation is 10 points.', isCorrect: false, feedback: 'Incorrect. 10 is the spread unit, not a percentage.' }
    ]
  }
];

const u3File = path.resolve(process.cwd(), 'src/data/games/unit3MicroGamesData.ts');
for (const u of g3_1Updates) {
  updateGameOptions(u3File, u.id, u.options);
}
console.log('G3.1 updated successfully');

// ----------------------------------------------------------------------------
// G3.2 UPDATES (11 items)
// ----------------------------------------------------------------------------
const g3_2Updates = [
  {
    id: 'g3-2-s1-q1',
    options: [
      { type: 'pie', label: 'Pie Chart', description: 'Displays static proportional parts of a single whole as slices summing to 100%.' },
      { type: 'line', label: 'Line Graph', description: 'Connects sequential data points to reveal continuous chronological trends over time.' },
      { type: 'scatter', label: 'Scatter Plot', description: 'Plots paired numerical coordinates across two continuous axes to assess correlation.' }
    ]
  },
  {
    id: 'g3-2-s1-q2',
    options: [
      { type: 'line', label: 'Line Graph', description: 'Connects sequential numerical observations across an ongoing chronological timeline.' },
      { type: 'scatter', label: 'Scatter Plot', description: 'Plots independent numerical variables across dual axes to detect statistical outliers.' },
      { type: 'bar', label: 'Bar Chart (Column Chart)', description: 'Compares discrete, separate categories using rectangular bars whose heights indicate magnitude.' }
    ]
  },
  {
    id: 'g3-2-s1-q3',
    options: [
      { type: 'scatter', label: 'Scatter Plot', description: 'Plots paired coordinates (X, Y) on two continuous numerical axes to detect correlation and outliers.' },
      { type: 'pie', label: 'Pie Chart', description: 'Divides a single circular whole into slice percentages representing proportional parts of 100%.' },
      { type: 'bar', label: 'Bar Chart', description: 'Compares discrete, separate categories using vertical rectangular bars displaying comparative amounts.' }
    ]
  },
  {
    id: 'g3-2-s1-q4',
    options: [
      { type: 'pie', label: 'Pie Chart', description: 'Shows proportional composition of a whole where mutually exclusive slices sum to exactly 100%.' },
      { type: 'line', label: 'Line Graph', description: 'Tracks continuous chronological shifts across successive time intervals and seasons.' },
      { type: 'scatter', label: 'Scatter Plot', description: 'Evaluates statistical correlation between two separate numerical variables over trials.' }
    ]
  },
  {
    id: 'g3-2-s2-q1',
    options: [
      { type: 'line', label: 'Line Graph', description: 'Tracks continuous trajectories over time, obscuring median values and interquartile spread.' },
      { type: 'bar', label: 'Bar Chart', description: 'Displays category averages, concealing data spread, skewness, and extreme score outliers.' },
      { type: 'box-plot', label: 'Box Plot (Box-and-Whisker)', description: 'Visualizes 5-number summary (Min, Q1, Median, Q3, Max) and identifies extreme score outliers.' }
    ]
  },
  {
    id: 'g3-2-s2-q2',
    options: [
      { type: 'histogram', label: 'Histogram (Continuous Bins)', description: 'Groups continuous numerical test scores into contiguous intervals (bins) to reveal distribution shape.' },
      { type: 'pie', label: 'Pie Chart', description: 'Divides a circle into proportional slices, unsuited for large continuous frequency counts.' },
      { type: 'bar', label: 'Categorical Bar Chart', description: 'Compares distinct categorical groups with gaps between bars, obscuring continuous bin flow.' }
    ]
  },
  {
    id: 'g3-2-s2-q3',
    options: [
      { type: 'bar', label: 'Stacked Bar Chart', description: 'Displays discrete category components, unable to track continuous multi-year trajectories.' },
      { type: 'scatter', label: 'Scatter Plot', description: 'Plots individual unlinked coordinate points, making longitudinal national trends hard to follow.' },
      { type: 'line', label: 'Multi-Line Trend Graph', description: 'Tracks and compares continuous annual GDP growth trajectories for five distinct nations over 20 years.' }
    ]
  },
  {
    id: 'g3-2-s2-q4',
    options: [
      { type: 'scatter', label: 'Scatter Plot with Trendline', description: 'Plots 50 bivariate pairs (speed vs braking distance) to confirm mathematical non-linear curve.' },
      { type: 'pie', label: 'Pie Chart', description: 'Displays static percentage slices of a single whole, unable to represent physical speed curves.' },
      { type: 'histogram', label: 'Single-Variable Histogram', description: 'Shows frequency distribution of one variable, failing to correlate speed against braking distance.' }
    ]
  },
  {
    id: 'g3-2-s3-q1',
    options: [
      { type: 'pie', label: '3D Exploding Pie Chart', description: 'Distorts geometric slice proportions through artificial perspective angles and adds visual clutter.' },
      { type: 'bar', label: 'Horizontal Ranked Bar Chart', description: 'Arranges distinct categories in clean descending order on an un-truncated axis for clear comparison.' },
      { type: 'line', label: 'Connected Line Graph', description: 'Implies false chronological flow between discrete products that share no sequential relationship.' }
    ]
  },
  {
    id: 'g3-2-s3-q2',
    options: [
      { type: 'scatter', label: 'Bivariate Scatter Plot', description: 'Correlates two numerical metrics, failing to display complete 5-number quartile distributions.' },
      { type: 'bar', label: 'Simple Column Bar Chart', description: 'Compares basic mean scores while concealing score dispersion, median shifts, and quartile spread.' },
      { type: 'box-plot', label: 'Comparative Multi-Group Box Plot', description: 'Displays medians, interquartile ranges, and outlier distributions across all four hospital branches.' }
    ]
  },
  {
    id: 'g3-2-s3-q3',
    options: [
      { type: 'pie', label: 'Pie Chart with 35 Slices', description: 'Crowds thirty-five micro-slices into unreadable slivers, making accurate comparison impossible.' },
      { type: 'bar', label: 'Pareto Bar Chart with "Other"', description: 'Ranks top 6 waste categories clearly and consolidates remaining 29 micro-fractions into an "Other" bar.' },
      { type: 'line', label: 'Line Graph Across Categories', description: 'Creates misleading continuous lines connecting unrelated waste categories like glass and cardboard.' }
    ]
  }
];

for (const u of g3_2Updates) {
  updateGameOptions(u3File, u.id, u.options);
}
console.log('G3.2 updated successfully');

// ----------------------------------------------------------------------------
// G3.3 UPDATES (11 items)
// ----------------------------------------------------------------------------
const g3_3Updates = [
  {
    id: 'g3-3-s1-q1',
    options: [
      { id: 'opt-1b', text: 'Counting the exact number of vowels and consonants appearing across participant interview transcripts.', isCorrect: false, feedback: 'Incorrect. Qualitative coding extracts semantic meaning, not letter counts.' },
      { id: 'opt-1a', text: 'A qualitative code (a concise label summarizing the core semantic meaning of a specific text excerpt).', isCorrect: true, feedback: 'Correct! A code identifies an interesting, meaningful feature of qualitative data.' },
      { id: 'opt-1c', text: 'A numerical regression coefficient testing statistical correlation between two variables.', isCorrect: false, feedback: 'Incorrect. Regression is quantitative.' }
    ]
  },
  {
    id: 'g3-3-s1-q2',
    options: [
      { id: 'opt-2b', text: 'A single isolated quotation spoken by one participant during an informal lunchtime chat.', isCorrect: false, feedback: 'Incorrect. A theme requires repeated patterns across multiple sources.' },
      { id: 'opt-2c', text: 'The numerical percentage of words containing more than three grammatical syllables.', isCorrect: false, feedback: 'Incorrect. Syllable count is lexical statistics.' },
      { id: 'opt-2a', text: 'An overarching theme (a broader pattern of shared meaning uniting multiple related empirical codes).', isCorrect: true, feedback: 'Correct! Themes synthesize related codes into broader interpretive concepts.' }
    ]
  },
  {
    id: 'g3-3-s1-q3',
    options: [
      { id: 'opt-3a', text: 'Code: "Digital Financial Barrier" (identifies the specific technological and economic obstacle described).', isCorrect: true, feedback: 'Correct! This code directly captures the smartphone and mobile banking barrier.' },
      { id: 'opt-3b', text: 'Code: "Complete Technology Denial" (assumes the elder rejects all modern science).', isCorrect: false, feedback: 'Incorrect. Overinterprets lack of smartphone as complete rejection of science.' },
      { id: 'opt-3c', text: 'Code: "Urban Transportation Routine" (describes public bus routes in Bandung).', isCorrect: false, feedback: 'Incorrect. The quote is about financial payments, not bus routes.' }
    ]
  },
  {
    id: 'g3-3-s1-q4',
    options: [
      { id: 'opt-4b', text: 'Theme: "Complete Collapse of Traditional Agriculture Across Indonesia".', isCorrect: false, feedback: 'Incorrect. Overgeneralizes localized canal issues.' },
      { id: 'opt-4a', text: 'Theme: "Systemic Infrastructure Vulnerability to Climatic and Upstream Disturbances".', isCorrect: true, feedback: 'Correct! Captures the common thread of external, infrastructure-dependent vulnerability.' },
      { id: 'opt-4c', text: 'Theme: "Personal Financial Greed Among Rural Provincial Farmers".', isCorrect: false, feedback: 'Incorrect. Farmers face systemic infrastructural challenges.' }
    ]
  },
  {
    id: 'g3-3-s2-q1',
    options: [
      { id: 'opt-1b', text: 'Discourse Analysis examining power structures in political speeches.', isCorrect: false, feedback: 'Incorrect. Discourse analysis interrogates institutional power.' },
      { id: 'opt-1c', text: 'Narrative Analysis tracking the biographical journey of a single leader.', isCorrect: false, feedback: 'Incorrect. Focus is on word frequency across newspapers.' },
      { id: 'opt-1a', text: 'Content Analysis (systematically quantifying frequencies of specific words and phrases in media texts).', isCorrect: true, feedback: 'Correct! Content analysis counts categories and keywords systematically.' }
    ]
  },
  {
    id: 'g3-3-s2-q2',
    options: [
      { id: 'opt-2a', text: 'Thematic Analysis (identifying, analyzing, and reporting recurring patterns of meaning across qualitative data).', isCorrect: true, feedback: 'Correct! Thematic analysis is the established method for identifying shared experiential themes.' },
      { id: 'opt-2b', text: 'Purely quantitative regression modeling using standardized Likert questionnaires.', isCorrect: false, feedback: 'Incorrect. Open-ended interviews require qualitative coding.' },
      { id: 'opt-2c', text: 'Bibliometric citation analysis measuring journal publication impact factors.', isCorrect: false, feedback: 'Incorrect. Bibliometrics measures citations, not lived experiences.' }
    ]
  },
  {
    id: 'g3-3-s2-q3',
    options: [
      { id: 'opt-3b', text: 'Content Analysis counting how many times the word "flood" occurs in diaries.', isCorrect: false, feedback: 'Incorrect. Counting words misses the chronological arc.' },
      { id: 'opt-3c', text: 'Quantitative chi-square analysis testing categorical independence of variables.', isCorrect: false, feedback: 'Incorrect. Stories cannot be processed as chi-square matrices.' },
      { id: 'opt-3a', text: 'Narrative Analysis (focusing on how individuals construct biographical stories to make sense of events).', isCorrect: true, feedback: 'Correct! Narrative analysis preserves chronological story arcs and identity formation.' }
    ]
  },
  {
    id: 'g3-3-s2-q4',
    options: [
      { id: 'opt-4a', text: 'Discourse Analysis (interrogating how institutional language reproduces authority and marginalizes groups).', isCorrect: true, feedback: 'Correct! Discourse analysis investigates how language constructs power relations.' },
      { id: 'opt-4b', text: 'Descriptive statistics calculating standard deviation of document word lengths.', isCorrect: false, feedback: 'Incorrect. Word length does not reveal political power dynamics.' },
      { id: 'opt-4c', text: 'Laboratory experiment testing chemical soil contamination levels in Kalimantan.', isCorrect: false, feedback: 'Incorrect. Discourse analysis analyzes text, not soil chemistry.' }
    ]
  },
  {
    id: 'g3-3-s3-q1',
    options: [
      { id: 'opt-1b', text: 'The researcher should delete the three negative interviews to make the study appear harmonious.', isCorrect: false, feedback: 'Incorrect. Discarding contradicting data violates academic integrity.' },
      { id: 'opt-1a', text: 'Maintain academic rigor by analyzing negative cases, refining the theme to explain generational divergence.', isCorrect: true, feedback: 'Correct! Incorporating outlier cases prevents confirmation bias.' },
      { id: 'opt-1c', text: 'Declare the entire study invalid and terminate the inquiry project immediately.', isCorrect: false, feedback: 'Incorrect. Divergence enriches qualitative insight.' }
    ]
  },
  {
    id: 'g3-3-s3-q2',
    options: [
      { id: 'opt-2b', text: 'Subjective confirmation bias: the student only looked for quotes that proved their original idea.', isCorrect: false, feedback: 'Incorrect. Independent agreement reduces individual bias.' },
      { id: 'opt-2c', text: 'Complete failure of research ethics because students shared data spreadsheets.', isCorrect: false, feedback: 'Incorrect. Cross-coding is standard scientific practice.' },
      { id: 'opt-2a', text: 'Inter-coder reliability (multiple researchers independently applying the coding framework to verify consistency).', isCorrect: true, feedback: 'Correct! Independent agreement confirms that codes reflect data rather than one researcher’s whim.' }
    ]
  },
  {
    id: 'g3-3-s3-q3',
    options: [
      { id: 'opt-3a', text: 'Grounding themes in verbatim participant quotes while explaining how the researcher’s perspective shaped interpretation.', isCorrect: true, feedback: 'Correct! Transparent reflexivity and evidentiary quotations ensure qualitative trustworthiness.' },
      { id: 'opt-3b', text: 'Claiming that qualitative research produces 100% mathematical certainty identical to physics.', isCorrect: false, feedback: 'Incorrect. Qualitative inquiry produces rich interpretive depth, not physical laws.' },
      { id: 'opt-3c', text: 'Refusing to explain how themes were derived to protect proprietary intellectual secrets.', isCorrect: false, feedback: 'Incorrect. Transparency is the core criterion of research credibility.' }
    ]
  }
];

for (const u of g3_3Updates) {
  updateGameOptions(u3File, u.id, u.options);
}
console.log('G3.3 updated successfully');

// ----------------------------------------------------------------------------
// G4.3 UPDATES (11 items)
// ----------------------------------------------------------------------------
const g4_3Updates = [
  {
    id: 'g4-3-s1-q1',
    options: [
      { id: 'opt-1b', text: 'Study A is completely accurate, whereas Study B was produced by unqualified researchers whose findings must be rejected.', isCorrect: false, feedback: 'Incorrect. Conflicting findings indicate contextual heterogeneity, not researcher incompetence.' },
      { id: 'opt-1a', text: 'They diverge on academic outcomes: Study A saw gains in public schools, while Study B saw no gains in laptop-equipped academies.', isCorrect: true, feedback: 'Correct! The contradiction dissolves when analyzing institutional context and existing technology baseline.' },
      { id: 'opt-1c', text: 'There is zero divergence between both investigations; both studies proved conclusively that mobile screens cause optical blindness.', isCorrect: false, feedback: 'Incorrect. Neither study examined physiological vision.' }
    ]
  },
  {
    id: 'g4-3-s1-q2',
    options: [
      { id: 'opt-2b', text: 'Declare synthetic microplastics completely harmless because Study B detected zero acute hospital admissions over three years.', isCorrect: false, feedback: 'Incorrect. Three years is far too short to detect chronic bioaccumulation risks.' },
      { id: 'opt-2c', text: 'Accuse Study A researchers of falsifying electron microscope photographs to manufacture public alarm.', isCorrect: false, feedback: 'Incorrect. Physical spectroscopy verified plastic fiber presence.' },
      { id: 'opt-2a', text: 'Synthesize across timelines: physical contamination is present, but chronic clinical health impacts may take decades to manifest.', isCorrect: true, feedback: 'Correct! Reconciles environmental presence with the temporal latency of chronic toxicological health effects.' }
    ]
  },
  {
    id: 'g4-3-s1-q3',
    options: [
      { id: 'opt-3a', text: 'Contextual difference in baseline resources: rural schools had no prior digital tools, while urban students already owned computers.', isCorrect: true, feedback: 'Correct! New technology produces huge marginal utility in resource-scarce schools, but shows diminishing returns where devices exist.' },
      { id: 'opt-3b', text: 'Rural students possess superior innate intelligence compared to urban adolescents in metropolitan schools.', isCorrect: false, feedback: 'Incorrect. Unsubstantiated and ethnocentric.' },
      { id: 'opt-3c', text: 'Both studies used defective electrical equipment that corrupted standardized examination scoring spreadsheets.', isCorrect: false, feedback: 'Incorrect. Exam equipment operated correctly.' }
    ]
  },
  {
    id: 'g4-3-s1-q4',
    options: [
      { id: 'opt-4b', text: 'Disregard the local community survey because subjective interviews carry zero validity compared to mathematical models.', isCorrect: false, feedback: 'Incorrect. Local lived experiences identify ground-level implementation barriers.' },
      { id: 'opt-4c', text: 'Reject satellite data and conclude that solar farms produce negative electrical generation in tropical climates.', isCorrect: false, feedback: 'Incorrect. Solar physics data is empirical.' },
      { id: 'opt-4a', text: 'Technical generation potential is high, but real-world execution requires resolving land rights and local grid connectivity.', isCorrect: true, feedback: 'Correct! Synthesizes physical engineering feasibility with social and institutional implementation constraints.' }
    ]
  },
  {
    id: 'g4-3-s2-q1',
    options: [
      { id: 'opt-1b', text: 'Methodological flaw: the university researchers should have forced all mothers to drink formula milk exclusively.', isCorrect: false, feedback: 'Incorrect. Forcing feeding practices violates ethics.' },
      { id: 'opt-1c', text: 'Biological impossibility: maternal nutrition has zero measurable influence on infant growth rates in tropical islands.', isCorrect: false, feedback: 'Incorrect. Nutritional biology is established.' },
      { id: 'opt-1a', text: 'Confounding variable: higher-income families could afford clean drinking water and medical care, masking isolated formula effects.', isCorrect: true, feedback: 'Correct! Income, sanitation, and healthcare access confound the direct relationship between feeding mode and health.' }
    ]
  },
  {
    id: 'g4-3-s2-q2',
    options: [
      { id: 'opt-2a', text: 'Seasonal temporal heterogeneity: Study X measured dry-season tourism peaks, while Study Y evaluated wet-season agricultural lulls.', isCorrect: true, feedback: 'Correct! Conflicting economic data often reflects temporal and seasonal cycles in island economies.' },
      { id: 'opt-2b', text: 'Balinese business enterprises intentionally falsified accounting ledgers during one of the two investigation periods.', isCorrect: false, feedback: 'Incorrect. Unsubstantiated fraud accusation.' },
      { id: 'opt-2c', text: 'Island economies operate outside international macroeconomic rules and cannot be evaluated using financial numbers.', isCorrect: false, feedback: 'Incorrect. Island economies follow economic principles.' }
    ]
  },
  {
    id: 'g4-3-s2-q3',
    options: [
      { id: 'opt-3b', text: 'Rely solely on the state report because government documents hold superior legal authority over university studies.', isCorrect: false, feedback: 'Incorrect. Independent scholarship often uncovers ground-level realities.' },
      { id: 'opt-3c', text: 'Conclude that mangrove trees cause coastal flooding by blocking incoming oceanic tides.', isCorrect: false, feedback: 'Incorrect. Mangroves mitigate wave energy.' },
      { id: 'opt-3a', text: 'Reconcile metrics: the state measured initial planting saplings, while the university tracked long-term 3-year seedling survival.', isCorrect: true, feedback: 'Correct! Reconciles output metrics (trees planted) with long-term ecological outcome metrics (trees surviving).' }
    ]
  },
  {
    id: 'g4-3-s2-q4',
    options: [
      { id: 'opt-4a', text: 'Measurement bias: self-reported questionnaires overestimate productivity, while objective biometric monitors track cognitive fatigue.', isCorrect: true, feedback: 'Correct! Subjective self-perception often diverges sharply from objective physiological and performance metrics.' },
      { id: 'opt-4b', text: 'Coffee has zero chemical or biological effect on the human central nervous system under any circumstance.', isCorrect: false, feedback: 'Incorrect. Caffeine is a proven psychoactive stimulant.' },
      { id: 'opt-4c', text: 'Employees were secretly replaced by paid actors during the laboratory phase of the study.', isCorrect: false, feedback: 'Incorrect. Absurd conspiracy claim.' }
    ]
  },
  {
    id: 'g4-3-s3-q1',
    options: [
      { id: 'opt-1b', text: 'Choose one study randomly and discard the other three to keep the policy presentation brief and simple.', isCorrect: false, feedback: 'Incorrect. Cherry-picking data violates research ethics.' },
      { id: 'opt-1a', text: 'A multi-criteria narrative synthesis matrix mapping environmental, economic, social, and technological dimensions simultaneously.', isCorrect: true, feedback: 'Correct! Complex multi-evidence debates require integrated multi-criteria synthesis.' },
      { id: 'opt-1c', text: 'Average the numerical percentages across all studies into a single meaningless arithmetic figure.', isCorrect: false, feedback: 'Incorrect. Averaging diverse qualitative and quantitative metrics is mathematically invalid.' }
    ]
  },
  {
    id: 'g4-3-s3-q2',
    options: [
      { id: 'opt-2a', text: 'Identify boundary conditions: AI boosts introductory speed, but risks skill atrophy and requires human pedagogical supervision.', isCorrect: true, feedback: 'Correct! Synthesizes benefits and risks by articulating specific operational boundary conditions.' },
      { id: 'opt-2b', text: 'Ban all computer technologies from all schools nationwide to eliminate all cognitive risks.', isCorrect: false, feedback: 'Incorrect. Extreme overreaction.' },
      { id: 'opt-2c', text: 'Replace all human classroom teachers with artificial intelligence algorithms immediately.', isCorrect: false, feedback: 'Incorrect. Disregards pedagogy and ethics.' }
    ]
  },
  {
    id: 'g4-3-s3-q3',
    options: [
      { id: 'opt-3b', text: 'Assert that when peer-reviewed studies disagree, all scientific research is useless and subjective.', isCorrect: false, feedback: 'Incorrect. Divergence reveals complexity, not uselessness.' },
      { id: 'opt-3c', text: 'Falsify evidence citations so that all cited studies appear to agree with the author’s favorite thesis.', isCorrect: false, feedback: 'Incorrect. Academic dishonesty.' },
      { id: 'opt-3a', text: 'Demonstrate intellectual maturity by mapping divergence, explaining underlying variables, and proposing hedged solutions.', isCorrect: true, feedback: 'Correct! Cambridge Global Perspectives rewards critical synthesis of contradictory evidence and nuanced hedging.' }
    ]
  }
];

const u4File = path.resolve(process.cwd(), 'src/data/games/unit4MicroGamesData.ts');
for (const u of g4_3Updates) {
  updateGameOptions(u4File, u.id, u.options);
}
console.log('G4.3 updated successfully');
