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
        id: 'opt-1a',
        text: 'Mean = 18 minutes (Total 90 ÷ 5); Median = 15 minutes (the middle value).',
        isCorrect: true,
        feedback: 'Correct! Sum = 10 + 15 + 15 + 20 + 30 = 90. Mean = 90 ÷ 5 = 18. The middle ordered value is 15.'
      },
      {
        id: 'opt-1b',
        text: 'Mean = 15 minutes; Median = 30 minutes.',
        isCorrect: false,
        feedback: 'Incorrect. The sum is 90, so the mean is 90 ÷ 5 = 18. 30 is the maximum value, not the median.'
      },
      {
        id: 'opt-1c',
        text: 'Mean = 20 minutes; Median = 10 minutes.',
        isCorrect: false,
        feedback: 'Incorrect. Please add all 5 numbers and divide by 5.'
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
        id: 'opt-2a',
        text: 'Mode = 16 cm; it represents the most frequently occurring sapling height in the sample.',
        isCorrect: true,
        feedback: 'Correct! 16 cm appears three times, making it the mode (most common value).'
      },
      {
        id: 'opt-2b',
        text: 'Mode = 20 cm; it represents the tallest and healthiest sapling.',
        isCorrect: false,
        feedback: 'Incorrect. 20 cm is the maximum value, not the mode.'
      },
      {
        id: 'opt-2c',
        text: 'Mode = 12 cm; it represents the baseline starting height.',
        isCorrect: false,
        feedback: 'Incorrect. 12 cm is the minimum value.'
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
        text: 'Average the two central numbers (6 and 8): Median = (6 + 8) ÷ 2 = 7 cups.',
        isCorrect: true,
        feedback: 'Correct! When a dataset has an even count (n = 6), take the arithmetic mean of the two middle values.'
      },
      {
        id: 'opt-3b',
        text: 'Pick the first number (2) because it started the experiment.',
        isCorrect: false,
        feedback: 'Incorrect. The median must represent the central division of the data.'
      },
      {
        id: 'opt-3c',
        text: 'Multiply 6 by 8 to get 48 cups.',
        isCorrect: false,
        feedback: 'Incorrect. Median is the middle point, never a multiplication product.'
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
        id: 'opt-4a',
        text: 'The Mode (Motorcycle) must be used, because non-numerical categorical labels cannot be mathematically added or divided.',
        isCorrect: true,
        feedback: 'Correct! You cannot calculate "average transport" by dividing words by 150. The mode identifies the modal category.'
      },
      {
        id: 'opt-4b',
        text: 'The Mean must be calculated by assigning numbers to words: Walking = 1, Bicycle = 2, Angkot = 3, Motorcycle = 4.',
        isCorrect: false,
        feedback: 'Incorrect. Assigning arbitrary numbers to nominal categories does not create meaningful arithmetic averages.'
      },
      {
        id: 'opt-4c',
        text: 'The Standard Deviation must be zero because all students go to the same school.',
        isCorrect: false,
        feedback: 'Incorrect. Standard deviation requires numerical interval or ratio data.'
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
        id: 'opt-1a',
        text: 'The Median (Rp 25,000), because the extreme outlier (Rp 135,000) artificially pulls the Mean higher than 6 out of the 7 students.',
        isCorrect: true,
        feedback: 'Correct! 6 out of 7 students get Rp 35,000 or less. Stating that the "average student gets Rp 40,000" is completely misleading.'
      },
      {
        id: 'opt-1b',
        text: 'The Mean (Rp 40,000), because the mean is always the most scientific and superior statistical tool.',
        isCorrect: false,
        feedback: 'Incorrect. The mean is highly sensitive to extreme outliers, making it deceptive in skewed distributions.'
      },
      {
        id: 'opt-1c',
        text: 'Neither; all statistical averages are useless when numbers are unequal.',
        isCorrect: false,
        feedback: 'Incorrect. The median provides an exceptionally robust and truthful summary of skewed data.'
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
        text: 'It creates a positive (right-skewed) tail that inflates the Mean by 8 minutes above the Median.',
        isCorrect: true,
        feedback: 'Correct! An extreme high value pulls the mean to the right (Mean 24 > Median 16). The distribution is positively skewed.'
      },
      {
        id: 'opt-2b',
        text: 'It reduces the Mean and makes the commute seem faster than it actually was.',
        isCorrect: false,
        feedback: 'Incorrect. A high value increases the mean, never decreases it.'
      },
      {
        id: 'opt-2c',
        text: 'It changes the Mode from 16 to 98 minutes.',
        isCorrect: false,
        feedback: 'Incorrect. 16 appears twice; 98 appears only once.'
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
        id: 'opt-3a',
        text: 'The distribution is negatively (left) skewed because the extreme low score (10) pulls the Mean downwards.',
        isCorrect: true,
        feedback: 'Correct! When Mean < Median, an extreme low outlier is dragging the mean down to the left tail.'
      },
      {
        id: 'opt-3b',
        text: 'The distribution is perfectly normal and symmetrical.',
        isCorrect: false,
        feedback: 'Incorrect. In a normal distribution, Mean = Median.'
      },
      {
        id: 'opt-3c',
        text: 'The exam was too difficult for 90% of the class.',
        isCorrect: false,
        feedback: 'Incorrect. 7 out of 8 students scored 80 or above.'
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
        id: 'opt-4a',
        text: 'Investigate Station 14 (check for pipe leaks or sensor errors), report both with and without the outlier, and explain the reason transparently.',
        isCorrect: true,
        feedback: 'Correct! Never secretly delete outliers. Investigate whether it is a measurement error or a real environmental contamination event.'
      },
      {
        id: 'opt-4b',
        text: 'Silently delete the 0.1 mg/L number so the graph looks clean and attractive for school presentations.',
        isCorrect: false,
        feedback: 'Incorrect. Silently removing inconvenient data is a serious academic integrity violation.'
      },
      {
        id: 'opt-4c',
        text: 'Change the 0.1 mg/L to 6.5 mg/L without telling anyone.',
        isCorrect: false,
        feedback: 'Incorrect. Falsifying data is scientific fraud.'
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
        text: 'Class Alpha has low spread (students perform consistently close to the mean), while Class Beta has high spread (extreme inequality between struggling and advanced learners).',
        isCorrect: true,
        feedback: 'Correct! Standard deviation measures dispersion around the mean. Same mean does NOT mean identical classrooms.'
      },
      {
        id: 'opt-1b',
        text: 'Class Alpha performed much worse than Class Beta because their standard deviation is smaller.',
        isCorrect: false,
        feedback: 'Incorrect. A smaller standard deviation means higher consistency, not worse performance.'
      },
      {
        id: 'opt-1c',
        text: 'Class Beta is superior because higher standard deviation always means students are smarter.',
        isCorrect: false,
        feedback: 'Incorrect. High standard deviation indicates high score inequality and variability.'
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
        id: 'opt-2a',
        text: 'Route 101, because its low standard deviation means delays are highly predictable (almost always between 4 and 6 minutes).',
        isCorrect: true,
        feedback: 'Correct! Low SD means low variability and high predictability. Route 202 could be 20 minutes late on any given day.'
      },
      {
        id: 'opt-2b',
        text: 'Route 202, because high standard deviation means the bus will drive faster.',
        isCorrect: false,
        feedback: 'Incorrect. High standard deviation means unpredictable delays ranging from on-time to severely late.'
      },
      {
        id: 'opt-2c',
        text: 'They are 100% identical in risk because their mean delays are both 5 minutes.',
        isCorrect: false,
        feedback: 'Incorrect. Relying on the mean alone ignores the enormous difference in reliability.'
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
        feedback: 'Correct! In any normal distribution, ~68% falls within ±1 SD, ~95% within ±2 SD (50–90), and ~99.7% within ±3 SD (40–100).'
      },
      {
        id: 'opt-3b',
        text: 'Exactly 100% of students must score within 60 and 80.',
        isCorrect: false,
        feedback: 'Incorrect. There are students scoring below 60 and above 80 in the distribution tails.'
      },
      {
        id: 'opt-3c',
        text: 'Only 10% of students score in this range because the standard deviation is 10.',
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
        type: 'line',
        label: 'Line Graph',
        description: 'Connects sequential data points to reveal continuous chronological trends over time.'
      },
      {
        type: 'pie',
        label: 'Pie Chart',
        description: 'Shows parts of a static whole as slices of 100%.'
      },
      {
        type: 'scatter',
        label: 'Scatter Plot',
        description: 'Plots individual pairs of numerical variables to test correlation.'
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
        type: 'bar',
        label: 'Bar Chart (Column Chart)',
        description: 'Compares discrete, separate categories using rectangular bars whose heights indicate magnitude.'
      },
      {
        type: 'line',
        label: 'Line Graph',
        description: 'Connects data points across time.'
      },
      {
        type: 'scatter',
        label: 'Scatter Plot',
        description: 'Plots independent numerical variables.'
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
        description: 'Divides a circle into proportions.'
      },
      {
        type: 'bar',
        label: 'Bar Chart',
        description: 'Compares discrete categories.'
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
        label: 'Pie Chart / Donut Chart',
        description: 'Displays percentage proportions of a static whole when categories are few and sum to 100%.'
      },
      {
        type: 'line',
        label: 'Line Graph',
        description: 'Displays changes over chronological time.'
      },
      {
        type: 'scatter',
        label: 'Scatter Plot',
        description: 'Displays correlation between two numbers.'
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
        id: 'opt-1a',
        text: 'Flawed Chart: Truncating the Y-axis exaggerates a tiny 4% difference into a massive visual deception; bar charts must start at zero.',
        isCorrect: true,
        feedback: 'Correct! In bar charts, bar length encodes value. Starting the axis above zero deceives the viewer by distorting visual proportions.'
      },
      {
        id: 'opt-1b',
        text: 'Perfect Chart: Starting at 95 saves ink and makes the presentation look more exciting.',
        isCorrect: false,
        feedback: 'Incorrect. Good science prioritizes honest communication over "exciting" visual exaggeration.'
      },
      {
        id: 'opt-1c',
        text: 'Flawed Chart: Bar charts should only be drawn horizontally, never vertically.',
        isCorrect: false,
        feedback: 'Incorrect. Bar charts can be vertical or horizontal; the flaw is the misleading non-zero baseline.'
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
        id: 'opt-2a',
        text: 'Replace with a Horizontal Bar Chart: Pie charts with over 5–7 slices become unreadable rainbow wheels where angles cannot be accurately judged.',
        isCorrect: true,
        feedback: 'Correct! Human eyes struggle to compare subtle angle differences. A sorted horizontal bar chart allows instant, precise comparison of 20+ items.'
      },
      {
        id: 'opt-2b',
        text: 'Keep the Pie Chart but rotate it into 3D so it looks like a flying saucer.',
        isCorrect: false,
        feedback: 'Incorrect. 3D perspective distorts slice angles even worse by making front slices look artificially larger.'
      },
      {
        id: 'opt-2c',
        text: 'Replace with a Scatter Plot comparing budget to the date of birth of the accountant.',
        isCorrect: false,
        feedback: 'Incorrect. Irrelevant variables do not solve visualization clutter.'
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
        id: 'opt-3a',
        text: 'Flawed Chart: Connecting categorical foods with a line implies an ongoing physical continuum between Burgers and Nasi Goreng where none exists.',
        isCorrect: true,
        feedback: 'Correct! Lines signify continuity or change across time. Categorical items should be plotted with distinct separated bars.'
      },
      {
        id: 'opt-3b',
        text: 'Valid Chart: Lines can be drawn between any random items as long as the colors are pretty.',
        isCorrect: false,
        feedback: 'Incorrect. Lines carry mathematical meaning: slope implies rate of change between adjacent states.'
      },
      {
        id: 'opt-3c',
        text: 'Flawed Chart: Satisfaction scores can only be presented in audio podcasts.',
        isCorrect: false,
        feedback: 'Incorrect. Visual presentation is standard; the mistake is using a continuous line for discrete categories.'
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
        type: 'box-plot',
        label: 'Box Plot (Box-and-Whisker Plot)',
        description: 'Displays the 5-number summary (Min, Q1, Median, Q3, Max) and plots individual outliers clearly.'
      },
      {
        type: 'pie',
        label: 'Pie Chart',
        description: 'Displays parts of a whole.'
      },
      {
        type: 'line',
        label: 'Line Graph',
        description: 'Displays time series trends.'
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
        id: 'opt-1a',
        text: 'The plot shows a strong positive linear correlation: schools with more experienced teachers consistently demonstrate higher literacy growth.',
        isCorrect: true,
        feedback: 'Correct! Upward slope indicates positive correlation; tight clustering around the trendline indicates strong correlation.'
      },
      {
        id: 'opt-1b',
        text: 'The plot proves that teacher experience causes 100% of student learning without any other factors.',
        isCorrect: false,
        feedback: 'Incorrect. Correlation does not prove single-cause causation; other factors (school funding) may also contribute.'
      },
      {
        id: 'opt-1c',
        text: 'The plot shows a negative correlation because there are too many dots.',
        isCorrect: false,
        feedback: 'Incorrect. An upward diagonal slope is the definition of a positive correlation.'
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
        id: 'opt-2a',
        text: 'A Histogram groups continuous numerical data into ranges (bins) with touching bars, whereas a Bar Chart compares discrete categorical groups with gaps between bars.',
        isCorrect: true,
        feedback: 'Correct! In a histogram, bars touch to show a continuous numerical spectrum. In a bar chart, gaps separate distinct categories.'
      },
      {
        id: 'opt-2b',
        text: 'They are identical names for the exact same chart created in Microsoft Excel.',
        isCorrect: false,
        feedback: 'Incorrect. They serve fundamentally different mathematical data types (continuous ranges vs discrete categories).'
      },
      {
        id: 'opt-2c',
        text: 'A histogram only measures historical events from the 19th century.',
        isCorrect: false,
        feedback: 'Incorrect. "Histogram" comes from the Greek word for mast/upright bar, not history.'
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
        id: 'opt-3a',
        text: 'A Multi-Line Graph: It clearly displays both starting baselines and differing rates of acceleration (slopes) across countries on a shared timeline.',
        isCorrect: true,
        feedback: 'Correct! Multi-line graphs allow direct comparison of growth trajectories and inflection points over time.'
      },
      {
        id: 'opt-3b',
        text: 'Three separate pie charts drawn on different pieces of paper.',
        isCorrect: false,
        feedback: 'Incorrect. Separate pie charts make comparing rate of growth across time nearly impossible.'
      },
      {
        id: 'opt-3c',
        text: 'A single word cloud containing the names of car brands.',
        isCorrect: false,
        feedback: 'Incorrect. Word clouds do not display numerical growth trajectories.'
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
  // STAGE 1: MEANING UNITS & INDUCTIVE CODING (4 items)
  {
    id: 'g3-3-s1-q1',
    stage: 1,
    title: 'Coding 1: Traditional Market Vendor on Digital Payment Apps',
    sourceContext: 'Interview with Pak Joko (58), a fruit stall owner in Pasar Beringharjo, Yogyakarta, discussing QRIS digital payment systems.',
    rawExcerpt: '"Young customers just wave their phones and walk away. But my screen takes three minutes to confirm the notification, and when the market Wi-Fi drops, I don’t know if the money actually arrived. I feel anxious every time I don’t hear physical coins clinking in my wooden drawer."',
    taskPrompt: 'Which inductive code best captures the core psychological and operational meaning of Pak Joko’s statement?',
    options: [
      {
        id: 'opt-1a',
        text: 'Code: "Technological Anxiety & Loss of Tangible Verification"',
        isCorrect: true,
        feedback: 'Correct! The code synthesizes both the technical barrier (Wi-Fi latency) and the emotional need for tangible physical confirmation.'
      },
      {
        id: 'opt-1b',
        text: 'Code: "Fruit is Healthy to Eat"',
        isCorrect: false,
        feedback: 'Incorrect. The excerpt is not about nutrition; it is about anxiety surrounding digital payments.'
      },
      {
        id: 'opt-1c',
        text: 'Code: "Young People Have Bad Manners"',
        isCorrect: false,
        feedback: 'Incorrect. The vendor is reflecting on payment verification lag, not criticizing youth morality.'
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
        id: 'opt-2a',
        text: 'Code: "Peer-Induced Academic Guilt & Sleep Deprivation"',
        isCorrect: true,
        feedback: 'Correct! This code captures the psychological pressure (group chat comparison) and behavioral response (late-night caffeine/sleep loss).'
      },
      {
        id: 'opt-2b',
        text: 'Code: "Coffee Brands in Indonesia"',
        isCorrect: false,
        feedback: 'Incorrect. Coffee is merely an incidental detail, not the core phenomenon being studied.'
      },
      {
        id: 'opt-2c',
        text: 'Code: "Smartphone Screens are Bright"',
        isCorrect: false,
        feedback: 'Incorrect. The focus is social comparison and pressure, not screen hardware.'
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
    taskPrompt: 'Which code best synthesizes Pak Hasan’s observation of environmental infrastructure trade-offs?',
    options: [
      {
        id: 'opt-3a',
        text: 'Code: "Infrastructure Development vs. Ecosystem Livelihood Disruption"',
        isCorrect: true,
        feedback: 'Correct! The code balances the infrastructure goal (highway protection) against the ecological and economic harm to artisanal fisheries.'
      },
      {
        id: 'opt-3b',
        text: 'Code: "Boats Need Diesel Fuel"',
        isCorrect: false,
        feedback: 'Incorrect. That is a trivial surface fact, not an analytical qualitative code.'
      },
      {
        id: 'opt-3c',
        text: 'Code: "Fishermen Dislike Concrete"',
        isCorrect: false,
        feedback: 'Incorrect. The issue is ecosystem disruption and lost fish nurseries, not an aesthetic opinion of concrete.'
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
    taskPrompt: 'Which code captures Bu Sri’s primary pedagogical concern regarding generative AI?',
    options: [
      {
        id: 'opt-4a',
        text: 'Code: "Superficial Polish Masking Cognitive Disengagement"',
        isCorrect: true,
        feedback: 'Correct! The code identifies the contrast between external polished output and the absence of internal conceptual understanding.'
      },
      {
        id: 'opt-4b',
        text: 'Code: "History Essays are Long"',
        isCorrect: false,
        feedback: 'Incorrect. The quote addresses artificial intelligence replacing student critical thinking.'
      },
      {
        id: 'opt-4c',
        text: 'Code: "The Dutch VOC was Founded in 1602"',
        isCorrect: false,
        feedback: 'Incorrect. Historical facts in the prompt are context, not the teacher’s qualitative perspective.'
      }
    ],
    revealedCode: 'Superficial Polish Masking Cognitive Disengagement',
    pedagogicalKey: 'Effective coding abstracts from surface text to the underlying conceptual dilemma.'
  },

  // STAGE 2: CATEGORY TO OVERARCHING THEME (4 items)
  {
    id: 'g3-3-s2-q1',
    stage: 2,
    title: 'Thematic Synthesis 1: Grouping Codes into an Overarching Theme',
    sourceContext: 'A researcher analyzes 15 interviews with informal street food cart (gerobak) vendors in Jakarta. She extracts three verified codes: (1) Fear of Municipal Eviction (Satpol PP), (2) Daily Income Fluctuation from Heavy Rains, (3) Lack of Health Insurance for Illness.',
    rawExcerpt: 'Codes: [Fear of Municipal Eviction] + [Daily Income Volatility from Weather] + [No Formal Social Safety Net]',
    taskPrompt: 'What overarching analytical Theme unites these three codes into a coherent finding?',
    options: [
      {
        id: 'opt-1a',
        text: 'Overarching Theme: "Structural Precarity and Vulnerability in Informal Livelihoods"',
        isCorrect: true,
        feedback: 'Correct! A theme connects multiple sub-codes into an overarching conceptual narrative that explains the shared condition.'
      },
      {
        id: 'opt-1b',
        text: 'Overarching Theme: "Street Food in Jakarta Tastes Delicious"',
        isCorrect: false,
        feedback: 'Incorrect. The codes relate to financial insecurity and legal vulnerability, not culinary taste.'
      },
      {
        id: 'opt-1c',
        text: 'Overarching Theme: "Weather Forecasts in Southeast Asia"',
        isCorrect: false,
        feedback: 'Incorrect. Weather is only one component of the broader theme of livelihood precarity.'
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
    taskPrompt: 'Which overarching Theme accurately synthesizes these behavioral patterns?',
    options: [
      {
        id: 'opt-2a',
        text: 'Overarching Theme: "Performative Self-Presentation and Algorithmic Self-Worth"',
        isCorrect: true,
        feedback: 'Correct! This theme captures both the theatrical presentation of the self and the reliance on digital metrics (likes) for emotional validation.'
      },
      {
        id: 'opt-2b',
        text: 'Overarching Theme: "Smartphone Camera Resolution Improvements"',
        isCorrect: false,
        feedback: 'Incorrect. The study investigates psychological identity and self-worth, not camera hardware.'
      },
      {
        id: 'opt-2c',
        text: 'Overarching Theme: "Teenagers Should Be Banned from the Internet"',
        isCorrect: false,
        feedback: 'Incorrect. Academic themes synthesize qualitative evidence; they do not issue emotional moral commands.'
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
    taskPrompt: 'What overarching Theme unites these codes?',
    options: [
      {
        id: 'opt-3a',
        text: 'Overarching Theme: "Integrative Healthcare: Harmonizing Indigenous Wisdom with Biomedical Rigor"',
        isCorrect: true,
        feedback: 'Correct! The theme captures the constructive synergy between traditional cultural heritage and modern empirical medicine.'
      },
      {
        id: 'opt-3b',
        text: 'Overarching Theme: "Modern Hospitals Should Reject All Plants"',
        isCorrect: false,
        feedback: 'Incorrect. The codes show doctors actively seeking ways to validate and incorporate beneficial herbal remedies.'
      },
      {
        id: 'opt-3c',
        text: 'Overarching Theme: "Turmeric is Yellow"',
        isCorrect: false,
        feedback: 'Incorrect. A trivial chemical fact cannot serve as an analytical qualitative theme.'
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
        text: 'She has achieved "Theoretical Saturation" and can stop data collection because new interviews no longer produce novel conceptual insights.',
        isCorrect: true,
        feedback: 'Correct! In qualitative research, sample size is determined by saturation (when data repeats and no new themes emerge), not an arbitrary quota.'
      },
      {
        id: 'opt-4b',
        text: 'She must immediately delete the last 6 interviews because repetition proves the study has failed.',
        isCorrect: false,
        feedback: 'Incorrect. Repetition is the gold standard proof that the phenomenon has been thoroughly mapped.'
      },
      {
        id: 'opt-4c',
        text: 'She must interview 5,000 more people until someone contradicts the earlier interviews.',
        isCorrect: false,
        feedback: 'Incorrect. Qualitative research seeks depth and saturation, not giant statistical headcounts.'
      }
    ],
    pedagogicalKey: 'Theoretical Saturation occurs when additional data yields no new properties or thematic codes.',
    misconceptionAlert: {
      label: 'Misconception: Qualitative research always needs hundreds of interviews',
      explanation: 'Qualitative sample sizes are guided by depth and saturation. 12–20 rich interviews often achieve full saturation.'
    }
  },

  // STAGE 3: METHODOLOGICAL ALIGNMENT (Content vs Thematic vs Narrative vs Discourse) (3 items)
  {
    id: 'g3-3-s3-q1',
    stage: 3,
    title: 'Method Match 1: Counting Keyword Frequencies in Presidential Speeches',
    sourceContext: 'A political scientist analyzes 50 years of Indonesian Independence Day speeches to measure how many times the words "kedaulatan" (sovereignty), "ekonomi" (economy), and "maritim" (maritime) were spoken across administrations.',
    rawExcerpt: 'Count table: Word "Maritim" appeared 2 times (1970–1998) vs. 48 times (2014–2024).',
    taskPrompt: 'Which qualitative/mixed analytical method specifically tallies the presence, frequency, and distribution of specific words or concepts in text?',
    options: [
      {
        id: 'opt-1a',
        text: 'Content Analysis: It systematically quantifies the presence, frequency, and patterns of specified words or categories in media and texts.',
        isCorrect: true,
        feedback: 'Correct! Content analysis bridges qualitative texts and numerical tallies by counting how often target terms or categories appear.'
      },
      {
        id: 'opt-1b',
        text: 'Narrative Analysis: It listens to personal autobiographies and emotional childhood memories.',
        isCorrect: false,
        feedback: 'Incorrect. Counting word frequency across 50 presidential speeches is content analysis, not personal life storytelling.'
      },
      {
        id: 'opt-1c',
        text: 'Laboratory Experiment: It measures blood pressure while reading speeches.',
        isCorrect: false,
        feedback: 'Incorrect. Textual analysis does not involve clinical physiology.'
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
        id: 'opt-2a',
        text: 'Discourse Analysis: It investigates how language, power, and ideology interact to shape public perception and social hierarchies.',
        isCorrect: true,
        feedback: 'Correct! Discourse analysis looks beyond surface words to examine how language reflects and reinforces power structures in society.'
      },
      {
        id: 'opt-2b',
        text: 'Arithmetic Average Calculation: It adds up the number of letters in headlines.',
        isCorrect: false,
        feedback: 'Incorrect. The focus is ideological framing and social power, not letter counts.'
      },
      {
        id: 'opt-2c',
        text: 'Content Analysis: It only counts whether words are printed in blue or black ink.',
        isCorrect: false,
        feedback: 'Incorrect. Deconstructing power and institutional ideology is the hallmark of Discourse Analysis.'
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
        text: 'Narrative Analysis: It focuses on stories, biographical chronologies, and personal narrative arcs to understand how people make meaning of their life journeys.',
        isCorrect: true,
        feedback: 'Correct! Narrative analysis examines the structure, sequence, and personal plotlines people use to understand their life histories.'
      },
      {
        id: 'opt-3b',
        text: 'Quantitative Survey: It asks Ibu Aminah to rate her entire 15-year life on a 1-to-5 star scale.',
        isCorrect: false,
        feedback: 'Incorrect. Rating a rich human life story on a 1-5 scale flattens and destroys biographical nuance.'
      },
      {
        id: 'opt-3c',
        text: 'Content Word Frequency: It counts how many times she said the word "Hong Kong".',
        isCorrect: false,
        feedback: 'Incorrect. Life histories require narrative analysis of personal meaning and temporal progression.'
      }
    ],
    pedagogicalKey: 'Narrative Analysis explores the storied nature of human experience through biographical sequencing.'
  }
];
