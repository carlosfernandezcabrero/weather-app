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
  modules: ['@nuxt/devtools'],
  plugins: ['~/plugins/vue-google-maps'],

  runtimeConfig: {
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    }
  },

  vite: {
    optimizeDeps: {
      include: ['fast-deep-equal']
    }
  },

  build: {
    transpile: ['vue-google-maps-community-fork', '@googlemaps/markerclusterer']
  }
})
