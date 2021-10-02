import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import i18n from 'i18next'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    react: {
      useSuspense: false
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    }
  })

export default i18n
