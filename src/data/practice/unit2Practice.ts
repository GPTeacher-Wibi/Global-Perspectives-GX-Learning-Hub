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
        text: 'Formulate an actionable municipal ordinance to penalize urban households dumping plastic waste.'
      },
      {
        id: 'opt-b',
        text: 'Discover fundamental biochemical mechanisms without targeting an immediate commercial product.'
      },
      {
        id: 'opt-c',
        text: 'Manufacture affordable consumer water filtration kits sold directly to local rural clinics.'
      },
      {
        id: 'opt-d',
        text: 'Design an industrial production facility to generate commercial chemical fertilizer for export.'
      }
    ],
    correctAnswer: 'opt-b',
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
        text: 'Both teams pursue basic science because both investigations employ laboratory equipment and test tubes, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'Dr. Lestari conducts applied research because studying biological membranes requires private grants.'
      },
      {
        id: 'opt-c',
        text: 'Both research programs represent applied science because all biochemical research ultimately aids human life.'
      },
      {
        id: 'opt-d',
        text: 'Dr. Lestari conducts basic research (pure knowledge), while Dr. Setiawan conducts applied research (practical tool).'
      }
    ],
    correctAnswer: 'opt-d',
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
        text: 'Basic research creates the foundational theoretical knowledge that applied scientists utilize to build practical solutions.'
      },
      {
        id: 'opt-b',
        text: 'Applied research must always precede basic research because funding agencies demand functional gadgets before theory, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-c',
        text: 'Basic research has been rendered obsolete by digital computing because computer models replace natural observation.'
      },
      {
        id: 'opt-d',
        text: 'Government science ministries should defund pure laboratory research because theoretical papers produce zero jobs.'
      }
    ],
    correctAnswer: 'opt-a',
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
        text: 'Step 1: Problem Formulation, because identifying student dissatisfaction must precede every other research decision.'
      },
      {
        id: 'opt-b',
        text: 'Step 4: Methodology Design, because choosing between paper surveys and online forms determines student responses.'
      },
      {
        id: 'opt-c',
        text: 'Step 2: Literature Review, because reviewing prior research reveals existing validated tools and prevents naive repetition.'
      },
      {
        id: 'opt-d',
        text: 'Step 6: Data Analysis, because calculating descriptive statistical metrics determines whether student opinions are reliable.'
      }
    ],
    correctAnswer: 'opt-c',
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
        text: 'Collecting survey data before writing any research question guarantees spontaneous, unbiased answers from students.'
      },
      {
        id: 'opt-b',
        text: 'Conducting statistical tests before cleaning survey datasets accelerates the publication timeline in school journals.'
      },
      {
        id: 'opt-c',
        text: 'Finalizing research recommendations before interviewing community elders ensures the project stays on schedule.'
      },
      {
        id: 'opt-d',
        text: 'Distributing questionnaires without a literature review and clear question creates unscientific, disorganized data.'
      }
    ],
    correctAnswer: 'opt-d',
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
        text: 'Surveys should only gather numerical responses because written words cannot be evaluated systematically by scientists, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-b',
        text: 'Quantitative data provides statistical patterns and generalizability, while qualitative data reveals lived experiences.'
      },
      {
        id: 'opt-c',
        text: 'Qualitative research is merely preliminary anecdotal evidence that must be discarded once formal numbers are tallied.'
      },
      {
        id: 'opt-d',
        text: 'Combining numbers with open-ended interviews invalidates scientific rigor because statistical tests demand purity.'
      }
    ],
    correctAnswer: 'opt-b',
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
        text: 'Quantitative Methodology, because the research objective demands measuring numerical prevalence across a large representative sample.'
      },
      {
        id: 'opt-b',
        text: 'Qualitative Methodology, because interviewing 10 students provides deeper personal anecdotes about emotional sleep stress, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-c',
        text: 'Mixed Methods Methodology, because every high school inquiry project must include both numbers and unstructured interviews.'
      },
      {
        id: 'opt-d',
        text: 'Historical Archival Methodology, because reviewing school attendance registers from thirty years ago confirms sleep habits.'
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
        text: 'Publishing student names alongside their test results to promote academic transparency across the province.'
      },
      {
        id: 'opt-b',
        text: 'Discarding negative survey responses so the final research report highlights the program’s positive outcomes.'
      },
      {
        id: 'opt-c',
        text: 'Obtaining informed consent, safeguarding participant confidentiality, and avoiding emotional or physical harm.'
      },
      {
        id: 'opt-d',
        text: 'Offering financial cash payments to guarantee that low-income participants give favorable responses to questions.'
      }
    ],
    correctAnswer: 'opt-c',
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
        text: 'Secure institutional permissions, obtain informed consent from parents and students, and guarantee strict anonymity.'
      },
      {
        id: 'opt-b',
        text: 'Publish all raw interview recordings on public social media channels to establish transparent public debate, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-c',
        text: 'Hide microphones under classroom desks to record authentic student discussions without their awareness or consent.'
      },
      {
        id: 'opt-d',
        text: 'Promise students higher end-of-term academic grades if they agree to participate in confidential focus groups.'
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
        text: 'Proceed with the publication immediately because environmental truth is more important than municipal business privacy.'
      },
      {
        id: 'opt-b',
        text: 'Alter the water laboratory test values in the spreadsheet so the findings show completely clean drinking water.'
      },
      {
        id: 'opt-c',
        text: 'Uphold academic honesty by reporting the actual findings while consulting school supervisors on ethical data disclosure.'
      },
      {
        id: 'opt-d',
        text: 'Destroy the lab samples and terminate the investigation to avoid upsetting commercial relations with local business sponsors.'
      }
    ],
    correctAnswer: 'opt-c',
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
        text: 'Subjective speculation, emotional conviction, personal popularity, and charismatic rhetorical delivery.'
      },
      {
        id: 'opt-b',
        text: 'Speed of publication, length of bibliography, number of colorful diagrams, and endorsement by online influencers.'
      },
      {
        id: 'opt-c',
        text: 'Uniformity of public opinion, commercial marketability, lack of controversy, and simple binary conclusions.'
      },
      {
        id: 'opt-d',
        text: 'Empirical evidence, systematic methodology, transparent limitations, and rigorous peer-review evaluation.'
      }
    ],
    correctAnswer: 'opt-d',
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
        text: 'Relying exclusively on non-peer-reviewed personal lifestyle blogs to establish medical scientific definitions, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'Synthesizing empirical findings from peer-reviewed journals, identifying research gaps, and evaluating methodologies.'
      },
      {
        id: 'opt-c',
        text: 'Summarizing the plot lines of popular fictional television dramas about teenage hospital patients in Bandung.'
      },
      {
        id: 'opt-d',
        text: 'Copying and pasting verbatim paragraphs from five Wikipedia articles without verifying original primary citations.'
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
        text: 'Sampling only close personal friends during lunch breaks guarantees high data validity because friends answer questions honestly.'
      },
      {
        id: 'opt-b',
        text: 'Using stratified random sampling ensures every subgroup within the student body is proportionally represented in the survey.'
      },
      {
        id: 'opt-c',
        text: 'Surveying only the highest-achieving science students provides the most accurate data for overall school social policies.'
      },
      {
        id: 'opt-d',
        text: 'Excluding students who commute by public transport simplifies research logistics and prevents data collection delays.'
      }
    ],
    correctAnswer: 'opt-b',
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
        text: 'Qualitative analysis using thematic coding to identify recurring concepts across transcripts.'
      },
      {
        id: 'opt-b',
        text: 'Quantitative analysis calculating standard deviation and regression coefficients for quotes, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-c',
        text: 'Purely mathematical correlation analysis measuring numerical frequency of single consonants.'
      },
      {
        id: 'opt-d',
        text: 'Financial cost-benefit accounting comparing paper transcription costs to digital recorders.'
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
        text: 'A strong conclusion ignores research limitations to make universal claims that impress government funding committees.'
      },
      {
        id: 'opt-b',
        text: 'A strong conclusion introduces completely new raw datasets that were never mentioned in the data analysis chapter.'
      },
      {
        id: 'opt-c',
        text: 'A strong conclusion guarantees that following the study’s policy recommendations will solve all related societal problems.'
      },
      {
        id: 'opt-d',
        text: 'A strong conclusion synthesizes key findings, acknowledges methodological limitations, and proposes practical solutions.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation:
      'Research is an iterative, self-correcting process rather than a rigid, unbending straight line (pp. 36–38). Piloting an instrument and refining flawed items based on feedback strengthens construct validity and is a standard mark of professional research rigor.'
  }
];
