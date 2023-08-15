import { defineStore } from 'pinia'

export const useWeatherDataStore = defineStore('weatherData', {
  state: () => ({
    lat: null,
    lng: null,
    currentWeather: null,
    forecast: null,
    isLocationSet: false
  }),
  actions: {
    async setLocation(lat, lng) {
      this.lat = lat
      this.lng = lng

      const [current, forecast] = await Promise.all(
        [
          fetch(`/api/current?lat=${lat}&lng=${lng}`),
          fetch(`/api/forecast?lat=${lat}&lng=${lng}`)
        ].map((call) => call.then((res) => res.json()))
      )

      this.currentWeather = current
      this.forecast = forecast
      this.isLocationSet = true
    }
  },
  getters: {
    getLocationCoords: (state) => `${state.lat},${state.lng}`,
    getLocationString: (state) => state.currentWeather.location,
    getDayData: (state) => (day) => state.forecast[day]
  }
})
