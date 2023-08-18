import { defineStore } from 'pinia'

export const useWeatherDataStore = defineStore('weatherData', {
  state: () => ({
    language: 'es',
    lat: null,
    lng: null,
    currentWeather: null,
    forecast: null,
    isLocationSet: false
  }),
  actions: {
    async refreshData() {
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
    },
    async setLanguage(lang) {
      this.language = lang
      await this.refreshData()
    },
    async setLocation(lat, lng) {
      this.lat = lat
      this.lng = lng

      await this.refreshData()

      this.isLocationSet = true
    }
  },
  getters: {
    getLocationCoords: (state) => `${state.lat},${state.lng}`,
    getLocationString: (state) => state.currentWeather.location,
    getDayData: (state) => (day) => state.forecast[day]
  }
})
