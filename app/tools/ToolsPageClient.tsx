'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TOOLS_BY_CATEGORY } from '../lib/tools';

const TOOLS = TOOLS_BY_CATEGORY;

const ICONS: Record<string, React.ReactNode> = {
  Research: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Contracts: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  'E-Discovery': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  'Legal Ops': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
};

export default function ToolsPageClient() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px) clamp(48px, 8vw, 80px)' }}>
        <div style={{ marginBottom: 'clamp(32px, 6vw, 48px)' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            AI Legal Tools Directory
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '700',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: '#1a1a1a',
            marginBottom: '16px',
          }}>
            AI Legal Tools
          </h1>
          <p style={{
            fontSize: '15px',
            lineHeight: '1.6',
            color: '#6e6e73',
            maxWidth: '560px',
            marginBottom: '12px',
          }}>
            A curated directory of AI-powered tools for legal professionals. Each tool has been selected based on practical utility, market presence, and relevance to modern legal practice.
          </p>
          <p style={{ fontSize: '12px', color: '#8e8e93' }}>
            Last updated: March 2026
          </p>
        </div>

        {Object.entries(TOOLS).map(([category, tools]) => (
          <section key={category} style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0066cc',
                border: '1px solid rgba(0,0,0,0.06)',
              }}>
                {ICONS[category]}
              </div>
              <h2 style={{
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.02em',
                color: '#1a1a1a',
                margin: 0,
              }}>
                {category}
              </h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '16px',
            }}>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  style={{
                    backgroundColor: '#ffffff',
                    border: hoveredTool === tool.name ? '1px solid #0066cc' : '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '12px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    boxShadow: hoveredTool === tool.name ? '0 4px 12px rgba(0,102,204,0.1)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      marginBottom: '8px',
                      lineHeight: 1.2,
                    }}>
                      {tool.name}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      lineHeight: '1.6',
                      color: '#6e6e73',
                    }}>
                      {tool.description}
                    </p>
                  </div>
                  <div style={{
                    padding: '14px 16px',
                    backgroundColor: '#fafafa',
                    borderRadius: '8px',
                    borderLeft: '3px solid #0066cc',
                  }}>
                    <p style={{
                      fontSize: '10px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#8e8e93',
                      marginBottom: '6px',
                    }}>
                      Best for
                    </p>
                    <p style={{
                      fontSize: '13px',
                      lineHeight: '1.5',
                      color: '#1a1a1a',
                    }}>
                      {tool.bestFor}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '14px', marginTop: 'auto', flexWrap: 'wrap' }}>
                    <Link
                      href={`/tools/${tool.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#1a1a1a',
                        textDecoration: 'none',
                      }}
                    >
                      Tool profile
                    </Link>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '500',
                        color: '#0066cc',
                        textDecoration: 'none',
                      }}
                    >
                      Visit site
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div style={{
          padding: '40px',
          backgroundColor: '#fafafa',
          borderRadius: '12px',
          textAlign: 'center',
          marginTop: 'clamp(24px, 4vw, 32px)',
          border: '1px solid rgba(0,0,0,0.06)',
        }}>
          <p style={{
            fontSize: '14px',
            color: '#6e6e73',
            marginBottom: '12px',
          }}>
            Know a tool we should list?
          </p>
          <a
            href="mailto:contact@decisionandlaw.com"
            style={{
              fontSize: '13px',
              fontWeight: '500',
              color: '#0066cc',
              textDecoration: 'none',
            }}
          >
            Contact us
          </a>
        </div>
      </div>
    </main>
  );
}
