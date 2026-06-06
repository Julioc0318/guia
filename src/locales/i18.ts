import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import zhTranslation from './zh.json';
import esTranslation from './es.json';
import enTranslation from './en.json';
import ruTranslation from './ru.json';

i18n
  // 🚀 自动检测浏览器/系统语言
  .use(LanguageDetector)
  // 绑定 react-i18next
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zhTranslation },
      es: { translation: esTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
    fallbackLng: 'zh', // 检测失败时的兜底语言
    debug: false,
    interpolation: {
      escapeValue: false // React 自带防 XSS 攻击，无需二次转义
    }
  });

export default i18n;