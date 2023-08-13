<template>
  <PageHeader />

  <main role="main" class="mt-6">
    <div v-if="location" class="flex flex-col gap-y-24">
      <CurrentDaySection />
      <Forecast />
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center flex-1 animate-pulse"
    >
      <div class="waveform">
        <div class="waveform__bar"></div>
        <div class="waveform__bar"></div>
        <div class="waveform__bar"></div>
        <div class="waveform__bar"></div>
      </div>
      <p class="mt-5 text-xl">Cargando los datos</p>
    </div>
  </main>

  <footer class="py-12"></footer>
</template>

<script setup>
import { STATES } from '~/constants'

const location = useState(STATES.location, () => '')

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      location.value = `${latitude}/${longitude}`
    },
    () => {
      location.value = `${35.652832}/${139.839478}`
    }
  )
})
</script>

<style scoped>
.waveform {
  --uib-size: 60px;
  --uib-speed: 1.7s;
  --uib-color: #e5e5e5;
  --uib-line-weight: 3.5px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: var(--uib-size);
  height: calc(var(--uib-size) * 0.9);
}

.waveform__bar {
  width: var(--uib-line-weight);
  height: 100%;
  background-color: var(--uib-color);
}

.waveform__bar:nth-child(1) {
  animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.45)
    infinite;
}

.waveform__bar:nth-child(2) {
  animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.3)
    infinite;
}

.waveform__bar:nth-child(3) {
  animation: grow var(--uib-speed) ease-in-out calc(var(--uib-speed) * -0.15)
    infinite;
}

.waveform__bar:nth-child(4) {
  animation: grow var(--uib-speed) ease-in-out infinite;
}

@keyframes grow {
  0%,
  100% {
    transform: scaleY(0.3);
  }

  50% {
    transform: scaleY(1);
  }
}
</style>
