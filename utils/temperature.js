export function getDisplayTemperature(
  unit,
  temperatureCelsius,
  temperatureFahrenheit
) {
  if (unit === 'c') return `${temperatureCelsius}ºC`

  return `${temperatureFahrenheit}ºF`
}
