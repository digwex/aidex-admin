import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface LanguageState {
  shouldFetch: boolean
}

const initialState: LanguageState = {
  shouldFetch: false
}

const documentsFetch = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setShouldFetch(state, action: PayloadAction<boolean>) {
      state.shouldFetch = action.payload
    }
  }
})

export const { reducer: documentsFetchReducer, actions: documentsFetchActions } = documentsFetch
