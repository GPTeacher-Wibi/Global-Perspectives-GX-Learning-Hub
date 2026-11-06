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
        text: 'The Mean is always the most accurate representation of typical values in every dataset, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-b',
        text: 'Extreme outliers exert zero mathematical influence on the calculated arithmetic Mean.'
      },
      {
        id: 'opt-c',
        text: 'The Median provides a more robust measure of central tendency when datasets contain severe outliers.'
      },
      {
        id: 'opt-d',
        text: 'The Mode should be discarded because qualitative categories cannot have repeated frequencies.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'Median'
      },
      {
        id: 'opt-b',
        text: 'Mean, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-c',
        text: 'Mode'
      },
      {
        id: 'opt-d',
        text: 'Range'
      }
    ],
    correctAnswer: 'opt-a',
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
      {
        id: 'opt-a',
        text: 'Standard deviation measures the exact difference between the highest value and the lowest value in a survey sample.'
      },
      {
        id: 'opt-b',
        text: 'A higher standard deviation always proves that the underlying research methodology suffered from sampling errors.'
      },
      {
        id: 'opt-c',
        text: 'Standard deviation calculates the percentage of survey respondents who selected the neutral option on a Likert scale.'
      },
      {
        id: 'opt-d',
        text: 'Standard deviation quantifies the dispersion of data points around the mean; low values indicate high consistency.'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Pie Chart showing parts of 100%'
      },
      {
        id: 'opt-b',
        text: 'Line Graph showing continuous trends over time'
      },
      {
        id: 'opt-c',
        text: 'Bar Chart comparing discrete categories'
      },
      {
        id: 'opt-d',
        text: 'Scatter Plot assessing correlation between variables'
      }
    ],
    correctAnswer: 'opt-b',
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
      {
        id: 'opt-a',
        text: 'Histogram showing numerical data distribution, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'Line Graph tracking monthly temperature shifts'
      },
      {
        id: 'opt-c',
        text: 'Scatter Plot examining the relationship between two variables'
      },
      {
        id: 'opt-d',
        text: 'Box Plot highlighting median and interquartile ranges'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'Truncating the y-axis creates a visually dramatic slope that exaggerates small, statistically minor differences.'
      },
      {
        id: 'opt-b',
        text: 'Starting the vertical scale at 50% is required by international cartographic and graphic visualization standards.'
      },
      {
        id: 'opt-c',
        text: 'Using a line graph for percentage data is fundamentally invalid because lines can only represent physical speed.'
      },
      {
        id: 'opt-d',
        text: 'Labeling the horizontal axis with calendar years distorts longitudinal trends by concealing seasonal fluctuations.'
      }
    ],
    correctAnswer: 'opt-a',
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
      {
        id: 'opt-a',
        text: 'Qualitative thematic coding converts written narratives into exact mathematical equations for regression analysis, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'Thematic analysis requires researchers to discard all participant quotes that contradict the researcher’s hypothesis.'
      },
      {
        id: 'opt-c',
        text: 'Qualitative coding is performed exclusively by computer software without any human interpretive judgments.'
      },
      {
        id: 'opt-d',
        text: 'Thematic analysis involves systematically organizing raw narrative data into meaningful codes to identify overarching themes.'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Counting the total number of words in an interview transcript.'
      },
      {
        id: 'opt-b',
        text: 'A shorthand label assigned to a text excerpt representing an idea.'
      },
      {
        id: 'opt-c',
        text: 'A statistical test proving the statistical significance of a quote.'
      },
      {
        id: 'opt-d',
        text: 'The final policy recommendation presented to government ministers.'
      }
    ],
    correctAnswer: 'opt-b',
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
      {
        id: 'opt-a',
        text: 'Triangulation means surveying exactly three participants to maintain a small, highly manageable qualitative dataset, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-b',
        text: 'Triangulation requires researchers to discard the lowest and highest survey responses before calculating statistical means.'
      },
      {
        id: 'opt-c',
        text: 'Triangulation combines multiple data sources, methods, or observers to cross-verify findings and enhance research credibility.'
      },
      {
        id: 'opt-d',
        text: 'Triangulation replaces formal ethical consent procedures by cross-referencing public social media profiles of participants.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'Correlation indicates that two variables change together, but does not prove that one variable causes the other to occur.'
      },
      {
        id: 'opt-b',
        text: 'Whenever two statistical variables demonstrate strong correlation, a direct causal link is mathematically guaranteed, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-c',
        text: 'Correlation can only be calculated for biological experiments, whereas social science data requires thematic causality.'
      },
      {
        id: 'opt-d',
        text: 'Negative correlation indicates that research data was recorded incorrectly and must be discarded from the final analysis.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Researchers are ethically bound to maintain confidentiality and anonymity, ensuring that participants cannot be personally identified or harmed by published findings.'
  }
];
