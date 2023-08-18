<template>
  <PageHeader class="max-w-screen-xl w-full mx-auto" />

  <main
    role="main"
    class="mt-6 flex flex-col gap-y-24 max-w-screen-xl px-2 w-full mx-auto transition-all ease-out delay-100 duration-700 transform"
    :class="[
      weatherDataStore.isLocationSet
        ? 'translate-y-0 opacity-100'
        : 'translate-y-12 opacity-0'
    ]"
  >
    <CurrentDaySection v-if="weatherDataStore.isLocationSet" />
    <Forecast v-if="weatherDataStore.isLocationSet" />
  </main>

  <Footer />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useWeatherDataStore } from '~/store'

const i18nLocale = useI18n()
const weatherDataStore = useWeatherDataStore()

weatherDataStore.language = i18nLocale.locale.value

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      weatherDataStore.setLocation(latitude, longitude)
    },
    () => {
      weatherDataStore.setLocation(35.652832, 139.839478)
    }
  )
})
</script>
