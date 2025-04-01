export const capitalize = (str?: string) => {
  if (!str) return '-'

  const splitStr = str.split('_')

  const capitalized = splitStr.map(
    word => word[0].toUpperCase() + word.slice(1).toLowerCase(),
  )

  return capitalized.join(' ')
}
