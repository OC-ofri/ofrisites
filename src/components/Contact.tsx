'use client';

import { useLanguage } from '@/context/LanguageContext';

export function Contact() {
  const { language } = useLanguage();

  const content = {
    he: {
      title: 'בואו נתחיל',
      body: 'יש לך עסק? יש לנו פתרון. בואו נדבר על איך נוכל להעלות את הרווחים שלך.',
      whatsapp: '💬 התחברו ב-WhatsApp',
      email: '📧 שלחו לנו דוא״ל',
    },
    en: {
      title: 'Let\'s Get Started',
      body: 'You have a business. We have solutions. Let\'s talk about how we can grow your profits.',
      whatsapp: '💬 Message us on WhatsApp',
      email: '📧 Send us an email',
    },
  };

  const t = content[language];

  return (
    <section id="contact" className="py-20 px-4 bg-blue-900 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          {t.title}
        </h2>
        <p className="text-xl text-blue-100 mb-12">
          {t.body}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/972522424677"
            className="px-8 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition"
          >
            {t.whatsapp}
          </a>
          <a
            href="mailto:ofriko.business@gmail.com"
            className="px-8 py-3 bg-white text-blue-900 font-bold rounded hover:bg-gray-100 transition"
          >
            {t.email}
          </a>
        </div>
      </div>
    </section>
  );
}
