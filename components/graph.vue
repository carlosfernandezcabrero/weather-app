<template>
  <div class="w-full text-center">
    <select
      class="bg-background text-highlight pl-4 rounded-md mb-6"
      v-model="graphSelected"
    >
      <option v-for="[key, data] in Object.entries(graphs)" :value="key">
        {{ data.label }}
      </option>
    </select>

    <LinearChart :labels="graphLabels" :graphConfig="graphs[graphSelected]" />
  </div>
</template>

<script setup>
import { STATES } from '~/constants'

const { hours } = defineProps(['hours'])

const tempUnit = useState(STATES.temperatureUnit)
const graphSelected = ref('temperature')

const graphLabels = hours.map(({ time }) => time.split(' ')[1])
const graphs = computed(() => ({
  temperature: {
    label: 'Temperatura ambiente',
    data: () =>
      hours.map(({ feelsLikeC, feelsLikeF }) =>
        tempUnit.value === 'c' ? feelsLikeC : feelsLikeF
      ),
    y: (value) => `${value}º${tempUnit.value.toUpperCase()}`,
    tooltip: ({ raw }) =>
      `Temperatura ambiente: ${raw}º${tempUnit.value.toUpperCase()}`
  },
  rain: {
    label: 'Probabilidad de lluvia',
    data: () => hours.map(({ chanceOfRain }) => chanceOfRain),
    y: (value) => `${value}%`,
    tooltip: ({ raw }) => `Probabilidad de lluvia: ${raw}%`
  },
  snow: {
    label: 'Probabilidad de nieve',
    data: () => hours.map(({ chanceOfSnow }) => chanceOfSnow),
    y: (value) => `${value}%`,
    tooltip: ({ raw }) => `Probabilidad de nieve: ${raw}%`
  },
  humidity: {
    label: 'Humedad',
    data: () => hours.map(({ humidity }) => humidity),
    y: (value) => `${value}%`,
    tooltip: ({ raw }) => `Humedad: ${raw}%`
  },
  wind: {
    label: 'Velocidad del viento',
    data: () => hours.map(({ windKph }) => windKph),
    y: (value) => `${value} km/h`,
    tooltip: ({ raw }) => `Velocidad del viento: ${raw} km/h`
  }
}))
</script>
