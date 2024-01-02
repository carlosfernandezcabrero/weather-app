<template>
  <header
    class="py-6 px-2 flex flex-col sm:flex-row gap-y-4 items-center justify-between"
  >
    <h1 class="text-xl font-extrabold">Weather App</h1>

    <div>
      <div class="flex items-center text-sm font-semibold">
        <ButtonsGroup :buttons="BUTTONS" />
      </div>
    </div>
  </header>
</template>

<script setup>
const BUTTONS = [
  {
    text: 'Celsius',
    key: 'c'
  },
  {
    text: 'Fahrenheit',
    key: 'f'
  }
]
</script>
