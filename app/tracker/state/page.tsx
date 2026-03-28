'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllStates, getStatesByRegion, getStatesByStatus, type State } from '../../lib/states';

export default function StateRegulationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allStates = getAllStates();
  
  const statusCounts = useMemo(() => {
    return {
      enacted: getStatesByStatus('enacted').length,
      'active-legislation': getStatesByStatus('active-legislation').length,
      monitoring: getStatesByStatus('monitoring').length,
      'no-activity': getStatesByStatus('no-activity').length,
    };
  }, []);

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

  const getStatusColor = (status: State['aiLegalStatus']) => {
    switch (status) {
      case 'enacted':
        return { bg: '#f4f4f5', color: '#1a1a1a', border: '#e5e5e5' };
      case 'active-legislation':
        return { bg: '#f4f4f5', color: '#1a1a1a', border: '#e5e5e5' };
      case 'monitoring':
        return { bg: '#f4f4f5', color: '#737373', border: '#e5e5e5' };
      case 'no-activity':
        return { bg: '#f4f4f5', color: '#737373', border: '#e5e5e5' };
    }
  };

  const getStatusText = (status: State['aiLegalStatus']) => {
    switch (status) {
      case 'enacted':
        return 'Enacted';
      case 'active-legislation':
        return 'Active Legislation';
      case 'monitoring':
        return 'Monitoring';
      case 'no-activity':
        return 'No Activity';
    }
  };

  const regions = ['all', 'Northeast', 'Southeast', 'Midwest', 'Southwest', 'West'];
  const statuses = ['all', 'enacted', 'active-legislation', 'monitoring', 'no-activity'];

  const inputStyle = {
    width: '100%',
    padding: '8px 16px',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e5e5',
    borderRadius: '0',
    color: '#1a1a1a',
    outline: 'none',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/tracker" style={{ color: '#1a1a1a', textDecoration: 'none', marginBottom: '16px', display: 'inline-block' }}>
            ← Back to AI Regulation Tracker
          </Link>
          <h1 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '8px', color: '#1a1a1a' }}>
            State AI Regulations
          </h1>
          <p style={{ color: '#737373' }}>
            Track AI legislation and regulatory status across all 50 states
          </p>
        </div>

        {/* Status Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '16px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}>{statusCounts.enacted}</div>
            <div style={{ fontSize: '0.875rem', color: '#737373' }}>Enacted</div>
          </div>
          <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '16px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}>{statusCounts['active-legislation']}</div>
            <div style={{ fontSize: '0.875rem', color: '#737373' }}>Active Legislation</div>
          </div>
          <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '16px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#737373' }}>{statusCounts.monitoring}</div>
            <div style={{ fontSize: '0.875rem', color: '#737373' }}>Monitoring</div>
          </div>
          <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '16px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#737373' }}>{statusCounts['no-activity']}</div>
            <div style={{ fontSize: '0.875rem', color: '#737373' }}>No Activity</div>
          </div>
        </div>

        {/* Filters */}
        <div style={{ backgroundColor: '#f4f4f5', border: '1px solid #e5e5e5', padding: '24px', marginBottom: '32px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#1a1a1a', marginBottom: '8px' }}>
                Search States
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or abbreviation..."
                style={inputStyle}
              />
            </div>

            {/* Region Filter */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#1a1a1a', marginBottom: '8px' }}>
                Filter by Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                style={inputStyle}
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#1a1a1a', marginBottom: '8px' }}>
                Filter by Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                style={inputStyle}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Statuses' : getStatusText(status as State['aiLegalStatus'])}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6" style={{ color: '#737373' }}>
          Showing {filteredStates.length} of {allStates.length} states
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStates.map((state) => {
            const statusStyle = getStatusColor(state.aiLegalStatus);
            return (
              <Link
                key={state.slug}
                href={`/tracker/state/${state.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e5e5e5',
                  padding: '24px',
                  transition: 'all 0.3s',
                }}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a1a1a' }}>
                        {state.name}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#737373' }}>{state.abbreviation}</p>
                    </div>
                    <span style={{
                      padding: '4px 8px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      backgroundColor: statusStyle.bg,
                      color: statusStyle.color,
                      border: `1px solid ${statusStyle.border}`,
                    }}>
                      {getStatusText(state.aiLegalStatus)}
                    </span>
                  </div>
                  
                  <div className="space-y-1 text-sm" style={{ color: '#737373' }}>
                    <div>Capital: {state.capital}</div>
                    <div>Region: {state.region}</div>
                  </div>

                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '0.75rem', color: '#1a1a1a' }}>
                      View details →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredStates.length === 0 && (
          <div className="text-center py-12">
            <div style={{ fontSize: '1.125rem', color: '#737373', marginBottom: '8px' }}>No states found</div>
            <div style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>
              Try adjusting your filters or search terms
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
