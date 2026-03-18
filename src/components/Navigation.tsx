'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl primary-blue">
          ofrisites
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-text-dark hover:primary-blue transition-colors text-lg font-medium">
            בית
          </Link>
          <Link href="/deals" className="text-text-dark hover:primary-blue transition-colors text-lg font-medium">
            Deals
          </Link>
          <a href="#about" className="text-text-dark hover:primary-blue transition-colors text-lg font-medium">
            אודות
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-3xl primary-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col p-6 gap-4">
            <Link href="/" className="text-text-dark hover:primary-blue text-lg font-medium">
              בית
            </Link>
            <Link href="/deals" className="text-text-dark hover:primary-blue text-lg font-medium">
              Deals
            </Link>
            <a href="#about" className="text-text-dark hover:primary-blue text-lg font-medium">
              אודות
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
