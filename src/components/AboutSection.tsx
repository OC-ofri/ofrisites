'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

interface Reason {
  icon: string;
  titleKey: string;
  descKey: string;
  accent: string;
}

const REASONS: Reason[] = [
  { icon: '🚀', titleKey: 'about.reason1.title', descKey: 'about.reason1.desc', accent: '#4A5FBF' },
  { icon: '🇮🇱', titleKey: 'about.reason2.title', descKey: 'about.reason2.desc', accent: '#4A5FBF' },
  { icon: '🛡️', titleKey: 'about.reason3.title', descKey: 'about.reason3.desc', accent: '#4A5FBF' },
  { icon: '📈', titleKey: 'about.reason4.title', descKey: 'about.reason4.desc', accent: '#4A5FBF' },
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#050508] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse at 0% 100%, rgba(74,95,191,1) 0%, transparent 60%)',
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
          <span className="section-tag">{t('about.badge')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {REASONS.map((reason) => (
            <motion.div
              key={reason.titleKey}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-8 flex gap-5"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: `rgba(74, 95, 191, 0.12)`,
                  border: `1px solid rgba(74, 95, 191, 0.25)`,
                }}
              >
                {reason.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
