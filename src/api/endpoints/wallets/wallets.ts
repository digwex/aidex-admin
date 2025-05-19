import { API } from '@/api'

const walletsApi = API.injectEndpoints({
  endpoints: build => ({
    getWallets: build.query({
      query: params => ({ url: 'wallets', params })
    })
  })
})

export const { useLazyGetWalletsQuery } = walletsApi
