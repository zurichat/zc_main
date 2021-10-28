/* eslint-disable no-console */
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
//import Backend from "i18next-http-backend"

import { TRANSLATIONS_EN } from "./locales/en/translations"
import { TRANSLATIONS_DE } from "./locales/de/translations"
import { TRANSLATIONS_FR } from "./locales/fr/translations"
import { TRANSLATIONS_ZH } from "./locales/zh/translations"
import { getTranslations } from "./translator"

const resources = getTranslations()

i18n
  //.use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: resources
  })

const lang = localStorage.getItem("myLanguage")
  ? localStorage.getItem("myLanguage")
  : "en"
i18n.changeLanguage(lang)
//console.log(lang)

export default i18n
