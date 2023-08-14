<template></template>

<script setup>
import { STATES } from '~/constants'

const [lat, lng] = useState(STATES.location).value.split('/')
const currentLocation = {
  lat: Number(lat),
  lng: Number(lng)
}

const marker = {
  position: currentLocation
}
</script>
