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
      className="bg-white p-8 md:p-10 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-300 animate-slide-up text-center border border-[#E2E8F0] group"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Icon container with subtle background */}
      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#4A5FBF]/10 to-[#6B7FDF]/10 rounded-2xl flex items-center justify-center group-hover:from-[#4A5FBF]/20 group-hover:to-[#6B7FDF]/20 transition-all duration-300">
        <span className="text-4xl">{icon}</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold primary-blue mb-3">
        {title}
      </h3>
      <p className="text-grey-600 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}
