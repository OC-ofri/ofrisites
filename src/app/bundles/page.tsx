'use client';

import { motion } from 'framer-motion';
import { LangProvider, useLang } from '@/context/LangContext';
import Nav from '@/components/Nav';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

type CategoryKey = 'websites' | 'automations' | 'ai';
type TierKey = 'basic' | 'standard' | 'premium';

const CATEGORIES: CategoryKey[] = ['websites', 'automations', 'ai'];
const TIERS: TierKey[] = ['basic', 'standard', 'premium'];

const CATEGORY_ICONS: Record<CategoryKey, string> = {
  websites: '🌐',
  automations: '⚡',
  ai: '🤖',
};

// Swap these placeholder URLs for real Stripe Payment Links when ready
const STRIPE_LINKS: Record<CategoryKey, Record<TierKey, string>> = {
  websites: {
    basic: 'https://buy.stripe.com/PLACEHOLDER_WEBSITES_BASIC',
    standard: 'https://buy.stripe.com/PLACEHOLDER_WEBSITES_STANDARD',
    premium: 'https://buy.stripe.com/PLACEHOLDER_WEBSITES_PREMIUM',
  },
  automations: {
    basic: 'https://buy.stripe.com/PLACEHOLDER_AUTOMATIONS_BASIC',
    standard: 'https://buy.stripe.com/PLACEHOLDER_AUTOMATIONS_STANDARD',
    premium: 'https://buy.stripe.com/PLACEHOLDER_AUTOMATIONS_PREMIUM',
  },
  ai: {
    basic: 'https://buy.stripe.com/PLACEHOLDER_AI_BASIC',
    standard: 'https://buy.stripe.com/PLACEHOLDER_AI_STANDARD',
    premium: 'https://buy.stripe.com/PLACEHOLDER_AI_PREMIUM',
  },
};

const NIS_TO_USD = 0.27;

interface PlanData {
  price: string;
  desc: string;
  blurb: string;
  features: string[];
}

type BundlesContent = {
  title: string;
  subtitle: string;
  popular: string;
  cta: string;
  period: string;
  tierLabels: Record<TierKey, string>;
  catLabels: Record<CategoryKey, string>;
  plans: Record<CategoryKey, Record<TierKey, PlanData>>;
};

const content: Record<'en' | 'he', BundlesContent> = {
  en: {
    title: 'Pricing Packages',
    subtitle: 'Choose the right package for your business',
    popular: 'Most Popular',
    cta: 'Choose Package',
    period: 'one-time',
    tierLabels: { basic: 'Basic', standard: 'Standard', premium: 'Premium' },
    catLabels: { websites: 'Websites', automations: 'Automations', ai: 'AI Assistants' },
    plans: {
      websites: {
        basic: { price: '400', desc: 'Professional landing page, single page, mobile-friendly', blurb: 'Perfect for getting found online fast. Customers search — this makes sure they find you, not your competitor.', features: ['Single landing page', 'Mobile-responsive design', 'WhatsApp button', 'Delivered in 5 days'] },
        standard: { price: '950', desc: 'Multi-page site with contact form and basic SEO', blurb: 'More than a card, less than a full site. Look legit, collect leads, and show up on Google — all in one.', features: ['Up to 5 pages', 'Contact form', 'Basic SEO', 'Hosting + domain 1 year', 'Delivered in 10 days'] },
        premium: { price: '1,900', desc: 'Full site with animations, custom design and CMS', blurb: 'Your full digital storefront. Built to grow with your business, impress clients, and rank on search — long term.', features: ['Unlimited pages', 'Animations & custom design', 'Content Management System', 'Advanced SEO', '6 months support'] },
      },
      automations: {
        basic: { price: '220', desc: 'Simple trigger-based automation (email/WhatsApp)', blurb: 'Set it once, runs forever. Stops one repetitive task eating your time every single day.', features: ['One simple flow', 'Email or WhatsApp integration', 'Setup & testing'] },
        standard: { price: '680', desc: 'Multi-step flow with integrations and logic', blurb: 'Connect your tools, cut your admin. Three flows that run while you sleep.', features: ['Up to 3 automation flows', 'Multiple integrations', 'Conditional logic', 'Monitoring dashboard'] },
        premium: { price: '1,600', desc: 'Complex automation with API integrations and maintenance', blurb: 'Your business on autopilot. Complex workflows, API connections, and someone who maintains it all.', features: ['Unlimited flows', 'Custom API integrations', 'Advanced logic & AI', '3 months maintenance', 'Full support'] },
      },
      ai: {
        basic: { price: '330', desc: 'Simple chatbot, FAQ-based', blurb: 'Answers common questions instantly, 24/7. No more time spent on the same WhatsApp replies.', features: ['FAQ chatbot', 'Up to 50 defined questions', 'Website integration'] },
        standard: { price: '820', desc: 'Trained assistant with custom persona and integrations', blurb: 'An AI that knows your business and talks like you. Handles clients on WhatsApp and your site — even at 2am.', features: ['Trained on business data', 'Custom persona & personality', 'WhatsApp / website integration', 'Conversation management panel'] },
        premium: { price: '2,200', desc: 'Full AI agent, multi-channel with ongoing training', blurb: 'A full AI team member — multi-channel, self-improving, and reporting back on what your customers actually need.', features: ['Full AI agent', 'Multi-channel (WhatsApp, email, site)', 'Ongoing training & updates', 'Conversation analytics & reports', '1 year support'] },
      },
    },
  },
  he: {
    title: 'חבילות מחיר',
    subtitle: 'בחרו את החבילה המתאימה לעסק שלכם',
    popular: 'הכי פופולרי',
    cta: 'בחרו חבילה',
    period: 'חד פעמי',
    tierLabels: { basic: 'בייסיק', standard: 'סטנדרט', premium: 'פרמיום' },
    catLabels: { websites: 'אתרים', automations: 'אוטומציות', ai: 'עוזרי AI' },
    plans: {
      websites: {
        basic: { price: '1,500', desc: 'דף נחיתה מקצועי, עמוד אחד, מותאם לנייד', blurb: 'מושלם לעסקים שצריכים קיום דיגיטלי מהיר. לקוחות מחפשים — זה מוודא שהם מוצאים אתכם ולא את המתחרים.', features: ['עמוד נחיתה אחד', 'עיצוב מותאם לנייד', 'כפתור WhatsApp', 'מסירה תוך 5 ימים'] },
        standard: { price: '3,500', desc: 'אתר רב-עמודי עם טופס יצירת קשר ו-SEO בסיסי', blurb: 'יותר מכרטיס ביקור, פחות מאתר מלא. תיראו רציניים, תיאספו לידים ותופיעו בגוגל — הכל בפתרון אחד.', features: ['עד 5 עמודים', 'טופס יצירת קשר', 'SEO בסיסי', 'אחסון ודומיין לשנה', 'מסירה תוך 10 ימים'] },
        premium: { price: '7,000', desc: 'אתר מלא עם אנימציות, עיצוב מותאם ו-CMS', blurb: 'החנות הדיגיטלית המלאה שלכם. בנויה לצמוח עם העסק, לרשום על לקוחות ולדרג בחיפוש — לטווח ארוך.', features: ['אתר מלא ללא הגבלת עמודים', 'אנימציות ועיצוב מותאם', 'מערכת ניהול תוכן (CMS)', 'SEO מתקדם', 'תמיכה 6 חודשים'] },
      },
      automations: {
        basic: { price: '800', desc: 'אוטומציה פשוטה מבוססת טריגר', blurb: 'הגדירו פעם אחת ויעבוד לנצח. עוצר משימה חוזרת אחת שאוכלת לכם זמן כל יום.', features: ['זרימה אחת פשוטה', 'אינטגרציה לאימייל או WhatsApp', 'הגדרה ובדיקה'] },
        standard: { price: '2,500', desc: 'זרימה רב-שלבית עם אינטגרציות ולוגיקה', blurb: 'חברו את הכלים שלכם, צמצמו ניהול. שלוש זרימות שרצות בזמן שאתם ישנים.', features: ['עד 3 זרימות אוטומציה', 'אינטגרציות מרובות', 'לוגיקה מותנית', 'דשבורד מעקב'] },
        premium: { price: '6,000', desc: 'אוטומציה מורכבת עם אינטגרציות API ותחזוקה', blurb: 'העסק שלכם על טייס אוטומטי. תהליכים מורכבים, חיבורי API ומישהו שמתחזק הכל בשבילכם.', features: ['זרימות ללא הגבלה', 'אינטגרציות API מותאמות', 'לוגיקה מתקדמת ו-AI', 'תחזוקה חודשית 3 חודשים', 'תמיכה מלאה'] },
      },
      ai: {
        basic: { price: '1,200', desc: "צ'אטבוט פשוט מבוסס שאלות ותשובות", blurb: 'עונה על שאלות נפוצות מיידית, 24/7. לא עוד זמן שמתבזבז על אותן תשובות חוזרות בוואטסאפ.', features: ['בוט שאלות ותשובות', 'עד 50 שאלות מוגדרות', 'אינטגרציה לאתר'] },
        standard: { price: '3,000', desc: 'עוזר מאומן עם פרסונה מותאמת ואינטגרציות', blurb: 'AI שמכיר את העסק שלכם ומדבר בשמכם. מטפל בלקוחות בוואטסאפ ובאתר — גם בשעה שתיים בלילה.', features: ['אימון על נתוני העסק', 'פרסונה ואישיות מותאמות', 'אינטגרציה ל-WhatsApp/אתר', 'לוח ניהול שיחות'] },
        premium: { price: '8,000', desc: 'סוכן AI מלא, רב-ערוצי עם אימון מתמשך', blurb: 'חבר צוות AI מלא — רב-ערוצי, לומד כל הזמן ומדווח לכם מה הלקוחות באמת צריכים.', features: ['סוכן AI מלא', 'רב-ערוצי (WhatsApp, אימייל, אתר)', 'אימון ועדכון שוטף', 'ניתוח שיחות ודוחות', 'תמיכה שנה'] },
      },
    },
  },
};

function parsePrice(raw: string): number {
  return parseInt(raw.replace(/,/g, ''), 10);
}

function PricingCard({ category, tier, index }: { category: CategoryKey; tier: TierKey; index: number }) {
  const { lang } = useLang();
  const t = content[lang];
  const plan = t.plans[category][tier];
  const isPopular = tier === 'standard';
  const stripeLink = STRIPE_LINKS[category][tier];

  const primarySymbol = lang === 'he' ? '₪' : '$';
  let secondaryLabel = '';
  if (lang === 'he') {
    const nis = parsePrice(plan.price);
    const usd = Math.round(nis * NIS_TO_USD);
    secondaryLabel = `≈ $${usd.toLocaleString('en')}`;
  } else {
    const usd = parsePrice(plan.price);
    const nis = Math.round(usd / NIS_TO_USD);
    secondaryLabel = `≈ ₪${nis.toLocaleString('en')}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: isPopular ? 'linear-gradient(160deg, rgba(26,111,240,0.12) 0%, rgba(26,111,240,0.04) 100%)' : 'var(--black-card)',
        border: isPopular ? '1px solid rgba(26,111,240,0.4)' : '1px solid rgba(255,255,255,0.07)',
        boxShadow: isPopular ? '0 0 60px rgba(26,111,240,0.1)' : 'none',
      }}
    >
      {isPopular && (
        <div
          className="text-center py-2 text-[10px] font-bold tracking-widest"
          style={{ fontFamily: 'var(--font-mono)', background: 'linear-gradient(90deg, var(--blue-dark), var(--blue))', color: 'white' }}
        >
          ★ {t.popular}
        </div>
      )}
      <div className="p-7 flex flex-col flex-1 gap-5">
        {/* Tier + desc */}
        <div>
          <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
            {t.tierLabels[tier]}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
            {plan.desc}
          </p>
        </div>

        {/* Price */}
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>{primarySymbol}</span>
            <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{plan.price}</span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.period}</p>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{secondaryLabel}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2.5 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'var(--white-70)', fontFamily: 'var(--font-body)' }}>
              <span className="mt-0.5 shrink-0" style={{ color: 'var(--teal)' }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Blurb */}
        <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs leading-relaxed italic" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-display)' }}>
            {plan.blurb}
          </p>
        </div>

        {/* CTA */}
        <a
          href={stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          style={
            isPopular
              ? { background: 'linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)', color: 'white', boxShadow: '0 4px 24px var(--blue-glow)', fontFamily: 'var(--font-body)' }
              : { background: 'transparent', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.14)', fontFamily: 'var(--font-body)' }
          }
        >
          {t.cta} {lang === 'he' ? '←' : '→'}
        </a>
      </div>
    </motion.div>
  );
}

function BundlesContent() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <main className="site-wrapper">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: 'var(--black)' }}>
        <div className="grid-bg absolute inset-0 pointer-events-none" />
        <div className="absolute pointer-events-none" style={{ width: '50vw', height: '30vh', top: '0', left: '25%', background: 'radial-gradient(ellipse, rgba(26,111,240,0.15) 0%, transparent 65%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-3xl mx-auto px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="label mb-4 block">{t.title}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="italic" style={{ background: 'linear-gradient(135deg, var(--blue) 0%, var(--blue-light) 45%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t.title}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg"
            style={{ color: 'var(--white-70)', fontFamily: 'var(--font-body)' }}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-28 px-8 lg:px-14" style={{ background: 'var(--black)' }}>
        <div className="max-w-[1600px] mx-auto flex flex-col gap-20">
          {CATEGORIES.map((category, catIndex) => (
            <div key={category}>
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-10"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: 'rgba(26,111,240,0.08)', border: '1px solid rgba(26,111,240,0.15)' }}
                >
                  {CATEGORY_ICONS[category]}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {t.catLabels[category]}
                </h2>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(26,111,240,0.3), transparent)' }} />
              </motion.div>

              {/* Tier cards */}
              <div className="grid md:grid-cols-3 gap-5">
                {TIERS.map((tier, tierIndex) => (
                  <PricingCard
                    key={`${category}-${tier}`}
                    category={category}
                    tier={tier}
                    index={catIndex * 3 + tierIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

export default function BundlesPage() {
  return (
    <LangProvider>
      <BundlesContent />
    </LangProvider>
  );
}
