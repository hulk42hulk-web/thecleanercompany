"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext({
  language: "nl",
  setLanguage: () => {},
  t: translations.nl,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("nl");

  useEffect(() => {
    // Check localStorage or URL param on mount
    try {
      const saved = localStorage.getItem("tcc_lang");
      if (saved === "en" || saved === "nl") {
        setLanguage(saved);
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get("lang");
        if (langParam === "en" || langParam === "nl") {
          setLanguage(langParam);
        }
      }
    } catch {
      // Fallback to default
    }
  }, []);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    try {
      localStorage.setItem("tcc_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  const t = translations[language] || translations.nl;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { language: "nl", setLanguage: () => {}, t: translations.nl };
  }
  return context;
}
