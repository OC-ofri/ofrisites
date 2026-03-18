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
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl hover:-translate-y-3 transition-all duration-300 animate-slide-up flex flex-col ${
        popular ? 'border-4 border-[#4A5FBF] transform scale-100 md:scale-105' : ''
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#4A5FBF] to-[#6B7FDF] text-white p-8 text-center">
        {badge && (
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-3 ${
            popular ? 'bg-[#27AE60]' : 'bg-white/20'
          }`}>
            {badge}
          </div>
        )}
        
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm opacity-90 mb-4">{subtitle}</p>
        
        <div className="text-4xl font-bold">
          {price}
          {typeof price === 'string' ? '' : <span className="text-lg opacity-85">{period}</span>}
        </div>
      </div>

      {/* Body */}
      <div className="p-8 flex-grow flex flex-col">
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex gap-3 items-start text-gray-700">
              <span className="text-[#27AE60] font-bold text-lg flex-shrink-0">✓</span>
              <span className="text-lg">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={ctaLink}
          className="block w-full text-center bg-[#4A5FBF] text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-[#2C3E50] transition-colors duration-300"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
