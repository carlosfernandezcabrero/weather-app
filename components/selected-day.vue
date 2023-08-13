<template>
  <transition name="slide-fade" mode="out-in">
    <Panel :key="dateEpoch">
      <PanelTitle>
        {{ mediumFormatDate(dateEpoch * 1000) }}
      </PanelTitle>

      <ul class="flex justify-center items-end gap-x-20">
        <li class="text-center">
          <img
            :src="`/images/${WEATHER_CODES[dayCondition.code]}.webp`"
            alt="imagen clima"
            height="100"
            width="100"
            class="mx-auto"
          />
          <h4 class="mt-1">{{ dayCondition.text }}</h4>
        </li>
        <li class="text-center">
          <p class="text-5xl text-neutral-100/90">
            {{ getDisplayTemperature(tempUnit, avgTempC, avgTempF) }}
          </p>
          <h4 class="mt-8">Temperatura media del día</h4>
        </li>
      </ul>

      <ul class="flex justify-between gap-x-8">
        <li>
          <p>
            Temperatura maxima:
            {{ getDisplayTemperature(tempUnit, maxTempC, maxTempF) }}
          </p>
          <p>
            Temperatura minima:
            {{ getDisplayTemperature(tempUnit, minTempC, minTempF) }}
          </p>
        </li>
        <li>
          <p>Probabilidad de lluvia: {{ chanceOfRain }} %</p>
          <p>Probabilidad de nieve: {{ chanceOfSnow }} %</p>
        </li>
        <li>
          <p>Viento: {{ maxWind }} km/h</p>
          <p>Humedad: {{ humidity }} %</p>
        </li>
      </ul>

      <Graph :hours="hours" />
    </Panel>
  </transition>
</template>

<script setup>
import { STATES, WEATHER_CODES } from '~/constants'
import { mediumFormatDate } from '~/utils/datetime'

const { hours } = defineProps([
  'dayCondition',
  'dateEpoch',
  'maxTempC',
  'minTempC',
  'maxTempF',
  'minTempF',
  'chanceOfRain',
  'chanceOfSnow',
  'humidity',
  'maxWind',
  'avgTempC',
  'avgTempF',
  'hours'
])

const tempUnit = useState(STATES.temperatureUnit)
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(5px);
  opacity: 0.95;
}
</style>
