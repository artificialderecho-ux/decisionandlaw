import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LEGAL_TOOLS } from '../../lib/tools';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = 'https://decisionandlaw.com';

export function generateStaticParams() {
  return LEGAL_TOOLS.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = LEGAL_TOOLS.find((item) => item.slug === slug);

  if (!tool) {
    return {
      title: 'Tool Not Found | Decision&Law',
      description: 'The requested tool profile could not be found.',
    };
  }

  const canonicalUrl = `${BASE_URL}/tools/${tool.slug}`;

  return {
    title: `${tool.name} Review for Legal Teams | Decision&Law`,
    description: `${tool.description} Best for: ${tool.bestFor}`,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: `${tool.name} Review for Legal Teams | Decision&Law`,
      description: `${tool.description} Best for: ${tool.bestFor}`,
      url: canonicalUrl,
      type: 'article',
      siteName: 'Decision&Law',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} Review for Legal Teams | Decision&Law`,
      description: `${tool.description} Best for: ${tool.bestFor}`,
    },
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = LEGAL_TOOLS.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: tool.description,
    url: tool.url,
    publisher: {
      '@type': 'Organization',
      name: 'Decision&Law',
      url: BASE_URL,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Decision&Law',
      url: BASE_URL,
    },
    mainEntityOfPage: `${BASE_URL}/tools/${tool.slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Tools', item: `${BASE_URL}/tools` },
        { '@type': 'ListItem', position: 3, name: tool.name, item: `${BASE_URL}/tools/${tool.slug}` },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-36">
        <nav className="mb-6 text-sm text-[#737373]">
          <Link href="/" className="hover:text-[#1a1a1a]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-[#1a1a1a]">Tools</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">{tool.name}</span>
        </nav>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0066cc]">{tool.category}</p>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{tool.name}</h1>
        <p className="mb-6 text-base leading-relaxed text-[#6e6e73]">{tool.description}</p>

        <section className="mb-8 rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-6">
          <h2 className="mb-3 text-lg font-semibold">Best for</h2>
          <p className="text-sm leading-relaxed text-[#4d4d4d]">{tool.bestFor}</p>
        </section>

        <section className="mb-10 rounded-xl border border-[#e5e5e5] p-6">
          <h2 className="mb-3 text-lg font-semibold">Editorial note</h2>
          <p className="text-sm leading-relaxed text-[#4d4d4d]">
            This profile is maintained for legal professionals evaluating AI vendors. Always review security, data retention, and confidentiality terms before adoption.
          </p>
        </section>

        <div className="flex flex-wrap gap-4">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#333]"
          >
            Visit vendor website
          </a>
          <Link href="/tools" className="inline-flex items-center rounded-lg border border-[#e5e5e5] px-5 py-3 text-sm font-semibold hover:border-[#1a1a1a]">
            Back to tools directory
          </Link>
        </div>
      </div>
    </main>
  );
}
