import messagesEn from './locales/en'
import messagesFr from './locales/fr'
import messagesAr from './locales/ar'

export default {
  legacy: false,
  locale: 'en',
  allowComposition: true,
  globalInjection: true,
  fallbackLocale: 'en',
  messages: {
    en: messagesEn,
    fr: messagesFr,
    ar: messagesAr
  }
}
