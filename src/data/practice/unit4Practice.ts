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
      { id: 'opt-a', text: 'A summary uses bullet points, while a synthesis must only use pie charts', explanation: 'Formatting styles do not define the cognitive boundary between summary and synthesis.' },
      { id: 'opt-b', text: 'A summary restates each source one by one in isolation, while a synthesis weaves multiple sources together to show how they agree, disagree, or build upon one another', explanation: 'Synthesis integrates multiple sources to reveal overarching themes, consensus, or contradictions, whereas summary simply retells individual texts.' },
      { id: 'opt-c', text: 'A summary is written by students, while a synthesis is only created by government ministers', explanation: 'Synthesis is a core skill taught to Grade 10 researchers in Global Perspectives.' },
      { id: 'opt-d', text: 'A summary always focuses on quantitative numbers, while a synthesis focuses only on opinions', explanation: 'Both summaries and syntheses can incorporate qualitative and quantitative evidence.' }
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
      { id: 'opt-a', text: 'A scholarly consensus', explanation: 'When multiple credible, independent sources arrive at the same conclusion, a consensus exists across the literature.' },
      { id: 'opt-b', text: 'A cognitive bias', explanation: 'Broad independent agreement across peer-reviewed sources indicates scholarly consensus, not bias.' },
      { id: 'opt-c', text: 'An academic plagiarism violation', explanation: 'Independent researchers reaching the same empirical finding is replication and consensus, not plagiarism.' },
      { id: 'opt-d', text: 'A false dilemma fallacy', explanation: 'Consensus among experts is an evidentiary pattern, not a logical fallacy.' }
    ],
    correctAnswer: 'opt-a',
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
      { id: 'opt-a', text: 'Delete Source B because it sounds pessimistic', explanation: 'Ignoring contradictory evidence is confirmation bias and poor scholarship.' },
      { id: 'opt-b', text: 'Examine differences in context, methodology, sample size, and specific tool usage to explain under what conditions AI helps versus hinders learning', explanation: 'Rigorous synthesis analyzes the boundaries and methodological nuances that explain why differing outcomes occurred.' },
      { id: 'opt-c', text: 'Average the two numbers together (+25% and -15%) and conclude AI has a +5% impact everywhere', explanation: 'Averaging disparate metrics from completely different studies is mathematically invalid.' },
      { id: 'opt-d', text: 'Declare that neither source can ever be used again in any research paper', explanation: 'Contradictions in research provide fertile ground for deeper inquiry rather than total dismissal.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'Student names in the rows and favorite hobbies in the columns', explanation: 'This structure has no relevance to academic literature synthesis.' },
      { id: 'opt-b', text: 'Key themes or research sub-questions along the columns, and individual source citations down the rows', explanation: 'A synthesis matrix organizes sources against central themes or sub-questions, allowing researchers to see cross-source patterns at a glance.' },
      { id: 'opt-c', text: 'Only website URLs without any thematic categories', explanation: 'A list of URLs is a bookmark list, not an analytical matrix.' },
      { id: 'opt-d', text: 'Random vocabulary words sorted alphabetically', explanation: 'Alphabetical vocabulary lists do not facilitate thematic synthesis.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'A significant geographic and demographic research gap in the existing literature', explanation: 'Recognizing unstudied populations or settings identifies an empirical gap for future inquiry.' },
      { id: 'opt-b', text: 'Proof that electric buses do not work on islands', explanation: 'Lack of research does not prove technical failure.' },
      { id: 'opt-c', text: 'That the 12 studies are all fake and invalid', explanation: 'Urban studies can be highly valid for urban contexts; they simply have limited generalizability to rural areas.' },
      { id: 'opt-d', text: 'That Singapore and Kuala Lumpur are rural communities', explanation: 'Both are prominent metropolitan areas.' }
    ],
    correctAnswer: 'opt-a',
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
      { id: 'opt-a', text: 'A well-synthesized paragraph starts with a thematic topic sentence and integrates multiple citations together, while a poor paragraph discusses only one author in isolation', explanation: 'Organizing by theme and integrating diverse citations produces authentic academic synthesis.' },
      { id: 'opt-b', text: 'A well-synthesized paragraph avoids using any citations or author names', explanation: 'Academic synthesis strictly requires accurate source attribution.' },
      { id: 'opt-c', text: 'A well-synthesized paragraph must be at least 1,500 words long', explanation: 'Word count does not measure the quality of synthesis.' },
      { id: 'opt-d', text: 'A well-synthesized paragraph uses only direct quotes without any original student analysis', explanation: 'Relying exclusively on quotes without analysis is called quote-dumping, not synthesis.' }
    ],
    correctAnswer: 'opt-a',
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
      { id: 'opt-a', text: 'Students hate health food and will never eat vegetables', explanation: 'This overgeneralizes and ignores the specific qualitative reasons given.' },
      { id: 'opt-b', text: 'The low purchase rate (32%) is driven by packaging and sensory presentation rather than an inherent rejection of nutritious food', explanation: 'Synthesizing the "what" (quantitative stat) with the "why" (qualitative feedback) yields an actionable, complete explanation.' },
      { id: 'opt-c', text: 'The quantitative survey was clearly flawed because numbers cannot be trusted', explanation: 'The 32% statistic aligns with and is explained by the qualitative remarks.' },
      { id: 'opt-d', text: 'Salads should be banned from all school campuses permanently', explanation: 'An irrational conclusion that ignores constructive student feedback.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'Rigorous peer review', explanation: 'Peer review actively critiques and challenges assertions rather than passively conforming.' },
      { id: 'opt-b', text: 'Groupthink', explanation: 'Groupthink is the psychological drive for consensus and harmony that overrides critical evaluation of evidence.' },
      { id: 'opt-c', text: 'Triangulation', explanation: 'Triangulation cross-verifies multiple perspectives and data sources.' },
      { id: 'opt-d', text: 'Random stratified sampling', explanation: 'This is a sampling technique, not a team collaboration pitfall.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'Because having three sources means the report is guaranteed to be three times as long', explanation: 'Length does not equate to academic validity.' },
      { id: 'opt-b', text: 'Because if different methods (e.g. observation, survey, and official audit) point to the same outcome, the finding is far less likely to be an artifact of a single method’s flaw or bias', explanation: 'Triangulation cross-checks findings across disparate methods, cancelling out individual methodological weaknesses.' },
      { id: 'opt-c', text: 'Because triangles are the strongest geometric shapes in engineering', explanation: 'A metaphor, not an epistemological justification for research validity.' },
      { id: 'opt-d', text: 'Because Cambridge examiners penalize any paper that uses only two sources', explanation: 'While variety is praised, the core justification is epistemological strength and error reduction.' }
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
      { id: 'opt-a', text: 'Close the entire coast to all visitors permanently, eliminating all tourism jobs', explanation: 'Ignores economic livelihoods and local employment completely.' },
      { id: 'opt-b', text: 'Allow unlimited speedboats without any regulations to maximize tax revenue', explanation: 'Ignores environmental degradation and cultural sanctity.' },
      { id: 'opt-c', text: 'Implement a capped-capacity eco-tourism zoning plan with speedboat-free marine corridors and an entry tariff dedicated to local reef restoration and village cultural programs', explanation: 'Integrates economic livelihoods, ecological conservation, and cultural preservation into a viable, balanced bridge solution.' },
      { id: 'opt-d', text: 'Do not write any recommendation because the three sources disagree', explanation: 'A synthesized conclusion should actively construct balanced bridge solutions amidst conflicting priorities.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'High-level synthesis constructs balanced bridge solutions that honor economic vitality while implementing robust protections for environmental and cultural stakeholders.'
  }
];
