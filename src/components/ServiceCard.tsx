interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description,
  delay = 0
}: ServiceCardProps) {
  return (
    <div 
      className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up text-center"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold primary-blue mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}
