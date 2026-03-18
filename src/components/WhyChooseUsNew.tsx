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
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#4A5FBF] font-semibold mb-3 uppercase tracking-widest text-sm md:text-base">למה בחרים בנו</p>
          <h2 className="text-heading-lg md:text-heading-hero primary-blue">
            אנחנו לא סתם סקיצה
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-grey-50 p-8 rounded-xl border-l-4 border-[#4A5FBF] shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl mb-4 inline-block p-3 bg-[#4A5FBF]/10 rounded-lg">{item.icon}</div>
              <h4 className="text-lg md:text-xl font-bold primary-blue mb-3">
                {item.title}
              </h4>
              <p className="text-grey-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
