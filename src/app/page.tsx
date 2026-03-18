import Navigation from '@/components/Navigation';
import HeroNew from '@/components/HeroNew';
import ServiceGrid from '@/components/ServiceGrid';
import WhyChooseUsNew from '@/components/WhyChooseUsNew';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const SERVICES = [
  {
    id: '1',
    icon: '🌐',
    title: 'אתרים שמוכרים',
    description: 'מעמוד נחיתה ועד אתר עסקים מלא — אנחנו בונים אתרים שעובדים. תוצאה: יותר שיחות, יותר הזמנות, יותר כסף.',
  },
  {
    id: '2',
    icon: '⚙️',
    title: 'אוטומציות חוסכות זמן',
    description: 'ניהול לקוחות, עדכוני הזמנות, טופסים ותזכורות — הכל עובד בשבילך. פחות עבודה, יותר עסק.',
  },
  {
    id: '3',
    icon: '🤖',
    title: 'בוטים חכמים',
    description: 'עוזר דיגיטלי שעובד 24/7 — עונה על שאלות, מטפל בהזמנות, מעביר לקוחות חמים אליך.',
  },
];

const WHY_ITEMS = [
  {
    id: '1',
    icon: '✓',
    title: 'עברית מקומית',
    description: 'אנחנו מדברים את השפה שלך ומכירים את השוק שלך',
  },
  {
    id: '2',
    icon: '✓',
    title: 'עסק קטן',
    description: 'לא חברה ענקית. אנחנו קשובים ומוקדשים',
  },
  {
    id: '3',
    icon: '✓',
    title: 'ללא ג\'רגון טכני',
    description: 'הכל מוסבר בפשטות שאתה מבין',
  },
  {
    id: '4',
    icon: '✓',
    title: 'תוצאות על כסף',
    description: 'אנחנו עובדים כדי שהעסק שלך ירוויח',
  },
];

const ABOUT_PARAGRAPHS = [
  'אנחנו חברת טכנולוגיה שמתמחה בבניית פתרונות לעסקים קטנים בישראל. כמו שהעסק שלך עובד קשה כדי לשרוד ולצמוח, אנחנו עובדים קשה כדי לתת לך את הכלים שאתה צריך.',
  'בתחום טכנולוגיה, קל להיפול לתוך ג\'רגון וסיבוך. אנחנו בוחרים פשטות ותוצאות. אם זה לא מגביר את המכירות או חוסך זמן — אנחנו לא עושים את זה.',
];

export const metadata = {
  title: 'ofrisites | משפרים את העסק שלך',
  description: 'פתרונות טכנולוגיות חכמות שמעלות מכירות ומחסכות זמן לעסקים בישראל',
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroNew
        title="משפרים את העסק שלך"
        subtitle="פתרונות טכנולוגיות חכמות שמעלות מכירות ומחסכות זמן"
        ctaText="בואו נתחיל"
        ctaLink="#contact"
      />
      <ServiceGrid services={SERVICES} />
      <WhyChooseUsNew items={WHY_ITEMS} />
      <AboutSection title="אודות OKAI" paragraphs={ABOUT_PARAGRAPHS} />
      <Footer />
    </main>
  );
}
