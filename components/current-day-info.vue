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
