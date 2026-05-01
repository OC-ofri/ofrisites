'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

type ServiceCard = {
  id: 'landing' | 'bots' | 'automations';
  service: string;
  tagline: string;
  price: string;
  accent: string;
  accentDark: string;
  accentRgb: string;
  cta: string;
  features: string[];
  popular?: boolean;
};

const services: Record<'en' | 'he', { label: string; h2: string; h2b: string; sub: string; popularBadge: string; zeroRisk: string; cards: ServiceCard[] }> = {
  en: {
    label: 'Services & Pricing',
    h2: 'Three services',
    h2b: 'Priced clearly',
    sub: 'Each is a standalone product. No bundles required.',
    popularBadge: 'Most Popular',
    zeroRisk: 'Free consultation, no commitment',
    cards: [
      {
        id: 'landing',
        service: 'Landing Pages',
        tagline: 'Convert visitors into clients.',
        price: 'From $500',
        accent: 'var(--blue)',
        accentDark: 'var(--blue-dark)',
        accentRgb: '26,111,240',
        cta: 'Get Started',
        features: [
          'Custom responsive design',
          'Mobile-first & SEO-ready',
          'Conversion-optimized copy',
          'Contact form & analytics',
          '30-day support included',
        ],
      },
      {
        id: 'bots',
        service: 'AI-Powered Bots',
        tagline: 'Intelligent support, around the clock.',
        price: 'From $1,200',
        popular: true,
        accent: 'var(--violet)',
        accentDark: '#5b21b6',
        accentRgb: '124,58,237',
        cta: 'Build My Bot',
        features: [
          'Trained on your business data',
          '24/7 multi-channel availability',
          'Web, WhatsApp & email deploy',
          'Handles 80%+ of inquiries',
          '60-day support included',
        ],
      },
      {
        id: 'automations',
        service: 'Automations',
        tagline: 'Work smarter, not harder.',
        price: 'From $1,500',
        accent: 'var(--cyan)',
        accentDark: '#0891b2',
        accentRgb: '6,182,212',
        cta: 'Start Automating',
        features: [
          'Custom workflow design',
          'CRM & email integration',
          'WhatsApp & Zapier automation',
          'Saves 10–20 hours per week',
          '60-day support included',
        ],
      },
    ],
  },
  he: {
    label: 'שירותים ומחירים',
    h2: 'שלושה שירותים',
    h2b: 'מחירים ברורים',
    sub: 'כל שירות הוא מוצר עצמאי. ללא חבילות כפויות.',
    popularBadge: 'הכי פופולרי',
    zeroRisk: 'ייעוץ ללא עלות, ללא התחייבות',
    cards: [
      {
        id: 'landing',
        service: 'דפי נחיתה',
        tagline: 'הפוך מבקרים ללקוחות.',
        price: 'החל מ-₪1,800',
        accent: 'var(--blue)',
        accentDark: 'var(--blue-dark)',
        accentRgb: '26,111,240',
        cta: 'התחל עכשיו',
        features: [
          'עיצוב מותאם אישית ורספונסיבי',
          'מובייל ו-SEO מובנים',
          'קופי ממיר',
          'טופס יצירת קשר ואנליטיקס',
          'תמיכה 30 יום כלולה',
        ],
      },
      {
        id: 'bots',
        service: 'בוטים מבוססי AI',
        tagline: 'תמיכה חכמה, 24/7.',
        price: 'החל מ-₪4,500',
        popular: true,
        accent: 'var(--violet)',
        accentDark: '#5b21b6',
        accentRgb: '124,58,237',
        cta: 'בנה את הבוט שלי',
        features: [
          'מאומן על נתוני העסק שלך',
          'זמינות 24/7 רב-ערוצית',
          'פריסה בווב, וואטסאפ ואימייל',
          'מטפל ב-80%+ מהפניות',
          'תמיכה 60 יום כלולה',
        ],
      },
      {
        id: 'automations',
        service: 'אוטומציות',
        tagline: 'עבוד חכם יותר.',
        price: 'החל מ-₪5,500',
        accent: 'var(--cyan)',
        accentDark: '#0891b2',
        accentRgb: '6,182,212',
        cta: 'התחל לאוטמט',
        features: [
          'עיצוב תהליכים מותאם אישית',
          'אינטגרציה עם CRM ואימייל',
          'אוטומציות וואטסאפ ו-Zapier',
          'חוסך 10–20 שעות בשבוע',
          'תמיכה 60 יום כלולה',
        ],
      },
    ],
  },
};

function ServiceIcon({ id, color }: { id: ServiceCard['id']; color: string }) {
  if (id === 'landing') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <path d="M2 13h20" />
      <path d="M9 21h6M12 17v4" />
    </svg>
  );
  if (id === 'bots') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="9" cy="10" r="1" fill={color} />
      <circle cx="15" cy="10" r="1" fill={color} />
    </svg>
  );
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={`rgba(${id === 'automations' ? '6,182,212' : '26,111,240'},0.2)`} stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

export default function Pricing() {
  const { lang } = useLang();
  const t = services[lang];

  return (
    <section id="pricing" className="py-28" style={{ background: 'var(--black-mid)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <div className="label mb-4">{t.label}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', lineHeight: 1.12 }} className="text-5xl lg:text-6xl font-bold text-white mb-3">
            {t.h2}{' '}
            <span className="italic inline-block px-2 -mx-2" style={{ background: 'linear-gradient(135deg, var(--blue) 0%, var(--violet) 55%, var(--cyan) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t.h2b}
            </span>
          </h2>
          <p className="text-white/40 max-w-xs mx-auto text-sm" style={{ fontFamily: 'var(--font-body)' }}>{t.sub}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {t.cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `linear-gradient(160deg, rgba(${card.accentRgb},0.09) 0%, rgba(${card.accentRgb},0.02) 100%)`,
                border: card.popular ? `1px solid rgba(${card.accentRgb},0.55)` : `1px solid rgba(${card.accentRgb},0.28)`,
                boxShadow: card.popular ? `0 0 65px rgba(${card.accentRgb},0.18)` : `0 0 55px rgba(${card.accentRgb},0.07)`,
              }}
            >
              {card.popular && (
                <div
                  className="absolute top-3 end-3 px-3 py-1 rounded-full text-[10px] font-bold z-10"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    background: `linear-gradient(135deg, ${card.accent} 0%, ${card.accentDark} 100%)`,
                    color: 'white',
                    boxShadow: `0 4px 16px rgba(${card.accentRgb},0.45)`,
                  }}
                >
                  ★ {t.popularBadge.toUpperCase()}
                </div>
              )}
              {/* Top accent bar */}
              <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${card.accent}, ${card.accentDark})` }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{
                    background: `rgba(${card.accentRgb},0.1)`,
                    border: `1px solid rgba(${card.accentRgb},0.2)`,
                  }}
                >
                  <ServiceIcon id={card.id} color={card.accent} />
                </div>

                {/* Service name */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                  {card.service}
                </h3>

                {/* Price */}
                <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: card.accent }}>
                  {card.price}
                </div>

                {/* Tagline */}
                <p className="text-sm text-white/45 leading-relaxed mb-6 pb-6" style={{ fontFamily: 'var(--font-body)', borderBottom: `1px solid rgba(${card.accentRgb},0.1)` }}>
                  {card.tagline}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'var(--white-70)', fontFamily: 'var(--font-body)' }}>
                      <span className="mt-0.5 shrink-0" style={{ color: card.accent }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="block text-center py-3.5 px-6 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: `linear-gradient(135deg, ${card.accent} 0%, ${card.accentDark} 100%)`,
                    boxShadow: `0 4px 24px rgba(${card.accentRgb},0.3)`,
                  }}
                >
                  {card.cta} {lang === 'he' ? '←' : '→'}
                </a>
                <div className="text-center text-xs mt-3" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)' }}>
                  {t.zeroRisk}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
