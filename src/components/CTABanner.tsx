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
    <section className="bg-gradient-to-br from-[#4A5FBF] to-[#6B7FDF] text-white py-16 md:py-24 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-95">
          {subtitle}
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-white text-[#4A5FBF] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
