<template>
  <section>
    <SectionTitle>Próximos 3 días</SectionTitle>
    <div class="flex flex-col gap-y-14 mx-auto">
      <Forecast3Days :data="data" />
      <SelectedDay v-bind="selectedDay" />
    </div>
  </section>
</template>

<script setup>
import { STATES } from '~/constants'

const [lat, lng] = useState(STATES.location).value.split('/')
const { data } = await useFetch(`/api/forecast?lat=${lat}&lng=${lng}`)
const selectedDayState = useState(STATES.selectedDay, () => 0)

const selectedDay = computed(() => {
  return data.value[selectedDayState.value]
})
</script>
