import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABA AI Ethics Opinions Tracker | Decision&Law',
  description:
    'Foundational ABA and ethics resources to guide responsible AI adoption in legal practice, supervision, confidentiality, and competence.',
  alternates: {
    canonical: 'https://decisionandlaw.com/tracker/aba-opinions',
  },
};

const ABA_RESOURCES = [
  {
    name: 'ABA Formal Opinion 512 (Generative AI)',
    href: 'https://www.americanbar.org/news/abanews/aba-news-archives/2024/07/new-aba-opinion-addresses-lawyer-s-use-of-generative-artificial-intelligence-tools/',
    note: 'Core opinion on competence, confidentiality, communication, and supervisory duties when using GenAI.',
  },
  {
    name: 'ABA Model Rules of Professional Conduct',
    href: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/',
    note: 'Primary ethics baseline referenced by state bars and local guidance.',
  },
  {
    name: 'ABA Center for Innovation (AI resources)',
    href: 'https://www.americanbar.org/groups/center-for-innovation/',
    note: 'Practice-oriented resources and legal operations guidance for technology adoption.',
  },
  {
    name: 'State Bar Directory (ABA)',
    href: 'https://www.americanbar.org/groups/bar_services/resources/state_local_bar_associations/',
    note: 'Find state-specific ethics opinions and implementation guidance.',
  },
];

export default function ABAOpinionsPage() {
  return (
    <main className="min-h-screen bg-white px-4 pb-16 pt-32 text-[#1a1a1a]">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0066cc]">Ethics Tracker</p>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">ABA Opinions on AI</h1>
        <p className="mb-8 text-sm leading-relaxed text-[#6e6e73]">
          Starting set of official ethics references to support AI policy design for law firms, in-house teams, and legal ops.
        </p>

        <div className="space-y-4">
          {ABA_RESOURCES.map((resource) => (
            <a
              key={resource.name}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-[#e5e5e5] p-5 transition hover:border-[#0066cc]"
            >
              <h2 className="mb-1 text-lg font-semibold">{resource.name}</h2>
              <p className="text-sm text-[#6e6e73]">{resource.note}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
