import Link from 'next/link';

export const metadata = {
  title: 'Shipping Policy - Kiddi Well',
  description: 'Learn about Kiddi Well shipping policy, delivery timelines, and logistics partners.',
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shipping Policy</h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Understanding our delivery and shipping procedures
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to You</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Kiddi Well, we understand that you're eager to receive your premium baby food products. We are
              committed to ensuring safe, timely, and reliable delivery of all orders. This shipping policy outlines
              our delivery procedures, timelines, and handling standards to ensure your baby's nutrition products
              arrive in perfect condition.
            </p>
          </div>

          {/* Delivery Timeline */}
          <div className="bg-secondary rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Delivery Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Order Confirmation</h3>
                  <p className="text-sm text-muted-foreground">We confirm receipt of your order within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Processing</h3>
                  <p className="text-sm text-muted-foreground">Orders are processed and prepared within 2-3 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Shipping</h3>
                  <p className="text-sm text-muted-foreground">Your order ships via our trusted logistics partners within West Bengal (5-7 business days) or Pan-India (10-14 business days)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Delivery Confirmation</h3>
                  <p className="text-sm text-muted-foreground">You'll receive tracking updates and delivery confirmation upon arrival</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Areas */}
          <div className="bg-white rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Shipping Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">Primary Delivery Zone</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Barasat and surrounding areas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> North and South 24 Parganas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Kolkata metropolitan area
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> West Bengal state
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 font-semibold">
                  Delivery Time: 5-7 business days
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">Pan-India Delivery</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> All major cities in India
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Through national couriers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Insured and tracked delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Standard and express options
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 font-semibold">
                  Delivery Time: 10-14 business days
                </p>
              </div>
            </div>
          </div>

          {/* Packaging & Handling */}
          <div className="bg-secondary rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Packaging & Handling</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Safe Packaging</h3>
                <p className="text-muted-foreground">
                  All products are carefully packed in food-grade, insulated packaging with cooling agents to maintain
                  optimal temperature during transit. We use eco-friendly materials wherever possible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every package is inspected for integrity before dispatch. Products are sealed and labeled with batch
                  numbers, manufacturing dates, and expiry information for complete traceability.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cold Chain Management</h3>
                <p className="text-muted-foreground">
                  For products requiring refrigeration, we maintain strict cold chain standards from our facility to your
                  doorstep, ensuring freshness and nutritional integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Logistics Partners */}
          <div className="bg-white rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Logistics Partners</h2>
            <p className="text-muted-foreground mb-6">
              Kiddi Well works with trusted, certified logistics partners known for their reliability and care in handling
              food products:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground">
                <span className="text-primary font-bold">•</span> Local courier services for West Bengal delivery
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <span className="text-primary font-bold">•</span> National logistics companies for pan-India reach
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <span className="text-primary font-bold">•</span> Express delivery options available for urgent orders
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <span className="text-primary font-bold">•</span> Real-time tracking for all shipments
              </div>
            </div>
          </div>

          {/* Shipping Costs */}
          <div className="bg-secondary rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Shipping Charges</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Shipping charges vary based on order weight, delivery location, and shipping method selected:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-primary">•</span> Standard shipping within West Bengal: Varies
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-primary">•</span> Pan-India standard delivery: Calculated at checkout
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-primary">•</span> Express shipping: Premium charges apply
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="text-primary">•</span> Free shipping eligible orders: Check during ordering
                </li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-4">
                Contact us at city@kiddiwell.com for specific shipping quotes
              </p>
            </div>
          </div>

          {/* Damage & Issues */}
          <div className="bg-white rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Damaged or Lost Packages</h2>
            <p className="text-muted-foreground mb-4">
              In the rare event that your order arrives damaged or is lost in transit:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">1. Report Immediately</h3>
                <p className="text-muted-foreground">
                  Contact us within 24 hours of delivery with photos of the damaged packaging and products
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">2. Documentation</h3>
                <p className="text-muted-foreground">
                  Provide order number, delivery proof, and detailed descriptions of the damage
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">3. Resolution</h3>
                <p className="text-muted-foreground">
                  We will investigate and provide replacement shipments or refunds as appropriate
                </p>
              </div>
            </div>
          </div>

          {/* Return Policy */}
          <div className="bg-secondary rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Return & Exchange Policy</h2>
            <p className="text-muted-foreground mb-4">
              Given the nature of food products and their perishability, returns and exchanges are accepted under specific
              circumstances:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Defective Products:</strong> Unopened, damaged, or expired products can be returned within 7 days of delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Quality Issues:</strong> Contact us immediately if products don't meet our quality standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Opened Products:</strong> Due to food safety, opened products cannot be returned</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span className="text-muted-foreground"><strong className="text-foreground">Refunds:</strong> Will be processed within 10 business days of inspection and approval</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need Help with Your Shipment?</h2>
            <p className="text-muted-foreground mb-6">
              For shipping inquiries, tracking information, or any concerns about your delivery:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:city@kiddiwell.com?subject=Shipping Inquiry"
                className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-center"
              >
                Email Support
              </a>
              <Link
                href="/contact"
                className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors font-semibold text-center"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Order Kiddi Well Products?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-balance max-w-2xl mx-auto">
            Discover how fast and safely we deliver premium baby nutrition to your door
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
