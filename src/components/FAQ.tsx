'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const content = {
  en: {
    label: 'FAQ',
    h2: 'Common questions',
    h2b: 'honest answers',
    items: [
      {
        q: 'How long does a project take?',
        a: 'Up to one week. From the moment we align on the brief, we move — your landing page, bot, or automation goes live within 7 days. Speed is a core part of how we work, not an exception.',
      },
      {
        q: 'Do you work with small businesses?',
        a: 'Small businesses are our primary focus — it\'s why OKAI exists. For years, the tools that help businesses scale efficiently were only accessible to enterprises with large teams and big budgets. AI has changed that. We give small businesses the same systems, automations, and intelligent tools that large companies rely on — so you can operate with the same efficiency, responsiveness, and professionalism, at a fraction of the cost.',
      },
      {
        q: 'What happens after launch?',
        a: 'We offer ongoing monthly support subscriptions — unlimited in duration. One flat monthly fee keeps us on the other side of a phone call for whatever you need: updates, fixes, new features, questions, or guidance. Think of us as your dedicated tech partner, not just a one-time vendor.',
      },
      {
        q: 'How much does it cost?',
        a: 'Pricing starts from $1,200 for a landing page, $2,500 for automations, and $3,500 for an AI-powered bot. Fixed scope — no hourly billing, no hidden fees. See our Services section for the full breakdown.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Yes — and we\'re flexible. We can arrange whatever works best for you, whether that\'s splitting payments, paying in full upfront, or settling at delivery. Just tell us what you need and we\'ll work it out.',
      },
      {
        q: 'Can you work with tools we already use?',
        a: 'Yes. We integrate with CRMs, email platforms, booking systems, WhatsApp, Zapier, and most common business tools. If you\'re already using something, we build around it.',
      },
      {
        q: 'Why should I choose OKAI?',
        a: 'Because we built OKAI for businesses exactly like yours. Small businesses have largely been left behind during the AI revolution — the tools exist, but the pricing, complexity, and expertise required have kept them out of reach. We bridge that gap. You get enterprise-grade AI systems, custom websites, and smart automations, delivered within days, at prices that make sense for a small business budget. We\'re a focused, accountable team — not a large agency with a waitlist.',
      },
    ],
  },
  he: {
    label: 'שאלות נפוצות',
    h2: 'שאלות נפוצות',
    h2b: 'תשובות כנות',
    items: [
      {
        q: 'כמה זמן לוקח פרויקט?',
        a: 'תוך 7 ימים אתה כבר אונליין. ברגע שמיישרים קו על הצרכים שלך — אנחנו מתחילים לרוץ. דף הנחיתה, הבוט או האוטומציה שלך עולים לאוויר בתוך שבוע. מהירות זו לא בונוס — זו שיטת העבודה שלנו.',
      },
      {
        q: 'האם אתם עובדים עם עסקים קטנים?',
        a: 'עסקים קטנים הם הסיבה שהקמנו את OKAI. שנים ארוכות, כלי ה-AI שמניעים עסקים גדולים לא היו נגישים לבעלי עסקים קטנים — בגלל מחיר, מורכבות, ומחסור בידע טכני. זה בדיוק מה שאנחנו פותרים. אנחנו מביאים לעסק שלך את אותן מערכות אוטומציה, בינה מלאכותית וכלים דיגיטליים שחברות גדולות משתמשות בהן — במחיר שמתאים לעסק קטן.',
      },
      {
        q: 'מה קורה אחרי ההשקה?',
        a: 'אנחנו לא נעלמים. אנחנו מציעים מנויי תמיכה שוטפת בתשלום חודשי קבוע — ללא הגבלת זמן. עדכונים, תיקונים, פיצ\'רים חדשים, שאלות — אנחנו בצד השני. חשוב עלינו כשותף טכנולוגי צמוד לעסק שלך, לא ספק חד-פעמי.',
      },
      {
        q: 'כמה זה עולה?',
        a: 'המחירים מתחילים מ-$1,200 לדף נחיתה, $2,500 לאוטומציות, ו-$3,500 לבוט AI. היקף קבוע מראש — ללא חיוב לפי שעה, ללא עמלות נסתרות. פרטים מלאים בדף השירותים.',
      },
      {
        q: 'האם ניתן לשלם בתשלומים?',
        a: 'כן, ואנחנו גמישים לגמרי. פיצול תשלומים, תשלום מלא מראש, או תשלום במסירה — כל מה שמתאים לך. פשוט תגיד לנו ונמצא את המסגרת הנכונה יחד.',
      },
      {
        q: 'האם אתם יכולים לעבוד עם הכלים שכבר יש לי?',
        a: 'בהחלט. אנחנו מתחברים ל-CRM, פלטפורמות שיווק במייל, מערכות הזמנות, וואטסאפ, Make ולכמעט כל כלי עסקי מוכר. אם אתה כבר עובד עם משהו — אנחנו בונים סביבו, לא במקומו.',
      },
      {
        q: 'למה לבחור ב-OKAI?',
        a: 'כי בנינו אותה בדיוק בשבילך. עסקים קטנים נשארו מאחור במהפכת ה-AI — לא בגלל שהכלים לא קיימים, אלא כי הם היו יקרים מדי, מורכבים מדי, ודרשו ידע שאין לרוב בעלי העסקים. OKAI מגשרת על הפער הזה. אתה מקבל מערכות AI ברמה ארגונית, אתרים מהירים ואוטומציות חכמות — תוך ימים, במחיר שמתאים לעסק קטן. אנחנו צוות ממוקד ואחראי, לא סוכנות עמוסה עם רשימת המתנה.',
      },
    ],
  },
};

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0, 1, 3]));
  const { lang } = useLang();
  const t = content[lang];

  const toggle = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="faq" className="py-28" style={{ background: 'var(--black-mid)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
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
            <span className="italic inline-block px-2 -mx-2" style={{ background: 'linear-gradient(135deg, var(--blue) 0%, var(--violet) 60%, var(--blue-light) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t.h2b}
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {t.items.map((item, i) => {
            const isOpen = openIndices.has(i);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="border-b"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[10px] font-bold shrink-0 transition-colors duration-200"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em',
                        color: isOpen ? 'var(--violet-light)' : 'rgba(255,255,255,0.2)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-base font-semibold transition-colors duration-200"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: isOpen ? 'white' : 'rgba(255,255,255,0.75)',
                      }}
                    >
                      {item.q}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${isOpen ? 'rgba(124,58,237,0.35)' : 'rgba(255,255,255,0.1)'}`,
                      color: isOpen ? 'var(--violet-light)' : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                      <rect x="4" y="0" width="2" height="10" rx="1" />
                      <rect x="0" y="4" width="10" height="2" rx="1" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        className="pb-5 text-sm leading-relaxed"
                        style={{
                          color: 'rgba(255,255,255,0.5)',
                          fontFamily: 'var(--font-body)',
                          borderLeft: '2px solid',
                          borderImage: 'linear-gradient(to bottom, var(--blue), var(--violet)) 1',
                          marginLeft: '1.5rem',
                          paddingLeft: '1.25rem',
                        }}
                      >
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
