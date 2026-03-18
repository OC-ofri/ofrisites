'use client';

import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroNew({ 
  title = 'משפרים את העסק שלך',
  subtitle = 'פתרונות טכנולוגיות חכמות שמעלות מכירות ומחסכות זמן',
  ctaText = 'בואו נתחיל',
  ctaLink = '#contact'
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#4A5FBF] to-[#6B7FDF] text-white pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -right-20 animate-float"></div>
      <div className="absolute w-72 h-72 bg-white/5 rounded-full -bottom-16 -left-16 animate-float" style={{ animationDirection: 'reverse' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 opacity-95 leading-relaxed">
          {subtitle}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-white text-[#4A5FBF] px-8 py-4 rounded-lg font-bold text-lg md:text-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
