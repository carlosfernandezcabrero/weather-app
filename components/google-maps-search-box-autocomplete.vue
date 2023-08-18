<template>
  <input
    id="searchTextField"
    type="text"
    :placeholder="$t('search-location')"
    class="w-full rounded-full px-6 py-2 bg-background border border-border focus:outline focus:outline-2 focus:outline-highlight text-white"
  />
</template>

<script>
import { mapStores } from 'pinia'
import { useWeatherDataStore } from '~/store'

export default {
  computed: {
    ...mapStores(useWeatherDataStore)
  },
  mounted() {
    const input = document.getElementById('searchTextField')
    this.autocomplete = new google.maps.places.Autocomplete(input, {})

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace()
      const location = place.geometry.location

      const lat = location.lat()
      const lng = location.lng()

      this.weatherDataStore.setLocation(lat, lng)
    })
  }
}
</script>
