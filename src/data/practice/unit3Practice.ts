/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 3 PRACTICE QUESTION BANK: DATA ANALYSIS
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 39–53)
 *
 * Grounding:
 * - Section 3.1: Raw Data vs. Usable Knowledge (pp. 39–40)
 * - Section 3.2: Descriptive Statistics: Mean, Median, Mode (pp. 41–44)
 * - Section 3.3: Data Dispersion & Outliers (pp. 45–48)
 * - Section 3.4: Visual Representations & Chart Selection (pp. 49–53)
 *
 * Target Audience: Grade 10 Cambridge Global Perspectives (CEFR B1 English)
 * Educational Philosophy: "Meaningful thinking over fast clicking"
 */

import { PracticeQuestion } from '../../types/curriculum';
import {
  CognitiveDemand,
  CambridgeCoreProcess,
  SourceReference
} from '../../types/practiceGame';

export interface EnrichedPracticeQuestion extends PracticeQuestion {
  cognitiveDemand: CognitiveDemand;
  coreProcesses: CambridgeCoreProcess[];
  sourceRef: SourceReference;
  misconceptionId?: string;
}

export const UNIT_3_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  {
    id: 'u3-p-01',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Quantitative vs. Qualitative Data',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 3,
      section: '3.1',
      pageRange: '39-40',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.1, pp. 39–40',
    misconceptionId: 'misc-numbers-are-always-better',
    misconceptionAlert: 'Do not assume numbers are automatically more scientific or meaningful than descriptive interview insights.',
    question: 'Which of the following datasets is strictly qualitative rather than quantitative?',
    options: [
      {
        id: 'opt-a',
        text: 'The percentage of households with solar panels in Yogyakarta',
        explanation: 'Percentages are numerical measurements, which are quantitative.'
      },
      {
        id: 'opt-b',
        text: 'Transcripts of farmer interviews describing how seasonal droughts feel and affect their livelihood',
        explanation: 'Interview transcripts capture verbal words, personal meanings, and lived experiences, which are qualitative.'
      },
      {
        id: 'opt-c',
        text: 'The daily kilograms of organic waste collected across five wet markets',
        explanation: 'Kilograms are physical numeric measurements, which are quantitative.'
      },
      {
        id: 'opt-d',
        text: 'A spreadsheet of average test scores from 25 high schools in Jakarta',
        explanation: 'Test score averages are numeric quantitative values.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Qualitative data consists of non-numerical descriptions such as interview transcripts, open text, and lived experiences, while quantitative data consists of countable or measurable numbers.'
  },
  {
    id: 'u3-p-02',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Descriptive Statistics: Measures of Central Tendency',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 3,
      section: '3.2',
      pageRange: '41-43',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.2, pp. 41–43',
    question: 'Which measure of central tendency identifies the exact middle value when data points are sorted from lowest to highest?',
    options: [
      { id: 'opt-a', text: 'Mean', explanation: 'The mean is the arithmetic average obtained by dividing the sum by the total count.' },
      { id: 'opt-b', text: 'Median', explanation: 'The median is the precise physical midpoint of an ordered distribution.' },
      { id: 'opt-c', text: 'Mode', explanation: 'The mode is the most frequently occurring value in a dataset.' },
      { id: 'opt-d', text: 'Range', explanation: 'The range is the difference between the highest and lowest values, measuring spread rather than central tendency.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'The median is the exact middle value of an ordered dataset. It divides the higher half of the data from the lower half.'
  },
  {
    id: 'u3-p-03',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Outlier Impact on the Mean',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 3,
      section: '3.2',
      pageRange: '42-44',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.2, pp. 42–44',
    misconceptionId: 'misc-mean-always-best',
    misconceptionAlert: 'The arithmetic mean can be heavily distorted by extreme values (outliers), giving a false impression of what is typical.',
    scenario: 'In a small village workshop, five apprentice artisans earn 2 million IDR per month, one supervisor earns 4 million IDR, and the founder CEO earns 80 million IDR per month.',
    question: 'Why would the median monthly income provide a more truthful picture of typical earnings in this workshop than the mean?',
    options: [
      { id: 'opt-a', text: 'Because the median is easier to calculate without a scientific calculator', explanation: 'Ease of calculation is not an academic criterion for statistical validity.' },
      { id: 'opt-b', text: 'Because the founder’s 80 million IDR salary is an extreme outlier that pulls the arithmetic mean unrealistically high', explanation: 'Outliers dramatically distort the mean, whereas the median remains resistant to extreme values.' },
      { id: 'opt-c', text: 'Because qualitative data cannot have an arithmetic average', explanation: 'Salaries are quantitative numbers, not qualitative.' },
      { id: 'opt-d', text: 'Because the median is always strictly higher than the mean in all social research', explanation: 'The median can be higher, lower, or equal to the mean depending on skewness.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'The mean is highly sensitive to extreme outliers like the 80 million IDR salary. The median represents the typical worker without being distorted by one disproportionate income.'
  },
  {
    id: 'u3-p-04',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Chart Selection: Proportions of a Whole',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Delivery'],
    sourceRef: {
      unitNumber: 3,
      section: '3.4',
      pageRange: '49-51',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.4, pp. 49–51',
    question: 'A student researcher wants to show how the municipal budget of Surabaya is divided into health, education, transport, and parks (adding up to 100%). Which chart type is most appropriate?',
    options: [
      { id: 'opt-a', text: 'Line graph', explanation: 'Line graphs are designed to show trends over continuous time, not budget part-to-whole splits.' },
      { id: 'opt-b', text: 'Scatter plot', explanation: 'Scatter plots are used to evaluate relationships/correlations between two continuous variables.' },
      { id: 'opt-c', text: 'Pie chart or 100% Stacked Bar chart', explanation: 'Pie and stacked bar charts are specifically designed to illustrate percentage shares that total 100% of a whole.' },
      { id: 'opt-d', text: 'Box-and-whisker plot', explanation: 'Box plots display dispersion, quartiles, and outliers rather than budget allocations.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Pie charts and 100% stacked bar charts are the optimal visual choice when illustrating parts of a single whole that sum up to 100%.'
  },
  {
    id: 'u3-p-05',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Chart Selection: Trends Over Time',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Delivery'],
    sourceRef: {
      unitNumber: 3,
      section: '3.4',
      pageRange: '50-52',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.4, pp. 50–52',
    question: 'Which visualization format is standard for displaying monthly changes in average ambient air pollution (PM2.5) across Jakarta from January through December?',
    options: [
      { id: 'opt-a', text: 'Line graph with time on the horizontal X-axis', explanation: 'Line charts are the international standard for showing continuous temporal progression and seasonal trends.' },
      { id: 'opt-b', text: 'Donut chart with 12 equal slices', explanation: 'Donut charts do not effectively convey sequential temporal trends.' },
      { id: 'opt-c', text: 'Venn diagram', explanation: 'Venn diagrams show conceptual overlap and logical sets, not time-series measurements.' },
      { id: 'opt-d', text: 'Treemap diagram', explanation: 'Treemaps show hierarchical categorical data sizes, not continuous time series.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'A line graph with chronological time on the horizontal X-axis connects data points to clearly reveal upward, downward, and seasonal trends.'
  },
  {
    id: 'u3-p-06',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Correlation vs. Causation',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 3,
      section: '3.3',
      pageRange: '46-48',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.3, pp. 46–48',
    misconceptionId: 'misc-correlation-equals-causation',
    misconceptionAlert: 'Just because two trends rise together does not prove that one caused the other; a third variable may explain both.',
    scenario: 'A study in a coastal city finds that during months when ice cream sales are highest, drowning incidents at the municipal beach also reach their annual peak.',
    question: 'What is the most rigorous academic critique of concluding that "eating ice cream causes drowning"?',
    options: [
      { id: 'opt-a', text: 'Ice cream contains sugar which makes people too heavy to swim', explanation: 'This accepts the flawed causal claim without empirical justification.' },
      { id: 'opt-b', text: 'Both variables correlate because hot sunny weather increases both beach visits and ice cream demand independently (confounding variable)', explanation: 'A third confounding variable (hot weather) causes both independent behaviors, explaining the correlation without any direct causation.' },
      { id: 'opt-c', text: 'The sample size of ice cream buyers was not collected with a spreadsheet', explanation: 'The tool used to collect data does not address the logical flaw of assuming causation from correlation.' },
      { id: 'opt-d', text: 'Correlation is illegal to report in Cambridge Global Perspectives research', explanation: 'Correlation is widely studied in research, provided researchers do not falsely claim direct causation.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Correlation does not imply causation. Hot summer weather is a confounding variable that causes both more ice cream consumption and more swimming, leading to higher drowning risks.'
  },
  {
    id: 'u3-p-07',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Interpreting Data Dispersion & Standard Deviation',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 3,
      section: '3.3',
      pageRange: '45-47',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.3, pp. 45–47',
    scenario: 'Two classrooms, Class A and Class B, both achieve an average (mean) score of 75 on their Global Perspectives midterm exam. However, Class A has a standard deviation of 2.1, while Class B has a standard deviation of 18.5.',
    question: 'What does this difference in standard deviation reveal to an educational researcher?',
    options: [
      { id: 'opt-a', text: 'Class A and Class B have identical learning profiles because their means match', explanation: 'Matching means mask dramatic differences in distribution and consistency.' },
      { id: 'opt-b', text: 'Class A students scored very consistently close to 75, whereas Class B has wide disparity with very high and very low scoring students', explanation: 'A low standard deviation means tightly clustered data, while a high standard deviation indicates broad spread and inequality.' },
      { id: 'opt-c', text: 'Class B had more students than Class A', explanation: 'Standard deviation measures spread, not total class headcount.' },
      { id: 'opt-d', text: 'Class A cheated because their scores were too close together', explanation: 'Consistency does not imply academic dishonesty.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Standard deviation measures how spread out values are from the mean. A low standard deviation (Class A) indicates consistent performance, while a high standard deviation (Class B) indicates wide variation.'
  },
  {
    id: 'u3-p-08',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Identifying Misleading Graphs',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 3,
      section: '3.4',
      pageRange: '51-53',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.4, pp. 51–53',
    question: 'A media broadcast displays a bar chart comparing two candidates: Candidate A has 50.5% and Candidate B has 49.5%. However, Candidate A’s bar looks three times taller than Candidate B’s. What deceptive graphical technique was used?',
    options: [
      { id: 'opt-a', text: 'Using a truncated vertical Y-axis that starts at 49% rather than zero', explanation: 'Truncating the baseline exaggerates tiny differences, creating an optical illusion of a huge gap.' },
      { id: 'opt-b', text: 'Using a qualitative pie slice instead of a numeric bar', explanation: 'The description specifies a bar chart was used.' },
      { id: 'opt-c', text: 'Calculating the median instead of the mode', explanation: 'Calculation method does not alter graphical bar scaling.' },
      { id: 'opt-d', text: 'Surveying only voters who had access to smartphones', explanation: 'Sampling bias is a collection flaw, not a visual graphing trick.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Starting the Y-axis at a non-zero baseline (such as 49%) artificially exaggerates small differences between values, visually misleading the audience.'
  },
  {
    id: 'u3-p-09',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Qualitative Thematic Analysis',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 3,
      section: '3.1',
      pageRange: '40-41',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.1, pp. 40–41',
    question: 'When analyzing 50 open-ended interview responses from local community members, what is the first rigorous step in thematic coding?',
    options: [
      { id: 'opt-a', text: 'Converting all words into numbers and calculating the arithmetic mean', explanation: 'Qualitative text should not be superficially converted to numbers without coding themes.' },
      { id: 'opt-b', text: 'Reading through transcripts to identify recurring ideas, patterns, and categories, then assigning codes to key excerpts', explanation: 'Thematic analysis systematically identifies recurring patterns, categorizing and coding meaning across transcripts.' },
      { id: 'opt-c', text: 'Discarding any interviews that express negative opinions about the local council', explanation: 'Selectively omitting dissenting opinions introduces severe researcher bias.' },
      { id: 'opt-d', text: 'Publishing only the shortest quote to save space on presentation slides', explanation: 'Academic rigour requires systematic synthesis, not cherry-picking single soundbites.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Qualitative thematic analysis begins by thoroughly reading transcripts, identifying recurring patterns, and assigning structured thematic codes to substantive excerpts.'
  },
  {
    id: 'u3-p-10',
    unitNumber: 3,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Data Ethics and Anonymity in Analysis',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Collaboration', 'Delivery'],
    sourceRef: {
      unitNumber: 3,
      section: '3.1',
      pageRange: '39-41',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 3.1, pp. 39–41',
    scenario: 'A student conducts an analysis of mental health survey responses from 40 classmates. In the final research poster, the student publishes direct quotes alongside the student participants’ real names and classroom student numbers.',
    question: 'Which fundamental principle of academic research and data ethics has been violated?',
    options: [
      { id: 'opt-a', text: 'Failure to use a secondary source', explanation: 'Primary surveys are valid data sources; the flaw is ethical privacy protection.' },
      { id: 'opt-b', text: 'Breach of participant confidentiality and informed consent regarding anonymity', explanation: 'Ethical researchers must protect participant privacy and remove personally identifiable identifiers (PII).' },
      { id: 'opt-c', text: 'Failure to compute the standard deviation of each quote', explanation: 'Standard deviation cannot be computed on verbal quotes.' },
      { id: 'opt-d', text: 'Violating copyright law on student names', explanation: 'Names are not protected by copyright; the issue is human participant ethics and privacy.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Researchers are ethically bound to maintain confidentiality and anonymity, ensuring that participants cannot be personally identified or harmed by published findings.'
  }
];
