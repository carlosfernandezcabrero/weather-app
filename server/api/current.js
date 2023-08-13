import { defineEventHandler, getQuery } from 'h3'
import { fetchFromApi } from '../../utils/api'

export default defineEventHandler(async (event) => {
  const method = event.node.req.method
  const { res } = event.node

  if (method === 'GET') {
    const query = getQuery(event)
    const { current, location } = await fetchFromApi(query)

    return {
      dayCondition: current.condition,
      feelsLikeC: current.feelslike_c,
      feelsLikeF: current.feelslike_f,
      humidity: current.humidity,
      wind: current.wind_kph,
      windDirection: current.wind_dir,
      lastUpdated: current.last_updated_epoch,
      precipMm: current.precip_mm,
      location: `${location.country}, ${location.region}, ${location.name}`
    }
  }

  res.statusCode = 405
  res.setHeader('Allow', ['GET'])
  res.end(`Method ${method} Not Allowed`)
})
