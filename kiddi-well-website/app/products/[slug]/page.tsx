'use client';

import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleInquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const to = 'city@kiddiwell.com';
    const subject = `Order Inquiry: ${product.name}`;
    const body = `I would like to order ${product.name}. Please provide more information.`;
    
    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1' +
      '&to=' + encodeURIComponent(to) +
      '&su=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/products" className="hover:text-foreground transition-colors">
            Products
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="relative h-96 bg-white rounded-xl border border-border overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4 w-fit">
              <span className="text-sm font-semibold text-primary bg-secondary px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Organic', value: '100%' },
                { label: 'Natural', value: 'Yes' },
                { label: 'Safe', value: 'Certified' },
                { label: 'Age Group', value: '6+ months' },
              ].map((feature, index) => (
                <div key={index} className="bg-secondary rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">{feature.label}</p>
                  <p className="font-semibold text-foreground">{feature.value}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="border-t border-b border-border py-6 mb-6">
              <p className="text-sm text-muted-foreground mb-6">
                Premium quality, organic ingredients, no additives
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  onClick={handleInquiryClick}
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-center"
                >
                  Place Order Inquiry
                </a>
                <Link
                  href="/products"
                  className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors font-semibold text-center"
                >
                  Back to Products
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">About This Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Made with hand-picked organic ingredients</li>
                <li>✓ No artificial colors, flavors, or preservatives</li>
                <li>✓ Rich in essential nutrients and vitamins</li>
                <li>✓ Carefully tested for safety and quality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="bg-white rounded-xl border border-border hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="relative h-40 bg-secondary overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
