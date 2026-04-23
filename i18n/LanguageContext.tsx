import React, { createContext, useContext, useState, useCallback } from 'react';
import { Language, Translations, translations } from './translations';

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  t: translations.en,
  toggleLanguage: () => {},
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage for saved preference
    try {
      const saved = localStorage.getItem('synergy-lang');
      if (saved === 'si' || saved === 'ta') return saved as Language;
    } catch {}
    return 'en';
  });

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'en' ? 'si' : prev === 'si' ? 'ta' : 'en';
      try { localStorage.setItem('synergy-lang', next); } catch {}
      return next;
    });
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try { localStorage.setItem('synergy-lang', lang); } catch {}
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
