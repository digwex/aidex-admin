import { formatCurrency } from './formatCurrency'

export const determineBalance = (balance: string | number | null | undefined) => {
  if (!balance) return '$0'

  const value = String(balance)

  return `${value.includes('-') ? '-$' : '$'}${formatCurrency(Number(value.replace('-', '')))}`
}
