export function longFormatDate(timestamp, lang) {
  return new Intl.DateTimeFormat(lang, {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(new Date(timestamp))
}

export function mediumFormatDate(timestamp, lang) {
  return new Intl.DateTimeFormat(lang, {
    dateStyle: 'full'
  }).format(new Date(timestamp))
}

export function shortFormatDate(timestamp, lang) {
  return new Intl.DateTimeFormat(lang, {
    dateStyle: 'long'
  }).format(new Date(timestamp))
}
