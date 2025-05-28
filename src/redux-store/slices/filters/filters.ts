import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { FilterKey, InitialState } from './types'
import { trandingDefaultFilters } from './data'

const defaultFilters: Record<FilterKey, InitialState[FilterKey]> = {
  tranding: trandingDefaultFilters
}

const storedTradingFilters = localStorage.getItem('filterstranding')

const initialState: InitialState = {
  tranding: storedTradingFilters ? JSON.parse(storedTradingFilters) : defaultFilters.tranding
}

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters<T extends FilterKey>(
      state: InitialState,
      { payload }: PayloadAction<{ filterKey: T; filters: InitialState[T] }>
    ) {
      state[payload.filterKey] = payload.filters

      localStorage.setItem('filters' + payload.filterKey, JSON.stringify(payload.filters))
    },
    resetFilters(state, { payload }: PayloadAction<FilterKey>) {
      state[payload] = defaultFilters[payload]
      localStorage.removeItem('filters' + payload)
    },

    setTrandingTime(state, { payload }: PayloadAction<string>) {
      state.tranding.trandingTime = payload
    },

    setTrandingLastTime(state, { payload }: PayloadAction<string>) {
      state.tranding.lastTime = payload
    }
  }
})

export const { actions: filtersActions, reducer: filtersReducer } = slice
