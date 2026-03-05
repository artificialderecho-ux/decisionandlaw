"use client"

import Link from "next/link"

const FOOTER_LINKS = {
  News: [
    { label: "Legislation", href: "/news/legislation" },
    { label: "Case Law", href: "/news/case-law" },
    { label: "Ethics", href: "/news/ethics" },
    { label: "AI Regulation", href: "/news/legislation/ai-regulation" },
  ],
  Tools: [
    { label: "All Tools", href: "/tools" },
    { label: "Solo Practitioners", href: "/tools/for-solo-practitioners" },
    { label: "Small Firms", href: "/tools/for-small-firms" },
    { label: "Compare", href: "/tools/compare" },
  ],
  Tracker: [
    { label: "50-State Index", href: "/tracker/state" },
    { label: "Federal AI Policy", href: "/tracker/federal-ai-policy" },
    { label: "ABA Opinions", href: "/tracker/aba-opinions" },
    { label: "Malpractice Cases", href: "/tracker/malpractice-cases" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Authors", href: "/authors" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Guides", href: "/guides" },
  ],
}

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#080808",
      borderTop: "1px solid rgba(212,175,55,0.15)",
      paddingTop: "64px",
      fontFamily: "'Georgia', serif",
    }} aria-label="Site footer">
      {/* Main footer content */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 32px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: "48px",
      }}>
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{
              width: "28px",
              height: "28px",
              background: "linear-gradient(135deg, #D4AF37, #8B7320)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: "17px",
              fontWeight: "700",
              color: "#F5F0E8",
              letterSpacing: "0.02em",
            }}>
              Decision<span style={{ color: "#D4AF37" }}>&</span>Law
            </span>
          </div>
          <p style={{
            color: "#666",
            fontSize: "14px",
            lineHeight: "1.7",
            marginBottom: "24px",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}>
            Legal intelligence for AI era. Covering legislation, case law, and emerging tools for US legal professionals.
          </p>
          <Link
            href="/newsletter"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              border: "1px solid rgba(212,175,55,0.5)",
              color: "#D4AF37",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
          >
            Get Newsletter →
          </Link>
          <p style={{ marginTop: "32px", fontSize: "11px", color: "#444", letterSpacing: "0.05em" }}>
            &copy; {new Date().getFullYear()} decisionandlaw.com<br />
            Not legal advice.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <h4 style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "20px",
              fontFamily: "Georgia, serif",
            }}>
              {section}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#5A5550",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "Georgia, serif",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C8C0B0")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#5A5550")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: "1200px",
        margin: "48px auto 0",
        padding: "20px 32px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "11px",
        color: "#3A3530",
        letterSpacing: "0.06em",
      }}>
        <span>DECISIONANDLAW.COM — LEGAL INTELLIGENCE FOR THE AI ERA</span>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/privacy" style={{ color: "#3A3530", textDecoration: "none" }}>Privacy</Link>
          <Link href="/terms" style={{ color: "#3A3530", textDecoration: "none" }}>Terms</Link>
          <Link href="/advertise" style={{ color: "#3A3530", textDecoration: "none" }}>Advertise</Link>
        </div>
      </div>
    </footer>
  )
}
