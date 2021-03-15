import en from '../lang/en-US'
import ru from '../lang/ru-RU'
import uz from '../lang/uz-UZ'

export const i18N = {
  locales: ['en', 'ru', 'uz'],
  defaultLocale: 'en',
  routes: {
    index: {
      en: '/',
      ru: '/',
      uz: '/',
    },
    admin: {
      en: '/admin',
      ru: '/admin',
      uz: '/admin',
    },
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ru, uz },
  },
}
