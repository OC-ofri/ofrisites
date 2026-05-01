'use client';

import { useLang } from '@/context/LangContext';

const content = {
  en: { links: ['Services', 'Portfolio', 'Pricing', 'Contact'], copy: 'All rights reserved.' },
  he: { links: ['שירותים', 'עבודות', 'מחירים', 'צור קשר'], copy: 'כל הזכויות שמורות.' },
};

const hrefs = ['#services', '#portfolio', '#pricing', '#contact'];

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', color: '#fff' }}>
            OK<span style={{ color: 'var(--blue)' }}>AI</span>
          </span>
          <p
            className="text-center text-xs"
            style={{
              fontFamily: 'var(--font-mono)',
              background: 'linear-gradient(90deg, #92400e 0%, #b45309 30%, #d97706 55%, #b45309 80%, #92400e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            © {year} OKAI Agency {t.copy}
          </p>
          <div className="flex items-center gap-6">
            {t.links.map((l, i) => (
              <a key={l} href={hrefs[i]} className="text-xs transition-colors duration-200 hover:text-white/65" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.28)' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
