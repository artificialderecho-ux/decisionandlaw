"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const NAV_ITEMS = [
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Legislation", href: "/news/legislation" },
      { label: "Case Law", href: "/news/case-law" },
      { label: "Ethics", href: "/news/ethics" },
      { label: "AI Regulation", href: "/news/legislation/ai-regulation" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    children: [
      { label: "All Tools", href: "/tools" },
      { label: "For Solo Practitioners", href: "/tools/for-solo-practitioners" },
      { label: "For Small Firms", href: "/tools/for-small-firms" },
      { label: "Compare Tools", href: "/tools/compare" },
      { label: "Reviews", href: "/tools/reviews" },
    ],
  },
  {
    label: "Tracker",
    href: "/tracker",
    children: [
      { label: "50-State Index", href: "/tracker/state" },
      { label: "Federal AI Policy", href: "/tracker/federal-ai-policy" },
      { label: "ABA Opinions", href: "/tracker/aba-opinions" },
      { label: "Malpractice Cases", href: "/tracker/malpractice-cases" },
    ],
  },
  { label: "Guides", href: "/guides" },
  { label: "Authors", href: "/authors" }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        {/* Top bar */}
        <div style={{
          borderBottom: "1px solid rgba(212,175,55,0.1)",
          padding: "6px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "11px",
          letterSpacing: "0.1em",
          color: "#888",
          textTransform: "uppercase",
        }}>
          <span>Legal Intelligence for AI Era</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/newsletter" style={{ color: "#D4AF37", textDecoration: "none", transition: "color 0.2s" }}>
              Newsletter
            </Link>
            <span style={{ color: "#444" }}>|</span>
            <span>Est. 2025</span>
          </div>
        </div>

        {/* Main nav */}
        <nav style={{
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }} aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "32px",
              height: "32px",
              background: "linear-gradient(135deg, #D4AF37, #8B7320)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              flexShrink: 0,
            }} />
            <div>
              <div style={{
                fontFamily: "'Georgia', serif",
                fontSize: "18px",
                fontWeight: "700",
                color: "#F5F0E8",
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}>
                Decision<span style={{ color: "#D4AF37" }}>&</span>Law
              </div>
              <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#666", textTransform: "uppercase" }}>
                decisionandlaw.com
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "8px 14px",
                    color: openMenu === item.label ? "#D4AF37" : "#C8C0B0",
                    textDecoration: "none",
                    fontSize: "13px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: "500",
                    transition: "color 0.2s",
                    borderBottom: openMenu === item.label ? "2px solid #D4AF37" : "2px solid transparent",
                  }}
                >
                  {item.label}
                  {item.children && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openMenu === item.label && (
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    minWidth: "220px",
                    backgroundColor: "#0F0F0F",
                    border: "1px solid rgba(212,175,55,0.2)",
                    borderTop: "2px solid #D4AF37",
                    padding: "8px 0",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                  }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "10px 20px",
                          color: "#A09880",
                          textDecoration: "none",
                          fontSize: "13px",
                          letterSpacing: "0.03em",
                          transition: "all 0.15s",
                          borderLeft: "2px solid transparent",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.color = "#F5F0E8"
                          ;(e.target as HTMLElement).style.borderLeftColor = "#D4AF37"
                          ;(e.target as HTMLElement).style.paddingLeft = "24px"
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.color = "#A09880"
                          ;(e.target as HTMLElement).style.borderLeftColor = "transparent"
                          ;(e.target as HTMLElement).style.paddingLeft = "20px"
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/newsletter"
            style={{
              padding: "9px 20px",
              backgroundColor: "transparent",
              border: "1px solid #D4AF37",
              color: "#D4AF37",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: "600",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#D4AF37"
              ;(e.currentTarget as HTMLElement).style.color = "#0A0A0A"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"
              ;(e.currentTarget as HTMLElement).style.color = "#D4AF37"
            }}
          >
            Subscribe
          </Link>
        </nav>
      </header>
    </>
  )
}
