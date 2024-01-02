<template>
  <PageHeader class="max-w-screen-xl w-full mx-auto" />

  <main
    role="main"
    class="mt-6 flex flex-col gap-y-24 max-w-screen-xl px-2 w-full mx-auto"
  >
    <slot v-if="isLocationSet" />
    <MainLoader v-else :text="$t('detectingLocation')" />
  </main>

  <Footer />
</template>

<script setup>
import { useWeatherDataStore } from '../store'

const { locale, messages } = useI18n()
const isLocationSet = ref(false)
const weatherDataStore = useWeatherDataStore()

useHead({
  title: messages.value[locale.value].title,
  htmlAttrs: {
    lang: locale
  }
})

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      weatherDataStore.setLocation(latitude, longitude)
    },
    () => {
      weatherDataStore.setLocation(35.652832, 139.839478)
    }
  )

  isLocationSet.value = true
})

weatherDataStore.language = locale.value
</script>
