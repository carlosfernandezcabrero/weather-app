<template>
  <section class="flex flex-col lg:flex-row gap-y-8 gap-x-8">
    <LocationInfo :location-string="locationString" />
    <CurrentDayInfo v-bind="data" />
  </section>
</template>

<script setup>
import { STATES } from '~/constants'

const [lat, lng] = useState(STATES.location).value.split('/')

const { data } = await useFetch(`/api/current?lat=${lat}&lng=${lng}`)
const { location: locationString } = data.value
</script>
