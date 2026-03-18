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
    <section className="py-16 md:py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          כל חבילה מעוצבת להעניק לעסק שלך את הכלים שהוא צריך כדי לגדול. בחר את המתאימה לך:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
