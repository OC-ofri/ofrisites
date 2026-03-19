'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const services = [
  {
    key: 'websites',
    icon: '🌐',
    gradient: 'from-blue-500/20 to-blue-600/5',
    borderHover: 'group-hover:border-blue-500/50',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    key: 'automations',
    icon: '⚡',
    gradient: 'from-violet-500/20 to-violet-600/5',
    borderHover: 'group-hover:border-violet-500/50',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    key: 'ai',
    icon: '🤖',
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    borderHover: 'group-hover:border-cyan-500/50',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
  },
];

export default function ServiceGrid() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020208] to-black" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">{t('services.title')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-4"
          >
            {t('services.subtitle')}
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-8 flex flex-col gap-5"
            >
              {/* Icon */}
              <div className={`icon-badge ${service.iconBg} border w-14 h-14 text-2xl flex items-center justify-center rounded-2xl`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white">
                {t(`services.${service.key}.title`)}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {t(`services.${service.key}.desc`)}
              </p>

              {/* Arrow indicator */}
              <div className="flex items-center text-[#7080d4] text-sm font-semibold gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>{t('nav.services')}</span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: isRTL ? 'scaleX(-1)' : undefined }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
