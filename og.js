const DESCRIPTION =
  'Aplicación para consultar el tiempo de cualquier ciudad del mundo en el momento actual y en los próximos 3 días'
const PAGE_URL = 'https://weather-app-omega-amber.vercel.app'
const TITLE = 'Weather App - Aplicación para consultar el tiempo'
const IMAGE_URL = `${PAGE_URL}/og-image.webp`

export default {
  'og:image': IMAGE_URL,
  'twitter:image': IMAGE_URL,
  title: TITLE,
  'og:title': TITLE,
  'twitter:title': TITLE,
  description: DESCRIPTION,
  'og:description': DESCRIPTION,
  'twitter:description': DESCRIPTION,
  'twitter:url': PAGE_URL,
  'og:url': PAGE_URL,
  'og:type': 'website',
  'twitter:card': 'summary_large_image'
}
