'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const content = {
  en: {
    h1: 'Your business',
    h1accent: 'built smarter',
    sub: 'Websites, automations, and AI assistants — so your business grows faster.',
    cta1: 'Book a Call',
    cta2: 'See Our Work',
  },
  he: {
    h1: 'העסק שלך',
    h1accent: 'חכם יותר',
    sub: 'אתרים, אוטומציות ועוזרי AI — כדי שהעסק שלך יצמח מהר יותר.',
    cta1: 'קביעת שיחה',
    cta2: 'הצג עבודות',
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: 'var(--black)' }}>
      {/* Glows */}
      <div className="absolute pointer-events-none" style={{ width: '65vw', height: '65vh', top: '5%', left: '-10%', background: 'radial-gradient(ellipse, rgba(26,111,240,0.18) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      <div className="absolute pointer-events-none" style={{ width: '40vw', height: '40vh', top: '40%', right: '0%', background: 'radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 60%)', filter: 'blur(70px)' }} />
      <div className="absolute pointer-events-none" style={{ width: '30vw', height: '30vh', bottom: '10%', right: '8%', background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)', filter: 'blur(65px)' }} />

      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-14 pt-28 pb-16 lg:pt-36 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <motion.h1
            {...fadeUp(0.08)}
            style={{ fontFamily: 'var(--font-display)', lineHeight: 1.15 }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white mb-6"
          >
            {t.h1}
            <br />
            <span className="italic inline-block px-2 -mx-2" style={{ background: 'linear-gradient(135deg, var(--blue) 0%, var(--violet) 45%, var(--blue-light) 75%, var(--cyan) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t.h1accent}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'var(--white-70)', fontFamily: 'var(--font-body)' }}>
            {t.sub}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              style={{ fontFamily: 'var(--font-body)', background: 'linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)', boxShadow: '0 4px 28px var(--blue-glow)' }}
            >
              {t.cta1}
              <span className="transition-transform duration-200 group-hover:translate-x-1">{lang === 'he' ? '←' : '→'}</span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--white-70)',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: 'rgba(255,255,255,0.2)',
              }}
            >
              {t.cta2}
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
