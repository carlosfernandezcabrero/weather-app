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
  modules: [
    '@nuxt/devtools',
    '@pinia/nuxt',
    ['@nuxtjs/i18n', { vueI18n: './i18n.config.js' }]
  ],

  runtimeConfig: {
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    }
  },

  app: {
    head: {
      script: [
        {
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB9I_bNgL2qV_vM91h1tVCnaGQECzf4sPU&libraries=places'
        }
      ],
      meta: Object.entries(og).map(([key, value]) => ({
        name: key,
        content: value
      }))
    }
  }
})
