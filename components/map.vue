<template>
  <iframe
    referrerpolicy="no-referrer-when-downgrade"
    :src="`https://www.google.com/maps/embed/v1/view?key=AIzaSyB9I_bNgL2qV_vM91h1tVCnaGQECzf4sPU
    &zoom=11&language=es&center=${lat},${lng}&maptype=roadmap`"
    class="w-full h-full rounded-md"
    allowfullscreen
  >
  </iframe>
</template>

<script setup>
import { STATES } from '~/constants'

const [lat, lng] = useState(STATES.location).value.split('/')
</script>
