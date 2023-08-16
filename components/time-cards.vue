<template>
  <section class="w-full">
    <h4 class="text-center mb-6 text-2xl text-highlight font-semibold">
      Previsión por hora
    </h4>

    <ul class="flex gap-x-2 overflow-x-scroll w-full">
      <TimeCard v-for="time in timeline" :key="time.time" :time-info="time" />
    </ul>
  </section>
</template>

<script setup>
import { STATES } from '~/constants'
import { useWeatherDataStore } from '~/store'

const weatherDataStore = useWeatherDataStore()
const selectedDay = useState(STATES.selectedDay)

const timeline = computed(
  () => weatherDataStore.getDayData(selectedDay.value).hours
)
</script>
