/* eslint-disable camelcase */
import { defineEventHandler, getQuery } from 'h3'
import { fetchFromApi } from '../../utils/api'

export default defineEventHandler(async (event) => {
  const method = event.node.req.method
  const { res } = event.node

  if (method === 'GET') {
    const query = getQuery(event)

    const { forecast } = await fetchFromApi(query)
    const { forecastday } = forecast

    return forecastday.map(({ date_epoch, day, hour }) => ({
      dateEpoch: date_epoch,
      dayCondition: day.condition,
      maxTempC: day.maxtemp_c,
      minTempC: day.mintemp_c,
      maxTempF: day.maxtemp_f,
      minTempF: day.mintemp_f,
      humidity: day.avghumidity,
      maxWind: day.maxwind_kph,
      chanceOfRain: day.daily_chance_of_rain,
      chanceOfSnow: day.daily_chance_of_snow,
      avgTempC: day.avgtemp_c,
      avgTempF: day.avgtemp_f,
      hours: hour.map(
        ({
          time,
          feelslike_c,
          feelslike_f,
          chance_of_snow,
          chance_of_rain,
          humidity,
          wind_kph
        }) => ({
          time,
          feelsLikeC: feelslike_c,
          feelsLikeF: feelslike_f,
          chanceOfSnow: chance_of_snow,
          chanceOfRain: chance_of_rain,
          humidity,
          windKph: wind_kph
        })
      )
    }))
  }

  res.statusCode = 405
  res.setHeader('Allow', ['GET'])
  res.end(`Method ${method} Not Allowed`)
})
