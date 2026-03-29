import { Metadata } from 'next';
import { allArticles } from 'contentlayer/generated';
import MalpracticeCasesClient from './MalpracticeCasesClient';

export const metadata: Metadata = {
  title: 'AI Malpractice Cases | Decision&Law',
  description: 'Track legal malpractice cases involving artificial intelligence, including AI research errors, confidentiality breaches, and competence issues affecting legal professionals.',
  alternates: {
    canonical: 'https://decisionandlaw.com/tracker/malpractice-cases',
  },
  openGraph: {
    title: 'AI Malpractice Cases | Decision&Law',
    description: 'Track legal malpractice cases involving artificial intelligence.',
    url: 'https://decisionandlaw.com/tracker/malpractice-cases',
    siteName: 'Decision&Law',
  },
};

export default function MalpracticeCasesPage() {
  const malpracticeArticles = allArticles
    .filter((article) => article.category === 'malpractice')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return <MalpracticeCasesClient articles={malpracticeArticles} />;
}
