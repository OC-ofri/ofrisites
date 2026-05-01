'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const content = {
  en: {
    label: 'What We Build',
    h2: 'Three tools',
    h2b: 'One agency',
    sub: 'Everything your business needs to look great and grow intelligently.',
    services: [
      {
        number: '01',
        title: 'Custom Websites',
        desc: 'Conversion-optimized sites that bring in new clients every day.',
        img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
        gradient: 'linear-gradient(90deg, var(--blue), var(--violet))',
        labelColor: 'var(--blue)',
      },
      {
        number: '02',
        title: 'Business Automations',
        desc: 'Smart workflows that handle repetitive work so you don\'t have to.',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
        gradient: 'linear-gradient(90deg, var(--violet), var(--cyan))',
        labelColor: 'var(--violet-light)',
      },
      {
        number: '03',
        title: 'AI Assistants',
        desc: 'Always-on support, trained on your business data.',
        img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
        gradient: 'linear-gradient(90deg, var(--cyan), var(--blue))',
        labelColor: 'var(--cyan)',
      },
    ],
  },
  he: {
    label: 'מה אנחנו בונים',
    h2: 'שלושה כלים',
    h2b: 'סוכנות אחת',
    sub: 'כל מה שהעסק שלך צריך כדי להיראות טוב ולצמוח בחוכמה.',
    services: [
      {
        number: '01',
        title: 'אתרים מותאמים',
        desc: 'אתרים שממירים מבקרים ללקוחות — כל יום.',
        img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
        gradient: 'linear-gradient(90deg, var(--blue), var(--violet))',
        labelColor: 'var(--blue)',
      },
      {
        number: '02',
        title: 'אוטומציות עסקיות',
        desc: 'תהליכים חכמים שמחליפים את העבודה הידנית בשבילך.',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
        gradient: 'linear-gradient(90deg, var(--violet), var(--cyan))',
        labelColor: 'var(--violet-light)',
      },
      {
        number: '03',
        title: 'עוזרי AI',
        desc: 'תמיכה 24/7, מאומן על הנתונים של העסק שלך.',
        img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
        gradient: 'linear-gradient(90deg, var(--cyan), var(--blue))',
        labelColor: 'var(--cyan)',
      },
    ],
  },
};

export default function Services() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="services" className="py-28">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="label mb-4">{t.label}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', lineHeight: 1.12 }} className="text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.h2}{' '}
            <span className="italic inline-block px-2 -mx-2" style={{ background: 'linear-gradient(135deg, var(--blue) 0%, var(--cyan) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t.h2b}
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg" style={{ fontFamily: 'var(--font-body)' }}>{t.sub}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {t.services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Photo with overlay */}
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,5,8,0.3) 0%, rgba(5,5,8,0.85) 100%)' }} />
                {/* Number label over image */}
                <div className="absolute top-4 start-4 text-xs font-bold" style={{ fontFamily: 'var(--font-mono)', color: s.labelColor, letterSpacing: '0.1em' }}>
                  {s.number}
                </div>
                {/* Hover top accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: s.gradient }} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
