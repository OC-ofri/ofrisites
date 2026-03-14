'use client';

import { useLanguage } from '@/context/LanguageContext';

export function Services() {
  const { language } = useLanguage();

  const content = {
    he: {
      title: 'השירותים שלנו',
      services: [
        {
          title: 'אתרים שמוכרים',
          description: 'מעמוד נחיתה פשוט ועד אתר עסקים מלא — אנחנו בונים אתרים שמעבדים לקוחות לא מסתכלים יפה.\n\nתוצאה: יותר שיחות, יותר הזמנות, יותר כסף.',
        },
        {
          title: 'אוטומציות חוסכות זמן',
          description: 'כל שעה שאתה מבזבז על עבודה חוזרת חברה, זה שעה שלא מכניסה כסף.\n\nאנחנו מאוטומטיים: ניהול לקוחות, עדכוני הזמנות, טופסי יצירת קשר, תזכורות והתראות.\n\nפחות מסכנות. יותר עסק.',
        },
        {
          title: 'בוטים חכמים שעובדים בשבילך',
          description: 'עוזר דיגיטלי שעובד 24/7 — עונה על שאלות, מטפל בהזמנות, ומעביר לקוחות חמים אליך.\n\nהוא מדבר בעברית שלך. הוא מכיר את העסק שלך. הוא לא חוסר זיכרון.\n\nפחות שיחות טלפון. יותר זמן לעבודה חשובה.',
        },
      ],
    },
    en: {
      title: 'Our Services',
      services: [
        {
          title: 'Websites That Sell',
          description: 'From a simple landing page to a full business site — we build websites that convert visitors into customers, not just look pretty.\n\nResult: More calls. More orders. More money.',
        },
        {
          title: 'Automations That Save Hours',
          description: 'Every hour you waste on repetitive work is an hour not making money.\n\nWe automate: Customer management, Order updates, Lead forms, Reminders & alerts.\n\nLess headaches. More business.',
        },
        {
          title: 'Smart Bots That Work Around the Clock',
          description: 'A digital assistant working 24/7 — answers questions, handles orders, and sends warm leads your way.\n\nIt speaks your language. It knows your business. It doesn\'t forget.\n\nFewer phone calls. More time on what matters.',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {t.services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
