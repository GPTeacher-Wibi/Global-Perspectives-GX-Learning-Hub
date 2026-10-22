import { Slide } from '../../types/curriculum';

/**
 * Unit 5: Planning — Master Instructional Presentation Deck
 * Authoritative Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (Andri Wibisono, pp. 66–78)
 * Target Audience: Grade 10 Cambridge Global Perspectives & Research (CEFR B1 English)
 * Pedagogical Structure: Concept → Simple Explanation → Why it matters → Concrete Example → Thinking Check
 */
export const UNIT_5_SLIDES: Slide[] = [
  // SLIDE 1: Orientation & Objectives
  {
    id: 'u5-s1',
    unitNumber: 5,
    slideNumber: 1,
    title: 'Unit 5: Planning',
    section: 'Orientation & Core Objectives',
    type: 'concept',
    teacherNote: 'Oral hook: Quote Benjamin Franklin: "By failing to prepare, you are preparing to fail." Ask students: "Have you ever been in a group project where nobody knew who was doing what until the night before the deadline?"',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.1',
      pages: '66–67'
    },
    content: {
      heading: 'Transforming Vision into Coordinated Action',
      subheading: 'Grade 10 Cambridge Global Perspectives & Research',
      body: 'Having noble goals and good intentions is never enough to solve real-world problems. Without a structured plan, even brilliant teams waste time, deplete resources, and collapse into confusion.\n\nPlanning is the deliberate cognitive and organizational process of establishing clear objectives, mapping required tasks, allocating resources, and scheduling milestones to achieve a desired outcome.',
      bullets: [
        'Objective 1: Understand the core pillars of effective planning and define goals using the SMART framework.',
        'Objective 2: Master the 6-step group planning cycle from vision definition to continuous adaptation.',
        'Objective 3: Identify and neutralize destructive group hazards, especially Groupthink and Scope Creep.',
        'Objective 4: Apply culturally sensitive Indonesian facilitation strategies (Hormat, Musyawarah, Silent Round-Robin) to empower all voices.'
      ],
      keyTakeaway: 'A goal without a plan is just a wish. Planning bridges the gap between vision and reality.',
      sourceCitation: 'Textbook Section 5.1 (pp. 66–67)'
    }
  },

  // SLIDE 2: Defining Planning
  {
    id: 'u5-s2',
    unitNumber: 5,
    slideNumber: 2,
    title: '5.1 What is Planning?',
    section: 'Academic Definition',
    type: 'definition',
    teacherNote: 'Emphasize that planning is not just writing a to-do list on your phone. It is systematic risk management and resource allocation.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.1',
      pages: '66–68'
    },
    content: {
      heading: 'The Architecture of Strategic Action',
      subheading: 'What distinguishes structured planning from improvisation?',
      body: 'In academic research and project management, planning is defined as the forward-looking process of deciding in advance what to do, how to do it, when to do it, and who is responsible for doing it.\n\nEffective planning is characterized by five indispensable pillars:',
      bullets: [
        '1. Clear Objectives: A defined target outcome so the team knows what success looks like.',
        '2. Concrete Action Steps: Specific, manageable tasks arranged in logical sequential order.',
        '3. Resource Allocation: Realistic awareness of available time, money, materials, and human skills.',
        '4. Defined Timeframe: Firm deadlines and intermediate progress milestones.',
        '5. Flexibility & Adaptation: Built-in contingency protocols to adjust when unexpected obstacles occur.'
      ],
      keyTakeaway: 'Planning answers four essential questions: What? How? When? Who?',
      sourceCitation: 'Textbook Section 5.1 (pp. 66–68)'
    }
  },

  // SLIDE 3: SMART Goals Framework
  {
    id: 'u5-s3',
    unitNumber: 5,
    slideNumber: 3,
    title: '5.1 The SMART Framework',
    section: 'Goal Formulation',
    type: 'concept',
    teacherNote: 'Walk through each letter of S-M-A-R-T. Emphasize: If a goal is not measurable, you can never prove whether your team succeeded or failed.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.1',
      pages: '68–69'
    },
    content: {
      heading: 'Crafting Goals that Actually Work: SMART Criteria',
      subheading: 'How to replace vague hopes with sharp, actionable targets',
      body: 'Vague goals produce weak plans. The SMART framework ensures that project objectives are clear, verifiable, and achievable:',
      comparison: {
        itemA: {
          label: 'The SMART Criteria',
          points: [
            'S - Specific: Clear, concrete, and unambiguous (Who, What, Where?).',
            'M - Measurable: Contains numerical indicators to quantify progress.',
            'A - Achievable: Realistic given your team\'s skills and resources.',
            'R - Relevant: Aligns with your overarching research mission.',
            'T - Time-Bound: Has a clear starting date and firm completion deadline.'
          ]
        },
        itemB: {
          label: 'Vague vs. SMART Example',
          points: [
            '❌ Vague Goal: "Our team will reduce plastic waste in our school canteen."',
            '✅ SMART Goal: "By November 30, our team will reduce single-use plastic water bottles in the high school canteen by 50% by installing 3 refill water stations and distributing 200 reusable tumblers."'
          ]
        }
      },
      keyTakeaway: 'Make every project objective SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.',
      sourceCitation: 'Textbook Section 5.1 (pp. 68–69)'
    }
  },

  // SLIDE 4: Active Checkpoint 1: SMART Goal Audit
  {
    id: 'u5-s4',
    unitNumber: 5,
    slideNumber: 4,
    title: 'Checkpoint: SMART Goal Audit',
    section: '5.1 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students audit the goal: What is missing? Is it measurable? Does it have a deadline?',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.1',
      pages: '68–70'
    },
    content: {
      heading: 'Goal Formulation Diagnosis',
      body: 'A student council team submits this objective: "We want to improve mental wellness among Grade 10 students because everyone is stressed."\n\nWhat is the primary flaw in this objective according to the SMART criteria?',
      interactiveData: {
        prompt: 'Which critical SMART elements are completely missing from this student goal?',
        options: [
          {
            id: 'opt-1',
            label: 'It is too specific and ambitious.',
            explanation: 'Incorrect. The goal is the opposite of specific—it does not define what "mental wellness" means or what actions will be taken.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'It lacks Specificity, Measurability, and a Time-bound deadline.',
            explanation: 'Correct! The goal does not specify what intervention will happen (vague), has no numerical percentage or scale to measure success (unmeasurable), and sets no completion date (not time-bound).',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'It is not Relevant because teenagers do not experience stress.',
            explanation: 'Incorrect. Mental wellness is highly relevant to Grade 10 students; the defect lies in the lack of measurable metrics and timelines.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'Transform vague intentions into measurable targets with clear metrics and deadlines.',
      sourceCitation: 'Textbook Section 5.1 (pp. 68–70)'
    }
  },

  // SLIDE 5: The 6-Step Group Planning Cycle Overview
  {
    id: 'u5-s5',
    unitNumber: 5,
    slideNumber: 5,
    title: '5.2 The 6-Step Planning Cycle',
    section: 'Planning Architecture',
    type: 'concept',
    teacherNote: 'Draw the 6 steps as a circular continuous cycle on the whiteboard. Emphasize that Step 6 feeds back into Step 1 as projects evolve.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.2',
      pages: '70–71'
    },
    content: {
      heading: 'The 6 Steps of Group Planning',
      subheading: 'A disciplined roadmap from initial vision to evaluated impact',
      body: 'The Cambridge Global Perspectives curriculum uses a systematic 6-step planning cycle for collaborative group projects:\n\nSkipping steps or rushing straight into action without analysis leads to wasted effort and team conflict.',
      bullets: [
        'Step 1: Define Shared Vision & Objectives (Agreeing on what you are trying to solve).',
        'Step 2: Information Gathering & Analysis (Conducting SWOT analysis of the environment).',
        'Step 3: Brainstorming & Strategy Formulation (Generating and evaluating alternative paths).',
        'Step 4: Action Planning & Task Allocation (Assigning specific tasks to individual team members).',
        'Step 5: Resource Allocation & Budgeting (Securing time, funding, tools, and permissions).',
        'Step 6: Monitoring, Review & Adaptation (Tracking milestones and adjusting the plan when reality changes).'
      ],
      keyTakeaway: 'Planning is a 6-stage lifecycle that balances thoughtful preparation with flexible adaptation.',
      sourceCitation: 'Textbook Section 5.2 (pp. 70–71)'
    }
  },

  // SLIDE 6: Steps 1 & 2: Vision & SWOT Analysis
  {
    id: 'u5-s6',
    unitNumber: 5,
    slideNumber: 6,
    title: 'Steps 1 & 2: Vision & SWOT',
    section: '5.2 Planning Cycle Phase 1',
    type: 'concept',
    teacherNote: 'Explain the 2x2 SWOT grid: Internal factors (Strengths & Weaknesses of your team) vs. External factors (Opportunities & Threats in your school/community).',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.2',
      pages: '71–72'
    },
    content: {
      heading: 'Setting the Vision and Assessing the Landscape',
      subheading: 'Step 1 (Vision) & Step 2 (SWOT Analysis)',
      body: 'Before launching any initiative, teams must build consensus on their core purpose and conduct an honest situational audit:',
      bullets: [
        'Step 1 — Shared Vision: All members must agree on the core problem and write a shared mission statement. If two members have different visions, the project will fracture.',
        'Step 2 — SWOT Analysis: An analytical framework mapping four environmental realities:',
        '• Strengths (Internal): What skills, connections, or talents does our team possess? (e.g., graphic design skills, good writing).',
        '• Weaknesses (Internal): Where are our team\'s gaps? (e.g., no coding experience, limited free time after school).',
        '• Opportunities (External): What outside factors can help us? (e.g., school science fair next month, cooperative principal).',
        '• Threats (External): What outside obstacles could derail us? (e.g., upcoming exam week, heavy monsoon rains).'
      ],
      keyTakeaway: 'SWOT analysis prevents teams from launching blind projects that ignore internal weaknesses and external threats.',
      sourceCitation: 'Textbook Section 5.2 (pp. 71–72)'
    }
  },

  // SLIDE 7: Steps 3 & 4: Strategy & Task Allocation
  {
    id: 'u5-s7',
    unitNumber: 5,
    slideNumber: 7,
    title: 'Steps 3 & 4: Strategy & Roles',
    section: '5.2 Planning Cycle Phase 2',
    type: 'concept',
    teacherNote: 'Introduce role division: Never say "everyone will do research together." Assign specific owners: "Budi writes survey, Siti contacts principal, Maya analyzes data."',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.2',
      pages: '72–74'
    },
    content: {
      heading: 'Formulating Strategy and Dividing Tasks',
      subheading: 'Step 3 (Brainstorming) & Step 4 (Task Allocation)',
      body: 'Once the team understands its strengths and environment, they transition to strategy formulation and role allocation:',
      bullets: [
        'Step 3 — Brainstorming & Strategy: Generate multiple competing solutions before picking the best one. Evaluate ideas based on feasibility, cost, and impact.',
        'Step 4 — Action Planning & Task Allocation: Break the overall project into small, bite-sized tasks. Assign each task to a specific individual based on their strengths.',
        'The Danger of Ambiguity: When a task is assigned to "everybody", nobody feels personally responsible, and the task is forgotten.',
        'Action Matrix: Create a table listing: Task Name | Person Responsible | Due Date | Required Output.'
      ],
      keyTakeaway: 'Every single task must have one clear owner and a firm deadline.',
      sourceCitation: 'Textbook Section 5.2 (pp. 72–74)'
    }
  },

  // SLIDE 8: Steps 5 & 6: Resources, Monitoring & Adaptation
  {
    id: 'u5-s8',
    unitNumber: 5,
    slideNumber: 8,
    title: 'Steps 5 & 6: Resources & Monitoring',
    section: '5.2 Planning Cycle Phase 3',
    type: 'concept',
    teacherNote: 'Introduce the Gantt Chart concept: A visual horizontal timeline showing start dates, end dates, and dependencies between tasks.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.2',
      pages: '73–75'
    },
    content: {
      heading: 'Budgeting Resources and Tracking Progress',
      subheading: 'Step 5 (Resources) & Step 6 (Monitoring & Adaptation)',
      body: 'A plan on paper only succeeds if resources are secured and progress is actively monitored against intermediate deadlines:',
      bullets: [
        'Step 5 — Resource Allocation: Audit the three essential project currencies:',
        '• Time: How many total hours does each team member have each week?',
        '• Budget/Tools: What materials, printing costs, or software licenses are needed?',
        '• Permissions: Do we need consent forms, institutional ethics approval, or parental sign-off?',
        'Step 6 — Monitoring & Adaptation: Hold regular 15-minute weekly standup check-ins. If a task falls behind schedule, adapt immediately: reassign tasks, trim unnecessary features, or shift resources.',
        'The Golden Rule: Plans are not carved in stone; they are living guides designed to be adapted.'
      ],
      keyTakeaway: 'Rigid plans break; adaptive plans bend with changing circumstances and reach the finish line.',
      sourceCitation: 'Textbook Section 5.2 (pp. 73–75)'
    }
  },

  // SLIDE 9: Group Dynamics: The Danger of Groupthink
  {
    id: 'u5-s9',
    unitNumber: 5,
    slideNumber: 9,
    title: '5.3 The Hazard of Groupthink',
    section: 'Collaborative Pitfalls',
    type: 'concept',
    teacherNote: 'Historical context: Irving Janis coined "Groupthink" studying disastrous decisions like the Bay of Pigs invasion. When smart people silence their doubts to maintain peace, disasters occur.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.3',
      pages: '74–76'
    },
    content: {
      heading: 'When Harmony Destroys Critical Thinking: Groupthink',
      subheading: 'The psychological drive for consensus that ruins smart teams',
      body: 'In 1972, psychologist Irving Janis identified Groupthink: a psychological phenomenon that occurs within a group of people in which the desire for harmony or conformity results in an irrational or dysfunctional decision-making outcome.',
      bullets: [
        'Illusion of Invulnerability: The team becomes overconfident and assumes their idea cannot fail.',
        'Self-Censorship: Members who have serious doubts remain silent because they do not want to be seen as difficult or uncooperative.',
        'Direct Pressure on Dissenters: If someone questions the plan, other members pressure them to "get with the program".',
        'False Consensus: Because nobody speaks up, everyone falsely assumes that everyone else agrees 100% with the leader.'
      ],
      keyTakeaway: 'Groupthink happens when polite harmony is prioritized over rigorous critical evaluation.',
      sourceCitation: 'Textbook Section 5.3 (pp. 74–76)'
    }
  },

  // SLIDE 10: Preventing Groupthink
  {
    id: 'u5-s10',
    unitNumber: 5,
    slideNumber: 10,
    title: 'Strategies to Defeat Groupthink',
    section: '5.3 Team Protection Tools',
    type: 'concept',
    teacherNote: 'Assign a formal "Devil\'s Advocate" in student teams: The student whose explicit job is to find 3 major flaws in the plan before it is approved.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.3',
      pages: '75–76'
    },
    content: {
      heading: 'How Healthy Teams Protect Themselves',
      subheading: 'Practical techniques to encourage constructive dissent',
      body: 'High-performing academic and research teams build deliberate structures to ensure all risks are uncovered before execution:',
      bullets: [
        '1. Designate a Devil\'s Advocate: Formally assign one team member to deliberately challenge assumptions, probe weaknesses, and ask: "What could go horribly wrong?"',
        '2. Anonymous Brainwriting / Silent Voting: Have members write down their objections privately on sticky notes before any verbal discussion occurs.',
        '3. Second-Chance Review: Before making a final binding decision, pause for 24 hours and hold a brief meeting where everyone is asked to express their lingering doubts.',
        '4. External Feedback: Invite a teacher, peer from another group, or community elder to audit your plan with fresh, unbiased eyes.'
      ],
      keyTakeaway: 'True team loyalty means speaking up to protect the group from making a fatal mistake.',
      sourceCitation: 'Textbook Section 5.3 (pp. 75–76)'
    }
  },

  // SLIDE 11: Active Checkpoint 2: Spotting Groupthink
  {
    id: 'u5-s11',
    unitNumber: 5,
    slideNumber: 11,
    title: 'Checkpoint: Spot the Groupthink',
    section: '5.3 Active Checkpoint',
    type: 'quick-check',
    teacherNote: 'Have students analyze the dialogue: Notice the leader\'s dominance, the self-censorship, and the artificial rush to consensus.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.3',
      pages: '74–76'
    },
    content: {
      heading: 'Team Dialogue Diagnostic',
      body: 'During a planning meeting, the charismatic team leader says: "We are building an interactive 3D virtual reality tour of the school by next Friday. Does anyone disagree?"\nBudi realizes that nobody knows how to code 3D graphics, but thinks: "If I speak up, they will think I am lazy." He smiles and nods. Maya also keeps quiet.\n\nWhat critical group dynamics failure is occurring here?',
      interactiveData: {
        prompt: 'Which psychological hazard is actively undermining this planning meeting?',
        options: [
          {
            id: 'opt-1',
            label: 'Excellent leadership and harmonious consensus.',
            explanation: 'Incorrect. The agreement is completely artificial and fueled by fear of conflict.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Groupthink through self-censorship and fear of speaking out.',
            explanation: 'Correct! Budi and Maya are actively self-censoring their valid technical doubts to maintain social harmony, leading the team toward an impossible, doomed deadline.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Scope Creep caused by too many coding teachers.',
            explanation: 'Incorrect. The immediate failure is the silencing of dissent and false consensus (Groupthink).',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'When team members remain silent about obvious risks to protect harmony, Groupthink is in control.',
      sourceCitation: 'Textbook Section 5.3 (pp. 74–76)'
    }
  },

  // SLIDE 12: Scope Creep Explained
  {
    id: 'u5-s12',
    unitNumber: 5,
    slideNumber: 12,
    title: '5.3 The Danger of Scope Creep',
    section: 'Project Management Pitfalls',
    type: 'concept',
    teacherNote: 'Use the wedding cake analogy: You start planning a simple 1-tier cake. Then someone says "Let\'s make it 5 tiers with fireworks and live doves!" Soon the kitchen catches fire and the deadline is missed.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.3',
      pages: '75–77'
    },
    content: {
      heading: 'Beware the Project Monster: Scope Creep',
      subheading: 'How small, innocent additions destroy schedules and budgets',
      body: 'Scope Creep is the uncontrolled growth or continuous expansion of project goals, features, or requirements without adjustments to time, budget, or resources.\n\nIt usually starts with seemingly innocent phrases: "Wouldn\'t it be cool if we also added an app? And what if we also filmed a documentary?"',
      bullets: [
        'The Mechanism: Every extra feature adds research hours, testing time, and coordination friction.',
        'The Consequence: The core objective is abandoned because the team runs out of time, leading to half-finished, sloppy submissions.',
        'The Solution: Define a strict "Must-Have vs. Nice-to-Have" boundary. If someone suggests a new cool idea, park it in a "Future Phase" list and finish the core commitments first.'
      ],
      keyTakeaway: 'Protect your project boundaries. Master the courage to say "No" to unapproved additions.',
      sourceCitation: 'Textbook Section 5.3 (pp. 75–77)'
    }
  },

  // SLIDE 13: Cultural Facilitation: Indonesian Values
  {
    id: 'u5-s13',
    unitNumber: 5,
    slideNumber: 13,
    title: '5.4 Culturally Sensitive Facilitation',
    section: 'Indonesian Collaborative Context',
    type: 'concept',
    teacherNote: 'Connect directly to the Indonesian Pancasila values of Musyawarah untuk Mufakat and Gotong Royong. How do we balance respect for elders with open research debate?',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.4',
      pages: '76–77'
    },
    content: {
      heading: 'Navigating Culture in Team Collaboration',
      subheading: 'Balancing Hormat (Respect) with Musyawarah (Consensus)',
      body: 'In Indonesian schools and communities, collaborative planning operates within rich cultural traditions:\n\nUnderstanding these values allows student teams to collaborate respectfully without silencing critical scientific inquiry:',
      bullets: [
        'Hormat (Respect for Seniors and Leaders): Deep cultural reverence for teachers, elders, and leaders. Challenge: Younger or quieter students often feel culturally uncomfortable disagreeing openly with older or more assertive peers.',
        'Rukun (Social Harmony): The desire to maintain smooth interpersonal relationships and avoid direct confrontation. Challenge: Can accidentally trigger Groupthink if dissent is viewed as rude.',
        'Musyawarah untuk Mufakat: The traditional Indonesian practice of deliberative dialogue to reach a shared, harmonious consensus where everyone\'s dignity is preserved.'
      ],
      keyTakeaway: 'Authentic Musyawarah means everyone is heard before consensus is reached, honoring both harmony and truth.',
      sourceCitation: 'Textbook Section 5.4 (pp. 76–77)'
    }
  },

  // SLIDE 14: Practical Facilitation Tools: Silent Round-Robin & Stop-Light
  {
    id: 'u5-s14',
    unitNumber: 5,
    slideNumber: 14,
    title: 'Inclusive Facilitation Tools',
    section: '5.4 Practical Facilitation',
    type: 'comparison',
    teacherNote: 'Have students test the Stop-Light check-in right now in class: Green = on track, Yellow = need help, Red = stuck/blocked.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.4',
      pages: '76–78'
    },
    content: {
      heading: 'Two Proven Tools for Inclusive Team Meetings',
      subheading: 'How to ensure every student voice is heard and protected',
      body: 'To prevent dominant speakers from hijacking meetings while honoring cultural politeness, student leaders use two structured protocols:',
      comparison: {
        itemA: {
          label: 'Silent Round-Robin',
          points: [
            'How it works: A question is posed. For 3 minutes, complete silence is observed while everyone writes their ideas on sticky notes.',
            'Sharing Phase: Every member reads exactly one note in a circle without debate or interruption.',
            'Benefit: Eliminates intimidation. Shy students share their ideas with equal visual weight.'
          ]
        },
        itemB: {
          label: 'Stop-Light Check-in',
          points: [
            'How it works: At the start of every check-in, members declare their status with a color:',
            '🟢 Green: My tasks are completed on time; no obstacles.',
            '🟡 Yellow: I am slightly behind or need clarification.',
            '🔴 Red: I am completely blocked and need team assistance.',
            'Benefit: Removes shame from asking for help before deadlines are missed.'
          ]
        }
      },
      keyTakeaway: 'Structured facilitation tools remove social fear and create psychologically safe research environments.',
      sourceCitation: 'Textbook Section 5.4 (pp. 76–78)'
    }
  },

  // SLIDE 15: Misconception: "Planning Means No Flexibility"
  {
    id: 'u5-s15',
    unitNumber: 5,
    slideNumber: 15,
    title: 'Misconception: Rigidity vs. Planning',
    section: '5.4 Adaptive Planning',
    type: 'misconception',
    teacherNote: 'Dwight D. Eisenhower: "Plans are worthless, but planning is everything." The mental exercise of planning prepares you to adapt when the plan fails.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.4',
      pages: '77–78'
    },
    content: {
      heading: '"A Good Plan Must Never Be Changed Once Approved"',
      subheading: 'The difference between disciplined planning and foolish stubbornness',
      body: 'Many novice students believe that modifying a plan mid-project is an admission of failure. They stubbornly cling to broken schedules even when external realities change completely.\n\nIn truth, adaptive re-planning is the hallmark of sophisticated professional project management.',
      example: {
        title: 'Real-World Example: The Rainy Season Outdoor Survey',
        scenario: 'A student team plans a 3-day outdoor community survey. On Day 2, a torrential tropical storm floods the neighborhood roads.\n\n• Rigid Team: Stood in the rain, got their paper surveys ruined, and submitted zero valid responses because "it was the plan."\n• Adaptive Team: Immediately pivoted to phone interviews and online WhatsApp group forms, gathering 95 completed responses on schedule.',
        takeaway: 'When reality shifts, the goal remains constant, but the tactical actions must adapt.'
      },
      keyTakeaway: 'Planning does not guarantee smooth execution; it provides the baseline from which smart adaptations are made.',
      sourceCitation: 'Textbook Section 5.4 (pp. 77–78)'
    }
  },

  // SLIDE 16: Applied Case Study: Eco-Brick Community Clean-Up
  {
    id: 'u5-s16',
    unitNumber: 5,
    slideNumber: 16,
    title: 'Case Study: The Eco-Brick Project',
    section: '5.5 Applied Case Study',
    type: 'case-study',
    teacherNote: 'Walk through how this Grade 10 team applied the 6-step cycle to turn discarded plastic into modular school benches.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.5',
      pages: '77–78'
    },
    content: {
      heading: 'The Eco-Brick Community Project',
      subheading: 'How a Grade 10 team used the 6-step cycle to achieve community impact',
      body: 'Let us observe how a student team planned their environmental project to eliminate plastic snack wrappers in their neighborhood:',
      example: {
        title: 'The 6-Step Implementation Walkthrough',
        scenario: '1. Shared Vision: "Convert 200kg of unrecyclable plastic into 400 Eco-Bricks to build 4 outdoor park benches by October 15."\n2. SWOT Analysis: Strengths: High student enthusiasm. Weakness: No wooden frame tools. Opportunity: Local carpenter agreed to donate scrap wood. Threat: Final exams in week 4.\n3. Strategy: Collect wrappers from 5 local schools and hold packing workshops.\n4. Task Allocation: Maya (School logistics), Budi (Workshop trainer), Siti (Carpenter liaison).\n5. Resource Budget: 400 clean 1.5L bottles, wooden dowels, digital scale.\n6. Monitoring: Weekly stop-light meetings caught a delay in bottle collection early, prompting an emergency bottle drive.',
        takeaway: 'Disciplined adherence to the 6 steps allowed the team to deliver all 4 benches 3 days ahead of deadline.'
      },
      keyTakeaway: 'Systematic planning transforms complex environmental challenges into achievable daily milestones.',
      sourceCitation: 'Textbook Section 5.5 (pp. 77–78)'
    }
  },

  // SLIDE 17: Developing a Project Gantt Chart
  {
    id: 'u5-s17',
    unitNumber: 5,
    slideNumber: 17,
    title: 'Visual Scheduling: The Gantt Chart',
    section: '5.5 Project Tools',
    type: 'concept',
    teacherNote: 'Show how tasks overlap: Task B cannot begin until Task A is done (dependency). A Gantt chart makes dependencies visible.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.5',
      pages: '76–78'
    },
    content: {
      heading: 'Mapping Time with Gantt Charts',
      subheading: 'How to visualize project dependencies and prevent last-minute panics',
      body: 'A Gantt chart is a horizontal bar chart used in project management to illustrate a project schedule.\n\nIt displays all project activities against a timeline of days, weeks, or months, showing exactly when each task starts, when it finishes, and how tasks depend on each other.',
      bullets: [
        'Task Sequences: Shows which tasks can happen simultaneously (parallel tasks) and which must wait for prior tasks (sequential tasks).',
        'Critical Milestones: Diamonds marked on key dates (e.g., "Ethics Approval Granted", "Survey Closes", "Draft Due").',
        'Buffer Time: Always build a 15% buffer before the final deadline. If a project is due on November 20, set your team\'s internal completion date for November 14.',
        'Accountability: Every member can see exactly how a delay in their task will impact the entire team.'
      ],
      keyTakeaway: 'Gantt charts make invisible delays visible before they become catastrophic emergencies.',
      sourceCitation: 'Textbook Section 5.5 (pp. 76–78)'
    }
  },

  // SLIDE 18: Unit 5 Master Summary
  {
    id: 'u5-s18',
    unitNumber: 5,
    slideNumber: 18,
    title: 'Unit 5 Master Summary',
    section: '5.5 Unit Synthesis',
    type: 'summary',
    teacherNote: 'Review the key takeaways. Prompt students: "Which facilitation tool will your group use in your next team meeting?"',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.5',
      pages: '77–78'
    },
    content: {
      heading: 'Mastering Collaborative Planning',
      subheading: 'Key takeaways from Unit 5: Planning',
      body: 'You now command the essential planning and facilitation frameworks necessary to lead high-performing collaborative research teams.',
      bullets: [
        '1. SMART Formulation: Replace vague hopes with Specific, Measurable, Achievable, Relevant, and Time-bound objectives.',
        '2. The 6 Steps: Systematically cycle from Shared Vision → SWOT Analysis → Strategy → Task Allocation → Resources → Monitoring & Adaptation.',
        '3. Neutralizing Groupthink: Protect your team from artificial consensus by designating a Devil\'s Advocate and using anonymous brainwriting.',
        '4. Controlling Scope Creep: Defend your project boundaries by separating "Must-Have" requirements from "Nice-to-Have" distractions.',
        '5. Cultural Facilitation: Blend Indonesian values of Hormat and Musyawarah with modern tools like Silent Round-Robin and Stop-Light check-ins.'
      ],
      keyTakeaway: 'Great researchers do not merely study the world; they plan and execute coordinated action to improve it.',
      sourceCitation: 'Textbook Section 5.5 (pp. 77–78)'
    }
  },

  // SLIDE 19: Final Exit Challenge
  {
    id: 'u5-s19',
    unitNumber: 5,
    slideNumber: 19,
    title: 'Unit 5 Exit Challenge',
    section: '5.5 Application Challenge',
    type: 'quick-check',
    teacherNote: 'Final Exit Ticket: Have students evaluate this team planning dilemma and select the most effective adaptive intervention.',
    sourceRef: {
      unit: 'Unit 5',
      section: '5.5',
      pages: '78'
    },
    content: {
      heading: 'Exit Planning Challenge: The Mid-Project Crisis',
      body: 'A student research team is two weeks into a 4-week Global Perspectives project. During their Stop-Light check-in, the data collection lead gives a 🔴 Red status: only 12 out of 100 planned survey responses have been returned, and the survey platform link is broken.\n\nWhat is the most disciplined, effective immediate planning response for the team?',
      interactiveData: {
        prompt: 'How should the team adapt their plan based on the 6-step planning model?',
        options: [
          {
            id: 'opt-1',
            label: 'Ignore the problem, pretend 12 responses are enough, and start writing the final report immediately.',
            explanation: 'Incorrect. 12 responses are statistically invalid for a general school claim and violates academic integrity.',
            isCorrect: false
          },
          {
            id: 'opt-2',
            label: 'Hold an emergency adaptation session: reassign members to print paper surveys for direct classroom distribution, fix the link, and adjust the intermediate analysis milestone.',
            explanation: 'Correct! This is Step 6 (Monitoring & Adaptation) in action. The team acknowledges the obstacle early, reallocates internal resources to solve the bottleneck, and adjusts intermediate dates without abandoning the project mission.',
            isCorrect: true
          },
          {
            id: 'opt-3',
            label: 'Blame the data collection lead publicly and ask the teacher to assign everyone to new solo projects.',
            explanation: 'Incorrect. Collaborative maturity requires mutual problem-solving, not blaming teammates when obstacles arise.',
            isCorrect: false
          }
        ]
      },
      keyTakeaway: 'The true test of a plan is not whether problems occur, but how systematically the team adapts to solve them.',
      sourceCitation: 'Textbook Section 5.5 (p. 78)'
    }
  }
];
