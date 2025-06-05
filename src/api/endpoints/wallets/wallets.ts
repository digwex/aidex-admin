import { API } from '@/api'

export interface IWallet {
  id: string
  publicKey: string
  balance: string
  openedTrades: number
  pnl: number
  nId: number
  tgUsername: string
  winRate: {
    positive: number
    negative: number
    zero: number
  }
}

const walletsApi = API.injectEndpoints({
  endpoints: build => ({
    getWallets: build.query({
      query: params => ({ url: 'wallets', params })
    })
  })
})

export const { useLazyGetWalletsQuery } = walletsApi
