import { Metadata } from 'next';
import { allArticles } from 'contentlayer/generated';
import NewsPageClient from './NewsPageClient';

export const metadata: Metadata = {
  title: 'AI Legal News | Decision&Law',
  description: 'Latest developments in AI legislation, case law, ethics, and regulatory changes. Updated weekly for legal professionals.',
  alternates: {
    canonical: 'https://decisionandlaw.com/news',
  },
  openGraph: {
    title: 'AI Legal News | Decision&Law',
    description: 'Latest developments in AI legislation, case law, ethics, and regulatory changes. Updated weekly for legal professionals.',
    url: 'https://decisionandlaw.com/news',
    siteName: 'Decision&Law',
    type: 'website',
  },
};

export default function NewsPage() {
  return <NewsPageClient articles={allArticles} />;
}
