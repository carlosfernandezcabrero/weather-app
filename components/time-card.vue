<template>
  <li
    :id="`time-card-${hourNumber}`"
    class="rounded-md border border-border shadow-lg bg-background p-4 w-44 shrink-0"
    :class="{
      'bg-highlight/10': hourNumber === nowHour && dayNumber === nowDay
    }"
  >
    <h5 class="text-center">
      {{ time }}
    </h5>

    <div class="mt-6">
      <img
        :src="`/images/${WEATHER_CODES[timeInfo.condition.code]}.webp`"
        alt="hour condition icon"
        class="object-contain object-center mx-auto"
        height="70"
        width="70"
      />
      <p class="text-center mt-2">
        {{
          getDisplayTemperature(
            tempUnit,
            timeInfo.feelsLikeC,
            timeInfo.feelsLikeF
          )
        }}
      </p>
      <p class="text-center mt-1">{{ timeInfo.condition.text }}</p>
    </div>
  </li>
</template>

<script setup>
import { STATES, WEATHER_CODES } from '~/constants'

const {
  timeInfo: { time: datetime }
} = defineProps(['timeInfo'])

const tempUnit = useState(STATES.temperatureUnit)

const [date, time] = datetime.split(' ')

const dayNumber = Number(date.split('-')[2])
const hourNumber = Number(time.split(':')[0])

const now = new Date()
const nowHour = now.getHours()
const nowDay = now.getDate()
</script>
