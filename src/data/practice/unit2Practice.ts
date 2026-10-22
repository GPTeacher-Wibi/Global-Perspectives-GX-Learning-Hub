/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3D: UNIT 2 PRACTICE QUESTION BANK (SECOND BENCHMARK IMPLEMENTATION)
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 22–38)
 *
 * Grounding:
 * - Section 2.1: What is Research? & The 4 Pillars (pp. 22–24)
 * - Section 2.2: Types of Research: Basic vs. Applied (pp. 24–27)
 * - Section 2.3: Methodological Approaches: Quantitative & Qualitative (pp. 27–31)
 * - Section 2.4: 9 Components of a Research Study (pp. 31–36)
 * - Section 2.5: The 8-Step Research Process & Iteration (pp. 36–38)
 *
 * Target Demographic: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Educational Philosophy: "Understanding and application over rote memorization"
 * Verification Status: 100% VERIFIED against textbook sections and page ranges.
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

export const UNIT_2_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  // --------------------------------------------------------------------------
  // TOPIC 1: WHAT IS RESEARCH & THE 4 PILLARS (Section 2.1, pp. 22–24)
  // --------------------------------------------------------------------------
  {
    id: 'u2-p-01',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Authentic Research vs. Information Retrieval',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.1',
      pageRange: '22-23',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.1, pp. 22–23',
    misconceptionId: 'misc-research-is-googling',
    misconceptionAlert:
      'Do not confuse retrieving pre-existing answers on the web with generating fresh insight through systematic inquiry.',
    question: 'Which of the following activities represents authentic academic research rather than casual information retrieval?',
    options: [
      {
        id: 'opt-a',
        text: 'Typing "population of Surabaya" into a search engine and noting the official census figure.'
      },
      {
        id: 'opt-b',
        text: 'Reading an encyclopedia article summarizing how electric car batteries function.'
      },
      {
        id: 'opt-c',
        text: 'Collecting daily particulate air sensors and comparing asthma clinic admissions across three neighborhoods to test pollution patterns.'
      },
      {
        id: 'opt-d',
        text: 'Copying three paragraphs from a scientific blog to paste into a school presentation slide.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation:
      'In Cambridge Global Perspectives, research is a systematic, empirical, and purposive investigation of an unanswered question. Gathering sensor data and clinic records to test an unknown relationship creates fresh empirical insight, whereas looking up existing numbers is simply information retrieval.'
  },

  {
    id: 'u2-p-02',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'The 4 Pillars: Replicability',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.1',
      pageRange: '23-24',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.1, pp. 23–24',
    scenario:
      'A marine science club claims to have invented an organic mangrove enzyme that neutralizes coastal motor oil spills in 10 minutes. However, the club refuses to share their testing notes, concentration levels, or water temperature conditions, stating: "Our results speak for themselves; you must trust our findings."',
    question: 'Which foundational pillar of scientific inquiry did this investigation fail to fulfill?',
    options: [
      {
        id: 'opt-a',
        text: 'Empirical Evidence — because the students conducted the trial outdoors rather than inside a university.'
      },
      {
        id: 'opt-b',
        text: 'Replicability — because the exact steps and variables were kept secret, preventing independent researchers from repeating and verifying the test.'
      },
      {
        id: 'opt-c',
        text: 'Purposive Goal — because cleaning oil spills is not a meaningful environmental objective.'
      },
      {
        id: 'opt-d',
        text: 'Theoretical Significance — because high school students are legally prohibited from discovering enzymes.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation:
      'Replicability is the hallmark of scientific credibility (pp. 23–24). If an investigation does not document its methodology, materials, and procedures clearly enough for an independent scholar to repeat the study and test the conclusions, the claims cannot be accepted as reliable knowledge.'
  },

  // --------------------------------------------------------------------------
  // TOPIC 2: BASIC VS. APPLIED RESEARCH (Section 2.2, pp. 24–27)
  // --------------------------------------------------------------------------
  {
    id: 'u2-p-03',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Basic vs. Applied Research Purpose',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.2',
      pageRange: '24-26',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.2, pp. 24–26',
    misconceptionId: 'misc-basic-is-useless',
    misconceptionAlert:
      'Do not assume research must produce a commercial gadget to be valuable; expanding fundamental understanding is essential.',
    question: 'Which of the following studies is an example of Basic (Fundamental) Research rather than Applied Research?',
    options: [
      {
        id: 'opt-a',
        text: 'Testing whether adding recycled plastic pellets into asphalt increases the durability of municipal flood roads.'
      },
      {
        id: 'opt-b',
        text: 'Investigating the cellular mechanism of how deep-sea hydrothermal bacteria synthesize sulfur compounds in complete darkness.'
      },
      {
        id: 'opt-c',
        text: 'Designing an automated smartphone notification schedule to increase high school homework completion rates.'
      },
      {
        id: 'opt-d',
        text: 'Evaluating the cost-effectiveness of solar-powered water purifiers for remote fishing villages in Maluku.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation:
      'Basic research is driven by curiosity to understand the fundamental laws and mechanisms of nature, without an immediate commercial or practical application (pp. 24–26). Studying deep-sea bacterial biochemistry expands fundamental biology, whereas road paving, apps, and water filters are applied solutions to practical problems.'
  },

  {
    id: 'u2-p-04',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Challenge',
    concept: 'Interdependence of Basic and Applied Science',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.2',
      pageRange: '25-27',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.2, pp. 25–27',
    scenario:
      'A city council member argues: "Our regional education budget should only fund Applied Research that solves immediate traffic jams and flood drains. Basic research in pure physics or cell biology is a luxury our taxpayers cannot afford."',
    question: 'How would a researcher trained in Global Perspectives evaluate the council member’s argument?',
    options: [
      {
        id: 'opt-a',
        text: 'The argument is logically flawed because applied technologies cannot exist without the fundamental theoretical discoveries provided by basic research.'
      },
      {
        id: 'opt-b',
        text: 'The argument is sound because basic research has produced zero useful consumer applications in the past 100 years.'
      },
      {
        id: 'opt-c',
        text: 'The argument is correct because applied research is conducted with strict scientific methods, whereas basic research relies on personal intuition.'
      },
      {
        id: 'opt-d',
        text: 'The argument is flawed because basic research is cheap and requires no funding, whereas applied research is completely free.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'As demonstrated in textbook Section 2.2 (pp. 26–27), basic and applied research are deeply interdependent. Applied engineers cannot build microchips, GPS satellites, or diagnostic medicines without decades of theoretical physics and molecular biology discoveries that uncovered the underlying laws.'
  },

  // --------------------------------------------------------------------------
  // TOPIC 3: QUANTITATIVE VS. QUALITATIVE PARADIGMS (Section 2.3, pp. 27–31)
  // --------------------------------------------------------------------------
  {
    id: 'u2-p-05',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Quantitative Methodology Fit',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.3',
      pageRange: '27-29',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.3, pp. 27–29',
    scenario:
      'A secondary school wants to determine what percentage of its 950 students sleep fewer than 6 hours on school nights, and whether there is a statistically significant correlation between self-reported sleep hours and morning math test scores.',
    question: 'Which research approach is best suited to answer this specific inquiry?',
    options: [
      {
        id: 'opt-a',
        text: 'A qualitative ethnographic diary study observing 4 students sleeping in their bedrooms.'
      },
      {
        id: 'opt-b',
        text: 'A quantitative standardized survey distributed across grade levels paired with numerical correlation analysis.'
      },
      {
        id: 'opt-c',
        text: 'An unstructured group discussion with teachers discussing their personal memories of high school.'
      },
      {
        id: 'opt-d',
        text: 'A historical review of sleep patterns during the Industrial Revolution.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation:
      'Quantitative methodology is specifically designed to measure numerical frequencies, calculate percentages across large representative populations, and test statistical correlations between variables (pp. 27–29). Measuring sleep hours and test scores across 950 students requires structured numerical data.'
  },

  {
    id: 'u2-p-06',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Qualitative Methodology Fit & Depth',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.3',
      pageRange: '28-30',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.3, pp. 28–30',
    misconceptionId: 'misc-qualitative-unscientific',
    misconceptionAlert:
      'Do not assume qualitative research is weak; structured interviews reveal deep human motivations that numbers cannot capture.',
    scenario:
      'A researcher wants to understand the emotional grief, loss of personal identity, and family pressure experienced by teenage athletes who had to abandon sports due to career-ending knee injuries.',
    question: 'Why is a qualitative approach with in-depth semi-structured interviews more appropriate here than a 5-point multiple-choice rating survey?',
    options: [
      {
        id: 'opt-a',
        text: 'Because qualitative research allows participants to describe complex emotions and lived experiences in their own words, capturing nuances that fixed numbers cannot reveal.'
      },
      {
        id: 'opt-b',
        text: 'Because qualitative research takes much less time and requires no careful planning or ethical permissions.'
      },
      {
        id: 'opt-c',
        text: 'Because quantitative rating scales are illegal when studying teenagers with sports injuries.'
      },
      {
        id: 'opt-d',
        text: 'Because qualitative research always generates definitive mathematical laws that apply to all humans.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'Qualitative research explores the rich "why" and "how" of human experiences, meanings, and psychological coping (pp. 28–30). Deep grief, cultural expectations, and identity loss cannot be adequately expressed through a rigid 1-to-5 number scale; they require verbatim transcripts and thematic analysis.'
  },

  {
    id: 'u2-p-07',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Challenge',
    concept: 'Methodological Fallacy: Numbers vs. Words',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.3',
      pageRange: '29-31',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.3, pp. 29–31',
    misconceptionId: 'misc-numbers-tell-everything',
    misconceptionAlert:
      'Numbers tell you WHAT happened; qualitative insights explain WHY people acted that way.',
    scenario:
      'A city housing department built 1,200 subsidized apartments. A quantitative sensor report showed: "84% of the apartments remained empty after 18 months." A junior official concluded: "The data proves low-income families do not want safe housing."',
    question: 'What is the primary flaw in the junior official’s analytical reasoning?',
    options: [
      {
        id: 'opt-a',
        text: 'The official confused a quantitative measurement of vacancy with an unverified causal explanation, failing to collect qualitative evidence about why families did not move.'
      },
      {
        id: 'opt-b',
        text: 'The official should have used qualitative interviews to count the empty buildings instead of sensor logs.'
      },
      {
        id: 'opt-c',
        text: 'The sample size of 1,200 apartments was too small to draw any statistical conclusion.'
      },
      {
        id: 'opt-d',
        text: 'Housing data is always subjective and cannot be measured with numerical figures.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'As highlighted in textbook Section 2.3 (pp. 29–30), quantitative figures measure WHAT is happening, but they cannot explain WHY without further investigation. Subsequent qualitative interviews might reveal that the apartments lacked public transport or clean drinking water, completely disproving the official’s assumption.'
  },

  {
    id: 'u2-p-08',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Exploratory Research Function',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.3',
      pageRange: '27-31',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.3, pp. 27–31',
    misconceptionId: 'misc-every-study-has-hypothesis',
    misconceptionAlert:
      'Exploratory studies do not begin with rigid hypotheses; they map unknown territory to discover initial patterns.',
    question: 'When is a researcher most likely to conduct Exploratory Research rather than a formal hypothesis-testing study?',
    options: [
      {
        id: 'opt-a',
        text: 'When investigating a completely new or little-understood phenomenon where prior literature is scarce and key variables are not yet defined.'
      },
      {
        id: 'opt-b',
        text: 'When testing a well-established mathematical law that has been proven thousands of times in physics textbooks.'
      },
      {
        id: 'opt-c',
        text: 'When seeking to confirm an exact statistical percentage across a known national census database.'
      },
      {
        id: 'opt-d',
        text: 'When a researcher refuses to collect any empirical data and relies entirely on personal intuition.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'Exploratory research is conducted when a problem or phenomenon is new, poorly understood, or lacks prior academic scholarship (pp. 27–31). It aims to gain preliminary insights, clarify terms, and generate promising questions for future structured investigations, rather than testing pre-set hypotheses.'
  },

  // --------------------------------------------------------------------------
  // TOPIC 4: 9 COMPONENTS OF A RESEARCH STUDY (Section 2.4, pp. 31–36)
  // --------------------------------------------------------------------------
  {
    id: 'u2-p-09',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Research Problem vs. Research Question',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.4',
      pageRange: '31-33',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.4, pp. 31–33',
    misconceptionId: 'misc-topic-equals-question',
    misconceptionAlert:
      'A research question must be focused, investigable, and bounded—not a broad topic or a simple factual lookup.',
    scenario:
      'A Grade 10 student is passionate about environmental sustainability and submits the following draft for their Cambridge research paper: "Topic: Plastic Waste in Indonesia. Question: Why is pollution terrible for our planet?"',
    question: 'Which of the following revisions transforms the student’s broad topic into an investigable, high-quality research question?',
    options: [
      {
        id: 'opt-a',
        text: '"To what extent did the ban on single-use plastic bags in Denpasar reduce commercial retail plastic waste along Sanur Beach over a 12-month period?"'
      },
      {
        id: 'opt-b',
        text: '"When was the first plastic water bottle invented in Europe?"'
      },
      {
        id: 'opt-c',
        text: '"Do sea turtles prefer swimming in clean water or dirty water?"'
      },
      {
        id: 'opt-d',
        text: '"Should everyone in the world stop using plastic right now?"'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'A sharp research question must be focused, specific, bounded by time and geography, and answerable with empirical evidence (pp. 31–33). Option A specifies the policy, location, timeline, and measurable outcome. The other options are simple factual lookups, obvious moral statements, or unresearchably vast slogans.'
  },

  {
    id: 'u2-p-10',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'The Function of the Literature Review',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.4',
      pageRange: '32-33',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.4, pp. 32–33',
    misconceptionId: 'misc-lit-review-as-summary',
    misconceptionAlert:
      'A literature review is not an uncritical summary of articles; it locates the research gap that justifies your investigation.',
    question: 'What is the primary scholarly purpose of conducting a Literature Review before beginning data collection?',
    options: [
      {
        id: 'opt-a',
        text: 'To demonstrate that the student knows how to copy-paste quotations from published authors to fill pages.'
      },
      {
        id: 'opt-b',
        text: 'To map existing academic knowledge, identify what remains unknown or disputed (the research gap), and ensure the new study does not needlessly duplicate past work.'
      },
      {
        id: 'opt-c',
        text: 'To guarantee that the student’s personal opinions are validated by at least three famous scientists.'
      },
      {
        id: 'opt-d',
        text: 'To replace the need for empirical fieldwork and experiments altogether.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation:
      'A literature review establishes the scholarly context of a study (pp. 32–33). It synthesizes what is already known, highlights contradictions or missing knowledge (the research gap), and demonstrates why the researcher’s planned investigation is necessary and original.'
  },

  {
    id: 'u2-p-11',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'SMART Research Objectives',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.4',
      pageRange: '32-34',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.4, pp. 32–34',
    misconceptionId: 'misc-vague-objectives',
    misconceptionAlert:
      'Objectives must state concrete, measurable operational steps—not broad emotional desires.',
    scenario:
      'A student researcher writes: "My research objective is to make all teenagers in Jakarta feel completely energetic and love eating vegetables every single day."',
    question: 'Why does this statement fail to meet the standard of a SMART research objective?',
    options: [
      {
        id: 'opt-a',
        text: 'It is a vague, aspirational wish rather than a specific, measurable, achievable, relevant, and time-bound action plan.'
      },
      {
        id: 'opt-b',
        text: 'It is unacceptable because research objectives must always be written in German or French.'
      },
      {
        id: 'opt-c',
        text: 'It fails only because Jakarta has too many traffic lights to conduct research.'
      },
      {
        id: 'opt-d',
        text: 'It is actually a perfect SMART objective because it expresses enthusiasm.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'Research objectives must be SMART (pp. 32–34): Specific, Measurable, Achievable, Relevant, and Time-bound. A valid objective uses concrete action verbs (e.g., "To survey 150 Grade 10 students over two weeks to measure average weekly vegetable consumption and self-reported energy levels").'
  },

  {
    id: 'u2-p-12',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Challenge',
    concept: 'Falsifiable Scientific Hypothesis',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.4',
      pageRange: '32-34',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.4, pp. 32–34',
    misconceptionId: 'misc-hypothesis-is-wild-guess',
    misconceptionAlert:
      'A scientific hypothesis must make a testable prediction regarding variables that can be proven wrong by evidence.',
    question: 'Which of the following statements satisfies the academic criteria for a testable, falsifiable scientific hypothesis?',
    options: [
      {
        id: 'opt-a',
        text: '"Healthy food is morally superior to junk food in the eyes of the universe."'
      },
      {
        id: 'opt-b',
        text: '"Students who consume breakfast containing at least 15g of protein will demonstrate significantly higher scores on a 30-minute memory assessment than students who skip breakfast."'
      },
      {
        id: 'opt-c',
        text: '"Someday in the distant future, invisible energy forces may or may not influence student happiness."'
      },
      {
        id: 'opt-d',
        text: '"I personally feel that math tests are unfair on rainy Mondays."'
      }
    ],
    correctAnswer: 'opt-b',
    explanation:
      'A hypothesis is a formal, testable prediction linking specific variables (pp. 32–34). Option B clearly specifies the independent variable (protein breakfast vs. no breakfast) and the dependent variable (memory test score), and can be empirically supported or refuted (falsified) by data.'
  },

  {
    id: 'u2-p-13',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Population vs. Sample & Sampling Bias',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.4',
      pageRange: '33-35',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.4, pp. 33–35',
    misconceptionId: 'misc-sample-equals-population',
    misconceptionAlert:
      'A small convenience sample cannot represent a broad, diverse population without severe sampling error.',
    scenario:
      'A student’s research question investigates: "To what extent do high school students across South Jakarta experience academic burnout?" To gather data, the student interviews 6 close friends who all attend the advanced competitive robotics club after school, and claims the findings represent all teenagers across the city.',
    question: 'What methodological error has the student committed?',
    options: [
      {
        id: 'opt-a',
        text: 'Sampling Mismatch & Selection Bias: The student surveyed a tiny convenience sample from a specialized club whose experiences cannot represent the diverse 50,000 high school students in the target population.'
      },
      {
        id: 'opt-b',
        text: 'The student erred by using English instead of Indonesian in their research report.'
      },
      {
        id: 'opt-c',
        text: 'The student committed no error because studying friends is the most reliable scientific method.'
      },
      {
        id: 'opt-d',
        text: 'The only error was asking about burnout instead of favorite video games.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'In research methodology, the population is the broader group under investigation, while the sample is the group actually measured (pp. 33–35). Using a convenience sample of 6 friends from an elite after-school club introduces severe selection bias; findings cannot be generalized to the entire adolescent population.'
  },

  {
    id: 'u2-p-14',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Challenge',
    concept: 'The Analysis Triad: Findings vs. Discussion',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.4',
      pageRange: '34-36',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.4, pp. 34–36',
    misconceptionId: 'misc-findings-equal-discussion',
    misconceptionAlert:
      'Findings report raw evidence neutrally; the Discussion interprets meaning, reasons, and links to prior research.',
    scenario:
      'Read the following two excerpts from a student research paper on school cafeteria food waste:\n• Excerpt 1: "Over the 10-day audit period, students discarded a total of 42.6 kg of cooked vegetables, representing 68% of total food waste by weight."\n• Excerpt 2: "This high rate of vegetable waste likely occurs because side dishes are prepared at 9:00 AM and served cold at 12:30 PM, corroborating Setiawan’s (2020) findings that food temperature strongly determines student canteen appetite."',
    question: 'How does academic research categorize Excerpt 1 and Excerpt 2 within the analysis triad?',
    options: [
      {
        id: 'opt-a',
        text: 'Excerpt 1 is a raw empirical Finding (Result); Excerpt 2 is analytical Discussion (Interpretation).'
      },
      {
        id: 'opt-b',
        text: 'Excerpt 1 is a personal opinion; Excerpt 2 is a mathematical law.'
      },
      {
        id: 'opt-c',
        text: 'Excerpt 1 is the Literature Review; Excerpt 2 is the Research Hypothesis.'
      },
      {
        id: 'opt-d',
        text: 'Both excerpts are identical raw findings with no differences.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'Textbook Section 2.4 (pp. 34–36) distinguishes the analysis triad: Findings (Results) state purely objective, uninterpreted empirical data (weights, counts, percentages). Discussion interprets why those results occurred, linking them to underlying reasons and existing published literature.'
  },

  // --------------------------------------------------------------------------
  // TOPIC 5: THE 8-STEP RESEARCH CYCLE & ITERATION (Section 2.5, pp. 36–38)
  // --------------------------------------------------------------------------
  {
    id: 'u2-p-15',
    unitNumber: 2,
    type: 'multiple-choice',
    difficulty: 'Challenge',
    concept: 'The Iterative Nature of Research Inquiry',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 2,
      section: '2.5',
      pageRange: '36-38',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 2.5, pp. 36–38',
    misconceptionId: 'misc-research-is-straight-line',
    misconceptionAlert:
      'Refining a question or methodology after discovering pilot flaws is disciplined iteration, not research failure.',
    scenario:
      'A research team tests their 10-question survey on 5 pilot students. The students look confused, misunderstand Question 4, and point out that Question 7 asks two questions at the same time. The lead researcher stops the project, rewrites the flawed questions, clarifies the wording, and re-tests the instrument before launching the full school-wide survey.',
    question: 'How should the researcher’s decision to modify the instrument be understood in the scientific research process?',
    options: [
      {
        id: 'opt-a',
        text: 'As an authentic demonstration of the iterative research cycle: pilot testing identifies flaws early, allowing researchers to refine their instruments and ensure empirical validity.'
      },
      {
        id: 'opt-b',
        text: 'As an admission of complete failure, requiring the team to abandon research permanently.'
      },
      {
        id: 'opt-c',
        text: 'As an ethical violation, because once a question is drafted it must never be changed.'
      },
      {
        id: 'opt-d',
        text: 'As proof that qualitative feedback should always be ignored in survey design.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation:
      'Research is an iterative, self-correcting process rather than a rigid, unbending straight line (pp. 36–38). Piloting an instrument and refining flawed items based on feedback strengthens construct validity and is a standard mark of professional research rigor.'
  }
];
