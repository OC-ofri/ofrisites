'use client';

import { useLanguage } from '@/context/LanguageContext';

export function Header() {
  const { language, toggleLanguage } = useLanguage();

  const content = {
    he: {
      logo: 'ofrisites',
      services: 'שירותים',
      about: 'אודות',
      contact: 'צור קשר',
    },
    en: {
      logo: 'ofrisites',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
  };

  const t = content[language];

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-900">
          {t.logo}
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-blue-900 transition">
            {t.services}
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-900 transition">
            {t.about}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-900 transition">
            {t.contact}
          </a>
        </div>

        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition text-sm"
        >
          {language === 'he' ? 'EN' : 'עברית'}
        </button>
      </nav>
    </header>
  );
}
