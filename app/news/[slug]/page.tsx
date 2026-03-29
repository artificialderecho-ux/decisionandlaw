import { allArticles } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ArticleClient from './ArticleClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = allArticles.find((article) => article.slug === slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  const canonicalUrl = `https://decisionandlaw.com/news/${slug}`;

  return {
    title: article.seoTitle || article.title,
    description: article.metaDescription || article.ogDescription || '',
    keywords: article.topics?.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.ogTitle || article.seoTitle || article.title,
      description: article.ogDescription || article.metaDescription || '',
      url: canonicalUrl,
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      modifiedTime: article.lastModified ? new Date(article.lastModified).toISOString() : undefined,
      authors: [article.author],
      images: article.ogImage ? [{ url: article.ogImage, alt: article.title }] : [],
      siteName: 'Decision&Law',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.ogTitle || article.seoTitle || article.title,
      description: article.ogDescription || article.metaDescription || '',
      images: article.ogImage ? [article.ogImage] : [],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = allArticles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleClient article={article} />;
}