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
      {
        id: 'opt-a',
        text: 'An unstated, taken-for-granted belief or premise that underpins an argument without explicit proof.'
      },
      {
        id: 'opt-b',
        text: 'A verified statistical metric published in an official national census bureau report, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-c',
        text: 'A direct interview quotation transcribed verbatim from an expert witness testimony.'
      },
      {
        id: 'opt-d',
        text: 'A formal bibliographical citation formatted according to international academic style guidelines.'
      }
    ],
    correctAnswer: 'opt-a',
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
      {
        id: 'opt-a',
        text: 'Unmasking assumptions is unnecessary if the speaker has high social status and charismatic presence, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-b',
        text: 'Assumptions should be accepted as true whenever they match the researcher’s personal intuition.'
      },
      {
        id: 'opt-c',
        text: 'Arguments rest on hidden premises; exposing flawed assumptions reveals whether conclusions are sound.'
      },
      {
        id: 'opt-d',
        text: 'Critiquing assumptions is considered disrespectful in formal academic and policy debates.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'Assuming that older workers are completely incapable of learning any digital workplace applications, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'Assuming that economic efficiency and productivity are the sole priorities, ignoring social cohesion.'
      },
      {
        id: 'opt-c',
        text: 'Assuming that robotics manufacturing firms should receive zero tax incentives from the government.'
      },
      {
        id: 'opt-d',
        text: 'Assuming that factory automation will be permanently outlawed by international labor conventions.'
      }
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
      {
        id: 'opt-a',
        text: 'An online discussion where participants debate conflicting ideas with rigorous intellectual humility, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'An audio recording studio designed with acoustic dampening panels to eliminate background noise.'
      },
      {
        id: 'opt-c',
        text: 'A scientific laboratory where peer-reviewed hypotheses are subjected to repeated empirical testing.'
      },
      {
        id: 'opt-d',
        text: 'An information environment where individuals encounter only beliefs that reinforce their preconceptions.'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Algorithmic curation ensures users encounter a wide spectrum of opposing political perspectives, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-b',
        text: 'Search engines are legally mandated to present only neutral, verified scientific consensus articles.'
      },
      {
        id: 'opt-c',
        text: 'Platforms optimize for user engagement, serving sensational content that reinforces existing biases.'
      },
      {
        id: 'opt-d',
        text: 'Digital algorithms prevent confirmation bias by automatically debunking false claims in real time.'
      }
    ],
    correctAnswer: 'opt-c',
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
      {
        id: 'opt-a',
        text: 'Tendency to search for, interpret, and recall information that confirms preexisting beliefs while dismissing counter-evidence.'
      },
      {
        id: 'opt-b',
        text: 'Methodological requirement to verify all survey respondents hold identical cultural and religious backgrounds, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-c',
        text: 'Psychological capacity to listen empathetically to opposing arguments without experiencing emotional defensiveness.'
      },
      {
        id: 'opt-d',
        text: 'Statistical procedure of confirming survey sample demographics against national census data distributions.'
      }
    ],
    correctAnswer: 'opt-a',
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
      {
        id: 'opt-a',
        text: 'Descriptive claims are verifiable facts written by scientists; normative claims are emotional personal opinions.'
      },
      {
        id: 'opt-b',
        text: 'Descriptive claims are always universally false; normative claims are mathematically and logically certain.'
      },
      {
        id: 'opt-c',
        text: 'Only national governments can formulate descriptive claims; individual citizens make normative claims.'
      },
      {
        id: 'opt-d',
        text: 'Descriptive claims state how the world actually is; normative claims prescribe how the world ought to be.'
      }
    ],
    correctAnswer: 'opt-d',
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
      {
        id: 'opt-a',
        text: 'Blocking all online contacts who express perspectives that diverge from one’s immediate family traditions, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-b',
        text: 'Actively seeking credible sources from rival viewpoints, practicing intellectual empathy, and testing beliefs.'
      },
      {
        id: 'opt-c',
        text: 'Reading only anonymous forum comments posted late at night to find unvarnished public sentiment.'
      },
      {
        id: 'opt-d',
        text: 'Assuming that all claims published on social media platforms are equally factual and trustworthy.'
      }
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
      {
        id: 'opt-a',
        text: 'Overgeneralization: a tiny, unrepresentative sample cannot support universal claims about millions of youth.'
      },
      {
        id: 'opt-b',
        text: 'The research report failed to explain the historical roots of modern Korean pop music choreography.'
      },
      {
        id: 'opt-c',
        text: 'The investigator should have restricted the survey sample exclusively to traditional cultural dancers.'
      },
      {
        id: 'opt-d',
        text: 'The research publication did not specify the operating system used to analyze the student questionnaires.'
      }
    ],
    correctAnswer: 'opt-a',
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
      {
        id: 'opt-a',
        text: 'To prove that the proposed initiative carries zero financial cost and guarantees immediate universal wealth.'
      },
      {
        id: 'opt-b',
        text: 'Real-world decisions involve resource constraints and competing interests; evaluating trade-offs shows maturity.'
      },
      {
        id: 'opt-c',
        text: 'To ensure the spoken capstone presentation satisfies the strict sixty-minute maximum speaking limit.'
      },
      {
        id: 'opt-d',
        text: 'Because Cambridge examination rules dictate that students must actively criticize all civic proposals.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Rigorous policy claims recognize that every solution entails opportunity costs and trade-offs. Formulating viable policy requires balancing benefits against inevitable constraints.'
  }
];
