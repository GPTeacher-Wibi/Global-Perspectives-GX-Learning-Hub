/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 6 PRACTICE QUESTION BANK: QUESTIONING
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 84–98)
 *
 * Grounding:
 * - Section 6.1: The Anatomy of an Academic Inquiry Question (pp. 84–87)
 * - Section 6.2: Neutrality vs. Leading/Biased Wording (pp. 88–91)
 * - Section 6.3: Open-Ended vs. Closed-Ended Question Architecture (pp. 92–95)
 * - Section 6.4: Designing Rigorous Questionnaires and Interview Protocols (pp. 96–98)
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

export const UNIT_6_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  {
    id: 'u6-p-01',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Anatomy of an Academic Research Question',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 6,
      section: '6.1',
      pageRange: '84-86',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.1, pp. 84–86',
    misconceptionId: 'misc-yes-no-is-research-question',
    misconceptionAlert: 'A simple yes/no question is not an academic research question; high-level inquiry requires debate, evidence, and critical evaluation.',
    question: 'Which of the following is formulated as an effective, open-ended academic research question suitable for Cambridge Global Perspectives?',
    options: [
      { id: 'opt-a', text: 'Is solar energy good?', explanation: 'Too simplistic; can be answered with a simplistic yes/no opinion without analytical depth.' },
      { id: 'opt-b', text: 'How do municipal feed-in tariffs influence household renewable energy adoption in suburban Bandung?', explanation: 'Clear, balanced, analytical, establishes variables (feed-in tariffs vs adoption), target population, and geographic scope.' },
      { id: 'opt-c', text: 'When was the first solar panel invented in history?', explanation: 'A closed factual lookup question, not an evaluative research inquiry.' },
      { id: 'opt-d', text: 'Why is traditional coal energy the greatest evil in human history?', explanation: 'Heavily biased, emotionally loaded, and violates scholarly neutrality.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'A strong research question is open-ended, analytical, neutral, and examines how specific variables or perspectives interact within a defined context.'
  },
  {
    id: 'u6-p-02',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Leading vs. Neutral Questions',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 6,
      section: '6.2',
      pageRange: '88-90',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.2, pp. 88–90',
    misconceptionId: 'misc-leading-question',
    misconceptionAlert: 'Leading questions push the respondent toward a desired answer, contaminating survey data with researcher bias.',
    question: 'Consider this survey item: "Don’t you agree that homework causes severe mental depression in hardworking teenagers?" What is the primary methodological defect?',
    options: [
      { id: 'opt-a', text: 'It is a leading question that subtly coerces the respondent toward agreement and uses emotionally loaded language', explanation: 'Phrasing like "Don\'t you agree..." and "hardworking teenagers" primes the respondent and biases results.' },
      { id: 'opt-b', text: 'It is too short to be understood by Grade 10 students', explanation: 'The length is fine; the fatal flaw is lack of neutrality.' },
      { id: 'opt-c', text: 'It should have been written in Latin instead of English', explanation: 'Survey language should match the target audience.' },
      { id: 'opt-d', text: 'It contains too many numbers and formulas', explanation: 'There are no numbers in the question.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'A leading question uses loaded adjectives or leading sentence stems ("Don\'t you agree...") that signal the expected response, invalidating research data.'
  },
  {
    id: 'u6-p-03',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Re-framing Questions for Neutrality',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 6,
      section: '6.2',
      pageRange: '89-91',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.2, pp. 89–91',
    scenario: 'A student researcher writes: "Why is the school administration’s unjust ban on cell phones ruining our social development?"',
    question: 'How can this question be re-crafted into an objective, neutral inquiry question?',
    options: [
      { id: 'opt-a', text: 'Why are school principals always angry at teenagers?', explanation: 'Still emotionally loaded and pejorative.' },
      { id: 'opt-b', text: 'To what extent do campus mobile device restrictions impact students’ academic focus and peer interactions?', explanation: 'Neutral, balanced ("to what extent"), balances academic focus with peer interactions, and avoids derogatory labels.' },
      { id: 'opt-c', text: 'Do students like their phones? (Yes / No)', explanation: 'Oversimplified and loses all analytical nuance.' },
      { id: 'opt-d', text: 'Should teachers be allowed to take students’ expensive electronics by force?', explanation: 'Contains provocative and biased framing.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Using balanced stems like "To what extent..." removes loaded terms ("unjust", "ruining") and allows empirical investigation of both positive and negative effects.'
  },
  {
    id: 'u6-p-04',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Closed vs. Open-Ended Architecture',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 6,
      section: '6.3',
      pageRange: '92-94',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.3, pp. 92–94',
    question: 'A researcher needs to collect quantitative demographic data across 400 survey respondents to compare percentages across grade levels. Which question format is best suited for this task?',
    options: [
      { id: 'opt-a', text: 'A closed-ended multiple-choice question with mutually exclusive grade brackets (e.g., Grade 9, Grade 10, Grade 11, Grade 12)', explanation: 'Closed-ended categorical options produce clean, easily tabulated quantitative percentages.' },
      { id: 'opt-b', text: 'A 500-word blank text box asking students to write essays about growing older', explanation: 'Creates massive coding overhead for simple demographic categorization.' },
      { id: 'opt-c', text: 'An audio voice recording of students reciting their birthday memories', explanation: 'Unnecessary and unquantifiable for basic grade-level demographic counting.' },
      { id: 'opt-d', text: 'A rhetorical question that requires no answer', explanation: 'Rhetorical questions collect no data.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Closed-ended questions with mutually exclusive categories are ideal for large-scale demographic data that must be aggregated into quantitative tables.'
  },
  {
    id: 'u6-p-05',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Double-Barreled Questions',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 6,
      section: '6.4',
      pageRange: '96-97',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.4, pp. 96–97',
    misconceptionId: 'misc-double-barreled-question',
    misconceptionAlert: 'Asking about two separate issues in a single question makes it impossible to know which issue the respondent agreed or disagreed with.',
    scenario: 'Survey Item: "Do you support reducing plastic packaging in school canteens and lengthening lunchtime by 20 minutes? [Agree / Disagree]"',
    question: 'What serious questionnaire design error does this item commit?',
    options: [
      { id: 'opt-a', text: 'It is a double-barreled question combining two separate issues (plastic reduction and lunch duration) into one answer', explanation: 'A student who supports plastic reduction but opposes longer lunch cannot answer accurately.' },
      { id: 'opt-b', text: 'It asks about food, which is irrelevant to high school life', explanation: 'Canteen food and waste management are valid campus research topics.' },
      { id: 'opt-c', text: 'It should only be answered by lunch vendors, never students', explanation: 'Student consumers are key stakeholders.' },
      { id: 'opt-d', text: 'It uses more than ten words', explanation: 'The flaw is conceptual bundling, not word count.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'A double-barreled question merges two distinct issues into a single prompt. If a respondent answers "Agree", researchers cannot determine which of the two proposals they supported.'
  },
  {
    id: 'u6-p-06',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Likert Scale Design & Neutral Midpoints',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 6,
      section: '6.4',
      pageRange: '97-98',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.4, pp. 97–98',
    question: 'When measuring public attitudes toward a new toll road, why do professional researchers often utilize a 5-point Likert scale (Strongly Disagree, Disagree, Neutral/Undecided, Agree, Strongly Agree)?',
    options: [
      { id: 'opt-a', text: 'Because odd numbers are lucky in mathematical analysis', explanation: 'Superstition plays no role in psychometric scale design.' },
      { id: 'opt-b', text: 'It captures gradations of intensity and sentiment while providing a legitimate neutral option for participants without strong opinions', explanation: 'Likert scales capture nuance and degree of commitment rather than forcing an artificial binary choice.' },
      { id: 'opt-c', text: 'Because 5-point scales eliminate the need to calculate percentages', explanation: 'Percentages and means are still calculated from Likert scale responses.' },
      { id: 'opt-d', text: 'It prevents respondents from thinking for themselves', explanation: 'Likert scales encourage respondents to calibrate their exact level of agreement.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'A 5-point Likert scale measures degrees of agreement or disagreement, allowing nuanced sentiment capture while accommodating neutral or undecided respondents.'
  },
  {
    id: 'u6-p-07',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Probing in Semi-Structured Interviews',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Collaboration', 'Delivery'],
    sourceRef: {
      unitNumber: 6,
      section: '6.3',
      pageRange: '94-96',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.3, pp. 94–96',
    scenario: 'During an interview, a local shopkeeper mentions: "Online delivery apps changed everything for our family business last year."',
    question: 'Which follow-up probe by the interviewer exemplifies effective semi-structured qualitative interviewing?',
    options: [
      { id: 'opt-a', text: 'Good. Let’s immediately jump to Question 8 on my paper about parking lots.', explanation: 'Abruptly ignoring the respondent’s rich insight fails to capture deeper qualitative evidence.' },
      { id: 'opt-b', text: 'Could you elaborate on how those delivery apps changed your daily sales and customer relationships?', explanation: 'A neutral, open-ended probe inviting concrete elaboration on a critical emergent insight.' },
      { id: 'opt-c', text: 'Don’t you agree delivery apps are destroying small Indonesian shops?', explanation: 'Biased, leading, and puts words into the respondent\'s mouth.' },
      { id: 'opt-d', text: 'Please answer with only "Yes" or "No".', explanation: 'Forces an artificial binary on an open qualitative narrative.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'In semi-structured interviews, thoughtful probes ("Could you tell me more about...", "How did that impact...") invite interviewees to elaborate on meaningful details without biasing their responses.'
  },
  {
    id: 'u6-p-08',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'The "So What?" Test in Question Scoping',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 6,
      section: '6.1',
      pageRange: '86-88',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.1, pp. 86–88',
    question: 'When Cambridge examiners apply the "So What?" test to evaluate a student’s proposed Global Perspectives research question, what are they judging?',
    options: [
      { id: 'opt-a', text: 'Whether the question is written in cursive handwriting', explanation: 'Handwriting style is irrelevant to conceptual significance.' },
      { id: 'opt-b', text: 'The academic and real-world significance: whether answering the question matters for understanding human choices, policies, or community outcomes', explanation: 'The "So What?" test checks whether the research addresses a consequential issue with broader significance rather than trivial curiosity.' },
      { id: 'opt-c', text: 'Whether the question can be resolved in under 30 seconds on Wikipedia', explanation: 'Questions easily answered in 30 seconds fail the test of academic depth.' },
      { id: 'opt-d', text: 'How many complex polysyllabic vocabulary words the student can cram into the title', explanation: 'Pretentious vocabulary does not create genuine academic importance.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'The "So What?" test assesses academic significance—confirming that investigating the question generates meaningful insights for communities, policymakers, or scholars.'
  },
  {
    id: 'u6-p-09',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Evaluating Question Boundaries (Feasible Scope)',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 6,
      section: '6.1',
      pageRange: '85-87',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.1, pp. 85–87',
    question: 'Compare Question X: "Can world peace ever be achieved in human civilization?" with Question Y: "How do community peace-building workshops impact inter-religious trust among high school students in Ambon?" Why is Question Y superior for a Grade 10 research project?',
    options: [
      { id: 'opt-a', text: 'Question X is better because world peace affects more humans', explanation: 'Scope must be realistically investigable; Question X is vast, unmanageable, and speculative.' },
      { id: 'opt-b', text: 'Question Y is empirically investigable with defined participants, tangible interventions, and a specific local context, whereas Question X is unmanageably abstract', explanation: 'Academic inquiry requires clear boundaries, measurable indicators, and accessible primary/secondary data sources.' },
      { id: 'opt-c', text: 'Question Y can be answered without collecting any evidence at all', explanation: 'All academic research questions require rigorous evidence.' },
      { id: 'opt-d', text: 'Question X uses the word "peace" which is forbidden by Cambridge rules', explanation: 'Peace is a prominent Cambridge topic; the flaw is purely methodological scoping.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Question Y defines a specific intervention, target demographic, and location, making it empirically researchable within a student timeframe.'
  },
  {
    id: 'u6-p-10',
    unitNumber: 6,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Ethical Sensitivity in Interview Questioning',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Collaboration', 'Delivery'],
    sourceRef: {
      unitNumber: 6,
      section: '6.4',
      pageRange: '97-98',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 6.4, pp. 97–98',
    scenario: 'A student researcher is interviewing flood survivors who recently lost their family homes. The student prepares a questionnaire containing deeply intrusive questions about personal financial debt and grief.',
    question: 'What ethical standard must the interviewer uphold when administering sensitive interview questions?',
    options: [
      { id: 'opt-a', text: 'Insist that participants answer every question or face school penalties', explanation: 'Coercion is an egregious ethical violation in research.' },
      { id: 'opt-b', text: 'Explicitly remind participants that their participation is voluntary, they may skip any distressing questions, and they may terminate the interview at any moment without penalty', explanation: 'Respect for participant autonomy and psychological safety requires voluntary consent and the right to withdraw at will.' },
      { id: 'opt-c', text: 'Sell the recorded interview tapes to regional commercial news channels', explanation: 'Exploiting vulnerable subjects for profit is unethical and illegal.' },
      { id: 'opt-d', text: 'Laugh at their answers to lighten the mood', explanation: 'Disrespectful and causes additional distress.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Ethical interviewers must safeguard participant well-being by reiterating the right to pass on sensitive questions or withdraw entirely at any time without adverse consequences.'
  }
];
