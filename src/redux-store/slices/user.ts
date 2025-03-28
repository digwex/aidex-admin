import { createSlice } from '@reduxjs/toolkit'

import { deleteItemFromLocalStorage, setItemInLocalStorage } from '@/utils/localStorageService'

export interface UserState {
  user: User | null
  adminTicket: string | null
  isLogged: boolean
  accessLevelNumber: number
  permissions: number
}

export interface User {
  id: string
  accessToken: string
  refreshTokenId: string
  accessLevel: string
}

const initialState: UserState = {
  user: null,
  accessLevelNumber: 1,
  permissions: 0,
  adminTicket: null,
  isLogged: false
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokens(state, action) {
      state.user = action.payload
      state.isLogged = true
      state.accessLevelNumber = Number(action.payload.accessLevel.replace(/[^+\d]/g, ''))
      state.permissions = action.payload.permissions

      deleteItemFromLocalStorage('adminTicket')
      setItemInLocalStorage('accessToken', action.payload.accessToken)
      setItemInLocalStorage('refreshTokenId', action.payload.refreshTokenId)
    },
    clearUser(state) {
      state.user = null
      state.adminTicket = null
      state.isLogged = false
      state.accessLevelNumber = 1
      state.permissions = 0

      deleteItemFromLocalStorage('adminTicket')
      deleteItemFromLocalStorage('accessToken')
      deleteItemFromLocalStorage('refreshTokenId')
    },
    setTicket(state, action) {
      state.adminTicket = action.payload

      setItemInLocalStorage('adminTicket', action.payload)
    }
  }
})

export const { reducer: userReducer, actions: userActions } = user
