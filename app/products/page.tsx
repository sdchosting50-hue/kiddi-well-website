'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { CategoryFilter } from '@/components/category-filter';
import { products } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Browse our complete collection of nutritious baby food products. Each product is carefully crafted
            with organic ingredients and tested for quality and safety.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Filter by Category</h2>
          <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        </div>

        {/* Products Grid */}
        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-secondary rounded-xl p-8 md:p-12 text-center border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have questions about our products?
          </h2>
          <p className="text-muted-foreground mb-6 text-balance">
            Our team is here to help you choose the perfect products for your baby's nutritional needs.
          </p>
          <a
            href="mailto:city@kiddiwell.com?subject=Product Questions"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
