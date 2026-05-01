'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const content = {
  en: {
    label: 'About OKAI',
    h2: 'We build advantages',
    h2b: 'not just websites',
    p: 'OKAI is a boutique AI agency. We work with ambitious businesses to deliver websites, automations, and AI systems that create real competitive edges — fast.',
    stats: [
      { value: '30+', label: 'Clients', color: 'var(--blue-light)' },
      { value: '98%', label: 'Satisfaction', color: 'var(--cyan)' },
      { value: '3.2×', label: 'Avg. ROI', color: 'var(--violet-light)' },
      { value: '7 days', label: 'Avg. Delivery', color: 'var(--blue-light)' },
    ],
  },
  he: {
    label: 'אודות OKAI',
    h2: 'אנחנו בונים יתרון תחרותי',
    h2b: 'לא רק אתרים',
    p: 'OKAI היא סוכנות AI בוטיק. אנחנו עובדים עם עסקים שאפתניים כדי לספק אתרים, אוטומציות ומערכות AI שיוצרות יתרון תחרותי אמיתי — מהר.',
    stats: [
      { value: '30+', label: 'לקוחות', color: 'var(--blue-light)' },
      { value: '98%', label: 'שביעות רצון', color: 'var(--cyan)' },
      { value: '3.2×', label: 'ROI ממוצע', color: 'var(--violet-light)' },
      { value: '7 ימים', label: 'משלוח ממוצע', color: 'var(--blue-light)' },
    ],
  },
};

function CountUpStat({ value, label, color, delay = 0 }: { value: string; label: string; color: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Parse leading number + suffix (e.g. "60+" → 60, "+"; "3.2×" → 3.2, "×"; "9 days" → 9, " days")
    const match = value.match(/^([\d.]+)(.*)/);
    if (!match) { setDisplay(value); return; }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes('.');

    const controls = animate(0, target, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay((isDecimal ? v.toFixed(1) : Math.round(v).toString()) + suffix),
    });

    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 rounded-2xl"
      style={{ background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color }}>{display}</div>
      <div className="text-sm text-white/40" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>{label}</div>
    </motion.div>
  );
}

export default function About() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="about" className="py-28">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="label mb-5">{t.label}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', lineHeight: 1.15 }} className="text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.h2}
              <br />
              <span className="italic" style={{ color: 'var(--blue-light)' }}>{t.h2b}</span>
            </h2>
            <p className="text-white/55 leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-body)' }}>{t.p}</p>
          </motion.div>

          {/* Right: Stats with count-up */}
          <div className="grid grid-cols-2 gap-4">
            {t.stats.map((s, i) => (
              <CountUpStat key={s.label} value={s.value} label={s.label} color={s.color} delay={0.15 + i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
