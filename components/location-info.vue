<template>
  <Panel class="flex-1">
    <header>
      <p class="flex items-center gap-x-1">
        <img
          src="/images/location.svg"
          alt="Location icon"
          height="28"
          width="28"
        />
        <span class="text-xl text-neutral-100">{{ locationString }}</span>
      </p>
    </header>
    <ClientOnly>
      <Map class="h-[25rem]" />
    </ClientOnly>
  </Panel>
</template>

<script setup>
defineProps(['locationString'])

console.log('map')
</script>
