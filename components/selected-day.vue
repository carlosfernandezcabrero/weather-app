<template>
  <transition name="slide-fade" mode="out-in">
    <Panel :key="day.dateEpoch">
      <PanelTitle>
        {{ mediumFormatDate(day.dateEpoch * 1000) }}
      </PanelTitle>

      <ul class="flex flex-col sm:flex-row sm:items-end sm:gap-x-20 gap-y-8">
        <li>
          <SingleValueImage
            :label="day.dayCondition.text"
            :image-src="`/images/${WEATHER_CODES[day.dayCondition.code]}.webp`"
            image-alt="imagen clima"
            image-width="100"
            image-height="100"
          />
        </li>
        <li>
          <SingleValueText
            :value="getDisplayTemperature(tempUnit, day.avgTempC, day.avgTempF)"
            label="Temperatura media"
          />
        </li>
      </ul>

      <ul class="flex flex-col gap-y-2 md:flex-row md:gap-x-8">
        <li>
          <p>
            Temperatura maxima:
            <span>{{
              getDisplayTemperature(tempUnit, day.maxTempC, day.maxTempF)
            }}</span>
          </p>
          <p>
            Temperatura minima:
            <span>{{
              getDisplayTemperature(tempUnit, day.minTempC, day.minTempF)
            }}</span>
          </p>
        </li>
        <li>
          <p>
            Probabilidad de lluvia:
            <span>{{ day.chanceOfRain }} %</span>
          </p>
          <p>
            Probabilidad de nieve:
            <span>{{ day.chanceOfSnow }} %</span>
          </p>
        </li>
        <li>
          <p>
            Viento: <span>{{ day.maxWind }} km/h</span>
          </p>
          <p>
            Humedad: <span>{{ day.humidity }} %</span>
          </p>
        </li>
      </ul>

      <SelectedDayGraph />
    </Panel>
  </transition>
</template>

<script setup>
import { STATES, WEATHER_CODES } from '~/constants'
import { useWeatherDataStore } from '~/store'
import SelectedDayGraph from './selected-day-graph.vue'

const tempUnit = useState(STATES.temperatureUnit)
const selectedDay = useState(STATES.selectedDay)
const weatherDataStore = useWeatherDataStore()

const day = computed(() => weatherDataStore.getDayData(selectedDay.value))
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
