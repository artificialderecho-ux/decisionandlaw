'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { type Article } from "contentlayer/generated"
import AuthorAvatar from "./components/AuthorAvatar"
import { WebsiteStructuredData } from "./components/StructuredData"

const TRACKER_HIGHLIGHTS = [
  { state: "California", status: "enacted", slug: "california" },
  { state: "New York", status: "enacted", slug: "new-york" },
  { state: "Texas", status: "active-legislation", slug: "texas" },
  { state: "Florida", status: "active-legislation", slug: "florida" },
  { state: "Colorado", status: "enacted", slug: "colorado" },
  { state: "Illinois", status: "active-legislation", slug: "illinois" },
]

const STATUS_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  enacted: { bg: "rgba(34,197,94,0.1)", text: "#16a34a", label: "Enacted" },
  "active-legislation": { bg: "rgba(0,102,204,0.08)", text: "#0066cc", label: "Active" },
  monitoring: { bg: "rgba(0,0,0,0.04)", text: "#6e6e73", label: "Monitoring" },
  "no-activity": { bg: "rgba(0,0,0,0.04)", text: "#8e8e93", label: "No Activity" },
}

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
  const latestArticle = sortedArticles[0]
  const remainingArticles = sortedArticles.slice(1, 5)

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
                marginBottom: "48px",
                maxWidth: "540px",
              }}>
                Legislation tracking, tool reviews, and case law analysis for US legal professionals navigating the AI transformation.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                <Link
                  href="/tracker"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 28px",
                    backgroundColor: "#1a1a1a",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.04em",
                    borderRadius: "8px",
                    transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  View 50-State Tracker
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section style={{ backgroundColor: "#fafafa", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(64px, 10vw, 120px) clamp(16px, 4vw, 48px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap" as const, gap: "16px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "8px" }}>
                  Latest Coverage
                </div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "700", color: "#1a1a1a", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                  Latest News
                </h2>
              </div>
              <Link href="/news" style={{ color: "#0066cc", textDecoration: "none", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "4px" }}>
                View all
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {latestArticle && (
              <div style={{ marginBottom: "20px" }}>
                <HomeHorizontalArticle article={latestArticle} />
              </div>
            )}

            {remainingArticles.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
                {remainingArticles.map((article) => (
                  <HomeArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Stats */}
        <div style={{
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          backgroundColor: "#fafafa",
          padding: "32px clamp(16px, 4vw, 48px)",
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

        {/* Tracker Preview */}
        <section style={{
          backgroundColor: "#ffffff",
          padding: "clamp(64px, 10vw, 120px) clamp(16px, 4vw, 48px)",
        }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap" as const, gap: "16px" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0066cc", marginBottom: "8px" }}>
                  Live Tracker
                </div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "700", color: "#1a1a1a", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                  AI Regulation Tracker
                </h2>
                <p style={{ color: "#6e6e73", fontSize: "15px", marginTop: "8px" }}>
                  Real-time status across all 50 US states
                </p>
              </div>
              <Link href="/tracker/state" style={{ color: "#0066cc", textDecoration: "none", fontSize: "13px", fontWeight: "500", display: "flex", alignItems: "center", gap: "4px" }}>
                Full Index
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px" }}>
              {TRACKER_HIGHLIGHTS.map((item) => {
                const s = STATUS_COLORS[item.status]
                return (
                  <Link
                    key={item.slug}
                    href={`/tracker/state/${item.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.08)",
                      borderRadius: "10px",
                      padding: "16px 20px",
                      textDecoration: "none",
                      transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#0066cc";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,102,204,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a" }}>{item.state}</span>
                    <span style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                      padding: "4px 10px",
                      backgroundColor: s.bg,
                      color: s.text,
                      borderRadius: "9999px",
                    }}>
                      {s.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
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
        gridTemplateColumns: "minmax(0, 1fr) auto",
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
