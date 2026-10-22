/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 9 PRACTICE QUESTION BANK: CLAIMS
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 131–146)
 *
 * Grounding:
 * - Section 9.1: Categorizing Claims: Fact, Value, and Policy (pp. 131–134)
 * - Section 9.2: Unmasking Hidden Assumptions & Implicit Warrants (pp. 135–138)
 * - Section 9.3: Confirmation Bias, Echo Chambers, and Epistemic Bubbles (pp. 139–142)
 * - Section 9.4: Evaluating Claim Strength & Qualification (pp. 143–146)
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

export const UNIT_9_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  {
    id: 'u9-p-01',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Claim Classification: Fact vs. Value vs. Policy',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 9,
      section: '9.1',
      pageRange: '131-133',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.1, pp. 131–133',
    question: 'Statement: "The Indonesian government should subsidize solar panel installation on all residential rooftops by 2028." What type of claim is this?',
    options: [
      { id: 'opt-a', text: 'A claim of fact', explanation: 'A claim of fact asserts that something is empirically true or false, not what actions should be taken.' },
      { id: 'opt-b', text: 'A claim of policy (proposing that a specific action, rule, or course of action should be adopted)', explanation: 'Claims of policy advocate specific normative actions or institutional interventions, typically utilizing modal verbs like "should" or "must".' },
      { id: 'opt-c', text: 'A claim of definition', explanation: 'It does not define the terminology of solar panels.' },
      { id: 'opt-d', text: 'A mathematical theorem', explanation: 'It is a governmental policy proposal, not a mathematical equation.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Claims of policy argue for specific changes in behavior, regulations, or societal laws. They are recognized by action-oriented phrases such as "should", "must", or "ought to".'
  },
  {
    id: 'u9-p-02',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Claim Classification: Claim of Value',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 9,
      section: '9.1',
      pageRange: '132-134',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.1, pp. 132–134',
    question: 'Which of the following statements represents a Claim of Value?',
    options: [
      { id: 'opt-a', text: 'Jakarta is the designated host of the 1962 Asian Games', explanation: 'This is an empirically verifiable historical fact.' },
      { id: 'opt-b', text: 'Traditional Javanese batik is culturally superior and aesthetically more beautiful than mass-produced synthetic fabric', explanation: 'This asserts a qualitative judgment based on aesthetics, cultural morality, and personal/group values ("superior", "more beautiful").' },
      { id: 'opt-c', text: 'Water freezes at zero degrees Celsius at standard atmospheric pressure', explanation: 'This is a physical scientific fact.' },
      { id: 'opt-d', text: 'Schools must ban single-use plastic bottles next semester', explanation: 'This is a policy claim proposing a ban.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Claims of value make moral, aesthetic, or philosophical judgments evaluating what is good, bad, beautiful, ugly, just, or unjust according to subjective or ethical standards.'
  },
  {
    id: 'u9-p-03',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Unmasking Hidden Assumptions',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 9,
      section: '9.2',
      pageRange: '135-137',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.2, pp. 135–137',
    misconceptionId: 'misc-unstated-is-unimportant',
    misconceptionAlert: 'An argument’s most vulnerable point is often its unstated assumption—what the author takes for granted without providing proof.',
    scenario: 'Argument: "We must replace all printed library books with tablets because young people spend four hours every day using electronic screens."',
    question: 'What implicit assumption underlies this argument?',
    options: [
      { id: 'opt-a', text: 'Young people only read books on weekends', explanation: 'Not implied by the argument.' },
      { id: 'opt-b', text: 'Because teenagers spend screen time on social media and gaming, they will naturally use those same electronic devices for academic reading with equal enthusiasm and focus', explanation: 'The argument assumes that screen affinity automatically translates into productive academic reading behavior without testing that link.' },
      { id: 'opt-c', text: 'Tablets are made with lithium batteries', explanation: 'A technical physical fact, not an unstated cognitive premise.' },
      { id: 'opt-d', text: 'Libraries were first constructed in ancient Alexandria', explanation: 'Irrelevant historical trivia.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Unmasking hidden assumptions involves identifying what the speaker takes for granted without stating it. Here, the speaker assumes that screen recreational time translates seamlessly into rigorous digital study habits.'
  },
  {
    id: 'u9-p-04',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Echo Chambers vs. Epistemic Bubbles',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 9,
      section: '9.3',
      pageRange: '139-141',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.3, pp. 139–141',
    scenario: 'A student follows only political commentary accounts that mirror their exact opinions. When friends share a report from a neutral university study reaching an opposing conclusion, the student immediately dismisses the university researchers as "corrupt traitors whose opinions are evil."',
    question: 'Why is this behavior characteristic of an "Echo Chamber" rather than a mere information bubble?',
    options: [
      { id: 'opt-a', text: 'Because the student used a smartphone instead of a laptop', explanation: 'Hardware device has no relation to sociological information dynamics.' },
      { id: 'opt-b', text: 'In an echo chamber, outside voices are not merely absent; they are actively discredited, demonized, and pre-emptively distrusted to insulate the group’s dogma from all critique', explanation: 'Epistemic bubbles are accidental informational gaps, whereas echo chambers actively enforce systematic distrust toward all external perspectives.' },
      { id: 'opt-c', text: 'Because echo chambers only exist in sound recording studios', explanation: 'A literal confusion with acoustics; this refers to the sociological concept.' },
      { id: 'opt-d', text: 'Because university researchers are forbidden from writing political reports', explanation: 'Universities routinely conduct legitimate policy and political science inquiry.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'An echo chamber actively immunizes its members against outside evidence by training them to systematically distrust and discredit external experts, unlike a simple bubble where outside views are merely omitted.'
  },
  {
    id: 'u9-p-05',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Claim Qualification & Nuance',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 9,
      section: '9.4',
      pageRange: '143-145',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.4, pp. 143–145',
    question: 'Compare Claim 1: "Video games always cause violent criminal behavior in every player." with Claim 2: "Excessive exposure to violent video games without parental guidance may contribute to aggressive ideation in some susceptible adolescents under specific conditions." Why is Claim 2 academically stronger?',
    options: [
      { id: 'opt-a', text: 'Because Claim 2 uses modal qualifiers ("may contribute", "in some", "under specific conditions") that match the measured, probabilistic nature of social science findings', explanation: 'Academic rigor favors nuanced qualifiers over sweeping, unsupportable absolutist generalizations.' },
      { id: 'opt-b', text: 'Because Claim 1 is too short and needs to be longer', explanation: 'Claim length does not determine validity.' },
      { id: 'opt-c', text: 'Because Claim 2 proves that video games are completely harmless', explanation: 'Claim 2 acknowledges potential risks rather than claiming total harmlessness.' },
      { id: 'opt-d', text: 'Because Claim 1 was banned by the United Nations', explanation: 'False statement.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Academic claims gain strength through careful qualification. Absolutist words like "always" or "every" are easily falsified by single counter-examples, whereas probabilistic qualifiers reflect real-world evidentiary limits.'
  },
  {
    id: 'u9-p-06',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Identifying Algorithmic Bias in Claim Amplification',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 9,
      section: '9.3',
      pageRange: '141-143',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.3, pp. 141–143',
    question: 'How do recommendation algorithms on modern social media platforms influence the types of claims users encounter in their feeds?',
    options: [
      { id: 'opt-a', text: 'They systematically balance every video with an opposing peer-reviewed philosophy lecture', explanation: 'Commercial algorithms prioritize user engagement, not philosophical balance.' },
      { id: 'opt-b', text: 'They optimize for engagement (clicks, watch time, outrage), which tends to amplify sensational, polarizing, and extreme claims over measured academic consensus', explanation: 'Engagement-driven algorithms reward high-arousal emotional content, driving users toward ideological extremes.' },
      { id: 'opt-c', text: 'They turn off automatically after 15 minutes of reading', explanation: 'Social media platforms are designed to maximize session length.' },
      { id: 'opt-d', text: 'They eliminate all human bias completely using mathematical purity', explanation: 'Algorithms reflect and amplify the biases inherent in user behavior and commercial engagement metrics.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Social media recommendation algorithms optimize for watch time and interactions, disproportionately amplifying provocative, sensational, and controversial claims over balanced facts.'
  },
  {
    id: 'u9-p-07',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Unmasking Normative vs. Descriptive Claims',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 9,
      section: '9.1',
      pageRange: '133-135',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.1, pp. 133–135',
    question: 'What is the fundamental distinction between a "descriptive" claim and a "normative" claim?',
    options: [
      { id: 'opt-a', text: 'Descriptive claims are written in blue ink; normative claims are written in red ink', explanation: 'Arbitrary coloring.' },
      { id: 'opt-b', text: 'A descriptive claim describes how the world actually is (empirical reality), while a normative claim prescribes how the world should or ought to be (moral or ethical judgment)', explanation: 'Descriptive statements report observations and facts; normative statements evaluate morals, duties, and ideals.' },
      { id: 'opt-c', text: 'Descriptive claims are always false; normative claims are always true', explanation: 'Both can be well-grounded or poorly justified depending on evidence.' },
      { id: 'opt-d', text: 'Only governments can make descriptive claims', explanation: 'Anyone can state descriptive observations.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Descriptive claims state what is empirically observed in the world ("Is"), whereas normative claims evaluate what is desirable, moral, or obligated ("Ought").'
  },
  {
    id: 'u9-p-08',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Strategies for Breaking Echo Chambers',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Collaboration', 'Reconstruction'],
    sourceRef: {
      unitNumber: 9,
      section: '9.3',
      pageRange: '141-143',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.3, pp. 141–143',
    question: 'Which of the following research practices is most effective for an individual seeking to break out of an online echo chamber?',
    options: [
      { id: 'opt-a', text: 'Blocking anyone who presents a viewpoint different from their family’s tradition', explanation: 'Reinforces the echo chamber rather than breaking it.' },
      { id: 'opt-b', text: 'Actively seeking out high-credibility sources representing rival viewpoints, practicing intellectual empathy, and testing one’s own beliefs against strong counter-arguments', explanation: 'Actively engaging credible opposing perspectives breaks insulated bubbles and sharpens critical evaluation.' },
      { id: 'opt-c', text: 'Only reading social media comments posted after 1:00 AM', explanation: 'Late-night browsing does not increase informational diversity.' },
      { id: 'opt-d', text: 'Assuming that all claims on the internet are completely true', explanation: 'Uncritical gullibility amplifies disinformation vulnerability.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Overcoming echo chambers requires deliberate epistemic diversity: reading credible opposing arguments in good faith and stress-testing our own assumptions against robust counter-evidence.'
  },
  {
    id: 'u9-p-09',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Evaluating Scope and Overgeneralization in Claims',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 9,
      section: '9.4',
      pageRange: '144-146',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.4, pp. 144–146',
    scenario: 'A researcher surveys 25 male private school students in South Jakarta and headlines their final report: "Indonesian Youth Unanimously Reject Traditional Arts in Favor of K-Pop."',
    question: 'What is the fatal flaw in the scope of this claim?',
    options: [
      { id: 'opt-a', text: 'K-Pop music originated in South Korea', explanation: 'Cultural origin does not address research scope flaws.' },
      { id: 'opt-b', text: 'Severe overgeneralization: a tiny, unrepresentative, gender-biased sample from one wealthy urban district cannot support a definitive universal claim about millions of diverse youth across all Indonesian provinces', explanation: 'The sample size and demographic homogeneity cannot justify claims regarding the national population.' },
      { id: 'opt-c', text: 'The researcher should have surveyed traditional dancers only', explanation: 'Surveying only dancers would introduce a different bias.' },
      { id: 'opt-d', text: 'The headline did not mention the survey software used', explanation: 'Software disclosure does not fix an unrepresentative sample scope.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Extrapolating from a narrow, privileged sample of 25 individuals to generalize about an entire nation’s youth is a classic overgeneralization fallacy.'
  },
  {
    id: 'u9-p-10',
    unitNumber: 9,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Constructing Policy Claims with Balanced Trade-offs',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Reconstruction', 'Delivery'],
    sourceRef: {
      unitNumber: 9,
      section: '9.1',
      pageRange: '133-135',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 9.1, pp. 133–135',
    question: 'When proposing a policy claim in a Cambridge Global Perspectives capstone presentation, why must the author explicitly address economic, social, or environmental trade-offs?',
    options: [
      { id: 'opt-a', text: 'To prove that the policy will cost zero money and make everyone rich', explanation: 'Utopian promises lack realism and credibility.' },
      { id: 'opt-b', text: 'Because all real-world policy decisions involve resource constraints, opportunity costs, and competing interests; acknowledging trade-offs demonstrates realistic, mature problem-solving', explanation: 'Real-world governance requires balancing competing benefits against costs; mature policy proposals plan for unavoidable trade-offs.' },
      { id: 'opt-c', text: 'To make the presentation last exactly 60 minutes', explanation: 'Timing requirements do not justify substantive policy logic.' },
      { id: 'opt-d', text: 'Because Cambridge regulations require students to oppose all government initiatives', explanation: 'Cambridge requires critical analysis, not reflexive opposition.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Rigorous policy claims recognize that every solution entails opportunity costs and trade-offs. Formulating viable policy requires balancing benefits against inevitable constraints.'
  }
];
