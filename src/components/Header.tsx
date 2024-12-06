
import { Search } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
          <Search className="h-10 w-10 text-white" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 inline-block text-transparent bg-clip-text">
        Simple Knowledge Hub
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Explore our curated collection of articles, tutorials, and guides to enhance your development journey
      </p>
    </div>
  );
}