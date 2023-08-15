<template>
  <Panel class="flex-1">
    <header class="w-full">
      <GoogleMapsSearchBoxAutocomplete />
      <p class="flex items-center gap-x-1 mt-6">
        <img
          src="/images/location.svg"
          alt="Location icon"
          height="28"
          width="28"
        />
        <span class="text-xl text-neutral-100">{{
          weatherDataStore.getLocationString
        }}</span>
      </p>
    </header>
    <Map class="h-[21rem] hidden sm:block" />
  </Panel>
</template>

<script setup>
import { useWeatherDataStore } from '~/store'

const weatherDataStore = useWeatherDataStore()
</script>
