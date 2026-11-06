import * as fs from 'fs';

const filePath = './src/data/games/unit7MicroGamesData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const g73Defs: Record<string, { label: string; desc: string }> = {
  ad_hominem: {
    label: 'Ad Hominem (Personal Attack)',
    desc: 'Attacks the speaker personal background, character, or appearance rather than addressing their evidence or argument.'
  },
  post_hoc: {
    label: 'Post Hoc Ergo Propter Hoc (False Cause)',
    desc: 'Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one.'
  },
  straw_man: {
    label: 'Straw Man (Caricature & Distortion)',
    desc: 'Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack.'
  },
  false_dilemma: {
    label: 'False Dilemma (Either-Or Trap)',
    desc: 'Artificially restricts a complex issue into only two extreme choices while concealing viable intermediate alternatives.'
  },
  hasty_generalization: {
    label: 'Hasty Generalization (Inadequate Sample)',
    desc: 'Draws a sweeping universal conclusion from an isolated, insufficient, or unrepresentative sample of empirical observations.'
  },
  slippery_slope: {
    label: 'Slippery Slope (Chain Reaction)',
    desc: 'Unjustifiably asserts that a moderate initial action will inevitably trigger a catastrophic sequence of unintended events.'
  },
  valid_reasoning: {
    label: 'Sound & Valid Reasoning',
    desc: 'Applies logically necessary inferences from verified empirical premises to reach a balanced, scientifically sound conclusion.'
  }
};

// Split at G7_3_CHALLENGES
const g73Marker = 'export const G7_3_CHALLENGES: FallacyPatrolItem[] = [';
const parts = content.split(g73Marker);
if (parts.length === 2) {
  let g73Section = parts[1];
  g73Section = g73Section.replace(
    /\{\s*fallacy:\s*'(ad_hominem|post_hoc|straw_man|false_dilemma|hasty_generalization|slippery_slope|valid_reasoning)'[\s\S]*?\}/g,
    (m, fal) => {
      const def = g73Defs[fal];
      if (!def) return m;
      return `{\n        fallacy: '${fal}',\n        label: "${def.label}",\n        description: "${def.desc}"\n      }`;
    }
  );
  content = parts[0] + g73Marker + g73Section;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned up G7.3 successfully!');
} else {
  console.error('Could not find G7_3_CHALLENGES marker');
}
