'use client';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedState: string;
  setSelectedState: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  selectedPlatform: string;
  setSelectedPlatform: (val: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  states: string[];
  categories: string[];
  onClear: () => void;
}

export default function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedState,
  setSelectedState,
  selectedCategory,
  setSelectedCategory,
  selectedPlatform,
  setSelectedPlatform,
  sortBy,
  setSortBy,
  states,
  categories,
  onClear
}: FilterBarProps) {
  const selectClasses = "bg-zinc-900 border border-zinc-800 text-brand-light text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 outline-none hover:border-zinc-700 transition-colors cursor-pointer appearance-none";

  return (
    <div className="sticky top-[72px] md:top-[88px] z-40 bg-[#111111]/95 backdrop-blur-md border-b border-zinc-800 py-4 px-6 md:px-12 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search */}
        <div className="w-full md:w-auto flex-1 max-w-sm relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input 
            type="text" 
            placeholder="Search creators..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-brand-light text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block pl-10 p-2.5 outline-none hover:border-zinc-700 transition-colors"
          />
        </div>

        {/* Dropdowns */}
        <div className="w-full md:w-auto flex flex-wrap md:flex-nowrap gap-3 flex-1 justify-end">
          <div className="relative min-w-[120px] flex-1 md:flex-none">
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className={selectClasses}>
              <option value="">All States</option>
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown />
          </div>
          
          <div className="relative min-w-[140px] flex-1 md:flex-none">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className={selectClasses}>
              <option value="">All Categories</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <ChevronDown />
          </div>

          <div className="relative min-w-[130px] flex-1 md:flex-none">
            <select value={selectedPlatform} onChange={(e) => setSelectedPlatform(e.target.value)} className={selectClasses}>
              <option value="">All Platforms</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
              <option value="facebook">Facebook</option>
            </select>
            <ChevronDown />
          </div>

          <div className="relative min-w-[140px] flex-1 md:flex-none">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectClasses}>
              <option value="newest">Sort: Newest</option>
              <option value="followers">Highest Followers</option>
              <option value="alphabetical">Alphabetical (A-Z)</option>
            </select>
            <ChevronDown />
          </div>

          <button 
            onClick={onClear}
            className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap"
          >
            Clear
          </button>
        </div>

      </div>
    </div>
  );
}

// Reusable SVG chevron
function ChevronDown() {
  return (
    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );
}
