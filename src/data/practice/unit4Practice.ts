/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 4 PRACTICE QUESTION BANK: DATA SYNTHESIS
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 54–68)
 *
 * Grounding:
 * - Section 4.1: What is Synthesis? (Synthesis vs. Summary) (pp. 54–57)
 * - Section 4.2: Identifying Consensus, Contradictions, and Knowledge Gaps (pp. 58–61)
 * - Section 4.3: Synthesis Matrices & Visual Conceptual Maps (pp. 62–65)
 * - Section 4.4: Crafting Integrated Evidence-Based Arguments (pp. 66–68)
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

export const UNIT_4_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  {
    id: 'u4-p-01',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Synthesis vs. Summary',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 4,
      section: '4.1',
      pageRange: '54-56',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.1, pp. 54–56',
    misconceptionId: 'misc-summary-equals-synthesis',
    misconceptionAlert: 'Do not confuse summarizing individual articles one-by-one with synthesizing connections across multiple sources.',
    question: 'What is the key difference between an academic summary and an academic synthesis?',
    options: [
      {
        id: 'opt-a',
        text: 'A single immediate factor that triggers an event, such as a lightning strike igniting a forest fire, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-b',
        text: 'An underlying, systemic factor that creates the vulnerabilities allowing a crisis to develop over time.'
      },
      {
        id: 'opt-c',
        text: 'The visible physical damage documented by journalists immediately following a natural disaster.'
      },
      {
        id: 'opt-d',
        text: 'An emergency relief donation organized by international non-governmental organizations.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'A summary recounts individual sources in isolation, whereas an academic synthesis connects multiple sources together to discover commonalities, contrasts, and new integrated perspectives.'
  },
  {
    id: 'u4-p-02',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Identifying Academic Consensus',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 4,
      section: '4.2',
      pageRange: '58-59',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.2, pp. 58–59',
    question: 'When a researcher reads five independent peer-reviewed reports on mangrove restoration and discovers that all five conclude that community participation is vital for sapling survival, what has been identified?',
    options: [
      {
        id: 'opt-a',
        text: 'Root Cause Factor'
      },
      {
        id: 'opt-b',
        text: 'Systemic Vulnerability'
      },
      {
        id: 'opt-c',
        text: 'Long-term Condition'
      },
      {
        id: 'opt-d',
        text: 'Immediate Trigger'
      }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Scholarly consensus occurs when multiple independent, credible sources and researchers arrive at the same conclusion through empirical investigation.'
  },
  {
    id: 'u4-p-03',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Reconciling Contradictions in Research',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 4,
      section: '4.2',
      pageRange: '59-61',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.2, pp. 59–61',
    scenario: 'Source A (a tech firm survey) claims AI in classrooms improves student test scores by 25%. Source B (an independent university clinical trial) reports that excessive screen time lowers student reading retention by 15%.',
    question: 'How should an effective Global Perspectives synthesizer handle these contradictory findings?',
    options: [
      {
        id: 'opt-a',
        text: 'Root causes are systemic and structural conditions, whereas triggers are immediate catalytic events.'
      },
      {
        id: 'opt-b',
        text: 'Root causes occur exclusively at international scales, while triggers happen only within private households.'
      },
      {
        id: 'opt-c',
        text: 'Addressing triggers permanently resolves social problems, while studying root causes produces academic delay.'
      },
      {
        id: 'opt-d',
        text: 'Triggers are verifiable empirical facts, while root causes are subjective opinions without statistical evidence.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Synthesizing contradictory evidence requires investigating differing research contexts, methodologies, and definitions to explain why different results emerged.'
  },
  {
    id: 'u4-p-04',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Using a Synthesis Matrix',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 4,
      section: '4.3',
      pageRange: '62-64',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.3, pp. 62–64',
    question: 'In a synthesis matrix (grid), what typically forms the rows and columns to organize literature effectively?',
    options: [
      {
        id: 'opt-a',
        text: 'A primary effect that occurs immediately at the point of intervention, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'An unverified rumor shared across informal community communication channels.'
      },
      {
        id: 'opt-c',
        text: 'An unintended secondary consequence triggered indirectly along a causal chain.'
      },
      {
        id: 'opt-d',
        text: 'A planned policy outcome that matches all initial government projections.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation: 'A synthesis matrix places sources along one axis and key thematic concepts or sub-questions along the other, enabling researchers to identify trends, agreements, and gaps across studies.'
  },
  {
    id: 'u4-p-05',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Identifying Research Gaps',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 4,
      section: '4.2',
      pageRange: '60-62',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.2, pp. 60–62',
    scenario: 'A student synthesizes 12 studies on public electric bus adoption in Southeast Asia. All 12 studies were conducted in Singapore and Kuala Lumpur, focusing on high-density urban commuters. None examined rural feeder routes or island provinces.',
    question: 'What has the student successfully discovered through this synthesis?',
    options: [
      {
        id: 'opt-a',
        text: 'Installing coastal flood barriers in response to rising sea levels.'
      },
      {
        id: 'opt-b',
        text: 'Subsidizing corn biofuels leading to global food price inflation.'
      },
      {
        id: 'opt-c',
        text: 'Distributing mosquito nets that immediately reduce malaria cases.'
      },
      {
        id: 'opt-d',
        text: 'Building a school library that directly increases reading scores.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'A research gap represents an unexplored territory or underrepresented demographic in existing research. Synthesizing existing papers exposes where new inquiry is needed.'
  },
  {
    id: 'u4-p-06',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Constructing Thematic Paragraphs in Writing',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Delivery'],
    sourceRef: {
      unitNumber: 4,
      section: '4.4',
      pageRange: '66-68',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.4, pp. 66–68',
    question: 'In a Cambridge Global Perspectives research report, what distinguishes a well-synthesized body paragraph from a poorly synthesized one?',
    options: [
      {
        id: 'opt-a',
        text: 'Linear causality guarantees that complex ecosystems respond predictably to single-variable chemical modifications.'
      },
      {
        id: 'opt-b',
        text: 'Ecosystems operate on simple one-to-one cause-and-effect mechanisms where side effects never compound.'
      },
      {
        id: 'opt-c',
        text: 'Chemical interventions always produce purely localized outcomes without influencing adjacent food chains.'
      },
      {
        id: 'opt-d',
        text: 'Complex systems involve interconnected feedback loops where interventions generate cascading ripple effects.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Effective synthesis structures writing around central themes or claims, integrating multiple sources within the same paragraph to show how they converse with each other.'
  },
  {
    id: 'u4-p-07',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Synthesis of Quantitative and Qualitative Data',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 4,
      section: '4.1',
      pageRange: '56-58',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.1, pp. 56–58',
    scenario: 'A school cafeteria survey shows that only 32% of students purchase healthy salad bowls (quantitative). In interviews, students explain that the salads are pre-packaged in cold plastic containers with tasteless dressings (qualitative).',
    question: 'What comprehensive conclusion emerges from synthesizing these two datasets?',
    options: [
      {
        id: 'opt-a',
        text: 'A self-reinforcing cycle where an initial change produces effects that amplify the original condition.'
      },
      {
        id: 'opt-b',
        text: 'A stabilizing mechanism that automatically restores a natural ecosystem back to its original equilibrium.'
      },
      {
        id: 'opt-c',
        text: 'A formal legal agreement between national governments to regulate greenhouse gas emissions.'
      },
      {
        id: 'opt-d',
        text: 'A data collection technique where researchers survey the same participant three consecutive times.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Synthesizing quantitative metrics with qualitative human feedback reveals the underlying mechanism behind observed behaviors.'
  },
  {
    id: 'u4-p-08',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Groupthink in Collaborative Synthesis',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Collaboration'],
    sourceRef: {
      unitNumber: 4,
      section: '4.2',
      pageRange: '60-62',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.2, pp. 60–62',
    question: 'During a group project synthesis session, team members quickly agree with the loudest student’s conclusion without reviewing opposing data because they want to avoid conflict and finish early. What problem has occurred?',
    options: [
      {
        id: 'opt-a',
        text: 'Linear Cause, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'Direct Driver'
      },
      {
        id: 'opt-c',
        text: 'Feedback Loop'
      },
      {
        id: 'opt-d',
        text: 'Static Factor'
      }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Groupthink occurs when team members prioritize harmony or speed over critical examination of facts, resulting in superficial consensus and unexamined errors.'
  },
  {
    id: 'u4-p-09',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Triangulation of Evidence',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 4,
      section: '4.3',
      pageRange: '63-65',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.3, pp. 63–65',
    question: 'Why does "triangulation" (using three different methods or sources to investigate the same research question) increase the validity of an academic conclusion?',
    options: [
      {
        id: 'opt-a',
        text: 'Assuming that every global crisis can be traced back to a single malicious individual or corporation.'
      },
      {
        id: 'opt-b',
        text: 'Examining relationships, feedback loops, and structural patterns rather than isolating single events.'
      },
      {
        id: 'opt-c',
        text: 'Focusing exclusively on short-term emergency interventions while ignoring long-term historical trends.'
      },
      {
        id: 'opt-d',
        text: 'Relying solely on anecdotal interviews with local officials without verifying systemic economic data.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Triangulation strengthens validity because convergence across different inquiry methods (e.g., surveys, interviews, and official statistics) confirms the finding is robust and not an artifact of a single method’s bias.'
  },
  {
    id: 'u4-p-10',
    unitNumber: 4,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Formulating Balanced Synthesis Recommendations',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Reconstruction', 'Delivery'],
    sourceRef: {
      unitNumber: 4,
      section: '4.4',
      pageRange: '66-68',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 4.4, pp. 66–68',
    scenario: 'A researcher synthesizes economic data showing that eco-tourism creates 500 new jobs in Bali, alongside environmental reports documenting reef damage from tourist speedboats and cultural preservation petitions from local village elders.',
    question: 'Which synthesized policy recommendation best reconciles these competing perspectives?',
    options: [
      {
        id: 'opt-a',
        text: 'Complex global challenges will naturally self-correct if governments refrain from regulatory interventions.'
      },
      {
        id: 'opt-b',
        text: 'Single-factor solutions are universally effective because eliminating one root cause terminates all consequences.'
      },
      {
        id: 'opt-c',
        text: 'Local communities must bear the entire financial burden of mitigating unintended global environmental side effects.'
      },
      {
        id: 'opt-d',
        text: 'Effective interventions require mapping multi-tiered causal chains to anticipate unintended systemic consequences.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation: 'High-level synthesis constructs balanced bridge solutions that honor economic vitality while implementing robust protections for environmental and cultural stakeholders.'
  }
];
