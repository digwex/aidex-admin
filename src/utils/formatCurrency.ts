export const formatCurrency = (value: number, fixed: number = 2): string => {
  if (!value) return '0'

  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: fixed,
    minimumFractionDigits: fixed,
  })

  const result = formatter.format(value)

  if (result === '0.00') return '0'

  return result
}
