import og from './og'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  css: ['~/assets/css/main.css'],
  pages: true,
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    vueI18n: './i18n.config.js',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    }
  },

  runtimeConfig: {
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    }
  },

  app: {
    head: {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`
        }
      ],
      meta: Object.entries(og).map(([key, value]) => ({
        name: key,
        content: value
      }))
    }
  }
})
