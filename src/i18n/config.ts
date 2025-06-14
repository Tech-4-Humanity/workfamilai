
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

// Enhanced supported languages with additional language codes and rtl support
export const supportedLanguages = {
  en: { name: 'English', flag: '🇺🇸', nativeName: 'English', rtl: false },
  es: { name: 'Spanish', flag: '🇪🇸', nativeName: 'Español', rtl: false },
  fr: { name: 'French', flag: '🇫🇷', nativeName: 'Français', rtl: false },
  de: { name: 'German', flag: '🇩🇪', nativeName: 'Deutsch', rtl: false },
  zh: { name: 'Chinese', flag: '🇨🇳', nativeName: '中文', rtl: false },
  ja: { name: 'Japanese', flag: '🇯🇵', nativeName: '日本語', rtl: false },
  ko: { name: 'Korean', flag: '🇰🇷', nativeName: '한국어', rtl: false },
  ar: { name: 'Arabic', flag: '🇸🇦', nativeName: 'العربية', rtl: true },
  // Additional language codes that might be used in cultural profiles
  hi: { name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी', rtl: false },
  ur: { name: 'Urdu', flag: '🇵🇰', nativeName: 'اردو', rtl: true },
  pt: { name: 'Portuguese', flag: '🇵🇹', nativeName: 'Português', rtl: false },
  ru: { name: 'Russian', flag: '🇷🇺', nativeName: 'Русский', rtl: false },
  it: { name: 'Italian', flag: '🇮🇹', nativeName: 'Italiano', rtl: false },
  nl: { name: 'Dutch', flag: '🇳🇱', nativeName: 'Nederlands', rtl: false },
  pl: { name: 'Polish', flag: '🇵🇱', nativeName: 'Polski', rtl: false },
  tr: { name: 'Turkish', flag: '🇹🇷', nativeName: 'Türkçe', rtl: false },
  sv: { name: 'Swedish', flag: '🇸🇪', nativeName: 'Svenska', rtl: false },
  no: { name: 'Norwegian', flag: '🇳🇴', nativeName: 'Norsk', rtl: false },
  da: { name: 'Danish', flag: '🇩🇰', nativeName: 'Dansk', rtl: false },
  fi: { name: 'Finnish', flag: '🇫🇮', nativeName: 'Suomi', rtl: false },
  ca: { name: 'Catalan', flag: '🏴󠁥󠁳󠁣󠁴󠁿', nativeName: 'Català', rtl: false },
  ig: { name: 'Igbo', flag: '🇳🇬', nativeName: 'Igbo', rtl: false },
  yo: { name: 'Yoruba', flag: '🇳🇬', nativeName: 'Yorùbá', rtl: false }
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
