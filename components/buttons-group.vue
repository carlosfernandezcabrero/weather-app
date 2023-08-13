<template>
  <div class="flex items-center text-sm font-semibold">
    <button
      v-for="{ text, key } in buttons"
      :key="key"
      class="px-4 py-1 border-y border-border"
      :class="{
        'bg-highlight text-background': tempUnit === key
      }"
      @click="tempUnit = key"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { STATES } from '~/constants'

const { buttons } = defineProps(['buttons'])

const tempUnit = useState(STATES.temperatureUnit, () => buttons[0].key)
</script>

<style scoped>
button:first-child {
  @apply border-l rounded-l-md;
}

button:last-child {
  @apply border-r rounded-r-md;
}
</style>
