<template>
  <Panel class="flex-1">
    <PanelTitle>{{ longFormatDate(lastUpdated) }}</PanelTitle>

    <ul class="flex flex-col sm:flex-row sm:items-end sm:gap-x-20 gap-y-8">
      <li>
        <img
          :src="`/images/${WEATHER_CODES[dayCondition.code]}.webp`"
          alt="imagen clima"
          height="100"
          width="100"
          class="mx-auto"
        />
        <h4 class="mt-1 text-center">{{ dayCondition.text }}</h4>
      </li>
      <li>
        <p class="text-5xl text-neutral-100/90 text-center">
          {{ getDisplayTemperature(tempUnit, feelsLikeC, feelsLikeF) }}
        </p>
        <h4 class="text-center mt-1 sm:mt-8">Sensación térmica</h4>
      </li>
    </ul>

    <div>
      <p>Humedad: {{ humidity }} %</p>
      <p>Viento: {{ wind }} km/h</p>
      <p>Dirección del viento: {{ windDirection }}</p>
      <p>Cantidad de precipitaciones: {{ precipMm }} mm</p>
    </div>
  </Panel>
</template>

<script setup>
import { STATES, WEATHER_CODES } from '~/constants'
import { longFormatDate } from '~/utils/datetime'

defineProps([
  'lastUpdated',
  'dayCondition',
  'feelsLikeC',
  'feelsLikeF',
  'humidity',
  'wind',
  'windDirection',
  'precipMm'
])

const tempUnit = useState(STATES.temperatureUnit)
</script>
