'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:city@kiddiwell.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions about our products or services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-border p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground bg-background"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground bg-background"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground bg-background"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground bg-background resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 active:scale-95 transition-all duration-200 font-semibold cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Company Info Card */}
              <div className="bg-white rounded-xl border border-border p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">Company Information</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary rounded-lg p-3 flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:city@kiddiwell.com"
                        className="text-primary hover:underline"
                      >
                        city@kiddiwell.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary rounded-lg p-3 flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <address className="not-italic text-muted-foreground leading-relaxed">
                        12/25, Block E, 2nd Floor<br />
                        Flat No. 204, KNC Road<br />
                        Barasat, 24 Parganas<br />
                        West Bengal, 700124<br />
                        India
                      </address>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary rounded-lg p-3 flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                      <p className="text-muted-foreground">
                        We typically respond to inquiries within 24 hours on business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Card */}
              <div className="bg-secondary rounded-xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">When should I start baby food?</p>
                    <p className="text-sm text-muted-foreground">
                      Most experts recommend introducing solids around 6 months of age. Always consult your pediatrician.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Are your products organic?</p>
                    <p className="text-sm text-muted-foreground">
                      Yes, all Kiddi Well products are made from certified organic ingredients with no artificial additives.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">How are orders placed?</p>
                    <p className="text-sm text-muted-foreground">
                      Contact us via email at city@kiddiwell.com to discuss your requirements and place orders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Questions About Our Products?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-balance max-w-2xl mx-auto">
            Our team is ready to help you find the perfect baby food products for your little one.
          </p>
          <a
            href="mailto:city@kiddiwell.com?subject=Product Inquiry"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
          >
            Email Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
