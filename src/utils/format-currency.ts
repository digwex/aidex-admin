export const formatCurrency = (value: number, min?: number, max?: number) => {
  if (!value) return '0.00'

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: min ?? 2,
    maximumFractionDigits: max ?? 2
  })

  return formatter.format(value)
}

export const formatCurrencyFixed = (value: number, fixed: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: fixed,
    maximumFractionDigits: fixed
  })

  return formatter.format(value)
}

export const countDigitsAfterDecimalStr = (num: string | undefined | null = '0.01'): number => {
  if (!num) {
    num = '0.01'
  }

  while (num.length > 1 && num[num.length - 1] === '0') {
    num = num.slice(0, -1)
  }

  const decimalIndex = num.indexOf('.')

  if (decimalIndex === -1) {
    return 0
  }

  return num.length - decimalIndex - 1
}

export const formatCurrencyWithSign = (value?: number | string, withSign = true, fixed: number = 2): string => {
  if (!value) return '$0.00'

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: fixed,
    maximumFractionDigits: fixed
  })

  const isPositive = Number(value) >= 0

  const formattedValue = formatter.format(Number(String(value).replace('-', '')))

  return `${withSign ? (isPositive ? '+' : '-') : ''}$${formattedValue}`
}

export const formatPrice = (
  price: string | number | undefined | null,
  ignoreManyDigits?: boolean,
  zeroCondition: boolean = false
) => {
  if (!price) return '0.00'

  const value = Number(price)
  const isNegative = value < 0
  let absoluteValue = Math.abs(value)

  if (zeroCondition) {
    if (value > 0 && value <= 0.01) {
      absoluteValue = 0.01
    }
  }

  let digits: number | null = 2

  if (ignoreManyDigits) {
    digits = 2
  } else {
    if (absoluteValue >= 1) {
      digits = 2
    } else if (absoluteValue < 1 && absoluteValue >= 0.01) {
      digits = 4
    } else if (absoluteValue < 0.01 && absoluteValue >= 0.0001) {
      digits = 6
    } else if (absoluteValue < 0.0001 && absoluteValue >= 0.000001) {
      digits = 8
    }
  }

  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits
  })

  const formattedValue = formatter.format(absoluteValue)

  return isNegative ? '-' + formattedValue : formattedValue
}
