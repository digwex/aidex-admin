import { API } from '@/api'

export interface IWallet {
  id: number
  balance: string
  publicKey: string
}

const walletsApi = API.injectEndpoints({
  endpoints: build => ({
    getWallets: build.query({
      query: params => ({ url: 'wallets', params })
    })
  })
})

export const { useLazyGetWalletsQuery } = walletsApi
