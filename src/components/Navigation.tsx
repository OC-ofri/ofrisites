'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-md z-50 h-16 md:h-20 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl md:text-3xl primary-blue hover:opacity-80 transition-opacity">
          ofrisites
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 lg:gap-12">
          <Link 
            href="/" 
            className="text-grey-700 hover:primary-blue transition-colors text-base lg:text-lg font-medium relative group"
          >
            בית
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-[#4A5FBF] to-[#6B7FDF] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/deals" 
            className="text-grey-700 hover:primary-blue transition-colors text-base lg:text-lg font-medium relative group"
          >
            Deals
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-[#4A5FBF] to-[#6B7FDF] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <a 
            href="#about" 
            className="text-grey-700 hover:primary-blue transition-colors text-base lg:text-lg font-medium relative group"
          >
            אודות
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-[#4A5FBF] to-[#6B7FDF] group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Desktop CTA */}
        <Link 
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-[#4A5FBF] to-[#6B7FDF] text-white px-6 py-2 rounded-lg font-bold text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          צרו קשר
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-3xl primary-blue hover:opacity-70 transition-opacity"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-[#E2E8F0] shadow-lg animate-slide-down">
          <div className="flex flex-col p-6 gap-4">
            <Link 
              href="/" 
              className="text-grey-700 hover:primary-blue text-base font-medium py-2 border-b border-[#E2E8F0]"
              onClick={() => setMobileMenuOpen(false)}
            >
              בית
            </Link>
            <Link 
              href="/deals" 
              className="text-grey-700 hover:primary-blue text-base font-medium py-2 border-b border-[#E2E8F0]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Deals
            </Link>
            <a 
              href="#about" 
              className="text-grey-700 hover:primary-blue text-base font-medium py-2 border-b border-[#E2E8F0]"
              onClick={() => setMobileMenuOpen(false)}
            >
              אודות
            </a>
            <Link 
              href="#contact" 
              className="bg-gradient-to-r from-[#4A5FBF] to-[#6B7FDF] text-white px-6 py-3 rounded-lg font-bold text-base text-center transition-all duration-300 hover:shadow-lg mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              צרו קשר
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
