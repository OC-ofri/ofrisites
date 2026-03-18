import Link from 'next/link';

interface CTABannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function CTABanner({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-br from-[#4A5FBF] via-[#5A6FCD] to-[#2D3A7A] text-white py-16 md:py-24 text-center relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-white/[0.08] rounded-full -top-48 -right-48 blur-3xl animate-float"></div>
        <div className="absolute w-72 h-72 bg-white/[0.05] rounded-full -bottom-32 -left-32 blur-3xl animate-float" style={{ animationDirection: 'reverse' }}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-heading-lg md:text-heading-hero font-black mb-4 md:mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-2xl mb-10 md:mb-12 opacity-95 font-light max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-white text-[#4A5FBF] px-8 md:px-10 py-4 md:py-5 rounded-lg font-bold text-lg md:text-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {ctaText} →
        </Link>
      </div>
    </section>
  );
}
