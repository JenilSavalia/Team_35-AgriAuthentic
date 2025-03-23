// Farmer Dashboard/Frontend_Farmer/src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json"; 
import hiTranslation from "./locales/hi.json"; 
import guTranslation from "./locales/gu.json"; 

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      gu: { translation: guTranslation },
    },
    lng: "en", 
    fallbackLng: "en", 
    interpolation: { escapeValue: false }, 
  });

export default i18n;
