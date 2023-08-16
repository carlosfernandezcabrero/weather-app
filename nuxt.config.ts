const DESCRIPTION =
  'Aplicación para consultar el tiempo de cualquier ciudad del mundo en el momento actual y en los próximos 3 días'
const URL = 'https://weather-app-omega-amber.vercel.app'
const TITLE = 'Weather App - Aplicación para consultar el tiempo'
const IMAGE = '/og-image.svg'

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
  modules: ['@nuxt/devtools', '@pinia/nuxt'],

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
      meta: [
        {
          name: 'og:image',
          content: IMAGE
        },
        {
          name: 'twitter:image',
          content: IMAGE
        },
        {
          name: 'og:title',
          content: TITLE
        },
        {
          name: 'twitter:title',
          content: TITLE
        },
        {
          name: 'description',
          content: DESCRIPTION
        },
        {
          name: 'og:description',
          content: DESCRIPTION
        },
        {
          name: 'twitter:description',
          content: DESCRIPTION
        },
        {
          name: 'twitter:url',
          content: URL
        },
        {
          name: 'og:url',
          content: URL
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  }
})
