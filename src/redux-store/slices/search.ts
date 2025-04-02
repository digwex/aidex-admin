import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { getInitialSearchDate } from '@/utils/getInitialSearchDate'

interface SearchState {
  value: string
  take: string
  date: [number | null, number | null]
  dateTime: string
}

const initialState: SearchState = {
  value: '',
  take: '10 записей',
  date: getInitialSearchDate(),
  dateTime: 'Все'
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
    setSearchByDate(state, action: PayloadAction<[number | null, number | null]>) {
      state.date = action.payload
    },
    setSearchByTake(state, action: PayloadAction<string>) {
      state.take = action.payload
    },
    setSearchByDateTime(state, action: PayloadAction<any>) {
      state.dateTime = action.payload
    }
  }
})

export const { setSearchTerm, setSearchByDate, setSearchByTake, setSearchByDateTime } = searchSlice.actions
export const searchReducer = searchSlice.reducer
