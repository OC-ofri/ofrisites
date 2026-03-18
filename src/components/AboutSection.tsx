interface AboutProps {
  title: string;
  paragraphs: string[];
}

export default function AboutSection({ title, paragraphs }: AboutProps) {
  return (
    <section className="bg-gradient-to-br from-[#2D3A7A] to-[#4A5FBF] text-white py-16 md:py-32 relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-white/[0.06] rounded-full -top-48 -left-48 blur-3xl animate-float"></div>
        <div className="absolute w-96 h-96 bg-white/[0.04] rounded-full bottom-0 right-0 blur-3xl animate-float" style={{ animationDirection: 'reverse' }}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        {/* Section label */}
        <p className="text-white/70 font-semibold mb-3 uppercase tracking-widest text-sm">אודות OKAI</p>

        {/* Title */}
        <h2 className="text-heading-lg md:text-heading-hero text-white mb-8 md:mb-12">
          {title}
        </h2>
        
        {/* Content */}
        <div className="space-y-6 md:space-y-8">
          {paragraphs.map((paragraph, idx) => (
            <p 
              key={idx}
              className="text-lg md:text-xl leading-relaxed opacity-95 font-light animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12">
          <a
            href="#contact"
            className="inline-block bg-white text-[#4A5FBF] px-8 md:px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            בואו נדבר
          </a>
        </div>
      </div>
    </section>
  );
}
