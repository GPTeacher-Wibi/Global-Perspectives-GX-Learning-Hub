import * as fs from 'fs';

const filePath = './src/data/games/unit7MicroGamesData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Standard definitions for G7.1
const g71Defs: Record<string, { label: string; desc: string }> = {
  deductive: {
    label: 'Deductive Reasoning (Top-Down / Universal Rule)',
    desc: 'Applies an established universal law or general definition to a specific case; if premises are true, the conclusion is guaranteed.'
  },
  inductive: {
    label: 'Inductive Reasoning (Bottom-Up / Empirical Probability)',
    desc: 'Analyzes repeated empirical observations across specific field samples to extrapolate a probable, evidence-based general rule.'
  },
  abductive: {
    label: 'Abductive Reasoning (Diagnostic / Best Explanation)',
    desc: 'Evaluates an incomplete set of clues, symptoms, or unexpected results to infer the most plausible and testable causal explanation.'
  }
};

// Standard definitions for G7.2
const g72Defs: Record<string, { label: string; desc: string }> = {
  claim: {
    label: 'Claim (Core Proposition)',
    desc: 'The primary assertion, thesis, or policy stance that the arguer is attempting to prove or convince the audience to accept.'
  },
  grounds_evidence: {
    label: 'Grounds / Evidence (Empirical Data)',
    desc: 'The concrete facts, measurements, statistical data, or observational records that provide the foundation for the assertion.'
  },
  warrant: {
    label: 'Warrant (Logical Principle)',
    desc: 'The underlying rule, rationale, or inferential principle that justifies moving logically from the evidence to the claim.'
  },
  backing: {
    label: 'Backing (Theoretical Support)',
    desc: 'The authoritative credentials, legal statutes, or verified scientific theories that substantiate the warrant itself.'
  },
  qualifier: {
    label: 'Qualifier (Scope & Degree)',
    desc: 'Explicit phrases stating the degree of certainty, probability, or bounded conditions under which the claim holds true.'
  },
  rebuttal: {
    label: 'Rebuttal (Counter-Condition)',
    desc: 'Specific exceptional circumstances, counter-evidence, or opposing arguments that would invalidate the central claim.'
  }
};

// Standard definitions for G7.3
const g73Defs: Record<string, { label: string; desc: string }> = {
  ad_hominem: {
    label: 'Ad Hominem (Personal Attack)',
    desc: "Attacks the speaker's personal background, character, or appearance rather than addressing their evidence or argument."
  },
  post_hoc: {
    label: 'Post Hoc Ergo Propter Hoc (False Cause)',
    desc: 'Falsely assumes that because an event occurred after another in time, the earlier event must have caused the later one.'
  },
  straw_man: {
    label: 'Straw Man (Caricature & Distortion)',
    desc: "Distorts, exaggerates, or misrepresents an opposing argument into an extreme caricature that is far easier to attack."
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

// We will parse and replace each option block in G7.1, G7.2, G7.3
// For G7.1: mode: '(deductive|inductive|abductive)'
content = content.replace(
  /mode:\s*'(deductive|inductive|abductive)',\s*label:\s*'[^']+',\s*description:\s*'[^']+'/g,
  (match, mode) => {
    const def = g71Defs[mode];
    if (!def) return match;
    return `mode: '${mode}',\n        label: '${def.label}',\n        description: '${def.desc}'`;
  }
);

// For G7.2: component: '(claim|grounds_evidence|warrant|backing|qualifier|rebuttal)'
content = content.replace(
  /component:\s*'(claim|grounds_evidence|warrant|backing|qualifier|rebuttal)',\s*label:\s*'[^']+',\s*description:\s*'[^']+'/g,
  (match, comp) => {
    const def = g72Defs[comp];
    if (!def) return match;
    return `component: '${comp}',\n        label: '${def.label}',\n        description: '${def.desc}'`;
  }
);

// For G7.3: fallacy: '(ad_hominem|post_hoc|straw_man|false_dilemma|hasty_generalization|slippery_slope|valid_reasoning)'
content = content.replace(
  /fallacy:\s*'(ad_hominem|post_hoc|straw_man|false_dilemma|hasty_generalization|slippery_slope|valid_reasoning)',\s*label:\s*'[^']+',\s*description:\s*("[^"]*"|'[^']*')/g,
  (match, fal) => {
    const def = g73Defs[fal];
    if (!def) return match;
    return `fallacy: '${fal}',\n        label: '${def.label}',\n        description: '${def.desc}'`;
  }
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully rebalanced Unit 7 micro-games!');
