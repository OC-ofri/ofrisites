'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

type CategoryKey = 'websites' | 'automations' | 'ai';
type TierKey = 'basic' | 'standard' | 'premium';

const CATEGORIES: CategoryKey[] = ['websites', 'automations', 'ai'];
const TIERS: TierKey[] = ['basic', 'standard', 'premium'];

const FEATURE_COUNTS: Record<CategoryKey, Record<TierKey, number>> = {
  websites:    { basic: 4, standard: 5, premium: 5 },
  automations: { basic: 3, standard: 4, premium: 5 },
  ai:          { basic: 3, standard: 4, premium: 5 },
};

const CATEGORY_ICONS: Record<CategoryKey, string> = {
  websites: '🌐',
  automations: '⚡',
  ai: '🤖',
};

// Swap these placeholder URLs for real Stripe Payment Links when ready
const STRIPE_LINKS: Record<CategoryKey, Record<TierKey, string>> = {
  websites: {
    basic:    'https://buy.stripe.com/PLACEHOLDER_WEBSITES_BASIC',
    standard: 'https://buy.stripe.com/PLACEHOLDER_WEBSITES_STANDARD',
    premium:  'https://buy.stripe.com/PLACEHOLDER_WEBSITES_PREMIUM',
  },
  automations: {
    basic:    'https://buy.stripe.com/PLACEHOLDER_AUTOMATIONS_BASIC',
    standard: 'https://buy.stripe.com/PLACEHOLDER_AUTOMATIONS_STANDARD',
    premium:  'https://buy.stripe.com/PLACEHOLDER_AUTOMATIONS_PREMIUM',
  },
  ai: {
    basic:    'https://buy.stripe.com/PLACEHOLDER_AI_BASIC',
    standard: 'https://buy.stripe.com/PLACEHOLDER_AI_STANDARD',
    premium:  'https://buy.stripe.com/PLACEHOLDER_AI_PREMIUM',
  },
};

// Approximate NIS→USD conversion rate (update as needed)
const NIS_TO_USD = 0.27;

function parsePrice(raw: string): number {
  return parseInt(raw.replace(/,/g, ''), 10);
}

function PricingCard({
  category,
  tier,
  index,
}: {
  category: CategoryKey;
  tier: TierKey;
  index: number;
}) {
  const { t, language } = useLanguage();
  const isPopular = tier === 'standard';
  const featureCount = FEATURE_COUNTS[category][tier];
  const stripeLink = STRIPE_LINKS[category][tier];

  // Always derive both prices
  const nisRaw = language === 'he' ? t(`${category}.${tier}.price`) : null;
  const usdRaw = language === 'en' ? t(`${category}.${tier}.price`) : null;

  // Primary display uses translation key directly; secondary is converted
  const primarySymbol = language === 'he' ? '₪' : '$';
  const primaryPrice = t(`${category}.${tier}.price`);

  // Derive secondary price
  let secondaryLabel = '';
  if (language === 'he') {
    const nis = parsePrice(primaryPrice);
    const usd = Math.round(nis * NIS_TO_USD);
    secondaryLabel = `≈ $${usd.toLocaleString('en')}`;
  } else {
    const usd = parsePrice(primaryPrice);
    const nis = Math.round(usd / NIS_TO_USD);
    secondaryLabel = `≈ ₪${nis.toLocaleString('en')}`;
  }

  void nisRaw; void usdRaw;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative rounded-2xl p-7 flex flex-col gap-5 ${
        isPopular ? 'pricing-featured' : 'glass-card'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="pricing-badge whitespace-nowrap">{t('bundles.popular')}</span>
        </div>
      )}

      {/* Tier name + short desc */}
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{t(`tier.${tier}`)}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{t(`${category}.${tier}.desc`)}</p>
      </div>

      {/* Price */}
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-white/60 text-lg font-semibold">{primarySymbol}</span>
          <span className="text-4xl font-black text-white">{primaryPrice}</span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <p className="text-white/35 text-xs">{t('tier.period')}</p>
          <span className="text-white/25 text-xs">{secondaryLabel}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {Array.from({ length: featureCount }, (_, fi) => (
          <li key={fi} className="flex items-start gap-3">
            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#4A5FBF]/20 border border-[#4A5FBF]/30 flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7080d4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span className="text-white/70 text-sm leading-snug">
              {t(`${category}.${tier}.f${fi + 1}`)}
            </span>
          </li>
        ))}
      </ul>

      {/* Business value blurb */}
      <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3">
        <p className="text-white/50 text-xs leading-relaxed italic">
          {t(`${category}.${tier}.blurb`)}
        </p>
      </div>

      {/* CTA → Stripe Payment Link */}
      <a
        href={stripeLink}
        target="_blank"
        rel="noopener noreferrer"
        className={isPopular ? 'btn-glow text-center' : 'btn-outline text-center'}
      >
        {t('bundles.cta')}
      </a>
    </motion.div>
  );
}

export default function BundlesPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(ellipse, #4A5FBF 0%, transparent 70%)' }}
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">{t('bundles.title')}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mt-4 mb-4"
          >
            <span className="gradient-text">{t('bundles.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            {t('bundles.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {CATEGORIES.map((category, catIndex) => (
            <div key={category}>
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-10"
              >
                <div className="icon-badge text-2xl">
                  {CATEGORY_ICONS[category]}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {t(`cat.${category}.title`)}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[#4A5FBF]/30 to-transparent" />
              </motion.div>

              {/* Tier cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
