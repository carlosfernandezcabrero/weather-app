// import dataJson from '~/assets/data.json'

const API_URL = `https://${process.env.X_RapidAPI_Host}`

const HEADERS = {
  'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
  'X-RapidAPI-Key': process.env.X_RapidAPI_Key
}

export async function fetchFromApi(location, options = {}) {
  const { lat, lng, lang } = location

  const response = await fetch(
    `${API_URL}/forecast.json?q=${lat},${lng}&days=3&lang=${lang}`,
    {
      ...options,
      headers: HEADERS
    }
  )
  const data = await response.json()

  return data
}
