/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 10 PRACTICE QUESTION BANK: DRAWING CONCLUSIONS
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 147–164)
 *
 * Grounding:
 * - Section 10.1: What Makes a Valid Conclusion? (pp. 147–150)
 * - Section 10.2: Avoiding Conclusion Traps: Overgeneralization & Leaps (pp. 151–154)
 * - Section 10.3: The Conclusion Matrix: Multi-Source Weighting (pp. 155–158)
 * - Section 10.4: Actionable Recommendations & Future Inquiry (pp. 159–164)
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

export const UNIT_10_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  {
    id: 'u10-p-01',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Anatomy of a Valid Academic Conclusion',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.1',
      pageRange: '147-149',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.1, pp. 147–149',
    misconceptionId: 'misc-conclusion-is-new-facts',
    misconceptionAlert: 'A conclusion must not introduce completely new, unexamined evidence in the final paragraph; it must synthesize the evidence presented in the body of the paper.',
    question: 'What is the primary academic function of a conclusion in a Global Perspectives research paper?',
    options: [
      { id: 'opt-a', text: 'To introduce five brand-new statistical graphs that were never mentioned in the main body', explanation: 'Introducing surprise evidence in the conclusion violates academic structure.' },
      { id: 'opt-b', text: 'To synthesize the analyzed evidence, directly answer the central research question, evaluate limitations, and explain broader significance', explanation: 'A valid conclusion brings together the analyzed arguments, answers the core inquiry question, acknowledges study boundaries, and highlights implications.' },
      { id: 'opt-c', text: 'To copy and paste the introductory paragraph verbatim with no changes', explanation: 'Merely repeating the introduction verbatim fails to provide synthesis or resolution.' },
      { id: 'opt-d', text: 'To apologize to the reader for any spelling mistakes in the essay', explanation: 'Apologizing is unprofessional and irrelevant to academic conclusions.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'A rigorous conclusion synthesizes the findings established in the body paragraphs, directly resolves the central research question, acknowledges boundaries, and articulates broader significance.'
  },
  {
    id: 'u10-p-02',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Conclusion Traps: Overgeneralization',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.2',
      pageRange: '151-153',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.2, pp. 151–153',
    question: 'A student tests three electric mopeds in dry weather on smooth pavement and concludes: "Electric two-wheelers are the safest, most perfect vehicles on Earth in all weather and terrain." What conclusion trap was committed?',
    options: [
      { id: 'opt-a', text: 'Overgeneralization (extending a narrow, limited finding far beyond the bounds of the actual evidence)', explanation: 'Testing three mopeds on dry pavement does not justify universal claims across all global terrains, rain conditions, or road profiles.' },
      { id: 'opt-b', text: 'Ad Hominem fallacy', explanation: 'No personal character attack was made.' },
      { id: 'opt-c', text: 'Correlation equals causation', explanation: 'The error is unjustified scope expansion, not a causal confusion.' },
      { id: 'opt-d', text: 'Straw Man fallacy', explanation: 'No opponent\'s argument was distorted.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Overgeneralization leaps from a small, specific data set to an unjustified universal generalization, ignoring unexamined conditions such as wet weather, unpaved terrain, and broader vehicle dynamics.'
  },
  {
    id: 'u10-p-03',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'The Conclusion Matrix: Multi-Source Weighting',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.3',
      pageRange: '155-157',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.3, pp. 155–157',
    scenario: 'In an inquiry on urban plastic bag bans, Evidence A (economic) shows a 4% profit drop for local convenience stores, Evidence B (ecological) shows a 70% decrease in storm drain blockages, and Evidence C (social) reveals that 82% of citizens adopted reusable cloth bags within three months.',
    question: 'Using a multi-criteria conclusion matrix, which integrated conclusion is best justified?',
    options: [
      { id: 'opt-a', text: 'The plastic ban failed completely because convenience store profits decreased', explanation: 'Considers only one metric while ignoring substantial ecological and civic benefits.' },
      { id: 'opt-b', text: 'While the ban caused manageable short-term retail friction, the overwhelming ecological benefit (70% drain clearing) and rapid civic adaptation (82%) justify continuing the policy with targeted retail transition support', explanation: 'Weighs competing evidence across all three dimensions to formulate a balanced, evidence-grounded conclusion.' },
      { id: 'opt-c', text: 'All convenience stores should be closed by municipal decree', explanation: 'Extreme and ungrounded in the evidence.' },
      { id: 'opt-d', text: 'Plastic bags are made of polymers and have no impact on flooding', explanation: 'Directly contradicts the empirical data on drain blockages.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'A conclusion matrix synthesizes varied criteria (economic, environmental, civic), balancing localized costs against broader societal dividends to arrive at an integrated judgment.'
  },
  {
    id: 'u10-p-04',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Evaluating Hypotheses Against Evidence',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.1',
      pageRange: '148-150',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.1, pp. 148–150',
    scenario: 'A student’s initial hypothesis was: "Installing solar-powered streetlights will reduce night-time traffic accidents by 50% in Kampung Rejo." After analyzing police accident logs, the student discovers accidents actually rose by 10% because vehicles drove faster on the illuminated road, though pedestrian crime plummeted by 80%.',
    question: 'How should an intellectually honest researcher conclude this study?',
    options: [
      { id: 'opt-a', text: 'Alter the accident records so the original hypothesis looks successful', explanation: 'Fabricating or falsifying data is severe academic fraud.' },
      { id: 'opt-b', text: 'Reject or modify the initial traffic safety hypothesis, report the unexpected increase in speeding honestly, and highlight the unintended positive outcome of sharp crime reduction', explanation: 'Scientific integrity requires reporting counter-hypothetical findings truthfully and exploring unexpected mechanisms (e.g., speeding on lit roads).' },
      { id: 'opt-c', text: 'Destroy the research project and never submit it for grading', explanation: 'Disproving a hypothesis is a successful and illuminating scientific outcome.' },
      { id: 'opt-d', text: 'Blame the police officers for writing false accident logs', explanation: 'Accusing authorities without evidence is unprofessional.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Academic integrity requires acknowledging when empirical evidence disconfirms an initial hypothesis. Discovering unexpected mechanisms is a hallmark of genuine scientific inquiry.'
  },
  {
    id: 'u10-p-05',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Acknowledging Study Limitations',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.2',
      pageRange: '153-155',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.2, pp. 153–155',
    question: 'Why does an explicit "Limitations of the Study" section enhance the academic credibility of a research report?',
    options: [
      { id: 'opt-a', text: 'It gives the teacher an easy excuse to subtract 20 marks', explanation: 'Examiners reward critical self-awareness and methodological honesty.' },
      { id: 'opt-b', text: 'It demonstrates critical self-awareness by candidly identifying sample size constraints, unmeasured variables, and boundaries of generalizability', explanation: 'Reflective researchers recognize their inquiry limits, ensuring that conclusions are appropriately contextualized.' },
      { id: 'opt-c', text: 'It proves that the researcher did not bother to prepare', explanation: 'All research—even Nobel prize-winning science—has methodological boundaries.' },
      { id: 'opt-d', text: 'It allows the student to complain about difficult homework', explanation: 'Limitations analyze methodological parameters, not personal emotional complaints.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Documenting study limitations (e.g., sample size, geographic scope, self-reporting bias) shows intellectual maturity and ensures findings are not misapplied beyond their valid scope.'
  },
  {
    id: 'u10-p-06',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Formulating Actionable Recommendations',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Reconstruction', 'Delivery'],
    sourceRef: {
      unitNumber: 10,
      section: '10.4',
      pageRange: '159-161',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.4, pp. 159–161',
    question: 'Which of the following recommendations is formulated with actionable clarity and institutional specificity?',
    options: [
      { id: 'opt-a', text: 'People should just be nicer to nature and stop polluting', explanation: 'Vague moral platitude; specifies no actor, timeline, mechanism, or measurable outcome.' },
      { id: 'opt-b', text: 'The Municipal Education Agency should mandate two separate sorting bins (organic and recyclable) in all state middle school cafeterias by August 2026, funded through the regional green campus grant', explanation: 'Identifies the precise actor (Education Agency), specific action (sorting bins), target venue (middle schools), deadline (August 2026), and funding mechanism.' },
      { id: 'opt-c', text: 'Someone somewhere ought to clean up all plastic waste instantly', explanation: 'Unrealistic, passive, and non-actionable.' },
      { id: 'opt-d', text: 'Schools should ban all homework so students have time to pick up trash', explanation: 'Disproportionate and misaligned recommendation.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'High-quality policy recommendations specify who must take action, what concrete intervention must be implemented, where, by when, and how it will be resourced.'
  },
  {
    id: 'u10-p-07',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Identifying Directions for Future Inquiry',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.4',
      pageRange: '162-164',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.4, pp. 162–164',
    scenario: 'A student completes an investigation showing that a new gamified math application boosted algebra scores for Grade 10 students over a 6-week trial.',
    question: 'What is a logical and academically fruitful suggestion for "Future Research" stemming from this finding?',
    options: [
      { id: 'opt-a', text: 'Math should be cancelled permanently in all high schools', explanation: 'Illogical reaction to a positive math learning tool.' },
      { id: 'opt-b', text: 'Future research should conduct a longitudinal study over 12 months to test whether mathematical retention persists after the novelty effect of gamification wears off', explanation: 'Identifies a vital methodological extension (longitudinal retention vs novelty effect) that builds upon the study.' },
      { id: 'opt-c', text: 'No future research should ever be conducted on education ever again', explanation: 'Inquiry is an iterative, ongoing dialogue.' },
      { id: 'opt-d', text: 'All students must buy the most expensive smartphone on the market', explanation: 'Commercial consumerism, not an academic research direction.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Academic conclusions point toward future research horizons. Testing whether short-term gains endure over long-term retention investigates the durability of findings.'
  },
  {
    id: 'u10-p-08',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Personal Reflection vs. Evidence-Based Conclusion',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.1',
      pageRange: '149-151',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.1, pp. 149–151',
    question: 'In Cambridge Global Perspectives individual reports, how does a student’s "Personal Reflection on Learning" differ from the "Substantive Academic Conclusion"?',
    options: [
      { id: 'opt-a', text: 'There is no difference; both are identical paragraphs', explanation: 'They fulfill fundamentally distinct evaluative roles in the Cambridge rubric.' },
      { id: 'opt-b', text: 'The academic conclusion answers the inquiry question based strictly on evidence, while personal reflection critically evaluates how the research process altered the student’s own perspective, assumptions, and collaboration habits', explanation: 'The conclusion resolves the empirical research question; personal reflection evaluates personal cognitive growth and methodological learning.' },
      { id: 'opt-c', text: 'The reflection is graded only on spelling and penmanship', explanation: 'Reflection is assessed on critical self-awareness and intellectual growth.' },
      { id: 'opt-d', text: 'Personal reflection is strictly forbidden in Cambridge Global Perspectives', explanation: 'Reflection is one of the four core assessment objectives in the syllabus.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'An academic conclusion answers the research question using synthesized evidence. A personal reflection assesses internal cognitive growth—how engaging with diverse viewpoints changed the researcher’s own outlook.'
  },
  {
    id: 'u10-p-09',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Validity vs. Soundness in Conclusions',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.1',
      pageRange: '147-150',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.1, pp. 147–150',
    scenario: 'Argument: "All flying creatures are insects. An eagle is a flying creature. Therefore, an eagle is an insect."',
    question: 'In formal logic and critical reasoning, how should this conclusion be evaluated?',
    options: [
      { id: 'opt-a', text: 'It is logically valid in structure, but unsound because its first premise is factually false', explanation: 'The deductive structure (All A are B; C is A; therefore C is B) is valid, but the premise that all flying creatures are insects is empirically untrue, making the conclusion unsound.' },
      { id: 'opt-b', text: 'It is 100% true and scientifically sound', explanation: 'Eagles are birds/vertebrates, not insects.' },
      { id: 'opt-c', text: 'It is an invalid inductive generalization', explanation: 'It is a deductive categorical syllogism, not an inductive generalization.' },
      { id: 'opt-d', text: 'It is an Ad Hominem fallacy against eagles', explanation: 'No character attack was made.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'An argument can be structurally valid (the conclusion follows necessarily from the premises) while remaining unsound because one or more premises are factually false in reality.'
  },
  {
    id: 'u10-p-10',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Synthesizing Local, National, and Global Implications',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Reconstruction', 'Delivery'],
    sourceRef: {
      unitNumber: 10,
      section: '10.4',
      pageRange: '160-164',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.4, pp. 160–164',
    scenario: 'A student conducts an inquiry into mangrove deforestation in a coastal regency in Riau, Indonesia.',
    question: 'How should the final concluding section integrate the implications across Local, National, and Global scales?',
    options: [
      { id: 'opt-a', text: 'Discuss only the local fish catch and ignore the rest of the world completely', explanation: 'Fails to connect local findings to national or global perspectives.' },
      { id: 'opt-b', text: 'Explain how local coastal erosion harms Riau fishermen (Local), connects to national carbon emission targets and forestry laws in Jakarta (National), and contributes to global ocean biodiversity loss and international climate agreements (Global)', explanation: 'A hallmark Cambridge Global Perspectives conclusion traces connections across personal/local, national policy, and global systemic levels.' },
      { id: 'opt-c', text: 'Claim that mangroves grow on every continent including Antarctica', explanation: 'Factually inaccurate botany.' },
      { id: 'opt-d', text: 'Recommend that all fishermen move to large inland cities', explanation: 'Impractical and ignores cultural and economic realities.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Exemplary Global Perspectives conclusions bridge scales: showing how local field observations (Riau mangrove loss) resonate with national policy debates and global environmental governance frameworks.'
  }
];
