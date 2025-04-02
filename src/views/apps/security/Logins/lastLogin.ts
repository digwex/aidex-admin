export const lastLogin = (date: string | null) => {
  if (!date) return '-'

  const lastLoginDate = new Date(date).getTime()
  const now = new Date().getTime()

  const formatter = new Intl.RelativeTimeFormat('ru-RU', { numeric: 'auto' })

  const diffInSeconds = Math.floor((now - lastLoginDate) / 1000)

  if (diffInSeconds < 60) {
    return formatter.format(-diffInSeconds, 'second').replace(' назад', '')
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)

  if (diffInMinutes < 60) {
    return formatter.format(-diffInMinutes, 'minute').replace(' назад', '')
  }

  const diffInHours = Math.floor(diffInMinutes / 60)

  if (diffInHours < 24) {
    return formatter.format(-diffInHours, 'hour').replace(' назад', '')
  }

  const diffInDays = Math.floor(diffInHours / 24)

  if (diffInDays < 30) {
    return formatter.format(-diffInDays, 'day').replace(' назад', '')
  }

  const diffInMonths = Math.floor(diffInDays / 30)

  if (diffInMonths < 12) {
    return formatter.format(-diffInMonths, 'month').replace(' назад', '')
  }

  const diffInYears = Math.floor(diffInMonths / 12)

  return formatter.format(-diffInYears, 'year').replace(' назад', '')
}
