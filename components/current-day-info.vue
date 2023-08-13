<template>
  <Panel class="flex-1">
    <PanelTitle>{{ longFormatDate(lastUpdated) }}</PanelTitle>

    <ul
      class="flex flex-col sm:flex-row gap-y-12 gap-x-20 justify-center items-center sm:items-end"
    >
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
        <p class="text-5xl text-neutral-100/90">
          {{ getDisplayTemperature(tempUnit, feelsLikeC, feelsLikeF) }}
        </p>
        <h4 class="mt-8 text-center">Sensación térmica</h4>
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
import { longFormatDate } from '~/utils/datetime'
import { STATES, WEATHER_CODES } from '~/constants'

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
