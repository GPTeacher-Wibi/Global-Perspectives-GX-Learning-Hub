/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 10 PRACTICE QUESTION BANK: DRAWING CONCLUSIONS
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 147–164)
 *
 * Grounding:
 * - Section 10.1: What Makes a Valid Conclusion? (pp. 147–150)
 * - Section 10.2: Avoiding Conclusion Traps: Overgeneralization & Leaps (pp. 151–154)
 * - Section 10.3: The Conclusion Matrix: Multi-Source Weighting (pp. 155–158)
 * - Section 10.4: Actionable Recommendations & Future Inquiry (pp. 159–164)
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

export const UNIT_10_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  {
    id: 'u10-p-01',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Anatomy of a Valid Academic Conclusion',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.1',
      pageRange: '147-149',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.1, pp. 147–149',
    misconceptionId: 'misc-conclusion-is-new-facts',
    misconceptionAlert: 'A conclusion must not introduce completely new, unexamined evidence in the final paragraph; it must synthesize the evidence presented in the body of the paper.',
    question: 'What is the primary academic function of a conclusion in a Global Perspectives research paper?',
    options: [
      {
        id: 'opt-a',
        text: 'Introducing several brand-new statistical datasets and concepts that were never analyzed in earlier chapters, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'Copying the opening introductory paragraph word for word without offering any evaluative synthesis of findings.'
      },
      {
        id: 'opt-c',
        text: 'Formulating apologies to the grading committee for incomplete research procedures and editing shortcomings.'
      },
      {
        id: 'opt-d',
        text: 'Synthesizing evidence, directly answering the research question, evaluating limitations, and noting implications.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation: 'A rigorous conclusion synthesizes the findings established in the body paragraphs, directly resolves the central research question, acknowledges boundaries, and articulates broader significance.'
  },
  {
    id: 'u10-p-02',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Conclusion Traps: Overgeneralization',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.2',
      pageRange: '151-153',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.2, pp. 151–153',
    question: 'A student tests three electric mopeds in dry weather on smooth pavement and concludes: "Electric two-wheelers are the safest, most perfect vehicles on Earth in all weather and terrain." What conclusion trap was committed?',
    options: [
      {
        id: 'opt-a',
        text: 'Ad Hominem fallacy (attacking the vehicle manufacturer’s character rather than assessing performance).'
      },
      {
        id: 'opt-b',
        text: 'Overgeneralization (extending a narrow, limited finding far beyond the bounds of the actual evidence).'
      },
      {
        id: 'opt-c',
        text: 'Post Hoc fallacy (assuming that because vehicle sales rose, traffic congestion was directly eliminated).'
      },
      {
        id: 'opt-d',
        text: 'Straw Man fallacy (caricaturing opposing arguments to make public transit alternatives look unviable).'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Overgeneralization leaps from a small, specific data set to an unjustified universal generalization, ignoring unexamined conditions such as wet weather, unpaved terrain, and broader vehicle dynamics.'
  },
  {
    id: 'u10-p-03',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'The Conclusion Matrix: Multi-Source Weighting',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.3',
      pageRange: '155-157',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.3, pp. 155–157',
    scenario: 'In an inquiry on urban plastic bag bans, Evidence A (economic) shows a 4% profit drop for local convenience stores, Evidence B (ecological) shows a 70% decrease in storm drain blockages, and Evidence C (social) reveals that 82% of citizens adopted reusable cloth bags within three months.',
    question: 'Using a multi-criteria conclusion matrix, which integrated conclusion is best justified?',
    options: [
      {
        id: 'opt-a',
        text: 'The plastic bag ban was an outright failure because small convenience stores experienced brief retail friction, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'All urban retail convenience stores should be permanently shut down by municipal decree to eliminate all waste.'
      },
      {
        id: 'opt-c',
        text: 'Strong drainage gains and broad civic adaptation justify continuing the ban alongside retail transition support.'
      },
      {
        id: 'opt-d',
        text: 'Plastic polymers naturally biodegrade within weeks and produce zero measurable impact on urban drainage systems.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation: 'A conclusion matrix synthesizes varied criteria (economic, environmental, civic), balancing localized costs against broader societal dividends to arrive at an integrated judgment.'
  },
  {
    id: 'u10-p-04',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Evaluating Hypotheses Against Evidence',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.1',
      pageRange: '148-150',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.1, pp. 148–150',
    scenario: 'A student’s initial hypothesis was: "Installing solar-powered streetlights will reduce night-time traffic accidents by 50% in Kampung Rejo." After analyzing police accident logs, the student discovers accidents actually rose by 10% because vehicles drove faster on the illuminated road, though pedestrian crime plummeted by 80%.',
    question: 'How should an intellectually honest researcher conclude this study?',
    options: [
      {
        id: 'opt-a',
        text: 'Acknowledge the rise in speeding honestly, modify the hypothesis, and note the unintended positive crime drop.'
      },
      {
        id: 'opt-b',
        text: 'Falsify traffic accident statistics so the final report confirms the student’s original safety hypothesis, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-c',
        text: 'Discard all collected radar records and cancel the research project to avoid presenting conflicting findings.'
      },
      {
        id: 'opt-d',
        text: 'Accuse local traffic police officers of recording false speed data to explain why the hypothesis failed.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Academic integrity requires acknowledging when empirical evidence disconfirms an initial hypothesis. Discovering unexpected mechanisms is a hallmark of genuine scientific inquiry.'
  },
  {
    id: 'u10-p-05',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Acknowledging Study Limitations',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.2',
      pageRange: '153-155',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.2, pp. 153–155',
    question: 'Why does an explicit "Limitations of the Study" section enhance the academic credibility of a research report?',
    options: [
      {
        id: 'opt-a',
        text: 'It provides examiners with concrete reasons to penalize the student’s research methodology score, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-b',
        text: 'It shows intellectual honesty by candidly noting sample constraints, unmeasured variables, and boundaries.'
      },
      {
        id: 'opt-c',
        text: 'It demonstrates that the researcher conducted superficial work and failed to complete assigned tasks.'
      },
      {
        id: 'opt-d',
        text: 'It allows students to complain about demanding academic expectations and insufficient library books.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Documenting study limitations (e.g., sample size, geographic scope, self-reporting bias) shows intellectual maturity and ensures findings are not misapplied beyond their valid scope.'
  },
  {
    id: 'u10-p-06',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Formulating Actionable Recommendations',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Reconstruction', 'Delivery'],
    sourceRef: {
      unitNumber: 10,
      section: '10.4',
      pageRange: '159-161',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.4, pp. 159–161',
    question: 'Which of the following recommendations is formulated with actionable clarity and institutional specificity?',
    options: [
      {
        id: 'opt-a',
        text: 'Community members should try to be environmentally conscious and voluntarily reduce plastic trash disposal.'
      },
      {
        id: 'opt-b',
        text: 'Government authorities should instantly eliminate all industrial pollution across the province without delay.'
      },
      {
        id: 'opt-c',
        text: 'Schools must eliminate all homework so students have adequate free time to participate in neighborhood cleanups.'
      },
      {
        id: 'opt-d',
        text: 'The Education Agency should mandate dual sorting bins in all public middle school cafeterias by August 2026.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation: 'High-quality policy recommendations specify who must take action, what concrete intervention must be implemented, where, by when, and how it will be resourced.'
  },
  {
    id: 'u10-p-07',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Identifying Directions for Future Inquiry',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.4',
      pageRange: '162-164',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.4, pp. 162–164',
    scenario: 'A student completes an investigation showing that a new gamified math application boosted algebra scores for Grade 10 students over a 6-week trial.',
    question: 'What is a logical and academically fruitful suggestion for "Future Research" stemming from this finding?',
    options: [
      {
        id: 'opt-a',
        text: 'Mathematics instruction should be permanently eliminated from secondary school curricula across the country, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-b',
        text: 'All further educational research into adolescent learning technologies should cease because results are known.'
      },
      {
        id: 'opt-c',
        text: 'Conduct a 12-month longitudinal study to test whether math retention persists after gamification novelty fades.'
      },
      {
        id: 'opt-d',
        text: 'School boards must require all parents to purchase top-tier commercial smartphones for daily homework.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Academic conclusions point toward future research horizons. Testing whether short-term gains endure over long-term retention investigates the durability of findings.'
  },
  {
    id: 'u10-p-08',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Personal Reflection vs. Evidence-Based Conclusion',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.1',
      pageRange: '149-151',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.1, pp. 149–151',
    question: 'In Cambridge Global Perspectives individual reports, how does a student’s "Personal Reflection on Learning" differ from the "Substantive Academic Conclusion"?',
    options: [
      {
        id: 'opt-a',
        text: 'The conclusion answers the question using evidence, while reflection evaluates how research shifted perspectives.'
      },
      {
        id: 'opt-b',
        text: 'There is zero difference; both sections consist of identical summaries of statistical data and graphs, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-c',
        text: 'Personal reflection is assessed solely on grammar, handwriting, and decorative margin illustrations.'
      },
      {
        id: 'opt-d',
        text: 'Reflecting on personal values is strictly prohibited under Cambridge examination assessment guidelines.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation: 'An academic conclusion answers the research question using synthesized evidence. A personal reflection assesses internal cognitive growth—how engaging with diverse viewpoints changed the researcher’s own outlook.'
  },
  {
    id: 'u10-p-09',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Validity vs. Soundness in Conclusions',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 10,
      section: '10.1',
      pageRange: '147-150',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.1, pp. 147–150',
    scenario: 'Argument: "All flying creatures are insects. An eagle is a flying creature. Therefore, an eagle is an insect."',
    question: 'In formal logic and critical reasoning, how should this conclusion be evaluated?',
    options: [
      {
        id: 'opt-a',
        text: 'The syllogism is completely sound and scientifically factual across all biological classifications, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'It represents an invalid inductive generalization that fails to evaluate representative bird species.'
      },
      {
        id: 'opt-c',
        text: 'It is logically valid in deductive structure, but unsound because its first premise is factually false.'
      },
      {
        id: 'opt-d',
        text: 'It commits an Ad Hominem fallacy against ornithologists who study predatory avian flying habits.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation: 'An argument can be structurally valid (the conclusion follows necessarily from the premises) while remaining unsound because one or more premises are factually false in reality.'
  },
  {
    id: 'u10-p-10',
    unitNumber: 10,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Synthesizing Local, National, and Global Implications',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Reconstruction', 'Delivery'],
    sourceRef: {
      unitNumber: 10,
      section: '10.4',
      pageRange: '160-164',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 10.4, pp. 160–164',
    scenario: 'A student conducts an inquiry into mangrove deforestation in a coastal regency in Riau, Indonesia.',
    question: 'How should the final concluding section integrate the implications across Local, National, and Global scales?',
    options: [
      {
        id: 'opt-a',
        text: 'Analyze local coastal fish yields while completely disregarding national environmental statutes and treaties.'
      },
      {
        id: 'opt-b',
        text: 'Claim that coastal mangrove ecosystems flourish identically across every continent including Antarctica.'
      },
      {
        id: 'opt-c',
        text: 'Advise all coastal fishing families to permanently relocate to inland industrial manufacturing cities.'
      },
      {
        id: 'opt-d',
        text: 'Connect local erosion (Local) to national carbon laws (National) and global climate agreements (Global).'
      }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Exemplary Global Perspectives conclusions bridge scales: showing how local field observations (Riau mangrove loss) resonate with national policy debates and global environmental governance frameworks.'
  }
];
