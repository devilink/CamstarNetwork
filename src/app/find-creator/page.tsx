'use client';

import { useState, useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/FindCreator/Hero';
import FilterBar from '@/components/FindCreator/FilterBar';
import CreatorGrid from '@/components/FindCreator/CreatorGrid';
import { fetchCreators, Creator } from '@/data/creators';

export default function FindCreatorPage() {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'followers', 'alphabetical'

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCreators();
        setCreators(data);
      } catch (error) {
        console.error("Failed to fetch creators", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Compute unique filter options from data
  const states = useMemo(() => Array.from(new Set(creators.map(c => c.state))).sort(), [creators]);
  const categories = useMemo(() => Array.from(new Set(creators.map(c => c.category))).sort(), [creators]);
  
  // Memoized filtering and sorting
  const filteredCreators = useMemo(() => {
    let result = creators;

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.name.toLowerCase().includes(q) || 
        c.category.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q)
      );
    }

    // Filters
    if (selectedState) {
      result = result.filter(c => c.state === selectedState);
    }
    if (selectedCategory) {
      result = result.filter(c => c.category === selectedCategory);
    }
    if (selectedPlatform) {
      result = result.filter(c => {
        if (selectedPlatform === 'instagram') return !!c.followers.instagram;
        if (selectedPlatform === 'youtube') return !!c.followers.youtube;
        if (selectedPlatform === 'facebook') return !!c.followers.facebook;
        return true;
      });
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'followers') {
        const aTotal = (a.followers.instagram || 0) + (a.followers.youtube || 0) + (a.followers.facebook || 0);
        const bTotal = (b.followers.instagram || 0) + (b.followers.youtube || 0) + (b.followers.facebook || 0);
        return bTotal - aTotal;
      }
      // Default / 'newest' (just keep original array order or by id)
      return 0;
    });

    return result;
  }, [creators, searchQuery, selectedState, selectedCategory, selectedPlatform, sortBy]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedState('');
    setSelectedCategory('');
    setSelectedPlatform('');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-brand-light">
      <Header />
      
      <main className="flex-grow flex flex-col relative z-0">
        <Hero />
        
        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
          sortBy={sortBy}
          setSortBy={setSortBy}
          states={states}
          categories={categories}
          onClear={handleClearFilters}
        />

        <div className="bg-[#111111] min-h-[50vh]">
          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
            </div>
          ) : (
            <CreatorGrid 
              creators={filteredCreators} 
              onResetFilters={handleClearFilters} 
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
