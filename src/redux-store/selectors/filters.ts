import type { RootState } from '..'
import type { FilterKey } from '../slices/filters/types'

export const selectorFilter = (key: FilterKey) => (state: RootState) => state.filters[key]

export const selectorTrandingLastTime = (state: RootState) => state.filters.tranding.lastTime

export const selectorTrandingTime = (state: RootState) => state.filters.tranding.trandingTime
