'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const content = {
  en: {
    label: 'Our Work',
    h2: 'Built to',
    h2b: 'perform',
    sub: 'Real projects. Measurable results.',
    caseStudy: 'View Case Study',
    projects: [
      {
        slug: 'nexuscom',
        name: 'NexusCom — Enterprise Rebuild',
        result: 'Organic traffic up 210% in 60 days.',
        tags: ['Website', 'SEO'],
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        featured: true,
      },
      {
        slug: 'verde-kitchen',
        name: 'Verde Kitchen — AI Booking',
        result: 'AI handles 90% of reservations automatically.',
        tags: ['AI', 'WhatsApp'],
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        featured: false,
      },
      {
        slug: 'apex-media',
        name: 'Apex Media — Automation',
        result: 'Saves 15 manual hours every week.',
        tags: ['Automation', 'CRM'],
        img: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
        featured: false,
      },
    ],
  },
  he: {
    label: 'תיק עבודות',
    h2: 'בנוי',
    h2b: 'לביצועים',
    sub: 'פרויקטים אמיתיים. תוצאות מדידות.',
    caseStudy: 'צפה בפרויקט',
    projects: [
      {
        slug: 'nexuscom',
        name: 'NexusCom — בנייה מחדש',
        result: 'תנועה אורגנית עלתה ב-210% תוך 60 יום.',
        tags: ['אתר', 'SEO'],
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        featured: true,
      },
      {
        slug: 'verde-kitchen',
        name: 'Verde Kitchen — AI להזמנות',
        result: 'ה-AI מטפל ב-90% מהזמנות השולחנות אוטומטית.',
        tags: ['AI', 'WhatsApp'],
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        featured: false,
      },
      {
        slug: 'apex-media',
        name: 'Apex Media — אוטומציה',
        result: 'חוסך 15 שעות עבודה ידנית בשבוע.',
        tags: ['אוטומציה', 'CRM'],
        img: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
        featured: false,
      },
    ],
  },
};

export default function Portfolio() {
  const { lang } = useLang();
  const t = content[lang];
  const featured = t.projects.find((p) => p.featured)!;
  const grid = t.projects.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="py-28">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="label mb-4">{t.label}</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3">
            <h2 style={{ fontFamily: 'var(--font-display)', lineHeight: 1.12 }} className="text-5xl lg:text-6xl font-bold text-white">
              {t.h2}{' '}
              <span className="italic" style={{ color: 'var(--blue-light)' }}>{t.h2b}</span>
            </h2>
            <p className="text-white/35 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>{t.sub}</p>
          </div>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="relative h-72 lg:h-96 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.img} alt={featured.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.92) 0%, rgba(5,5,8,0.2) 60%)' }} />
            <div className="absolute bottom-0 inset-x-0 p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(26,111,240,0.15)', color: 'var(--blue-light)', border: '1px solid rgba(26,111,240,0.25)' }}>★ Featured</span>
                {featured.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-[10px]" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' }}>{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{featured.name}</h3>
              <p className="text-white/65 mb-4" style={{ fontFamily: 'var(--font-body)' }}>{featured.result}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200 hover:gap-2.5"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--blue-light)', letterSpacing: '0.08em' }}
              >
                {t.caseStudy.toUpperCase()} <span>{lang === 'he' ? '←' : '→'}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {grid.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, rgba(5,5,8,0.15) 60%)' }} />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-[10px]" style={{ fontFamily: 'var(--font-mono)', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>{project.name}</h3>
                  <p className="text-xs text-white/55 mb-3" style={{ fontFamily: 'var(--font-body)' }}>{project.result}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold transition-all duration-200 hover:gap-2"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--blue-light)', letterSpacing: '0.08em' }}
                  >
                    {t.caseStudy.toUpperCase()} <span>{lang === 'he' ? '←' : '→'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
