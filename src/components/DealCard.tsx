import Link from 'next/link';

interface DealCardProps {
  badge?: string;
  name: string;
  subtitle: string;
  price: string | number;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
  delay?: number;
}

export default function DealCard({
  badge,
  name,
  subtitle,
  price,
  period = '/חודש',
  description,
  features,
  ctaText,
  ctaLink,
  popular = false,
  delay = 0,
}: DealCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 animate-slide-up flex flex-col border border-[#E2E8F0] ${
        popular ? 'border-2 border-[#4A5FBF] md:scale-105 md:transform' : ''
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Header - Premium gradient */}
      <div className="bg-gradient-to-br from-[#4A5FBF] via-[#5A6FCD] to-[#2D3A7A] text-white p-8 text-center relative">
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#27AE60] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              🔥 הפופולרי
            </div>
          </div>
        )}

        {badge && !popular && (
          <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-3 bg-white/20 backdrop-blur-sm">
            {badge}
          </div>
        )}
        
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm opacity-90 mb-5">{subtitle}</p>
        
        <div className="text-5xl font-black">
          {price}
          {typeof price === 'string' ? '' : <span className="text-lg opacity-85">{period}</span>}
        </div>
      </div>

      {/* Body */}
      <div className="p-8 flex-grow flex flex-col">
        <p className="text-grey-600 mb-6 text-lg leading-relaxed font-light">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex gap-3 items-start text-grey-700">
              <span className="text-[#27AE60] font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
              <span className="text-base">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href={ctaLink}
          className={`block w-full text-center py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
            popular 
              ? 'bg-[#4A5FBF] text-white hover:bg-[#2D3A7A] hover:-translate-y-1 shadow-lg' 
              : 'bg-grey-100 text-[#4A5FBF] hover:bg-[#4A5FBF] hover:text-white border border-[#4A5FBF]'
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
