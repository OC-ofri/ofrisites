'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'he' | 'en';

type Translations = Record<string, string>;

const heTranslations: Translations = {
  // Nav
  'nav.home': 'ראשי',
  'nav.services': 'שירותים',
  'nav.contact': 'צור קשר',
  'nav.langToggle': 'EN',

  // Hero
  'hero.badge': 'עסקים קטנים → תוצאות גדולות',
  'hero.headline': 'הטכנולוגיה שמגדילה את העסק שלך',
  'hero.subtitle': 'אנחנו בונים אתרים, אוטומציות ועוזרי AI שחוסכים זמן, מגבירים מכירות ומציבים אתכם קדימה מהמתחרים',
  'hero.cta': 'בואו נדבר',

  // Services section
  'services.badge': 'שלושה שירותים',
  'services.title': 'מה אנחנו עושים',
  'services.subtitle': 'שלושה שירותים שבונים לך יתרון תחרותי אמיתי',
  'services.learnMore': 'קרא עוד',
  'services.websites.title': 'אתרים',
  'services.websites.desc': 'אתה חייב להיות נוכח באינטרנט — ככה כל מחפש מוצא אותך. אתר מותאם בדיוק לך עושה את זה בצורה מושלמת.',
  'services.automations.title': 'אוטומציות',
  'services.automations.desc': 'תפסיקו לעשות את אותו דבר פעמיים. אוטומציות מטפלות בעבודה החוזרת שלך כדי שתוכל להתמקד במה שבאמת מגדיל את העסק.',
  'services.ai.title': 'עוזרי AI',
  'services.ai.desc': 'כמו לשכור עובד 24/7 שלא ישן אף פעם, לא מתלונן אף פעם, ומטפל בלקוחות שלך מיידית.',

  // Contact
  'contact.title': 'מוכנים להתחיל?',
  'contact.subtitle': 'דברו איתנו היום. ייעוץ ראשון בחינם.',
  'contact.email': 'שלחו אימייל',
  'contact.whatsapp': 'כתבו ב-WhatsApp',

  // Bundles page header
  'bundles.title': 'חבילות מחיר',
  'bundles.subtitle': 'בחרו את החבילה המתאימה לעסק שלכם',
  'bundles.popular': 'הכי פופולרי',
  'bundles.cta': 'בחרו חבילה',

  // Tier labels
  'tier.basic': 'בייסיק',
  'tier.standard': 'סטנדרט',
  'tier.premium': 'פרמיום',
  'tier.period': 'חד פעמי',

  // Category labels
  'cat.websites.title': 'אתרים',
  'cat.automations.title': 'אוטומציות',
  'cat.ai.title': 'עוזרי AI',

  // Websites Basic
  'websites.basic.price': '1,500',
  'websites.basic.desc': 'דף נחיתה מקצועי, עמוד אחד, מותאם לנייד',
  'websites.basic.blurb': 'מושלם לעסקים שצריכים קיום דיגיטלי מהיר. לקוחות מחפשים — זה מוודא שהם מוצאים אתכם ולא את המתחרים.',
  'websites.basic.f1': 'עמוד נחיתה אחד',
  'websites.basic.f2': 'עיצוב מותאם לנייד',
  'websites.basic.f3': 'כפתור WhatsApp',
  'websites.basic.f4': 'מסירה תוך 5 ימים',

  // Websites Standard
  'websites.standard.price': '3,500',
  'websites.standard.desc': 'אתר רב-עמודי עם טופס יצירת קשר ו-SEO בסיסי',
  'websites.standard.blurb': 'יותר מכרטיס ביקור, פחות מאתר מלא. תיראו רציניים, תיאספו לידים ותופיעו בגוגל — הכל בפתרון אחד.',
  'websites.standard.f1': 'עד 5 עמודים',
  'websites.standard.f2': 'טופס יצירת קשר',
  'websites.standard.f3': 'SEO בסיסי',
  'websites.standard.f4': 'אחסון ודומיין לשנה',
  'websites.standard.f5': 'מסירה תוך 10 ימים',

  // Websites Premium
  'websites.premium.price': '7,000',
  'websites.premium.desc': 'אתר מלא עם אנימציות, עיצוב מותאם ו-CMS',
  'websites.premium.blurb': 'החנות הדיגיטלית המלאה שלכם. בנויה לצמוח עם העסק, לרשום על לקוחות ולדרג בחיפוש — לטווח ארוך.',
  'websites.premium.f1': 'אתר מלא ללא הגבלת עמודים',
  'websites.premium.f2': 'אנימציות ועיצוב מותאם',
  'websites.premium.f3': 'מערכת ניהול תוכן (CMS)',
  'websites.premium.f4': 'SEO מתקדם',
  'websites.premium.f5': 'תמיכה 6 חודשים',

  // Automations Basic
  'automations.basic.price': '800',
  'automations.basic.desc': 'אוטומציה פשוטה מבוססת טריגר',
  'automations.basic.blurb': 'הגדירו פעם אחת ויעבוד לנצח. עוצר משימה חוזרת אחת שאוכלת לכם זמן כל יום.',
  'automations.basic.f1': 'זרימה אחת פשוטה',
  'automations.basic.f2': 'אינטגרציה לאימייל או WhatsApp',
  'automations.basic.f3': 'הגדרה ובדיקה',

  // Automations Standard
  'automations.standard.price': '2,500',
  'automations.standard.desc': 'זרימה רב-שלבית עם אינטגרציות ולוגיקה',
  'automations.standard.blurb': 'חברו את הכלים שלכם, צמצמו ניהול. שלוש זרימות שרצות בזמן שאתם ישנים.',
  'automations.standard.f1': 'עד 3 זרימות אוטומציה',
  'automations.standard.f2': 'אינטגרציות מרובות',
  'automations.standard.f3': 'לוגיקה מותנית',
  'automations.standard.f4': 'דשבורד מעקב',

  // Automations Premium
  'automations.premium.price': '6,000',
  'automations.premium.desc': 'אוטומציה מורכבת עם אינטגרציות API ותחזוקה',
  'automations.premium.blurb': 'העסק שלכם על טייס אוטומטי. תהליכים מורכבים, חיבורי API ומישהו שמתחזק הכל בשבילכם.',
  'automations.premium.f1': 'זרימות ללא הגבלה',
  'automations.premium.f2': 'אינטגרציות API מותאמות',
  'automations.premium.f3': 'לוגיקה מתקדמת ו-AI',
  'automations.premium.f4': 'תחזוקה חודשית 3 חודשים',
  'automations.premium.f5': 'תמיכה מלאה',

  // AI Basic
  'ai.basic.price': '1,200',
  'ai.basic.desc': "צ'אטבוט פשוט מבוסס שאלות ותשובות",
  'ai.basic.blurb': 'עונה על שאלות נפוצות מיידית, 24/7. לא עוד זמן שמתבזבז על אותן תשובות חוזרות בוואטסאפ.',
  'ai.basic.f1': 'בוט שאלות ותשובות',
  'ai.basic.f2': 'עד 50 שאלות מוגדרות',
  'ai.basic.f3': 'אינטגרציה לאתר',

  // AI Standard
  'ai.standard.price': '3,000',
  'ai.standard.desc': 'עוזר מאומן עם פרסונה מותאמת ואינטגרציות',
  'ai.standard.blurb': 'AI שמכיר את העסק שלכם ומדבר בשמכם. מטפל בלקוחות בוואטסאפ ובאתר — גם בשעה שתיים בלילה.',
  'ai.standard.f1': 'אימון על נתוני העסק',
  'ai.standard.f2': 'פרסונה ואישיות מותאמות',
  'ai.standard.f3': 'אינטגרציה ל-WhatsApp/אתר',
  'ai.standard.f4': 'לוח ניהול שיחות',

  // AI Premium
  'ai.premium.price': '8,000',
  'ai.premium.desc': 'סוכן AI מלא, רב-ערוצי עם אימון מתמשך',
  'ai.premium.blurb': 'חבר צוות AI מלא — רב-ערוצי, לומד כל הזמן ומדווח לכם מה הלקוחות באמת צריכים.',
  'ai.premium.f1': 'סוכן AI מלא',
  'ai.premium.f2': 'רב-ערוצי (WhatsApp, אימייל, אתר)',
  'ai.premium.f3': 'אימון ועדכון שוטף',
  'ai.premium.f4': 'ניתוח שיחות ודוחות',
  'ai.premium.f5': 'תמיכה שנה',

  // Footer
  'footer.rights': 'כל הזכויות שמורות',
  'footer.tagline': 'מביאים את הטכנולוגיה לעסק שלך',

  // Thank you page
  'thankyou.badge': 'תודה רבה',
  'thankyou.title': 'קיבלנו את הבקשה שלכם!',
  'thankyou.subtitle': 'ניצור אתכם קשר בתוך 24 שעות. בינתיים, מוזמנים לכתוב לנו ישירות בוואטסאפ.',
  'thankyou.whatsapp': 'כתבו לנו בוואטסאפ',
  'thankyou.home': 'חזרה לדף הבית',
};

const enTranslations: Translations = {
  // Nav
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'nav.langToggle': 'עב',

  // Hero
  'hero.badge': 'Small Business → Big Results',
  'hero.headline': 'Technology That Grows Your Business',
  'hero.subtitle': 'We build websites, automations, and AI assistants that save time, boost sales, and put you ahead of the competition',
  'hero.cta': "Let's Talk",

  // Services section
  'services.badge': 'Three Services',
  'services.title': 'What We Do',
  'services.subtitle': 'Three services that build you a real competitive advantage',
  'services.learnMore': 'Learn More',
  'services.websites.title': 'Websites',
  'services.websites.desc': 'You have to be present online — that way every searcher finds you. A website tailored exactly to you does that perfectly.',
  'services.automations.title': 'Automations',
  'services.automations.desc': 'Stop doing the same thing twice. Automations handle your repetitive work so you can focus on what actually grows your business.',
  'services.ai.title': 'AI Assistants',
  'services.ai.desc': 'Like hiring a 24/7 employee who never sleeps, never complains, and handles your clients instantly.',

  // Contact
  'contact.title': 'Ready to Start?',
  'contact.subtitle': 'Talk to us today. First consultation free.',
  'contact.email': 'Send Email',
  'contact.whatsapp': 'Message on WhatsApp',

  // Bundles page header
  'bundles.title': 'Pricing Packages',
  'bundles.subtitle': 'Choose the right package for your business',
  'bundles.popular': 'Most Popular',
  'bundles.cta': 'Choose Package',

  // Tier labels
  'tier.basic': 'Basic',
  'tier.standard': 'Standard',
  'tier.premium': 'Premium',
  'tier.period': 'one-time',

  // Category labels
  'cat.websites.title': 'Websites',
  'cat.automations.title': 'Automations',
  'cat.ai.title': 'AI Assistants',

  // Websites Basic
  'websites.basic.price': '400',
  'websites.basic.desc': 'Professional landing page, single page, mobile-friendly',
  'websites.basic.blurb': 'Perfect for getting found online fast. Customers search — this makes sure they find you, not your competitor.',
  'websites.basic.f1': 'Single landing page',
  'websites.basic.f2': 'Mobile-responsive design',
  'websites.basic.f3': 'WhatsApp button',
  'websites.basic.f4': 'Delivered in 5 days',

  // Websites Standard
  'websites.standard.price': '950',
  'websites.standard.desc': 'Multi-page site with contact form and basic SEO',
  'websites.standard.blurb': 'More than a card, less than a full site. Look legit, collect leads, and show up on Google — all in one.',
  'websites.standard.f1': 'Up to 5 pages',
  'websites.standard.f2': 'Contact form',
  'websites.standard.f3': 'Basic SEO',
  'websites.standard.f4': 'Hosting + domain 1 year',
  'websites.standard.f5': 'Delivered in 10 days',

  // Websites Premium
  'websites.premium.price': '1,900',
  'websites.premium.desc': 'Full site with animations, custom design and CMS',
  'websites.premium.blurb': 'Your full digital storefront. Built to grow with your business, impress clients, and rank on search — long term.',
  'websites.premium.f1': 'Unlimited pages',
  'websites.premium.f2': 'Animations & custom design',
  'websites.premium.f3': 'Content Management System',
  'websites.premium.f4': 'Advanced SEO',
  'websites.premium.f5': '6 months support',

  // Automations Basic
  'automations.basic.price': '220',
  'automations.basic.desc': 'Simple trigger-based automation (email/WhatsApp)',
  'automations.basic.blurb': 'Set it once, runs forever. Stops one repetitive task eating your time every single day.',
  'automations.basic.f1': 'One simple flow',
  'automations.basic.f2': 'Email or WhatsApp integration',
  'automations.basic.f3': 'Setup & testing',

  // Automations Standard
  'automations.standard.price': '680',
  'automations.standard.desc': 'Multi-step flow with integrations and logic',
  'automations.standard.blurb': 'Connect your tools, cut your admin. Three flows that run while you sleep.',
  'automations.standard.f1': 'Up to 3 automation flows',
  'automations.standard.f2': 'Multiple integrations',
  'automations.standard.f3': 'Conditional logic',
  'automations.standard.f4': 'Monitoring dashboard',

  // Automations Premium
  'automations.premium.price': '1,600',
  'automations.premium.desc': 'Complex automation with API integrations and maintenance',
  'automations.premium.blurb': 'Your business on autopilot. Complex workflows, API connections, and someone who maintains it all.',
  'automations.premium.f1': 'Unlimited flows',
  'automations.premium.f2': 'Custom API integrations',
  'automations.premium.f3': 'Advanced logic & AI',
  'automations.premium.f4': '3 months maintenance',
  'automations.premium.f5': 'Full support',

  // AI Basic
  'ai.basic.price': '330',
  'ai.basic.desc': 'Simple chatbot, FAQ-based',
  'ai.basic.blurb': 'Answers common questions instantly, 24/7. No more time spent on the same WhatsApp replies.',
  'ai.basic.f1': 'FAQ chatbot',
  'ai.basic.f2': 'Up to 50 defined questions',
  'ai.basic.f3': 'Website integration',

  // AI Standard
  'ai.standard.price': '820',
  'ai.standard.desc': 'Trained assistant with custom persona and integrations',
  'ai.standard.blurb': 'An AI that knows your business and talks like you. Handles clients on WhatsApp and your site — even at 2am.',
  'ai.standard.f1': 'Trained on business data',
  'ai.standard.f2': 'Custom persona & personality',
  'ai.standard.f3': 'WhatsApp / website integration',
  'ai.standard.f4': 'Conversation management panel',

  // AI Premium
  'ai.premium.price': '2,200',
  'ai.premium.desc': 'Full AI agent, multi-channel with ongoing training',
  'ai.premium.blurb': 'A full AI team member — multi-channel, self-improving, and reporting back on what your customers actually need.',
  'ai.premium.f1': 'Full AI agent',
  'ai.premium.f2': 'Multi-channel (WhatsApp, email, site)',
  'ai.premium.f3': 'Ongoing training & updates',
  'ai.premium.f4': 'Conversation analytics & reports',
  'ai.premium.f5': '1 year support',

  // Footer
  'footer.rights': 'All rights reserved',
  'footer.tagline': 'Bringing technology to your business',

  // Thank you page
  'thankyou.badge': 'Thank You',
  'thankyou.title': "We've received your request!",
  'thankyou.subtitle': "We'll be in touch within 24 hours. In the meantime, feel free to reach us directly on WhatsApp.",
  'thankyou.whatsapp': 'Message us on WhatsApp',
  'thankyou.home': 'Back to Home',
};

interface LanguageContextValue {
  language: Language;
  isRTL: boolean;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('he');

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'he' ? 'en' : 'he'));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const map = language === 'he' ? heTranslations : enTranslations;
      return map[key] ?? key;
    },
    [language]
  );

  const isRTL = language === 'he';

  return (
    <LanguageContext.Provider value={{ language, isRTL, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

export type { Language };
