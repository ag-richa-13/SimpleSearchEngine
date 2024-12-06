
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 my-6">
      <button
        onClick={() => onCategoryChange('')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          selectedCategory === '' 
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }`}
      >
        All Topics
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}