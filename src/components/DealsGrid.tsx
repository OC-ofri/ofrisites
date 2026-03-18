import DealCard from './DealCard';

interface Deal {
  id: string;
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
}

interface DealsGridProps {
  deals: Deal[];
}

export default function DealsGrid({ deals }: DealsGridProps) {
  return (
    <section className="py-16 md:py-32 bg-grey-100 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4A5FBF]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#4A5FBF] font-semibold mb-3 uppercase tracking-widest text-sm md:text-base">Deals & Pricing</p>
          <h2 className="text-heading-lg md:text-heading-hero primary-blue mb-6">
            בחר את החבילה המתאימה לך
          </h2>
          <p className="text-grey-600 text-lg max-w-2xl mx-auto">
            כל חבילה מעוצבת להעניק לעסק שלך את הכלים שהוא צריך כדי לגדול
          </p>
        </div>

        {/* Deals grid - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {deals.map((deal, idx) => (
            <DealCard
              key={deal.id}
              {...deal}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
