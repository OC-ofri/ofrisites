'use client';

import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
  const { language } = useLanguage();

  const content = {
    he: {
      headline: 'משפרים את העסק שלך',
      subheading: 'פתרונות טכנולוגיות מעוצבים במיוחד לעסקים קטנים בישראל',
      body: 'העסק שלך עובד קשה. אנחנו כאן להקל עליך.\n\nבין אם צריך אתר שמוכר, אוטומציות שחוסכות זמן, או בוט חכם שמנהל את הלקוחות שלך — אנחנו בונים פתרונות שמכניסים כסף לכיס שלך.\n\nלא צריך להבין טק. לא צריך להזמין טכנאים זולים. אתה צריך מישהו שמבין את העסק שלך.\n\nזה אנחנו.',
      cta: 'בואו נדבר 👈',
    },
    en: {
      headline: 'We Make Running Your Business Easier',
      subheading: 'Technology solutions built specifically for Israeli small businesses',
      body: 'Your business works hard. Let us lighten the load.\n\nWhether you need a website that sells, automations that save time, or a smart bot that manages customers — we build solutions that put money in your pocket.\n\nYou don\'t need to understand tech. You don\'t need cheap outsourcers. You need someone who understands your business.\n\nThat\'s us.',
      cta: 'Let\'s Talk 👈',
    },
  };

  const t = content[language];

  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t.headline}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          {t.subheading}
        </p>
        <div className="text-lg md:text-lg leading-relaxed text-blue-50 mb-12 whitespace-pre-line">
          {t.body}
        </div>
        <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded hover:bg-gray-100 transition text-lg">
          {t.cta}
        </button>
      </div>
    </section>
  );
}
