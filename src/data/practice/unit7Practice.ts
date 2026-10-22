/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 7 PRACTICE QUESTION BANK: REASONING
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 99–114)
 *
 * Grounding:
 * - Section 7.1: The Architecture of an Argument (Premises & Conclusions) (pp. 99–102)
 * - Section 7.2: The Toulmin Argumentation Model (pp. 103–106)
 * - Section 7.3: Deductive, Inductive, and Abductive Reasoning (pp. 107–110)
 * - Section 7.4: Common Logical Fallacies (pp. 111–114)
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

export const UNIT_7_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  {
    id: 'u7-p-01',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Anatomy of an Argument: Premises vs. Conclusions',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 7,
      section: '7.1',
      pageRange: '99-101',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.1, pp. 99–101',
    misconceptionId: 'misc-assertion-is-argument',
    misconceptionAlert: 'A bare opinion or assertion is not an argument; an argument requires reasons or premises that structurally support a conclusion.',
    question: 'In formal logic and Global Perspectives, what transforms a simple assertion into a valid academic argument?',
    options: [
      { id: 'opt-a', text: 'Shouting the assertion loudly with exclamation marks', explanation: 'Volume and emotion do not constitute logical structure.' },
      { id: 'opt-b', text: 'Supporting the claim with explicit premises (reasons and evidence) that logically lead to the conclusion', explanation: 'An argument consists of premises offering rationale and evidence that warrant the central conclusion.' },
      { id: 'opt-c', text: 'Translating the sentence into three foreign languages', explanation: 'Translation does not alter internal logical validity.' },
      { id: 'opt-d', text: 'Making sure that nobody in the room disagrees with it', explanation: 'Social agreement does not determine whether an argument has logical premises.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'An academic argument requires a claim supported by premises—reasons and verifiable evidence that provide rational grounds for accepting the conclusion.'
  },
  {
    id: 'u7-p-02',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Toulmin Model: The Warrant',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 7,
      section: '7.2',
      pageRange: '103-105',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.2, pp. 103–105',
    misconceptionId: 'misc-evidence-speaks-for-itself',
    misconceptionAlert: 'Evidence never speaks for itself; a warrant is necessary to explain the logical connection linking the data to the claim.',
    scenario: 'Claim: "The city council should build protected bike lanes along Sudirman Avenue." Evidence: "A municipal survey found that 68% of commuters fear traffic collisions when cycling to work."',
    question: 'In the Toulmin Argumentation Model, which statement functions as the unstated "Warrant" connecting the evidence to the claim?',
    options: [
      { id: 'opt-a', text: 'Sudirman Avenue is a famous street in Jakarta', explanation: 'This is an unrelated geographic fact, not a logical bridge.' },
      { id: 'opt-b', text: 'When fear of traffic collisions is the primary barrier preventing citizens from cycling, providing protected physical infrastructure increases commuter safety and cycling participation', explanation: 'The warrant articulates the underlying assumption/principle that bridges the evidence (fear of collisions) to the policy claim (build protected lanes).' },
      { id: 'opt-c', text: 'Bicycles have two rubber wheels and metal pedals', explanation: 'Irrelevant physical description.' },
      { id: 'opt-d', text: 'All cars should be confiscated by the police immediately', explanation: 'An extreme non-sequitur assertion.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'A warrant is the connective logical bridge in the Toulmin model that explains why the offered data/evidence genuinely justifies the author’s claim.'
  },
  {
    id: 'u7-p-03',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Deductive vs. Inductive Reasoning',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 7,
      section: '7.3',
      pageRange: '107-109',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.3, pp. 107–109',
    scenario: 'Premise 1: All mammals possess lungs to breathe air. Premise 2: A blue whale is a mammal. Conclusion: Therefore, a blue whale possesses lungs to breathe air.',
    question: 'Which mode of reasoning is exemplified by this syllogism?',
    options: [
      { id: 'opt-a', text: 'Deductive reasoning (where the conclusion is guaranteed to be true if the premises are true)', explanation: 'Deductive logic moves from universal rules to a specific case; if premises are true and the form is valid, the conclusion is necessarily certain.' },
      { id: 'opt-b', text: 'Inductive reasoning (generalizing a broad theory from a small sample)', explanation: 'Inductive logic moves from specific observations to probable generalizations; this syllogism starts with a universal premise.' },
      { id: 'opt-c', text: 'Abductive reasoning (inferring the most likely diagnosis)', explanation: 'Abductive logic infers the best explanation for surprising clues.' },
      { id: 'opt-d', text: 'Circular reasoning fallacy', explanation: 'The syllogism is logically valid, not fallacious.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Deductive reasoning starts from general principles and applies them to specific cases. If the premises are true, the conclusion is logically guaranteed.'
  },
  {
    id: 'u7-p-04',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Inductive Generalization and Probability',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 7,
      section: '7.3',
      pageRange: '108-110',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.3, pp. 108–110',
    scenario: 'A researcher tests water quality at 20 different sample points along the Brantas River and discovers elevated lead levels at all 20 locations. The researcher concludes: "The entire downstream Brantas river basin is likely contaminated with lead."',
    question: 'Why is this conclusion considered an inductive inference rather than a deductive certainty?',
    options: [
      { id: 'opt-a', text: 'Because lead is a heavy chemical element', explanation: 'Chemical properties do not dictate logical classification.' },
      { id: 'opt-b', text: 'Because it generalizes from a finite set of specific empirical observations to a broader probable pattern, which remains open to disconfirmation by unmeasured points', explanation: 'Inductive inferences derive probable broad conclusions from observed samples; they provide strength, not absolute mathematical certainty.' },
      { id: 'opt-c', text: 'Because the researcher used test tubes instead of microscopes', explanation: 'Apparatus choice does not determine logical inference types.' },
      { id: 'opt-d', text: 'Because inductive reasoning is illegal in environmental science', explanation: 'Inductive empirical reasoning is foundational to science.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Inductive reasoning gathers specific observations (20 sample points) to support a probable broader generalization. While highly credible, it is probabilistic rather than deductively certain.'
  },
  {
    id: 'u7-p-05',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Logical Fallacy: Ad Hominem',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 7,
      section: '7.4',
      pageRange: '111-112',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.4, pp. 111–112',
    scenario: 'During a debate on public healthcare subsidies, Speaker A says: "We should not listen to Dr. Rahma’s economic analysis because she drives an imported car and her haircut looks ridiculous."',
    question: 'Which logical fallacy has Speaker A committed?',
    options: [
      { id: 'opt-a', text: 'Ad Hominem (attacking the person instead of refuting the argument)', explanation: 'Speaker A attacks Dr. Rahma\'s personal possessions and hairstyle rather than engaging with her economic data.' },
      { id: 'opt-b', text: 'Straw Man (misrepresenting the opponent’s view to make it easier to attack)', explanation: 'Speaker A did not distort the argument; she attacked the speaker\'s character directly.' },
      { id: 'opt-c', text: 'False Dilemma (forcing two false extremes)', explanation: 'No either/or choice was presented.' },
      { id: 'opt-d', text: 'Post Hoc Ergo Propter Hoc', explanation: 'No causal chronological error was made.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'An Ad Hominem fallacy occurs when someone attacks the individual’s character, appearance, or background rather than evaluating the substantive evidence and logic of their argument.'
  },
  {
    id: 'u7-p-06',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Logical Fallacy: Straw Man',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 7,
      section: '7.4',
      pageRange: '112-113',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.4, pp. 112–113',
    scenario: 'Student X proposes: "Our school canteen should add fresh fruit options alongside fried snacks." Student Y responds: "Student X wants to starve everyone and make fried food illegal on our entire campus!"',
    question: 'How did Student Y commit the Straw Man fallacy?',
    options: [
      { id: 'opt-a', text: 'By calculating the arithmetic median of the snacks', explanation: 'No statistics were used.' },
      { id: 'opt-b', text: 'By distorting Student X’s moderate proposal into an exaggerated, radical extreme that is easier to mock and defeat', explanation: 'The Straw Man fallacy replaces an opponent\'s real argument with an absurd caricature to discredit it.' },
      { id: 'opt-c', text: 'By citing three peer-reviewed nutrition journals', explanation: 'Student Y cited no scholarly evidence.' },
      { id: 'opt-d', text: 'By politely agreeing with Student X’s suggestion', explanation: 'Student Y actively opposed the suggestion.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'A Straw Man fallacy misrepresents, exaggerates, or oversimplifies an opponent\'s original position to create a vulnerable target that is easy to knock down.'
  },
  {
    id: 'u7-p-07',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Logical Fallacy: False Dilemma (Either/Or)',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 7,
      section: '7.4',
      pageRange: '113-114',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.4, pp. 113–114',
    scenario: 'A commentator argues: "Either we ban all smartphones from Indonesian schools immediately, or our teenagers will fail all their exams and destroy our country’s future economy."',
    question: 'What makes this argument a False Dilemma fallacy?',
    options: [
      { id: 'opt-a', text: 'It ignores the broad spectrum of nuanced intermediate alternatives, such as supervised digital learning guidelines and balanced screen-time limits', explanation: 'A False Dilemma artificially restricts complex policy choices to two extreme opposites, pretending no middle ground exists.' },
      { id: 'opt-b', text: 'Smartphones are electronic devices made of plastic and glass', explanation: 'Physical composition is irrelevant to logical structure.' },
      { id: 'opt-c', text: 'It was spoken by an Indonesian citizen', explanation: 'Nationality has no bearing on logical fallacies.' },
      { id: 'opt-d', text: 'It contains an unstated deductive syllogism', explanation: 'The flaw is a forced binary fallacy, not a sound syllogism.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'A False Dilemma (or False Binary) falsely presents an issue as having only two stark, extreme choices, completely obscuring realistic hybrid solutions and nuanced alternatives.'
  },
  {
    id: 'u7-p-08',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Logical Fallacy: Slippery Slope',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 7,
      section: '7.4',
      pageRange: '113-114',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.4, pp. 113–114',
    scenario: 'An editorial claims: "If we permit students to choose their own classroom seats on Fridays, next week they will refuse to do homework, next month they will stop attending school, and within a year the entire educational system will collapse into total anarchy."',
    question: 'What logical flaw characterizes this Slippery Slope argument?',
    options: [
      { id: 'opt-a', text: 'It relies on a chain of catastrophic causal events without providing empirical evidence that each successive step is inevitable', explanation: 'Slippery Slope asserts a chain reaction toward catastrophe without justifying why step A must trigger steps B, C, and D.' },
      { id: 'opt-b', text: 'Friday is the fifth day of the week', explanation: 'Irrelevant calendar fact.' },
      { id: 'opt-c', text: 'It proves that classroom seating has no effect on comfort', explanation: 'The argument makes unwarranted claims of doom, not proof of comfort.' },
      { id: 'opt-d', text: 'It uses deductive modus ponens correctly', explanation: 'The reasoning is fallacious, not valid deduction.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'A Slippery Slope argument claims without supporting evidence that a modest first action will inevitably trigger a disastrous sequence of extreme consequences.'
  },
  {
    id: 'u7-p-09',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Toulmin: Rebuttal & Counter-claim Integration',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Reconstruction', 'Delivery'],
    sourceRef: {
      unitNumber: 7,
      section: '7.2',
      pageRange: '105-106',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.2, pp. 105–106',
    question: 'Why does introducing a counter-claim and structured rebuttal make a student’s Global Perspectives essay stronger rather than weaker?',
    options: [
      { id: 'opt-a', text: 'It confuses the examiner so they give higher marks by accident', explanation: 'Examiners award marks for analytical balance, not confusion.' },
      { id: 'opt-b', text: 'It demonstrates academic objectivity, acknowledges alternative perspectives, and provides reasoned justification for why the author’s stance remains superior despite valid counter-arguments', explanation: 'Acknowledging and rigorously refuting opposing viewpoints proves intellectual thoroughness and reinforces credibility.' },
      { id: 'opt-c', text: 'It shows that the student does not believe in their own thesis', explanation: 'Addressing counter-arguments strengthens, rather than diminishes, conviction.' },
      { id: 'opt-d', text: 'It fulfills a requirement to copy-paste Wikipedia paragraphs', explanation: 'Plagiarism is prohibited.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'High-level academic reasoning requires confronting counter-claims directly. A robust rebuttal shows that the author has weighed rival perspectives and can justify their stance against serious critique.'
  },
  {
    id: 'u7-p-10',
    unitNumber: 7,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Abductive Reasoning (Inference to the Best Explanation)',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 7,
      section: '7.3',
      pageRange: '109-111',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 7.3, pp. 109–111',
    scenario: 'A doctor observes a patient with high fever, rash, joint pain, and low platelet count after returning from a tropical area during rainy season. The doctor infers that dengue fever is the most plausible diagnosis.',
    question: 'What form of logical inference did the physician apply?',
    options: [
      { id: 'opt-a', text: 'Abductive reasoning (inferring the most likely explanation that accounts for all observed symptoms and contextual clues)', explanation: 'Abduction starts with observations and seeks the most plausible hypothesis among competing possibilities.' },
      { id: 'opt-b', text: 'A false cause fallacy', explanation: 'Clinical diagnostic abduction based on established pathology is valid clinical reasoning, not a fallacy.' },
      { id: 'opt-c', text: 'Pure deductive mathematical certainty', explanation: 'Medical diagnostics deal with probability and likelihood, not 100% deductive mathematical proofs.' },
      { id: 'opt-d', text: 'Random guessing with no evidence', explanation: 'The diagnosis is grounded in clinical clues and epidemiological context.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Abductive reasoning (inference to the best explanation) evaluates incomplete sets of clues or symptoms to determine the most probable, coherent hypothesis that explains the evidence.'
  }
];
