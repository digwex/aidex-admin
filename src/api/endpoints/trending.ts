import { API } from '..'

export interface QueryParams {
  sort: string
  order: 'asc' | 'desc'
  filterKey?: string
  filterValue?: string
  take: number
  skip: number
}

export enum PRICE_CHANGE_TIME {
  'm5' = 'm5',
  'h1' = 'h1',
  'h6' = 'h6',
  'h24' = 'h24'
}

export const enum TAB {
  TRENDS = 'trends',
  NEW = 'new',
  HOT = 'hot'
}

interface QueryArg extends QueryParams {
  type: TAB
  chain: string
  orderBy: string
  direction: 'asc' | 'desc'
}

type NoYes = 'no' | 'yes'

export interface TrendingToken {
  address: string
  name: string
  symbol: string
  logo: string
  description: string
  creationTime: string
  creationBlock: 314380234
  decimals: 6
  socialInfo: {
    email: string
    bitbucket: string
    discord: string
    facebook: string
    github: string
    instagram: string
    linkedin: string
    medium: string
    reddit: string
    slack: string
    telegram: string
    tiktok: string
    twitter: string
    website: string
    youtube: string
  }
  circulatingSupply: number | null
  totalSupply: number | null
  mcap: number | null
  fdv: number | null
  holders: number | null
  price: number | null
  priceChain: 0.000006755469565934059
  variation5m: number | null
  variationChain5m: number | null
  variation1h: number | null
  variationChain1h: number | null
  variation6h: number | null
  variationChain6h: number | null
  price24h: number | null
  priceChain24h: number | null
  variation24h: number | null
  variationChain24h: number | null
  isOpenSource: NoYes
  isHoneypot: NoYes
  isMintable: NoYes
  isProxy: 'unknown'
  slippageModifiable: NoYes
  isBlacklisted: 'unknown'
  sellTax: {
    min: null | number
    max: null | number
    status: 'unknown'
  }
  buyTax: {
    min: null | number
    max: null | number
    status: 'unknown'
  }
  isContractRenounced: NoYes
  isPotentiallyScam: NoYes
  updatedAt: string
  chainId: string
  dexId: string
  url: string
  pairAddress: string
  baseToken: {
    address: string
    name: string
    symbol: string
  }
  quoteToken: {
    address: string
    name: string
    symbol: string
  }
  priceNative: string
  priceUsd: string
  txns: Record<
    PRICE_CHANGE_TIME,
    {
      buys?: number
      sells?: number
    }
  >
  volume: Record<PRICE_CHANGE_TIME, number | undefined>
  priceChange: Record<PRICE_CHANGE_TIME, number | undefined>
  liquidity: {
    usd?: number
    base?: number
    quote?: number
  }
  marketCap: number | null
  pairCreatedAt: number | null
  info: {
    imageUrl: string
    header: string
    openGraph: string
    websites: [
      {
        label: string
        url: string
      }
    ]
    socials: [
      {
        type: string
        url: string
      }
    ]
  }
}

const FRONT_API = process.env.NEXT_PUBLIC__FRONT_URL_API!

const processParams = (params: QueryArg) => {
  const { orderBy, direction, take, skip, type, chain } = params

  return {
    sort: orderBy,
    order: direction,
    take,
    skip,
    type,
    chain
  }
}

const trendingApi = API.injectEndpoints({
  endpoints: builder => ({
    getTrending: builder.query<TrendingToken[], QueryArg>({
      query: params => `${FRONT_API}/trending?${new URLSearchParams(processParams(params) as any)}`,

      transformResponse(response: { code: number; message: string; data: TrendingToken[] }) {
        return response.data
      }
    })
  })
})

export const { useLazyGetTrendingQuery } = trendingApi
