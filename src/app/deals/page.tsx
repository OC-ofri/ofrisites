import Navigation from '@/components/Navigation';
import HeroNew from '@/components/HeroNew';
import DealsGrid from '@/components/DealsGrid';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const DEALS = [
  {
    id: '1',
    name: 'Starter',
    subtitle: 'לעסקים זעירים',
    price: '₪ 2,499',
    description: 'תחילת הדרך - כל מה שצריך כדי להיוולד לדיגיטל',
    features: [
      'אתר One-page מקצועי',
      'דומיין שנה אחת',
      'SSL בחינם',
      'מהירות אופטימלית',
    ],
    ctaText: 'בואו נתחיל',
    ctaLink: '#contact',
    popular: false,
  },
  {
    id: '2',
    name: 'Growth',
    subtitle: 'עבור עסקים גדלים',
    price: '₪ 5,999',
    badge: '🔥 הפופולרי',
    description: 'כל מה שצריך כדי לצמוח - אתר מלא + אוטומציות',
    features: [
      'אתר מלא עם עמודים מרובים',
      'Leads Form + Email automation',
      'WhatsApp Integration',
      'Google Analytics',
      'SEO Basics',
      'תמיכה חודשית',
    ],
    ctaText: 'בחר Growth',
    ctaLink: '#contact',
    popular: true,
  },
  {
    id: '3',
    name: 'Enterprise',
    subtitle: 'לעסקים גדולים',
    price: '₪ 12,999',
    description: 'פתרון שלם - אתר מקדם + בוט + CRM',
    features: [
      'אתר advanced עם features מתקדמות',
      'Chatbot AI 24/7',
      'CRM Integration',
      'Advanced Analytics',
      'Multi-language support',
      'Priority support',
    ],
    ctaText: 'בחר Enterprise',
    ctaLink: '#contact',
    popular: false,
  },
  {
    id: '4',
    name: 'Custom',
    subtitle: 'עבור צרכים ייחודיים',
    price: 'צרו קשר',
    description: 'פתרון מותאם אישית - מה שהעסק שלך בדיוק צריך',
    features: [
      'כל דבר שצריך לך',
      'תכנות מותאם',
      'Integration עם מערכות קיימות',
      'Ongoing support',
      'Growth consulting',
    ],
    ctaText: 'דברו איתנו',
    ctaLink: '#contact',
    popular: false,
  },
];

const FAQ_ITEMS = [
  {
    id: '1',
    question: 'מה זה כולל בדיוק?',
    answer: 'כל חבילה כוללת עיצוב, בניית אתר, דומיין, SSL, וטעינה מהירה. חבילות גבוהות יותר מוסיפות אוטומציות, chatbots ותמיכה מתמשכת.',
  },
  {
    id: '2',
    question: 'כמה זמן לוקח לבנות אתר?',
    answer: 'Starter - 1-2 שבועות. Growth - 3-4 שבועות. Enterprise - 4-6 שבועות. תלוי בתוכן וב-features שאתה צריך.',
  },
  {
    id: '3',
    question: 'אתם מעדכנים את האתר לאחר ההשקה?',
    answer: 'כן! כל חבילה Growth ומעלה כוללת תמיכה חודשית. אנחנו עוזרים עם עדכונים, תיקונים וכל שינויים שצריך.',
  },
  {
    id: '4',
    question: 'אפשר לתוספות מאוחר יותר?',
    answer: 'בהחלט! אתה יכול להתחיל עם Starter ולשדרג ל-Growth או Enterprise בכל עת. הכל גמיש.',
  },
];

export const metadata = {
  title: 'Deals & Pricing | ofrisites',
  description: 'עיין בחבילות המחיר שלנו ובחר את הפתרון המתאים לעסק שלך - Starter, Growth, Enterprise ו-Custom',
};

export default function DealsPage() {
  return (
    <main>
      <Navigation />
      <HeroNew
        title="Deals & Pricing"
        subtitle="חבילות מעוצבות לכל גודל עסק - מהתחלה ועד ענק"
        ctaText="בואו נדברנו"
        ctaLink="#deals"
      />
      <DealsGrid deals={DEALS} />
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center primary-blue mb-12">
          שאלות ותשובות
        </h2>

        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.id}
              className="bg-light-grey p-6 rounded-lg border-l-4 border-[#4A5FBF] cursor-pointer hover:shadow-md transition-all"
            >
              <summary className="text-xl font-bold primary-blue cursor-pointer">
                {item.question}
              </summary>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <CTABanner
        title="מוכנים להתחיל?"
        subtitle="בואו נדבר על איך נוכל להעלות את הרווחים שלך"
        ctaText="צרו קשר עכשיו"
        ctaLink="#contact"
      />
      <Footer />
    </main>
  );
}
