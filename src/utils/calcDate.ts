import { formatTwoDigitDate } from './formatTwoDigitDate'

export const calcDate = (date?: string | number | Date, isShort = false) => {
  if (!date) return '-'

  const lastLoginDate = new Date(date)

  const year = lastLoginDate.getFullYear()
  const month = formatTwoDigitDate(lastLoginDate.getMonth() + 1)
  const day = formatTwoDigitDate(lastLoginDate.getDate())
  const hours = formatTwoDigitDate(lastLoginDate.getHours())
  const minutes = formatTwoDigitDate(lastLoginDate.getMinutes())
  const seconds = formatTwoDigitDate(lastLoginDate.getSeconds())

  if (isShort) return `${year}/${month}/${day}`

  return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`
}
