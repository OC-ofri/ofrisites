'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const content = {
  en: {
    label: 'Client Stories',
    h2: 'Results that',
    h2b: 'speak',
    items: [
      { quote: 'Our new website brought 3× the leads in the first month.', name: 'Marcus J.', role: 'CEO @ ThirdBridge', initials: 'MJ', color: 'var(--blue)' },
      { quote: 'The AI handles 80% of inquiries. Paid for itself in week one.', name: 'Sarah M.', role: 'Operations Director', initials: 'SM', color: 'var(--cyan)' },
      { quote: 'Discovery to launch in 9 days. Saves us 15 hours every week.', name: 'Daniel R.', role: 'Founder @ Apex Media', initials: 'DR', color: 'var(--violet-light)' },
    ],
  },
  he: {
    label: 'סיפורי לקוחות',
    h2: 'תוצאות שמדברות',
    h2b: 'בעד עצמן',
    items: [
      { quote: 'האתר החדש הביא פי 3 לידים כבר בחודש הראשון.', name: 'מרקוס ג.', role: 'מנכ"ל @ ThirdBridge', initials: 'מג', color: 'var(--blue)' },
      { quote: 'ה-AI מטפל ב-80% מהפניות. החזיר את עצמו תוך שבוע.', name: 'שרה מ.', role: 'מנהלת תפעול', initials: 'שמ', color: 'var(--cyan)' },
      { quote: 'מגילוי ועד השקה ב-9 ימים. חוסך לנו 15 שעות בשבוע.', name: 'דניאל ר.', role: 'מייסד @ Apex Media', initials: 'דר', color: 'var(--violet-light)' },
    ],
  },
};

export default function Testimonials() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="testimonials" className="py-28">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="label mb-4">{t.label}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', lineHeight: 1.12 }} className="text-5xl lg:text-6xl font-bold text-white">
            {t.h2}{' '}
            <span className="italic" style={{ color: 'var(--blue-light)' }}>{t.h2b}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {t.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => <span key={j} style={{ color: 'var(--gold)', fontSize: '0.82rem' }}>★</span>)}
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed italic" style={{ fontFamily: 'var(--font-display)', color: 'var(--white-70)' }}>{item.quote}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ fontFamily: 'var(--font-mono)', background: `color-mix(in srgb, ${item.color} 15%, transparent)`, border: `1px solid color-mix(in srgb, ${item.color} 28%, transparent)`, color: item.color }}>{item.initials}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-white/35">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
