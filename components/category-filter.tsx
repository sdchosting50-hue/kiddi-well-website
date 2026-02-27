'use client';

import { categories } from '@/data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            selectedCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-foreground hover:bg-muted border border-border'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
