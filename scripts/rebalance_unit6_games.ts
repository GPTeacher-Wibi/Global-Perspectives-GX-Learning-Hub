import * as fs from 'fs';

const filePath = './src/data/games/unit6MicroGamesData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Standard definitions for G6.1 Step 1 (Defects)
const g61Defs: Record<string, { label: string; desc: string }> = {
  leading: {
    label: 'Leading Question',
    desc: 'Phrases the question to suggest or encourage a specific desired answer rather than allowing neutral discovery.'
  },
  loaded: {
    label: 'Loaded / Presupposition Question',
    desc: 'Contains an unjustified, unproven presupposition of guilt or negligence that traps the respondent regardless of answer.'
  },
  double_barreled: {
    label: 'Double-Barreled Question',
    desc: 'Combines two distinct inquiry topics into a single prompt, preventing respondents from answering each issue separately.'
  },
  vague_ambiguous: {
    label: 'Vague / Ambiguous Question',
    desc: 'Uses undefined terms, imprecise timeframes, or subjective adjectives that mean different things to different people.'
  },
  healthy_question: {
    label: 'Healthy Neutral Question',
    desc: 'Constructs an objective, balanced inquiry with impartial phrasing and appropriate response scales.'
  }
};

// Standard definitions for G6.2 (Survey Builder Rules)
const g62Defs: Record<string, { label: string; desc: string }> = {
  symmetrical_likert: {
    label: 'Asymmetric Likert Scale (Positive Skew)',
    desc: 'Scale lacks balanced bipolar anchors, offering unbalanced positive choices that artificially inflate favorable ratings.'
  },
  mutually_exclusive: {
    label: 'Non-Mutually Exclusive Categories',
    desc: 'Category boundaries overlap, allowing a single respondent to belong to multiple demographic options simultaneously.'
  },
  neutral_anchor: {
    label: 'Missing Neutral Anchor (Forced Choice)',
    desc: 'Omits an indifferent midpoint option, artificially forcing undecided or neutral respondents to pick a polarized side.'
  },
  avoid_jargon: {
    label: 'Academic Jargon Overload',
    desc: 'Employs obscure academic terminology or technical vocabulary that ordinary target respondents cannot easily interpret.'
  },
  pilot_testing: {
    label: 'Failure to Pilot Test',
    desc: 'Deploys an unvetted questionnaire to the public without preliminary trials to uncover confusing or ambiguous prompts.'
  }
};

// Standard definitions for G6.3 (Neutrality Trial Verdicts)
const g63Defs: Record<string, { label: string; desc: string }> = {
  leading_witness: {
    label: 'Leading Question (Hostile Bias)',
    desc: 'Embeds the researcher desired answer or persuasive adjectives directly into the query, coercing a biased response.'
  },
  badgering_loaded: {
    label: 'Loaded Question (Presupposition Trap)',
    desc: 'Traps the respondent by embedding an unverified accusation of guilt or passivity into the premise of the question.'
  },
  assumed_consensus: {
    label: 'False Consensus (Majority Presumption)',
    desc: 'Assumes without empirical evidence that all participants share a single collective attitude or uniform perspective.'
  },
  speculation_unanchored: {
    label: 'Unanchored Speculation (Futility)',
    desc: 'Forces respondents to predict extreme hypothetical scenarios far beyond their direct knowledge or lived experience.'
  },
  sustained_neutral: {
    label: 'Sustained: Objective Inquiry',
    desc: 'Poses an impartial, balanced research question that allows the participant to answer freely without steering.'
  }
};

// 1. Rebalance G6.1 Step 2 Prescriptions
const g61Prescriptions: Record<string, { A: string; B: string; C: string }> = {
  'g6-1-s1-q1': {
    A: '"To what degree do you believe cafeteria plastic bottles are environmentally hazardous and overpriced? [1: Strongly Disagree to 5: Strongly Agree]"',
    B: '"Why do cafeteria students consistently choose to purchase disposable plastic bottles rather than bringing environmentally sustainable tumblers?"',
    C: '"To what extent do you support or oppose a ban on single-use plastic bottles in the school cafeteria? [Strongly Oppose | Oppose | Neutral | Support | Strongly Support]"'
  },
  'g6-1-s1-q2': {
    A: 'Split into two distinct rating items:\n1. "How quiet is the school library for study? [1: Very Noisy to 5: Completely Silent]"\n2. "How reliable is the library Wi-Fi connection? [1: Frequently Disconnects to 5: Always Fast and Stable]"',
    B: '"How satisfied are you with the overall physical environment and modern digital technology available in our campus library? [1: Very Dissatisfied to 5: Very Satisfied]"',
    C: '"Do you agree that the campus library environment should be made much quieter while upgrading Internet bandwidth? [Strongly Disagree | Disagree | Agree | Strongly Agree]"'
  },
  'g6-1-s1-q3': {
    A: '"Don\'t you agree that excessive TikTok video consumption during study hours diminishes adolescent focus and academic performance? [Yes / No]"',
    B: 'Stage into two neutral empirical questions:\n1. "On an average school day, approximately how many minutes do you spend on social media video platforms?"\n2. "What are your primary purposes for using these platforms? [Entertainment, Educational Tutorials, News, Socializing with Friends]"',
    C: '"How many hours do you spend watching short-form social media videos and playing online mobile video games on typical weekday evenings?"'
  },
  'g6-1-s1-q4': {
    A: '"Don\'t you believe regular daily physical exercise and sports activities are essential for maintaining adolescent cardiovascular health? [Yes / No]"',
    B: '"How frequently do you participate in vigorous athletic sports compared to other students in your grade level? [Rarely | Occasionally | Frequently | Always]"',
    C: '"In the past 7 days, on how many days did you participate in at least 30 minutes of moderate-to-vigorous physical exercise? [0 days | 1–2 days | 3–4 days | 5 or more days]"'
  },
  'g6-1-s2-q1': {
    A: '"Which of the following food categories would you most like to see expanded in the school cafeteria? [Fresh fruit / juices | Traditional Indonesian snacks | Balanced meals | Western food options | No change desired]"',
    B: '"To what extent do you support replacing traditional fried snacks with health-promoting certified organic smoothie options in the cafeteria? [1: Oppose to 5: Support]"',
    C: '"How often do you consume fried snacks from the school cafeteria despite general nutritional warnings regarding deep-fried street foods? [Daily | Weekly | Never]"'
  },
  'g6-1-s2-q2': {
    A: '"To what extent do you agree that excessive daily homework loads combined with early morning start times cause chronic student sleep deprivation? [1 to 5 scale]"',
    B: 'Split into two separate standardized 5-point Likert items:\n1. "The amount of homework assigned in Grade 10 is manageable."\n2. "The current 7:00 AM school start time allows me to obtain adequate sleep."',
    C: '"Why do teachers continue to assign burdensome homework packages while school administration maintains an unreasonably early 7:00 AM class start schedule?"'
  },
  'g6-1-s2-q3': {
    A: '"How often do you utilize generative artificial intelligence tools (such as ChatGPT) and automated online translators to complete graded school examinations?"',
    B: '"Why do high school students turn to artificial intelligence writing software to generate essays instead of developing independent critical reasoning skills?"',
    C: 'Step 1: "Have you ever used generative AI tools (such as ChatGPT) when working on English writing assignments? [Never | Rarely | Sometimes | Frequently]"\nStep 2: "If yes, for which tasks do you use it? [Brainstorming ideas | Grammar checking | Drafting paragraphs | Full essay writing]"'
  },
  'g6-1-s2-q4': {
    A: '"During school hours, how often do you experience video buffering or download failures when accessing online learning materials? [Never | 1–2 times per week | Daily | Multiple times per day]"',
    B: '"Don\'t you agree that campus Wi-Fi infrastructure is unacceptably slow and frequently disconnects during important digital classroom assignments? [Yes / No]"',
    C: '"How would you evaluate the overall speed, stability, and campus coverage of the school wireless network recently? [Very Poor | Poor | Adequate | Good | Excellent]"'
  },
  'g6-1-s3-q1': {
    A: '"We should rephrase the prompt to emphasize catastrophic global warming projections so that respondents recognize the urgent moral duty of adopting solar panels."',
    B: '"This question is already fully healthy and certified: It evaluates a single policy variable, uses neutral non-coercive syntax, provides a symmetrical balanced 5-point Likert scale, and anchors the scope clearly."',
    C: '"We should combine residential solar installations with municipal electric bus fleet subsidies into a single overarching clean energy referendum question."'
  },
  'g6-1-s3-q2': {
    A: '"Which mode of public transit do you prefer using for your daily school commute: local angkot minivans or private motorbikes? [Angkot | Motorbike | Other]"',
    B: '"Don\'t you agree that reckless angkot driving and lack of vehicle roadworthiness inspections pose an intolerable public hazard to city commuters? [Yes / No]"',
    C: 'Split and neutralize into two objective items:\n1. "How safe do you feel when traveling on local angkot minivans? [Very Unsafe to Very Safe]"\n2. "How would you rate driver compliance with traffic speed limits and signals? [Poor | Fair | Good | Excellent]"'
  },
  'g6-1-s3-q3': {
    A: '"Which of the following factors pose the greatest barrier to attending university for students in your village? (Rank from 1 = Greatest Barrier to 4 = Smallest Barrier):\n[ ] Tuition and living expenses\n[ ] Geographic distance and transport\n[ ] Family work obligations\n[ ] Academic entrance exam requirements"',
    B: '"To what degree do you believe that exorbitant university tuition fees combined with extreme geographic distance prevent disadvantaged students from higher education? [1 to 5]"',
    C: '"Why do higher education institutions maintain prohibitively expensive tuition structures while failing to open satellite study centers in isolated rural districts?"'
  }
};

// Apply prescription updates
for (const [id, rx] of Object.entries(g61Prescriptions)) {
  const qRegex = new RegExp(`id:\\s*'${id}'[\\s\\S]*?prescriptionOptionA:[\\s\\S]*?prescriptionOptionC:[^\\n]+`, 'g');
  content = content.replace(qRegex, (match) => {
    return match
      .replace(/prescriptionOptionA:\s*("[^"]*"|'[^']*'|`[^`]*`)/, `prescriptionOptionA: ${JSON.stringify(rx.A)}`)
      .replace(/prescriptionOptionB:\s*("[^"]*"|'[^']*'|`[^`]*`)/, `prescriptionOptionB: ${JSON.stringify(rx.B)}`)
      .replace(/prescriptionOptionC:\s*("[^"]*"|'[^']*'|`[^`]*`)/, `prescriptionOptionC: ${JSON.stringify(rx.C)}`);
  });
}

// 2. Clean G6.1 Step 1 Options
const g61Marker = 'export const G6_1_CHALLENGES: QuestionDoctorItem[] = [';
const g62Marker = 'export const G6_2_CHALLENGES: SurveyBuilderItem[] = [';
const g63Marker = 'export const G6_3_CHALLENGES: NeutralityTrialItem[] = [';

let [preG61, rest1] = content.split(g61Marker);
let [g61Section, rest2] = rest1.split(g62Marker);
let [g62Section, g63Section] = rest2.split(g63Marker);

// G6.1 Options replacement
g61Section = g61Section.replace(
  /\{\s*defect:\s*'(leading|loaded|double_barreled|vague_ambiguous|healthy_question)'[\s\S]*?\}/g,
  (m, defId) => {
    const def = g61Defs[defId];
    if (!def) return m;
    return `{\n        defect: '${defId}',\n        label: "${def.label}",\n        description: "${def.desc}"\n      }`;
  }
);

// G6.2 Options replacement
g62Section = g62Section.replace(
  /\{\s*rule:\s*'(symmetrical_likert|mutually_exclusive|neutral_anchor|avoid_jargon|pilot_testing)'[\s\S]*?\}/g,
  (m, ruleId) => {
    const def = g62Defs[ruleId];
    if (!def) return m;
    return `{\n        rule: '${ruleId}',\n        label: "${def.label}",\n        description: "${def.desc}"\n      }`;
  }
);

// G6.3 Options replacement
g63Section = g63Section.replace(
  /\{\s*violation:\s*'(leading_witness|badgering_loaded|assumed_consensus|speculation_unanchored|sustained_neutral)'[\s\S]*?\}/g,
  (m, violId) => {
    const def = g63Defs[violId];
    if (!def) return m;
    return `{\n        violation: '${violId}',\n        label: "${def.label}",\n        description: "${def.desc}"\n      }`;
  }
);

content = preG61 + g61Marker + g61Section + g62Marker + g62Section + g63Marker + g63Section;
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully rebalanced Unit 6 micro-games!');
