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
    <section className="py-16 md:py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center primary-blue mb-12 md:mb-16">
          השירותים שלנו
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
