import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { getItemFromLocalStorage } from '@/utils/localStorageService'
import { API_URL } from '@/utils/constants'

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: 'same-origin',
  prepareHeaders: headers => {
    const accessToken = getItemFromLocalStorage('accessToken')

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }

    headers.set('Access-Control-Allow-Origin', '*')

    return headers
  }
})
