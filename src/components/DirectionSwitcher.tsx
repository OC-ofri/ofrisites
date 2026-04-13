'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function DirectionSwitcher() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
  }, [language]);

  return null;
}
