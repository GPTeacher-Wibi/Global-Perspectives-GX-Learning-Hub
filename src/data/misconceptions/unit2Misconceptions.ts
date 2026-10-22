/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3D: UNIT 2 MISCONCEPTION REGISTRY & DIAGNOSTIC SCAFFOLDS
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 22–38)
 *
 * STATUS: TEACHER/DEVELOPER DIAGNOSTIC SCAFFOLDS
 * Grounded in textbook Section 2.1 (p. 23), 2.2 (pp. 26-27), 2.3 (pp. 29-30),
 * 2.4 (pp. 31-36), and 2.5 (pp. 36-38) misconceptions callouts and Cambridge
 * Grade 10 examiner observation patterns.
 */

import { MisconceptionRecord } from '../../types/practiceGame';

export const UNIT_2_MISCONCEPTIONS: Record<string, MisconceptionRecord> = {
  'misc-research-is-googling': {
    id: 'misc-research-is-googling',
    unitNumber: 2,
    concept: 'Research Equated with Web Browsing / Information Retrieval',
    description:
      'Students believe that typing a keyword into Google, copying facts from Wikipedia, or reading articles is conducting authentic scientific research.',
    triggerCondition:
      'Student classifies looking up an already known factual answer (e.g. population of a city) as research inquiry rather than information retrieval.',
    feedbackMessage:
      'Looking up existing facts online is information retrieval (studying). Authentic research begins when you investigate an unanswered question by systematically collecting and analyzing fresh empirical evidence.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-replicability-optional': {
    id: 'misc-replicability-optional',
    unitNumber: 2,
    concept: 'Ignoring Replicability as a Scientific Pillar',
    description:
      'Students fail to recognize that if a study’s steps are not documented clearly enough for an independent scholar to repeat the test, the findings lack scientific credibility.',
    triggerCondition:
      'Student assumes research findings are valid even when the methodology is secret, incomplete, or unrepeatable.',
    feedbackMessage:
      'Replicability is a core pillar of science. If another researcher cannot follow your exact documented steps and test your conclusions, the findings cannot be accepted as reliable knowledge.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-basic-is-useless': {
    id: 'misc-basic-is-useless',
    unitNumber: 2,
    concept: 'Basic Research Dismissed as Useless',
    description:
      'Students assume basic (fundamental) research is a waste of time and money because it aims to understand principles rather than create immediate commercial products.',
    triggerCondition:
      'Student undervalues theoretical inquiry or claims that only applied problem-solving research should receive funding.',
    feedbackMessage:
      'Basic research creates the theoretical foundation of human knowledge. Without decades of basic physics and biology research, applied technologies like smartphones and medical vaccines could never exist.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-applied-only-priority': {
    id: 'misc-applied-only-priority',
    unitNumber: 2,
    concept: 'Applied Research Can Operate Without Fundamental Science',
    description:
      'Students believe applied researchers invent solutions out of thin air without needing basic scientific discoveries.',
    triggerCondition:
      'Student treats applied research as completely separate and superior to theoretical inquiry.',
    feedbackMessage:
      'Applied research translates fundamental discoveries into real-world tools. You cannot apply knowledge that has not yet been discovered through basic inquiry.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-qualitative-unscientific': {
    id: 'misc-qualitative-unscientific',
    unitNumber: 2,
    concept: 'Qualitative Research Dismissed as Unscientific',
    description:
      'Students assume that because qualitative research uses words, stories, and interviews rather than statistical numbers, it is mere storytelling or personal opinion.',
    triggerCondition:
      'Student dismisses interview or observational evidence as unscientific compared to numerical surveys.',
    feedbackMessage:
      'Qualitative research is equally scientific when conducted with structured interview guides, systematic coding, and rigorous reflexivity. It reveals the complex "why" and "how" behind human decisions.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-numbers-tell-everything': {
    id: 'misc-numbers-tell-everything',
    unitNumber: 2,
    concept: 'Numbers Alone Reveal the Full Truth',
    description:
      'Students assume that a percentage or numerical count tells the complete story, ignoring the underlying human reasons, emotions, and cultural contexts.',
    triggerCondition:
      'Student relies solely on numerical metrics to explain complex human choices without investigating participant perspectives.',
    feedbackMessage:
      'Quantitative numbers show WHAT is happening across a group, but qualitative evidence is needed to explain WHY people feel and act that way. Both approaches strengthen one another.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-every-study-has-hypothesis': {
    id: 'misc-every-study-has-hypothesis',
    unitNumber: 2,
    concept: 'Every Single Research Study Requires a Hypothesis',
    description:
      'Students believe that all research projects must start with a formal quantitative hypothesis predicting variable relationships.',
    triggerCondition:
      'Student tries to force a rigid hypothesis onto an exploratory or descriptive qualitative study.',
    feedbackMessage:
      'Hypotheses are used when testing specific theories or relationships between variables. Exploratory and qualitative studies often use open research questions to discover themes without premature predictions.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-topic-equals-question': {
    id: 'misc-topic-equals-question',
    unitNumber: 2,
    concept: 'Confusing a General Topic with a Research Question',
    description:
      'Students mistake a broad subject area (e.g. "Plastic Waste") or a broad moral assertion ("Is pollution bad?") for an investigable, focused research question.',
    triggerCondition:
      'Student writes or selects a question that is too vast, already obvious, or lacks measurable variables and specific scope.',
    feedbackMessage:
      'A topic is a broad subject area. A research question must be focused, specific, investigable, and answerable through evidence within a defined scope.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-lit-review-as-summary': {
    id: 'misc-lit-review-as-summary',
    unitNumber: 2,
    concept: 'Literature Review as a Passive Book Report',
    description:
      'Students treat a literature review as copying paragraphs from websites rather than critically analyzing what is known, disputed, and missing.',
    triggerCondition:
      'Student describes a literature review as simply summarizing articles without identifying research gaps or theoretical frameworks.',
    feedbackMessage:
      'A literature review is not a book report. Its purpose is to map what scholars have already discovered, identify what is still unknown (the research gap), and justify why your study is needed.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-vague-objectives': {
    id: 'misc-vague-objectives',
    unitNumber: 2,
    concept: 'Aspirational Slogans Instead of SMART Objectives',
    description:
      'Students write vague, unmeasurable goals (e.g., "To make everyone happy") instead of operational SMART research objectives.',
    triggerCondition:
      'Student confuses an overarching moral aspiration with concrete research actions.',
    feedbackMessage:
      'Research objectives must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. They state the exact actions the researcher will carry out (e.g., "To measure...", "To compare...").',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-hypothesis-is-wild-guess': {
    id: 'misc-hypothesis-is-wild-guess',
    unitNumber: 2,
    concept: 'Hypothesis Treated as a Wild Random Guess',
    description:
      'Students define a hypothesis as an arbitrary guess rather than a theory-informed, testable, and falsifiable proposition.',
    triggerCondition:
      'Student formulates an unfalsifiable statement or random hunch without theoretical connection.',
    feedbackMessage:
      'A hypothesis is not a wild guess. It is a formal, testable prediction grounded in prior theory and literature, which must be capable of being disproven (falsifiable) by empirical evidence.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-sample-equals-population': {
    id: 'misc-sample-equals-population',
    unitNumber: 2,
    concept: 'Conflating Convenience Sample with Target Population',
    description:
      'Students assume that asking 5 close friends or one classroom allows them to make universal claims about an entire city, nation, or demographic group.',
    triggerCondition:
      'Student overgeneralizes findings from a tiny, non-representative sample to a massive target population.',
    feedbackMessage:
      'The population is the entire group you want to understand; the sample is the specific group you actually study. A tiny convenience sample cannot represent a diverse population without severe bias.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-findings-equal-discussion': {
    id: 'misc-findings-equal-discussion',
    unitNumber: 2,
    concept: 'Conflating Raw Findings with Critical Discussion',
    description:
      'Students confuse the objective presentation of collected data (Findings) with the analytical interpretation of why that data occurred (Discussion).',
    triggerCondition:
      'Student inserts personal speculation into the results section or fails to interpret data in relation to research questions.',
    feedbackMessage:
      'Findings report the objective raw evidence (charts, tables, quotes) neutrally. The Discussion section explains what the evidence means, why it happened, and how it connects to prior literature.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  },

  'misc-research-is-straight-line': {
    id: 'misc-research-is-straight-line',
    unitNumber: 2,
    concept: 'Research Viewed as a Rigid, Inflexible Linear Line',
    description:
      'Students believe research follows an unchangeable 1-to-8 straight line where modifying a question or refining a survey after testing means the study failed.',
    triggerCondition:
      'Student considers iterative refinement or adjusting methods after pilot tests as a sign of research failure.',
    feedbackMessage:
      'Research is an iterative cycle, not a rigid one-way street. Skilled researchers continuously refine their questions, tools, and samples as they uncover new insights during the investigation.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'validated'
  }
};
