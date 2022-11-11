import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationDictionary from "./translation-dictionary";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: translationDictionary
  });

const lang = localStorage.getItem("myLanguage")
  ? localStorage.getItem("myLanguage")
  : "en";
i18n.changeLanguage(lang);

export default i18n;
