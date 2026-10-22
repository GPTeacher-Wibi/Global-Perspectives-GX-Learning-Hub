/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 5 CAPSTONE CHALLENGE DATA: PROJECT RESCUE MISSION
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition
 * Author: Andri Wibisono (pp. 69–83)
 *
 * Grounding:
 * - Section 5.1: The Architectural Blueprint of Inquiry & SMART Objectives (pp. 69–75)
 * - Section 5.2: The 6-Step Group Planning Cycle & SWOT Feasibility (pp. 70–74)
 * - Section 5.3: Collaborative Hazards: Slaying Groupthink & Scope Creep (pp. 74–77)
 * - Section 5.4: Cultural Facilitation: Hormat, Musyawarah & Silent Protocols (pp. 76–78)
 * - Section 5.5: Scheduling Architecture, Gantt Dependencies & Adaptive Execution (pp. 76–78)
 *
 * Target Demographic: Grade 10 Cambridge Global Perspectives (CEFR B1 English)
 * Educational Philosophy: "Strategic reasoning, collaborative ethics, and systems thinking over fast clicking"
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

export const UNIT_5_CAPSTONE_DATA: CapstoneMissionData = {
  id: 'g5-capstone',
  unitNumber: 5,
  title: 'Project Rescue Mission',
  subtitle: 'Saving the Ciliwung River Youth Watershed Initiative',
  caseSetting: 'Jakarta-Bogor Inter-School Environmental Research Board & Ciliwung Community Basin',
  overview:
    'A high school environmental research team launched an ambitious inquiry into plastic waste accumulation and riverbank degradation along the Ciliwung River corridor. However, with only three weeks before the Cambridge regional exhibition, the project is near total collapse: the core goal is vague and unmeasurable, uncontrolled scope creep has introduced impossible software and film commitments, meetings are paralyzed by groupthink and false consensus, and field operations were shut down by village leaders due to missing institutional permissions (Surat Izin) and unobserved cultural etiquette. As Project Rescue Specialist, you must diagnose each failure point, reconstruct the planning architecture, and guide the team to a rigorous, ethical finish.',
  maxScore: 800, // 5 stages * 160 max points
  stages: [
    // ------------------------------------------------------------------------
    // STAGE 1: SMART OBJECTIVE RECONSTRUCTION
    // ------------------------------------------------------------------------
    {
      stageNumber: 1,
      stageKey: 'smart-objective-repair',
      title: 'Stage 1: Reconstructing the Core Objective',
      concept: 'The SMART Criteria (Specific, Measurable, Achievable, Relevant, Time-Bound)',
      textbookRef: 'Textbook Section 5.1 & 5.2 (pp. 69–75)',
      scenarioHeading: 'Diagnosing a Hollow Vision Statement',
      scenarioBody:
        'The team submitted their initial Project Charter to the faculty advisory panel. The primary project objective was written as: "Our team will clean up the Ciliwung River tributary and educate all citizens in Jakarta so that everyone cares about clean water forever." The faculty mentor flagged this objective as structurally defective, warning that without a radical rewrite, the project cannot be formally evaluated or executed.',
      evidenceData: {
        label: 'Initial Flawed Project Charter (Draft v1.0)',
        items: [
          {
            key: 'Proposed Target',
            value: '"Clean up the Ciliwung River and educate all citizens."',
            note: 'Defect: Completely unbounded geographic scope (the Ciliwung is 119 km long).'
          },
          {
            key: 'Measurement Metric',
            value: '"Everyone cares about clean water."',
            note: 'Defect: Psychological state with no numerical metric, baseline, or verification tool.'
          },
          {
            key: 'Timeframe',
            value: '"Forever / Ongoing."',
            note: 'Defect: Open-ended timeline lacking intermediate milestones or delivery date.'
          },
          {
            key: 'Allocated Budget & Team',
            value: '4 Grade 10 students, Rp 450,000 internal treasury, 21 days remaining.',
            note: 'Defect: Extreme mismatch between microscopic resources and continental ambitions.'
          }
        ]
      },
      prompt:
        'As Project Rescue Specialist, which intervention transforms this vague aspiration into a rigorous SMART objective that fits the team’s 21-day timeline?',
      options: [
        {
          id: 'opt-1a',
          label: 'Adopt a bounded, measurable 500m watershed trial with quantitative targets and firm deadlines.',
          description:
            'Formulate: "By November 18 (21 days), reduce visible surface macro-plastic along a designated 500-meter school tributary segment by 40% through 2 community cleanup drives, install 3 localized floating bamboo trash traps, and record turbidity at 4 fixed sampling stations."',
          score: 160,
          isOptimal: true,
          feedback:
            'Outstanding SMART reformulation! You bounded the geography to 500 meters (Specific), established a 40% plastic reduction and 4 sampling stations (Measurable), set targets matching a 4-person team and 21-day window (Achievable), maintained direct environmental focus (Relevant), and anchored a strict finish date (Time-bound).',
          academicReasoning:
            'According to Cambridge planning standards (Textbook Section 5.1), an objective without numerical metrics and geographic boundaries cannot be validated. Bounding the scope allows authentic empirical verification within high school research constraints.'
        },
        {
          id: 'opt-1b',
          label: 'Moderate the wording to focus on hosting weekly cleanup meetings until the river looks better.',
          description:
            'Formulate: "Hold weekend cleanup drives along the local riverbanks every Saturday until water clarity visibly improves and interview at least 20 passing pedestrians."',
          score: 80,
          isOptimal: false,
          feedback:
            'Partially helpful, but still structurally flawed. While adding weekend intervals and 20 interviews provides some structure, "until water clarity visibly improves" is subjective and unmeasurable, and the geographic reach remains undefined.',
          academicReasoning:
            'Subjective indicators such as "visibly improves" fail the Measurable test. Projects relying on qualitative impressions without standardized baseline measures cannot establish empirical causation.'
        },
        {
          id: 'opt-1c',
          label: 'Pivot to an all-digital social media awareness campaign to reach all Jakarta youth.',
          description:
            'Formulate: "Launch an Instagram and TikTok awareness blitz with the hashtag #CleanCiliwungNow to gather 10,000 digital likes and educate city youth about water pollution."',
          score: 30,
          isOptimal: false,
          feedback:
            'Weak and misaligned intervention! Abandoning field inquiry for social media vanity metrics (likes and views) evades the core research question, lacks empirical depth, and assumes 10,000 likes equate to real-world watershed restoration.',
          academicReasoning:
            'Vanity social metrics rarely translate into ecological change. In Global Perspectives, inquiry projects must maintain direct connection to authentic community problems rather than superficial online activity.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 2: SWOT AUDIT & FEASIBILITY REALIGNMENT
    // ------------------------------------------------------------------------
    {
      stageNumber: 2,
      stageKey: 'swot-feasibility-audit',
      title: 'Stage 2: Environmental SWOT & Feasibility Realignment',
      concept: 'Internal Strengths/Weaknesses vs. External Opportunities/Threats',
      textbookRef: 'Textbook Section 5.2 (pp. 70–74)',
      scenarioHeading: 'Conducting an Honest Situational Audit',
      scenarioBody:
        'Fajar, the enthusiastic technical lead, wants the team to purchase expensive chemical spectrophotometer kits from an overseas supplier to test for heavy metal ions (mercury and lead). However, the team treasury holds only Rp 450,000, nobody has formal laboratory biochemistry certifications, and shipping from abroad takes 18 business days. Furthermore, the West Java rainy season (musim hujan) has just begun, creating sudden afternoon flash surges along the riverbed.',
      evidenceData: {
        label: 'Preliminary Team Environmental Matrix',
        items: [
          {
            key: 'Internal Assets',
            value: 'Strong biology teacher mentorship, access to standard school microscopes, high team graphic skills.',
            note: 'Strength: Free accessible equipment and academic guidance already inside the school.'
          },
          {
            key: 'Internal Constraints',
            value: 'Total treasury of Rp 450,000; zero micro-chemical hazardous waste certifications.',
            note: 'Weakness: Cannot afford imported sensors or handle toxic analytical reagents safely.'
          },
          {
            key: 'External Opportunities',
            value: 'Local Karang Taruna (neighborhood youth union) holds weekly Sunday neighborhood cleanups.',
            note: 'Opportunity: Pre-existing community infrastructure ready for collaborative partnership.'
          },
          {
            key: 'External Environmental Hazard',
            value: 'Daily tropical convective downpours between 14:00 and 17:00 causing riverbank flash flooding.',
            note: 'Threat: Acute safety hazard for any student teams working near the water in the afternoon.'
          }
        ]
      },
      prompt:
        'How should the team leverage their SWOT audit to reconfigure their methodology and risk management protocols?',
      options: [
        {
          id: 'opt-2a',
          label: 'Align testing with school biology equipment and partner with Karang Taruna for morning field sessions.',
          description:
            'Cancel overseas imports; utilize school Secchi disks, digital pH meters, and macroinvertebrate bio-indicators (Strengths); restrict all riverbank sampling to morning hours (08:00–10:30) with safety ropes and teacher oversight (Threat mitigation); collaborate with Karang Taruna youth (Opportunity).',
          score: 160,
          isOptimal: true,
          feedback:
            'Exemplary SWOT-driven strategic realignment! You neutralized internal financial and technical weaknesses by leveraging existing school laboratory tools, mitigated the external flood threat with strict morning operating windows and safety protocols, and maximized community collaboration through Karang Taruna.',
          academicReasoning:
            'Step 2 of the Cambridge planning cycle (Textbook Section 5.2) mandates pairing internal strengths with external opportunities while building active defenses against realistic environmental threats.'
        },
        {
          id: 'opt-2b',
          label: 'Launch a rapid crowdfunding drive to buy the overseas sensors and proceed with afternoon testing.',
          description:
            'Set up a public crowdfunding page to raise Rp 3,000,000 for express chemical kits, while continuing afternoon water sampling whenever rain appears light.',
          score: 80,
          isOptimal: false,
          feedback:
            'High-risk and financially naive. Crowdfunding introduces substantial delay and uncertainty during a 21-day timeline, and relying on "light rain" during tropical monsoon season creates unacceptable physical danger for students.',
          academicReasoning:
            'Ignoring environmental threats (monsoon flash floods) violates basic research safety protocols. Furthermore, adding fundraising introduces a distracting sub-project that exacerbates time starvation.'
        },
        {
          id: 'opt-2c',
          label: 'Abandon all physical water testing and conduct purely theoretical library research on global rivers.',
          description:
            'Drop all field work completely and rewrite the project as a literature review comparing the Thames River in London with the Mississippi River in the United States.',
          score: 30,
          isOptimal: false,
          feedback:
            'Defeatist and academically disjointed. Rather than adapting to realistic local parameters, this completely surrenders the primary inquiry into the Ciliwung River and deprives the students of genuine empirical inquiry.',
          academicReasoning:
            'Adaptive planning (Step 6) means recalibrating tactics to fit reality, not abandoning the core inquiry at the first sign of logistical friction.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 3: SCOPE CREEP SLAYING & GANTT SCHEDULING
    // ------------------------------------------------------------------------
    {
      stageNumber: 3,
      stageKey: 'scope-creep-gantt',
      title: 'Stage 3: Slaying Scope Creep & Rebuilding the Timeline',
      concept: 'Must-Have vs. Nice-to-Have, Dependency Sequencing, and 15% Buffer Rule',
      textbookRef: 'Textbook Section 5.3 & 5.5 (pp. 75–78)',
      scenarioHeading: 'Halting Uncontrolled Project Expansion',
      scenarioBody:
        'Two weeks into the planning phase, the project task list has exploded. Fajar has spent 35 hours coding a custom 3D mobile application with GPS trash mapping. Dewi wants to produce a full 45-minute documentary with cinematic drone footage and orchestral soundtrack. Meanwhile, baseline water turbidity has not been tested, the community survey has zero distributed copies, and deadlines are in 16 days. The team calendar lists: "Everyone works on everything together."',
      evidenceData: {
        label: 'Current Work Breakdown & Activity Log',
        items: [
          {
            key: 'Task Bloat: Mobile App Coding',
            value: '40% complete; requires 80 additional hours of backend programming.',
            note: 'Scope Creep: Unnecessary technical complexity diverting time from core research.'
          },
          {
            key: 'Task Bloat: 45-Minute Film',
            value: 'Storyboarding phase; requires video editing workstation and drone pilot license.',
            note: 'Scope Creep: High-production media feature that is not required by Cambridge rubric.'
          },
          {
            key: 'Core Deliverable: Water Turbidity Log',
            value: '0 of 4 sampling rounds completed; zero data points collected.',
            note: 'Critical Bottleneck: Core scientific requirement is completely unfulfilled!'
          },
          {
            key: 'Core Deliverable: Community Survey',
            value: 'Questionnaire drafted on scrap paper; 0 respondents surveyed.',
            note: 'Critical Bottleneck: Stakeholder evidence is entirely missing.'
          }
        ]
      },
      prompt:
        'How should the Project Rescue Specialist prune the schedule and institute disciplined task allocation?',
      options: [
        {
          id: 'opt-3a',
          label: 'Freeze non-essential features into a "Future Phase" list and enforce a Gantt chart with single owners.',
          description:
            'Enforce the "Must-Have vs. Nice-to-Have" rule: freeze the mobile app and film into a "Future Recommendations" annex. Create a 16-day Gantt timeline with single-owner accountability (Dewi: water testing; Fajar: trash barrier design; Siti: survey administration; Budi: data synthesis) and a 3-day final buffer.',
          score: 160,
          isOptimal: true,
          feedback:
            'Masterful project management intervention! You ruthlessly pruned secondary distractions (app and film) to protect core empirical deliverables, dismantled the diffusion of responsibility by assigning explicit individual owners, and established a 3-day buffer to absorb unexpected shocks.',
          academicReasoning:
            'Scope Creep (Textbook Section 5.3) destroys research projects by diluting focus across non-essential ambitions. Establishing single ownership and visual Gantt dependencies ensures accountability and on-time completion.'
        },
        {
          id: 'opt-3b',
          label: 'Shorten the documentary to 15 minutes and simplify the app, working double shifts on weekends.',
          description:
            'Compromise by keeping both the app and the video in shortened formats, instructing team members to work late into the night every weekend to catch up on the water testing.',
          score: 80,
          isOptimal: false,
          feedback:
            'A dangerous half-measure. Attempting to preserve scope bloat by mandating exhausting double shifts leads directly to student burnout, rushed sloppy water measurements, and fragmented coordination.',
          academicReasoning:
            'Attempting to solve scope creep through heroic overtime rather than disciplined de-scoping is a classic project management anti-pattern that drastically increases error rates.'
        },
        {
          id: 'opt-3c',
          label: 'Request an immediate two-week deadline extension from the Cambridge examination board.',
          description:
            'Submit a petition claiming that the scope of Ciliwung water restoration is too large for 3 weeks and demand that the assessment deadline be shifted into the next school term.',
          score: 30,
          isOptimal: false,
          feedback:
            'Completely unrealistic. External examination and exhibition deadlines are rigid and will not move to accommodate student mismanagement or self-inflicted feature bloat.',
          academicReasoning:
            'External academic and industry deadlines are hard constraints. Effective researchers control project scope to fit the available time envelope rather than assuming timelines can be arbitrarily extended.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 4: DISMANTLING GROUPTHINK & CULTURAL FACILITATION
    // ------------------------------------------------------------------------
    {
      stageNumber: 4,
      stageKey: 'groupthink-cultural-facilitation',
      title: 'Stage 4: Neutralizing Groupthink & Establishing Cultural Facilitation',
      concept: "Irving Janis's Groupthink, Devil's Advocacy, Silent Round-Robin & Indonesian Musyawarah",
      textbookRef: 'Textbook Section 5.3 & 5.4 (pp. 74–78)',
      scenarioHeading: 'Uncovering Suppressed Dissent and False Consensus',
      scenarioBody:
        'During weekly group meetings, Fajar (the outspoken senior student) presents his prototype bamboo trash trap design. He loudly announces: "This design is completely flawless and will capture 100% of floating plastic without breaking. Does everyone agree?" Siti and Budi notice that the bamboo ties are made of thin twine that will snap under heavy river currents, but they keep silent. Because of traditional Indonesian respect for seniors (Hormat) and a cultural desire to avoid direct confrontation (Rukun/Ewuh Pakewuh), they nod and say: "Ikut saja, sudah bagus." When deployed in the water, the barrier disintegrated within 2 hours.',
      evidenceData: {
        label: 'Team Communication Diagnostic Log',
        items: [
          {
            key: 'Meeting Airtime Distribution',
            value: 'Fajar: 82% of speaking time; Siti: 6%; Budi: 7%; Dewi: 5%.',
            note: 'Monopolized Discourse: Severe verbal dominance by one member.'
          },
          {
            key: 'Psychological Phenomenon',
            value: 'Self-censorship fueled by fear of offending senior peers (Ewuh Pakewuh).',
            note: 'Groupthink Symptom: Silent dissent disguised as unanimous verbal agreement.'
          },
          {
            key: 'Illusion of Invulnerability',
            value: 'Team assumed prototype was perfect without testing load capacity.',
            note: 'Groupthink Symptom: Premature celebration of untested assumptions.'
          },
          {
            key: 'Cultural Context',
            value: 'Hormat (respect for elders) misapplied as uncritical obedience.',
            note: 'Facilitation Need: Decouple interpersonal respect from rigorous design critique.'
          }
        ]
      },
      prompt:
        'Which structured facilitation protocol restores psychological safety and ensures technical flaws are challenged constructively?',
      options: [
        {
          id: 'opt-4a',
          label: 'Institutionalize the Silent Round-Robin, Stop-Light Check-in, and a formal Devil’s Advocate role.',
          description:
            'Replace unstructured open meetings with a 3-minute Silent Round-Robin (private sticky note critiques before any verbal discussion), implement mandatory Stop-Light status check-ins (🟢/🟡/🔴), and officially designate Budi as Devil’s Advocate whose explicit duty is to discover 3 failure points in every technical proposal.',
          score: 160,
          isOptimal: true,
          feedback:
            'Brilliant application of modern collaborative protocols! By formalizing the Devil’s Advocate role, you remove interpersonal friction—critique becomes an assigned duty rather than personal disrespect. The Silent Round-Robin empowers quieter members to register structural flaws without fear of confrontation.',
          academicReasoning:
            'Textbook Section 5.4 demonstrates that combining structured silent brainstorms with rotating Devil’s Advocates harmonizes Indonesian cultural politeness (Hormat) with relentless scientific rigor, eliminating Janis’s classic groupthink trap.'
        },
        {
          id: 'opt-4b',
          label: 'Instruct the team leader to repeatedly command quiet members to speak up during meetings.',
          description:
            'Have Fajar pause during presentations, point at Siti and Budi directly, and demand that they verbally share any disagreements they have on the spot.',
          score: 80,
          isOptimal: false,
          feedback:
            'Ineffective and socially intimidating. Directly putting culturally hesitant students on the spot in front of dominant peers intensifies social anxiety and reinforces polite evasion rather than genuine critique.',
          academicReasoning:
            'Verbal pressure from an assertive leader does not create psychological safety. Without anonymous or structured writing mechanisms, junior members will simply repeat superficial agreement to end the uncomfortable spotlight.'
        },
        {
          id: 'opt-4c',
          label: 'Appoint Fajar as sole project dictator to make all decisions alone without further team meetings.',
          description:
            'To prevent interpersonal awkwardness and save time, grant Fajar total unilateral authority to approve all technical designs and task schedules without consulting other members.',
          score: 30,
          isOptimal: false,
          feedback:
            'Catastrophic failure of collaborative governance! Unchecked autocracy magnifies blind spots, destroys collective ownership, and guarantees that fatal technical flaws remain uncorrected.',
          academicReasoning:
            'Autocratic leadership exacerbates the illusion of invulnerability. Cambridge collaborative inquiry requires shared deliberative synthesis (Musyawarah), not blind submission to a single member’s biases.'
        }
      ]
    },

    // ------------------------------------------------------------------------
    // STAGE 5: FIELD ETIQUETTE & ADMINISTRATIVE ADAPTATION
    // ------------------------------------------------------------------------
    {
      stageNumber: 5,
      stageKey: 'field-etiquette-gatekeepers',
      title: 'Stage 5: Field Etiquette, Gatekeeper Approvals & Emergency Adaptation',
      concept: 'Institutional Permissions (Surat Izin), RT/RW Gatekeepers, Musyawarah & Step 6 Adaptive Protocol',
      textbookRef: 'Textbook Section 5.2, 5.4 & 5.5 (pp. 73–78)',
      scenarioHeading: 'Resolving the Community Gatekeeper Impasse',
      scenarioBody:
        'The team arrived at Kampung Melayu Riverbank with bamboo poles, nylon netting, and water collection bottles ready for field installation. However, Pak RT (the neighborhood head) and two community elders abruptly blocked their path: "Stop! Who gave you permission to work in our waterway? We never received any formal school notification letter (Surat Izin Penelitian), and you did not consult the neighborhood elders. You cannot conduct research here." The team is stunned; field sampling must occur within 48 hours to meet the presentation deadline.',
      evidenceData: {
        label: 'Community Gatekeeper Protocol Checklist',
        items: [
          {
            key: 'Institutional Authorization',
            value: 'Missing: No official school principal letter (Surat Izin Penelitian).',
            note: 'Administrative Breach: Outside researchers cannot operate in residential areas without formal institutional backing.'
          },
          {
            key: 'Community Consultation',
            value: 'Missing: No prior silaturahmi or Musyawarah with RT/RW leadership.',
            note: 'Cultural Breach: Violates local social norms of hormat and transparent consultation.'
          },
          {
            key: 'Resident Safety & Distrust',
            value: 'Elders worried that youth are filming sensationalized social media videos depicting their neighborhood as dirty.',
            note: 'Ethical Perception: Local residents feel exploited rather than respected as partners.'
          },
          {
            key: 'Timeline Constraint',
            value: '48 hours until raw water data must be processed for the synthesis matrix.',
            note: 'Operational Dilemma: Requires rapid, culturally honorable resolution.'
          }
        ]
      },
      prompt:
        'How should the team resolve this gatekeeper confrontation ethically while adapting their research schedule?',
      options: [
        {
          id: 'opt-5a',
          label: 'Respect the boundary, secure the official school Surat Izin, and host an evening Musyawarah with the RT/RW.',
          description:
            'Immediately apologize with humility (Sopan Santun); pause riverbank work; obtain an expedited institutional letter (Surat Izin Penelitian) signed by the school principal; attend the evening RT/RW gathering to present the project transparently, explain water safety benefits, and invite Karang Taruna youth to co-monitor the floating barriers through Gotong Royong.',
          score: 160,
          isOptimal: true,
          feedback:
            'Flawless synthesis of ethical field research and Indonesian cultural diplomacy! Securing the official school Surat Izin establishes legal and institutional legitimacy, while engaging in evening Musyawarah transforms skeptical community elders into collaborative allies. Co-monitoring with Karang Taruna ensures authentic community ownership.',
          academicReasoning:
            'Textbook Section 5.4 emphasizes that research in Indonesian communities requires honoring local administrative gatekeepers (RT/RW) through formal correspondence and transparent dialogue (Musyawarah). Genuine community engagement turns potential opposition into sustainable partnership.'
        },
        {
          id: 'opt-5b',
          label: 'Relocate downstream to an unmonitored riverbank section where no neighborhood elders are watching.',
          description:
            'Quickly pack up the equipment, walk 800 meters downstream along the highway embankment where there are no houses, and hurriedly install the bamboo traps without asking for permission.',
          score: 80,
          isOptimal: false,
          feedback:
            'Unethical and academically illegitimate evasion. Sneaking onto unmonitored land bypasses ethical research oversight, risks confrontation with police or municipal authorities, and abandons genuine community collaboration.',
          academicReasoning:
            'Evading institutional gatekeepers violates Cambridge research ethics. Data collected covertly without jurisdictional permission is scientifically tainted and cannot be defended in an academic forum.'
        },
        {
          id: 'opt-5c',
          label: 'Argue that public waterways belong to the national government and proceed with installation anyway.',
          description:
            'Show the neighborhood head a national environmental statute on a smartphone, argue that public waterways do not belong to the RT, and demand immediate access to the riverbank.',
          score: 30,
          isOptimal: false,
          feedback:
            'Disastrous escalation! Confronting respected community elders with legalistic hostility violates fundamental Indonesian cultural values (Hormat), alienates the community permanently, and creates immediate risk of institutional disciplinary action.',
          academicReasoning:
            'Aggressive confrontation destroys researcher-community trust. In field research, cultural feasibility and community consent are just as essential as theoretical rigor.'
        }
      ]
    }
  ]
};
