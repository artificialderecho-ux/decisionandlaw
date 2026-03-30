'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { type Article } from "contentlayer/generated"
import AuthorAvatar from "./components/AuthorAvatar"
import { WebsiteStructuredData } from "./components/StructuredData"

const AUTHOR_INITIALS: Record<string, string> = {
  'Elena Markov': 'EM',
  'James Okafor': 'JO',
  'Sofia Chen': 'SC',
  'Rafael Morales': 'RM',
  'Anya Volkov': 'AV',
  'Kwame Asante': 'KA',
  'Isla Vinter': 'IV',
  'Hiro Tanaka': 'HT',
  'Decision & Law Editorial Team': 'DL',
}

function getInitials(authorName: string): string {
  return AUTHOR_INITIALS[authorName] || authorName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

export default function HomePageClient({ articles }: { articles: Article[] }) {
  const [isMobile, setIsMobile] = useState(false)
  const sortedArticles = [...articles].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const sectionBuckets: Record<"news" | "tools" | "tracker" | "guides" | "authors", Article[]> = {
    news: [],
    tools: [],
    tracker: [],
    guides: [],
    authors: [],
  }

  sortedArticles.forEach((article) => {
    const haystack = `${article.title} ${article.metaDescription || ''} ${article.ogDescription || ''} ${article.category} ${article.subcategory || ''} ${(article.topics || []).join(' ')}`.toLowerCase()
    const category = (article.category || '').toLowerCase()
    const subcategory = (article.subcategory || '').toLowerCase()
    const isAuthorArticle = article.authorSlug !== 'editorial-team'
    const isGuide = category === 'practice-guide' || category === 'guidance'
    const isTracker = category === 'legislation' || category === 'regulation'
    const isTool = category === 'tool-review' || subcategory.includes('procurement') || haystack.includes('tool review')
    const isNews = ['case-law', 'jurisprudence', 'case-analysis', 'malpractice'].includes(category)

    if (isGuide) {
      sectionBuckets.guides.push(article)
      return
    }

    if (isTracker) {
      sectionBuckets.tracker.push(article)
      return
    }

    if (isTool) {
      sectionBuckets.tools.push(article)
      return
    }

    if (isNews) {
      sectionBuckets.news.push(article)
      return
    }

    if (isAuthorArticle) {
      sectionBuckets.authors.push(article)
      return
    }

    sectionBuckets.news.push(article)
  })

  const newsArticles = sectionBuckets.news.slice(0, 5)
  const toolsArticles = sectionBuckets.tools.slice(0, 5)
  const trackerArticles = sectionBuckets.tracker.slice(0, 5)
  const guidesArticles = sectionBuckets.guides.slice(0, 5)
  const authorsArticles = sectionBuckets.authors.slice(0, 5)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <WebsiteStructuredData />
      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#1a1a1a" }}>
        {/* Hero */}
        <section style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,102,204,0.06) 0%, transparent 60%)",
          }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)", position: "relative", width: "100%" }}>
            <div style={{ maxWidth: "800px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "32px",
                padding: "6px 14px",
                border: "1px solid rgba(0,0,0,0.08)",
                backgroundColor: "rgba(0,0,0,0.02)",
                borderRadius: "9999px",
              }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "#0066cc", borderRadius: "50%" }} />
                <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#6e6e73" }}>
                  AI & Law — Legal Intelligence
                </span>
              </div>

              <h1 style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: "700",
                lineHeight: "1.03",
                letterSpacing: "-0.035em",
                color: "#1a1a1a",
                marginBottom: "28px",
              }}>
                Where Law Meets<br />
                <span style={{ color: "#0066cc" }}>Artificial Intelligence</span>
              </h1>

              <p style={{
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: "1.7",
                color: "#6e6e73",
                marginBottom: "0",
                maxWidth: "540px",
              }}>
                Legislation tracking, tool reviews, and case law analysis for US legal professionals navigating the AI transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Coverage */}
        <section style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(64px, 10vw, 120px) clamp(16px, 4vw, 48px)" }}>
            <div style={{ marginBottom: "40px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "8px" }}>
                  Latest Coverage
                </div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "700", color: "#1a1a1a", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                  Latest Coverage
                </h2>
              </div>
            </div>

            <SectionArticles
              title="AI Legal News"
              articles={newsArticles}
              isMobile={isMobile}
              compact
            />
          </div>
        </section>

        {/* Tools */}
        <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <SectionArticles
            title="AI Legal Tools"
            articles={toolsArticles}
            isMobile={isMobile}
          />
        </section>

        {/* Tracker */}
        <section style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}>
          <SectionArticles
            title="AI Regulation Tracker"
            articles={trackerArticles}
            isMobile={isMobile}
          />
        </section>

        {/* Guides */}
        <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <SectionArticles
            title="Practice Guides"
            articles={guidesArticles}
            isMobile={isMobile}
          />
        </section>

        {/* Authors */}
        <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <SectionArticles
            title="Authors"
            articles={authorsArticles}
            isMobile={isMobile}
          />
        </section>

        {/* Key Metrics */}
        <section style={{
          backgroundColor: "#ffffff",
          padding: "clamp(56px, 8vw, 80px) clamp(16px, 4vw, 48px)",
        }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ marginBottom: "28px" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "8px" }}>
                Key Metrics
              </div>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: "700", color: "#1a1a1a", margin: 0, letterSpacing: "-0.02em" }}>
                Key Metrics
              </h2>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(32px, 8vw, 96px)",
              flexWrap: "wrap" as const,
            }}>
              {[
                { num: "50", label: "States Tracked" },
                { num: "12", label: "AI Laws Enacted" },
                { num: "23", label: "Bills in Progress" },
                { num: "47", label: "Tools Reviewed" },
              ].map(({ num, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "32px", fontWeight: "700", color: "#1a1a1a", letterSpacing: "-0.02em" }}>{num}</div>
                  <div style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#8e8e93", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function SectionArticles({
  title,
  articles,
  isMobile,
  compact = false,
}: {
  title: string
  articles: Article[]
  isMobile: boolean
  compact?: boolean
}) {
  const featured = articles[0]
  const list = articles.slice(1)

  return (
    <div style={compact ? undefined : { maxWidth: "1280px", margin: "0 auto", padding: "clamp(52px, 8vw, 72px) clamp(16px, 4vw, 48px)" }}>
      <div style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "700", color: "#1a1a1a", margin: "0 0 10px 0", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
          {title}
        </h2>
      </div>

      {featured && (
        <div style={{ marginBottom: "20px" }}>
          <HomeHorizontalArticle article={featured} />
        </div>
      )}

      {list.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
          {list.map((article) => (
            <HomeArticleCard key={`${title}-${article.slug}`} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}

function HomeHorizontalArticle({ article }: { article: Article }) {
  const initials = getInitials(article.author)

  return (
    <Link href={`/news/${article.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "14px",
        padding: "24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
        alignItems: "center",
      }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "10px" }}>
            {article.category}
          </div>
          <h3 style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: "700",
            color: "#1a1a1a",
            lineHeight: "1.25",
            marginBottom: "10px",
            letterSpacing: "-0.02em",
          }}>
            {article.title}
          </h3>
          <p style={{ color: "#6e6e73", fontSize: "14px", lineHeight: "1.65", margin: 0 }}>
            {article.metaDescription || article.ogDescription || ""}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", justifySelf: "end" }}>
          <AuthorAvatar initials={initials} size="sm" />
          <div style={{ fontSize: "12px", color: "#8e8e93", whiteSpace: "nowrap" }}>
            <div style={{ color: "#1a1a1a", fontWeight: "500", marginBottom: "2px" }}>{article.author}</div>
            <div>
              {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              {article.readingTime ? ` · ${article.readingTime} min read` : ""}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function HomeArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/news/${article.slug}`} style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={(e) => {
        const h3 = e.currentTarget.querySelector('h3') as HTMLElement;
        if (h3) h3.style.color = "#0066cc";
      }}
      onMouseLeave={(e) => {
        const h3 = e.currentTarget.querySelector('h3') as HTMLElement;
        if (h3) h3.style.color = "#1a1a1a";
      }}
    >
      <div style={{
        fontSize: "10px",
        fontWeight: "600",
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
        color: "#0066cc",
        marginBottom: "12px",
      }}>
        {article.category}
      </div>
      <h3 style={{
        fontSize: "17px",
        fontWeight: "600",
        color: "#1a1a1a",
        lineHeight: "1.3",
        marginBottom: "12px",
        letterSpacing: "-0.015em",
        transition: "color 0.2s",
      }}>
        {article.title}
      </h3>
      <p style={{
        color: "#6e6e73",
        fontSize: "13px",
        lineHeight: "1.65",
        marginBottom: "16px",
      }}>
        {article.metaDescription || article.ogDescription || ""}
      </p>
      <div style={{ fontSize: "11px", color: "#8e8e93", letterSpacing: "0.04em" }}>
        {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        {article.readingTime ? ` · ${article.readingTime} min read` : ""}
      </div>
    </Link>
  )
}
