interface WhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  items: WhyItem[];
}

export default function WhyChooseUsNew({ items }: WhyChooseUsProps) {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center primary-blue mb-12 md:mb-16">
        למה לבחור בנו?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className="bg-white p-8 rounded-xl border-l-4 border-[#4A5FBF] shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h4 className="text-xl font-bold primary-blue mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
