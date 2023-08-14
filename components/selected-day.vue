<template>
  <transition name="slide-fade" mode="out-in">
    <Panel :key="dateEpoch">
      <PanelTitle>
        {{ mediumFormatDate(dateEpoch * 1000) }}
      </PanelTitle>

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
            :value="getDisplayTemperature(tempUnit, avgTempC, avgTempF)"
            label="Temperatura media"
          />
        </li>
      </ul>

      <ul class="flex flex-col gap-y-2 md:flex-row md:gap-x-8">
        <li>
          <p>
            Temperatura maxima:
            <span>{{
              getDisplayTemperature(tempUnit, maxTempC, maxTempF)
            }}</span>
          </p>
          <p>
            Temperatura minima:
            <span>{{
              getDisplayTemperature(tempUnit, minTempC, minTempF)
            }}</span>
          </p>
        </li>
        <li>
          <p>
            Probabilidad de lluvia:
            <span>{{ chanceOfRain }} %</span>
          </p>
          <p>
            Probabilidad de nieve:
            <span>{{ chanceOfSnow }} %</span>
          </p>
        </li>
        <li>
          <p>
            Viento: <span>{{ maxWind }} km/h</span>
          </p>
          <p>
            Humedad: <span>{{ humidity }} %</span>
          </p>
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
