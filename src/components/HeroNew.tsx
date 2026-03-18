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
    <section className="relative bg-gradient-to-br from-[#4A5FBF] via-[#5A6FCD] to-[#2D3A7A] text-white pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Decorative background elements - subtle and professional */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/[0.08] rounded-full -top-48 -right-48 blur-3xl animate-float"></div>
        <div className="absolute w-72 h-72 bg-white/[0.06] rounded-full -bottom-32 -left-32 blur-3xl animate-float" style={{ animationDirection: 'reverse', animationDelay: '0s' }}></div>
        <div className="absolute w-96 h-96 bg-white/[0.05] rounded-full top-1/2 left-1/3 blur-3xl animate-float" style={{ animationDelay: '1s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center animate-fade-in-up">
        {/* Subheading badge */}
        <div className="inline-block mb-6 md:mb-8 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
          <span className="text-sm md:text-base font-medium text-white/90">✨ פתרונות טכנולוגיה ישראליים</span>
        </div>

        {/* Main heading */}
        <h1 className="text-heading-hero text-white leading-tight mb-6 md:mb-8 font-black">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mb-10 md:mb-14 text-white/95 leading-relaxed max-w-2xl mx-auto font-light">
          {subtitle}
        </p>

        {/* CTA Button - strong and prominent */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={ctaLink}
            className="inline-block bg-white text-[#4A5FBF] px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer active:translate-y-0 whitespace-nowrap"
          >
            {ctaText} →
          </Link>
          <a 
            href="#about"
            className="inline-block text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl border-2 border-white/40 transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            עוד מידע
          </a>
        </div>

        {/* Trust indicator */}
        <div className="mt-12 md:mt-16 flex justify-center gap-6 md:gap-12 flex-wrap">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">50+</div>
            <div className="text-sm text-white/80">עסקים מרוצים</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">99.9%</div>
            <div className="text-sm text-white/80">זמן פעילות</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">24/7</div>
            <div className="text-sm text-white/80">תמיכה</div>
          </div>
        </div>
      </div>
    </section>
  );
}
