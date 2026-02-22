"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "fr" | "en";

type LanguageContextType = {
  lang: Language;
  setLanguage: (l: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("fr");

  useEffect(() => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
      if (stored === "en" || stored === "fr") {
        setLang(stored as Language);
      } else if (typeof navigator !== "undefined" && navigator.language?.startsWith("en")) {
        setLang("en");
      }
    } catch (_) {
      // ignore storage errors
    }
  }, []);

  const setLanguage = (l: Language) => {
    setLang(l);
    try {
      if (typeof window !== "undefined") localStorage.setItem("lang", l);
    } catch (_) {
      // ignore storage errors
    }
  };

  const toggleLanguage = () => setLanguage(lang === "fr" ? "en" : "fr");

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);