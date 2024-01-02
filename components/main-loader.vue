<template>
  <div class="flex flex-col items-center gap-y-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="size-20 motion-safe:animate-spin motion-safe:[animation:spin_2.2s_linear_infinite!important]"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"
      />
    </svg>
    <p class="text-2xl font-bold animate-pulse">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps(['text'])
</script>
