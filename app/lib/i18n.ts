import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { enTranslations, koTranslations } from '~/locales'
import { COMMON_CONSTANT } from '~/shared/constants/common.constant'

const resources = {
  en: {
    translation: enTranslations
  },
  ko: {
    translation: koTranslations
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: COMMON_CONSTANT.LOCALES.KO,
    resources,
    fallbackLng: COMMON_CONSTANT.LOCALES.KO,
    debug: false,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
