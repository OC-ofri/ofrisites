'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Navigation() {
  const { t, toggleLanguage, isRTL } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    if (pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A5FBF] to-[#3449a8] flex items-center justify-center shadow-lg shadow-[#4A5FBF]/20 group-hover:shadow-[#4A5FBF]/40 transition-all duration-300">
                <span className="text-white font-black text-xs tracking-tight">OK</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">OKAI</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/') ? 'text-[#7080d4]' : 'text-white/65 hover:text-white'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/bundles"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/bundles') ? 'text-[#7080d4]' : 'text-white/65 hover:text-white'
                }`}
              >
                {t('nav.services')}
              </Link>
              <button
                onClick={handleContactClick}
                className="text-sm font-medium text-white/65 hover:text-white transition-colors duration-200"
              >
                {t('nav.contact')}
              </button>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 text-xs font-bold rounded-lg border border-white/15 text-white/70 hover:text-white hover:border-[#4A5FBF] hover:bg-[#4A5FBF]/10 transition-all duration-200 tracking-widest"
                aria-label="Toggle language"
              >
                {t('nav.langToggle')}
              </button>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-white block origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-white block"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-white block origin-center"
                />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="mobile-menu-panel"
              initial={{ x: isRTL ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center gap-2 mb-10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A5FBF] to-[#3449a8] flex items-center justify-center">
                  <span className="text-white font-black text-xs">OK</span>
                </div>
                <span className="font-bold text-lg text-white">OKAI</span>
              </div>

              <nav className="flex flex-col gap-2">
                {[
                  { label: t('nav.home'), href: '/' },
                  { label: t('nav.services'), href: '/bundles' },
                ].map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive(item.href)
                          ? 'bg-[#4A5FBF]/20 text-[#7080d4] border border-[#4A5FBF]/30'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <button
                    onClick={handleContactClick}
                    className="w-full text-start flex items-center px-4 py-3 rounded-xl text-base font-semibold text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {t('nav.contact')}
                  </button>
                </motion.div>
              </nav>

              <div className="mt-8 pt-8 border-t border-white/10">
                <button
                  onClick={() => { toggleLanguage(); closeMenu(); }}
                  className="w-full py-3 rounded-xl border border-white/15 text-white/60 hover:text-white hover:border-[#4A5FBF]/50 font-semibold text-sm transition-all"
                >
                  {t('nav.langToggle')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
