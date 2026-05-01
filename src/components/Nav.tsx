'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/LangContext';

const navContent = {
  en: {
    links: [
      { label: 'Services', href: '#services', id: 'services' },
      { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
      { label: 'About', href: '#about', id: 'about' },
      { label: 'Pricing', href: '#pricing', id: 'pricing' },
      { label: 'Contact', href: '#contact', id: 'contact' },
    ],
    cta: 'Book a Call',
  },
  he: {
    links: [
      { label: 'שירותים', href: '#services', id: 'services' },
      { label: 'עבודות', href: '#portfolio', id: 'portfolio' },
      { label: 'אודות', href: '#about', id: 'about' },
      { label: 'מחירים', href: '#pricing', id: 'pricing' },
      { label: 'צור קשר', href: '#contact', id: 'contact' },
    ],
    cta: 'קביעת שיחה',
  },
};

const underlineVariants = {
  active: { scaleX: 1, opacity: 1 },
  inactive: { scaleX: 0, opacity: 0 },
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { lang, toggle, isRTL } = useLang();
  const t = navContent[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass border-b border-white/[0.04]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 lg:px-14">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.12em', color: '#fff' }}>
                OK<span style={{ color: 'var(--blue)' }}>AI</span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {t.links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="relative py-1 text-sm font-medium transition-colors duration-200"
                    style={{
                      color: isActive ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.45)',
                      letterSpacing: isRTL ? '0' : '0.02em',
                      fontFamily: 'var(--font-body)',
                    }}
                    initial="inactive"
                    whileHover="active"
                    animate={isActive ? 'active' : 'inactive'}
                  >
                    {link.label}
                    <motion.span
                      variants={underlineVariants}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute -bottom-0.5 left-0 w-full h-px"
                      style={{
                        background: 'linear-gradient(90deg, var(--blue), var(--violet))',
                        transformOrigin: isRTL ? 'right' : 'left',
                      }}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Right side: Lang toggle + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggle}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-white/10"
                style={{
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                aria-label="Switch language"
              >
                <span style={{ color: lang === 'en' ? 'var(--blue)' : 'rgba(255,255,255,0.35)' }}>EN</span>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                <span style={{ color: lang === 'he' ? 'var(--blue)' : 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-heebo)' }}>עב</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: 'linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)',
                  boxShadow: '0 2px 18px var(--blue-glow)',
                }}
              >
                {t.cta}
              </a>
            </div>

            {/* Mobile: lang toggle + hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={toggle}
                className="text-xs font-semibold px-2.5 py-1.5 rounded-lg"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {lang === 'en' ? 'עב' : 'EN'}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-white/60 hover:text-white"
                aria-label="Toggle navigation"
              >
                <div className="w-5 flex flex-col gap-[5px]">
                  <span className="block h-px bg-current transition-all duration-300" style={{ transform: mobileOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
                  <span className="block h-px bg-current transition-all duration-300" style={{ opacity: mobileOpen ? 0 : 1 }} />
                  <span className="block h-px bg-current transition-all duration-300" style={{ transform: mobileOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 nav-glass border-b border-white/[0.05] p-6 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {t.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-2 text-base font-medium border-b transition-colors hover:text-white"
                  style={{
                    color: activeSection === link.id ? 'white' : 'var(--white-70)',
                    borderColor: 'rgba(255,255,255,0.05)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 py-3.5 text-center rounded-xl font-semibold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)', fontFamily: 'var(--font-body)' }}
              >
                {t.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
