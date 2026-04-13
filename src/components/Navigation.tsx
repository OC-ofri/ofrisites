'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

function DesktopNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="relative group py-1.5 px-1">
      <span
        className={`text-[13px] font-semibold tracking-[0.07em] uppercase transition-all duration-300 ${
          active ? 'text-white' : 'text-white/40 group-hover:text-white/85'
        }`}
      >
        {children}
      </span>
      {/* Hover/active underline */}
      <span
        className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500 ${
          active
            ? 'opacity-100 bg-gradient-to-r from-transparent via-[#7080d4] to-transparent'
            : 'opacity-0 w-0 group-hover:opacity-60 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-white/40 group-hover:to-transparent'
        }`}
        style={active ? {} : { width: active ? '100%' : undefined }}
      />
      {/* Active glow dot */}
      {active && (
        <motion.span
          layoutId="nav-active-dot"
          className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#7080d4]"
          style={{ boxShadow: '0 0 8px 3px rgba(112,128,212,0.65)' }}
        />
      )}
    </Link>
  );
}

function LogoIcon() {
  return (
    <div className="relative w-9 h-9 shrink-0">
      {/* Hover glow behind icon */}
      <div className="absolute inset-0 rounded-xl bg-[#4A5FBF]/40 blur-xl scale-[1.6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {/* Icon */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#5b70d8] via-[#4A5FBF] to-[#293da0] flex items-center justify-center overflow-hidden shadow-lg shadow-[#4A5FBF]/20 group-hover:shadow-[#4A5FBF]/50 transition-shadow duration-400">
        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 -skew-x-12 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
          initial={{ x: '-150%' }}
          animate={{ x: '260%' }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5.5, ease: 'linear' }}
        />
        <span className="relative z-10 text-white font-black text-[10px] tracking-[0.2em]">OK</span>
      </div>
    </div>
  );
}

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
    return () => {
      document.body.style.overflow = '';
    };
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

  const mobileLinks = [
    { label: t('nav.home'), href: '/', num: '01' },
    { label: t('nav.services'), href: '/bundles', num: '02' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass' : ''
        }`}
      >
        {/* Iridescent bottom border on scroll */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(74,95,191,0.4) 25%, rgba(112,128,212,0.75) 50%, rgba(74,95,191,0.4) 75%, transparent 100%)',
              }}
            />
          )}
        </AnimatePresence>

        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <LogoIcon />
              <div className="flex flex-col leading-none">
                <span className="font-black text-[15px] text-white tracking-[0.16em] leading-none">OKAI</span>
                <span className="text-[7.5px] text-white/22 tracking-[0.32em] font-semibold uppercase mt-[3px] leading-none">
                  Studio
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <DesktopNavLink href="/" active={isActive('/')}>
                {t('nav.home')}
              </DesktopNavLink>
              <DesktopNavLink href="/bundles" active={isActive('/bundles')}>
                {t('nav.services')}
              </DesktopNavLink>
              <button
                onClick={handleContactClick}
                className="relative group py-1.5 px-1 text-[13px] font-semibold tracking-[0.07em] uppercase text-white/40 hover:text-white/85 transition-colors duration-300"
              >
                {t('nav.contact')}
                <span
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
                />
              </button>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Language toggle */}
              <motion.button
                onClick={toggleLanguage}
                whileTap={{ scale: 0.96 }}
                className="relative px-3.5 py-1.5 text-[10px] font-bold rounded-lg tracking-[0.24em] text-white/45 hover:text-white transition-colors duration-300 overflow-hidden group"
                style={{ border: '1px solid rgba(255,255,255,0.09)' }}
                aria-label="Toggle language"
              >
                {/* Hover fill */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(74,95,191,0.1), rgba(74,95,191,0.05))' }}
                />
                {/* Bottom accent */}
                <span
                  className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(74,95,191,0.55), transparent)' }}
                />
                <span className="relative">{t('nav.langToggle')}</span>
              </motion.button>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="w-5 h-[1.5px] bg-white block origin-center rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.18 }}
                  className="w-5 h-[1.5px] bg-white/55 block rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="w-5 h-[1.5px] bg-white block origin-center rounded-full"
                />
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />

            <motion.div
              className="mobile-menu-panel"
              style={{ display: 'flex', flexDirection: 'column' }}
              initial={{ x: isRTL ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 290 }}
            >
              {/* Ambient glow in corner */}
              <div
                className="absolute -top-8 pointer-events-none"
                style={{
                  left: isRTL ? 'auto' : '-2rem',
                  right: isRTL ? '-2rem' : 'auto',
                  width: '14rem',
                  height: '14rem',
                  background: 'radial-gradient(circle, rgba(74,95,191,0.13) 0%, transparent 70%)',
                  borderRadius: '50%',
                }}
              />

              {/* Logo in panel */}
              <div className="relative flex items-center gap-3 mb-12">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5b70d8] via-[#4A5FBF] to-[#293da0] flex items-center justify-center shadow-lg shadow-[#4A5FBF]/25">
                  <span className="text-white font-black text-[10px] tracking-[0.2em]">OK</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-black text-[15px] text-white tracking-[0.16em] leading-none">OKAI</span>
                  <span className="text-[7.5px] text-white/22 tracking-[0.32em] font-semibold uppercase mt-[3px] leading-none">Studio</span>
                </div>
              </div>

              {/* Nav links — numbered */}
              <nav className="relative flex flex-col gap-0.5">
                {/* Vertical accent line */}
                <div
                  className="absolute top-2 bottom-2 w-px pointer-events-none"
                  style={{
                    left: isRTL ? 'auto' : 0,
                    right: isRTL ? 0 : 'auto',
                    background: 'linear-gradient(to bottom, rgba(74,95,191,0.65), rgba(74,95,191,0.12), transparent)',
                  }}
                />

                {mobileLinks.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`group flex items-center gap-4 ps-5 pe-4 py-4 rounded-xl transition-all duration-300 ${
                        isActive(item.href) ? 'text-white' : 'text-white/38 hover:text-white'
                      }`}
                      style={
                        isActive(item.href)
                          ? {
                              background: 'rgba(74,95,191,0.11)',
                              border: '1px solid rgba(74,95,191,0.18)',
                            }
                          : {}
                      }
                    >
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#4A5FBF] opacity-55 group-hover:opacity-100 transition-opacity shrink-0">
                        {item.num}
                      </span>
                      <span className="text-[22px] font-bold tracking-tight leading-none">{item.label}</span>
                      {isActive(item.href) && (
                        <span
                          className="ms-auto w-[5px] h-[5px] rounded-full bg-[#7080d4] shrink-0"
                          style={{ boxShadow: '0 0 8px 3px rgba(112,128,212,0.55)' }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={handleContactClick}
                    className="group w-full flex items-center gap-4 ps-5 pe-4 py-4 rounded-xl text-white/38 hover:text-white transition-all duration-300"
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#4A5FBF] opacity-55 group-hover:opacity-100 transition-opacity shrink-0">
                      03
                    </span>
                    <span className="text-[22px] font-bold tracking-tight leading-none">{t('nav.contact')}</span>
                  </button>
                </motion.div>
              </nav>

              {/* Bottom — language toggle */}
              <motion.div
                className="mt-auto pt-8"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
              >
                <div
                  className="mb-5 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02) 60%, transparent)',
                  }}
                />
                <button
                  onClick={() => {
                    toggleLanguage();
                    closeMenu();
                  }}
                  className="w-full py-3 rounded-xl text-white/32 hover:text-white font-bold text-[10px] tracking-[0.24em] uppercase transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {t('nav.langToggle')}
                </button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
