export const getInitialSearchDate = (): [number, number] => {
  const seconds10YearsAgo = Math.floor((Date.now() - 10 * 365 * 24 * 60 * 60 * 1000) / 1000)
  const endOfDaySeconds = Math.floor(new Date().setHours(23, 59, 59, 999) / 1000)

  return [seconds10YearsAgo, endOfDaySeconds]
}
