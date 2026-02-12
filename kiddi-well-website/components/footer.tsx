import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/Kiddiwell.png"
                alt="Kiddi Well"
                width={180}
                height={60}
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm opacity-90">
              Premium baby food trusted by parents across West Bengal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="opacity-75 hover:opacity-100 transition-opacity">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-75 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="opacity-75 hover:opacity-100 transition-opacity">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-75 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:city@kiddiwell.com" className="opacity-75 hover:opacity-100 transition-opacity">
                  city@kiddiwell.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-75">Contact via email</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <address className="not-italic opacity-75">
                12/25, Block E, 2nd Floor<br />
                Flat No. 204, KNC Road<br />
                Barasat, 24 Parganas<br />
                West Bengal, 700124
              </address>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <p className="text-center text-sm opacity-75">
            © {currentYear} Kiddi Well. All rights reserved. Premium nutrition for your little ones.
          </p>
        </div>
      </div>
    </footer>
  );
}
