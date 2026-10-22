export interface GlossaryTerm {
  term: string;
  definition: string;
  indonesian: string;
  unitNumber?: number;
}

export const MASTER_GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Abductive Reasoning',
    definition: 'Inferring the most likely explanation from an incomplete set of observations.',
    indonesian: 'Penalaran Abduktif',
    unitNumber: 7
  },
  {
    term: 'Anecdotal Evidence',
    definition: 'Information based on personal stories or individual experiences, not systematic research.',
    indonesian: 'Bukti Anekdot',
    unitNumber: 8
  },
  {
    term: 'Applied Research',
    definition: 'Research conducted to solve a specific, practical problem in the real world.',
    indonesian: 'Penelitian Terapan',
    unitNumber: 2
  },
  {
    term: 'Basic Research',
    definition: 'Research conducted purely to expand knowledge, without an immediate practical goal.',
    indonesian: 'Penelitian Dasar',
    unitNumber: 2
  },
  {
    term: 'Claim (of Fact)',
    definition: 'A statement asserting that something is true, false, or exists.',
    indonesian: 'Klaim Fakta',
    unitNumber: 9
  },
  {
    term: 'Claim (of Policy)',
    definition: 'A statement asserting that a specific course of action should or should not be taken.',
    indonesian: 'Klaim Kebijakan',
    unitNumber: 9
  },
  {
    term: 'Claim (of Value)',
    definition: 'A statement asserting that something is good, bad, moral, immoral, beautiful, or ugly.',
    indonesian: 'Klaim Nilai',
    unitNumber: 9
  },
  {
    term: 'Data Synthesis',
    definition: 'The process of combining findings from multiple sources to form a comprehensive understanding.',
    indonesian: 'Sintesis Data',
    unitNumber: 4
  },
  {
    term: 'Deductive Reasoning',
    definition: 'Reasoning from a general rule to a specific, certain conclusion (top-down logic).',
    indonesian: 'Penalaran Deduktif',
    unitNumber: 7
  },
  {
    term: 'Evidence',
    definition: 'Information, facts, or data that support a claim or conclusion.',
    indonesian: 'Bukti',
    unitNumber: 8
  },
  {
    term: 'Hypothesis',
    definition: 'A testable prediction about the relationship between two or more variables.',
    indonesian: 'Hipotesis',
    unitNumber: 2
  },
  {
    term: 'Inductive Reasoning',
    definition: 'Reasoning from specific observations to a general, probable conclusion (bottom-up logic).',
    indonesian: 'Penalaran Induktif',
    unitNumber: 7
  },
  {
    term: 'Logical Fallacy',
    definition: 'An error in reasoning that makes an argument invalid or weak.',
    indonesian: 'Kekeliruan Logika',
    unitNumber: 7
  },
  {
    term: 'Meta-Analysis',
    definition: 'A statistical technique that combines the quantitative results of multiple studies.',
    indonesian: 'Meta-Analisis',
    unitNumber: 4
  },
  {
    term: 'Narrative Synthesis',
    definition: 'A textual approach to combining findings from qualitative or diverse studies.',
    indonesian: 'Sintesis Naratif',
    unitNumber: 4
  },
  {
    term: 'Primary Data',
    definition: 'Data collected firsthand by the researcher for their specific research purpose.',
    indonesian: 'Data Primer',
    unitNumber: 3
  },
  {
    term: 'Qualitative Data',
    definition: 'Non-numerical data that describes qualities, experiences, and meanings (e.g., interviews).',
    indonesian: 'Data Kualitatif',
    unitNumber: 3
  },
  {
    term: 'Quantitative Data',
    definition: 'Numerical data that can be measured and counted (e.g., statistics, surveys).',
    indonesian: 'Data Kuantitatif',
    unitNumber: 3
  },
  {
    term: 'Secondary Data',
    definition: 'Data that was collected by someone else for a different purpose but reused by the researcher.',
    indonesian: 'Data Sekunder',
    unitNumber: 3
  },
  {
    term: 'Toulmin Model',
    definition: 'A framework for structuring arguments: Claim, Evidence, Warrant, Backing, Qualifier, Rebuttal.',
    indonesian: 'Model Toulmin',
    unitNumber: 7
  },
  {
    term: 'Warrant',
    definition: 'The underlying assumption or principle that connects the evidence to the claim.',
    indonesian: 'Jaminan',
    unitNumber: 7
  }
];
