'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] border-t border-white/5 py-12 lg:py-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#4A5FBF] to-[#3449a8] flex items-center justify-center shadow-md group-hover:shadow-[#4A5FBF]/30 transition-shadow">
                <span className="text-white font-black text-xs tracking-tight">OK</span>
              </div>
              <span className="font-bold text-white/90 group-hover:text-white transition-colors text-lg">
                OKAI
              </span>
            </Link>
            <p className="text-white/30 text-sm">{t('footer.tagline')}</p>
          </div>

          {/* Links */}
          <nav className="flex items-center justify-center gap-6">
            <Link href="/" className="text-white/40 hover:text-white/80 text-sm transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/bundles" className="text-white/40 hover:text-white/80 text-sm transition-colors">
              {t('nav.services')}
            </Link>
            <a
              href="https://wa.me/972522424677"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 text-sm transition-colors"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-white/20 text-xs text-center">
            &copy; {year} OKAI. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
