'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleInquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const to = 'city@kiddiwell.com';
    const subject = `Inquiry: ${product.name}`;
    const body = `I'm interested in your ${product.name} product. Please contact me with more information.`;
    
    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1' +
      '&to=' + encodeURIComponent(to) +
      '&su=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl border border-border hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Product Image */}
      <div className="relative h-48 bg-secondary overflow-hidden flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="inline-block mb-2">
          <span className="text-xs font-semibold text-primary bg-secondary px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">
          {product.description}
        </p>

        {/* Inquiry Button */}
        <div className="mt-auto pt-4 border-t border-border">
          <a
            href="#"
            onClick={handleInquiryClick}
            className="block w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold text-center"
          >
            Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
