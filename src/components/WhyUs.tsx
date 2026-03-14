'use client';

import { useLanguage } from '@/context/LanguageContext';

export function WhyUs() {
  const { language } = useLanguage();

  const content = {
    he: {
      title: 'למה לבחור בנו?',
      points: [
        { title: 'עברית מקומית', desc: 'אנחנו מדברים את השפה שלך, מכירים את השוק שלך' },
        { title: 'עסק קטן', desc: 'לא חברה ענקית. קשבנו. אנחנו מוקדשים' },
        { title: 'ללא ג\'רגון טכני', desc: 'הכל מוסבר בפשטות' },
        { title: 'תוצאות על כסף', desc: 'אנחנו עובדים כדי שהעסק שלך ירוויח' },
      ],
    },
    en: {
      title: 'Why Choose Us?',
      points: [
        { title: 'Local Hebrew Expertise', desc: 'We speak your language, understand your market' },
        { title: 'Small Business Focus', desc: 'We\'re not a faceless tech giant. We listen. We\'re dedicated.' },
        { title: 'No Tech Jargon', desc: 'Everything explained simply' },
        { title: 'Results for Money', desc: 'We work so your business wins' },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {t.points.map((point, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-700">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
