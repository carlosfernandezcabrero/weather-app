import { defineStore } from 'pinia'

export const useWeatherDataStore = defineStore('weatherData', {
  state: () => ({
    language: 'es',
    lat: null,
    lng: null,
    currentWeather: null,
    forecast: null,
    dataIsReady: false
  }),
  actions: {
    async refreshData() {
      this.dataIsReady = false

      const [current, forecast] = await Promise.all(
        [
          fetch(
            `/api/current?lat=${this.lat}&lng=${this.lng}&lang=${this.language}`
          ),
          fetch(
            `/api/forecast?lat=${this.lat}&lng=${this.lng}&lang=${this.language}`
          )
        ].map((call) => call.then((res) => res.json()))
      )

      this.currentWeather = current
      this.forecast = forecast

      this.dataIsReady = true
    },
    async setLocation(lat, lng) {
      this.lat = lat
      this.lng = lng

      await this.refreshData()
    }
  },
  getters: {
    getLocationCoords: (state) => `${state.lat},${state.lng}`,
    getLocationString: (state) => state.currentWeather.location,
    getDayData: (state) => (day) => state.forecast[day]
  }
})
