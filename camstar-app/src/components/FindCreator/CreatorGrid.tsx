'use client';

import { useState, useEffect } from 'react';
import type { Creator } from '@/data/creators';
import CreatorCard from './CreatorCard';

interface CreatorGridProps {
  creators: Creator[];
  onResetFilters: () => void;
}

export default function CreatorGrid({ creators, onResetFilters }: CreatorGridProps) {
  const [visibleCount, setVisibleCount] = useState(24);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(24);
  }, [creators]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 24);
  };

  if (creators.length === 0) {
    return (
      <div className="py-32 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">No creators found</h3>
        <p className="text-zinc-400 mb-8 max-w-md">
          We couldn't find any creators matching your current filters. Try adjusting your search or clearing the filters.
        </p>
        <button 
          onClick={onResetFilters}
          className="px-6 py-3 bg-brand-light text-zinc-900 font-bold rounded-full hover:bg-white transition-colors"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {creators.slice(0, visibleCount).map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
      
      {visibleCount < creators.length && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={handleLoadMore}
            className="px-8 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-medium rounded-full transition-all"
          >
            Load More Creators
          </button>
        </div>
      )}
    </div>
  );
}
