'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

interface ServiceItem {
  icon: string;
  titleKey: string;
  descKey: string;
}

const SERVICES: ServiceItem[] = [
  { icon: '🌐', titleKey: 'services.websites.title', descKey: 'services.websites.desc' },
  { icon: '⚡', titleKey: 'services.automations.title', descKey: 'services.automations.desc' },
  { icon: '🤖', titleKey: 'services.ai.title', descKey: 'services.ai.desc' },
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(74,95,191,1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">{t('services.badge')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.titleKey}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-card p-8 flex flex-col gap-5"
            >
              <div className="icon-badge">{service.icon}</div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  href="/bundles"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#7080d4] hover:text-white transition-colors duration-200 group"
                >
                  {t('services.learnMore')}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
