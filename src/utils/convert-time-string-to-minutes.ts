export function convertTimeStringInMinutes(timestring: string) {
  const [hours, minutes] = timestring.split(':').map(Number)

  return hours * 60 + minutes
}
