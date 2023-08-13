<template>
  <li
    class="rounded-md border border-border shadow-lg hover:bg-background sm:w-56 active:scale-105"
    :class="[
      selectedDay === index ? 'bg-background text-neutral-200' : 'bg-primary'
    ]"
  >
    <button
      class="flex flex-col items-center p-4 w-full"
      @click="selectedDay = index"
    >
      <h4 class="text-center">
        <template v-if="todayEpoch === dayInfo.dateEpoch">Hoy</template>
        <template v-else-if="todayEpoch + 86400 === dayInfo.dateEpoch">
          Mañana
        </template>
        <template v-else>{{
          shortFormatDate(dayInfo.dateEpoch * 1000)
        }}</template>
      </h4>

      <div class="my-6">
        <img
          :src="`/images/${WEATHER_CODES[dayInfo.dayCondition.code]}.webp`"
          alt="day condition icon"
          class="object-contain object-center"
          height="80"
          width="80"
        />
      </div>

      <footer class="flex items-center gap-y-4 gap-x-10">
        <div class="flex flex-col items-center gap-y-2">
          <img
            src="/images/min-temp.webp"
            alt="maximum temperature"
            width="17"
            height="17"
          />
          <p class="text-center">
            {{
              getDisplayTemperature(
                tempUnit,
                dayInfo.minTempC,
                dayInfo.minTempF
              )
            }}
          </p>
        </div>
        <div class="flex flex-col items-center gap-y-2">
          <img
            src="/images/max-temp.webp"
            alt="maximum temperature"
            width="17"
            height="17"
          />
          <p class="text-center">
            {{
              getDisplayTemperature(
                tempUnit,
                dayInfo.maxTempC,
                dayInfo.maxTempF
              )
            }}
          </p>
        </div>
      </footer>
    </button>
  </li>
</template>

<script setup>
import { STATES, WEATHER_CODES } from '~/constants'
import { shortFormatDate } from '~/utils/datetime'

defineProps(['dayInfo', 'index'])

const selectedDay = useState(STATES.selectedDay)
const tempUnit = useState(STATES.temperatureUnit)

const today = new Date()
today.setUTCHours(0, 0, 0, 0)
const todayEpoch = today.getTime() / 1000
</script>
