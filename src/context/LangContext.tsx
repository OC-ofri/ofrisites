'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Lang = 'en' | 'he';

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  isRTL: boolean;
}

const Ctx = createContext<LangCtx>({ lang: 'en', toggle: () => {}, isRTL: false });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'en' ? 'he' : 'en'));

  return (
    <Ctx.Provider value={{ lang, toggle, isRTL: lang === 'he' }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
