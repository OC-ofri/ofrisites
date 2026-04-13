'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/972522424677';
const EMAIL = 'ofriko.business@gmail.com';

export default function ContactSection() {
  const { t, isRTL } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const subject = `New inquiry from ${name}`;
    const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.open(`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(74,95,191,1) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">{t('contact.badge')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mt-3 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-sm font-medium" htmlFor="contact-name">
                    {t('contact.name')}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder={t('contact.name')}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/60 text-sm font-medium" htmlFor="contact-phone">
                    {t('contact.phone')}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="05X-XXXXXXX"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm font-medium" htmlFor="contact-email">
                  {t('contact.email')}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-sm font-medium" htmlFor="contact-message">
                  {t('contact.message')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="form-input resize-none"
                  placeholder={t('contact.message.placeholder')}
                />
              </div>

              <motion.button
                type="submit"
                className="btn-glow w-full mt-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('contact.submit')}
              </motion.button>
            </form>
          </motion.div>

          {/* Direct contact — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4 justify-center"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t('contact.whatsapp')}
            </motion.a>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/30 text-sm">{t('contact.or')}</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <motion.a
              href={`mailto:${EMAIL}`}
              className="btn-gmail w-full justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {t('contact.emailBtn')}
            </motion.a>

            {/* Info card */}
            <div className="glass-card p-5 mt-4">
              <div className="flex flex-col gap-3 text-sm text-white/50">
                <div className="flex items-center gap-3">
                  <span className="text-base">📱</span>
                  <span dir="ltr">+972 52-242-4677</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base">✉️</span>
                  <span className="break-all">{EMAIL}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
