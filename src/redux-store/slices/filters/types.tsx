export interface InitialState {
  tranding: TrandingsFilters
}

export type FilterKey = keyof InitialState

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
