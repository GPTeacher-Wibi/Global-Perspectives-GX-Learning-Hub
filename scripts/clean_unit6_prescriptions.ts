import * as fs from 'fs';

const filePath = './src/data/games/unit6MicroGamesData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The 11 items and their clean, length-balanced prescription blocks:
const cleanPrescriptions: Record<string, string> = {
  'g6-1-s1-q1': `    prescriptionOptionA: '"To what degree do you agree that single-use plastic bottles sold in the campus cafeteria are environmentally toxic and unfairly priced? [1: Strongly Disagree to 5: Strongly Agree]"',
    prescriptionOptionB: '"Why do cafeteria students consistently choose to purchase non-biodegradable disposable plastic bottles rather than bringing environmentally sustainable insulated tumblers from home?"',
    prescriptionOptionC: '"To what extent do you support or oppose a ban on single-use plastic bottles in the school cafeteria? [Strongly Oppose | Oppose | Neutral | Support | Strongly Support]"',`,

  'g6-1-s1-q2': `    prescriptionOptionA: 'Split into two distinct rating items:\\n1. "How quiet is the school library for study? [1: Very Noisy to 5: Completely Silent]"\\n2. "How reliable is the library Wi-Fi connection? [1: Frequently Disconnects to 5: Always Fast and Stable]"',
    prescriptionOptionB: 'Combine into a single satisfaction index:\\n1. "Overall, how satisfied are you with the quiet study atmosphere and high-speed Wi-Fi provided inside the campus library? [1: Very Dissatisfied to 5: Very Satisfied]"',
    prescriptionOptionC: 'Split into two leading agreement items:\\n1. "Don\\'t you agree that the campus library is much too noisy for serious study? [Yes / No]"\\n2. "Don\\'t you agree that library Wi-Fi connections frequently disconnect? [Yes / No]"',`,

  'g6-1-s1-q3': `    prescriptionOptionA: 'Stage into two accusatory questions:\\n1. "How many hours do you waste watching entertaining TikTok dance videos on typical weekday evenings?"\\n2. "Do you agree that social media video platforms cause students to neglect essential homework assignments?"',
    prescriptionOptionB: 'Stage into two neutral empirical questions:\\n1. "On an average school day, approximately how many minutes do you spend on social media video platforms?"\\n2. "What are your primary purposes for using these platforms? [Entertainment, Educational Tutorials, News, Socializing with Friends]"',
    prescriptionOptionC: 'Stage into two vague recreational questions:\\n1. "Do you spend a substantial amount of your leisure time browsing online video applications regularly? [Yes / No]"\\n2. "Do you enjoy social media videos more than reading physical textbooks? [Yes / No]"',`,

  'g6-1-s1-q4': `    prescriptionOptionA: '"Don\\'t you strongly believe that regular daily physical exercise and sports activities are absolutely vital for maintaining long-term adolescent cardiovascular health and fitness? [Yes / No]"',
    prescriptionOptionB: '"Compared to other students in your grade level, how frequently do you participate in vigorous athletic sports and aerobic physical activities during typical school weeks? [Rarely | Occasionally | Frequently | Always]"',
    prescriptionOptionC: '"In the past 7 days, on how many days did you participate in at least 30 minutes of moderate-to-vigorous physical exercise? [0 days | 1–2 days | 3–4 days | 5 or more days]"',`,

  'g6-1-s2-q1': `    prescriptionOptionA: '"Which of the following food categories would you most like to see expanded in the school cafeteria? [Fresh fruit / juices | Traditional Indonesian snacks | Balanced meals | Western food options | No change desired]"',
    prescriptionOptionB: '"To what extent do you support replacing greasy fried snacks with health-promoting certified organic fruit smoothies in the cafeteria to prevent future lifestyle illnesses? [1: Strongly Oppose to 5: Strongly Support]"',
    prescriptionOptionC: '"How frequently do you purchase deep-fried foods from the school cafeteria despite widespread medical warnings regarding cholesterol and cardiovascular health risks? [Daily | Weekly | Rarely | Never]"',`,

  'g6-1-s2-q2': `    prescriptionOptionA: '"To what extent do you agree that excessive daily homework assignments combined with unreasonably early morning school start times cause severe chronic sleep deprivation among Grade 10 students? [1: Strongly Disagree to 5: Strongly Agree]"',
    prescriptionOptionB: 'Split into two separate standardized 5-point Likert items:\\n1. "The amount of homework assigned in Grade 10 is manageable."\\n2. "The current 7:00 AM school start time allows me to obtain adequate sleep."',
    prescriptionOptionC: '"Why do subject teachers continue to assign burdensome homework packages while school administrators stubbornly refuse to adjust our excessively early 7:00 AM daily classroom start schedule?"',`,

  'g6-1-s2-q3': `    prescriptionOptionA: 'Step 1: "Do you ever use generative artificial intelligence tools (such as ChatGPT) to complete graded English essays without teacher authorization? [Yes / No]"\\nStep 2: "If yes, do you believe this practice violates academic integrity rules? [Yes / No]"',
    prescriptionOptionB: 'Step 1: "How often do you rely on artificial intelligence chatbots and automated online translation tools when working on school assignments? [Never | Rarely | Often]"\\nStep 2: "Why do you prefer using automated software over writing independently?"',
    prescriptionOptionC: 'Step 1: "Have you ever used generative AI tools (such as ChatGPT) when working on English writing assignments? [Never | Rarely | Sometimes | Frequently]"\\nStep 2: "If yes, for which tasks do you use it? [Brainstorming ideas | Grammar checking | Drafting paragraphs | Full essay writing]"',`,

  'g6-1-s2-q4': `    prescriptionOptionA: '"During school hours, how often do you experience video buffering or download failures when accessing online learning materials? [Never | 1–2 times per week | Daily | Multiple times per day]"',
    prescriptionOptionB: '"Don\\'t you agree that campus Wi-Fi infrastructure is unacceptably slow, unreliable, and frequently disconnects during important digital classroom assignments? [1: Strongly Disagree to 5: Strongly Agree]"',
    prescriptionOptionC: '"How would you evaluate the overall speed, stability, and campus coverage of the school wireless network recently during your regular academic study periods? [Very Poor | Poor | Adequate | Good | Excellent]"',`,

  'g6-1-s3-q1': `    prescriptionOptionA: '"We should rephrase the prompt to emphasize catastrophic global warming projections so that survey respondents clearly recognize their urgent civic and moral duty to support residential solar panel subsidies."',
    prescriptionOptionB: '"This question is already fully healthy and certified: It evaluates a single policy variable, uses neutral non-coercive syntax, provides a symmetrical balanced 5-point Likert scale, and anchors the scope clearly."',
    prescriptionOptionC: '"We should combine residential rooftop solar installations with municipal electric public transit fleet subsidies into a single overarching clean energy transition referendum question for citizen voting."',`,

  'g6-1-s3-q2': `    prescriptionOptionA: 'Split into two leading transport preference questions:\\n1. "Don\\'t you agree that private motorbikes are far more convenient and reliable than public angkot minivans? [Yes / No]"\\n2. "Should the city restrict angkot routes on major roads? [Yes / No]"',
    prescriptionOptionB: 'Combine into a single emotional public transit complaint item:\\n1. "How angry and frustrated do you feel when reckless angkot minivan drivers violate traffic signals and endanger student safety? [1: Not at All to 5: Extremely Angry]"',
    prescriptionOptionC: 'Split and neutralize into two objective items:\\n1. "How safe do you feel when traveling on local angkot minivans? [Very Unsafe to Very Safe]"\\n2. "How would you rate driver compliance with traffic speed limits and signals? [Poor | Fair | Good | Excellent]"',`,

  'g6-1-s3-q3': `    prescriptionOptionA: '"Which of the following factors pose the greatest barrier to attending university for students in your village? (Rank from 1 = Greatest Barrier to 4 = Smallest Barrier):\\n[ ] Tuition and living expenses\\n[ ] Geographic distance and transport\\n[ ] Family work obligations\\n[ ] Academic entrance exam requirements"',
    prescriptionOptionB: '"To what extent do you agree with the following combined proposition: High university tuition fees and geographic distance from provincial campuses prevent qualified rural secondary students from completing higher education? [1: Strongly Disagree to 5: Strongly Agree]"',
    prescriptionOptionC: '"Why do national higher education institutions maintain prohibitively expensive tuition fee structures while consistently failing to establish regional branch campuses or accessible distance-learning programs in underserved rural districts?"',`
};

for (const [id, block] of Object.entries(cleanPrescriptions)) {
  const itemPattern = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?correctDefect:\\s*'[^']+',\\s*\\n)([\\s\\S]*?)(\\s*correctPrescription:)`);
  content = content.replace(itemPattern, (m, prefix, oldBlock, suffix) => {
    return prefix + block + '\n' + suffix;
  });
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Cleaned and balanced Unit 6 prescriptions successfully!');
