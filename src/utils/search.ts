import { SearchResult } from '../types';

export function filterResults(
  results: SearchResult[],
  query: string,
  category: string
): SearchResult[] {
  return results.filter((result) => {
    const matchesQuery =
      query === '' ||
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(query.toLowerCase());

    const matchesCategory = category === '' || result.category === category;

    return matchesQuery && matchesCategory;
  });
}