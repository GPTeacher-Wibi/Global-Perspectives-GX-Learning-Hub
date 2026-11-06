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
      {
        id: 'opt-a',
        text: 'Credibility, Reliability, Accuracy, Appropriateness, and Popularity, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-b',
        text: 'Currency, Relevance, Authority, Accuracy, and Purpose in evaluating sources.'
      },
      {
        id: 'opt-c',
        text: 'Citation, Reference, Author, Argument, and Publication year checks.'
      },
      {
        id: 'opt-d',
        text: 'Clarity, Rigor, Authenticity, Application, and Perspective in research.'
      }
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
      {
        id: 'opt-a',
        text: 'The website displays colorful data graphics and has over one million online followers, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-b',
        text: 'The article uses formal scientific vocabulary and includes a downloadable PDF file.'
      },
      {
        id: 'opt-c',
        text: 'The article was published within the last twenty-four hours on a popular lifestyle blog.'
      },
      {
        id: 'opt-d',
        text: 'Peer-reviewed research published in recognized academic journals with transparent methods.'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Leave the original website to search what independent third-party sources say about the publisher.'
      },
      {
        id: 'opt-b',
        text: 'Carefully read the organization’s self-authored "About Us" page to verify their stated mission, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-c',
        text: 'Check whether the website features a professional layout, high-resolution logos, and secure HTTPS.'
      },
      {
        id: 'opt-d',
        text: 'Accept all claims as factual if the article quotes two named individuals holding doctoral degrees.'
      }
    ],
    correctAnswer: 'opt-a',
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
      {
        id: 'opt-a',
        text: 'Stop reading immediately and discard the research question because online sources are untrustworthy, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'Investigate the source’s funding sources, find trusted coverage, and trace claims to original data.'
      },
      {
        id: 'opt-c',
        text: 'Stop, Investigate the source, Find trusted coverage, and Trace claims, quotes, and media back to context.'
      },
      {
        id: 'opt-d',
        text: 'Scan headings, Ignore conflicting viewpoints, Forward to classmates, and Translate into English.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'It proves the video is authentic because digital video cameras record optical reality without bias, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'It indicates the video was filmed during an official press conference attended by journalists.'
      },
      {
        id: 'opt-c',
        text: 'It confirms that social media platforms verified the footage using automated content filters.'
      },
      {
        id: 'opt-d',
        text: 'It suggests synthetic manipulation, requiring verification against official speeches and lateral news.'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Commercial sponsorship guarantees high data accuracy because corporations possess massive research budgets.'
      },
      {
        id: 'opt-b',
        text: 'The financial conflict of interest compromises Purpose, as the authors have an incentive to minimize harms.'
      },
      {
        id: 'opt-c',
        text: 'Corporate white papers are superior to university studies because corporate scientists work in industry.'
      },
      {
        id: 'opt-d',
        text: 'Funding transparency eliminates all researcher bias, making corporate research fully objective and reliable.'
      }
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
      {
        id: 'opt-a',
        text: 'Approach vendors respectfully, explain the school project, and obtain voluntary consent before recording.'
      },
      {
        id: 'opt-b',
        text: 'Conceal recording equipment inside a backpack to capture authentic behavior without participant awareness.'
      },
      {
        id: 'opt-c',
        text: 'Offer monetary cash payments to children working in the market to pose for dramatic poverty photos.'
      },
      {
        id: 'opt-d',
        text: 'Publish all raw market video footage on public social media channels without blurring vendor faces.'
      }
    ],
    correctAnswer: 'opt-a',
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
      {
        id: 'opt-a',
        text: 'Ethical review is optional for high school students conducting local field observations.'
      },
      {
        id: 'opt-b',
        text: 'Informed consent is only required when participants receive monetary financial compensation.'
      },
      {
        id: 'opt-c',
        text: 'Researchers must respect local cultural norms, preserve community dignity, and avoid harm.'
      },
      {
        id: 'opt-d',
        text: 'Student researchers are exempt from privacy laws when completing accredited academic homework.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'Assume that AI-generated citations are fully verified because large language models access all books.'
      },
      {
        id: 'opt-b',
        text: 'Include AI citations directly in bibliographies as long as the journal title sounds academically formal.'
      },
      {
        id: 'opt-c',
        text: 'Use generative AI to write the entire literature review without reading any of the cited research papers.'
      },
      {
        id: 'opt-d',
        text: 'Manually verify every citation in academic databases, as generative AI models can hallucinate sources.'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Accept the article as factual because viral social media posts reflect genuine public consensus, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-b',
        text: 'Check only the comment section beneath the post to see whether casual online readers agree.'
      },
      {
        id: 'opt-c',
        text: 'Locate the original research paper to determine whether the headline accurately reflects the findings.'
      },
      {
        id: 'opt-d',
        text: 'Discard all scientific news reporting because journalism never accurately translates research.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Citations establish traceability, give credit to original authors, allow readers to independently examine evidence, and maintain strict standards of academic honesty.'
  }
];
