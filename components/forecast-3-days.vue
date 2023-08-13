<template>
  <ul class="flex flex-col md:flex-row gap-y-4 justify-center gap-x-12">
    <DayCard
      v-for="(day, index) in data"
      :key="day.dateEpoch"
      :dayInfo="day"
      :index="index"
    />
  </ul>
</template>

<script setup>
defineProps(['data'])
</script>
