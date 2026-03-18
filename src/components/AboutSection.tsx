interface AboutProps {
  title: string;
  paragraphs: string[];
}

export default function AboutSection({ title, paragraphs }: AboutProps) {
  return (
    <section className="bg-[#2C3E50] text-white py-16 md:py-24 text-center" id="about">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 accent-blue">
          {title}
        </h2>
        
        <div className="space-y-6">
          {paragraphs.map((paragraph, idx) => (
            <p 
              key={idx}
              className="text-lg md:text-xl leading-relaxed opacity-95"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
