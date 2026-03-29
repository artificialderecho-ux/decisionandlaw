import { Metadata } from 'next';
import { allArticles } from 'contentlayer/generated';
import NewsPageClient from './NewsPageClient';

export const metadata: Metadata = {
  title: 'AI Legal News 2025 | Decision&Law',
  description: 'Latest news and updates on artificial intelligence legislation, case law, ethics, and regulatory developments affecting legal professionals.',
};

export default function NewsPage() {
  return <NewsPageClient articles={allArticles} />;
}
