import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const testimonials = [
    {
      name: 'Priya Sharma',
      quote: 'My baby loves Kiddi Well products! The quality is exceptional and my child is thriving.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      quote: 'Best baby food brand we\'ve tried. Pure ingredients and excellent customer service.',
      rating: 5,
    },
    {
      name: 'Anjali Das',
      quote: 'Kiddi Well gives me peace of mind knowing exactly what my baby is eating.',
      rating: 5,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-white py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
                Premium Nutrition for Your Little One
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Kiddi Well brings you organically crafted baby food, made with love and the finest ingredients. Give your baby the best start in life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-center"
                >
                  Shop Products
                </Link>
                <a
                  href="mailto:city@kiddiwell.com?subject=Product Inquiry"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-colors font-semibold text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-80 md:h-96 bg-white rounded-xl border border-border overflow-hidden shadow-lg">
              <Image
                src="/images/baby-hero.jpg"
                alt="Happy baby with nutritious food"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Kiddi Well?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              We believe in quality, purity, and nutrition for your baby
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Organic Ingredients',
                description: 'All our products are made from organic, hand-picked ingredients with no artificial additives.',
                icon: '🌿',
              },
              {
                title: 'Nutrient Rich',
                description: 'Carefully formulated to provide essential vitamins and minerals for healthy growth and development.',
                icon: '💪',
              },
              {
                title: 'Trusted Quality',
                description: 'Made with love and tested for safety, trusted by thousands of parents across West Bengal.',
                icon: '✓',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-secondary rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Featured Products</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Discover our most popular and trusted baby food selections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Parents Say</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Real experiences from happy parents and their babies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">{testimonial.quote}</p>
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Give Your Baby the Best?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-balance">
            Start your journey to optimal nutrition with Kiddi Well today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
            >
              Shop Now
            </Link>
            <a
              href="mailto:city@kiddiwell.com?subject=General Inquiry"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
