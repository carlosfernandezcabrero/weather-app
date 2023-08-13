<template>
  <GMapMap
    :center="currentLocation"
    :zoom="12"
    map-type-id="terrain"
    class="w-full"
    style="border-radius: 4px"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :draggable="true"
      />
    </GMapCluster>
  </GMapMap>
</template>

<script setup>
import { STATES } from '~/constants'

const [lat, lng] = useState(STATES.location).value.split('/')
const currentLocation = {
  lat: Number(lat),
  lng: Number(lng)
}

const markers = [
  {
    position: currentLocation
  }
]
</script>
