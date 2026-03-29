'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllStates, getStatesByRegion, getStatesByStatus, type State } from '../../lib/states';

export default function StateRegulationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allStates = getAllStates();
  
  const statusCounts = useMemo(() => ({
    enacted: getStatesByStatus('enacted').length,
    'active-legislation': getStatesByStatus('active-legislation').length,
    monitoring: getStatesByStatus('monitoring').length,
    'no-activity': getStatesByStatus('no-activity').length,
  }), []);

  const filteredStates = useMemo(() => {
    let filtered = allStates;
    if (selectedRegion !== 'all') {
      filtered = filtered.filter(state => state.region === selectedRegion);
    }
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(state => state.aiLegalStatus === selectedStatus);
    }
    if (searchTerm) {
      filtered = filtered.filter(state => 
        state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        state.abbreviation.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [selectedRegion, selectedStatus, searchTerm]);

  const getStatusStyle = (status: State['aiLegalStatus']) => {
    switch (status) {
      case 'enacted':
        return { bg: 'rgba(0,102,204,0.08)', color: '#0066cc', label: 'Enacted' };
      case 'active-legislation':
        return { bg: 'rgba(0,102,204,0.06)', color: '#0066cc', label: 'Active' };
      case 'monitoring':
        return { bg: 'rgba(0,0,0,0.04)', color: '#6e6e73', label: 'Monitoring' };
      case 'no-activity':
        return { bg: 'rgba(0,0,0,0.04)', color: '#8e8e93', label: 'No Activity' };
    }
  };

  const regions = ['all', 'Northeast', 'Southeast', 'Midwest', 'Southwest', 'West'];
  const statuses = ['all', 'enacted', 'active-legislation', 'monitoring', 'no-activity'];

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px)' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(32px, 6vw, 48px)' }}>
          <Link href="/tracker" style={{ fontSize: '13px', color: '#6e6e73', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Tracker
          </Link>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0066cc', marginBottom: '12px' }}>
            50-State Index
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '700', marginBottom: '12px', color: '#1a1a1a', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
            State AI Regulations
          </h1>
          <p style={{ fontSize: '15px', color: '#6e6e73' }}>
            Track AI legislation and regulatory status across all 50 states
          </p>
        </div>

        {/* Status Counters */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          marginBottom: 'clamp(24px, 4vw, 32px)',
        }}>
          <StatusCounter count={statusCounts.enacted} label="Enacted" accent />
          <StatusCounter count={statusCounts['active-legislation']} label="Active" accent />
          <StatusCounter count={statusCounts.monitoring} label="Monitoring" />
          <StatusCounter count={statusCounts['no-activity']} label="No Activity" />
        </div>

        {/* Filters */}
        <div style={{
          backgroundColor: '#fafafa',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: 'clamp(24px, 4vw, 32px)',
          border: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                Search States
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name..."
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  color: '#1a1a1a',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                Filter by Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  color: '#1a1a1a',
                  fontSize: '14px',
                  outline: 'none',
                }}
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                Filter by Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  color: '#1a1a1a',
                  fontSize: '14px',
                  outline: 'none',
                }}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Status' : getStatusStyle(status as State['aiLegalStatus']).label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div style={{ fontSize: '13px', color: '#8e8e93', marginBottom: '20px' }}>
          Showing {filteredStates.length} of {allStates.length} states
        </div>

        {/* States Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {filteredStates.map((state) => {
            const status = getStatusStyle(state.aiLegalStatus);
            return (
              <Link
                key={state.slug}
                href={`/tracker/state/${state.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0066cc';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,102,204,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '2px' }}>
                        {state.name}
                      </h3>
                      <span style={{ fontSize: '12px', color: '#8e8e93' }}>{state.abbreviation}</span>
                    </div>
                    <span style={{
                      padding: '4px 10px',
                      fontSize: '10px',
                      fontWeight: '600',
                      letterSpacing: '0.04em',
                      backgroundColor: status.bg,
                      color: status.color,
                      borderRadius: '9999px',
                    }}>
                      {status.label}
                    </span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#6e6e73', marginBottom: '16px' }}>
                    <div>Capital: {state.capital}</div>
                    <div>Region: {state.region}</div>
                  </div>
                  <div style={{
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#0066cc',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    View details
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredStates.length === 0 && (
          <div style={{ textAlign: 'center', padding: '64px 32px' }}>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>No states found</div>
            <div style={{ fontSize: '14px', color: '#8e8e93' }}>Try adjusting your filters or search terms</div>
          </div>
        )}
      </div>
    </main>
  );
}

function StatusCounter({ count, label, accent = false }: { count: number; label: string; accent?: boolean }) {
  return (
    <div style={{
      backgroundColor: '#fafafa',
      borderRadius: '10px',
      padding: '16px',
      textAlign: 'center',
      border: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{
        fontSize: 'clamp(24px, 4vw, 32px)',
        fontWeight: '700',
        color: accent ? '#0066cc' : '#1a1a1a',
        letterSpacing: '-0.02em',
        marginBottom: '4px',
      }}>
        {count}
      </div>
      <div style={{ fontSize: '10px', fontWeight: '600', color: '#8e8e93', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </div>
    </div>
  );
}
