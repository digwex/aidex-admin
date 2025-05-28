import { isMobile } from 'react-device-detect'
import { Tooltip } from 'react-tooltip'

export const formatPairPrice = (value: string, zeroFixe: number = 4, fixed?: number) => {
  const nValue = Number(value)

  if (isNaN(nValue)) {
    return value
  }

  if (nValue >= 1_000_000_000) return (nValue / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'
  if (nValue >= 1_000_000) return (nValue / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  if (nValue >= 1_000) return (nValue / 1_000).toFixed(1).replace(/\.0$/, '') + 'K'

  const arr = value.toString().split('.')

  if (arr[1]) {
    const secondNumberPart = arr[1]

    let zeroAmount = 0
    let lastZeroINdex = 0

    for (let i = 0; i < secondNumberPart.length; i++) {
      const digit = secondNumberPart[i]

      if (digit === '0') {
        zeroAmount += 1
        lastZeroINdex = i
        continue
      }

      break
    }

    if (zeroAmount >= zeroFixe) {
      return (
        <>
          <span className='cursor-pointer' data-tooltip-id={value}>
            0.0
            <sub>{zeroAmount - 1}</sub>
            {arr[1].slice(lastZeroINdex + 1, fixed ? lastZeroINdex + 1 + fixed : arr[1].length)}
          </span>
          <Tooltip
            {...(isMobile && { clickable: true, delayHide: 5000 })}
            className='z-[10000] !bg-tertiary-color !text-white'
            style={{ opacity: 1 }}
            id={value}
            place='top'
            content={'$' + value}
          />
        </>
      )
    }
  }

  if (fixed !== undefined) {
    const float = parseFloat(value)
    const str = float.toFixed(fixed)

    const [, decimals] = value.split('.')

    if (decimals) {
      let zeroCount = 0

      for (const ch of decimals) {
        if (ch === '0') zeroCount++
        else break
      }

      const newDecimals = str.split('.')[1] ?? ''

      return `0.${'0'.repeat(zeroCount)}${newDecimals.slice(zeroCount)}`
    }

    return str
  }

  return value
}
