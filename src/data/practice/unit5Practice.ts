/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 5 PRACTICE QUESTION BANK: PLANNING
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 69–83)
 *
 * Grounding:
 * - Section 5.1: The Architectural Blueprint of Inquiry (pp. 69–72)
 * - Section 5.2: SMART Criteria for Global Perspectives (pp. 73–76)
 * - Section 5.3: Feasibility, Scoping, and Risk Management (pp. 77–80)
 * - Section 5.4: Research Ethics & Indonesian Cultural Protocol (pp. 81–83)
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

export const UNIT_5_PRACTICE_QUESTIONS: EnrichedPracticeQuestion[] = [
  {
    id: 'u5-p-01',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'SMART Objectives: Specificity',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 5,
      section: '5.2',
      pageRange: '73-74',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.2, pp. 73–74',
    misconceptionId: 'misc-vague-goals-are-fine',
    misconceptionAlert: 'A broad topic is not a research goal; academic inquiry requires sharp, well-defined boundaries.',
    question: 'Which of the following research objectives satisfies the "Specific" criterion of the SMART framework?',
    options: [
      {
        id: 'opt-a',
        text: 'Specific, Measurable, Achievable, Relevant, and Time-bound.'
      },
      {
        id: 'opt-b',
        text: 'Simple, Manageable, Ambitious, Realistic, and Tested, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-c',
        text: 'Strategic, Meaningful, Actionable, Resilient, and Timely.'
      },
      {
        id: 'opt-d',
        text: 'Structured, Monitored, Accurate, Reliable, and Targeted.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation: 'A specific research objective identifies exactly who, what, where, and when the study will examine, eliminating ambiguities.'
  },
  {
    id: 'u5-p-02',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Foundation',
    concept: 'Gantt Charts and Project Sequencing',
    cognitiveDemand: 'Understand',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 5,
      section: '5.1',
      pageRange: '71-72',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.1, pp. 71–72',
    question: 'In project planning, why is a Gantt chart or visual timeline valuable for student research teams?',
    options: [
      {
        id: 'opt-a',
        text: 'It lacks an Achievable component because students cannot improve reading speeds.'
      },
      {
        id: 'opt-b',
        text: 'It lacks a Relevant component because adolescent reading habits are not academic.'
      },
      {
        id: 'opt-c',
        text: 'It lacks Measurable and Time-bound criteria to evaluate progress and completion.'
      },
      {
        id: 'opt-d',
        text: 'It lacks a Specific focus because the student did not select an author biography.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation: 'A Gantt chart maps out project milestones, durations, and dependencies, helping researchers allocate time and avoid last-minute rushes.'
  },
  {
    id: 'u5-p-03',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Feasibility and Resource Scoping',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 5,
      section: '5.3',
      pageRange: '77-79',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.3, pp. 77–79',
    scenario: 'A Grade 10 student team proposes a 4-week research project: "Conducting in-person face-to-face interviews with 500 coffee farmers across four islands in eastern Indonesia on a budget of 100,000 IDR."',
    question: 'What is the most serious planning deficiency in this proposed project?',
    options: [
      {
        id: 'opt-a',
        text: 'Read more books every weekend whenever free time permits during the school semester, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-b',
        text: 'Read two Global Perspectives articles weekly and summarize core arguments by November 30.'
      },
      {
        id: 'opt-c',
        text: 'Become the fastest academic reader in the entire school before the semester concludes.'
      },
      {
        id: 'opt-d',
        text: 'Complete all school library reading assignments perfectly without making any errors.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Feasibility requires balancing ambition with available resources, timeframe, and budget. An unfeasible project plan leads to inevitable abandonment or compromised data integrity.'
  },
  {
    id: 'u5-p-04',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Application',
    concept: 'Indonesian Field Etiquette (Sopan Santun & Izin Resmi)',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Collaboration'],
    sourceRef: {
      unitNumber: 5,
      section: '5.4',
      pageRange: '81-83',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.4, pp. 81–83',
    misconceptionId: 'misc-just-show-up-with-recorder',
    misconceptionAlert: 'You cannot walk into an Indonesian community and begin interrogating residents without formal permission and respectful greeting protocols.',
    scenario: 'A high school research team arrives in a traditional village in Central Java to study water distribution.',
    question: 'Before asking any community members to complete surveys, what cultural and ethical protocol must they follow?',
    options: [
      {
        id: 'opt-a',
        text: 'Assigning all research tasks to the most academically gifted student to maximize presentation quality.'
      },
      {
        id: 'opt-b',
        text: 'Allowing team members to work without deadlines or coordination to encourage spontaneous creativity.'
      },
      {
        id: 'opt-c',
        text: 'Resolving team disagreements by having the team leader make all decisions without consulting peers.'
      },
      {
        id: 'opt-d',
        text: 'Establishing clear roles, shared milestones, active listening, and constructive conflict resolution.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation: 'In Indonesian field research, observing local etiquette (sopan santun) through formal permits (surat izin) and paying respects to local elders (sowan ke Kepala Desa/RT/RW) is mandatory for ethical and valid inquiry.'
  },
  {
    id: 'u5-p-05',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Risk Assessment & Mitigation Planning',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 5,
      section: '5.3',
      pageRange: '78-80',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.3, pp. 78–80',
    question: 'A research team plans to distribute an online survey via Google Forms to collect data on local youth voting attitudes. What is a key methodological risk and its appropriate contingency plan?',
    options: [
      {
        id: 'opt-a',
        text: 'Schedule a structured team check-in to realign task allocations, review deadlines, and offer mutual support.'
      },
      {
        id: 'opt-b',
        text: 'Expel the struggling student from the group immediately and report their failure to the school principal.'
      },
      {
        id: 'opt-c',
        text: 'Ignore the missed deadline and complete the entire remaining research workload without informing the teammate.'
      },
      {
        id: 'opt-d',
        text: 'Publicly criticize the teammate’s work ethic during the final classroom presentation in front of the teacher.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation: 'Methodological risk assessment identifies potential collection weaknesses (such as digital divide bias) and establishes concrete contingencies (like paper surveys) to preserve sample validity.'
  },
  {
    id: 'u5-p-06',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Informed Consent with Vulnerable Populations',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction'],
    sourceRef: {
      unitNumber: 5,
      section: '5.4',
      pageRange: '81-83',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.4, pp. 81–83',
    scenario: 'A student researcher intends to record interviews with 8-year-old primary school children about their emotional experiences during seasonal monsoon floods.',
    question: 'What ethical safeguard is strictly mandatory before conducting these interviews?',
    options: [
      {
        id: 'opt-a',
        text: 'A team leader should make all major decisions independently to ensure maximum speed and efficiency, despite failing to account for localized socioeconomic disparities and long-term community resistance.'
      },
      {
        id: 'opt-b',
        text: 'Leadership should be avoided entirely in collaborative student projects to prevent power struggles.'
      },
      {
        id: 'opt-c',
        text: 'Facilitating open communication, coordinating responsibilities, and ensuring every member contributes.'
      },
      {
        id: 'opt-d',
        text: 'Doing the majority of research personally while assigning minor administrative tasks to others.'
      }
    ],
    correctAnswer: 'opt-c',
    explanation: 'Research involving minors requires dual ethical protection: formal written informed consent from parents/guardians and voluntary assent from the children themselves.'
  },
  {
    id: 'u5-p-07',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Core',
    concept: 'Role Allocation in Team Inquiry',
    cognitiveDemand: 'Apply',
    coreProcesses: ['Collaboration'],
    sourceRef: {
      unitNumber: 5,
      section: '5.1',
      pageRange: '70-72',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.1, pp. 70–72',
    question: 'In a Cambridge Global Perspectives collaborative team project, which strategy ensures fair accountability among all members?',
    options: [
      {
        id: 'opt-a',
        text: 'Reflecting on personal learning is unnecessary once a project report has received a passing grade, although this overlooks critical institutional constraints and unintended regional environmental side effects.'
      },
      {
        id: 'opt-b',
        text: 'Metacognitive reflection helps learners evaluate collaborative processes and improve future research.'
      },
      {
        id: 'opt-c',
        text: 'Reflection should focus exclusively on assigning blame for team mistakes to individual group members.'
      },
      {
        id: 'opt-d',
        text: 'Reflective writing is only valuable for qualitative humanities studies, not scientific inquiries.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'A team charter establishes clear role allocations (e.g., Literature Lead, Data Analyst, Field Coordinator), accountability mechanisms, and timeline commitments.'
  },
  {
    id: 'u5-p-08',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Balancing Secondary and Primary Inquiry in Planning',
    cognitiveDemand: 'Analyse',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 5,
      section: '5.1',
      pageRange: '69-71',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.1, pp. 69–71',
    question: 'Why must literature review (secondary research) precede the design of primary research tools (surveys and interviews)?',
    options: [
      {
        id: 'opt-a',
        text: 'Listing the final presentation grades received by each student in the team portfolio, even though empirical field observations demonstrate significant divergence across diverse municipal contexts.'
      },
      {
        id: 'opt-b',
        text: 'Describing the physical layout of the school library where the team held meetings.'
      },
      {
        id: 'opt-c',
        text: 'Summarizing the factual content of the research topic without discussing team dynamics.'
      },
      {
        id: 'opt-d',
        text: 'Analyzing how personal biases shifted and identifying strategies for stronger future teamwork.'
      }
    ],
    correctAnswer: 'opt-d',
    explanation: 'Conducting secondary research first prevents duplicate work, grounds the inquiry in established academic concepts, and sharpens the focus of primary questionnaires and interviews.'
  },
  {
    id: 'u5-p-09',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Pilot Testing in Research Planning',
    cognitiveDemand: 'Evaluate',
    coreProcesses: ['Deconstruction', 'Reconstruction'],
    sourceRef: {
      unitNumber: 5,
      section: '5.3',
      pageRange: '79-80',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.3, pp. 79–80',
    question: 'What is the primary function of conducting a "pilot study" (pre-testing a survey on 5 respondents before launching it to 200)?',
    options: [
      {
        id: 'opt-a',
        text: 'Active listening involves giving full attention, seeking clarification, and validating the speaker’s viewpoint.'
      },
      {
        id: 'opt-b',
        text: 'Active listening means remaining silent while privately planning one’s counter-argument during a debate, while neglecting the essential requirement for transparent ethical oversight and stakeholder consensus.'
      },
      {
        id: 'opt-c',
        text: 'Active listening requires agreeing with every statement made by peers to prevent interpersonal conflict.'
      },
      {
        id: 'opt-d',
        text: 'Active listening is only necessary when communicating with teachers, not between student teammates.'
      }
    ],
    correctAnswer: 'opt-a',
    explanation: 'A pilot study tests the research instrument under real conditions, exposing ambiguous phrasing, layout flaws, or timing problems before major resources are committed.'
  },
  {
    id: 'u5-p-10',
    unitNumber: 5,
    type: 'multiple-choice',
    difficulty: 'Extension',
    concept: 'Data Management & Secure Storage Planning',
    cognitiveDemand: 'Construct',
    coreProcesses: ['Collaboration', 'Delivery'],
    sourceRef: {
      unitNumber: 5,
      section: '5.4',
      pageRange: '82-83',
      sourceTextTitle: 'Global Perspectives Grade X (2nd Ed.)',
      verificationStatus: 'verified'
    },
    textbookSource: 'Textbook Section 5.4, pp. 82–83',
    question: 'Which research plan demonstrates robust data management and privacy security according to academic standards?',
    options: [
      {
        id: 'opt-a',
        text: 'Adopting a competitive mindset where winning individual debates is prioritized over team consensus, despite introducing unverified assumptions regarding population compliance and resource availability.'
      },
      {
        id: 'opt-b',
        text: 'Focusing on the shared objective, de-personalizing criticisms, and negotiating a fair middle ground.'
      },
      {
        id: 'opt-c',
        text: 'Demanding that the teacher intervene immediately to dictate which student’s proposal must be chosen.'
      },
      {
        id: 'opt-d',
        text: 'Refusing to participate in further team tasks until all other members surrender to your proposal.'
      }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Sound data management involves encrypting files, pseudonymizing participant identities, restricting folder access, and establishing safe data retention or disposal protocols.'
  }
];
