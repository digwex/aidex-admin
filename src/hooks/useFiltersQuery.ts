import { selectorFilter } from '@/redux-store/selectors'
import { useAppSelector } from './useRedux'
import type { InitialState, FilterKey } from '@/redux-store/slices/filters/types'

const parseFilters = (filters: InitialState[FilterKey]) => {
  const result: Record<string, string | string[]> = {}

  const data = Object.entries(filters)

  data.forEach(([key, value]) => {
    if (typeof value === 'string' && value.length > 0) {
      result[key] = value
    }

    if (Array.isArray(value) && value.length > 0) {
      const [min, max] = value as [string | undefined, string | undefined]

      if (min) result[`${key}Min`] = min
      if (max) result[`${key}Max`] = max
    }

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      for (const k in value) {
        const v = value[k]

        if (v) {
          if (Array.isArray(result[key])) {
            result[key].push(k)
          } else {
            result[key] = [k]
          }
        }
      }
    }
  })

  return result
}

export const useFiltersQuery = (key: FilterKey) => {
  const filters = useAppSelector(selectorFilter(key))

  return parseFilters(filters)
}
