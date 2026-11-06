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
      {
        id: 'opt-a',
        text: 'Deductive reasoning derives probable theories from observed empirical evidence, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'Abductive reasoning tests established scientific premises through controlled trials.'
      },
      {
        id: 'opt-c',
        text: 'Deductive reasoning begins with general premises to reach a logically certain conclusion.'
      },
      {
        id: 'opt-d',
        text: 'Inductive reasoning guarantees that conclusions must be true if premises are valid.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'Inductive generalizations offer probabilistic likelihood rather than absolute logical certainty.'
      },
      {
        id: 'opt-b',
        text: 'A single empirical counterexample confirms that the original generalization was universally correct.'
      },
      {
        id: 'opt-c',
        text: 'Inductive conclusions must be rejected as unscientific unless verified across all world continents.'
      },
      {
        id: 'opt-d',
        text: 'Observing fifty consistent cases mathematically proves that zero exceptions can ever exist in nature.'
      }
    ],
    correctAnswer: 'opt-a',
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
      {
        id: 'opt-a',
        text: 'Formulating a definitive deductive proof based on established mathematical geometry, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'Conducting an exhaustive quantitative survey across all thirty-eight provincial capitals.'
      },
      {
        id: 'opt-c',
        text: 'Rejecting all scientific explanations until a controlled laboratory trial is performed.'
      },
      {
        id: 'opt-d',
        text: 'Abductive reasoning (inference to the most plausible explanation based on available clues).'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Qualifiers should be excluded from academic writing to make policy claims appear strong and decisive, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-b',
        text: 'Qualifiers specify conditions, scope, and probability, preventing reckless overgeneralization in claims.'
      },
      {
        id: 'opt-c',
        text: 'Using qualifiers indicates that the researcher lacks confidence and has gathered insufficient evidence.'
      },
      {
        id: 'opt-d',
        text: 'Qualifiers are only permitted in informal debates, whereas formal essays require absolute statements.'
      }
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
      {
        id: 'opt-a',
        text: 'The Warrant (the underlying reasoning that connects the grounds to the claim).'
      },
      {
        id: 'opt-b',
        text: 'The Backing (empirical statistical documentation verifying the primary evidence).'
      },
      {
        id: 'opt-c',
        text: 'The Rebuttal (acknowledging specific conditions where the claim does not apply).'
      },
      {
        id: 'opt-d',
        text: 'The Qualifier (words like "probably" or "in most cases" limiting claim scope).'
      }
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
      {
        id: 'opt-a',
        text: 'Ad Hominem fallacy, attacking the opposing debater’s personal lifestyle habits, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-b',
        text: 'Slippery Slope fallacy, claiming one step leads to an inevitable extreme disaster.'
      },
      {
        id: 'opt-c',
        text: 'Straw Man fallacy (misrepresenting the opponent’s argument to make it easier to attack).'
      },
      {
        id: 'opt-d',
        text: 'Appeal to Ignorance fallacy, arguing lack of evidence proves something is true.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'It presents verified statistical evidence showing a direct causal connection between both events.'
      },
      {
        id: 'opt-b',
        text: 'False Cause (Post Hoc Ergo Propter Hoc), assuming that because B followed A, A caused B to occur.'
      },
      {
        id: 'opt-c',
        text: 'False Dilemma, restricting a complex multi-factor situation into only two mutually exclusive choices.'
      },
      {
        id: 'opt-d',
        text: 'Appeal to Authority, relying on quotes from famous celebrities who lack expertise in the subject.'
      }
    ],
    correctAnswer: 'opt-b',
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
      {
        id: 'opt-a',
        text: 'Circular Reasoning, repeating the claim as its own justification without adding any evidence, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-b',
        text: 'Hasty Generalization, drawing a sweeping conclusion from an unrepresentative single case.'
      },
      {
        id: 'opt-c',
        text: 'Red Herring, introducing an irrelevant topic to divert attention from the core issue debated.'
      },
      {
        id: 'opt-d',
        text: 'Ad Hominem (attacking the researcher’s character rather than evaluating their factual evidence).'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Framing complex policy debates into binary extremes encourages voters to compromise on middle options, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'It presents a False Dilemma, artificially ignoring viable middle solutions like hybrid energy transitions.'
      },
      {
        id: 'opt-c',
        text: 'Binary arguments are required by parliamentary debate rules to ensure clear legislative voting choices.'
      },
      {
        id: 'opt-d',
        text: 'It represents sound deductive logic because economic growth and environmental protection never co-exist.'
      }
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
      {
        id: 'opt-a',
        text: 'Include valid empirical evidence, sound logical connections, clear qualifiers, and address counterarguments.'
      },
      {
        id: 'opt-b',
        text: 'Use passionate rhetorical language, repeat assertions frequently, and dismiss all dissenting viewpoints, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-c',
        text: 'Rely exclusively on famous celebrity endorsements while avoiding complex statistical data tables.'
      },
      {
        id: 'opt-d',
        text: 'Present arguments as absolute universal truths that permit zero exceptions, caveats, or limitations.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Abductive reasoning (inference to the best explanation) evaluates incomplete sets of clues or symptoms to determine the most probable, coherent hypothesis that explains the evidence.'
  }
];
