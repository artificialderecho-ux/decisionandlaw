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
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'active-legislation':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'monitoring':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'no-activity':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
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

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-[120px]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/tracker" className="text-[#D4AF37] hover:text-[#B8941F] mb-4 inline-block transition-colors">
            ← Back to AI Regulation Tracker
          </Link>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] bg-clip-text text-transparent">
            State AI Regulations
          </h1>
          <p className="text-gray-400">
            Track AI legislation and regulatory status across all 50 states
          </p>
        </div>

        {/* Status Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">{statusCounts.enacted}</div>
            <div className="text-sm text-gray-400">Enacted</div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400">{statusCounts['active-legislation']}</div>
            <div className="text-sm text-gray-400">Active Legislation</div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-400">{statusCounts.monitoring}</div>
            <div className="text-sm text-gray-400">Monitoring</div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-400">{statusCounts['no-activity']}</div>
            <div className="text-sm text-gray-400">No Activity</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                Search States
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or abbreviation..."
                className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              />
            </div>

            {/* Region Filter */}
            <div>
              <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                Filter by Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              >
                {regions.map(region => (
                  <option key={region} value={region} className="bg-[#1A1A1A]">
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                Filter by Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              >
                {statuses.map(status => (
                  <option key={status} value={status} className="bg-[#1A1A1A]">
                    {status === 'all' ? 'All Statuses' : getStatusText(status as State['aiLegalStatus'])}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400">
          Showing {filteredStates.length} of {allStates.length} states
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStates.map((state) => (
            <Link
              key={state.slug}
              href={`/tracker/state/${state.slug}`}
              className="group block"
            >
              <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                      {state.name}
                    </h3>
                    <p className="text-sm text-gray-400">{state.abbreviation}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(state.aiLegalStatus)}`}>
                    {getStatusText(state.aiLegalStatus)}
                  </span>
                </div>
                
                <div className="space-y-1 text-sm text-gray-400">
                  <div>Capital: {state.capital}</div>
                  <div>Region: {state.region}</div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
                  <div className="text-xs text-[#D4AF37] group-hover:text-[#F4E4C1] transition-colors">
                    View details →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredStates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No states found</div>
            <div className="text-gray-500 text-sm">
              Try adjusting your filters or search terms
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
