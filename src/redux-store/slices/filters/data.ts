export interface TrandingsFilters {
  keywords: string
  checks: {
    mint_auth: boolean
    freeze_auth: boolean
    lp_burned: boolean
    top_holders: boolean
    with_one_least_social: boolean
  }

  exchanges: {
    raydium: boolean
    pumpfun: boolean
    moonshot: boolean
    memelive: boolean
    orca: boolean
    meteora: boolean
  }
  trandingTime: string
  lastTime: string

  liquidity: string[]
  volume: string[]
  age: string[]
  cap: string[]
  txns: string[]
  buys: string[]
  sells: string[]
}

export const trandingDefaultFilters: TrandingsFilters = {
  keywords: '',
  checks: {
    mint_auth: false,
    freeze_auth: false,
    lp_burned: false,
    top_holders: false,
    with_one_least_social: false
  },

  liquidity: ['', ''],
  volume: ['', ''],
  age: ['', ''],
  cap: ['', ''],
  txns: ['', ''],
  buys: ['', ''],
  sells: ['', ''],
  exchanges: {
    raydium: false,
    pumpfun: false,
    moonshot: false,
    memelive: false,
    orca: false,
    meteora: false
  },
  trandingTime: '5m',
  lastTime: '5m'
}
