<template>
  <Panel class="flex-1">
    <PanelTitle>{{ longFormatDate(lastUpdated) }}</PanelTitle>

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

const weatherDataStore = useWeatherDataStore()
const tempUnit = useState(STATES.temperatureUnit)

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
