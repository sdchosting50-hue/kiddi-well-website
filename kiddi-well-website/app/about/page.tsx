import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us - Kiddi Well',
  description: 'Learn about Kiddi Well mission, values, and commitment to providing premium organic baby food.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Kiddi Well</h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Our story is about commitment to your baby's health, nutrition, and happiness
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-secondary rounded-xl border border-border overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552439754-5d6c263aa154?w=600&h=600&fit=crop"
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Kiddi Well was founded with a simple belief: every baby deserves nutritious, organic food
                made with love and care. What started as a passion project has grown into a trusted brand
                serving thousands of families across West Bengal.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We understand the concerns of modern parents—you want the best for your little one. That's
                why we've dedicated ourselves to creating baby food products that are not only nutritious
                but also free from artificial additives, preservatives, and chemicals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every product is carefully crafted using hand-picked organic ingredients, ensuring that
                your baby gets the best nutrition during these critical developmental years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide premium, organic, and nutritious baby food products that support healthy growth
                and development while giving parents peace of mind. We are committed to maintaining the
                highest standards of quality, safety, and nutrition in every product we create.
              </p>
            </div>

            {/* Values */}
            <div className="bg-secondary rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Core Values</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-foreground">Quality:</strong> Only the finest organic ingredients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-foreground">Safety:</strong> Rigorous testing and certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-foreground">Care:</strong> Made with love for your baby</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-foreground">Trust:</strong> Transparent and honest practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Trust Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Parents Trust Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Organic Excellence',
                description: 'All ingredients are certified organic, free from pesticides and chemicals.',
              },
              {
                title: 'Quality Assurance',
                description: 'Every batch is tested for safety and nutritional value by certified labs.',
              },
              {
                title: 'Transparent Process',
                description: 'We believe in complete transparency about sourcing and production methods.',
              },
              {
                title: 'Nutritionist Approved',
                description: 'Our products are formulated with guidance from child nutrition experts.',
              },
              {
                title: 'Trusted by Families',
                description: 'Serving thousands of happy families across West Bengal and beyond.',
              },
              {
                title: 'Commitment to Care',
                description: 'Your baby\'s health is our priority, and we never compromise on quality.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center bg-secondary rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Thousands of Happy Parents
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-balance max-w-2xl mx-auto">
            Discover the Kiddi Well difference and give your baby the nutrition they deserve
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
            >
              Explore Products
            </Link>
            <a
              href="mailto:city@kiddiwell.com?subject=About Kiddi Well"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
