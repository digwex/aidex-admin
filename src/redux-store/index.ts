// Third-party Imports
import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from './slices'
import { API } from '@/api'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [API.reducerPath]: API.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(API.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
