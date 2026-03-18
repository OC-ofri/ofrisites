import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ServiceGridProps {
  services: Service[];
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="py-16 md:py-32 bg-grey-100 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4A5FBF]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4A5FBF]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#4A5FBF] font-semibold mb-3 uppercase tracking-widest text-sm md:text-base">השירותים שלנו</p>
          <h2 className="text-heading-lg md:text-heading-hero primary-blue mb-4">
            כל מה שהעסק שלך צריך
          </h2>
          <p className="text-grey-600 text-lg max-w-2xl mx-auto">
            פתרונות טכנולוגיים מלאים שמעדכנים את העסק שלך לדיגיטל
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
