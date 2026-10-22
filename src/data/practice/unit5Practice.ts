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
      { id: 'opt-a', text: 'To study poverty around the world and make things better', explanation: 'Too broad and vague; lacks geographical boundaries, target groups, or measurable focus.' },
      { id: 'opt-b', text: 'To investigate how microcredit loans affect female household income in Sleman Regency between 2020 and 2024', explanation: 'Clearly defines target group (female recipients), specific intervention (microcredit), location (Sleman Regency), and timeframe (2020–2024).' },
      { id: 'opt-c', text: 'To learn everything there is to know about the economy', explanation: 'Vague aspiration, not an actionable research objective.' },
      { id: 'opt-d', text: 'To write a very good paper for my Grade 10 teacher', explanation: 'Personal school goal, not an empirical research inquiry objective.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'It automatically writes the essay bibliography', explanation: 'Bibliographies are citation reference lists, not timeline tools.' },
      { id: 'opt-b', text: 'It displays task dependencies, start and end dates, and prevents critical deadline bottlenecks', explanation: 'A Gantt chart illustrates sequential task dependencies and duration, ensuring milestones are scheduled realistically.' },
      { id: 'opt-c', text: 'It guarantees that every team member receives 100% on their report', explanation: 'No planning chart guarantees academic grading outcomes.' },
      { id: 'opt-d', text: 'It proves that primary data collection is unnecessary', explanation: 'Planning schedules primary collection; it does not replace it.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'Coffee farming is not a global topic', explanation: 'Coffee farming involves agricultural commodity chains, fair trade, and climate change, which are global issues.' },
      { id: 'opt-b', text: 'The scope is completely unfeasible given the team’s budget, travel constraints, and 4-week deadline', explanation: 'Visiting 500 farmers across 4 islands within 4 weeks on 100,000 IDR is logistically and financially impossible.' },
      { id: 'opt-c', text: 'Interviews cannot be used in Global Perspectives projects', explanation: 'Interviews are a prime qualitative research method.' },
      { id: 'opt-d', text: 'The team should have chosen tea farming instead', explanation: 'Subject preference does not address the core planning flaw of unfeasibility.' }
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
      { id: 'opt-a', text: 'Distribute surveys immediately at the market without speaking to village leaders', explanation: 'Bypassing local leaders violates Indonesian community etiquette and causes mistrust.' },
      { id: 'opt-b', text: 'Present a formal research permit (Surat Izin) to the village head (Kepala Desa / RT / RW) and observe respectful greeting protocols (sowan / silaturahmi)', explanation: 'Respectful protocol requires obtaining official community permission (izin resmi) and conducting introductory courteous meetings (sowan) before collecting data.' },
      { id: 'opt-c', text: 'Record village residents secretly with a hidden camera to ensure natural behavior', explanation: 'Secret recording violates informed consent and research ethics.' },
      { id: 'opt-d', text: 'Offer cash payments of 1 million IDR to anyone who agrees to answer questions', explanation: 'Excessive cash inducements distort participant responses and are unethical in student research.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'Risk: Forms app will crash; Contingency: Abandon the project entirely', explanation: 'Abandoning a project is not a constructive mitigation plan.' },
      { id: 'opt-b', text: 'Risk: Low digital response rate and sampling bias toward tech-connected urban students; Contingency: Supplement with paper surveys distributed across diverse community youth centers', explanation: 'Anticipating digital response bias and preparing physical paper alternatives ensures demographic representation.' },
      { id: 'opt-c', text: 'Risk: Students will answer too fast; Contingency: Add 500 extra questions', explanation: 'Lengthening surveys causes respondent fatigue and reduces response rates.' },
      { id: 'opt-d', text: 'Risk: The internet will disappear forever; Contingency: Use carrier pigeons', explanation: 'Unrealistic and non-academic scenario.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'Giving each child candy so they agree to speak on camera', explanation: 'Coercing minors with treats violates ethical standards.' },
      { id: 'opt-b', text: 'Securing signed informed consent from parents or legal guardians in addition to the child’s own verbal assent', explanation: 'Minors cannot legally grant independent consent; parental/guardian consent plus child assent is mandatory.' },
      { id: 'opt-c', text: 'Only interviewing the children while they are taking their final math exam', explanation: 'Disrupting school examinations is inappropriate and invalid.' },
      { id: 'opt-d', text: 'Publishing the videos directly on social media to raise awareness', explanation: 'Broadcasting minors’ faces and emotional trauma violates privacy and protection mandates.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'Assigning all research, writing, and presentation work to the top student in the group', explanation: 'Overburdening one member creates inequity and denies others learning opportunities.' },
      { id: 'opt-b', text: 'Establishing a clear Team Charter defining individual roles, task milestones, and mutual evaluation rubrics', explanation: 'A structured team charter sets expectations, roles, deadlines, and mutual accountability transparently.' },
      { id: 'opt-c', text: 'Refusing to talk to team members until the final presentation day', explanation: 'Lack of communication guarantees project failure.' },
      { id: 'opt-d', text: 'Allowing members to submit four completely unrelated essays on different topics', explanation: 'Collaborative projects require unified coordination on a shared inquiry focus.' }
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
      { id: 'opt-a', text: 'Because primary research is illegal without reading at least 50 textbooks first', explanation: 'No legal ban exists; it is a pedagogical and methodological sequence.' },
      { id: 'opt-b', text: 'Because reading existing research reveals validated frameworks, prevents reinventing known answers, and identifies genuine questions worth asking', explanation: 'Secondary research establishes what is already known, ensuring that primary tools target real knowledge gaps with valid questions.' },
      { id: 'opt-c', text: 'Because primary data collection takes only five minutes to complete', explanation: 'Primary data collection often requires weeks of preparation and fieldwork.' },
      { id: 'opt-d', text: 'Because secondary literature automatically writes the questionnaire questions without human input', explanation: 'Researchers must design their own tailored inquiry tools.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'To collect all the final data in secret', explanation: 'A pilot study is a trial run to test the tool, not the full data collection.' },
      { id: 'opt-b', text: 'To detect confusing wording, ambiguous choices, or technical glitches so the survey can be refined before full deployment', explanation: 'Pre-testing catches confusing phrasing, formatting errors, or unintended biases before launching the full survey.' },
      { id: 'opt-c', text: 'To ensure all 5 pilot respondents give answers the researcher likes', explanation: 'Fixing results undermines scientific objectivity.' },
      { id: 'opt-d', text: 'To avoid having to write a research methodology chapter', explanation: 'Pilot testing is documented within the methodology chapter as evidence of rigorous preparation.' }
    ],
    correctAnswer: 'opt-b',
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
      { id: 'opt-a', text: 'Saving audio recordings on a public shared school computer desktop named "Confidential Audio"', explanation: 'Public shared computers lack access control and invite severe data breaches.' },
      { id: 'opt-b', text: 'Storing encrypted files on password-protected cloud drives, separating identifying participant keys from response data, and setting a scheduled deletion date post-examination', explanation: 'Encryption, pseudonymization (de-linking names from data), and retention scheduling represent best-practice research data security.' },
      { id: 'opt-c', text: 'Writing all interview responses on sticky notes and sticking them to the classroom whiteboard', explanation: 'Displays private responses in plain view of peers.' },
      { id: 'opt-d', text: 'Sharing interview transcripts on public WhatsApp group chats with 100 members', explanation: 'Blatant violation of participant confidentiality and data privacy.' }
    ],
    correctAnswer: 'opt-b',
    explanation: 'Sound data management involves encrypting files, pseudonymizing participant identities, restricting folder access, and establishing safe data retention or disposal protocols.'
  }
];
