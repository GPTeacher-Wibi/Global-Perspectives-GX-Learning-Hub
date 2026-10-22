/**
 * ============================================================================
 * GLOBAL PERSPECTIVES LEARNING HUB — GRADE 10
 * UNIT 4 MICRO-GAMES CURRICULUM DATA
 * ============================================================================
 * Academic Source: Global Perspectives Grade X Textbook, 2nd Edition (pp. 60–78)
 * Language Level: CEFR B1 English (Clear, direct, controlled academic vocabulary)
 *
 * Micro-Games included:
 * - g4-1: Forest or Tree? (Analysis vs Synthesis, Single Study vs Cross-Study Evidence)
 * - g4-2: Synthesis Method Matrix (Narrative, Meta-Analysis, Thematic Synthesis, Systematic Review)
 * - g4-3: Connecting the Dots (Triangulation, Heterogeneity, Reconciling Conflicting Findings)
 */

export interface MisconceptionAlert {
  label: string;
  explanation: string;
}

// ============================================================================
// g4-1: FOREST OR TREE? DATA (Analysis vs. Synthesis)
// ============================================================================

export type EvidenceScope = 'tree' | 'forest';

export interface ForestTreeItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  scenarioContext: string;
  evidenceStatement: string;
  correctScope: EvidenceScope;
  options: {
    scope: EvidenceScope;
    label: string;
    description: string;
  }[];
  explanation: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G4_1_CHALLENGES: ForestTreeItem[] = [
  // STAGE 1: TREE VS FOREST SCOPE CLASSIFICATION (4 items)
  {
    id: 'g4-1-s1-q1',
    stage: 1,
    title: 'Scope 1: The Single Classroom Screen Time Survey',
    scenarioContext: 'An inquiry report on adolescent attention spans.',
    evidenceStatement: '"In our survey of 28 students in Class 10-A at SMA Negeri 1 Malang, 71% of students reported feeling sleepy during first-period chemistry on Tuesday."',
    correctScope: 'tree',
    options: [
      {
        scope: 'tree',
        label: 'Individual Study Finding (The Tree)',
        description: 'A micro-level data point extracted from a single isolated investigation, specific setting, or single sample.'
      },
      {
        scope: 'forest',
        label: 'Synthesized Evidence Across Studies (The Forest)',
        description: 'A macro-level conclusion derived from aggregating and comparing findings across multiple independent investigations.'
      }
    ],
    explanation: 'This statement represents an isolated "Tree": it describes one single classroom (28 students) in one specific school on one specific morning. It cannot describe adolescent biology as a whole.',
    pedagogicalKey: 'A single study is a single tree: valuable in its location, but not the entire forest.',
    misconceptionAlert: {
      label: 'Misconception: A single survey proves a universal fact',
      explanation: 'One classroom in Malang tells you about that specific group of 28 students, not about all teenagers in Southeast Asia.'
    }
  },
  {
    id: 'g4-1-s1-q2',
    stage: 1,
    title: 'Scope 2: Global Meta-Analysis on Adolescent Sleep and Screens',
    scenarioContext: 'A pooled systematic review published in an international pediatric journal.',
    evidenceStatement: '"A meta-analysis pooling 45 independent clinical trials across 18 countries (total N = 62,400) demonstrates that blue-light screen exposure within 60 minutes of bedtime delays melatonin onset by an average of 42 minutes across diverse cultures."',
    correctScope: 'forest',
    options: [
      {
        scope: 'tree',
        label: 'Individual Study Finding (The Tree)',
        description: 'Data from a single isolated investigation.'
      },
      {
        scope: 'forest',
        label: 'Synthesized Evidence Across Studies (The Forest)',
        description: 'Aggregated findings pooling multiple independent studies across different contexts to establish generalizable patterns.'
      }
    ],
    explanation: 'This statement represents the "Forest": it synthesizes 45 independent investigations across 18 countries, establishing a robust, cross-cultural scientific consensus.',
    pedagogicalKey: 'The Forest emerges when multiple independent studies are systematically aggregated.'
  },
  {
    id: 'g4-1-s1-q3',
    stage: 1,
    title: 'Scope 3: Mangrove Seedling Survival in a Bali Estuary',
    scenarioContext: 'A field report from a conservation NGO.',
    evidenceStatement: '"During the 2024 monsoon season, 350 Rhizophora saplings planted in the Benoa Harbour estuary achieved an 82% survival rate when protected by bamboo wave barriers."',
    correctScope: 'tree',
    options: [
      {
        scope: 'tree',
        label: 'Individual Study Finding (The Tree)',
        description: 'Local empirical data from one specific restoration site.'
      },
      {
        scope: 'forest',
        label: 'Synthesized Evidence Across Studies (The Forest)',
        description: 'A cross-study systematic review of coastal restoration techniques.'
      }
    ],
    explanation: 'This is a single "Tree": it reports survival rates at one specific harbour during one specific year using bamboo barriers.',
    pedagogicalKey: 'Micro-level site data provides foundational evidence, but requires synthesis to inform national policy.'
  },
  {
    id: 'g4-1-s1-q4',
    stage: 1,
    title: 'Scope 4: Systematic Review of Coastal Mangrove Rehabilitation Programs',
    scenarioContext: 'A United Nations Environment Programme (UNEP) global synthesis.',
    evidenceStatement: '"Synthesizing 120 coastal restoration projects implemented across the Indo-Pacific over 20 years reveals that community-managed mangrove projects achieve 3.4 times higher long-term survival than government-only top-down plantings."',
    correctScope: 'forest',
    options: [
      {
        scope: 'tree',
        label: 'Individual Study Finding (The Tree)',
        description: 'Data from a single coastal village planting.'
      },
      {
        scope: 'forest',
        label: 'Synthesized Evidence Across Studies (The Forest)',
        description: 'A macro-level synthesis comparing 120 projects over two decades to discover structural patterns.'
      }
    ],
    explanation: 'This is the "Forest": it examines 120 separate projects over two decades, identifying structural governance patterns that no single village planting could ever reveal.',
    pedagogicalKey: 'Synthesis reveals high-level governance patterns invisible inside isolated case studies.'
  },

  // STAGE 2: THE "SINGLE TREE ERROR" DIAGNOSTIC (4 items)
  {
    id: 'g4-1-s2-q1',
    stage: 2,
    title: 'Error 1: The Viral "Coffee Cures Cancer" Headline',
    scenarioContext: 'A sensational viral news website publishes an article with a flashing banner.',
    evidenceStatement: '"Headline: SCIENTISTS PROVE COFFEE PREVENTS ALL CANCER! Reality: A small petri-dish study exposed rat liver cells in a test tube to high doses of concentrated caffeine."',
    correctScope: 'tree',
    options: [
      {
        scope: 'tree',
        label: 'Severe Single-Tree Error',
        description: 'Sensationalizing an isolated in-vitro cellular trial into an absolute claim about human health.'
      },
      {
        scope: 'forest',
        label: 'Valid Forest Synthesis',
        description: 'A comprehensive medical consensus based on human clinical trials.'
      }
    ],
    explanation: 'This is the classic "Single Tree Error": journalists take an isolated petri-dish test on rat cells and falsely declare a universal cure for human cancer.',
    pedagogicalKey: 'Never confuse an isolated laboratory cell trial with a comprehensive human evidence synthesis.',
    misconceptionAlert: {
      label: 'Misconception: If a university published it, it must be universal truth',
      explanation: 'A rigorous study can be 100% genuine, but only true within its narrow sample (rat cells in a dish). Synthesis checks if it works in humans.'
    }
  },
  {
    id: 'g4-1-s2-q2',
    stage: 2,
    title: 'Error 2: Generalizing National Policy from One Wealthy Private School',
    scenarioContext: 'An educational policymaker argues for mandatory 100% digital tablet textbooks across Indonesia.',
    evidenceStatement: '"A 6-month trial at a private international academy in Central Jakarta where all students have high-speed home fiber internet and personal iPad Pros showed a 15% increase in interactive quiz completion."',
    correctScope: 'tree',
    options: [
      {
        scope: 'tree',
        label: 'Single-Tree Policy Blunder',
        description: 'Over-generalizing an elite private sample with exceptional infrastructure to an entire diverse nation.'
      },
      {
        scope: 'forest',
        label: 'Representative Forest Synthesis',
        description: 'Synthesizing evidence across rural, suburban, and urban schools across all island provinces.'
      }
    ],
    explanation: 'This is a dangerous Single-Tree error: applying findings from an elite school with flawless electricity and wealthy parents to remote rural schools in Papua or Maluku will cause policy catastrophe.',
    pedagogicalKey: 'A single tree in a manicured private garden tells you nothing about the wild forest.'
  },
  {
    id: 'g4-1-s2-q3',
    stage: 2,
    title: 'Error 3: Conflicting Nutrition Studies (Eggs: Good or Bad?)',
    scenarioContext: 'A student is confused because Study A in 2021 said eggs raise cholesterol, but Study B in 2023 said eggs improve heart health.',
    evidenceStatement: '"Why do single studies often seem to contradict each other in the daily news?"',
    correctScope: 'forest',
    options: [
      {
        scope: 'tree',
        label: 'One Study Must Be Fake',
        description: 'Assuming that because two studies disagree, one of the scientists must be corrupt or incompetent.'
      },
      {
        scope: 'forest',
        label: 'Synthesis Resolves Apparent Conflicts',
        description: 'Recognizing that single studies have different participant ages, diets, and exercise levels. A systematic review synthesizes these variables to reveal the nuanced truth.'
      }
    ],
    explanation: 'Single studies frequently appear to conflict because of differing samples, dietary controls, and methodologies. A systematic review synthesizes all studies, explaining why differences exist.',
    pedagogicalKey: 'Contradictory single studies are normal; synthesis explains why they differ and uncovers the balanced consensus.',
    misconceptionAlert: {
      label: 'Misconception: Disagreement means science is broken',
      explanation: 'Disagreement highlights differing contexts (e.g., sedentary adults vs active youth). Synthesis bridges the context.'
    }
  },
  {
    id: 'g4-1-s2-q4',
    stage: 2,
    title: 'Error 4: The Lone dissenter in Climate Science',
    scenarioContext: 'A social media video claims climate change is a hoax because one retired petroleum engineer published a blog post claiming glaciers are growing.',
    evidenceStatement: '"99.8% of peer-reviewed climate studies confirm human-induced global warming, but the video claims the single blog post proves all other scientists are lying."',
    correctScope: 'forest',
    options: [
      {
        scope: 'tree',
        label: 'Cherry-Picking a Single Tree',
        description: 'Selecting one isolated dissenting voice while ignoring thousands of converging scientific studies.'
      },
      {
        scope: 'forest',
        label: 'The Overwhelming Forest of Evidence',
        description: 'Recognizing that thousands of independent satellite measurements, ice core records, and ocean temperature buoys converge on global warming.'
      }
    ],
    explanation: 'Cherry-picking is the intentional use of the Single-Tree Error: deliberately picking the one tree that matches your personal bias while ignoring the entire forest of peer-reviewed evidence.',
    pedagogicalKey: 'Cherry-picking an isolated dissenter is the opposite of authentic academic synthesis.'
  },

  // STAGE 3: CROSS-STUDY EVIDENCE AGGREGATION (3 items)
  {
    id: 'g4-1-s3-q1',
    stage: 3,
    title: 'Aggregation 1: Synthesizing School Uniform Policies on Bullying',
    scenarioContext: 'A school board evaluates 12 independent studies on mandatory school uniforms.',
    evidenceStatement: '"Studies 1–4 (urban public schools) found uniforms reduced clothing theft by 28%. Studies 5–8 (rural schools) found zero difference in bullying. Studies 9–12 (psychology clinics) found uniforms increased peer bonding in lower-income cohorts."',
    correctScope: 'forest',
    options: [
      {
        scope: 'tree',
        label: 'Declare Uniforms 100% Perfect Everywhere',
        description: 'Rely only on Studies 1–4 and ignore Studies 5–8.'
      },
      {
        scope: 'forest',
        label: 'Synthesized Contextual Conclusion',
        description: 'Synthesize the evidence: uniforms effectively reduce economic ostentation and theft in unequal urban environments, but have minimal impact in culturally homogeneous rural communities.'
      }
    ],
    explanation: 'Authentic synthesis does not declare a simplistic "winner". It combines the findings to explain WHERE and WHY uniforms help (high economic inequality urban settings vs rural settings).',
    pedagogicalKey: 'Synthesis does not erase nuances; it contextualizes when and where interventions succeed.'
  },
  {
    id: 'g4-1-s3-q2',
    stage: 3,
    title: 'Aggregation 2: Meta-Analytic Forest Plot Reading',
    scenarioContext: 'A researcher inspects a Meta-Analytic Forest Plot comparing 10 clinical trials of a dengue vaccine. The diamond symbol representing the pooled summary effect sits clearly to the right of the vertical line of no effect.',
    evidenceStatement: '"While 2 small trials with wide confidence intervals crossed zero, the pooled synthesis diamond shows a statistically significant 68% risk reduction across 30,000 patients."',
    correctScope: 'forest',
    options: [
      {
        scope: 'tree',
        label: 'Focus Only on the 2 Weak Trials',
        description: 'Reject the vaccine because 2 small trials had inconclusive results.'
      },
      {
        scope: 'forest',
        label: 'Rely on the Pooled Meta-Analytic Summary Diamond',
        description: 'Acknowledge that small studies lack statistical power, but the combined pooled dataset demonstrates clear overall clinical protection.'
      }
    ],
    explanation: 'In a meta-analytic forest plot, the summary diamond aggregates statistical power across all studies, overcoming the sample-size limitations of individual small trials.',
    pedagogicalKey: 'The pooled synthesis diamond integrates statistical power across all studies.'
  },
  {
    id: 'g4-1-s3-q3',
    stage: 3,
    title: 'Aggregation 3: Moving from Analysis to Synthesis in Global Perspectives',
    scenarioContext: 'A Cambridge examiner provides guidance on Grade 10 research papers.',
    evidenceStatement: '"Analysis dismantles individual sources into components (strengths, weaknesses, bias). Synthesis rebuilds those separate components into a brand-new, multi-dimensional conceptual understanding."',
    correctScope: 'forest',
    options: [
      {
        scope: 'tree',
        label: 'Analysis Only (Listing Summaries)',
        description: 'Writing three separate paragraphs summarizing Source A, Source B, and Source C without connecting them.'
      },
      {
        scope: 'forest',
        label: 'Authentic Synthesis (Weaving the Forest)',
        description: 'Comparing, contrasting, and integrating the perspectives of Source A, B, and C to construct an overarching, coherent judgment.'
      }
    ],
    explanation: 'A research paper that merely summarizes sources one-by-one is only doing analysis. Synthesis requires weaving the threads together to build a new, integrated argument.',
    pedagogicalKey: 'Analysis takes things apart; Synthesis puts them together to create new knowledge.'
  }
];

// ============================================================================
// g4-2: SYNTHESIS METHOD MATRIX DATA (Methodologies of Synthesis)
// ============================================================================

export type SynthesisMethodType = 'meta-analysis' | 'thematic-synthesis' | 'narrative-synthesis' | 'systematic-review';

export interface SynthesisMethodItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  evidencePoolContext: string;
  dataTypeAndHomogeneity: string;
  researchGoal: string;
  correctMethod: SynthesisMethodType;
  options: {
    method: SynthesisMethodType;
    label: string;
    description: string;
  }[];
  explanation: string;
  whyAlternativesFail: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G4_2_CHALLENGES: SynthesisMethodItem[] = [
  // STAGE 1: EVIDENCE CHARACTERISTIC MATCHING (4 items)
  {
    id: 'g4-2-s1-q1',
    stage: 1,
    title: 'Evidence Pool 1: Randomized Controlled Trials on Malaria Mosquito Nets',
    evidencePoolContext: 'An epidemiologist retrieves 18 randomized clinical trials testing insecticide-treated bed nets across tropical regions.',
    dataTypeAndHomogeneity: 'Highly homogeneous quantitative data: all 18 trials measure the identical numerical outcome (malaria infection rate per 1,000 person-years) using standardized odds ratios.',
    researchGoal: 'To calculate a single, mathematically pooled numerical effect size and confidence interval for the intervention.',
    correctMethod: 'meta-analysis',
    options: [
      {
        method: 'meta-analysis',
        label: 'Meta-Analysis (Statistical Synthesis)',
        description: 'Mathematically pools numerical effect sizes across homogeneous quantitative studies using statistical weighting.'
      },
      {
        method: 'thematic-synthesis',
        label: 'Thematic Synthesis (Qualitative Synthesis)',
        description: 'Translates qualitative codes and themes across interview and observational studies.'
      },
      {
        method: 'narrative-synthesis',
        label: 'Narrative Synthesis (Descriptive Synthesis)',
        description: 'Uses words and text to weave together diverse studies with different methods and outcomes.'
      }
    ],
    explanation: 'When studies are quantitatively homogeneous (all measuring the same numerical variable with standardized metrics), Meta-Analysis is the gold standard.',
    whyAlternativesFail: 'Using a narrative summary when rigorous mathematical pooling is possible would discard valuable statistical precision.',
    pedagogicalKey: 'Homogeneous numerical effect sizes + mathematical pooling goal = Meta-Analysis.'
  },
  {
    id: 'g4-2-s1-q2',
    stage: 1,
    title: 'Evidence Pool 2: Community Experiences of Relocation After Volcanic Eruptions',
    evidencePoolContext: 'A disaster management sociologist gathers 12 qualitative interview studies documenting how villagers displaced by Mt. Merapi adapted to temporary shelters.',
    dataTypeAndHomogeneity: 'Qualitative, descriptive interview transcripts, field diaries, and emotional narratives in diverse Indonesian dialects.',
    researchGoal: 'To synthesize recurring human themes of grief, community mutual aid (gotong royong), and institutional friction across the 12 qualitative studies.',
    correctMethod: 'thematic-synthesis',
    options: [
      {
        method: 'meta-analysis',
        label: 'Meta-Analysis',
        description: 'Calculating an average numerical p-value.'
      },
      {
        method: 'thematic-synthesis',
        label: 'Thematic Synthesis',
        description: 'Identifies, compares, and translates qualitative concepts and themes across multiple textual studies to generate higher-order interpretations.'
      },
      {
        method: 'narrative-synthesis',
        label: 'Narrative Synthesis',
        description: 'A broad storytelling overview without inductive thematic translation.'
      }
    ],
    explanation: 'Thematic Synthesis takes qualitative studies, extracts primary codes from each paper, and translates them into higher-order analytical themes across all studies.',
    whyAlternativesFail: 'You cannot perform a meta-analysis on qualitative grief and cultural resilience because they are not numerical metrics.',
    pedagogicalKey: 'Synthesizing qualitative interviews across studies = Thematic Synthesis.'
  },
  {
    id: 'g4-2-s1-q3',
    stage: 1,
    title: 'Evidence Pool 3: Urban Plastic Bag Ban Impacts Across Municipalities',
    evidencePoolContext: 'A public policy researcher reviews 15 municipal reports on plastic bag regulations in Jakarta, Denpasar, and Banjarmasin. The reports include legal ordinances, retailer tax balance sheets, street vendor interviews, and river trash cleanup tallies.',
    dataTypeAndHomogeneity: 'Highly heterogeneous, mixed-methods evidence: legal texts, qualitative vendor complaints, and municipal revenue spreadsheets.',
    researchGoal: 'To synthesize how legal policies, economic costs, and community compliance interact to shape the policy’s overall feasibility.',
    correctMethod: 'narrative-synthesis',
    options: [
      {
        method: 'meta-analysis',
        label: 'Meta-Analysis',
        description: 'Pooling numbers into a single statistical average.'
      },
      {
        method: 'thematic-synthesis',
        label: 'Thematic Synthesis',
        description: 'Analyzing interview quotes only.'
      },
      {
        method: 'narrative-synthesis',
        label: 'Narrative Synthesis',
        description: 'Constructs a structured verbal narrative synthesizing diverse, heterogeneous evidence (qualitative, quantitative, legal, economic) to answer complex policy questions.'
      }
    ],
    explanation: 'When evidence is diverse and heterogeneous (combining laws, economics, interviews, and trash counts), Narrative Synthesis is required to weave them into a coherent explanatory text.',
    whyAlternativesFail: 'Meta-analysis cannot combine a municipal legal ordinance with a street vendor’s emotional interview.',
    pedagogicalKey: 'Heterogeneous mixed evidence across different methodologies = Narrative Synthesis.'
  },
  {
    id: 'g4-2-s1-q4',
    stage: 1,
    title: 'Evidence Pool 4: The Prerequisite Method: The Comprehensive Protocol',
    evidencePoolContext: 'A medical research institute begins an inquiry into adolescent mental health. Before reading any studies, they publish a pre-registered protocol detailing exact Boolean search queries, 5 academic databases, explicit inclusion/exclusion criteria, and dual-reviewer screening.',
    dataTypeAndHomogeneity: 'Methodological search and quality appraisal protocol.',
    researchGoal: 'To systematically identify every existing published and unpublished study without publication bias.',
    correctMethod: 'systematic-review',
    options: [
      {
        method: 'systematic-review',
        label: 'Systematic Review Protocol',
        description: 'A rigorous, repeatable methodology for searching, screening, appraising, and synthesizing all available evidence to minimize bias.'
      },
      {
        method: 'meta-analysis',
        label: 'Meta-Analysis',
        description: 'The statistical calculation step.'
      },
      {
        method: 'narrative-synthesis',
        label: 'Narrative Synthesis',
        description: 'Writing an informal essay.'
      }
    ],
    explanation: 'A Systematic Review is the comprehensive, transparent methodology that governs how studies are searched and screened. Meta-analysis or narrative synthesis is the analytical technique used within it.',
    whyAlternativesFail: 'A literature review without pre-registered search criteria is a traditional casual review, prone to severe cherry-picking.',
    pedagogicalKey: 'Systematic Review is the overarching rigorous search protocol; Meta-analysis is the mathematical tool.'
  },

  // STAGE 2: SYNTHESIS METHOD TRADE-OFFS & PITFALLS (4 items)
  {
    id: 'g4-2-s2-q1',
    stage: 2,
    title: 'Trade-Off 1: The "Garbage In, Garbage Out" Trap in Meta-Analysis',
    evidencePoolContext: 'A researcher mathematically pools 20 studies on a dietary supplement. However, 18 of the studies were funded by the supplement company, had tiny sample sizes (N=10), and lacked control groups.',
    dataTypeAndHomogeneity: 'Flawed, biased numerical trials pooled together.',
    researchGoal: 'To understand why a high-precision meta-analysis can still produce completely false conclusions.',
    correctMethod: 'meta-analysis',
    options: [
      {
        method: 'meta-analysis',
        label: 'Garbage In, Garbage Out Reality',
        description: 'Mathematical pooling cannot fix underlying study bias: pooling 18 low-quality, biased studies simply produces an ultra-precise biased falsehood.'
      },
      {
        method: 'thematic-synthesis',
        label: 'Math Always Cleans Up Bad Data',
        description: 'Running a meta-analysis automatically removes corporate bias and fixes experimental errors.'
      },
      {
        method: 'narrative-synthesis',
        label: 'Delete All 20 Studies',
        description: 'Ignore all medical research forever.'
      }
    ],
    explanation: 'Meta-analysis does not magically fix bad data. If the underlying primary studies are biased or poorly designed, the pooled result is simply "high-precision garbage". Quality appraisal is mandatory.',
    whyAlternativesFail: 'Mathematics cannot turn dishonest data into trustworthy science.',
    pedagogicalKey: 'Quality appraisal must precede meta-analysis: pooling biased studies produces biased conclusions.'
  },
  {
    id: 'g4-2-s2-q2',
    stage: 2,
    title: 'Trade-Off 2: Subjective Bias Risk in Narrative Synthesis',
    evidencePoolContext: 'A student writes a "narrative synthesis" on solar energy. However, he only mentions the 4 positive articles and completely ignores 6 articles discussing battery toxic waste and high capital costs.',
    dataTypeAndHomogeneity: 'Unsystematic selection of diverse studies.',
    researchGoal: 'To identify the primary danger of poorly executed narrative synthesis.',
    correctMethod: 'narrative-synthesis',
    options: [
      {
        method: 'narrative-synthesis',
        label: 'Unchecked Cherry-Picking & Confirmation Bias',
        description: 'Without transparent inclusion criteria and systematic search protocols, narrative synthesis easily degenerates into an author’s personal opinion piece.'
      },
      {
        method: 'meta-analysis',
        label: 'Narrative Synthesis is Always Mathematically Perfect',
        description: 'Narrative synthesis is immune to bias because it uses words.'
      },
      {
        method: 'thematic-synthesis',
        label: 'Translate Words into Numbers',
        description: 'Narrative synthesis only works if you turn all words into binary code.'
      }
    ],
    explanation: 'The greatest risk of narrative synthesis is researcher confirmation bias. To remain scientifically credible, narrative synthesis must be conducted within a transparent systematic review framework.',
    whyAlternativesFail: 'Words without transparent inclusion standards allow authors to cherry-pick favored conclusions.',
    pedagogicalKey: 'Narrative synthesis requires strict transparency to prevent descending into personal storytelling.'
  },
  {
    id: 'g4-2-s2-q3',
    stage: 2,
    title: 'Trade-Off 3: Publication Bias and the "File Drawer Problem"',
    evidencePoolContext: 'Pharmaceutical researchers conduct 10 clinical trials on an antidepressant. 3 trials showed mild benefits and were published in top journals. 7 trials showed zero benefit and were locked in the company’s filing cabinet.',
    dataTypeAndHomogeneity: 'Selective publication skewing the available evidence pool.',
    researchGoal: 'How must a systematic reviewer detect and counteract this "File Drawer" publication bias?',
    correctMethod: 'systematic-review',
    options: [
      {
        method: 'systematic-review',
        label: 'Search Grey Literature & Funnel Plots',
        description: 'Search clinical trial registries, government archives, and unpublished dissertations (grey literature), using Funnel Plots to detect missing negative trials.'
      },
      {
        method: 'meta-analysis',
        label: 'Only Read Published Papers',
        description: 'Assume that if a trial was not published, it never existed.'
      },
      {
        method: 'thematic-synthesis',
        label: 'Interview the Drug CEO',
        description: 'Ask the pharmaceutical executive if he feels honest.'
      }
    ],
    explanation: 'Publication bias occurs when positive results get published while negative results are hidden. Rigorous systematic reviews actively search grey literature and use funnel plots to uncover missing studies.',
    whyAlternativesFail: 'Reviewing only published papers overestimates real-world intervention efficacy.',
    pedagogicalKey: 'A systematic review must search unpublished grey literature to defeat publication bias.'
  },
  {
    id: 'g4-2-s2-q4',
    stage: 2,
    title: 'Trade-Off 4: When Heterogeneity Forbids Meta-Analysis',
    evidencePoolContext: 'A researcher wants to meta-analyze 8 studies on "student wellbeing". However, Study 1 measured cortisol hormone levels, Study 2 used a 3-question happiness quiz, Study 3 counted disciplinary suspensions, and Study 4 conducted art therapy reflections.',
    dataTypeAndHomogeneity: 'Extreme methodological and conceptual heterogeneity.',
    researchGoal: 'Why is conducting a statistical meta-analysis on these 8 studies an analytical disaster?',
    correctMethod: 'narrative-synthesis',
    options: [
      {
        method: 'narrative-synthesis',
        label: 'Excessive Heterogeneity (Comparing Apples to Oranges)',
        description: 'The studies measure completely different constructs with different tools; pooling them statistically creates a meaningless mathematical number. Narrative synthesis must be used instead.'
      },
      {
        method: 'meta-analysis',
        label: 'Force a Meta-Analysis Anyway',
        description: 'Average the cortisol numbers with the art therapy drawings.'
      },
      {
        method: 'thematic-synthesis',
        label: 'Ignore All 8 Studies',
        description: 'Claim that student wellbeing does not exist.'
      }
    ],
    explanation: 'When studies have high clinical or methodological heterogeneity (measuring completely different things with incompatible tools), statistical meta-analysis is invalid. Narrative synthesis is the proper method.',
    whyAlternativesFail: 'Forcing a mathematical average across incompatible constructs produces statistical nonsense.',
    pedagogicalKey: 'High heterogeneity forbids meta-analysis: synthesize narratively instead.'
  },

  // STAGE 3: REAL-WORLD CASE SYNTHESIS (3 items)
  {
    id: 'g4-2-s3-q1',
    stage: 3,
    title: 'Case 1: National Telemedicine in Remote Indonesian Archipelagos',
    evidencePoolContext: 'The Ministry of Health evaluates 25 studies on telemedicine in remote islands (Maluku, NTT, Mentawai). Evidence includes: 8 satellite latency logs, 10 doctor qualitative interviews, 4 patient cost analyses, and 3 hospital emergency transfer statistics.',
    dataTypeAndHomogeneity: 'Heterogeneous mixed methods: technical telemetry, qualitative interviews, econometric costs, and clinical outcomes.',
    researchGoal: 'Select the optimal synthesis strategy to advise the Minister of Health on a national tele-health rollout.',
    correctMethod: 'narrative-synthesis',
    options: [
      {
        method: 'narrative-synthesis',
        label: 'Structured Narrative Synthesis with Evidence Matrix',
        description: 'Organize evidence into policy pillars (Infrastructure, Clinical Safety, Cultural Acceptance, Economic Cost) and synthesize findings narratively.'
      },
      {
        method: 'meta-analysis',
        label: 'Strict Meta-Analysis Only',
        description: 'Discard all doctor interviews and satellite logs to calculate an average of transfer statistics.'
      },
      {
        method: 'thematic-synthesis',
        label: 'Thematic Synthesis Only',
        description: 'Discard all satellite latency and cost data to focus only on interview feelings.'
      }
    ],
    explanation: 'A structured Narrative Synthesis allows policymakers to weave together technical bandwidth limits, economic cost savings, and doctor cultural acceptance into a comprehensive policy roadmap.',
    whyAlternativesFail: 'Single-method syntheses discard vital dimensions (either ignoring technical reality or ignoring human adoption).',
    pedagogicalKey: 'Complex national policy requires structured narrative synthesis spanning all dimensions.'
  },
  {
    id: 'g4-2-s3-q2',
    stage: 3,
    title: 'Case 2: Comparing Vaccine Efficacy Across 15 Randomized Clinical Trials',
    evidencePoolContext: 'International health authorities evaluate 15 Phase-3 randomized double-blind placebo-controlled trials testing a single vaccine formula against severe COVID-19 hospitalizations.',
    dataTypeAndHomogeneity: 'Identical biological outcome (prevention of ICU hospitalization), identical trial design, standardized relative risk ratios.',
    researchGoal: 'Calculate the definitive global pooled efficacy percentage.',
    correctMethod: 'meta-analysis',
    options: [
      {
        method: 'meta-analysis',
        label: 'Formal Meta-Analysis with Random-Effects Modeling',
        description: 'Mathematically pool effect sizes across all 15 clinical trials to determine the exact global vaccine efficacy and 95% confidence intervals.'
      },
      {
        method: 'thematic-synthesis',
        label: 'Thematic Analysis of Vaccine Labels',
        description: 'Extract adjectives from the cardboard boxes.'
      },
      {
        method: 'narrative-synthesis',
        label: 'Informal Blog Narrative',
        description: 'Write an informal story summarizing three of the trials.'
      }
    ],
    explanation: 'With identical trial designs and standardized relative risk metrics, Meta-Analysis is the only scientifically acceptable method to determine true pooled vaccine efficacy.',
    whyAlternativesFail: 'Subjective narrative summaries discard the rigorous statistical power of 15 randomized trials.',
    pedagogicalKey: 'Standardized quantitative clinical trials = Meta-Analysis.'
  },
  {
    id: 'g4-2-s3-q3',
    stage: 3,
    title: 'Case 3: Indigenous Lived Realities in Customary Forest Protection',
    evidencePoolContext: 'Anthropologists and environmental researchers review 14 ethnographic studies of Dayak customary forest (hutan adat) governance in Kalimantan.',
    dataTypeAndHomogeneity: 'In-depth qualitative field interviews, ancestral ritual observations, and village elder customary deliberations.',
    researchGoal: 'To build a new theoretical framework explaining how ancestral spiritual taboos regulate sustainable timber harvesting.',
    correctMethod: 'thematic-synthesis',
    options: [
      {
        method: 'thematic-synthesis',
        label: 'Thematic Synthesis of Ethnographic Concepts',
        description: 'Translate codes and metaphors across the 14 Dayak communities to generate an integrated model of indigenous conservation governance.'
      },
      {
        method: 'meta-analysis',
        label: 'Meta-Analysis of Forest Tree Counts',
        description: 'Count tree trunks in satellite photos.'
      },
      {
        method: 'narrative-synthesis',
        label: 'Casual Storytelling',
        description: 'Write a tourist travel guide.'
      }
    ],
    explanation: 'Thematic synthesis systematically extracts qualitative metaphors and cultural concepts across multiple ethnographic studies to build an overarching theoretical model.',
    whyAlternativesFail: 'Meta-analysis cannot process spiritual customs, and casual storytelling lacks systematic qualitative translation.',
    pedagogicalKey: 'Generating theoretical models from multiple ethnographic studies = Thematic Synthesis.'
  }
];

// ============================================================================
// g4-3: CONNECTING THE DOTS DATA (Triangulation & Heterogeneity)
// ============================================================================

export interface ConnectingDotsItem {
  id: string;
  stage: 1 | 2 | 3;
  title: string;
  controversyTopic: string;
  studyA: { source: string; finding: string; method: string };
  studyB: { source: string; finding: string; method: string };
  studyC?: { source: string; finding: string; method: string };
  taskPrompt: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  heterogeneityReason?: string;
  synthesisResolution: string;
  pedagogicalKey: string;
  misconceptionAlert?: MisconceptionAlert;
}

export const G4_3_CHALLENGES: ConnectingDotsItem[] = [
  // STAGE 1: CONVERGENCE & DIVERGENCE MAPPING (4 items)
  {
    id: 'g4-3-s1-q1',
    stage: 1,
    title: 'Dossier 1: Smartphone Bans in Secondary Schools',
    controversyTopic: 'Evaluating the impact of banning smartphones during school hours.',
    studyA: {
      source: 'Study A (Jakarta Public High Schools, N=1,200)',
      finding: 'Banning smartphones increased end-of-term math scores by 6.4%, with the largest gains among previously low-performing students.',
      method: 'Quantitative standardized exam analysis.'
    },
    studyB: {
      source: 'Study B (Bandung Independent Academies, N=350)',
      finding: 'Banning smartphones showed zero measurable improvement in academic grades, but increased student feelings of anxiety and communication isolation.',
      method: 'Mixed-methods survey and student diaries.'
    },
    taskPrompt: 'Where do Study A and Study B diverge, and what underlying difference explains the contradiction?',
    options: [
      {
        id: 'opt-1a',
        text: 'They diverge on academic impact: Study A saw gains in large public schools with high classroom distraction, while Study B observed no academic gain in well-resourced academies where students already had personal laptops.',
        isCorrect: true,
        feedback: 'Correct! The contradiction dissolves when you examine context: in schools where phones were the primary distraction, bans helped; in schools with laptops, banning phones only caused social anxiety.'
      },
      {
        id: 'opt-1b',
        text: 'Study A is 100% correct and Study B was conducted by incompetent researchers who should be fired.',
        isCorrect: false,
        feedback: 'Incorrect. In Global Perspectives, conflicting findings indicate contextual heterogeneity, not researcher incompetence.'
      },
      {
        id: 'opt-1c',
        text: 'There is no difference between the two studies; both proved that smartphones cause blindness.',
        isCorrect: false,
        feedback: 'Incorrect. Neither study measured vision.'
      }
    ],
    heterogeneityReason: 'Institutional baseline differences (public classroom distraction vs. elite school laptop redundancy).',
    synthesisResolution: 'Smartphone bans improve outcomes where mobile devices are the primary source of distraction, but have negligible academic benefit where alternative digital devices exist.',
    pedagogicalKey: 'Divergent findings reveal contextual boundary conditions, not scientific failure.'
  },
  {
    id: 'g4-3-s1-q2',
    stage: 1,
    title: 'Dossier 2: Microplastics in Commercial Seafood',
    controversyTopic: 'Assessing health risks of microplastics in Indonesian coastal fisheries.',
    studyA: {
      source: 'Marine Toxicology Lab (Jakarta Bay)',
      finding: '100% of tested green mussels contained synthetic microplastic fibers (average 4.2 particles per gram of tissue).',
      method: 'Microscopic spectroscopy chemical extraction.'
    },
    studyB: {
      source: 'Public Health Epidemiological Survey (North Jakarta Coastal Residents)',
      finding: 'Regular seafood consumers showed no elevated rates of gastrointestinal disease or organ failure compared to non-consumers over a 3-year period.',
      method: 'Hospital clinical admission tracking.'
    },
    taskPrompt: 'How should an evidence synthesis connect these two seemingly contradictory findings?',
    options: [
      {
        id: 'opt-2a',
        text: 'Corroborate biological presence with human clinical latency: microplastics are definitively present in seafood (Study A), but human physical symptoms may take decades to manifest or require higher dosage thresholds (Study B).',
        isCorrect: true,
        feedback: 'Correct! The studies do not contradict; they measure different stages of the problem (environmental presence vs. long-term human toxicological latency).'
      },
      {
        id: 'opt-2b',
        text: 'Declare microplastics 100% harmless because Study B found no hospital admissions in 3 years.',
        isCorrect: false,
        feedback: 'Incorrect. 3 years is far too short to detect chronic cellular toxicity or bioaccumulation risks.'
      },
      {
        id: 'opt-2c',
        text: 'Claim Study A fabricated its microscope photos.',
        isCorrect: false,
        feedback: 'Incorrect. Rejection of empirical evidence without counter-evidence is unscientific.'
      }
    ],
    heterogeneityReason: 'Time-horizon latency (immediate physical contamination vs multi-decade chronic health latency).',
    synthesisResolution: 'Microplastic contamination is ubiquitous in coastal molluscs, but chronic human health risks require multi-decade longitudinal monitoring rather than short-term hospital tracking.',
    pedagogicalKey: 'Connecting findings requires understanding time horizons and biological latency.'
  },
  {
    id: 'g4-3-s1-q3',
    stage: 1,
    title: 'Dossier 3: Solar Home Systems in Rural East Nusa Tenggara (NTT)',
    controversyTopic: 'Evaluating decentralized solar panels for off-grid island electrification.',
    studyA: {
      source: 'Government Engineering Audit',
      finding: '92% of installed solar home kits remained fully functional after 12 months, providing reliable lighting.',
      method: 'Technical hardware voltage inspection.'
    },
    studyB: {
      source: 'Anthropological Fieldwork (Same Villages)',
      finding: 'Families report severe frustration because the 50-watt solar panels cannot power water pumps, rice cookers, or refrigeration, keeping women trapped in manual labor.',
      method: 'In-depth village women interviews.'
    },
    taskPrompt: 'What crucial insight does Methodological Triangulation reveal here?',
    options: [
      {
        id: 'opt-3a',
        text: 'Technical success does not equal developmental success: the hardware functions perfectly (engineering), but fails to meet the community’s productive economic needs (anthropology).',
        isCorrect: true,
        feedback: 'Correct! Methodological triangulation bridges engineering metrics (voltage) with human developmental realities (productive energy needs).'
      },
      {
        id: 'opt-3b',
        text: 'The villagers are ungrateful and should be happy with a lightbulb.',
        isCorrect: false,
        feedback: 'Incorrect. Research evaluates real-world human needs, not moral judgments.'
      },
      {
        id: 'opt-3c',
        text: 'Solar panels should be banned across all islands.',
        isCorrect: false,
        feedback: 'Incorrect. The lesson is sizing the energy grid to productive needs, not abandoning solar power.'
      }
    ],
    heterogeneityReason: 'Methodological perspective gap (technical operational validity vs human economic utility).',
    synthesisResolution: 'Decentralized solar home kits achieve high technical reliability for lighting, but productive economic transformation requires larger mini-grids capable of powering agricultural machinery.',
    pedagogicalKey: 'Triangulating technical audits with qualitative fieldwork prevents hollow developmental claims.'
  },
  {
    id: 'g4-3-s1-q4',
    stage: 1,
    title: 'Dossier 4: Plastic Straw Bans in Fast-Food Outlets',
    controversyTopic: 'Measuring the environmental and social impact of eliminating plastic straws.',
    studyA: {
      source: 'Environmental NGO Beach Audit',
      finding: 'Plastic straw counts on coastal beaches declined by 18% in the two years following municipal fast-food straw bans.',
      method: 'Beach cleanup litter audits.'
    },
    studyB: {
      source: 'Disability Rights Advocacy Coalition',
      finding: 'Disabled individuals with motor impairments and cerebral palsy face severe dehydration and choking hazards because paper and metal straws are inflexible or dissolve in hot drinks.',
      method: 'Inclusive focus groups and clinical safety logs.'
    },
    taskPrompt: 'How does an authentic Global Perspectives synthesis navigate this conflict between environmental reform and disability access?',
    options: [
      {
        id: 'opt-4a',
        text: 'Synthesize common ground: maintain the broad retail ban on single-use plastic straws for the general public, while mandating that pharmacies and customer service counters provide flexible plastic straws on request for disabled individuals.',
        isCorrect: true,
        feedback: 'Correct! Synthesis does not pick one group to suffer; it designs an inclusive policy that protects both the environment and vulnerable community members.'
      },
      {
        id: 'opt-4b',
        text: 'Abolish the straw ban completely and dump billions of plastic straws into the ocean.',
        isCorrect: false,
        feedback: 'Incorrect. This abandons environmental stewardship.'
      },
      {
        id: 'opt-4c',
        text: 'Ignore the disabled community and declare that plastic straws are banned forever with zero exceptions.',
        isCorrect: false,
        feedback: 'Incorrect. This violates social inclusion and human dignity.'
      }
    ],
    heterogeneityReason: 'Conflicting legitimate ethical claims (environmental conservation vs accessibility/inclusion).',
    synthesisResolution: 'A synthesized policy pairs general environmental restrictions with explicit medical accessibility exemptions, ensuring ecological progress does not harm disabled citizens.',
    pedagogicalKey: 'Synthesis resolves ethical trade-offs by crafting nuanced, inclusive policy exceptions.'
  },

  // STAGE 2: HETEROGENEITY DIAGNOSIS (4 items)
  {
    id: 'g4-3-s2-q1',
    stage: 2,
    title: 'Heterogeneity 1: Explaining Divergence Through Sample Age Demographics',
    controversyTopic: 'Two studies test whether drinking green tea lowers blood pressure.',
    studyA: {
      source: 'Study 1 (Healthy College Athletes, Ages 18–22)',
      finding: 'Found zero significant change in blood pressure after 8 weeks of daily green tea.',
      method: 'Double-blind RCT.'
    },
    studyB: {
      source: 'Study 2 (Hypertensive Adults, Ages 55–75)',
      finding: 'Observed a significant 7.2 mmHg reduction in systolic blood pressure after 8 weeks.',
      method: 'Double-blind RCT.'
    },
    taskPrompt: 'What is the primary source of heterogeneity explaining why Study 1 found no effect while Study 2 found significant benefits?',
    options: [
      {
        id: 'opt-1a',
        text: 'Baseline physiological health: young athletes already have optimal blood pressure (floor effect), whereas hypertensive older adults have elevated vascular resistance that green tea antioxidants can measurably relax.',
        isCorrect: true,
        feedback: 'Correct! You cannot lower blood pressure that is already healthy. The baseline demographic state explains the divergent findings.'
      },
      {
        id: 'opt-1b',
        text: 'Study 1 used fake tea made of dried grass.',
        isCorrect: false,
        feedback: 'Incorrect. Both used standardized green tea catechins.'
      },
      {
        id: 'opt-1c',
        text: 'Athletes are biologically immune to all plant chemicals.',
        isCorrect: false,
        feedback: 'Incorrect. The explanation is baseline blood pressure saturation.'
      }
    ],
    heterogeneityReason: 'Participant baseline clinical status (floor effect in healthy youth vs room for improvement in hypertensive adults).',
    synthesisResolution: 'Green tea catechins provide measurable antihypertensive benefits specifically for individuals with elevated baseline blood pressure, but do not alter already optimal youthful cardiovascular baselines.',
    pedagogicalKey: 'Always check baseline participant characteristics when studies report conflicting effect sizes.'
  },
  {
    id: 'g4-3-s2-q2',
    stage: 2,
    title: 'Heterogeneity 2: Differing Definitions of "Urban Green Space"',
    controversyTopic: 'Comparing mental health benefits of urban green spaces across two metropolitan cities.',
    studyA: {
      source: 'Study Alpha (City of Melbourne)',
      finding: 'Access to urban green spaces showed a massive 40% reduction in depressive symptoms.',
      method: 'Geographical Information System (GIS) proximity mapping.'
    },
    studyB: {
      source: 'Study Beta (City of Surabaya)',
      finding: 'Access to urban green spaces showed only a tiny 4% reduction in depressive symptoms.',
      method: 'GIS proximity mapping.'
    },
    taskPrompt: 'Upon closer inspection, Study Alpha defined "green space" as quiet botanic parks with walking trails, while Study Beta defined "green space" as decorative grass medians in the middle of 6-lane congested highways. What is this heterogeneity called?',
    options: [
      {
        id: 'opt-2a',
        text: 'Construct Measurement Heterogeneity: The two studies used the identical label ("green space") to measure two completely different physical realities (tranquil botanic park vs exhaust-polluted traffic median).',
        isCorrect: true,
        feedback: 'Correct! Just because two studies use the same English word does not mean they measured the same thing. Definitional discrepancies create artificial contradictions.'
      },
      {
        id: 'opt-2b',
        text: 'Satellite Camera Glitch.',
        isCorrect: false,
        feedback: 'Incorrect. The issue is conceptual and operational definition, not satellite optics.'
      },
      {
        id: 'opt-2c',
        text: 'Surabaya citizens dislike trees.',
        isCorrect: false,
        feedback: 'Incorrect. Traffic medians do not provide the psychological restoration that quiet parks offer.'
      }
    ],
    heterogeneityReason: 'Operational definition mismatch (quiet park vs polluted traffic divider).',
    synthesisResolution: 'Urban green spaces foster mental health when designed for tranquil immersion and pedestrian safety; decorative traffic medians do not provide restorative psychological value.',
    pedagogicalKey: 'Never assume two studies measured the same construct just because they used the same word.'
  },
  {
    id: 'g4-3-s2-q3',
    stage: 2,
    title: 'Heterogeneity 3: The Duration Factor in Educational Interventions',
    controversyTopic: 'Assessing gamified educational apps on student history test scores.',
    studyA: {
      source: 'Study 1 (2-Week Trial)',
      finding: 'Massive surge in student quiz scores (+22%) and extreme enthusiasm.',
      method: 'Pre-post test.'
    },
    studyB: {
      source: 'Study 2 (1-Year Longitudinal Trial)',
      finding: 'Modest score gain (+3%) and significant student complaints of gamification fatigue and boredom.',
      method: 'Full-year randomized trial.'
    },
    taskPrompt: 'What phenomenon explains why the short-term study showed spectacular gains while the long-term study showed modest results?',
    options: [
      {
        id: 'opt-3a',
        text: 'The "Novelty Effect": The excitement of a brand-new toy boosted engagement in the first two weeks, but wore off over a full school year, revealing the true underlying pedagogical impact.',
        isCorrect: true,
        feedback: 'Correct! The novelty effect temporarily inflates short-term results. Longitudinal studies are required to measure durable learning.'
      },
      {
        id: 'opt-3b',
        text: 'The computers ran out of batteries in month 11.',
        isCorrect: false,
        feedback: 'Incorrect. Longitudinal studies measure sustained educational outcomes.'
      },
      {
        id: 'opt-3c',
        text: 'History became boring in the second semester.',
        isCorrect: false,
        feedback: 'Incorrect. The novelty of game mechanics diminishes over time.'
      }
    ],
    heterogeneityReason: 'Temporal duration and the novelty effect.',
    synthesisResolution: 'Gamified learning apps produce dramatic short-term motivational spikes through novelty, but sustain only modest academic gains over full school years unless combined with deep teacher pedagogical interaction.',
    pedagogicalKey: 'Short-term novelty is not long-term efficacy: always evaluate study duration.'
  },
  {
    id: 'g4-3-s2-q4',
    stage: 2,
    title: 'Heterogeneity 4: Investigator Bias and Funding Disclosure',
    controversyTopic: 'Evaluating health effects of artificial sweeteners (sucralose).',
    studyA: {
      source: 'Consortium of Independent Public Health Universities (N=12 studies)',
      finding: '75% of independent studies reported disruptions to gut microbiome bacteria and elevated insulin resistance.',
      method: 'Peer-reviewed independent clinical trials.'
    },
    studyB: {
      source: 'Beverage Industry Association Funded Trials (N=10 studies)',
      finding: '100% of industry-funded trials reported zero biological side effects and complete metabolic safety.',
      method: 'Privately sponsored trials.'
    },
    taskPrompt: 'What source of systematic heterogeneity must a researcher identify when synthesizing these datasets?',
    options: [
      {
        id: 'opt-4a',
        text: 'Funding Source Heterogeneity & Conflict of Interest: Commercial sponsorship is strongly correlated with favorable study conclusions, requiring researchers to stratify evidence by funding independence.',
        isCorrect: true,
        feedback: 'Correct! When industry-funded trials produce 100% favorable outcomes while independent trials find side effects, funding source bias is the primary explanatory variable.'
      },
      {
        id: 'opt-4b',
        text: 'Beverage companies have better scientists who never make mistakes.',
        isCorrect: false,
        feedback: 'Incorrect. Financial conflict of interest is an established cause of study outcome distortion.'
      },
      {
        id: 'opt-4c',
        text: 'Gut bacteria do not exist in beverage labs.',
        isCorrect: false,
        feedback: 'Incorrect. The issue is commercial funding bias.'
      }
    ],
    heterogeneityReason: 'Commercial conflict of interest and funding bias.',
    synthesisResolution: 'When evaluating controversial health products, synthesis must stratify studies by funding independence to protect against commercial confirmation bias.',
    pedagogicalKey: 'Always audit who funded the primary studies before synthesizing the evidence.'
  },

  // STAGE 3: TRIANGULATED SYNTHESIS MATRIX (3 items)
  {
    id: 'g4-3-s3-q1',
    stage: 3,
    title: 'Synthesis Master 1: Electric Vehicle Transition in Indonesia',
    controversyTopic: 'Synthesizing national nickel mining, electric vehicle adoption, and environmental conservation.',
    studyA: {
      source: 'Study A (Economic Ministry)',
      finding: 'Downstream nickel processing created 85,000 industrial jobs and boosted export revenues by $28 billion.',
      method: 'Econometric trade data.'
    },
    studyB: {
      source: 'Study B (Environmental NGO in Halmahera)',
      finding: 'High-pressure acid leaching (HPAL) waste disposal risks toxic heavy metal contamination in coastal coral ecosystems.',
      method: 'Marine water and sediment chemistry sampling.'
    },
    studyC: {
      source: 'Study C (Jakarta Consumer Survey)',
      finding: 'Electric car sales remain under 3% of total vehicle sales due to charging station scarcity outside Java and high retail purchase prices.',
      method: 'Consumer household survey.'
    },
    taskPrompt: 'Construct the master synthesis statement that integrates all three studies into a balanced Cambridge Global Perspectives conclusion:',
    options: [
      {
        id: 'opt-1a',
        text: 'While nickel industrialization delivers substantial macroeconomic revenue and domestic jobs (Study A), its long-term viability requires enforcing strict marine tailings regulations to safeguard coastal ecosystems (Study B), alongside expanding provincial charging infrastructure and subsidies to accelerate real domestic adoption (Study C).',
        isCorrect: true,
        feedback: 'Correct! Masterful synthesis: it weaves together economic growth, ecological protection, and consumer infrastructure realities across all three studies.'
      },
      {
        id: 'opt-1b',
        text: 'Nickel is wonderful, let’s ignore the coral reefs and sell everything to foreign buyers.',
        isCorrect: false,
        feedback: 'Incorrect. This ignores Study B entirely.'
      },
      {
        id: 'opt-1c',
        text: 'Ban all electric cars and close all factories immediately.',
        isCorrect: false,
        feedback: 'Incorrect. This destroys economic development and ignores Study A and C.'
      }
    ],
    synthesisResolution: 'Integrated economic development, environmental waste regulation, and domestic infrastructure rollout.',
    pedagogicalKey: 'Master synthesis connects economic drivers, environmental constraints, and consumer realities.'
  },
  {
    id: 'g4-3-s3-q2',
    stage: 3,
    title: 'Synthesis Master 2: Traditional Jamu Medicine Integration',
    controversyTopic: 'Synthesizing botanical efficacy, clinical safety, and cultural heritage in healthcare.',
    studyA: {
      source: 'Study A (Pharmacology Lab)',
      finding: 'Curcumin extract from turmeric exhibits potent anti-inflammatory properties comparable to ibuprofen in cell cultures.',
      method: 'Biochemical cellular assays.'
    },
    studyB: {
      source: 'Study B (National Food and Drug Authority / BPOM)',
      finding: '18% of street-sold jamu samples contained illegal synthetic chemical drugs (dexamethasone) added secretly by unlicensed manufacturers.',
      method: 'High-performance liquid chromatography testing.'
    },
    studyC: {
      source: 'Study C (Community Healthcare Center)',
      finding: 'Elderly patients who drink standardized herbal tea under doctor supervision report 40% higher treatment adherence and greater cultural comfort.',
      method: 'Clinical compliance tracking.'
    },
    taskPrompt: 'What synthesized policy recommendation emerges from connecting these three findings?',
    options: [
      {
        id: 'opt-2a',
        text: 'Establish an official "Standardized Jamu" regulatory certification: validate authentic active botanical compounds (Study A), rigorously inspect and prosecute illegal adulteration by unlicensed vendors (Study B), and train community doctors to prescribe certified herbal remedies for patient comfort and compliance (Study C).',
        isCorrect: true,
        feedback: 'Correct! It harnesses the biological efficacy, eliminates the contamination danger, and leverages the cultural compliance benefit.'
      },
      {
        id: 'opt-2b',
        text: 'Ban all turmeric from Indonesia and throw all traditional tea into the river.',
        isCorrect: false,
        feedback: 'Incorrect. This destroys valuable pharmacology and cultural tradition.'
      },
      {
        id: 'opt-2c',
        text: 'Let vendors put whatever chemicals they want into drinks without testing.',
        isCorrect: false,
        feedback: 'Incorrect. This endangers public health.'
      }
    ],
    synthesisResolution: 'Standardized phytopharmaceutical certification combining botanical chemistry, regulatory enforcement, and doctor-supervised clinical integration.',
    pedagogicalKey: 'Synthesis solves real-world safety challenges by building bridges between scientific verification and cultural practice.'
  },
  {
    id: 'g4-3-s3-q3',
    stage: 3,
    title: 'Synthesis Master 3: AI in School Classrooms — The Final Frontier',
    controversyTopic: 'Synthesizing artificial intelligence in secondary education.',
    studyA: {
      source: 'Study A (Cognitive Science Lab)',
      finding: 'Students who use AI chatbots as immediate answer-generators show significant declines in long-term memory retention and conceptual reasoning.',
      method: 'Controlled memory trials.'
    },
    studyB: {
      source: 'Study B (English Language Learning Program)',
      finding: 'Students in remote schools with few native English teachers used AI conversation bots to double their conversational vocabulary and pronunciation confidence.',
      method: 'Pre-post speaking tests.'
    },
    studyC: {
      source: 'Study C (Teacher Workload Survey)',
      finding: 'Teachers who used AI for administrative lesson planning saved 6 hours per week, allowing more one-on-one mentoring time with struggling pupils.',
      method: 'Teacher time-motion diaries.'
    },
    taskPrompt: 'Which statement represents the master synthesis connecting cognitive risks, equity benefits, and pedagogical efficiency?',
    options: [
      {
        id: 'opt-3a',
        text: 'AI should not be used as an automated answer-substitute for student critical thinking (Study A), but rather as an adaptive language practice tutor in under-resourced schools (Study B) and an administrative assistant that frees teachers to provide deeper human mentorship (Study C).',
        isCorrect: true,
        feedback: 'Correct! Masterpiece synthesis: it prohibits cognitive harm while actively channeling AI toward educational equity and human teacher empowerment.'
      },
      {
        id: 'opt-3b',
        text: 'All computers should be banned from schools forever because of Study A.',
        isCorrect: false,
        feedback: 'Incorrect. This discards the immense equity gains of Study B and teacher time savings of Study C.'
      },
      {
        id: 'opt-3c',
        text: 'Fire all human teachers and let robots run the schools because of Study B.',
        isCorrect: false,
        feedback: 'Incorrect. This ignores the severe cognitive decline documented in Study A.'
      }
    ],
    synthesisResolution: 'Guarded pedagogical AI deployment: restrict passive cognitive shortcuts while leveraging conversational practice and administrative workload relief for deeper human mentorship.',
    pedagogicalKey: 'Master synthesis does not treat technology as pure good or pure evil; it establishes precise pedagogical boundaries for human empowerment.'
  }
];
