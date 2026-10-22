/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 7 CAPSTONE CHALLENGE DATA: REASONING UNDER PRESSURE
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 91–103)
 *
 * Grounding:
 * - Section 7.1: The Architecture of Reasoning: Premises & Conclusions (pp. 91–93)
 * - Section 7.2: The Three Modes of Logic: Deductive, Inductive & Abductive (pp. 93–96)
 * - Section 7.3: Stephen Toulmin's Argumentation Model (Claim, Grounds, Warrant, Backing, Qualifier, Rebuttal) (pp. 96–100)
 * - Section 7.4: Logical Fallacies: Straw Man, Ad Hominem, Hasty Generalization, False Cause, False Dilemma (pp. 99–103)
 * - Section 7.5: Reconstructing Nuanced, Defensible Policy Arguments (pp. 102–103)
 *
 * Target Demographic: Grade 10 Cambridge Global Perspectives (CEFR B1 English)
 * Educational Philosophy: "Rigorous analytical logic, fair rebuttals, and intellectual honesty under pressure"
 */

export interface CapstoneDecisionOption {
  id: string;
  label: string;
  description: string;
  score: number; // Optimal: 160, Partial: 80, Weak: 30
  feedback: string;
  isOptimal: boolean;
  academicReasoning: string;
}

export interface CapstoneStage {
  stageNumber: number;
  stageKey: string;
  title: string;
  concept: string;
  textbookRef: string;
  scenarioHeading: string;
  scenarioBody: string;
  evidenceData?: {
    label: string;
    items: { key: string; value: string; note?: string }[];
  };
  prompt: string;
  options: CapstoneDecisionOption[];
}

export interface CapstoneMissionData {
  id: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  caseSetting: string;
  overview: string;
  maxScore: number;
  stages: CapstoneStage[];
}

export const UNIT_7_CAPSTONE_DATA: CapstoneMissionData = {
  id: 'g7-capstone',
  unitNumber: 7,
  title: 'Reasoning Under Pressure',
  subtitle: 'The School Committee Hearing on Generative AI in Secondary Learning',
  caseSetting: 'SMA Harapan Bangsa Academic Standards & Policy Hearing (West Java)',
  overview:
    'A high-stakes special hearing has been convened to determine the school’s official policy on student use of Generative AI tools (such as ChatGPT, Claude, and writing assistants). Teachers, student leaders, parents, and academic scholars present competing arguments filled with passionate rhetoric, empirical claims, and logical fallacies. As Student Judicial Analyst, you must navigate heated debate, deconstruct premises and conclusions, expose deductive and inductive reasoning gaps, dismantle rhetorical fallacies, formulate principled Toulmin rebuttals, and synthesize an airtight, evidence-based policy recommendation.',
  maxScore: 800, // 5 stages * 160 max points
  stages: [
    // ------------------------------------------------------------------------
    // STAGE 1: RECONSTRUCT THE ARGUMENT
    // ------------------------------------------------------------------------
    {
      stageNumber: 1,
      stageKey: 'reconstruct-the-argument',
      title: 'Stage 1: Deconstructing Premises, Warrants & Conclusions',
      concept: 'Premise vs. Conclusion vs. Warrant Identification',
      textbookRef: 'Textbook Section 7.1 & 7.3 (pp. 91–98)',
      scenarioHeading: 'Analyzing Senior Faculty Testimony',
      scenarioBody:
        'During the opening session, Mr. Bambang, a senior literature teacher with 25 years of experience, addresses the hearing panel: "When students rely on automated AI text generators to draft their essays, they completely bypass the essential cognitive struggle of formulating ideas and synthesizing conflicting viewpoints. Peer-reviewed neurocognitive studies show that deep analytical reasoning develops only when adolescents struggle through reading, drafting, and revising dense texts independently. Therefore, unrestricted generative AI essay creation inevitably degrades students\' capacity for independent critical thought."',
      evidenceData: {
        label: 'Verbatim Hearing Excerpt (Mr. Bambang)',
        items: [
          {
            key: 'Statement A',
            value: '"Students completely bypass the cognitive struggle of formulating ideas and synthesizing conflicting viewpoints."',
            note: 'Operational Observation / Factual Premise 1.'
          },
          {
            key: 'Statement B',
            value: '"Neurocognitive studies show that analytical reasoning develops only when adolescents struggle through independent writing."',
            note: 'Scientific Evidence / Backing.'
          },
          {
            key: 'Statement C',
            value: '"Unrestricted generative AI essay creation inevitably degrades students\' capacity for independent critical thought."',
            note: 'Ultimate Proposition the speaker wants the committee to adopt.'
          }
        ]
      },
      prompt:
        'How should the Student Judicial Analyst formally classify the logical structure of Mr. Bambang’s argument?',
      options: [
        {
          id: 'opt-1a',
          label: 'Classify Statement C as the Main Conclusion, supported by Statements A and B as premises.',
          description:
            'Identify that Statement C ("Unrestricted generative AI essay creation inevitably degrades students\' capacity for independent critical thought") is the primary claim, while Statement A (cognitive bypass) and Statement B (neurocognitive evidence) serve as the supporting premises and empirical warrant.',
          score: 160,
          isOptimal: true,
          feedback:
            'Flawless structural reconstruction! Statement C is the ultimate thesis that Mr. Bambang wants the panel to accept. Statements A and B are the factual premises and empirical backing that establish the logical bridge.',
          academicReasoning:
            'In academic logic (Textbook Section 7.1), the conclusion is the overarching assertion being proven, whereas premises provide the factual and empirical grounds. Recognizing the conclusion even without obvious signal words is essential for critical deconstruction.'
        },
        {
          id: 'opt-1b',
          label: 'Classify Statement B as the Main Conclusion because it cites published scientific neurocognitive studies.',
          description:
            'Argue that the scientific research in Statement B is the conclusion because peer-reviewed neuroscience is the most authoritative statement in the speech.',
          score: 80,
          isOptimal: false,
          feedback:
            'Confuses empirical evidence with the conclusion. While Statement B is authoritative, it functions as the supporting evidence (grounds) in Toulmin’s model, not the speaker’s ultimate policy claim.',
          academicReasoning:
            'Scientific citations serve as grounds/backing (Textbook Section 7.3). An author’s ultimate claim cannot be confused with the evidence marshaled to support it.'
        },
        {
          id: 'opt-1c',
          label: 'Declare that Mr. Bambang’s conclusion is that all school computers and internet must be shut down.',
          description:
            'Conclude that the speaker wants an immediate total ban on all digital technology across the entire school campus.',
          score: 30,
          isOptimal: false,
          feedback:
            'Severe misattribution error! Mr. Bambang argued specifically against unrestricted AI essay generation; extrapolating to a total ban on all school computers and internet introduces an unstated distortion (Straw Man).',
          academicReasoning:
            'Analysts must restrict their evaluation to the explicit scope of an argument. Fabricating extreme unstated conclusions violates analytical objectivity (Textbook Section 7.1).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 2: TEST THE REASONING
    // ------------------------------------------------------------------------
    {
      stageNumber: 2,
      stageKey: 'test-the-reasoning',
      title: 'Stage 2: Evaluating Validity, Evidence Gaps & Assumptions',
      concept: 'Inductive Generalization vs. Non Sequitur & Unsupported Certainty Leaps',
      textbookRef: 'Textbook Section 7.2 & 7.4 (pp. 93–96, 101–103)',
      scenarioHeading: 'Auditing the Student Council Representative’s Case',
      scenarioBody:
        'Next, student council representative Kenji delivers an impassioned presentation: "Our survey of 45 Grade 10 students found that 85% use AI tools to summarize complex academic research articles, and 80% reported finishing their homework assignments faster. Furthermore, educational ministries in Singapore and South Korea have launched nationwide AI literacy curricula. Therefore, allowing our students to freely use AI tools for all homework and assignments will guaranteed make our high school the top-performing academic institution in West Java!"',
      evidenceData: {
        label: 'Kenji\'s Argument Architecture Audit',
        items: [
          {
            key: 'Premise 1',
            value: 'Local sample of 45 Grade 10 students: 85% summarize articles with AI; 80% finish faster.',
            note: 'Measures self-reported speed and usage, but not conceptual depth or retention.'
          },
          {
            key: 'Premise 2',
            value: 'Singapore and South Korea have launched national AI literacy programs.',
            note: 'National-level curricular initiative with structured teacher training and safeguards.'
          },
          {
            key: 'Claimed Conclusion',
            value: '"Will guaranteed make our high school the top-performing institution in West Java."',
            note: 'Absolute certainty claim ("guaranteed") linking speed with academic excellence.'
          }
        ]
      },
      prompt:
        'What is the primary reasoning defect that invalidates Kenji’s sweeping conclusion?',
      options: [
        {
          id: 'opt-2a',
          label: 'Expose the massive Non Sequitur and false leap from homework completion speed to guaranteed top academic ranking.',
          description:
            'Demonstrate that finishing homework faster does not equate to deep intellectual mastery, and that foreign national curricula do not guarantee local regional supremacy. Kenji commits a classic Non Sequitur and unjustified leap of certainty.',
          score: 160,
          isOptimal: true,
          feedback:
            'Superb logical critique! Kenji makes multiple unjustified inferential leaps: (1) completing homework faster is mistaken for deeper conceptual learning, (2) foreign national policies are assumed to work identically without local teachers, and (3) a small 45-student survey cannot support a "guaranteed" top provincial ranking.',
          academicReasoning:
            'In inductive logic (Textbook Section 7.2), premises must provide sufficient probability for the conclusion. Moving from speed to guaranteed academic supremacy is a Non Sequitur with zero causal bridge.'
        },
        {
          id: 'opt-2b',
          label: 'Reject the argument solely on the basis that 45 students is a tiny sample size.',
          description:
            'Argue that Kenji’s entire presentation is invalid exclusively because surveying 45 students is an inadequate sample size for any conclusion.',
          score: 80,
          isOptimal: false,
          feedback:
            'Partially valid point regarding sample size, but misses the core structural defect. Even if Kenji had surveyed 500 students, the logical leap from speed to guaranteed academic ranking would remain completely broken.',
          academicReasoning:
            'While sample size affects inductive confidence (Hasty Generalization), the fatal defect here is the lack of logical connection between homework speed and high school ranking (Non Sequitur) (Textbook Section 7.1).'
        },
        {
          id: 'opt-2c',
          label: 'Dismiss Kenji’s argument because student council representatives are biased in favor of students.',
          description:
            'Claim that because Kenji is a student, his motives are inherently self-serving and his data should be discarded without examination.',
          score: 30,
          isOptimal: false,
          feedback:
            'Fallacious reasoning! Rejecting an argument based on the speaker’s identity or role rather than analyzing their logical structure is an Ad Hominem fallacy.',
          academicReasoning:
            'Critical analysts evaluate the validity of premises and conclusions, not the personal demographic of the speaker (Textbook Section 7.4).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 3: DIAGNOSE THE REASONING ERROR
    // ------------------------------------------------------------------------
    {
      stageNumber: 3,
      stageKey: 'diagnose-the-reasoning-error',
      title: 'Stage 3: Logical Fallacy Detection Under Debate Pressure',
      concept: 'Straw Man vs. Ad Hominem vs. False Dilemma in Public Debates',
      textbookRef: 'Textbook Section 7.4 (pp. 99–103)',
      scenarioHeading: 'Auditing Contentious Floor Statements',
      scenarioBody:
        'During the public question-and-answer period, tensions rise and several speakers deploy manipulative debate tricks. The panel needs to identify these distortions so they do not taint the official policy report.',
      evidenceData: {
        label: 'Dossier of Contentious Floor Statements',
        items: [
          {
            key: 'Statement A (Parent Association Chair)',
            value: '"Anyone on this committee who supports AI tools in our school is essentially trying to eliminate human teachers and wants our children to turn into brainless zombies who cannot do basic mental arithmetic!"',
            note: 'Exaggerates the opposing position into an extreme, terrifying caricature.'
          },
          {
            key: 'Statement B (Coding Club President)',
            value: '"Mr. Bambang is over 50 years old and still writes with a fountain pen, so his opinions on digital technology and AI are totally useless relics of the past."',
            note: 'Attacks age and personal habits rather than addressing arguments.'
          },
          {
            key: 'Statement C (Private Tutor Lobbyist)',
            value: '"Either our school permits 100% unrestricted AI use in every classroom, or our graduates will end up unemployed and destitute in the modern economy!"',
            note: 'Forces a binary choice between total freedom and total economic catastrophe.'
          }
        ]
      },
      prompt:
        'Which statement represents a classic Straw Man Fallacy, and why does this tactic violate sound argumentation?',
      options: [
        {
          id: 'opt-3a',
          label: 'Diagnose Statement A as a textbook Straw Man Fallacy that distorts the pro-AI stance into an absurd caricature.',
          description:
            'Explain that Statement A replaces the nuanced proposal of using AI as a guided research aid with an extreme, horrifying substitute ("eliminating teachers" and "turning kids into brainless zombies"), attacking a ridiculous scarecrow that nobody proposed.',
          score: 160,
          isOptimal: true,
          feedback:
            'Flawless fallacy diagnosis! The parent chair creates an exaggerated, grotesque parody of the opposing view (destroying teachers, creating zombies) because it is much easier to attack a ridiculous scarecrow than to debate the actual merits of guided AI research tools.',
          academicReasoning:
            'A Straw Man fallacy (Textbook Section 7.4) misrepresents or caricatures an opponent’s argument to make it easily defeated. Critical thinkers always demand attacking what was actually stated.'
        },
        {
          id: 'opt-3b',
          label: 'Diagnose Statement B as a Straw Man because fountain pens are outdated.',
          description:
            'Argue that Statement B is a Straw Man because discussing fountain pens in an AI debate is an unfair comparison.',
          score: 80,
          isOptimal: false,
          feedback:
            'Incorrect fallacy classification. Statement B is an Ad Hominem attack: it attacks Mr. Bambang’s personal age and writing instruments instead of evaluating his arguments on cognitive development.',
          academicReasoning:
            'Attacking a person’s age or personal traits is Ad Hominem (Textbook Section 7.4), not Straw Man.'
        },
        {
          id: 'opt-3c',
          label: 'Diagnose Statement C as a Straw Man because unemployment is scary.',
          description:
            'Claim that Statement C is a Straw Man because talking about unemployment exaggerates the consequences of the policy.',
          score: 30,
          isOptimal: false,
          feedback:
            'Incorrect fallacy identification. Statement C is a False Dilemma (Either-Or fallacy): it artificially reduces a complex policy continuum into only two extreme poles (unrestricted AI vs. destitution), deliberately ignoring intermediate policies.',
          academicReasoning:
            'A False Dilemma artificially restricts options to two polar extremes (Textbook Section 7.4), whereas a Straw Man distorts the content of an opponent’s thesis.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 4: BUILD A FAIR REBUTTAL
    // ------------------------------------------------------------------------
    {
      stageNumber: 4,
      stageKey: 'build-a-fair-rebuttal',
      title: 'Stage 4: Constructing a Principled Toulmin Rebuttal',
      concept: 'Toulmin Rebuttal Architecture: Addressing Warrants & Conceding Valid Points',
      textbookRef: 'Textbook Section 7.3 (pp. 96–100)',
      scenarioHeading: 'Responding to the Science Department Chair',
      scenarioBody:
        'Dr. Ratna, Head of the Science Department, presents a formidable empirical argument against student AI adoption: "Large Language Models are probabilistic next-token predictors that possess zero understanding of the physical world. In documented trials, they frequently hallucinate fabricated scientific citations, invent nonexistent chemical reactions, and output completely inaccurate calculations with supreme confidence. Because AI tools can never be 100% verified by novice students, allowing their use in science classes actively sabotages the scientific method."',
      evidenceData: {
        label: 'Deconstruction of Dr. Ratna\'s Core Argument',
        items: [
          {
            key: 'Empirical Evidence',
            value: 'Documented LLM hallucinations, fake academic citations, and flawed chemical calculations.',
            note: 'Factually accurate and scientifically verified limitation of current generative AI.'
          },
          {
            key: 'Implicit Warrant',
            value: 'If an instructional tool produces occasional errors, it has zero educational value in school.',
            note: 'Vulnerable assumption: can learning occur by teaching students to detect and audit errors?'
          },
          {
            key: 'Absolute Conclusion',
            value: '"Allowing their use in science classes actively sabotages the scientific method."',
            note: 'Sweeping prohibition without considering guided verification training.'
          }
        ]
      },
      prompt:
        'Which response represents the strongest, most intellectually honest Toulmin rebuttal to Dr. Ratna’s argument?',
      options: [
        {
          id: 'opt-4a',
          label: 'Acknowledge the hallucination risk, but demonstrate that auditing AI errors actively trains high-level verification skills.',
          description:
            'Formulate: "While Dr. Ratna is scientifically correct that LLMs hallucinate citations and cannot be trusted blindly, this very vulnerability offers a profound pedagogical opportunity: instead of banning AI, science curricula should task students with fact-checking and debunking AI outputs against peer-reviewed lab databases, transforming verification into an authentic training ground for the scientific method."',
          score: 160,
          isOptimal: true,
          feedback:
            'Masterclass in Toulmin rebuttal architecture! You conceded Dr. Ratna’s valid empirical evidence (hallucinations are real), but directly challenged her underlying warrant (that imperfect tools have zero educational value) by reframing AI critique as an active vehicle for scientific verification.',
          academicReasoning:
            'A sophisticated Toulmin rebuttal (Textbook Section 7.3) never denies proven facts; it engages with the warrant and introduces qualifiers that turn an opponent\'s objection into a stronger, higher-order solution.'
        },
        {
          id: 'opt-4b',
          label: 'Claim that Dr. Ratna is exaggerating and that next-generation AI models never make factual mistakes.',
          description:
            'Formulate: "Dr. Ratna’s concerns are outdated because new AI versions have achieved 99% accuracy and no longer hallucinate scientific citations."',
          score: 80,
          isOptimal: false,
          feedback:
            'Factually inaccurate and intellectually fragile. Denying the established reality of AI hallucinations destroys your credibility before a scientific committee and relies on blind technological optimism.',
          academicReasoning:
            'Denying verified evidence makes an argument unsound. Effective debate requires accommodating real-world limitations rather than pretending they do not exist (Textbook Section 7.1).'
        },
        {
          id: 'opt-4c',
          label: 'Argue that banning AI is useless because students will simply cheat at home on their private phones anyway.',
          description:
            'Formulate: "There is no point in listening to Dr. Ratna because students will just sneak and use ChatGPT in their bedrooms, so the school might as well surrender."',
          score: 30,
          isOptimal: false,
          feedback:
            'Defeatist and academically hollow. Responding with "students will cheat anyway" fails to address Dr. Ratna’s scientific argument, evades curriculum design, and abandons educational ethics entirely.',
          academicReasoning:
            'Pragmatic fatalism ("people will break the rule anyway") is not a logical rebuttal to an academic question of pedagogical validity (Textbook Section 7.3).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 5: MAKE A JUSTIFIED RECOMMENDATION
    // ------------------------------------------------------------------------
    {
      stageNumber: 5,
      stageKey: 'make-justified-recommendation',
      title: 'Stage 5: Synthesizing an Evidence-Based Policy Recommendation',
      concept: 'Toulmin Synthesis: Integrating Evidence, Qualifiers & Limitations',
      textbookRef: 'Textbook Section 7.3 & 7.5 (pp. 96–103)',
      scenarioHeading: 'Drafting the Official School AI Policy Guideline',
      scenarioBody:
        'The hearing draws to a close. The committee must formulate an official, binding policy recommendation for Grade 10 Global Perspectives and humanities courses. The committee dossier contains four established empirical realities that must be balanced.',
      evidenceData: {
        label: 'Final Committee Evidence Dossier',
        items: [
          {
            key: 'Finding 1 (Student Behavior)',
            value: '72% of Grade 10 students already use AI informally without academic guidance or citation.',
            note: 'Demonstrates that pretending AI does not exist creates an unregulated shadow environment.'
          },
          {
            key: 'Finding 2 (Faculty Audit)',
            value: '28% of unguided student submissions contained verbatim unreferenced AI prose (plagiarism).',
            note: 'Confirms that completely unrestricted use without accountability undermines integrity.'
          },
          {
            key: 'Finding 3 (Global Assessment Standard)',
            value: 'Cambridge International allows AI for research provided students cite prompts and verify claims.',
            note: 'Authoritative international benchmark favoring transparent disclosure over prohibition.'
          },
          {
            key: 'Finding 4 (Socioeconomic Equity)',
            value: '18% of scholarship students lack home broadband or paid subscription tools.',
            note: 'Requires that any mandatory AI coursework must be fully supported by campus computer labs.'
          }
        ]
      },
      prompt:
        'Which policy recommendation represents the most defensible, appropriately qualified synthesis of the evidence dossier?',
      options: [
        {
          id: 'opt-5a',
          label: 'Adopt a "Transparent Guided Integration" policy with mandatory prompt disclosure, lab equity, and a 1-semester trial audit.',
          description:
            'Recommend: (1) Permit AI as a research and brainstorming aid, but strictly prohibit AI generation of final prose; (2) Require mandatory "AI Disclosure Statements" detailing prompts and verification logs in all submissions; (3) Guarantee campus lab access for all students to eliminate socioeconomic inequality; and (4) Establish a 1-semester trial with pre- and post-testing to audit impact on independent critical thinking.',
          score: 160,
          isOptimal: true,
          feedback:
            'A masterpiece of sound academic reasoning and policy synthesis! This recommendation integrates all four evidence points: it brings the 72% informal usage into daylight, prevents the 28% plagiarism through mandatory disclosure logs, aligns with Cambridge international standards, protects scholarship students through guaranteed lab access, and includes a cautious trial audit with qualifiers.',
          academicReasoning:
            'Section 7.5 teaches that the highest achievement of reasoning is synthesizing conflicting evidence into a balanced, qualified, and testable policy that avoids extreme dogmatism while upholding core academic integrity.'
        },
        {
          id: 'opt-5b',
          label: 'Impose an absolute total ban on all AI tools, enforcing it through punitive AI-detection scanning software.',
          description:
            'Recommend: Institute a zero-tolerance ban on all AI software on campus, purchase commercial automated AI detectors, and automatically fail any student whose paper scores above 20% on detection software.',
          score: 80,
          isOptimal: false,
          feedback:
            'Fragile and scientifically vulnerable policy. AI detection software suffers from notorious false-positive rates (especially against non-native English writers) and ignores the reality that 72% of students already use AI at home, driving usage underground rather than teaching critical literacy.',
          academicReasoning:
            'A total ban ignores Cambridge international guidance and relies on fallible automated detectors, failing to address the educational necessity of digital literacy (Textbook Section 7.5).'
        },
        {
          id: 'opt-5c',
          label: 'Permit complete, unregulated AI use across all assignments with zero disclosure requirements.',
          description:
            'Recommend: Declare that AI is the future of human civilization and allow students to submit any AI-generated text without disclosure, trusting that students will learn naturally.',
          score: 30,
          isOptimal: false,
          feedback:
            'Irresponsible capitulation that abandons academic integrity. Completely unguided submission of AI text directly fuels the 28% plagiarism rate, bypasses critical thinking development, and violates Cambridge assessment criteria.',
          academicReasoning:
            'Unregulated adoption ignores empirical evidence of learning degradation (Mr. Bambang’s premise) and abdicates the school\'s core mission of fostering independent analytical intellect (Textbook Section 7.1).'
        }
      ]
    }
  ]
};
