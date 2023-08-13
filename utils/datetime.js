export function longFormatDate(timestamp) {
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Europe/Madrid'
  }).format(new Date(timestamp))
}

export function mediumFormatDate(timestamp) {
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'full',
    timeZone: 'Europe/Madrid'
  }).format(new Date(timestamp))
}

export function shortFormatDate(timestamp) {
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'long',
    timeZone: 'Europe/Madrid'
  }).format(new Date(timestamp))
}
