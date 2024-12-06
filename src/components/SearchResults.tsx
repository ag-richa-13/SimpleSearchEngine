import React from 'react';
import { Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { SearchResult } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-500">Try adjusting your search terms or filters to find what you're looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {results.map((result) => (
        <article
          key={result.id}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
        >
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <span className="bg-blue-50 px-3 py-1 rounded-full font-medium">
              {result.category}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
            {result.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{result.excerpt}</p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              {result.date}
            </span>
            <button className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
              Read more
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}