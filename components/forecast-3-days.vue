<template>
  <ul class="flex flex-col sm:flex-row gap-y-4 justify-center gap-x-10">
    <DayCard
      v-for="(day, index) in weatherDataStore.forecast"
      :key="day.dateEpoch"
      :dayInfo="day"
      :index="index"
    />
  </ul>
</template>

<script setup>
import { STATES } from '~/constants'
import { useWeatherDataStore } from '~/store'

useState(STATES.selectedDay, () => 0)
const weatherDataStore = useWeatherDataStore()
</script>
