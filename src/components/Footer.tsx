'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#2D3A7A] to-[#1A1A1A] text-white pt-16 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">ofrisites</h3>
            <p className="text-white/80 text-lg">
              פתרונות טכנולוגיה לעסקים קטנים בישראל
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">ניווט</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-white/80 hover:text-white transition-colors">
                  Deals & Pricing
                </Link>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  אודות
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">צרו קשר</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@ofrisites.com" className="text-white/80 hover:text-white transition-colors">
                  📧 hello@ofrisites.com
                </a>
              </li>
              <li>
                <a href="tel:+972599999999" className="text-white/80 hover:text-white transition-colors">
                  📱 +972 (599) 999-999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-white/70 text-sm">
          <p>&copy; {currentYear} ofrisites. כל הזכויות שמורות. | Built with ❤️ in Israel</p>
        </div>
      </div>
    </footer>
  );
}
