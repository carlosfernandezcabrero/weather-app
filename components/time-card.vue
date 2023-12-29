<template>
  <li
    :id="`time-card-${Number(hour.split(':')[0])}`"
    class="rounded-md border border-border shadow-lg bg-background p-4 w-44 shrink-0"
  >
    <h5 class="text-center">
      {{ hour }}
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
  timeInfo: { time }
} = defineProps(['timeInfo'])

const tempUnit = useState(STATES.temperatureUnit)

const hour = time.split(' ')[1]
</script>
