<template>
  <transition name="slide-fade" mode="out-in">
    <Panel :key="day.dateEpoch">
      <PanelTitle>
        {{ mediumFormatDate(day.dateEpoch * 1000, weatherDataStore.language) }}
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
            :label="$t('medium-temperature')"
          />
        </li>
      </ul>

      <ul class="flex flex-col gap-y-2 md:flex-row md:gap-x-8">
        <li>
          <p>
            {{ $t('max-temperature') }}:
            <span>{{
              getDisplayTemperature(tempUnit, day.maxTempC, day.maxTempF)
            }}</span>
          </p>
          <p>
            {{ $t('min-temperature') }}:
            <span>{{
              getDisplayTemperature(tempUnit, day.minTempC, day.minTempF)
            }}</span>
          </p>
        </li>
        <li>
          <p>
            {{ $t('probability-of-rain') }}:
            <span>{{ day.chanceOfRain }} %</span>
          </p>
          <p>
            {{ $t('probability-of-snow') }}:
            <span>{{ day.chanceOfSnow }} %</span>
          </p>
        </li>
        <li>
          <p>
            {{ $t('wind') }}: <span>{{ day.maxWind }} km/h</span>
          </p>
          <p>
            {{ $t('humidity') }}: <span>{{ day.humidity }} %</span>
          </p>
        </li>
      </ul>

      <TimeCards />

      <SelectedDayGraph />
    </Panel>
  </transition>
</template>

<script setup>
import { STATES, WEATHER_CODES } from '~/constants'
import { useWeatherDataStore } from '~/store'

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
