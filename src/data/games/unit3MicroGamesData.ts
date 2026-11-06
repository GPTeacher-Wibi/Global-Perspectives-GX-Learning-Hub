/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 3 MICRO-GAMES CURRICULUM DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 40–58)
 * Language Level: CEFR B1 English (Clear, direct, controlled academic vocabulary)
 *
 * Micro-Games included:
 * - g3-1: Stats Sleuth (Mean, Median, Mode, Standard Deviation, Skewness, Outliers)
 * - g3-2: Chart Selector Showdown (Bar, Line, Scatter, Pie, Histogram, Box Plot)
 * - g3-3: Qualitative Theme Coder (Codes, Themes, Content vs Thematic vs Narrative vs Discourse)
 */

export interface MisconceptionAlert {
  label: string;
  explanation: string;
}

// ============================================================================
// g3-1: STATS SLEUTH DATA (Descriptive Statistics & Skewness)
// ============================================================================

export interface StatsSleuthItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  datasetContext: string;
  rawDataset: number[];
  datasetLabel: string;
  taskPrompt: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  calculatedValues: {
    mean: number;
    median: number;
    mode: number | string;
    standardDeviation?: number;
    hasOutlier: boolean;
    outlierValue?: number;
  };
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G3_1_CHALLENGES: StatsSleuthItem[] = [
  // STAGE 1: CENTRAL TENDENCY DETECTIVE (4 items)
  {
    id: 'g3-1-s1-q1',
    stage: 1,
    title: 'Case 1: Daily Commute Times to School',
    datasetContext: 'A Grade 10 student logs the one-way travel time (in minutes) for 5 classmates living in South Jakarta on a clear Tuesday morning.',
    rawDataset: [10, 15, 15, 20, 30],
    datasetLabel: 'Commute times (minutes): [10, 15, 15, 20, 30]',
    taskPrompt: 'Calculate the Mean and identify the Median of this dataset. Which statement is mathematically true?',
    options: [
      {
        id: 'opt-1b',
        text: 'Mean = 25 minutes, Median = 20 minutes (values exaggerated due to uncalibrated stopwatch timing errors).',
        isCorrect: false,
        feedback: 'Incorrect. Sum is 90 / 5 = 18 mins.'
      },
      {
        id: 'opt-1a',
        text: 'Mean = 18 minutes, Median = 15 minutes (exact central value).',
        isCorrect: true,
        feedback: 'Correct! Sum is 90 / 5 = 18 mins; middle value is 15 mins.'
      },
      {
        id: 'opt-1c',
        text: 'Mean = 15 minutes, Median = 18 minutes (calculations reversed).',
        isCorrect: false,
        feedback: 'Incorrect. 15 is the median.'
      }
    ],
    calculatedValues: {
      mean: 18,
      median: 15,
      mode: 15,
      hasOutlier: false
    },
    pedagogicalKey: 'The mean balances all numerical values; the median finds the exact center position.',
    misconceptionAlert: {
      label: 'Misconception: Mean and Median are always the same number',
      explanation: 'Mean and median are only identical when data is perfectly symmetrical. In real research, they usually differ.'
    }
  },
  {
    id: 'g3-1-s1-q2',
    stage: 1,
    title: 'Case 2: Mangrove Seedling Height in North Jakarta Coastal Lab',
    datasetContext: 'Marine biology students measure the height (in cm) of 7 nursery mangrove saplings after 4 weeks of growth.',
    rawDataset: [12, 14, 16, 16, 16, 18, 20],
    datasetLabel: 'Seedling heights (cm): [12, 14, 16, 16, 16, 18, 20]',
    taskPrompt: 'What is the Mode of this dataset, and what does it communicate about seedling growth?',
    options: [
      {
        id: 'opt-2b',
        text: 'Only Mode can be determined because student allowances are qualitative categories.',
        isCorrect: false,
        feedback: 'Incorrect. Currency values are continuous quantitative numbers.'
      },
      {
        id: 'opt-2c',
        text: 'Mean = 10,000 IDR and Median = 25,000 IDR (inaccurate calculation).',
        isCorrect: false,
        feedback: 'Incorrect. Middle value is 20,000 IDR.'
      },
      {
        id: 'opt-2a',
        text: 'Mean = 21,667 IDR, Median = 20,000 IDR, and Mode = 20,000 IDR.',
        isCorrect: true,
        feedback: 'Correct! Sum is 130,000 / 6 = 21,667 IDR; median is 20,000 IDR.'
      }
    ],
    calculatedValues: {
      mean: 16,
      median: 16,
      mode: 16,
      hasOutlier: false
    },
    pedagogicalKey: 'The mode tells a researcher which specific score or category appeared with highest frequency.'
  },
  {
    id: 'g3-1-s1-q3',
    stage: 1,
    title: 'Case 3: Even Number of Observations (Finding the Median)',
    datasetContext: 'Six student volunteers record how many plastic drink cups they recycled over one week.',
    rawDataset: [2, 4, 6, 8, 10, 12],
    datasetLabel: 'Recycled cups per student: [2, 4, 6, 8, 10, 12]',
    taskPrompt: 'Because there are 6 data points (an even count), how do you calculate the Median?',
    options: [
      {
        id: 'opt-3a',
        text: 'Mean = 75, Median = 75, and Mode = 75 (perfectly symmetrical unimodal distribution).',
        isCorrect: true,
        feedback: 'Correct! In a balanced symmetrical distribution, Mean, Median, and Mode coincide at 75.'
      },
      {
        id: 'opt-3b',
        text: 'Mean = 85, Median = 65, and Mode = 70 (asymmetrical values skewed by extreme high scores in the cohort).',
        isCorrect: false,
        feedback: 'Incorrect. Scores balance symmetrically.'
      },
      {
        id: 'opt-3c',
        text: 'Mode = 90 because 90 is the highest numerical value recorded.',
        isCorrect: false,
        feedback: 'Incorrect. Mode is the most frequent score, not the highest.'
      }
    ],
    calculatedValues: {
      mean: 7,
      median: 7,
      mode: 'None (all unique)',
      hasOutlier: false
    },
    pedagogicalKey: 'For an even dataset size, the median is the midpoint between the two central values.'
  },
  {
    id: 'g3-1-s1-q4',
    stage: 1,
    title: 'Case 4: Selecting the Optimal Average for Categorical Data',
    datasetContext: 'A school survey asks 150 Grade 10 students: "What is your primary transport mode to school?" The responses are: Motorcycle (82), Angkot Minibus (38), Bicycle (18), Walking (12).',
    rawDataset: [],
    datasetLabel: 'Motorcycle: 82 | Angkot: 38 | Bicycle: 18 | Walking: 12',
    taskPrompt: 'Which measure of central tendency can be used for this categorical data, and why can you NOT calculate a Mean?',
    options: [
      {
        id: 'opt-4b',
        text: 'The dataset has no mode because all four scores occurred at least once across the sampled classroom group.',
        isCorrect: false,
        feedback: 'Incorrect. Bimodal distributions have two modes.'
      },
      {
        id: 'opt-4a',
        text: 'The dataset is bimodal with Modes at 60 and 90, indicating two distinct subgroups.',
        isCorrect: true,
        feedback: 'Correct! Bimodal distributions exhibit two peaks representing distinct groups.'
      },
      {
        id: 'opt-4c',
        text: 'The dataset has only one mode at 90 because 90 is the top score.',
        isCorrect: false,
        feedback: 'Incorrect. 60 and 90 occur with equal frequency.'
      }
    ],
    calculatedValues: {
      mean: 0,
      median: 0,
      mode: 'Motorcycle (82)',
      hasOutlier: false
    },
    pedagogicalKey: 'Nominal/categorical data only supports the Mode as a measure of central tendency.',
    misconceptionAlert: {
      label: 'Misconception: You can calculate a Mean for any survey question',
      explanation: 'Mean requires numerical measurements. For categories (transport, gender, favorite subject), use the Mode.'
    }
  },

  // STAGE 2: THE OUTLIER & SKEWNESS CRIME SCENE (4 items)
  {
    id: 'g3-1-s2-q1',
    stage: 2,
    title: 'Case 5: The Pocket Money Outlier Distortion',
    datasetContext: 'Seven high school students report their daily snack pocket money (in thousands of Rupiah): [15, 20, 20, 25, 30, 35, 135]. One student received Rp 135,000 because it was his birthday.',
    rawDataset: [15, 20, 20, 25, 30, 35, 135],
    datasetLabel: 'Daily pocket money (thousands Rp): [15, 20, 20, 25, 30, 35, 135]',
    taskPrompt: 'Sum = 280. The Mean is Rp 40,000, while the Median is Rp 25,000. Which measure truthfully represents the typical student, and why?',
    options: [
      {
        id: 'opt-1b',
        text: 'The Mean is unaffected because calculating averages automatically eliminates extreme numbers.',
        isCorrect: false,
        feedback: 'Incorrect. The Mean is heavily sensitive to outliers.'
      },
      {
        id: 'opt-1c',
        text: 'The Median shifts to 500 million IDR because extreme values pull the center.',
        isCorrect: false,
        feedback: 'Incorrect. The Median stays at the middle rank.'
      },
      {
        id: 'opt-1a',
        text: 'The Mean increases dramatically to 92 million IDR, while the Median remains at 20 million IDR.',
        isCorrect: true,
        feedback: 'Correct! The 500M CEO salary skews the mean, whereas the median remains stable.'
      }
    ],
    calculatedValues: {
      mean: 40,
      median: 25,
      mode: 20,
      hasOutlier: true,
      outlierValue: 135
    },
    pedagogicalKey: 'In skewed distributions with extreme outliers, the Median provides a more truthful reflection of typical reality than the Mean.',
    misconceptionAlert: {
      label: 'Misconception: The Mean is always the best average',
      explanation: 'The Mean is distorted by extreme values (like billionaires in salary data). The Median resists outlier distortion.'
    }
  },
  {
    id: 'g3-1-s2-q2',
    stage: 2,
    title: 'Case 6: Traffic Jam Outlier on Commute Times',
    datasetContext: 'Ten daily commute times for an employee: [12, 14, 15, 15, 16, 16, 17, 18, 19, 98]. On day 10, a flash flood paralyzed the highway for 98 minutes.',
    rawDataset: [12, 14, 15, 15, 16, 16, 17, 18, 19, 98],
    datasetLabel: 'Commute times (minutes): [12, 14, 15, 15, 16, 16, 17, 18, 19, 98]',
    taskPrompt: 'Sum = 240. Mean = 24 minutes. Median = 16 minutes. How does the flood outlier affect the distribution?',
    options: [
      {
        id: 'opt-2a',
        text: 'Median (3.5 million IDR), because extreme wealth outliers create severe positive skew in the Mean.',
        isCorrect: true,
        feedback: 'Correct! In highly skewed income datasets, the median represents the true typical earner.'
      },
      {
        id: 'opt-2b',
        text: 'Mean (18.2 million IDR), because arithmetic averages always incorporate every citizen equally.',
        isCorrect: false,
        feedback: 'Incorrect. A few billionaires distort the mean upward.'
      },
      {
        id: 'opt-2c',
        text: 'Range (250 million IDR), because maximum income differences define poverty lines.',
        isCorrect: false,
        feedback: 'Incorrect. Range measures dispersion, not central tendency.'
      }
    ],
    calculatedValues: {
      mean: 24,
      median: 16,
      mode: 16,
      hasOutlier: true,
      outlierValue: 98
    },
    pedagogicalKey: 'When Mean > Median, data is positively (right) skewed by high outliers.'
  },
  {
    id: 'g3-1-s2-q3',
    stage: 2,
    title: 'Case 7: Left-Skewed Data (Negative Outlier in Exam Grades)',
    datasetContext: 'Eight students take a history quiz. Seven students studied hard and scored high, but one student was sick and scored 10: [10, 80, 85, 85, 90, 90, 95, 95].',
    rawDataset: [10, 80, 85, 85, 90, 90, 95, 95],
    datasetLabel: 'Quiz scores: [10, 80, 85, 85, 90, 90, 95, 95]',
    taskPrompt: 'Sum = 630. Mean = 78.75. Median = 87.5. What does the relationship Mean < Median indicate?',
    options: [
      {
        id: 'opt-3b',
        text: 'Symmetrical normal distribution with zero skewness and identical central metrics across all score quartiles.',
        isCorrect: false,
        feedback: 'Incorrect. Zero scores create a long tail.'
      },
      {
        id: 'opt-3a',
        text: 'Negatively skewed (left-skewed), with the Mean pulled below the Median by the zero scores.',
        isCorrect: true,
        feedback: 'Correct! Extreme low outliers pull the Mean to the left below the Median.'
      },
      {
        id: 'opt-3c',
        text: 'Positively skewed (right-skewed), with high scores pulling the arithmetic average upward.',
        isCorrect: false,
        feedback: 'Incorrect. Zeroes pull the mean downward.'
      }
    ],
    calculatedValues: {
      mean: 78.75,
      median: 87.5,
      mode: '85, 90, 95 (Multimodal)',
      hasOutlier: true,
      outlierValue: 10
    },
    pedagogicalKey: 'When Mean < Median, the distribution is negatively (left) skewed by a low outlier.'
  },
  {
    id: 'g3-1-s2-q4',
    stage: 2,
    title: 'Case 8: Trimming or Investigating Outliers Authentically',
    datasetContext: 'An environmental researcher measures river dissolved oxygen at 20 stations. Station 14 records a reading of 0.1 mg/L, while all other stations read between 5.5 and 7.2 mg/L.',
    rawDataset: [],
    datasetLabel: '19 stations: 5.5–7.2 mg/L | Station 14: 0.1 mg/L',
    taskPrompt: 'What is the scientifically honest procedure for handling this extreme outlier in research reports?',
    options: [
      {
        id: 'opt-4b',
        text: 'Delete the five zero scores secretly to make class performance appear flawless.',
        isCorrect: false,
        feedback: 'Incorrect. Removing valid data violates research ethics.'
      },
      {
        id: 'opt-4c',
        text: 'Report only the maximum score to celebrate top student achievements.',
        isCorrect: false,
        feedback: 'Incorrect. Maximum alone conceals learning gaps.'
      },
      {
        id: 'opt-4a',
        text: 'Report both the Mean and Median, note the negative skew, and explain the five absent zeroes.',
        isCorrect: true,
        feedback: 'Correct! Transparent reporting contextualizes outliers without distorting reality.'
      }
    ],
    calculatedValues: {
      mean: 0,
      median: 0,
      mode: 0,
      hasOutlier: true
    },
    pedagogicalKey: 'Outliers often carry the most important story in research; report them with transparency.'
  },

  // STAGE 3: STANDARD DEVIATION & SPREAD (3 items)
  {
    id: 'g3-1-s3-q1',
    stage: 3,
    title: 'Case 9: The Tale of Two Classes (Same Mean, Different Reality)',
    datasetContext: 'Two English classes of 5 students achieve the identical Mean score of 75 on a vocabulary exam. Class Alpha: [74, 75, 75, 75, 76] (SD = 0.63). Class Beta: [40, 60, 75, 95, 105] (SD = 23.98).',
    rawDataset: [],
    datasetLabel: 'Class Alpha: [74, 75, 75, 75, 76] (Mean=75) | Class Beta: [40, 60, 75, 95, 105] (Mean=75)',
    taskPrompt: 'Both classes have a Mean of 75. How does Standard Deviation reveal the hidden educational reality?',
    options: [
      {
        id: 'opt-1a',
        text: 'Class Alpha has higher consistency; Class Beta has wide score variability (high standard deviation).',
        isCorrect: true,
        feedback: 'Correct! Lower standard deviation signifies tighter grouping around the mean.'
      },
      {
        id: 'opt-1b',
        text: 'Both classes have identical performance and learning outcomes because their means are 75.',
        isCorrect: false,
        feedback: 'Incorrect. Standard deviation reveals dramatic disparity.'
      },
      {
        id: 'opt-1c',
        text: 'Class Beta is superior because higher standard deviation proves students are smarter.',
        isCorrect: false,
        feedback: 'Incorrect. High standard deviation indicates high score inequality.'
      }
    ],
    calculatedValues: {
      mean: 75,
      median: 75,
      mode: 75,
      standardDeviation: 0.63,
      hasOutlier: false
    },
    pedagogicalKey: 'The Mean tells you the center; the Standard Deviation tells you how widely spread the values are.',
    misconceptionAlert: {
      label: 'Misconception: Standard deviation is another type of average',
      explanation: 'Standard deviation is NOT an average score; it is a measure of dispersion (spread) around the mean.'
    }
  },
  {
    id: 'g3-1-s3-q2',
    stage: 3,
    title: 'Case 10: Bus Route Punctuality & Commuter Risk',
    datasetContext: 'A commuter compares two city bus lines. Both lines have an average delay of 5 minutes. Bus Route 101 has a Standard Deviation of 1 minute. Bus Route 202 has a Standard Deviation of 12 minutes.',
    rawDataset: [],
    datasetLabel: 'Route 101: Mean Delay = 5 mins, SD = 1 min | Route 202: Mean Delay = 5 mins, SD = 12 mins',
    taskPrompt: 'If you must catch a flight at the airport and cannot afford an unpredictable arrival, which bus line is safer, and why?',
    options: [
      {
        id: 'opt-2b',
        text: 'Route 202, because high standard deviation means the bus will drive faster and avoid heavy suburban traffic congestion.',
        isCorrect: false,
        feedback: 'Incorrect. High SD means unpredictable delays.'
      },
      {
        id: 'opt-2a',
        text: 'Route 101, because its low standard deviation means delays are highly predictable (4–6 mins).',
        isCorrect: true,
        feedback: 'Correct! Low SD means high predictability and low operational risk.'
      },
      {
        id: 'opt-2c',
        text: 'They are identical in risk because their mean delays are both calculated at 5 minutes.',
        isCorrect: false,
        feedback: 'Incorrect. The mean ignores the huge difference in variance.'
      }
    ],
    calculatedValues: {
      mean: 5,
      median: 5,
      mode: 5,
      standardDeviation: 1,
      hasOutlier: false
    },
    pedagogicalKey: 'In real-world decision-making, consistency (low standard deviation) is often far more valuable than a low mean.'
  },
  {
    id: 'g3-1-s3-q3',
    stage: 3,
    title: 'Case 11: The Empirical Rule (68-95-99.7 in Normal Distributions)',
    datasetContext: 'A nationwide Grade 10 English reading assessment across 50,000 students forms a bell-shaped Normal Distribution with Mean = 70 and Standard Deviation = 10.',
    rawDataset: [],
    datasetLabel: 'Normal Distribution: Mean = 70 | Standard Deviation (SD) = 10',
    taskPrompt: 'According to the Empirical Rule for normal distributions, approximately what percentage of students scored between 60 and 80 (within ±1 Standard Deviation of the Mean)?',
    options: [
      {
        id: 'opt-3a',
        text: 'Approximately 68% of students score within ±1 Standard Deviation (between 60 and 80).',
        isCorrect: true,
        feedback: 'Correct! Under the Empirical Rule, ~68% falls within ±1 SD in normal distributions.'
      },
      {
        id: 'opt-3b',
        text: 'Exactly 100% of students must score within 60 and 80 in any standardized examination.',
        isCorrect: false,
        feedback: 'Incorrect. Distribution tails extend beyond ±1 SD.'
      },
      {
        id: 'opt-3c',
        text: 'Only 10% of students score in this range because the standard deviation is 10 points.',
        isCorrect: false,
        feedback: 'Incorrect. 10 is the spread unit, not a percentage.'
      }
    ],
    calculatedValues: {
      mean: 70,
      median: 70,
      mode: 70,
      standardDeviation: 10,
      hasOutlier: false
    },
    pedagogicalKey: 'In normal distributions, standard deviation allows researchers to predict exact population percentages.'
  }
];

// ============================================================================
// g3-2: CHART SELECTOR SHOWDOWN DATA (Data Visualization Fit)
// ============================================================================

export type ChartType = 'bar' | 'line' | 'scatter' | 'pie' | 'box-plot' | 'histogram';

export interface ChartSelectorItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  researchGoal: string;
  dataCharacteristics: string;
  sampleDataTable: string;
  correctChart?: ChartType;
  options: {
    id?: string;
    type?: ChartType;
    label?: string;
    text?: string;
    description?: string;
    isCorrect?: boolean;
    feedback?: string;
  }[];
  explanation: string;
  whyCompetitorsFail?: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G3_2_CHALLENGES: ChartSelectorItem[] = [
  // STAGE 1: DATA-TO-VISUALIZATION FIT (4 items)
  {
    id: 'g3-2-s1-q1',
    stage: 1,
    title: 'Showdown 1: Monthly Rainfall Over One Year in Bandung',
    researchGoal: 'Show continuous seasonal weather changes and trends across 12 consecutive months from January to December.',
    dataCharacteristics: 'Continuous time-series interval data tracked over chronological months.',
    sampleDataTable: 'Jan (320mm) → Mar (260mm) → Jul (60mm) → Oct (180mm) → Dec (340mm)',
    correctChart: 'line',
    options: [
      {
        type: 'pie',
        label: 'Pie Chart',
        description: 'Displays static proportional parts of a single whole as slices summing to 100%.'
      },
      {
        type: 'line',
        label: 'Line Graph',
        description: 'Connects sequential data points to reveal continuous chronological trends over time.'
      },
      {
        type: 'scatter',
        label: 'Scatter Plot',
        description: 'Plots paired numerical coordinates across two continuous axes to assess correlation.'
      }
    ],
    explanation: 'Line graphs are designed specifically for continuous time-series data. Connecting points with lines shows trajectory, slopes, and seasonal rainfall peaks.',
    whyCompetitorsFail: 'A pie chart obscures the chronological passage of time and makes month-to-month changes hard to compare.',
    pedagogicalKey: 'Continuous data over chronological time = Line Graph.'
  },
  {
    id: 'g3-2-s1-q2',
    stage: 1,
    title: 'Showdown 2: Comparing Waste Generation Across 5 Districts',
    researchGoal: 'Compare total daily plastic waste tonnage across 5 independent city districts in Surabaya.',
    dataCharacteristics: 'Discrete, independent categorical groups (Districts: North, South, East, West, Central) with one continuous value (tons of waste).',
    sampleDataTable: 'Central: 140 tons | North: 95 tons | South: 110 tons | East: 85 tons | West: 70 tons',
    correctChart: 'bar',
    options: [
      {
        type: 'line',
        label: 'Line Graph',
        description: 'Connects sequential numerical observations across an ongoing chronological timeline.'
      },
      {
        type: 'scatter',
        label: 'Scatter Plot',
        description: 'Plots independent numerical variables across dual axes to detect statistical outliers.'
      },
      {
        type: 'bar',
        label: 'Bar Chart (Column Chart)',
        description: 'Compares discrete, separate categories using rectangular bars whose heights indicate magnitude.'
      }
    ],
    explanation: 'Bar charts are ideal for comparing distinct, separate categories. Clear vertical gaps between bars show that the districts are separate entities, not a continuous timeline.',
    whyCompetitorsFail: 'Connecting districts with a line graph would wrongly imply that "North District flows into East District" chronologically.',
    pedagogicalKey: 'Comparing discrete categories = Bar Chart.'
  },
  {
    id: 'g3-2-s1-q3',
    stage: 1,
    title: 'Showdown 3: Study Hours vs. Exam Scores (Correlation)',
    researchGoal: 'Investigate whether there is a positive correlation between weekly independent study hours and math test scores among 40 students.',
    dataCharacteristics: 'Two continuous numerical variables paired for each individual student (X = study hours, Y = score).',
    sampleDataTable: 'Student 1: (2 hrs, 55 pts) | Student 2: (8 hrs, 88 pts) | Student 3: (5 hrs, 72 pts)... [40 pairs]',
    correctChart: 'scatter',
    options: [
      {
        type: 'scatter',
        label: 'Scatter Plot',
        description: 'Plots paired coordinates (X, Y) on two continuous numerical axes to detect correlation and outliers.'
      },
      {
        type: 'pie',
        label: 'Pie Chart',
        description: 'Divides a single circular whole into slice percentages representing proportional parts of 100%.'
      },
      {
        type: 'bar',
        label: 'Bar Chart',
        description: 'Compares discrete, separate categories using vertical rectangular bars displaying comparative amounts.'
      }
    ],
    explanation: 'A Scatter Plot is the standard scientific tool to visualize bivariate relationships between two continuous variables and determine if a trendline exists.',
    whyCompetitorsFail: 'A pie chart cannot plot coordinate relationships between two numerical scales.',
    pedagogicalKey: 'Testing correlation between two continuous variables = Scatter Plot.'
  },
  {
    id: 'g3-2-s1-q4',
    stage: 1,
    title: 'Showdown 4: Provincial Electricity Generation Sources',
    researchGoal: 'Show the proportional composition of a province’s energy grid (Coal 60%, Gas 20%, Hydro 15%, Solar 5%) adding up to 100%.',
    dataCharacteristics: 'Mutually exclusive parts of a single whole that sum exactly to 100%, with few categories (4 items).',
    sampleDataTable: 'Coal (60%) + Gas (20%) + Hydro (15%) + Solar (5%) = 100% Total Generation',
    correctChart: 'pie',
    options: [
      {
        type: 'pie',
        label: 'Pie Chart',
        description: 'Shows proportional composition of a whole where mutually exclusive slices sum to exactly 100%.'
      },
      {
        type: 'line',
        label: 'Line Graph',
        description: 'Tracks continuous chronological shifts across successive time intervals and seasons.'
      },
      {
        type: 'scatter',
        label: 'Scatter Plot',
        description: 'Evaluates statistical correlation between two separate numerical variables over trials.'
      }
    ],
    explanation: 'When showing parts of a single whole (proportions of 100%) with 5 or fewer categories, a Pie or Donut chart provides an intuitive visual breakdown.',
    whyCompetitorsFail: 'A line graph requires a time continuum, which is absent in static composition data.',
    pedagogicalKey: 'Proportions of a static 100% whole with few categories = Pie Chart.'
  },

  // STAGE 2: REJECTING DECEPTIVE & MISLEADING VISUALIZATIONS (4 items)
  {
    id: 'g3-2-s2-q1',
    stage: 2,
    title: 'Showdown 5: The "Truncated Y-Axis" Trap',
    researchGoal: 'A company presents a bar chart showing its sales grew from 98 units to 102 units. The Y-axis begins at 95 instead of 0, making the 102 bar appear 5 times taller than the 98 bar.',
    dataCharacteristics: 'Visual distortion through truncated vertical axis scaling.',
    sampleDataTable: 'Competitor: 98 units | Company: 102 units (Y-axis starts at 95)',
    correctChart: 'bar',
    options: [
      {
        type: 'box-plot',
        label: 'Box Plot (Box-and-Whisker)',
        description: 'Visualizes 5-number summary (Min, Q1, Median, Q3, Max) and identifies extreme score outliers.'
      },
      {
        type: 'line',
        label: 'Line Graph',
        description: 'Tracks continuous trajectories over time, obscuring median values and interquartile spread.'
      },
      {
        type: 'bar',
        label: 'Bar Chart',
        description: 'Displays category averages, concealing data spread, skewness, and extreme score outliers.'
      }
    ],
    explanation: 'Bar charts rely on bar length to communicate magnitude. Truncating the axis distorts visual proportionality.',
    whyCompetitorsFail: 'Truncation misleads stakeholders about true effect size.',
    pedagogicalKey: 'Bar charts must maintain a zero baseline to prevent visual deception.'
  },
  {
    id: 'g3-2-s2-q2',
    stage: 2,
    title: 'Showdown 6: The "Pie Chart with 20 Slices" Disaster',
    researchGoal: 'A researcher tries to visualize budget expenditures across 22 micro-categories using a 3D exploded pie chart with 22 rainbow slices.',
    dataCharacteristics: '22 tiny categorical proportions, many under 2%.',
    sampleDataTable: '22 budget categories from 0.8% to 14%',
    correctChart: 'bar',
    options: [
      {
        type: 'pie',
        label: 'Pie Chart',
        description: 'Divides a circle into proportional slices, unsuited for large continuous frequency counts.'
      },
      {
        type: 'histogram',
        label: 'Histogram (Continuous Bins)',
        description: 'Groups continuous numerical test scores into contiguous intervals (bins) to reveal distribution shape.'
      },
      {
        type: 'bar',
        label: 'Categorical Bar Chart',
        description: 'Compares distinct categorical groups with gaps between bars, obscuring continuous bin flow.'
      }
    ],
    explanation: 'Pie charts fail when category counts exceed 5–7. Horizontal bar charts handle numerous categories with clear label readability.',
    whyCompetitorsFail: 'Human visual cognition struggles to evaluate circle slice angles accurately.',
    pedagogicalKey: 'More than 7 categories = Use a Horizontal Bar Chart, not a Pie Chart.'
  },
  {
    id: 'g3-2-s2-q3',
    stage: 2,
    title: 'Showdown 7: The "Fake Continuity" Line Graph',
    researchGoal: 'A student plots customer satisfaction scores for 4 distinct food items (Burger, Nasi Goreng, Pizza, Soto) using a connected line graph.',
    dataCharacteristics: 'Categorical food items with no natural order or continuous transition.',
    sampleDataTable: 'Burger (8.5) — line connects to — Nasi Goreng (9.2) — line connects to — Pizza (7.1)',
    correctChart: 'bar',
    options: [
      {
        type: 'bar',
        label: 'Stacked Bar Chart',
        description: 'Compares discrete categorical groups clearly without implying false chronological continuity.'
      },
      {
        type: 'scatter',
        label: 'Scatter Plot',
        description: 'Plots individual unlinked coordinate points, making categorical food satisfaction hard to follow.'
      },
      {
        type: 'line',
        label: 'Multi-Line Trend Graph',
        description: 'Draws continuous lines between nominal food categories, falsely implying continuous transitions.'
      }
    ],
    explanation: 'Lines imply continuity and interpolation. Connecting discrete nominal categories produces meaningless slopes.',
    whyCompetitorsFail: 'Slope has no mathematical interpretation across independent food categories.',
    pedagogicalKey: 'Never connect independent categories with a line graph.'
  },
  {
    id: 'g3-2-s2-q4',
    stage: 2,
    title: 'Showdown 8: Visualizing Income Distribution & Outliers',
    researchGoal: 'A sociologist wants to compare household income distributions and identify extreme outlier millionaires across 3 different islands.',
    dataCharacteristics: 'Continuous numerical income data with severe skewness and extreme outliers across 3 regional groups.',
    sampleDataTable: 'Island A, B, C: Min, Q1, Median, Q3, Max, and Outlier dots',
    correctChart: 'box-plot',
    options: [
      {
        type: 'scatter',
        label: 'Scatter Plot with Trendline',
        description: 'Plots bivariate numerical pairs across dual axes, failing to summarize multi-group quartile spreads.'
      },
      {
        type: 'box-plot',
        label: 'Box Plot (Box-and-Whisker)',
        description: 'Displays 5-number distribution summary and highlights extreme statistical outliers across regional groups.'
      },
      {
        type: 'pie',
        label: 'Pie Chart',
        description: 'Displays static percentage slices of a single whole, unable to represent distribution skewness or income gaps.'
      }
    ],
    explanation: 'Box plots are the gold standard for comparing distributions, showing medians, interquartile ranges, and explicitly identifying outliers as separate points.',
    whyCompetitorsFail: 'A pie chart completely destroys distribution shape and hides outliers.',
    pedagogicalKey: 'Comparing distributions and detecting outliers across groups = Box Plot.'
  },

  // STAGE 3: VISUAL INTERPRETATION & DECISION (3 items)
  {
    id: 'g3-2-s3-q1',
    stage: 3,
    title: 'Showdown 9: Reading Scatter Plot Correlation Strength',
    researchGoal: 'An education policy analyst reviews a scatter plot of 100 schools showing Teacher Experience (X) vs. Student Literacy Growth (Y). The dots cluster closely along an upward diagonal line from bottom-left to top-right.',
    dataCharacteristics: 'Bivariate scatter plot with tight upward linear clustering.',
    sampleDataTable: '100 points, upward slope, narrow band around linear regression line',
    correctChart: 'scatter',
    options: [
      {
        type: 'pie',
        label: '3D Exploding Pie Chart',
        description: 'Distorts geometric slice proportions through artificial perspective angles and adds visual clutter.'
      },
      {
        type: 'scatter',
        label: 'Bivariate Scatter Plot',
        description: 'Plots paired coordinates across two continuous axes to display linear clustering and correlation strength.'
      },
      {
        type: 'line',
        label: 'Connected Line Graph',
        description: 'Implies false continuous chronological flow between independent schools that share no sequential timeline.'
      }
    ],
    explanation: 'Interpreting scatter plots requires evaluating slope direction (positive/negative) and dot clustering tightness (strength).',
    whyCompetitorsFail: 'Confusing correlation with absolute causation is an analytical error.',
    pedagogicalKey: 'Upward slope + tight clustering = Strong positive correlation.'
  },
  {
    id: 'g3-2-s3-q2',
    stage: 3,
    title: 'Showdown 10: Histogram vs. Bar Chart Distinction',
    researchGoal: 'A researcher explains the difference between a Bar Chart and a Histogram to Grade 10 students.',
    dataCharacteristics: 'Understanding continuous binning vs. discrete categorical separation.',
    sampleDataTable: 'Histogram: Exam score intervals (0–19, 20–39, 40–59...) with touching bars',
    correctChart: 'histogram',
    options: [
      {
        type: 'scatter',
        label: 'Bivariate Scatter Plot',
        description: 'Correlates two numerical metrics, failing to group single-variable test scores into contiguous score bins.'
      },
      {
        type: 'histogram',
        label: 'Continuous Binned Histogram',
        description: 'Groups continuous numerical data into contiguous adjacent intervals (bins) to reveal distribution shape.'
      },
      {
        type: 'bar',
        label: 'Simple Categorical Bar Chart',
        description: 'Compares discrete categories separated by gaps, obscuring continuous numeric frequency distributions.'
      }
    ],
    explanation: 'Histograms represent continuous distributions grouped into contiguous bins (touching bars). Bar charts represent discrete categories (separated bars).',
    whyCompetitorsFail: 'Failing to distinguish continuous ranges from discrete categories leads to incorrect chart formatting.',
    pedagogicalKey: 'Continuous numerical ranges = Histogram (touching bars); Discrete categories = Bar Chart (gaps).'
  },
  {
    id: 'g3-2-s3-q3',
    stage: 3,
    title: 'Showdown 11: Multi-Line Graph Trajectory Synthesis',
    researchGoal: 'Evaluate electric vehicle adoption rates across three ASEAN countries (Indonesia, Thailand, Vietnam) over 5 years (2020–2025). Indonesia starts lowest at 1% but has the steepest upward slope, reaching 18% in 2025.',
    dataCharacteristics: 'Multiple time-series lines plotted on shared axes.',
    sampleDataTable: 'Indonesia: 1% → 18% | Thailand: 4% → 14% | Vietnam: 2% → 15%',
    correctChart: 'line',
    options: [
      {
        type: 'line',
        label: 'Multi-Line Trend Graph',
        description: 'Tracks and compares three continuous time-series trajectories on shared axes to identify slope differences.'
      },
      {
        type: 'pie',
        label: 'Pie Chart with 35 Slices',
        description: 'Crowds thirty-five micro-slices into unreadable slivers, making accurate comparison impossible.'
      },
      {
        type: 'bar',
        label: 'Pareto Bar Chart with "Other"',
        description: 'Compares discrete static totals, unable to show continuous year-by-year trajectory slope differences.'
      }
    ],
    explanation: 'Multi-line graphs enable cross-entity trajectory comparison along a shared chronological scale.',
    whyCompetitorsFail: 'Static charts obscure longitudinal acceleration and trajectory differences.',
    pedagogicalKey: 'Comparing multiple growth trajectories over time = Multi-Line Graph.'
  }
];

// ============================================================================
// g3-3: QUALITATIVE THEME CODER DATA (Thematic & Qualitative Analysis)
// ============================================================================

export type QualitativeMethod = 'thematic' | 'content' | 'narrative' | 'discourse';

export interface QualitativeCodingItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  sourceContext: string;
  rawExcerpt: string;
  taskPrompt: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  revealedCode?: string;
  overarchingTheme?: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G3_3_CHALLENGES: QualitativeCodingItem[] = [
  // STAGE 1: MEANING UNITS & INDUCTIVE CODING (Items 1-4)
  {
    id: 'g3-3-s1-q1',
    stage: 1,
    title: 'Coding 1: Traditional Market Vendor on Digital Payment Apps',
    sourceContext: 'Interview with Pak Joko (58), a fruit stall owner in Pasar Beringharjo, Yogyakarta, discussing QRIS digital payment systems.',
    rawExcerpt: '"Young customers just wave their phones and walk away. But my screen takes three minutes to confirm the notification, and when the market Wi-Fi drops, I don’t know if the money actually arrived. I feel anxious every time I don’t hear physical coins clinking in my wooden drawer."',
    taskPrompt: 'Which inductive qualitative code best captures the core psychological and operational meaning of Pak Joko’s statement?',
    options: [
      {
        id: 'opt-1b',
        text: 'Code: "Smartphone Screen Latency" (describing the three-minute delay in phone notification alerts).',
        isCorrect: false,
        feedback: 'Incorrect. This describes a surface technical symptom rather than interpreting Pak Joko’s emotional experience.'
      },
      {
        id: 'opt-1a',
        text: 'Code: "Technological Anxiety & Loss of Tangible Verification" (capturing emotional fear and missing cash confirmation).',
        isCorrect: true,
        feedback: 'Correct! The code abstracts both Pak Joko’s emotional insecurity and the operational disruption of losing physical cash proof.'
      },
      {
        id: 'opt-1c',
        text: 'Code: "Total Rejection of Modern Financial Commerce" (assuming traditional vendors reject all digital transaction infrastructure).',
        isCorrect: false,
        feedback: 'Incorrect. This overgeneralizes Pak Joko’s specific anxiety into an extreme ideological rejection of technology.'
      }
    ],
    revealedCode: 'Technological Anxiety & Loss of Tangible Verification',
    pedagogicalKey: 'A qualitative code is not a random label; it captures the underlying meaning of the participant’s experience.',
    misconceptionAlert: {
      label: 'Misconception: A code is just counting repeated words',
      explanation: 'Coding is conceptual interpretation. Pak Joko never said the word "anxiety", but his quotes describe anxious feelings.'
    }
  },
  {
    id: 'g3-3-s1-q2',
    stage: 1,
    title: 'Coding 2: High School Student on Late-Night Study Habits',
    sourceContext: 'Interview with Sarah (16), Grade 10 student in Surabaya, discussing academic pressure.',
    rawExcerpt: '"If I go to bed at 10 PM, I see my study group chat active until 2 AM with practice exam screenshots. I feel an intense guilt, like every hour I spend sleeping is an hour my friends are getting ahead of me. So I brew instant coffee and force my eyes open until 1:30 AM."',
    taskPrompt: 'What inductive qualitative code accurately interprets Sarah’s emotional driver?',
    options: [
      {
        id: 'opt-2b',
        text: 'Code: "Late-Night Caffeine Consumption" (recording physical habits like drinking instant coffee past midnight to endure fatigue).',
        isCorrect: false,
        feedback: 'Incorrect. Caffeine intake is merely an operational coping behavior, not the underlying emotional driver.'
      },
      {
        id: 'opt-2c',
        text: 'Code: "Hostile Peer Competition" (assuming classmates are deliberately trying to harm each other).',
        isCorrect: false,
        feedback: 'Incorrect. The peer chat is cooperative, but triggers internal psychological guilt in Sarah.'
      },
      {
        id: 'opt-2a',
        text: 'Code: "Peer-Induced Academic Guilt & Sleep Sacrifice" (interpreting social comparison and forced sleeplessness).',
        isCorrect: true,
        feedback: 'Correct! The code synthesizes Sarah’s internal guilt driven by social comparison with her coping mechanism of sleep sacrifice.'
      }
    ],
    revealedCode: 'Peer-Induced Academic Guilt & Sleep Deprivation',
    pedagogicalKey: 'Qualitative codes uncover human motives, emotional tensions, and coping mechanisms.'
  },
  {
    id: 'g3-3-s1-q3',
    stage: 1,
    title: 'Coding 3: Coastal Fisherman on Mangrove Rehabilitation',
    sourceContext: 'Interview with Pak Hasan (47), coastal fisherman in Demak, Central Java, after a sea dyke construction project.',
    rawExcerpt: '"The concrete sea wall protected the highway, but it blocked the natural sediment that fed our mudflats. The juvenile crabs and milkfish fry have disappeared because their mangrove nurseries were cut down. Now our boats must burn twice as much diesel fuel to fish far out in the deep sea."',
    taskPrompt: 'Which code best captures Pak Hasan’s observation of environmental infrastructure trade-offs?',
    options: [
      {
        id: 'opt-3a',
        text: 'Code: "Infrastructure Defense vs. Ecosystem Livelihood Disruption" (capturing seawall protection at the expense of fisheries).',
        isCorrect: true,
        feedback: 'Correct! The code abstracts Pak Hasan’s insight: protecting inland highway infrastructure came at the direct cost of coastal marine nurseries and local livelihood.'
      },
      {
        id: 'opt-3b',
        text: 'Code: "Rising Boat Fuel Expenses" (describing the diesel purchase costs for offshore fishing vessels).',
        isCorrect: false,
        feedback: 'Incorrect. Rising diesel costs are a secondary symptom of the destroyed nursery mudflats, not the core structural tension.'
      },
      {
        id: 'opt-3c',
        text: 'Code: "Complete Opposition to Coastal Engineering" (assuming local fishing communities reject all governmental seawall barriers).',
        isCorrect: false,
        feedback: 'Incorrect. Pak Hasan acknowledges the sea wall protected the highway; he critiques the unmitigated ecological destruction.'
      }
    ],
    revealedCode: 'Infrastructure Development vs. Ecosystem Livelihood Disruption',
    pedagogicalKey: 'Qualitative coding connects personal lived realities with wider systemic and ecological tensions.'
  },
  {
    id: 'g3-3-s1-q4',
    stage: 1,
    title: 'Coding 4: Urban Teacher on AI Chatbots in Classrooms',
    sourceContext: 'Focus group with Bu Sri (34), high school history teacher in Bandung.',
    rawExcerpt: '"Students hand in essays with flawless English grammar and sophisticated vocabulary, but when I ask them in class to explain why the Dutch VOC collapsed, they look confused. The chatbot generated the final essay product, but the internal thinking process never happened in the student’s mind."',
    taskPrompt: 'Which inductive code captures Bu Sri’s primary pedagogical concern regarding generative AI?',
    options: [
      {
        id: 'opt-4b',
        text: 'Code: "Grammatical Vocabulary Mastery" (describing high-level prose formatting in student homework papers).',
        isCorrect: false,
        feedback: 'Incorrect. Flawless grammar is the misleading surface symptom, not Bu Sri’s underlying pedagogical concern.'
      },
      {
        id: 'opt-4a',
        text: 'Code: "Superficial Polish Masking Cognitive Disengagement" (capturing flawless output hiding lack of understanding).',
        isCorrect: true,
        feedback: 'Correct! Bu Sri’s concern is that pristine automated text hides the absence of actual conceptual understanding and critical thinking.'
      },
      {
        id: 'opt-4c',
        text: 'Code: "Total Student Refusal to Learn History" (assuming learners are incapable of academic motivation).',
        isCorrect: false,
        feedback: 'Incorrect. The excerpt indicates students complete assignments, but outsource cognitive reasoning to software.'
      }
    ],
    revealedCode: 'Superficial Polish Masking Cognitive Disengagement',
    pedagogicalKey: 'Effective coding abstracts from surface text to the underlying conceptual dilemma.'
  },

  // STAGE 2: CATEGORY TO OVERARCHING THEME (Items 5-8)
  {
    id: 'g3-3-s2-q1',
    stage: 2,
    title: 'Thematic Synthesis 1: Grouping Codes into an Overarching Theme',
    sourceContext: 'A researcher analyzes 15 interviews with informal street food cart (gerobak) vendors in Jakarta. She extracts three verified codes: (1) Fear of Municipal Eviction (Satpol PP), (2) Daily Income Fluctuation from Heavy Rains, (3) Lack of Health Insurance for Illness.',
    rawExcerpt: 'Codes: [Fear of Municipal Eviction] + [Daily Income Volatility from Weather] + [No Formal Social Safety Net]',
    taskPrompt: 'What overarching analytical Theme unites these three codes into a coherent finding?',
    options: [
      {
        id: 'opt-1b',
        text: 'Theme: "Municipal Enforcement Tactics" (focusing exclusively on municipal Satpol PP patrol routines and urban sidewalk crackdowns).',
        isCorrect: false,
        feedback: 'Incorrect. Municipal enforcement represents only one code, omitting weather volatility and health vulnerability.'
      },
      {
        id: 'opt-1c',
        text: 'Theme: "Informal Entrepreneur Financial Carelessness" (assuming street vendors fail due to poor money management).',
        isCorrect: false,
        feedback: 'Incorrect. This injects moralizing prejudice instead of analyzing systemic structural constraints.'
      },
      {
        id: 'opt-1a',
        text: 'Theme: "Structural Precarity and Vulnerability in Informal Livelihoods" (uniting institutional, climatic, and social hazards).',
        isCorrect: true,
        feedback: 'Correct! "Structural Precarity" serves as the conceptual umbrella uniting physical weather risks, regulatory enforcement, and missing social protection.'
      }
    ],
    overarchingTheme: 'Structural Precarity and Vulnerability in Informal Livelihoods',
    pedagogicalKey: 'A Theme is an umbrella concept that weaves together multiple related codes to answer the research question.'
  },
  {
    id: 'g3-3-s2-q2',
    stage: 2,
    title: 'Thematic Synthesis 2: Adolescent Identity in Social Media',
    sourceContext: 'Study on teenage Instagram usage in Medan. Codes extracted: (1) Curating Flawless Photographic Aesthetics, (2) Deleting Posts with Low Like Counts, (3) Comparing Self to Influencer Lifestyles.',
    rawExcerpt: 'Codes: [Aesthetic Perfectionism] + [Quantified Validation Seeking] + [Social Upward Comparison]',
    taskPrompt: 'Which overarching Theme accurately synthesizes these three behavioral patterns?',
    options: [
      {
        id: 'opt-2a',
        text: 'Theme: "Performative Self-Presentation and Algorithmic Self-Worth" (connecting curated imagery with external numerical validation).',
        isCorrect: true,
        feedback: 'Correct! The theme captures how teenagers construct artificial self-images while tying their emotional self-esteem to quantifiable platform metrics.'
      },
      {
        id: 'opt-2b',
        text: 'Theme: "Digital Photo Editing Technique" (focusing solely on camera filters, visual lighting adjustments, and image editing software).',
        isCorrect: false,
        feedback: 'Incorrect. Photo editing is merely a technical method, not an analytical theme explaining adolescent psychological vulnerability.'
      },
      {
        id: 'opt-2c',
        text: 'Theme: "Narcissistic Vanity in Youth Culture" (dismissing adolescent platform behavior as pure moral weakness).',
        isCorrect: false,
        feedback: 'Incorrect. Qualitative themes explain systemic socio-technical dynamics rather than dismissing youth culture with moral labels.'
      }
    ],
    overarchingTheme: 'Performative Self-Presentation and Algorithmic Self-Worth',
    pedagogicalKey: 'Themes must reflect analytical insight rather than personal moralizing.'
  },
  {
    id: 'g3-3-s2-q3',
    stage: 2,
    title: 'Thematic Synthesis 3: Traditional Herbal Medicine (Jamu) in Modern Hospitals',
    sourceContext: 'Interviews with doctors and herbal practitioners in Solo. Codes extracted: (1) Need for Standardized Chemical Clinical Trials, (2) Respect for Ancestral Plant Knowledge, (3) Bridging Scientific Verification with Cultural Heritage.',
    rawExcerpt: 'Codes: [Standardized Clinical Trials] + [Ancestral Knowledge Respect] + [Intercultural Medical Integration]',
    taskPrompt: 'What overarching Theme unites these codes into an integrated finding?',
    options: [
      {
        id: 'opt-3b',
        text: 'Theme: "Laboratory Chemical Standardization" (focusing exclusively on pharmacological trial methodologies).',
        isCorrect: false,
        feedback: 'Incorrect. Laboratory testing captures only one code, ignoring the cultural respect and intergenerational heritage codes.'
      },
      {
        id: 'opt-3c',
        text: 'Theme: "Supremacy of Biomedical Pharmaceuticals" (dismissing traditional ancestral herbal formulas as unstandardized folk superstitions).',
        isCorrect: false,
        feedback: 'Incorrect. This takes a dismissive single-lens stance rather than synthesizing the empirical and cultural perspectives.'
      },
      {
        id: 'opt-3a',
        text: 'Theme: "Integrative Healthcare: Harmonizing Indigenous Wisdom with Biomedical Rigor" (bridging empirical science and cultural heritage).',
        isCorrect: true,
        feedback: 'Correct! The theme captures the constructive synthesis between scientific verification and respect for traditional healing heritage.'
      }
    ],
    overarchingTheme: 'Integrative Healthcare: Harmonizing Indigenous Wisdom with Biomedical Rigor',
    pedagogicalKey: 'Themes capture common ground and constructive synthesis across divergent perspectives.'
  },
  {
    id: 'g3-3-s2-q4',
    stage: 2,
    title: 'Thematic Synthesis 4: Theme Saturation in Qualitative Research',
    sourceContext: 'A master’s student interviews 20 community leaders about neighborhood flood warning systems. After interview 14, no new codes or themes emerge; interviews 15–20 only repeat previous ideas.',
    rawExcerpt: 'Interview 1 to 14: 18 unique codes identified. Interviews 15 to 20: 0 new codes; 100% repetition of prior themes.',
    taskPrompt: 'What crucial methodological milestone has the researcher reached, and what should she do next?',
    options: [
      {
        id: 'opt-4a',
        text: 'Milestone: "Theoretical Saturation Reached" (conclude sampling because additional interviews yield no novel thematic insights).',
        isCorrect: true,
        feedback: 'Correct! Theoretical saturation occurs when additional qualitative data collection produces no new properties or thematic codes, signaling that data collection is complete.'
      },
      {
        id: 'opt-4b',
        text: 'Milestone: "Sample Size Failure" (conduct 50 additional interviews because qualitative research requires massive statistical surveys).',
        isCorrect: false,
        feedback: 'Incorrect. In qualitative inquiry, sample adequacy is determined by thematic saturation, not arbitrary statistical headcounts.'
      },
      {
        id: 'opt-4c',
        text: 'Milestone: "Interviewer Fatigue" (discard interviews 15 to 20 from data tables because repeated information is scientifically invalid).',
        isCorrect: false,
        feedback: 'Incorrect. Repetition confirms saturation; it is empirical evidence that the analytical framework is robust, not wasted data to delete.'
      }
    ],
    pedagogicalKey: 'Theoretical Saturation occurs when additional data yields no new properties or thematic codes.',
    misconceptionAlert: {
      label: 'Misconception: Qualitative research always needs hundreds of interviews',
      explanation: 'Qualitative sample sizes are guided by depth and saturation. 12–20 rich interviews often achieve full saturation.'
    }
  },

  // STAGE 3: METHODOLOGICAL ALIGNMENT (Content vs Thematic vs Narrative vs Discourse) (Items 9-11)
  {
    id: 'g3-3-s3-q1',
    stage: 3,
    title: 'Method Match 1: Counting Keyword Frequencies in Presidential Speeches',
    sourceContext: 'A political scientist analyzes 50 years of Indonesian Independence Day speeches to measure how many times the words "kedaulatan" (sovereignty), "ekonomi" (economy), and "maritim" (maritime) were spoken across administrations.',
    rawExcerpt: 'Count table: Word "Maritim" appeared 2 times (1970–1998) vs. 48 times (2014–2024).',
    taskPrompt: 'Which qualitative/mixed analytical method specifically tallies the presence, frequency, and distribution of specific words or concepts in text?',
    options: [
      {
        id: 'opt-1b',
        text: 'Narrative Analysis (tracking personal biographical turning points and chronological storytelling milestones across a human lifetime).',
        isCorrect: false,
        feedback: 'Incorrect. Narrative analysis reconstructs personal life stories chronologically, not aggregated keyword counts across state speeches.'
      },
      {
        id: 'opt-1a',
        text: 'Content Analysis (systematically categorizing and quantifying the frequency of specific words or categories in communication).',
        isCorrect: true,
        feedback: 'Correct! Content analysis systematically tallies and categorizes textual occurrences to reveal ideological and rhetorical shifts over time.'
      },
      {
        id: 'opt-1c',
        text: 'Discourse Analysis (interrogating ideological power structures and institutional dominance in conversational interactions).',
        isCorrect: false,
        feedback: 'Incorrect. While word counts can inform discourse studies, the specific method of tallying keyword frequency is Content Analysis.'
      }
    ],
    pedagogicalKey: 'Content Analysis systematically categorizes and quantifies textual occurrences.'
  },
  {
    id: 'g3-3-s3-q2',
    stage: 3,
    title: 'Method Match 2: Examining Power Structures and Hidden Framing',
    sourceContext: 'A media scholar examines newspaper articles covering labor strikes. She investigates how headlines label workers ("mobs causing traffic jams") while labeling factory owners ("job-creating investors"), analyzing who holds social power in the language.',
    rawExcerpt: 'Headline Analysis: "Striking Mob Shuts Down Industrial Estate" vs. "Struggling Families Plead for Living Wage".',
    taskPrompt: 'Which analytical approach examines how language constructs reality, maintains power relations, and reinforces institutional ideologies?',
    options: [
      {
        id: 'opt-2b',
        text: 'Content Analysis (quantifying lexical word occurrences and calculating statistical percentage frequencies across media archives).',
        isCorrect: false,
        feedback: 'Incorrect. Content analysis measures numerical frequency, whereas deconstructing ideological power and framing is Discourse Analysis.'
      },
      {
        id: 'opt-2a',
        text: 'Discourse Analysis (deconstructing how linguistic framing exercises institutional power and constructs social reality).',
        isCorrect: true,
        feedback: 'Correct! Discourse analysis investigates how language is used to legitimate authority, frame social groups, and maintain institutional power.'
      },
      {
        id: 'opt-2c',
        text: 'Narrative Analysis (examining personal diary sequences to reconstruct biographical trajectories across decades).',
        isCorrect: false,
        feedback: 'Incorrect. Narrative analysis focuses on individual biographical chronology, not media framing of institutional power.'
      }
    ],
    pedagogicalKey: 'Discourse Analysis interrogates how language exercises power and constructs social reality.'
  },
  {
    id: 'g3-3-s3-q3',
    stage: 3,
    title: 'Method Match 3: The Chronological Life Journey of a Migrant Worker',
    sourceContext: 'An anthropologist spends 3 weeks recording the complete biographical life story of Ibu Aminah (52), who worked 15 years as a domestic worker in Hong Kong, tracking her journey from village departure to return and reintegration.',
    rawExcerpt: 'Life history: Chronological turning points — departure, loneliness, remittance building, family reunification.',
    taskPrompt: 'Which qualitative method focuses specifically on how individuals tell stories chronologically to make sense of their lived life trajectories over time?',
    options: [
      {
        id: 'opt-3a',
        text: 'Narrative Analysis (exploring the storied nature of human experience through biographical sequencing and chronological turning points).',
        isCorrect: true,
        feedback: 'Correct! Narrative analysis focuses on biographical storytelling, personal chronological arcs, and how individuals make sense of major life events.'
      },
      {
        id: 'opt-3b',
        text: 'Content Analysis (counting lexical frequencies and tabulating vocabulary appearances across interview transcript documents).',
        isCorrect: false,
        feedback: 'Incorrect. Counting word frequencies ignores chronological story structure and biographical meaning.'
      },
      {
        id: 'opt-3c',
        text: 'Discourse Analysis (deconstructing regulatory legal terminology and government policy vocabulary in administrative gazettes).',
        isCorrect: false,
        feedback: 'Incorrect. Discourse analysis interrogates institutional language, whereas exploring storied lived trajectories is Narrative Analysis.'
      }
    ],
    pedagogicalKey: 'Narrative Analysis explores the storied nature of human experience through biographical sequencing.'
  }
];
