<template>
  <Panel class="flex-1">
    <header>
      <button
        class="mb-8 bg-background border border-border rounded-md px-4 py-2 text-white flex items-center gap-x-2 mx-auto"
        :class="{
          'opacity-50 cursor-not-allowed animate-pulse': isLoading
        }"
        @click="handleRefresh"
      >
        <img
          src="/images/refresh.svg"
          alt="refresh icon"
          height="24"
          width="24"
        />
        Refrescar
      </button>
      <PanelTitle>{{ longFormatDate(lastUpdated * 1000) }}</PanelTitle>
    </header>

    <ul class="flex flex-col sm:flex-row sm:items-end sm:gap-x-20 gap-y-8">
      <li>
        <SingleValueImage
          :label="dayCondition.text"
          :image-src="`/images/${WEATHER_CODES[dayCondition.code]}.webp`"
          image-alt="imagen clima"
          image-width="100"
          image-height="100"
        />
      </li>
      <li>
        <SingleValueText
          :value="getDisplayTemperature(tempUnit, feelsLikeC, feelsLikeF)"
          label="Sensación térmica"
        />
      </li>
    </ul>

    <ul class="flex flex-col sm:flex-row gap-y-2 gap-x-8">
      <li>
        <p>Viento: {{ wind }} km/h</p>
        <p>Dirección del viento: {{ windDirection }}</p>
      </li>
      <li>
        <p>Humedad: {{ humidity }} %</p>
        <p>Cantidad de precipitaciones: {{ precipMm }} mm</p>
      </li>
    </ul>
  </Panel>
</template>

<script setup>
import { STATES, WEATHER_CODES } from '~/constants'
import { useWeatherDataStore } from '~/store'
import { longFormatDate } from '~/utils/datetime'

const isLoading = ref(false)
const weatherDataStore = useWeatherDataStore()
const tempUnit = useState(STATES.temperatureUnit)

async function handleRefresh() {
  isLoading.value = true
  await weatherDataStore.refreshData()
  isLoading.value = false
}

const lastUpdated = computed(() => weatherDataStore.currentWeather.lastUpdated)
const dayCondition = computed(
  () => weatherDataStore.currentWeather.dayCondition
)
const feelsLikeC = computed(() => weatherDataStore.currentWeather.feelsLikeC)
const feelsLikeF = computed(() => weatherDataStore.currentWeather.feelsLikeF)
const humidity = computed(() => weatherDataStore.currentWeather.humidity)
const wind = computed(() => weatherDataStore.currentWeather.wind)
const windDirection = computed(
  () => weatherDataStore.currentWeather.windDirection
)
const precipMm = computed(() => weatherDataStore.currentWeather.precipMm)
</script>
