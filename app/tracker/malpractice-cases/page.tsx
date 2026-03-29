import { Metadata } from 'next';
import { allArticles } from 'contentlayer/generated';
import MalpracticeCasesClient from './MalpracticeCasesClient';

export const metadata: Metadata = {
  title: 'AI Malpractice Cases | Decision&Law',
  description: 'Track legal malpractice cases involving artificial intelligence, including AI research errors, confidentiality breaches, and competence issues affecting legal professionals.',
};

export default function MalpracticeCasesPage() {
  const malpracticeArticles = allArticles
    .filter((article) => article.category === 'malpractice')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return <MalpracticeCasesClient articles={malpracticeArticles} />;
}
