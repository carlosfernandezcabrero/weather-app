<template>
  <div class="w-full text-center">
    <select
      class="bg-background text-highlight pl-4 rounded-md mb-6"
      v-model="graphSelected"
    >
      <option v-for="[key, data] in Object.entries(graphs)" :value="key">
        {{ $t(data.label) }}
      </option>
    </select>

    <LinearChart :labels="graphLabels" :graphConfig="graphs[graphSelected]" />
  </div>
</template>

<script setup>
import { STATES } from '~/constants'
import { useWeatherDataStore } from '~/store'

const tempUnit = useState(STATES.temperatureUnit)
const selectedDay = useState(STATES.selectedDay)
const graphSelected = ref('temperature')
const weatherDataStore = useWeatherDataStore()

const hours = computed(
  () => weatherDataStore.getDayData(selectedDay.value).hours
)

const graphLabels = hours.value.map(({ time }) => time.split(' ')[1])
const graphs = computed(() => ({
  temperature: {
    label: 'ambient-temperature',
    data: () =>
      hours.value.map(({ feelsLikeC, feelsLikeF }) =>
        tempUnit.value === 'c' ? feelsLikeC : feelsLikeF
      ),
    y: (value) => `${value}º${tempUnit.value.toUpperCase()}`,
    tooltip: ({ raw }) => ` ${raw}º${tempUnit.value.toUpperCase()}`
  },
  rain: {
    label: 'probability-of-rain',
    data: () => hours.value.map(({ chanceOfRain }) => chanceOfRain),
    y: (value) => `${value}%`,
    tooltip: ({ raw }) => ` ${raw}%`
  },
  snow: {
    label: 'probability-of-snow',
    data: () => hours.value.map(({ chanceOfSnow }) => chanceOfSnow),
    y: (value) => `${value}%`,
    tooltip: ({ raw }) => ` ${raw}%`
  },
  humidity: {
    label: 'humidity',
    data: () => hours.value.map(({ humidity }) => humidity),
    y: (value) => `${value}%`,
    tooltip: ({ raw }) => ` ${raw}%`
  },
  wind: {
    label: 'wind-speed',
    data: () => hours.value.map(({ windKph }) => windKph),
    y: (value) => `${value} km/h`,
    tooltip: ({ raw }) => ` ${raw} km/h`
  }
}))
</script>
