<template>
  <li
    class="rounded-md border border-border shadow-lg hover:bg-background sm:w-56 active:scale-105"
    :class="[
      selectedDay === index ? 'bg-background text-neutral-200' : 'bg-primary'
    ]"
  >
    <button
      class="flex flex-col items-center justify-between p-4 w-full h-full gap-y-6"
      @click="selectedDay = index"
    >
      <div>
        <h4 class="text-center">
          <template v-if="todayEpoch === dayInfo.dateEpoch">Hoy</template>
          <template v-else-if="todayEpoch + 86400 === dayInfo.dateEpoch">
            Mañana
          </template>
          <template v-else>{{
            shortFormatDate(dayInfo.dateEpoch * 1000)
          }}</template>
        </h4>

        <div class="mt-6">
          <img
            :src="`/images/${WEATHER_CODES[dayInfo.dayCondition.code]}.webp`"
            alt="day condition icon"
            class="object-contain object-center mx-auto"
            height="80"
            width="80"
          />
          <p class="text-center mt-2">{{ dayInfo.dayCondition.text }}</p>
        </div>
      </div>

      <footer class="flex items-center gap-y-4 gap-x-10">
        <div class="flex flex-col items-center gap-y-2">
          <SingleValueImage
            :label="
              getDisplayTemperature(
                tempUnit,
                dayInfo.minTempC,
                dayInfo.minTempF
              )
            "
            image-src="/images/min-temp.webp"
            image-alt="minimum temperature"
            image-width="17"
            image-height="17"
          />
        </div>
        <div class="flex flex-col items-center gap-y-2">
          <SingleValueImage
            :label="
              getDisplayTemperature(
                tempUnit,
                dayInfo.maxTempC,
                dayInfo.maxTempF
              )
            "
            image-src="/images/max-temp.webp"
            image-alt="maximum temperature"
            image-width="17"
            image-height="17"
          />
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
