
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import frTranslations from './locales/fr.json';
import deTranslations from './locales/de.json';
import zhTranslations from './locales/zh.json';
import jaTranslations from './locales/ja.json';
import koTranslations from './locales/ko.json';
import arTranslations from './locales/ar.json';

// Enhanced supported languages with additional language codes
export const supportedLanguages = {
  en: { name: 'English', flag: '🇺🇸', nativeName: 'English' },
  es: { name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  fr: { name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  de: { name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  zh: { name: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
  ja: { name: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
  ko: { name: 'Korean', flag: '🇰🇷', nativeName: '한국어' },
  ar: { name: 'Arabic', flag: '🇸🇦', nativeName: 'العربية' },
  // Additional language codes that might be used in cultural profiles
  hi: { name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी' },
  ur: { name: 'Urdu', flag: '🇵🇰', nativeName: 'اردو' },
  pt: { name: 'Portuguese', flag: '🇵🇹', nativeName: 'Português' },
  ru: { name: 'Russian', flag: '🇷🇺', nativeName: 'Русский' },
  it: { name: 'Italian', flag: '🇮🇹', nativeName: 'Italiano' },
  nl: { name: 'Dutch', flag: '🇳🇱', nativeName: 'Nederlands' },
  pl: { name: 'Polish', flag: '🇵🇱', nativeName: 'Polski' },
  tr: { name: 'Turkish', flag: '🇹🇷', nativeName: 'Türkçe' },
  sv: { name: 'Swedish', flag: '🇸🇪', nativeName: 'Svenska' },
  no: { name: 'Norwegian', flag: '🇳🇴', nativeName: 'Norsk' },
  da: { name: 'Danish', flag: '🇩🇰', nativeName: 'Dansk' },
  fi: { name: 'Finnish', flag: '🇫🇮', nativeName: 'Suomi' }
} as const;

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations },
  zh: { translation: zhTranslations },
  ja: { translation: jaTranslations },
  ko: { translation: koTranslations },
  ar: { translation: arTranslations }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    }
  });

export default i18n;
