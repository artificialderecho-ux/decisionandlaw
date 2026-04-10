import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Legal Glossary | Decision&Law',
  description:
    'Initial glossary of legal + AI terms for attorneys, legal operations teams, and compliance professionals.',
  alternates: {
    canonical: 'https://decisionandlaw.com/glossary',
  },
};

const TERMS = [
  {
    term: 'Algorithmic Bias',
    definition:
      'Systematic and repeatable errors in an AI system that produce unfair outcomes for certain groups.',
  },
  {
    term: 'AI Governance',
    definition:
      'Policies, controls, and accountability structures used to manage AI risks, compliance, and operational performance.',
  },
  {
    term: 'Explainability',
    definition:
      'The degree to which a human can understand why an AI system produced a specific output or recommendation.',
  },
  {
    term: 'Hallucination',
    definition:
      'An AI-generated output that is fluent but incorrect, fabricated, or unsupported by reliable sources.',
  },
  {
    term: 'Human-in-the-Loop',
    definition:
      'A governance pattern where a qualified person reviews or approves AI outputs before a decision or filing is finalized.',
  },
  {
    term: 'Model Drift',
    definition:
      'Performance degradation over time as real-world data diverges from the model’s training environment.',
  },
  {
    term: 'Prompt Injection',
    definition:
      'A manipulation technique where hostile instructions are embedded in inputs to alter AI system behavior.',
  },
  {
    term: 'Retrieval-Augmented Generation (RAG)',
    definition:
      'An approach that grounds model outputs in selected external sources, improving factual reliability.',
  },
  {
    term: 'Risk Tiering',
    definition:
      'Classifying AI use cases by risk severity to set proportional controls, reviews, and approval workflows.',
  },
  {
    term: 'Shadow AI',
    definition:
      'Unapproved use of AI tools outside official security, privacy, and compliance oversight.',
  },
  {
    term: 'Work Product Privilege (AI context)',
    definition:
      'Protection issues related to whether AI-assisted drafts and notes are prepared in anticipation of litigation and remain privileged.',
  },
  {
    term: 'YMYL',
    definition:
      '“Your Money or Your Life” content category where accuracy and trust signals are held to a higher standard by search quality systems.',
  },
];

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-white px-4 pb-16 pt-32 text-[#1a1a1a]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0066cc]">Reference</p>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">AI Legal Glossary</h1>
        <p className="mb-8 text-sm leading-relaxed text-[#6e6e73]">
          Initial reference set. We will expand with jurisdiction-specific and litigation-specific terms over time.
        </p>

        <dl className="space-y-4">
          {TERMS.map((item) => (
            <div key={item.term} className="rounded-xl border border-[#e5e5e5] p-5">
              <dt className="mb-1 text-lg font-semibold">{item.term}</dt>
              <dd className="text-sm leading-relaxed text-[#6e6e73]">{item.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
}
