<template>
  <img
    :src="imageSrc"
    :alt="imageAlt"
    :height="imageHeight"
    :width="imageWidth"
    class="mx-auto"
  />
  <h4 class="mt-1 text-center">{{ label }}</h4>
</template>

<script setup>
defineProps(['label', 'imageAlt', 'imageSrc', 'imageHeight', 'imageWidth'])
</script>
