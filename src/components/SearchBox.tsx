import React from 'react';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SearchBox({ searchQuery, onSearchChange }: SearchBoxProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles..."
          className="w-full px-4 py-4 pl-12 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </div>
  );
}