import { API } from '@/api'

export interface IWallet {
  id: number
  userId: number
  balance: string
  publicKey: string
  telegram: string
  trades: number
}

const walletsApi = API.injectEndpoints({
  endpoints: build => ({
    getWallets: build.query({
      query: params => ({ url: 'wallets', params })
    })
  })
})

export const { useLazyGetWalletsQuery } = walletsApi
