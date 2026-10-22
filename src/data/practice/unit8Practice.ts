/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 8 PRACTICE QUESTION BANK: EVIDENCE
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 115–130)
 *
 * Grounding:
 * - Section 8.1: The Nature & Hierarchy of Evidence (pp. 115–118)
 * - Section 8.2: Primary vs. Secondary Sources (pp. 119–122)
 * - Section 8.3: The CRAAP Test Framework (pp. 123–126)
 * - Section 8.4: SIFT Methodology & Lateral Reading (pp. 127–130)
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

export const UNIT_8_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  {
    id: 'u8-p-01',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Primary vs. Secondary Evidence',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 8,
      section: '8.2',
      pageRange: '119-121',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.2, pp. 119–121',
    misconceptionId: 'misc-primary-always-recent',
    misconceptionAlert: 'A primary source is not defined by when it was printed, but by its direct, first-hand relationship to the event under study.',
    question: 'Which of the following documents is classified as a primary historical source for studying the 1955 Asian-African Conference in Bandung?',
    options: [
      { id: 'opt-a', text: 'A 2024 high school history textbook chapter discussing the conference', explanation: 'A modern textbook is a secondary synthesis interpreting past events.' },
      { id: 'opt-b', text: 'The original official final communiqué signed by delegates at Gedung Merdeka in April 1955', explanation: 'An authentic first-hand document created directly at the time of the event by participants is a primary source.' },
      { id: 'opt-c', text: 'A 2018 YouTube documentary video reviewing the speeches', explanation: 'A documentary is a secondary compilation created decades later.' },
      { id: 'opt-d', text: 'A fictional novel written in 2020 about diplomats in Bandung', explanation: 'Historical fiction is an imaginative literary work, not primary documentary evidence.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Primary sources are original, first-hand artifacts, records, or eyewitness accounts produced during the period or event being researched.'
  },
  {
    id: 'u8-p-02',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'CRAAP Test: Purpose & Bias',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 8,
      section: '8.3',
      pageRange: '123-125',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.3, pp. 123–125',
    question: 'In the CRAAP evaluation framework (Currency, Relevance, Authority, Accuracy, Purpose), why is checking "Purpose" essential when reading an online article?',
    options: [
      { id: 'opt-a', text: 'To check if the author used correct grammar and punctuation', explanation: 'Grammar relates to formatting, not ideological motivation.' },
      { id: 'opt-b', text: 'To determine whether the text intends to inform objectively, persuade politically, sell a commercial product, or entertain', explanation: 'Understanding the underlying motivation reveals potential conflicts of interest, corporate sponsorship, or political agendas.' },
      { id: 'opt-c', text: 'To find out how many words the article contains', explanation: 'Word length is not evaluated by the Purpose criterion.' },
      { id: 'opt-d', text: 'To see if the article has colorful photographs', explanation: 'Visual appeal does not indicate authorial purpose.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Analyzing Purpose interrogates why the source was created—whether to impartially educate, advance a corporate agenda, campaign for votes, or sell merchandise.'
  },
  {
    id: 'u8-p-03',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'CRAAP Test: Currency in Rapidly Changing Fields',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 8,
      section: '8.3',
      pageRange: '123-124',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.3, pp. 123–124',
    scenario: 'A student researching current generative AI adoption in Indonesian classrooms cites a statistics report published in 2012.',
    question: 'Under the CRAAP criteria, why does this source fail the test of Currency?',
    options: [
      { id: 'opt-a', text: 'Because books written before 2020 are forbidden in all academic subjects', explanation: 'Foundational historical or philosophical texts from earlier eras remain highly valid in other contexts.' },
      { id: 'opt-b', text: 'Generative AI and large language models underwent revolutionary transformation after 2022; data from 2012 predates modern consumer AI tools and is technologically obsolete', explanation: 'In rapidly changing technical fields, timeliness is critical; 2012 data cannot describe modern LLM educational impacts.' },
      { id: 'opt-c', text: 'Because 2012 was a leap year', explanation: 'Irrelevant calendar fact.' },
      { id: 'opt-d', text: 'Because Indonesian schools did not exist in 2012', explanation: 'Factually incorrect.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'In fast-evolving technological and economic fields, currency is vital. A 2012 source predates modern generative AI tools and cannot provide accurate evidence on current classroom adoption.'
  },
  {
    id: 'u8-p-04',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'SIFT Method: Lateral Reading',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 8,
      section: '8.4',
      pageRange: '127-129',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.4, pp. 127–129',
    misconceptionId: 'misc-vertical-reading-trap',
    misconceptionAlert: 'Do not stay on an unknown website to judge its credibility; read laterally across external tabs to verify what independent experts say about it.',
    scenario: 'A student discovers a sleek website called "The Global Environmental Clean Energy Council" that claims burning coal is beneficial for rainforest growth. The website has a polished logo and professional layout.',
    question: 'How should the student apply the SIFT method’s "Lateral Reading" technique to verify this source?',
    options: [
      { id: 'opt-a', text: 'Carefully read the website’s own "About Us" page and assume it tells the complete truth', explanation: 'Disinformation sites frequently author deceptive self-congratulatory "About Us" pages.' },
      { id: 'opt-b', text: 'Open new browser tabs to search what independent science organizations, news outlets, and regulatory registries say about who finances this organization', explanation: 'Lateral reading investigates the source from the outside by consulting credible external entities.' },
      { id: 'opt-c', text: 'Check if the website uses dark mode or light mode', explanation: 'UI theme has no bearing on factual credibility.' },
      { id: 'opt-d', text: 'Forward the link to all social media contacts immediately', explanation: 'Amplifying unverified claims spreads potential disinformation.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Lateral reading involves opening adjacent tabs to investigate what trusted third parties, scholars, and watchdog groups report about an unfamiliar organization and its funding.'
  },
  {
    id: 'u8-p-05',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Hierarchy of Scientific Evidence',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 8,
      section: '8.1',
      pageRange: '116-118',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.1, pp. 116–118',
    question: 'In the academic hierarchy of evidence, which source type generally provides the highest degree of reliability regarding medical or health interventions?',
    options: [
      { id: 'opt-a', text: 'A viral video testimonial from an Instagram influencer', explanation: 'Celebrity endorsements are anecdotal and prone to commercial bias.' },
      { id: 'opt-b', text: 'A single opinion blog post written by an anonymous doctor', explanation: 'Unreviewed personal opinion ranks low in the evidence hierarchy.' },
      { id: 'opt-c', text: 'A systematic review and meta-analysis of randomized controlled trials published in a peer-reviewed journal', explanation: 'Systematic reviews aggregate and rigorously evaluate all high-quality trials on a topic, representing the highest evidentiary tier.' },
      { id: 'opt-d', text: 'A promotional brochure handed out at a shopping mall pharmacy', explanation: 'Promotional brochures are commercial advertising materials.' }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Systematic reviews and meta-analyses rank at the peak of the evidence pyramid because they synthesize findings across numerous randomized controlled studies, minimizing individual study bias.'
  },
  {
    id: 'u8-p-06',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Anecdotal Evidence vs. Empirical Evidence',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 8,
      section: '8.1',
      pageRange: '115-117',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.1, pp. 115–117',
    scenario: 'During a debate on public motorcycle helmet laws, a speaker claims: "Helmets are useless because my uncle crashed his bike without a helmet last month and walked away without a single scratch."',
    question: 'What is the methodological weakness of relying on this personal narrative as evidence?',
    options: [
      { id: 'opt-a', text: 'The uncle should have been riding a bicycle', explanation: 'Vehicle type does not address the evidentiary limitation.' },
      { id: 'opt-b', text: 'It is anecdotal evidence consisting of a single isolated survivor story, which cannot refute large-scale statistical evidence demonstrating that helmets prevent fatal head trauma in 80% of crashes', explanation: 'Anecdotes represent unrepresentative individual exceptions that cannot overturn statistical empirical consensus.' },
      { id: 'opt-c', text: 'The story was told in spoken Indonesian rather than English', explanation: 'Language does not dictate evidentiary validity.' },
      { id: 'opt-d', text: 'The speaker forgot to mention the brand of motorcycle', explanation: 'Brand name is irrelevant to epidemiological safety data.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Anecdotal evidence relies on single personal stories, which are susceptible to survivorship bias and cannot substitute for systematic statistical data collected across large populations.'
  },
  {
    id: 'u8-p-07',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'SIFT: Tracing Claims to the Original Context',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 8,
      section: '8.4',
      pageRange: '129-130',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.4, pp. 129–130',
    scenario: 'A social media post headlines: "Study Proves Chocolate Cures Heart Disease!" Following the link reveals that an online blog cited a lifestyle magazine, which cited a press release, which summarized a preliminary test-tube study on purified cocoa flavonoids in lab mice.',
    question: 'Under SIFT’s "Trace claims back to the original source", what critical insight does tracing reveal?',
    options: [
      { id: 'opt-a', text: 'Eating commercial chocolate bars treats human heart conditions immediately', explanation: 'This accepts the sensationalized headline without tracing the actual science.' },
      { id: 'opt-b', text: 'The original study tested isolated compounds in rodents, and sensationalized media reporting exaggerated and distorted the modest laboratory finding into an unwarranted miracle cure claim', explanation: 'Tracing claims reveals how media games of "telephone" distort cautious scientific findings into clickbait headlines.' },
      { id: 'opt-c', text: 'Laboratory mice love eating dessert', explanation: 'Frivolous statement.' },
      { id: 'opt-d', text: 'Scientists are not allowed to study chocolate', explanation: 'Food science is a legitimate discipline.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Tracing claims back to the original empirical publication exposes how commercial news outlets exaggerate modest laboratory findings to generate sensational headlines.'
  },
  {
    id: 'u8-p-08',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Confirmation Bias in Evidence Gathering',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 8,
      section: '8.1',
      pageRange: '117-118',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.1, pp. 117–118',
    question: 'A student who strongly opposes school uniforms only searches Google for "Reasons why school uniforms are terrible and harmful" and ignores all research on student discipline or socio-economic equality. What cognitive trap has the student fallen into?',
    options: [
      { id: 'opt-a', text: 'Confirmation bias (actively seeking only information that confirms pre-existing beliefs while disregarding contradictory evidence)', explanation: 'Confirmation bias skews inquiry by filtering out evidence that challenges one\'s desired conclusion.' },
      { id: 'opt-b', text: 'Algorithmic triangulation', explanation: 'Triangulation seeks multiple viewpoints; this student did the exact opposite.' },
      { id: 'opt-c', text: 'Peer review verification', explanation: 'Peer review is an editorial validation process.' },
      { id: 'opt-d', text: 'The CRAAP authority test', explanation: 'CRAAP assesses credibility, which this student failed to do objectively.' }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Confirmation bias occurs when researchers selectively search for, interpret, and favor evidence that validates their initial prejudice, compromising academic integrity.'
  },
  {
    id: 'u8-p-09',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Vested Interest & Financial Conflict of Interest',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 8,
      section: '8.3',
      pageRange: '125-126',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.3, pp. 125–126',
    scenario: 'A paper claiming that sugary sodas have zero link to childhood obesity includes a small disclosure note at the end: "This research project was funded by a 500,000 USD unrestricted educational grant from a multinational beverage corporation."',
    question: 'How should a Cambridge Global Perspectives researcher critically evaluate this study?',
    options: [
      { id: 'opt-a', text: 'Accept the findings as 100% objective because it was published with lots of money', explanation: 'Funding volume does not confer scientific validity.' },
      { id: 'opt-b', text: 'Recognize a severe potential vested interest (financial conflict of interest) and cross-examine the methodology against independent peer-reviewed public health studies that receive no corporate sponsorship', explanation: 'Funding sources with commercial stakes introduce significant bias risk, demanding stringent cross-verification against independent research.' },
      { id: 'opt-c', text: 'Immediately erase all mention of soda from the English dictionary', explanation: 'Absurd extreme.' },
      { id: 'opt-d', text: 'Assume that the scientists did not know who gave them the money', explanation: 'Researchers sign formal grant agreements and are fully aware of institutional funders.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Corporate-funded studies have a vested interest in outcomes favorable to sponsors. Critical researchers must scrutinize study design, sample selection, and compare results to non-commercial studies.'
  },
  {
    id: 'u8-p-10',
    unitNumber: 8,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Citing Evidence & Academic Honesty',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Delivery'],
    sourceRef: {
      unitNumber: 8,
      section: '8.2',
      pageRange: '121-122',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 8.2, pp. 121–122',
    question: 'Why is accurate bibliographic citation (e.g., APA, Harvard) a core requirement of scholarly evidence presentation in Global Perspectives?',
    options: [
      { id: 'opt-a', text: 'To show that the student knows how to type quotation marks', explanation: 'Mechanical typing skills are not the intellectual purpose of citations.' },
      { id: 'opt-b', text: 'It acknowledges intellectual property, enables readers to verify and trace claims directly to original sources, and protects against plagiarism', explanation: 'Citations attribute credit, ensure evidentiary traceability, and uphold the academic integrity of the learning community.' },
      { id: 'opt-c', text: 'Because Cambridge software automatically deletes essays that contain fewer than 50 pages', explanation: 'False statement.' },
      { id: 'opt-d', text: 'To prove that the author never conducted any original thinking', explanation: 'Proper citation contextualizes original thinking within established scholarly knowledge.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Citations establish traceability, give credit to original authors, allow readers to independently examine evidence, and maintain strict standards of academic honesty.'
  }
];
