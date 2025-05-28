export const timestampToReadableText = (timestamp: number): string => {
  const now = Date.now()
  const diffMs = now - timestamp

  if (diffMs < 0) return '0d'

  const seconds = Math.floor(diffMs / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const years = Math.floor(days / 365)
  const months = Math.floor((days % 365) / 30)
  const remainingDays = (days % 365) % 30

  if (seconds < 60) return `${seconds}s`
  if (minutes < 60) return `${minutes}m`
  if (hours < 24) return `${hours}h`

  return [
    years > 0 ? `${years}y` : '',
    months > 0 ? `${months}mo` : '',
    remainingDays > 0 ? `${remainingDays}d` : ''
  ]
    .filter(Boolean)
    .join(' ')
}
