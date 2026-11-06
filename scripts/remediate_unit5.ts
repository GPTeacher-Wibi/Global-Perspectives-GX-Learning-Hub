import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/games/unit5MicroGamesData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Standardize G5.2 option descriptions and labels across all items in G5_2_CHALLENGES
// We will replace each item's options with parallel lengths (~120-140 chars description each).

// Item 1 (g5-2-s1-q1)
content = content.replace(
  /id:\s*'g5-2-s1-q1'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s1-q1',
    stage: 1,
    title: 'Disputing a Senior Teacher\\'s Data Interpretation',
    culturalContext: 'Grade 10 project meeting with a respected senior supervising teacher (Guru Pembimbing).',
    situationScenario: 'The teacher suggests that historical flood data in Semarang was caused only by heavy rainfall, overlooking recent peer-reviewed land subsidence data that you found in a university journal.',
    proposedAction: '"Mohon izin Bapak, kami sangat menghargai arahan Bapak mengenai data curah hujan. Apakah kami diperkenankan untuk memperkaya analisis dengan menyandingkan data penurunan muka tanah (subsidence) dari jurnal ITB agar kajian kita semakin komprehensif?"',
    correctStrategy: 'hormat_constructive',
    options: [
      {
        strategy: 'hormat_constructive',
        label: 'Hormat with Constructive Inquiry (Culturally Appropriate)',
        description: 'Expresses sincere respect for authority while introducing empirical scientific data through polite inquiry and collaborative framing.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Aggressive Direct Contradiction (Counterproductive)',
        description: 'Bluntly declares the senior teacher wrong in front of the group, causing public loss of face (kehilangan muka) and damaging rapport.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Passive Compliance / Silent Resignation (Uncritical)',
        description: 'Remains completely silent and omits vital peer-reviewed findings, failing to advance scientific truth or contribute to the project.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Superficial Harmony at All Costs (Avoidance)',
        description: 'Verbally agrees with the teacher\\'s analysis to avoid friction while privately planning to bypass their guidance without discussion.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 2 (g5-2-s1-q2)
content = content.replace(
  /id:\s*'g5-2-s1-q2'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s1-q2',
    stage: 1,
    title: 'The Impasse Over Project Topic',
    culturalContext: 'Gotong Royong team meeting with 4 classmates from diverse ethnic backgrounds.',
    situationScenario: 'Two members insist on researching traditional market waste, while two others want to study motorcycle exhaust pollution. The team is polarized 2 vs 2.',
    proposedAction: 'Initiate Musyawarah: Convene a structured deliberative circle where each side presents their community impact, assess available time and survey access together, and seek a synthesis (e.g., studying traffic pollution near traditional market transit hubs) to reach Mufakat.',
    correctStrategy: 'musyawarah_mufakat',
    options: [
      {
        strategy: 'musyawarah_mufakat',
        label: 'Musyawarah untuk Mufakat (Culturally Appropriate)',
        description: 'Deliberative dialogue aimed at common ground, consensus, and shared ownership, rather than a brutal majority-rules vote that leaves losers feeling alienated.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Forced Binary Majority Showdown (Divisive)',
        description: 'Forces an abrupt yes-or-no majority vote, commanding the dissenting minority to submit without exploring constructive common ground.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Group Dissolution / Walking Away (Evasion)',
        description: 'Refuses to participate further in negotiations, passively demanding that the supervising teacher intervene and dictate the decision.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Avoidance of Difficult Choices (Compromise Failure)',
        description: 'Tosses a coin or merges unrelated research questions into an unworkable compromise, evading rigorous analytical deliberation.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 3 (g5-2-s1-q3)
content = content.replace(
  /id:\s*'g5-2-s1-q3'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s1-q3',
    stage: 1,
    title: 'Publicly Shaming an Unprepared Peer',
    culturalContext: 'Group presentation rehearsal in the school library.',
    situationScenario: 'Budi arrived late and did not finish his assigned PowerPoint slides on renewable energy tariffs.',
    proposedAction: 'Stand up and shout at Budi in the library hallway: "Budi, you are lazy, irresponsible, and ruining our future! Get out of our group right now!"',
    correctStrategy: 'confrontational_blunt',
    options: [
      {
        strategy: 'confrontational_blunt',
        label: 'Public Humiliation / Frontal Attack (Culturally & Professionally Destructive)',
        description: 'Direct public confrontation that strips dignity, violates Rukun, and triggers defensive hostility rather than accountability.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Private Clarification & Support Protocol (Culturally Appropriate)',
        description: 'Holds a calm private discussion (Empat Mata) to diagnose blockers, sets a clear 24-hour milestone, and preserves working relations.'
      },
      {
        strategy: 'musyawarah_mufakat',
        label: 'Formal Musyawarah Deliberation (Collaborative Review)',
        description: 'Convenes the whole team in a structured circle to redistribute overdue workload equitably while addressing project bottlenecks.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Complete Avoidance & Resentment (Passive Resignation)',
        description: 'Remains completely silent while quietly completing Budi\\'s unfinished slides, fostering hidden resentment and team friction.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 4 (g5-2-s1-q4)
content = content.replace(
  /id:\s*'g5-2-s1-q4'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s1-q4',
    stage: 1,
    title: 'Managing Gotong Royong Fairly',
    culturalContext: 'Community clean-up and school recycling bin installation.',
    situationScenario: 'Some team members assume "Gotong Royong" means everyone shows up and randomly does whatever they feel like, leading to three people painting one sign while heavy timber stays uncarried.',
    proposedAction: 'Before starting physical work, gather in a brief Musyawarah circle to review an explicit task breakdown matrix (who carries materials, who measures wood, who paints labels, who documents photos) so mutual aid is organized and purposeful.',
    correctStrategy: 'musyawarah_mufakat',
    options: [
      {
        strategy: 'musyawarah_mufakat',
        label: 'Structured Gotong Royong with Role Clarity (Culturally Appropriate)',
        description: 'Combines communal solidarity (Gotong Royong) with clear task distribution matrix to ensure shared responsibility and efficiency.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Unstructured Free-for-All (Chaotic Drift)',
        description: 'Allows aimless participation without role coordination, resulting in duplicated efforts, neglected tasks, and student confusion.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Autocratic Dictatorship (Coercive Control)',
        description: 'Imposes rigid personal commands unilaterally without consulting team members or seeking consensus during task allocation.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Passive Resignation (Silent Burden)',
        description: 'Accepts unequal effort without speaking up, forcing compliant students to bear all heavy tasks to avoid social conflict.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 5 (g5-2-s2-q1)
content = content.replace(
  /id:\s*'g5-2-s2-q1'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s2-q1',
    stage: 2,
    title: 'Questioning an Older Student Council President',
    culturalContext: 'Inter-grade planning council for School Environment Week.',
    situationScenario: 'The Grade 12 OSIS President proposes spending the entire budget on expensive plastic banners and helium balloons, which contradicts the environmental message of the week.',
    proposedAction: '"Terima kasih banyak atas gagasan kemeriahan acaranya, Kak. Kami sangat sepakat acara harus meriah. Namun, apakah kita bisa mempertimbangkan media digital dan mural bambu agar selaras dengan pesan pelestarian lingkungan sekaligus menghemat 60% anggaran?"',
    correctStrategy: 'hormat_constructive',
    options: [
      {
        strategy: 'hormat_constructive',
        label: 'Constructive Bridge-Building (Hormat + Alternative Proposal)',
        description: 'Affirms the positive intent of the senior while offering an eco-friendly, cost-effective alternative backed by logical alignment.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Frontal Mockery & Condemnation (Disrespectful Dissent)',
        description: 'Publicly accuses the senior leader of hypocrisy and environmental ignorance, triggering defensive hostility and division.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Silent Compliance & Subversion (Passive Grumbling)',
        description: 'Complies outwardly with the wasteful purchasing plan while privately complaining and venting frustration on social media.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Blind Agreement & Rationalization (Complacent Harmony)',
        description: 'Endorses the harmful proposal unconditionally under the pretext of maintaining harmony, ignoring the core environmental purpose.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 6 (g5-2-s2-q2)
content = content.replace(
  /id:\s*'g5-2-s2-q2'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s2-q2',
    stage: 2,
    title: 'Handling Free-Riding with "Bicara Empat Mata"',
    culturalContext: 'High school research paper due in 10 days.',
    situationScenario: 'Dina has not attended the last two group meetings and has not replied to WhatsApp group chats about her section.',
    proposedAction: 'Meet Dina individually in a quiet school courtyard: "Dina, kami perhatikan kamu belum sempat bergabung di dua diskusi terakhir. Apakah ada kendala atau tugas lain yang sedang berat? Kami sangat membutuhkan bantuanmu untuk bagian analisis wawancara; mari kita lihat bagian mana yang bisa kita sesuaikan agar selesai sebelum Jumat."',
    correctStrategy: 'rukun_preservation',
    options: [
      {
        strategy: 'rukun_preservation',
        label: 'Empathic Private Accountability (Bicara Empat Mata)',
        description: 'Approaches the struggling peer with empathy and diagnostic inquiry, preserving dignity while re-establishing firm task commitments.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Public Group Chat Humiliation (Aggressive Exposure)',
        description: 'Broadcasts screenshots of Dina\\'s inactive chat records to a massive student group, inflicting humiliation and resentment.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Total Ostracization (Silent Disregard)',
        description: 'Silently removes Dina\\'s name from the research roster without offering any opportunity for dialogue, feedback, or recovery.'
      },
      {
        strategy: 'musyawarah_mufakat',
        label: 'Immediate Formal Tribunal (Premature Trial)',
        description: 'Convenes an adversarial tribunal meeting before checking whether personal emergencies or health issues caused the absence.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 7 (g5-2-s2-q3)
content = content.replace(
  /id:\s*'g5-2-s2-q3'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s2-q3',
    stage: 2,
    title: 'The Silent Junior Girl in the Group',
    culturalContext: 'Grade 10 physics project with 3 assertive boys and 1 shy female student (Siti).',
    situationScenario: 'The boys speak loudly and quickly, dominating the conversation. Siti sits quietly taking notes and never raises her hand, though her notebook contains excellent sketches of the experimental rig.',
    proposedAction: 'The group leader pauses the fast dialogue: "Teman-teman, mari kita jeda sejenak. Siti sudah membuat catatan dan sketsa yang sangat detail di bukunya. Mari kita dengarkan pandangan Siti mengenai desain turbin ini."',
    correctStrategy: 'musyawarah_mufakat',
    options: [
      {
        strategy: 'musyawarah_mufakat',
        label: 'Active Facilitation of Quiet Voices (Inclusive Deliberation)',
        description: 'Deliberately creating space and inviting quieter members to speak, honoring Rukun by ensuring all group members contribute their wisdom.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Public Put-Down of Dominant Peers (Aggressive Shaming)',
        description: 'Angrily berates the assertive students with personal insults rather than establishing structured conversational turn-taking.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Ignoring Siti Completely (Exclusionary Drift)',
        description: 'Assumes silence implies lack of knowledge or interest, proceeding to finalize designs without reviewing Siti\\'s notes.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Passive Acceptance of Dominance (Superficial Peace)',
        description: 'Allows aggressive speakers to monopolize discussions without intervention to avoid momentary social discomfort or tension.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 8 (g5-2-s2-q4)
content = content.replace(
  /id:\s*'g5-2-s2-q4'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s2-q4',
    stage: 2,
    title: 'Addressing Religious / Cultural Scheduling Needs',
    culturalContext: 'Organizing weekend survey collection during Friday prayer time.',
    situationScenario: 'A non-Muslim group leader schedules an urgent mandatory team interview session for Friday at 12:00 PM without checking schedules.',
    proposedAction: 'Muslim team member states respectfully: "Maaf teman-teman, pada hari Jumat pukul 11.45–12.45 rekan-rekan muslim menunaikan Ibadah Shalat Jumat. Bagaimana jika kita mulai wawancara pukul 13.15 setelah ibadah dan makan siang bersama?"',
    correctStrategy: 'hormat_constructive',
    options: [
      {
        strategy: 'hormat_constructive',
        label: 'Respectful Scheduling Adjustment (Toleransi & Hormat)',
        description: 'Communicates religious commitments with dignity while proposing a practical timetable adjustment that accommodates everyone.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Accusatory Outrage (Hostile Escalation)',
        description: 'Accuses the leader of intentional discrimination and hostility rather than resolving the calendar oversight constructively.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Silent Truancy (Unannounced Absence)',
        description: 'Absents oneself from the scheduled session without notifying teammates or offering an alternative time slot for fieldwork.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Compromising Fundamental Duties (Unprincipled Accord)',
        description: 'Sacrifices core religious obligations in silence merely to avoid initiating an easy 30-minute schedule rearrangement.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 9 (g5-2-s3-q1)
content = content.replace(
  /id:\s*'g5-2-s3-q1'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s3-q1',
    stage: 3,
    title: 'The Intercultural Village Outreach',
    culturalContext: 'Fieldwork in a traditional rural village in Central Java.',
    situationScenario: 'Students want to interview female farmers about fertilizer costs, but arrive in urban casual clothing (shorts and sleeveless tops) and start filming with smartphones without speaking to the Kepala Desa (Village Chief).',
    proposedAction: 'Halt immediately: Put on neat, modest clothing (batik/long trousers), visit the Balai Desa with the team leader to pay courtesy respects (Sowan) to the Kepala Desa and elders, explain the research purpose humbly, and request permission before conducting any community interviews.',
    correctStrategy: 'hormat_constructive',
    options: [
      {
        strategy: 'hormat_constructive',
        label: 'Traditional Sowan Protocol (Cultural Respect & Ethics)',
        description: 'Honors local traditions, community leadership, and social hierarchy before conducting empirical research within the village.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Arrogant Academic Entitlement (Coercive Research)',
        description: 'Demands immediate citizen interviews, insisting that university accreditation and research permits override local customs.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Cancelling Fieldwork Completely (Defeatist Retreat)',
        description: 'Abandons community data collection entirely upon encountering local formalities, discarding the entire research mission.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Covert Surveillance (Evasive Intrusion)',
        description: 'Records villagers secretly from behind trees to avoid greeting community elders, violating research ethics and human dignity.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 10 (g5-2-s3-q2)
content = content.replace(
  /id:\s*'g5-2-s3-q2'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s3-q2',
    stage: 3,
    title: 'Navigating Disagreement Over Traditional Knowledge vs Scientific Data',
    culturalContext: 'Herbal medicine (Jamu) vs laboratory antibacterial testing project.',
    situationScenario: 'A local elder insists that boiling guava leaves according to ancestral lunar cycles makes them 10 times stronger. Lab tests show identical tannin concentrations regardless of lunar phase.',
    proposedAction: 'Synthesize respectfully in the final paper: "Ancestral traditions have preserved guava leaf utilization for generations as an accessible remedy. Our laboratory chemical assays confirmed high tannin efficacy across all trials, while highlighting the valuable cultural heritage that inspired this botanical inquiry."',
    correctStrategy: 'musyawarah_mufakat',
    options: [
      {
        strategy: 'musyawarah_mufakat',
        label: 'Respectful Synthesis (Combining Cultural Heritage & Science)',
        description: 'Acknowledges cultural tradition and historical knowledge heritage while upholding empirical lab results with scientific clarity.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Scientific Chauvinism / Ridicule (Arrogant Rejection)',
        description: 'Derides ancestral herbal knowledge as superstitious nonsense in the final paper, alienating the host community completely.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Falsifying Laboratory Findings (Academic Dishonesty)',
        description: 'Fabricates experimental chemical data to mirror folk narratives, compromising academic integrity and scientific rigor.'
      },
      {
        strategy: 'rukun_preservation',
        label: 'Omitting Quantitative Evidence (Evasive Censorship)',
        description: 'Suppresses rigorous laboratory measurements entirely to avoid perceived social friction, degrading the academic paper.'
      }
    ],
    isCulturallyAppropriate:`
);

// Item 11 (g5-2-s3-q3)
content = content.replace(
  /id:\s*'g5-2-s3-q3'[\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*isCulturallyAppropriate:/,
  `id: 'g5-2-s3-q3',
    stage: 3,
    title: 'Rebuilding Harmony After a Heated Argument',
    culturalContext: 'Post-debate reconciliation in a high school competition team.',
    situationScenario: 'Two days ago, Farhan and Kevin shouted at each other over who should deliver the opening presentation. The tension is palpable and freezing team communication.',
    proposedAction: 'The team convenes for a casual "Ngopi / Makan Bareng" (informal shared meal), where both members apologize for losing emotional control, acknowledge each other\\'s strengths, and agree on a co-presentation format where Farhan delivers the hook and Kevin explains the methodology.',
    correctStrategy: 'rukun_preservation',
    options: [
      {
        strategy: 'rukun_preservation',
        label: 'Restoration of Rukun through Shared Fellowship and Shared Roles',
        description: 'Restores communal warmth through informal fellowship, mutual apologies, and cooperative co-roles that value both strengths.'
      },
      {
        strategy: 'confrontational_blunt',
        label: 'Permanent Interpersonal Schism (Vindictive Escalation)',
        description: 'Demands that the supervising instructor permanently expel the rival member from the team, destroying group cohesion.'
      },
      {
        strategy: 'passive_disengagement',
        label: 'Prolonged Silent Cold War (Paralyzing Avoidance)',
        description: 'Continues project collaboration in hostile silence without addressing root friction, crippling effective communication.'
      },
      {
        strategy: 'musyawarah_mufakat',
        label: 'Superficial Coin Toss Mechanism (Arbitrary Avoidance)',
        description: 'Decides presentation roles with a coin flip without addressing the interpersonal rift, leaving emotional resentment unresolved.'
      }
    ],
    isCulturallyAppropriate:`
);

// ============================================================================
// 2. Standardize G5.3 Step 1 Defect options and Step 2 Repaired Goal statements
// ============================================================================

// Item 1 (g5-3-s1-q1)
content = content.replace(
  /id:\s*'g5-3-s1-q1'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s1-q1',
    stage: 1,
    title: 'The Infinite Global Solution',
    projectDomain: 'High School Plastic Waste Initiative',
    draftGoalStatement: '"Our 4-student group will completely eliminate all plastic pollution across Southeast Asia by the end of next month."',
    primaryDefect: 'lacks_achievable',
    repairedGoalOptionA: '"Our 4-person student team will draft formal petitions urging international ministers across Southeast Asia to shut down commercial plastic manufacturing factories forever."',
    repairedGoalOptionB: '"By November 30, our 4-person team will audit plastic waste in our high school canteen and reduce single-use plastic water bottles by 50% by installing 2 refill stations."',
    repairedGoalOptionC: '"By next semester, our student environmental group will launch an awareness campaign across major Indonesian cities to eliminate urban consumer single-use plastic waste."',
    correctRepairedOption: 'B',
    options: [
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Unrealistic Scope)',
        description: 'The stated scope exceeds the team\\'s available time, human skills, financial budget, or institutional authority.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity (Vague Definition)',
        description: 'The goal statement uses vague or ambiguous phrasing without clarifying exact actions, targets, or operational scope.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary (Missing Schedule)',
        description: 'The project plan lacks explicit calendar deadlines, completion milestones, or a defined operational timeframe.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      }
    ],
    explanation:`
);

// Item 2 (g5-3-s1-q2)
content = content.replace(
  /id:\s*'g5-3-s1-q2'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s1-q2',
    stage: 1,
    title: 'The Vague Happiness Wish',
    projectDomain: 'Mental Health in Adolescence',
    draftGoalStatement: '"Our project will make Grade 10 students feel significantly happier and less stressed during the school year."',
    primaryDefect: 'lacks_measurable',
    repairedGoalOptionA: '"Throughout the upcoming academic term, our student support team will organize engaging activities to ensure Grade 10 students feel consistently happier and less overwhelmed."',
    repairedGoalOptionB: '"During morning homeroom sessions, our project members will broadcast humorous anecdotes over the school intercom system to boost overall student morale and reduce exam tension."',
    repairedGoalOptionC: '"By October 15, we will implement a 10-minute daily mindfulness breathing protocol in Class 10-B and measure changes in self-reported stress levels using a standardized 1–5 Likert scale across 30 students."',
    correctRepairedOption: 'C',
    options: [
      {
        defect: 'lacks_relevant',
        label: 'Lacks Relevance to Research Focus',
        description: 'The objective fails to align with the overarching research purpose, core community problem, or team priorities.'
      },
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability (No Numerical Indicator)',
        description: 'The statement omits quantifiable indicators, baseline metrics, or verifiable criteria for monitoring progress.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary (Missing Schedule)',
        description: 'The project plan lacks explicit calendar deadlines, completion milestones, or a defined operational timeframe.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      }
    ],
    explanation:`
);

// Item 3 (g5-3-s1-q3)
content = content.replace(
  /id:\s*'g5-3-s1-q3'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s1-q3',
    stage: 1,
    title: 'The Perpetual Research Project',
    projectDomain: 'Urban Public Transportation Study',
    draftGoalStatement: '"We will survey TransJakarta passengers on Bus Route 1 to determine average passenger waiting times at peak hours."',
    primaryDefect: 'lacks_time_bound',
    repairedGoalOptionA: '"Between October 1 and October 14, our team will survey 100 passengers at Harmoni station to benchmark peak-hour waiting times."',
    repairedGoalOptionB: '"Our research group will continuously administer passenger questionnaires along Bus Route 1 until our supervising faculty advisor agrees we have collected sufficient responses."',
    repairedGoalOptionC: '"Our project team will interview daily TransJakarta transit riders at designated bus stops whenever student schedules permit during ordinary afternoon commuting journeys."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Unrealistic Scope)',
        description: 'The stated scope exceeds the team\\'s available time, human skills, financial budget, or institutional authority.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity (Vague Definition)',
        description: 'The goal statement uses vague or ambiguous phrasing without clarifying exact actions, targets, or operational scope.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Deadline (Missing Schedule)',
        description: 'The project plan lacks explicit calendar deadlines, completion milestones, or a defined operational timeframe.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      }
    ],
    explanation:`
);

// Item 4 (g5-3-s1-q4)
content = content.replace(
  /id:\s*'g5-3-s1-q4'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s1-q4',
    stage: 1,
    title: 'The Irrelevant Distraction',
    projectDomain: 'Inquiry into Local Renewable Solar Energy in Malang',
    draftGoalStatement: '"By December 1, our solar energy team will organize a massive campus-wide video game tournament to raise money for new gaming monitors."',
    primaryDefect: 'lacks_relevant',
    repairedGoalOptionA: '"By December 1, our renewable energy team will host an exhibition displaying solar-powered electronics in the cafeteria to spark casual conversations about clean power technology."',
    repairedGoalOptionB: '"By December 1, our team will conduct an energy audit of 12 rooftop solar panels on the science building to calculate actual kilowatt-hour savings for the school budget."',
    repairedGoalOptionC: '"By December 1, our inquiry group will coordinate with local gaming societies to sponsor open discussions evaluating environmental electricity usage in entertainment venues."',
    correctRepairedOption: 'B',
    options: [
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary (Missing Schedule)',
        description: 'The project plan lacks explicit calendar deadlines, completion milestones, or a defined operational timeframe.'
      },
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability (No Numerical Indicator)',
        description: 'The statement omits quantifiable indicators, baseline metrics, or verifiable criteria for monitoring progress.'
      },
      {
        defect: 'lacks_relevant',
        label: 'Lacks Relevance to Mission Focus',
        description: 'The objective fails to align with the overarching research purpose, core community problem, or team priorities.'
      }
    ],
    explanation:`
);

// Item 5 (g5-3-s2-q1)
content = content.replace(
  /id:\s*'g5-3-s2-q1'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s2-q1',
    stage: 2,
    title: 'Transforming "Improve Library Reading"',
    projectDomain: 'School Literacy Project',
    draftGoalStatement: '"We will make the school library better so more students read books."',
    primaryDefect: 'lacks_specific',
    repairedGoalOptionA: '"Our student literacy initiative will petition the school administration to acquire hundreds of contemporary publications and furnish reading lounges across the building."',
    repairedGoalOptionB: '"Our literacy team will repaint the library reading hall, install inspirational educational banners, and encourage visitors to read novels during scheduled break periods."',
    repairedGoalOptionC: '"By November 15, our team will catalog 150 contemporary graphic novels and launch a weekly lunch-hour peer reading club in the library to increase Grade 10 book checkouts by 25%."',
    correctRepairedOption: 'C',
    options: [
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity (Extremely Vague)',
        description: 'The goal statement uses vague or ambiguous phrasing without clarifying exact actions, targets, or operational scope.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary (Missing Schedule)',
        description: 'The project plan lacks explicit calendar deadlines, completion milestones, or a defined operational timeframe.'
      },
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability (No Numerical Indicator)',
        description: 'The statement omits quantifiable indicators, baseline metrics, or verifiable criteria for monitoring progress.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      }
    ],
    explanation:`
);

// Item 6 (g5-3-s2-q2)
content = content.replace(
  /id:\s*'g5-3-s2-q2'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s2-q2',
    stage: 2,
    title: 'Transforming "Canteen Healthy Food"',
    projectDomain: 'Nutritional Health in High Schools',
    draftGoalStatement: '"Our group will convince the canteen vendors to sell healthy food soon."',
    primaryDefect: 'lacks_measurable',
    repairedGoalOptionA: '"By October 31, our group will partner with 4 canteen vendors to introduce at least 1 certified balanced fruit or vegetable snack option priced under Rp 10.000 per stall."',
    repairedGoalOptionB: '"During the coming weeks, our student campaign will distribute informative brochures to food sellers warning them about the negative health impacts of excessive oily snacks."',
    repairedGoalOptionC: '"Our wellness group will collaborate with school foodservice operators so that nutritious and affordable meal selections become widely accessible across the campus soon."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'lacks_relevant',
        label: 'Lacks Relevance to Research Focus',
        description: 'The objective fails to align with the overarching research purpose, core community problem, or team priorities.'
      },
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability (No Numerical Indicator)',
        description: 'The statement omits quantifiable indicators, baseline metrics, or verifiable criteria for monitoring progress.'
      },
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Unrealistic Scope)',
        description: 'The stated scope exceeds the team\\'s available time, human skills, financial budget, or institutional authority.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      }
    ],
    explanation:`
);

// Item 7 (g5-3-s2-q3)
content = content.replace(
  /id:\s*'g5-3-s2-q3'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s2-q3',
    stage: 2,
    title: 'Transforming "Interview Mangrove Experts"',
    projectDomain: 'Coastal Conservation Research',
    draftGoalStatement: '"We will interview some environmental people about mangroves."',
    primaryDefect: 'lacks_specific',
    repairedGoalOptionA: '"Our research team will engage local coastal residents and fishermen in casual discussions to gather general impressions regarding regional mangrove forest preservation."',
    repairedGoalOptionB: '"By September 25, our team will conduct 3 semi-structured 30-minute recorded interviews with certified marine biologists from the Surabaya Coastal Agency on mangrove reforestation survival rates."',
    repairedGoalOptionC: '"During our upcoming study period, our group will read numerous academic online resources and compile encyclopedic summaries documenting Indonesian coastal biodiversity issues."',
    correctRepairedOption: 'B',
    options: [
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary (Missing Schedule)',
        description: 'The project plan lacks explicit calendar deadlines, completion milestones, or a defined operational timeframe.'
      },
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Unrealistic Scope)',
        description: 'The stated scope exceeds the team\\'s available time, human skills, financial budget, or institutional authority.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity (Vague Definition)',
        description: 'The goal statement uses vague or ambiguous phrasing without clarifying exact actions, targets, or operational scope.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      }
    ],
    explanation:`
);

// Item 8 (g5-3-s2-q4)
content = content.replace(
  /id:\s*'g5-3-s2-q4'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s2-q4',
    stage: 2,
    title: 'Transforming "Build an AI App"',
    projectDomain: 'Educational Technology Project',
    draftGoalStatement: '"Our 3-student team will code an artificial intelligence supercomputer app that teaches every subject in Indonesian high schools by next Friday."',
    primaryDefect: 'lacks_achievable',
    repairedGoalOptionA: '"Our three-member student group will program and publish a comprehensive machine learning application covering the nationwide secondary school syllabus on digital platforms next month."',
    repairedGoalOptionB: '"Our student project will partner with global technology corporations to secure enterprise servers and hire professional programmers to construct a universal tutoring software suite."',
    repairedGoalOptionC: '"By next Friday, our 3-student team will build and test a functional 10-question interactive digital quiz on Grade 10 chemistry nomenclature using Google Forms and evaluate user feedback from 20 classmates."',
    correctRepairedOption: 'C',
    options: [
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary (Missing Schedule)',
        description: 'The project plan lacks explicit calendar deadlines, completion milestones, or a defined operational timeframe.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity (Vague Definition)',
        description: 'The goal statement uses vague or ambiguous phrasing without clarifying exact actions, targets, or operational scope.'
      },
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Unrealistic Scope)',
        description: 'The stated scope exceeds the team\\'s available time, human skills, financial budget, or institutional authority.'
      }
    ],
    explanation:`
);

// Item 9 (g5-3-s3-q1)
content = content.replace(
  /id:\s*'g5-3-s3-q1'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s3-q1',
    stage: 3,
    title: 'The Fully Validated SMART Charter',
    projectDomain: 'School Energy Conservation Audit',
    draftGoalStatement: '"By November 10, our 4-person research team will complete an electricity audit of 16 high school classrooms, log air conditioner temperature settings over 10 consecutive school days, and present a policy brief to the school principal recommending a 24°C thermostat baseline to cut campus energy consumption by 12%."',
    primaryDefect: 'fully_smart',
    repairedGoalOptionA: '"This objective is already fully SMART: It has specific targets (16 classrooms), measurable metrics (10 days, 24°C, 12% savings), achievable scope, high relevance to school energy, and a firm deadline (November 10)."',
    repairedGoalOptionB: '"We should simplify this draft objective by removing all numerical indicators, temperature thresholds, and calendar milestones so the project remains adaptable to unexpected circumstances."',
    repairedGoalOptionC: '"We should broaden this school energy investigation by requiring our student team to audit municipal commercial buildings and regional industrial complexes across East Java before reporting."',
    correctRepairedOption: 'A',
    options: [
      {
        defect: 'fully_smart',
        label: 'Fully SMART Objective (Exemplary Rigor)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity (Vague Definition)',
        description: 'The goal statement uses vague or ambiguous phrasing without clarifying exact actions, targets, or operational scope.'
      },
      {
        defect: 'lacks_measurable',
        label: 'Lacks Measurability (No Numerical Indicator)',
        description: 'The statement omits quantifiable indicators, baseline metrics, or verifiable criteria for monitoring progress.'
      },
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Unrealistic Scope)',
        description: 'The stated scope exceeds the team\\'s available time, human skills, financial budget, or institutional authority.'
      }
    ],
    explanation:`
);

// Item 10 (g5-3-s3-q2)
content = content.replace(
  /id:\s*'g5-3-s3-q2'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s3-q2',
    stage: 3,
    title: 'Diagnosing the Double-Defect Proposal',
    projectDomain: 'Local River Water Quality Project',
    draftGoalStatement: '"Our team wants to clean up Brantas River so fish stop dying."',
    primaryDefect: 'lacks_specific',
    repairedGoalOptionA: '"Our student environmental group will design and install massive industrial filtration barriers across the entire river basin to prevent debris accumulation by the end of next month."',
    repairedGoalOptionB: '"Between October 1 and October 20, our 5-person team will collect and test water samples at 3 designated points along the Brantas tributary to measure dissolved oxygen levels and publish an educational brochure for 100 riverbank residents."',
    repairedGoalOptionC: '"Our campaign team will submit urgent appeals to regional governmental authorities requesting comprehensive legislative reforms and increased municipal environmental patrols along the riverway soon."',
    correctRepairedOption: 'B',
    options: [
      {
        defect: 'lacks_relevant',
        label: 'Lacks Relevance to Research Focus',
        description: 'The objective fails to align with the overarching research purpose, core community problem, or team priorities.'
      },
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity (Vague Definition)',
        description: 'The goal statement uses vague or ambiguous phrasing without clarifying exact actions, targets, or operational scope.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary (Missing Schedule)',
        description: 'The project plan lacks explicit calendar deadlines, completion milestones, or a defined operational timeframe.'
      }
    ],
    explanation:`
);

// Item 11 (g5-3-s3-q3)
content = content.replace(
  /id:\s*'g5-3-s3-q3'[\s\S]*?repairedGoalOptionA:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionB:\s*['"][^'"]*['"][\s\S]*?repairedGoalOptionC:\s*['"][^'"]*['"][\s\S]*?options:\s*\[([\s\S]*?)\]\s*,\s*explanation:/,
  `id: 'g5-3-s3-q3',
    stage: 3,
    title: 'Balancing Ambition with Student Reality',
    projectDomain: 'School Mental Health Survey',
    draftGoalStatement: '"By next Monday, we will publish a peer-reviewed 200-page psychology book analyzing adolescent depression across 50 international high schools."',
    primaryDefect: 'lacks_achievable',
    repairedGoalOptionA: '"By next Monday, our research group will complete a comprehensive manuscript reviewing adolescent mental health literature and submit the draft to international medical journal editors."',
    repairedGoalOptionB: '"Over the upcoming weekend, our student team will review 50 empirical psychology monographs and synthesize their complete analytical frameworks into an executive briefing document."',
    repairedGoalOptionC: '"By December 5, our team will administer a verified 15-item wellbeing survey to 80 Grade 10 students at our school, synthesize findings into an 8-page portfolio report, and present actionable recommendations to the counseling department."',
    correctRepairedOption: 'C',
    options: [
      {
        defect: 'lacks_specific',
        label: 'Lacks Specificity (Vague Definition)',
        description: 'The goal statement uses vague or ambiguous phrasing without clarifying exact actions, targets, or operational scope.'
      },
      {
        defect: 'lacks_time_bound',
        label: 'Lacks Time-Bound Boundary (Missing Schedule)',
        description: 'The project plan lacks explicit calendar deadlines, completion milestones, or a defined operational timeframe.'
      },
      {
        defect: 'lacks_achievable',
        label: 'Lacks Achievability (Unrealistic Scope)',
        description: 'The stated scope exceeds the team\\'s available time, human skills, financial budget, or institutional authority.'
      },
      {
        defect: 'fully_smart',
        label: 'Already Fully SMART (Balanced Criteria)',
        description: 'The proposed goal successfully satisfies all five criteria with clear, quantifiable, and realistic targets.'
      }
    ],
    explanation:`
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Unit 5 Micro-Games remediation completed successfully.');
