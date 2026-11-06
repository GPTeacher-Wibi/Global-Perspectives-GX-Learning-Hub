import * as fs from 'fs';
import * as path from 'path';

// 1. G3.1 in src/data/games/unit3MicroGamesData.ts
const u3Path = path.resolve(process.cwd(), 'src/data/games/unit3MicroGamesData.ts');
let u3Content = fs.readFileSync(u3Path, 'utf-8');

const g3_1Shifts = [
  { target: "text: 'Mean = 25 minutes, Median = 20 minutes (values exaggerated).'", rep: "text: 'Mean = 25 minutes, Median = 20 minutes (values exaggerated due to uncalibrated stopwatch timing errors).'" },
  { target: "text: 'Mean = 85, Median = 65, and Mode = 70 (asymmetrical values).'", rep: "text: 'Mean = 85, Median = 65, and Mode = 70 (asymmetrical values skewed by extreme high scores in the cohort).'" },
  { target: "text: 'The dataset has no mode because all four scores occurred at least once.'", rep: "text: 'The dataset has no mode because all four scores occurred at least once across the sampled classroom group.'" },
  { target: "text: 'Symmetrical normal distribution with zero skewness and identical central metrics.'", rep: "text: 'Symmetrical normal distribution with zero skewness and identical central metrics across all score quartiles.'" },
  { target: "text: 'Route 202, because high standard deviation means the bus will drive faster.'", rep: "text: 'Route 202, because high standard deviation means the bus will drive faster and avoid heavy suburban traffic congestion.'" }
];

for (const s of g3_1Shifts) {
  if (u3Content.includes(s.target)) {
    u3Content = u3Content.replace(s.target, s.rep);
    console.log('G3.1 shift applied');
  }
}

// 2. G3.3 in src/data/games/unit3MicroGamesData.ts
const g3_3Shifts = [
  { target: "text: 'A single isolated quotation spoken by one participant during an informal lunchtime chat.'", rep: "text: 'A single isolated quotation spoken by one participant during an informal lunchtime chat without any cross-verification across other interviews.'" },
  { target: "text: 'Theme: \"Complete Collapse of Traditional Agriculture Across Indonesia\".'", rep: "text: 'Theme: \"Complete Collapse of Traditional Agriculture Across Indonesia due to unmitigated climate disruptions and prolonged droughts\".'" },
  { target: "text: 'Purely quantitative regression modeling using standardized Likert questionnaires.'", rep: "text: 'Purely quantitative regression modeling using standardized Likert questionnaires administered to large representative demographic samples.'" },
  { target: "text: 'Descriptive statistics calculating standard deviation of document word lengths.'", rep: "text: 'Descriptive statistics calculating standard deviation of document word lengths across all archived institutional administrative policy records.'" },
  { target: "text: 'The researcher should delete the three negative interviews to make the study appear harmonious.'", rep: "text: 'The researcher should delete the three negative interviews to make the study appear harmonious and satisfy superficial administrative evaluation criteria.'" }
];

for (const s of g3_3Shifts) {
  if (u3Content.includes(s.target)) {
    u3Content = u3Content.replace(s.target, s.rep);
    console.log('G3.3 shift applied');
  }
}
fs.writeFileSync(u3Path, u3Content, 'utf-8');

// 3. G8.2 & G8.3 in src/data/games/unit8MicroGamesData.ts
const u8Path = path.resolve(process.cwd(), 'src/data/games/unit8MicroGamesData.ts');
let u8Content = fs.readFileSync(u8Path, 'utf-8');

const g8_2Shifts = [
  { target: "description: 'Ten-year-old baseline data remains universally valid for all modern infrastructure planning.'", rep: "description: 'Ten-year-old baseline data remains universally valid for all modern infrastructure planning across expanding municipal commuter corridors.'" },
  { target: "description: 'Personal passion for health substitutes for peer-reviewed toxicology qualifications.'", rep: "description: 'Personal passion for health substitutes for peer-reviewed toxicology qualifications and formal clinical trials in medical research.'" },
  { target: "description: 'Large corporate engineering budgets automatically ensure unbiased ecological reporting.'", rep: "description: 'Large corporate engineering budgets automatically ensure unbiased ecological reporting and eliminate all potential commercial conflicts of interest.'" },
  { target: "description: 'A small group of friends represents diverse regional adolescent sleep patterns.'", rep: "description: 'A small group of friends represents diverse regional adolescent sleep patterns across all provincial public and private schools.'" },
  { target: "description: 'Academic prestige exempts research studies from topical relevance and scope checks.'", rep: "description: 'Academic prestige exempts research studies from topical relevance and scope checks when formulating specific local school administrative regulations.'" }
];

for (const s of g8_2Shifts) {
  if (u8Content.includes(s.target)) {
    u8Content = u8Content.replace(s.target, s.rep);
    console.log('G8.2 shift applied');
  }
}

const g8_3Shifts = [
  { target: "consequenceExplanation: 'Violates research ethics, breaches personal privacy, and destroys community trust if discovered.'", rep: "consequenceExplanation: 'Violates research ethics, breaches personal privacy, and destroys community trust if discovered by local residents and community elders.'" },
  { target: "consequenceExplanation: 'Coercive and violates the fundamental principle that participation in student research must be entirely voluntary.'", rep: "consequenceExplanation: 'Coercive and violates the fundamental principle that participation in student research must be entirely voluntary without financial pressure.'" },
  { target: "consequenceExplanation: 'Fails to uphold reciprocal community benefit by treating local residents merely as passive data sources.'", rep: "consequenceExplanation: 'Fails to uphold reciprocal community benefit by treating local residents merely as passive data sources without sharing actionable findings.'" },
  { target: "consequenceExplanation: 'Breaches ethical confidentiality commitments and risks commercial or social retaliation against informant families.'", rep: "consequenceExplanation: 'Breaches ethical confidentiality commitments and risks commercial or social retaliation against informant families across the neighborhood.'" },
  { target: "consequenceExplanation: 'Treats community knowledge as an extractive commodity rather than fostering reciprocal educational partnerships.'", rep: "consequenceExplanation: 'Treats community knowledge as an extractive commodity rather than fostering reciprocal educational partnerships and mutual development.'" }
];

for (const s of g8_3Shifts) {
  if (u8Content.includes(s.target)) {
    u8Content = u8Content.replace(s.target, s.rep);
    console.log('G8.3 shift applied');
  }
}
fs.writeFileSync(u8Path, u8Content, 'utf-8');

// 4. G9.2 in src/data/games/unit9MicroGamesData.ts
const u9Path = path.resolve(process.cwd(), 'src/data/games/unit9MicroGamesData.ts');
let u9Content = fs.readFileSync(u9Path, 'utf-8');

const g9_2Shifts = [
  { target: "analysisNote: 'Biological pharmacological fact, not the assumption about academic learning.'", rep: "analysisNote: 'Biological pharmacological fact, not the assumption about academic learning depth, cognitive stamina, and long-term retention.'" },
  { target: "analysisNote: 'Empirical environmental fact, not the underlying value assumption driving the policy.'", rep: "analysisNote: 'Empirical environmental fact, not the underlying value assumption driving the policy of maximizing commercial factory revenues.'" },
  { target: "analysisNote: 'Software engineering operational fact, not the human resource assumption.'", rep: "analysisNote: 'Software engineering operational fact, not the human resource assumption regarding worker adaptability and experiential wisdom.'" },
  { target: "analysisNote: 'Telecommunications engineering detail, not the unstated psychological premise.'", rep: "analysisNote: 'Telecommunications engineering detail, not the unstated psychological premise regarding adolescent digital literacy and agency.'" },
  { target: "analysisNote: 'Administrative institutional recordkeeping fact, not the hidden fairness premise.'", rep: "analysisNote: 'Administrative institutional recordkeeping fact, not the hidden fairness premise about the objectivity of historical arrest datasets.'" }
];

for (const s of g9_2Shifts) {
  if (u9Content.includes(s.target)) {
    u9Content = u9Content.replace(s.target, s.rep);
    console.log('G9.2 shift applied');
  }
}
fs.writeFileSync(u9Path, u9Content, 'utf-8');

console.log('Target shifts completed!');
