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
                src="data:image/png;base64,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"
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
