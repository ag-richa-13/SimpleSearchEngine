import React, { useState, useMemo } from 'react';
import { SearchBox } from './components/SearchBox';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchResults } from './components/SearchResults';
import { Header } from './components/Header';
import { mockResults } from './data/mockData';
import { filterResults } from './utils/search';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => 
    Array.from(new Set(mockResults.map(result => result.category))),
    []
  );

  const filteredResults = useMemo(() => 
    filterResults(mockResults, searchQuery, selectedCategory),
    [searchQuery, selectedCategory]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Header />
        <SearchBox 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <SearchResults results={filteredResults} />
      </div>
    </div>
  );
}

export default App;