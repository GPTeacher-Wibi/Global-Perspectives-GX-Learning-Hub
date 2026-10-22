/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 10 CAPSTONE CHALLENGE DATA: FINAL CONCLUSION BOARD
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 132–144)
 *
 * Grounding:
 * - Section 10.1: The Culmination of Inquiry: What is an Academic Conclusion? (pp. 132–134)
 * - Section 10.2: The Three Structural Pillars: Direct Answer, Synthesis & Actionable Recommendations (pp. 133–135)
 * - Section 10.3: Internal vs. External Validity & Confounding Variables (pp. 136–138)
 * - Section 10.4: Determining the Hypothesis's Fate: Supported, Refuted, Modified (pp. 138–140)
 * - Section 10.5: Slaying the 4 Fatal Conclusion Defects: Sudden Miracle Fact, Mechanical Copy-Paste,
 *                 Overreaching Leaps & Wishful Thinking Preaching (pp. 141–143)
 * - Section 10.6: Transparently Acknowledging Research Limitations with Scholarly Humility (pp. 142–144)
 *
 * Target Demographic: Grade 10 Cambridge Global Perspectives (CEFR B1 English)
 * Educational Philosophy: "Scholarly synthesis, epistemic humility, and actionable recommendations over fast clicking"
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

export const UNIT_10_CAPSTONE_DATA: CapstoneMissionData = {
  id: 'g10-capstone',
  unitNumber: 10,
  title: 'Final Conclusion Board',
  subtitle: 'The Secondary School Sustainability Initiative Evaluation',
  caseSetting: 'SMA Mandiri Green Campus & Canteen Waste Audit Taskforce',
  overview:
    'A student research team has completed a 6-week trial of a comprehensive school sustainability initiative: introducing organic compost bins, reusable canteen tumblers, and waste-sorting stations. Before submitting their final Cambridge research portfolio and presenting to the school board of governors, the team must synthesize their empirical findings. The data reveals mixed realities: single-use plastic cups dropped significantly, but food waste remained completely flat, participation was uneven, and an unexpected canteen supply shortage occurred during Week 4. As Lead Peer Review Examiner, you must guide the team across five judicial stages to distinguish data from interpretation, audit internal and external validity, decide the hypothesis\'s fate, construct an airtight 3-Pillar conclusion, and neutralize the 4 fatal conclusion defects.',
  maxScore: 800, // 5 stages * 160 max points
  stages: [
    // ------------------------------------------------------------------------
    // STAGE 1: MATCH FINDINGS TO EVIDENCE
    // ------------------------------------------------------------------------
    {
      stageNumber: 1,
      stageKey: 'match-findings-to-evidence',
      title: 'Stage 1: Distinguishing Findings from Interpretations',
      concept: 'Data-Driven Interpretations vs. Unsupported Extrapolations',
      textbookRef: 'Textbook Section 10.1 & 10.2 (pp. 132–135)',
      scenarioHeading: 'Auditing the 6-Week Empirical Trial Log',
      scenarioBody:
        'The student team presents their final data dashboard after 6 weeks of observation across 420 students and 4 canteen stalls. Several enthusiastic team members propose claiming that "the initiative has permanently solved school waste and transformed student environmental morality."',
      evidenceData: {
        label: 'SMA Mandiri 6-Week Waste Audit Results',
        items: [
          {
            key: 'Single-Use Plastic Tonnage',
            value: 'Dropped by 32% (from 145 kg/week in Week 1 to 98.6 kg/week in Week 6).',
            note: 'Statistically verified reduction in plastic packaging.'
          },
          {
            key: 'Organic Compost Production',
            value: 'Compost tumbler generated 82 kg of verified rich organic soil additive.',
            note: 'Physical deliverable successfully created.'
          },
          {
            key: 'Post-Consumer Food Waste',
            value: 'Remained flat at 210 kg/week with zero statistical variation (± 2%).',
            note: 'Plate waste volume did not decrease at all.'
          },
          {
            key: 'Student Daily Participation',
            value: '45% of students consistently used the sorting stations; 55% continued using general landfill bins.',
            note: 'Adoption was restricted to a minority of the school population.'
          }
        ]
      },
      prompt:
        'Which interpretation is rigorously supported by the verified empirical data, without committing an overreaching leap?',
      options: [
        {
          id: 'opt-1a',
          label: 'Conclude that the trial successfully reduced plastic packaging and produced compost, but failed to reduce food waste and achieved only minority adoption.',
          description:
            'Synthesize that the intervention achieved a measurable 32% reduction in plastic packaging and proved composting feasibility (82 kg produced), but was completely ineffective at reducing post-consumer food waste (flat at 210 kg) and reached only 45% consistent participation, requiring targeted revisions.',
          score: 160,
          isOptimal: true,
          feedback:
            'Exemplary evidentiary rigor! You balanced positive achievements (plastic reduction and compost yield) with objective realities (food waste plateau and minority participation). A scholarly conclusion reflects the actual mixed data rather than projecting wishful thinking.',
          academicReasoning:
            'Textbook Section 10.1 establishes that conclusions must faithfully represent the empirical boundaries of the data. Overlooking negative or flat metrics distorts reality and violates academic objectivity.'
        },
        {
          id: 'opt-1b',
          label: 'Declare that the initiative was a 100% total victory that transformed the entire school into a zero-waste campus.',
          description:
            'Celebrate the 32% plastic drop as undeniable proof that all 420 students have developed permanent eco-friendly habits and that school waste has been eliminated.',
          score: 80,
          isOptimal: false,
          feedback:
            'Severe Overreaching Leap (Defect 3)! A 32% drop in plastic does not equate to "zero waste," especially when 55% of students ignored the bins and food waste remained completely unchanged at 210 kg.',
          academicReasoning:
            'The Overreaching Leap defect (Textbook Section 10.5) occurs when researchers claim universal triumph based on partial, bounded improvements.'
        },
        {
          id: 'opt-1c',
          label: 'Conclude that the initiative was an absolute failure and that high school students are incapable of caring about nature.',
          description:
            'Argue that because 55% of students did not participate and food waste did not drop, the entire project was worthless and should be abandoned.',
          score: 30,
          isOptimal: false,
          feedback:
            'Cynical, all-or-nothing distortion. A 32% plastic reduction and 82 kg of compost are substantial initial milestones for a 6-week high school trial. Dismissing genuine progress because it was not instantaneous perfection is scientifically unjustifiable.',
          academicReasoning:
            'Scientific evaluation is nuanced, not binary. Recognizing partial success provides the foundation for iterative project improvement (Textbook Section 10.1).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 2: JUDGE VALIDITY & LIMITATIONS
    // ------------------------------------------------------------------------
    {
      stageNumber: 2,
      stageKey: 'judge-validity-limitations',
      title: 'Stage 2: Evaluating Internal Validity & Confounding Variables',
      concept: 'Internal vs. External Validity, Confounding Factors & Correlation vs. Causation',
      textbookRef: 'Textbook Section 10.3 & 10.6 (pp. 136–138, 142–144)',
      scenarioHeading: 'Investigating the Week 4 Confounder',
      scenarioBody:
        'A team member boasts: "Our campaign posters were so inspiring that during Week 4, plastic cup waste dropped by an unprecedented 48% in a single week! This proves our posters directly caused student enlightenment!" However, an interview with Pak Joko (canteen manager) reveals that in Week 4, the distributor ran out of plastic drink cups, forcing vendors to serve iced tea in paper cartons for 5 days.',
      evidenceData: {
        label: 'Methodological Validity Audit',
        items: [
          {
            key: 'Observed Phenomenon',
            value: 'Massive 48% drop in single-use plastic cups during Week 4.',
            note: 'Apparent dramatic success.'
          },
          {
            key: 'Confounding Extraneous Variable',
            value: 'Wholesale distributor stockout of plastic cups; vendors forced to use paper cartons for 5 days.',
            note: 'External commercial supply chain shock.'
          },
          {
            key: 'Control Group Status',
            value: 'No untreated control wing or baseline comparison group was monitored.',
            note: 'Threat to Internal Validity: cannot isolate posters from vendor stockout.'
          }
        ]
      },
      prompt:
        'How should the Lead Peer Reviewer critique this claim under principles of internal validity and causal inference?',
      options: [
        {
          id: 'opt-2a',
          label: 'Identify the vendor stockout as an uncontrolled confounding variable that invalidates the causal claim.',
          description:
            'Explain that the sudden Week 4 drop was driven primarily by an external commercial supply disruption (vendors lacking cups), not student moral awakening from posters. Because there was no control group, attributing the drop solely to posters commits the False Cause (Post Hoc) fallacy and compromises internal validity.',
          score: 160,
          isOptimal: true,
          feedback:
            'Superb methodological critique! You uncovered a textbook confounding variable. When external conditions change simultaneously with an intervention (such as a supplier running out of cups), researchers cannot claim their posters caused the change without a controlled comparison.',
          academicReasoning:
            'Internal validity (Textbook Section 10.3) requires proving that the intervention—and not an external confounding factor—produced the observed effect. Correlation in time does not prove causation.'
        },
        {
          id: 'opt-2b',
          label: 'Ignore the distributor stockout because whatever reduced the plastic is good for the environment.',
          description:
            'Argue that researchers do not need to care why the plastic dropped, as long as less plastic entered the trash can.',
          score: 80,
          isOptimal: false,
          feedback:
            'Conflates ecological advocacy with scientific inquiry. In research, establishing true causality is essential; if the drop was caused by a supply shortage, plastic consumption will rebound immediately once supplies return, rendering the poster theory false.',
          academicReasoning:
            'Scientific conclusions must explain true mechanisms of change. Failing to isolate causal variables guarantees policy failure upon return to baseline conditions (Textbook Section 10.3).'
        },
        {
          id: 'opt-2c',
          label: 'Claim that the distributor stockout was magically caused by telepathic student energy.',
          description:
            'Assert that student enthusiasm mentally influenced the factory to run out of plastic cups.',
          score: 30,
          isOptimal: false,
          feedback:
            'Unscientific magical thinking. Academic research relies on natural, verifiable physical and social mechanisms, never supernatural coincidence.',
          academicReasoning:
            'Science rejects magical causation in favor of empirical reality and falsifiable mechanisms (Textbook Section 10.1).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 3: DECIDE THE HYPOTHESIS'S FATE
    // ------------------------------------------------------------------------
    {
      stageNumber: 3,
      stageKey: 'decide-hypothesis-fate',
      title: 'Stage 3: Determining the Hypothesis\'s Fate',
      concept: 'Supported vs. Refuted vs. Modified (Epistemic Humility)',
      textbookRef: 'Textbook Section 10.4 (pp. 138–140)',
      scenarioHeading: 'Evaluating the Pre-Trial Hypothesis',
      scenarioBody:
        'In their initial research proposal, the student team formulated this explicit hypothesis:\n"If SMA Mandiri installs color-coded sorting stations and organic compost tumblers, then total campus landfill waste will decline by at least 50% across all categories within 6 weeks due to voluntary student participation."\nThe team is now paralyzed: does a 32% plastic drop and flat food waste mean their hypothesis was proven, failed, or something else?',
      evidenceData: {
        label: 'Hypothesis vs. Measured Outcome Comparison',
        items: [
          {
            key: 'Hypothesized Target 1',
            value: '50% decline in landfill waste across ALL categories.',
            note: 'Target was 50%; actual plastic decline was 32%; food waste was 0%.'
          },
          {
            key: 'Hypothesized Target 2',
            value: 'Achieved within 6 weeks through purely voluntary student action.',
            note: 'Actual voluntary adoption plateaued at 45%; 55% remained unengaged.'
          },
          {
            key: 'Empirical Verdict',
            value: 'Intervention works partially for packaging, but voluntary prompts are insufficient for food waste.',
            note: 'Requires scientific refinement of the model.'
          }
        ]
      },
      prompt:
        'Under Cambridge research methodology, what is the correct academic determination of the hypothesis\'s fate?',
      options: [
        {
          id: 'opt-3a',
          label: 'Declare the hypothesis Partially Supported, but Requiring Significant Modification.',
          description:
            'Conclude that the hypothesis was partially supported regarding recyclable packaging, but refuted regarding universal 50% reduction and food waste. Formulate a modified hypothesis: voluntary sorting stations reduce visible packaging waste within 6 weeks, but food waste reduction requires structured canteen vendor portioning and longer behavioral incubation periods.',
          score: 160,
          isOptimal: true,
          feedback:
            'Masterclass in scientific maturity! Real scientific progress rarely involves simple 100% confirmation or 100% refutation. Acknowledging partial support and modifying the theoretical model based on empirical reality is the exact definition of the scientific method.',
          academicReasoning:
            'Textbook Section 10.4 teaches that modifying a hypothesis in response to nuanced data demonstrates sophisticated analytical competence, earning top marks on Cambridge Assessment Objective 3.'
        },
        {
          id: 'opt-3b',
          label: 'Falsify the numbers in the report to change 32% to 50% so the hypothesis can be declared "100% Proven."',
          description:
            'Round the numbers upward and delete the food waste data from the graphs so the team looks completely successful to the school governors.',
          score: 30,
          isOptimal: false,
          feedback:
            'Catastrophic breach of academic integrity! Falsifying data and deleting inconvenient evidence constitutes research fraud, resulting in automatic disqualification in Cambridge examinations.',
          academicReasoning:
            'Academic integrity is absolute. A hypothesis that requires modification is a normal scientific result; altering data is fraudulent misconduct (Textbook Section 10.4).'
        },
        {
          id: 'opt-3c',
          label: 'Declare the hypothesis completely refuted and claim the entire experiment was a waste of time.',
          description:
            'State that because the outcome was 32% instead of 50%, the hypothesis was completely wrong and the sorting stations should be dismantled.',
          score: 80,
          isOptimal: false,
          feedback:
            'Overly rigid all-or-nothing thinking. Missing a numerical target by 18% in a 6-week behavioral trial does not mean the intervention failed completely; it established that packaging behavior responds faster than organic plate habits.',
          academicReasoning:
            'Rigid binary thinking blinds researchers to valuable partial patterns. Modifying the hypothesis captures underlying dynamics (Textbook Section 10.4).'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 4: CONSTRUCT THE CONCLUSION
    // ------------------------------------------------------------------------
    {
      stageNumber: 4,
      stageKey: 'construct-the-conclusion',
      title: 'Stage 4: Synthesizing the 3 Pillars & Slaying the 4 Traps',
      concept: 'The 3 Structural Pillars vs. The 4 Fatal Defects (Sudden Facts, Copy-Paste, Overreach, Wishful Thinking)',
      textbookRef: 'Textbook Section 10.2 & 10.5 (pp. 133–135, 141–143)',
      scenarioHeading: 'Reviewing Competing Draft Conclusions',
      scenarioBody:
        'The team has written three candidate conclusion paragraphs for their final Cambridge report. The lead reviewer must select the paragraph that exemplifies the 3 Structural Pillars while avoiding the 4 Fatal Conclusion Defects.',
      evidenceData: {
        label: 'Candidate Draft Conclusions',
        items: [
          {
            key: 'Draft A (Emotional Sermon)',
            value: '"In conclusion, waste is an evil crime against Mother Earth. If all students just open their hearts, love nature, and clean up their mess, our school will become a heavenly green paradise forever!"',
            note: 'Defect 4: Wishful Thinking Preaching.'
          },
          {
            key: 'Draft B (Robotic Summary + Surprise Stat)',
            value: '"In Section 1 we measured bins. In Section 2 we weighed plastic. In Section 3 we interviewed vendors. Also, nuclear energy generates 40% of electricity in France."',
            note: 'Defect 1 (Sudden Miracle Fact) + Defect 2 (Mechanical Copy-Paste).'
          },
          {
            key: 'Draft C (Disciplined 3-Pillar Synthesis)',
            value: '"This study investigated whether localized sorting stations and composting reduce secondary school landfill waste over 6 weeks. Findings demonstrate a 32% reduction in single-use plastics, confirming partial packaging efficacy, while post-consumer food waste remained unimpacted at 210 kg/week due to vendor portion sizes. While bounded by a 6-week timeframe and vendor carton stockouts, evidence demonstrates that sorting infrastructure must be paired with structured canteen portion adjustments."',
            note: 'Exemplifies Pillar 1 (Direct Answer), Pillar 2 (Synthesis & Limitations), and Pillar 3 (Action).'
          }
        ]
      },
      prompt:
        'Which candidate conclusion satisfies Cambridge standards by integrating the 3 Structural Pillars while eliminating the 4 Fatal Defects?',
      options: [
        {
          id: 'opt-4a',
          label: 'Adopt Draft C: It synthesizes core findings, directly answers the inquiry, and transparently acknowledges limitations.',
          description:
            'Select Draft C because it fulfills Pillar 1 (answers the central research question), Pillar 2 (synthesizes findings while candidly noting the 6-week limit and vendor stockout confounder), and Pillar 3 (grounds future action in vendor portion adjustments), completely avoiding emotional preaching, robotic restatement, and sudden facts.',
          score: 160,
          isOptimal: true,
          feedback:
            'Masterpiece of academic conclusion writing! Draft C avoids every fatal defect: it introduces zero surprise facts (Defect 1), connects insights rather than copying topic sentences (Defect 2), bounds claims to the actual sample (Defect 3), and grounds endings in policy rather than sermons (Defect 4).',
          academicReasoning:
            'Textbook Section 10.2 & 10.5 emphasize that a pristine conclusion answers the question, weaves findings together with epistemic humility, and identifies targeted policy implications.'
        },
        {
          id: 'opt-4b',
          label: 'Adopt Draft A: Passionate emotional appeals are the most inspiring way to motivate school administrators.',
          description:
            'Argue that emotional preaching about Mother Earth shows genuine student passion and makes readers feel guilty about pollution.',
          score: 80,
          isOptimal: false,
          feedback:
            'Suffers from Defect 4: Wishful Thinking Preaching. Cambridge examiners grade research on empirical evidence and institutional mechanisms, not emotional moralizing. Preaching about "opening hearts" demonstrates an absence of rigorous policy analysis.',
          academicReasoning:
            'Wishful thinking sermons substitute emotional rhetoric for structural analysis (Textbook Section 10.5). Research conclusions must remain analytical and evidence-based.'
        },
        {
          id: 'opt-4c',
          label: 'Adopt Draft B: A robotic recap combined with a surprise international nuclear fact demonstrates broad global knowledge.',
          description:
            'Claim that restating past sections step-by-step and inserting a random fact about French nuclear power proves worldly intelligence.',
          score: 30,
          isOptimal: false,
          feedback:
            'Double failure: commits Defect 2 (Mechanical Copy-Paste) and Defect 1 (Sudden Miracle Fact). Dropping an unanalyzed surprise statistic about France into a local school waste paper is an egregious non sequitur.',
          academicReasoning:
            'Introducing unanalyzed facts in the conclusion violates basic academic structure (Textbook Section 10.5). New facts must never appear in the final chapter.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 5: RECOMMEND THE NEXT ACTION
    // ------------------------------------------------------------------------
    {
      stageNumber: 5,
      stageKey: 'recommend-the-next-action',
      title: 'Stage 5: Formulating Proportionate, Actionable Recommendations',
      concept: 'Feasible Institutional Recommendations & Longitudinal Next Steps',
      textbookRef: 'Textbook Section 10.2 & 10.6 (pp. 133–135, 142–144)',
      scenarioHeading: 'Presenting Recommendations to the School Board',
      scenarioBody:
        'The final challenge is to translate the research findings into actionable, proportionate recommendations for the school principal and canteen committee for the upcoming academic year. The proposal must be realistic, financially feasible, and directly connected to the study’s discovered limitations.',
      evidenceData: {
        label: 'Summary of Actionable Insights',
        items: [
          {
            key: 'Discovered Bottleneck 1',
            value: 'Food waste is driven by oversized rice portions served uniformly to all students regardless of appetite.',
            note: 'Operational cause of the 210 kg/week plate waste.'
          },
          {
            key: 'Discovered Bottleneck 2',
            value: '55% non-participating students cited lack of peer guidance and confusing bin signage.',
            note: 'Behavioral cause of low sorting rates.'
          },
          {
            key: 'Research Limitation',
            value: '6-week observation lacked a control group and experienced a supplier stockout confounder.',
            note: 'Methodological need for a longer, controlled follow-up trial.'
          }
        ]
      },
      prompt:
        'Which set of policy recommendations represents the most proportionate, feasible, and evidence-grounded next steps?',
      options: [
        {
          id: 'opt-5a',
          label: 'Propose a dual operational and research roadmap: canteen portion options, peer student ambassadors, and a 1-semester controlled follow-up.',
          description:
            'Recommend: (1) Operational Intervention: Partner with canteen vendors to introduce "Half-Portion / Full-Portion" rice choices to address the 210 kg food waste plateau; (2) Peer Facilitation: Station trained Osis/Karang Taruna green ambassadors at sorting hubs during lunch breaks; and (3) Research Extension: Run a 1-semester trial comparing Grade 10 (ambassador-assisted) with Grade 11 (control) wings to isolate true behavioral change from vendor supply shocks.',
          score: 160,
          isOptimal: true,
          feedback:
            'Exemplary evidence-based recommendations! You addressed both discovered operational bottlenecks (vendor portion sizes and peer guidance) while designing an airtight methodological next step (a controlled 1-semester comparative trial). This demonstrates the ultimate synthesis of research and real-world impact.',
          academicReasoning:
            'Textbook Section 10.2 & 10.6 emphasize that recommendations must directly emerge from empirical findings and limitations. Grounding actions in operational feasibility and controlled follow-up studies earns top marks.'
        },
        {
          id: 'opt-5b',
          label: 'Demand that the school immediately expel any student caught throwing plastic into the wrong bin.',
          description:
            'Recommend harsh punitive disciplinary measures, including suspension and grade penalties, for any student who fails to sort their garbage.',
          score: 80,
          isOptimal: false,
          feedback:
            'Disproportionate and pedagogically destructive. Punitive expulsion ignores underlying design flaws (confusing signs, oversized portions) and fosters resentment rather than constructive environmental stewardship.',
          academicReasoning:
            'Recommendations must be proportionate and constructive. Harsh punitive overreach violates ethical educational principles and fails to address systemic causes (Textbook Section 10.2).'
        },
        {
          id: 'opt-5c',
          label: 'Advise the school to purchase a multi-billion rupiah industrial incinerator for the football field.',
          description:
            'Recommend that the school abandon sorting and build an industrial waste combustion furnace to burn all school garbage on campus.',
          score: 30,
          isOptimal: false,
          feedback:
            'Unfeasible, dangerous, and absurd. Installing an industrial incinerator on a school athletic field creates severe toxic air pollution (dioxins), bankrupts the school, and completely defies environmental sustainability.',
          academicReasoning:
            'Recommendations must be realistic, safe, and aligned with core inquiry goals. Proposing hazardous, unaffordable industrial hardware is an extreme defect (Textbook Section 10.2).'
        }
      ]
    }
  ]
};
