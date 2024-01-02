<template>
  <section class="w-full">
    <h4 class="text-center mb-6 text-2xl text-highlight font-semibold">
      {{ $t('hourly-forecast') }}
    </h4>

    <ul class="flex gap-x-2 overflow-x-scroll w-full" id="time-cards-container">
      <TimeCard v-for="time in timeline" :key="time.time" :time-info="time" />
    </ul>
  </section>
</template>

<script setup>
import { STATES } from '~/constants'
import { useWeatherDataStore } from '~/store'

onMounted(() => {
  const now = new Date().getHours()

  const $timeCardsContainer = document.getElementById('time-cards-container')
  const $currentTimeCard = document.getElementById(`time-card-${now}`)

  const boundingTimeCardsContainer = $timeCardsContainer.getBoundingClientRect()
  const boundingCurrentTimeCard = $currentTimeCard.getBoundingClientRect()

  const sides =
    (boundingTimeCardsContainer.width - boundingCurrentTimeCard.width) / 2

  $timeCardsContainer.scrollTo(
    boundingCurrentTimeCard.left - sides - boundingTimeCardsContainer.left,
    0
  )
})

const weatherDataStore = useWeatherDataStore()
const selectedDay = useState(STATES.selectedDay)

const timeline = computed(
  () => weatherDataStore.getDayData(selectedDay.value).hours
)
</script>
