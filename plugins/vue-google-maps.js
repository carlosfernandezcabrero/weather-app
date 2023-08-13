import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import VueGoogleMaps from 'vue-google-maps-community-fork'

export default defineNuxtPlugin((app) => {
  const { googleMapsApiKey } = useRuntimeConfig().public

  app.vueApp.use(VueGoogleMaps, {
    load: {
      key: googleMapsApiKey,
      language: 'es'
    }
  })
})
