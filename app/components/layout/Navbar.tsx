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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const navStyle = {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.3s ease",
    backgroundColor: scrolled || mobileOpen ? "rgba(255,255,255,0.98)" : "transparent",
    backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "none",
    borderBottom: scrolled || mobileOpen ? "1px solid #e5e5e5" : "none",
  }

  const topBarStyle = {
    borderBottom: "1px solid rgba(26,26,26,0.1)",
    padding: isMobile ? "4px 16px" : "6px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: isMobile ? "10px" : "11px",
    letterSpacing: "0.1em",
    color: "#737373",
    textTransform: "uppercase" as const,
  }

  const mainNavStyle = {
    padding: isMobile ? "0 16px" : "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: isMobile ? "56px" : "64px",
  }

  return (
    <>
      <header style={navStyle}>
        {/* Top bar - hide on mobile */}
        {!isMobile && (
          <div style={topBarStyle}>
            <span>Legal Intelligence for AI Era</span>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/newsletter" style={{ color: "#1a1a1a", textDecoration: "none" }}>
                Newsletter
              </Link>
              <span style={{ color: "#a1a1aa" }}>|</span>
              <span>Est. 2025</span>
            </div>
          </div>
        )}

        {/* Main nav */}
        <nav style={mainNavStyle} aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: isMobile ? "28px" : "32px",
              height: isMobile ? "28px" : "32px",
              background: "#1a1a1a",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              flexShrink: 0,
            }} />
            {!isMobile && (
              <div>
                <div style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                }}>
                  Decision<span style={{ color: "#1a1a1a" }}>&</span>Law
                </div>
                <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#737373", textTransform: "uppercase" }}>
                  decisionandlaw.com
                </div>
              </div>
            )}
          </Link>

          {/* Desktop nav links */}
          {!isMobile && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      padding: "8px 14px",
                      color: "#737373",
                      textDecoration: "none",
                      fontSize: "13px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                      fontWeight: "500",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/newsletter"
                style={{
                  padding: "9px 20px",
                  backgroundColor: "transparent",
                  border: "1px solid #1a1a1a",
                  color: "#1a1a1a",
                  textDecoration: "none",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  fontWeight: "600",
                }}
              >
                Subscribe
              </Link>
            </>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                padding: "8px",
                cursor: "pointer",
                color: "#1a1a1a",
              }}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          )}
        </nav>

        {/* Mobile menu */}
        {isMobile && mobileOpen && (
          <div style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e5e5e5",
            padding: "16px",
            maxHeight: "70vh",
            overflowY: "auto",
          }}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 0",
                    color: "#1a1a1a",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                    borderBottom: "1px solid #f4f4f5",
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div style={{ paddingLeft: "16px" }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: "block",
                          padding: "10px 0",
                          color: "#737373",
                          textDecoration: "none",
                          fontSize: "14px",
                          borderBottom: "1px solid #f4f4f5",
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                marginTop: "16px",
                padding: "12px 20px",
                backgroundColor: "#1a1a1a",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                textAlign: "center" as const,
              }}
            >
              Subscribe to Newsletter
            </Link>
          </div>
        )}
      </header>
      
      {/* Spacer for fixed header */}
      <div style={{ height: isMobile ? (mobileOpen ? "110px" : "56px") : (scrolled ? "100px" : "76px") }} />
    </>
  )
}
