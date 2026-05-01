'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LangProvider, useLang } from '@/context/LangContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const content = {
  en: {
    badge: 'Thank You',
    title: "We've received your request!",
    subtitle: "We'll be in touch within 24 hours. In the meantime, feel free to reach us directly on WhatsApp.",
    whatsapp: 'Message us on WhatsApp',
    home: 'Back to Home',
  },
  he: {
    badge: 'תודה רבה',
    title: 'קיבלנו את הבקשה שלכם!',
    subtitle: 'ניצור אתכם קשר בתוך 24 שעות. בינתיים, מוזמנים לכתוב לנו ישירות בוואטסאפ.',
    whatsapp: 'כתבו לנו בוואטסאפ',
    home: 'חזרה לדף הבית',
  },
};

function ThankYouContent() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <main className="site-wrapper">
      <Nav />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--black)' }}>
        {/* Grid */}
        <div className="grid-bg absolute inset-0 pointer-events-none" />

        {/* Glows */}
        <div className="absolute pointer-events-none" style={{ width: '50vw', height: '50vh', top: '20%', left: '25%', background: 'radial-gradient(ellipse, rgba(26,111,240,0.15) 0%, transparent 65%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-xl mx-auto px-8 text-center py-32">
          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center animate-badge-pulse"
              style={{ background: 'linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)', boxShadow: '0 8px 40px var(--blue-glow)' }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex justify-center mb-4"
          >
            <span className="label">{t.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg leading-relaxed mb-10"
            style={{ color: 'var(--white-70)', fontFamily: 'var(--font-body)' }}
          >
            {t.subtitle}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://wa.me/972522424677"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              style={{ fontFamily: 'var(--font-body)', background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)', boxShadow: '0 4px 28px rgba(37,211,102,0.25)' }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              {t.whatsapp}
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--white-70)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              {t.home}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <LangProvider>
      <ThankYouContent />
    </LangProvider>
  );
}
