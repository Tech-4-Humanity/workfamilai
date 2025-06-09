
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language packs
import en from './locales/en.json';
import es from './locales/es.json';
import zh from './locales/zh.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';

export const supportedLanguages = {
  en: { name: 'English', flag: '🇺🇸', rtl: false },
  es: { name: 'Español', flag: '🇪🇸', rtl: false },
  zh: { name: '中文', flag: '🇨🇳', rtl: false },
  ar: { name: 'العربية', flag: '🇸🇦', rtl: true },
  fr: { name: 'Français', flag: '🇫🇷', rtl: false },
  de: { name: 'Deutsch', flag: '🇩🇪', rtl: false },
  ja: { name: '日本語', flag: '🇯🇵', rtl: false },
  ko: { name: '한국어', flag: '🇰🇷', rtl: false }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      zh: { translation: zh },
      ar: { translation: ar },
      fr: { translation: fr },
      de: { translation: de },
      ja: { translation: ja },
      ko: { translation: ko }
    },
    fallbackLng: 'en',
    debug: false,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    }
  });

export default i18n;
