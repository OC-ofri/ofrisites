'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const content = {
  en: {
    label: 'Get In Touch',
    h2: 'Ready to build',
    h2b: 'something ',
    h2gold: 'remarkable',
    sub: "Tell us about your project. We'll respond within 24 hours.",
    points: [
      { icon: '✉', label: 'Email', value: 'ofrikorenn@gmail.com', href: 'mailto:ofrikorenn@gmail.com' },
      { icon: '💬', label: 'WhatsApp', value: 'Message us directly', href: 'https://wa.me/972522424677' },
      { icon: '🌐', label: 'Location', value: 'Remote · Worldwide', href: undefined },
    ],
    fields: {
      name: 'Name', business: 'Business', email: 'Email', message: 'Message',
      namePh: 'Your name', bizPh: 'Company name', emailPh: 'you@company.com', msgPh: 'Anything else? (optional)',
      service: 'Service', servicePh: 'Select a service',
      serviceOpts: ['Landing Page / Website', 'AI-Powered Bot', 'Automations', 'Not sure — help me decide'],
      budget: 'Budget', budgetPh: 'Select a range',
      budgetOpts: ['Under $1,000', '$1,000 – $3,000', '$3,000 – $7,000', '$7,000+'],
      submit: 'Send Message', sending: 'Sending...',
      successTitle: 'Message sent!', successSub: "We'll be in touch within 24 hours.",
      response: '⚡ Response within 24 hours',
    },
  },
  he: {
    label: 'צור קשר',
    h2: 'מוכן לבנות',
    h2b: 'משהו ',
    h2gold: 'יוצא דופן',
    sub: 'ספר לנו על הפרויקט שלך. נחזור אליך תוך 24 שעות.',
    points: [
      { icon: '✉', label: 'אימייל', value: 'ofrikorenn@gmail.com', href: 'mailto:ofrikorenn@gmail.com' },
      { icon: '💬', label: 'וואטסאפ', value: 'שלח לנו הודעה', href: 'https://wa.me/972522424677' },
      { icon: '🌐', label: 'מיקום', value: 'מרחוק · בכל מקום', href: undefined },
    ],
    fields: {
      name: 'שם', business: 'עסק', email: 'אימייל', message: 'הערות',
      namePh: 'השם שלך', bizPh: 'שם החברה', emailPh: 'you@company.com', msgPh: 'משהו נוסף? (אופציונלי)',
      service: 'שירות', servicePh: 'בחר שירות',
      serviceOpts: ['דף נחיתה / אתר', 'בוט AI', 'אוטומציות', 'לא בטוח — עזור לי להחליט'],
      budget: 'תקציב', budgetPh: 'בחר טווח',
      budgetOpts: ['עד ₪3,500', '₪3,500 – ₪10,000', '₪10,000 – ₪25,000', '₪25,000+'],
      submit: 'שלח הודעה', sending: 'שולח...',
      successTitle: 'ההודעה נשלחה!', successSub: 'נחזור אליך תוך 24 שעות.',
      response: '⚡ תגובה תוך 24 שעות',
    },
  },
};

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { lang } = useLang();
  const t = content[lang];
  const f = t.fields;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      business: (form.elements.namedItem('business') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      budget: (form.elements.namedItem('budget') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error('Failed');
      setSent(true);
    } catch {
      alert('Something went wrong. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="label mb-5">{t.label}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', lineHeight: 1.15 }} className="text-5xl lg:text-6xl font-bold text-white mb-5">
              {t.h2}<br />
              <span className="italic" style={{ color: 'var(--blue-light)' }}>{t.h2b}</span><span className="italic inline-block px-2 -mx-2" style={{ background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 40%, #fde68a 68%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{t.h2gold}</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-10 max-w-sm" style={{ fontFamily: 'var(--font-body)' }}>{t.sub}</p>
            <div className="space-y-5">
              {t.points.map((c, i) => (
                <motion.div key={c.label} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: 'rgba(26,111,240,0.08)', border: '1px solid rgba(26,111,240,0.15)' }}>{c.icon}</div>
                  <div>
                    <div className="text-[10px] text-white/30 mb-0.5" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>{c.label.toUpperCase()}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium text-white/75 hover:text-white transition-colors duration-200" style={{ fontFamily: 'var(--font-body)' }}>{c.value}</a>
                    ) : (
                      <div className="text-sm font-medium text-white/75" style={{ fontFamily: 'var(--font-body)' }}>{c.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-8 rounded-2xl" style={{ background: 'var(--black-card)', border: '1px solid rgba(26,111,240,0.15)' }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 text-2xl" style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)' }}>✓</div>
                  <div className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>{f.successTitle}</div>
                  <div className="text-white/45 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{f.successSub}</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-white/30 mb-2" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{f.name.toUpperCase()}</label>
                      <input name="name" className="form-input" placeholder={f.namePh} required />
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/30 mb-2" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{f.business.toUpperCase()}</label>
                      <input name="business" className="form-input" placeholder={f.bizPh} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-white/30 mb-2" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{f.email.toUpperCase()}</label>
                    <input name="email" className="form-input" type="email" placeholder={f.emailPh} required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-white/30 mb-2" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{f.service.toUpperCase()}</label>
                      <select name="service" className="form-input" required defaultValue="">
                        <option value="" disabled>{f.servicePh}</option>
                        {f.serviceOpts.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] text-white/30 mb-2" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{f.budget.toUpperCase()}</label>
                      <select name="budget" className="form-input" required defaultValue="">
                        <option value="" disabled>{f.budgetPh}</option>
                        {f.budgetOpts.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-white/30 mb-2" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>{f.message.toUpperCase()}</label>
                    <textarea name="message" className="form-input resize-none" rows={3} placeholder={f.msgPh} />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ fontFamily: 'var(--font-body)', background: 'linear-gradient(135deg, #a07510 0%, #c99116 40%, #e0a820 70%, #c99116 100%)', boxShadow: '0 4px 24px rgba(201,145,22,0.45)', color: '#1a0f00' }}
                  >
                    {sending ? f.sending : `${f.submit} ${lang === 'he' ? '←' : '→'}`}
                  </button>
                  <div className="text-center text-xs pt-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>
                    {f.response}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
