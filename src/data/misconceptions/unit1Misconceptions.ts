/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * PHASE 3B: UNIT 1 MISCONCEPTION REGISTRY & DIAGNOSTIC SCAFFOLDS
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 6–21)
 *
 * STATUS: TEACHER/DEVELOPER DIAGNOSTIC SCAFFOLDS
 * These records define targeted pedagogical diagnostic categories designed
 * for Grade 10 CEFR B1 learners. They are grounded in textbook common error
 * callouts (pp. 7, 8, 13, 16) and Cambridge Examiner report patterns.
 */

import { MisconceptionRecord } from '../../types/practiceGame';

export const UNIT_1_MISCONCEPTIONS: Record<string, MisconceptionRecord> = {
  'misc-opinion-vs-perspective': {
    id: 'misc-opinion-vs-perspective',
    unitNumber: 1,
    concept: 'Perspective Equated with Casual Opinion',
    description:
      'Students assume that any casual feeling, personal taste, or unexamined preference constitutes an academic perspective.',
    triggerCondition:
      'Student treats "I dislike rain" or "I prefer vanilla" as equivalent to a structured perspective, or argues that perspectives require no evidence.',
    feedbackMessage:
      'Clarify that a casual opinion is an unexamined personal feeling, whereas an academic perspective is a coherent, structured viewpoint grounded in shared values, lived experiences, or research evidence.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'locked'
  },

  'misc-perspective-vs-bias': {
    id: 'misc-perspective-vs-bias',
    unitNumber: 1,
    concept: 'Perspective Equated with Unfair Bias',
    description:
      'Students believe that having a perspective means a person is automatically biased, untrustworthy, or incapable of objective reasoning.',
    triggerCondition:
      'Student dismisses any stakeholder\'s argument simply because the stakeholder has an identity, job, or culture.',
    feedbackMessage:
      'Explain that having a perspective is normal and universal because everyone lives in a specific context. Bias occurs only when someone refuses to consider evidence fairly or treats other viewpoints unfairly.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'locked'
  },

  'misc-lens-vs-level': {
    id: 'misc-lens-vs-level',
    unitNumber: 1,
    concept: 'Confusing Analytical Lens (Type) with Scale (Level)',
    description:
      'Students confuse the "what" dimension (Cultural, Economic, Political, Social) with the "where" geographic scale (Personal, Local, National, Global).',
    triggerCondition:
      'Student classifies "Personal" as a type of perspective alongside Economic, or classifies "Economic" as a geographic level.',
    feedbackMessage:
      'Use the tool vs. zoom analogy: The Lens (Type) is the tool you hold (calculator, law book, cultural traditions, social survey); the Level is how far your camera is zoomed in (one person, a town, a nation, the whole planet). Every issue has BOTH.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'locked'
  },

  'misc-single-right-perspective': {
    id: 'misc-single-right-perspective',
    unitNumber: 1,
    concept: 'Single "Right" Answer Fallacy',
    description:
      'Students believe that in complex global challenges, only one perspective is correct and all other perspectives are wrong or malicious.',
    triggerCondition:
      'Student expects an environmental policy to have zero economic or social trade-offs, or rejects stakeholder arguments without considering their context.',
    feedbackMessage:
      'Emphasize that complex global challenges involve multiple legitimate priorities (livelihoods, safety, environment, law). Understanding another viewpoint does not mean agreeing; it means understanding their reasons to find workable solutions.',
    sourceBasis: 'textbook-misunderstanding',
    status: 'locked'
  },

  'misc-stakeholder-is-perspective': {
    id: 'misc-stakeholder-is-perspective',
    unitNumber: 1,
    concept: 'Confusing the Stakeholder with the Perspective',
    description:
      'Students confuse the actor or person holding the view (the stakeholder) with the structured reasoning and values they express (the perspective).',
    triggerCondition:
      'Student identifies "the fisherman" as the perspective, rather than identifying the economic and cultural arguments the fisherman presents.',
    feedbackMessage:
      'Explain that a stakeholder is the person or group affected by an issue; their perspective is the viewpoint, values, and evidence they use to interpret that issue.',
    sourceBasis: 'diagnostic-scaffold',
    status: 'locked'
  },

  'misc-no-overlap-in-conflict': {
    id: 'misc-no-overlap-in-conflict',
    unitNumber: 1,
    concept: 'Zero-Sum Polarization Fallacy',
    description:
      'Students assume that if two stakeholders disagree on a proposal, they share zero common interests and cannot reach a constructive bridge solution.',
    triggerCondition:
      'Student assumes compromise is impossible or insists that one side must completely defeat the other.',
    feedbackMessage:
      'Highlight that even fiercely opposing stakeholders often share foundational goals (such as community safety, long-term economic stability, or clean water). Identifying shared interests enables bridge solutions.',
    sourceBasis: 'diagnostic-scaffold',
    status: 'locked'
  }
};
