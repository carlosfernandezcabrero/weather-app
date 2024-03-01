<template>
  <iframe
    referrerpolicy="no-referrer-when-downgrade"
    :src="`https://www.google.com/maps/embed/v1/view?key=${$config.public.googleMapsApiKey}
    &zoom=11&language=es&center=${weatherDataStore.getLocationCoords}&maptype=roadmap`"
    class="w-full h-full rounded-md"
    allowfullscreen
  >
  </iframe>
</template>

<script setup>
import { useWeatherDataStore } from '~/store'

const weatherDataStore = useWeatherDataStore()
</script>
