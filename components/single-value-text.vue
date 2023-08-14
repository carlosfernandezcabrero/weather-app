<template>
  <p class="text-5xl text-neutral-100/90">
    {{ value }}
  </p>
  <h4 class="text-center mt-1 sm:mt-8">{{ label }}</h4>
</template>

<script setup>
defineProps(['value', 'label'])
</script>
