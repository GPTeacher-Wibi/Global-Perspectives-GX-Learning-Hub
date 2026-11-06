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
      {
        id: 'opt-a',
        text: 'Does recycling plastic bottles solve urban air pollution in Jakarta?, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-b',
        text: 'Why is air pollution bad for children living in congested urban neighborhoods?'
      },
      {
        id: 'opt-c',
        text: 'How much money does the municipal government spend on street cleaning each year?'
      },
      {
        id: 'opt-d',
        text: 'To what extent do odd-even traffic rules reduce PM2.5 particulate levels in Central Jakarta?'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'It uses technical environmental terminology that average high school survey respondents cannot comprehend.'
      },
      {
        id: 'opt-b',
        text: 'It is a leading question that embeds an emotional presumption rather than maintaining neutral inquiry.'
      },
      {
        id: 'opt-c',
        text: 'It focuses on public transit rather than evaluating electric passenger car manufacturing incentives.'
      },
      {
        id: 'opt-d',
        text: 'It fails to specify whether the surveyed buses operate on diesel combustion or compressed natural gas.'
      }
    ],
    correctAnswer: 'opt-b',
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
      {
        id: 'opt-a',
        text: 'The inquiry prompt is too narrow and can be answered completely in a single sentence using census data, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'The question focuses exclusively on international shipping laws while ignoring domestic water policies.'
      },
      {
        id: 'opt-c',
        text: 'It lacks geographic and demographic focus, making empirical data collection impossibly broad for a student.'
      },
      {
        id: 'opt-d',
        text: 'It relies on quantitative measurements instead of gathering personal narrative reflections from citizens.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'Revising closed "yes/no" prompts into open evaluative inquiries that invite multi-perspective debate.'
      },
      {
        id: 'opt-b',
        text: 'Adding emotive adjectives to encourage survey respondents to agree with the researcher’s thesis, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-c',
        text: 'Expanding the geographic boundary to evaluate all countries across the globe within a single essay.'
      },
      {
        id: 'opt-d',
        text: 'Eliminating all secondary research sources to rely exclusively on informal peer conversations.'
      }
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
      {
        id: 'opt-a',
        text: 'Using a balanced Likert scale ranging from "Strongly Disagree" to "Strongly Agree" with neutral options, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-b',
        text: 'Informing respondents about the study’s institutional sponsors and ethical data protection guidelines.'
      },
      {
        id: 'opt-c',
        text: 'Pre-testing survey questions on a small pilot sample to identify confusing wording before full launch.'
      },
      {
        id: 'opt-d',
        text: 'Combining two separate issues into a single question, making it impossible to know which issue is answered.'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Surveying only close friends guarantees honest answers because social familiarity eliminates test anxiety.'
      },
      {
        id: 'opt-b',
        text: 'Convenience sampling introduces sampling bias because classmates do not represent the broader community.'
      },
      {
        id: 'opt-c',
        text: 'Distributing online forms to student group chats ensures complete demographic coverage across all age brackets.'
      },
      {
        id: 'opt-d',
        text: 'Voluntary response surveys automatically eliminate bias because unmotivated participants decline to answer.'
      }
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
      {
        id: 'opt-a',
        text: 'A completely neutral prompt that collects objective data on youth smartphone usage habits, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-b',
        text: 'An open-ended question that allows respondents to express diverse philosophical viewpoints.'
      },
      {
        id: 'opt-c',
        text: 'A loaded question using pejorative language to nudge respondents toward a predetermined answer.'
      },
      {
        id: 'opt-d',
        text: 'A double-barreled question asking about screen time and academic performance simultaneously.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'Frame questions neutrally, provide balanced response scales, and avoid emotionally charged descriptors.'
      },
      {
        id: 'opt-b',
        text: 'Explicitly inform respondents which answer supports the school’s community service accreditation goals.'
      },
      {
        id: 'opt-c',
        text: 'Only offer binary "Yes" or "No" response options to simplify data analysis and prevent ambiguous feedback.'
      },
      {
        id: 'opt-d',
        text: 'Discard questionnaires from participants who express disagreement with the researcher’s personal thesis.'
      }
    ],
    correctAnswer: 'opt-a',
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
      {
        id: 'opt-a',
        text: 'Conducting in-depth interviews with three family members provides sufficient proof for nationwide policy changes.'
      },
      {
        id: 'opt-b',
        text: 'Online social media polls represent the general voting public because internet access is nearly universal.'
      },
      {
        id: 'opt-c',
        text: 'A sample size of thirty students is always adequate regardless of total school population or subgroups.'
      },
      {
        id: 'opt-d',
        text: 'A representative sample must reflect the demographic characteristics and diversity of the target population.'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Pilot testing should be skipped whenever research deadlines are tight to ensure prompt report delivery, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-b',
        text: 'Testing a survey on a trial group invalidates research findings because respondents discuss questions.'
      },
      {
        id: 'opt-c',
        text: 'A pilot study detects ambiguous wording, leading phrasing, and procedural defects before full distribution.'
      },
      {
        id: 'opt-d',
        text: 'The primary purpose of pilot testing is to calculate the final statistical significance of survey findings.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Ethical interviewers must safeguard participant well-being by reiterating the right to pass on sensitive questions or withdraw entirely at any time without adverse consequences.'
  }
];
