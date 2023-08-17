// eslint-disable-next-line no-undef
export default defineI18nConfig(() => ({
  legacy: false,
  locale: ['en', 'es'],
  defaultLocale: 'es',

  messages: {
    'en-US': {
      forecast: {
        'next-three-days': 'Next three days'
      }
    },
    es: {
      forecast: {
        'next-three-days': 'Próximos tres días'
      }
    }
  }
}))
