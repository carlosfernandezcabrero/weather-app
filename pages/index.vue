<template>
  <MainLoader v-if="!weatherDataStore.dataIsReady" :text="$t('loadingData')" />
  <div
    class="transition-all ease-out duration-700 transform"
    :class="[weatherDataStore.dataIsReady ? 'translate-y-0' : 'translate-y-12']"
  >
    <div v-if="weatherDataStore.dataIsReady">
      <CurrentDaySection />
      <LazyForecast />
    </div>
  </div>
</template>

<script setup>
import { useWeatherDataStore } from '~/store'

const weatherDataStore = useWeatherDataStore()
</script>
