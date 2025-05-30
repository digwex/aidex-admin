import { type IQuery } from '../../types'

// export interface User {
//   referralsCount: number
//   tgUsername: string
//   telegramId: string
//   fee: string
//   id: string
//   deletedAt: Date | null
//   createdAt: Date
//   updatedAt: Date
//   fullname: string
//   email: string
//   password: string
//   phone: null
//   tokenVerify: string
//   isActive: boolean
//   isAdvertising: boolean
//   blockedUpTo: string | null
//   isBlocked: boolean
//   isBlockedForever: boolean | null
//   isTwoFactorEnabled: boolean
//   twoFactorAuthenticationCode: null
//   UserPlainPassword: string
//   otpAuthUrl: null
//   balance: string
//   demoBalance: string
//   UploadId: null
//   KYCLevel: KYCLevel
//   lastLoggedIn: Date
//   registrationIp: string | null
//   passwordStrength: string
//   nId: number
//   SelectedPairCoins: string[]
//   isWithdrawalAvailable: boolean
//   needDocuments: string[]
//   CountryCode: string
//   partnerId: string | null
//   AccountType: string
//   isDelete: boolean
//   wallets: Array<{
//     id: number
//     publicKey: string
//     secretKey: string
//     createdAt: string
//     label: string
//     isActive: boolean
//     isArchived: boolean
//     userId: string
//   }>
// }

export type KYCLevel = 'NO_DATA' | 'AI_REVIEW' | 'MANUAL_REVIEW' | 'INCOME_PROOF'

export interface ApiResponseUserOrders {
  code: number
  message: string
  data: OrderData
}

export interface OrderData {
  data: Order[]
  total: number
}

export interface Order {
  id: string
  userId: string
  amount: string
  price: string
  date: Date
  coinId: string
  tradeType: 'LONG' | 'SHORT'
  profit: string | null
  profitPercent: string | null
  avgPrice: string | null
  commission: string | null
  orderType: string
  leverage: string
  limitPrice: null | string
  liquidationPrice: null | string
  positionHistoryId: string
  nId: number
  isClosing: boolean
  orderStatus: string
  positionHistory: PositionHistory
  coin: Coin
  trigger: string | null
  balanceAfter: null | string
  margin: string
  dateEntry?: Date
}

export interface Coin {
  id: string
  coinName: string
  network: null
  wwSignature: string
  toUSDTCoefficient: string
  symbolCoin: string
  isWestWallet: boolean
  isCanCreate: boolean
  isAvailableInTrade: boolean
  withdrawalNetworkId: null
  maxLeverage: number
  tickSize?: string
}

export interface PositionHistory {
  positionStatus: string
  exitPrice: string
  balanceAfter: null
  tp: string | null
  sl: string | null
  date: string | null
}

export interface IUserOrdersParams extends Omit<IQuery, 'isBlocked' | 'isActive'> {
  uid: string
  search?: string
  dateStart?: string
  dateEnd?: string
}

export interface ApiResponseTrades {
  data: {
    data: ITrade[]
    total: number
  }
}

export interface ITrade {
  coinId: string
  dealAmount: string
  id: string
  isDemo: boolean
  openPrice: string
  openTime: string
  tradeStatus: 'OPENED' | 'CLOSED'
  tradeType: string
  updatedAt: string
  userId: string
  closingPrice: string
  closingTime: string
  PnLStatistics: {
    date: string
    id: string
    isDemo: boolean
    onlyAff: boolean
    pnl: string
    pnlPercent: string
    tradeId: string
    userId: string
  }
  coin: {
    coinName: string
    customMinDeposit: string
    id: string
    isAvailableInTrade: boolean
    isCanCreate: boolean
    isCanWithdraw: boolean
    isWestWallet: boolean
    minDeposit: string
    network: string | null
    paymentPercentage: number[]
    symbolCoin: string
    tickSize: string
    toUSDTCoefficient: string
    tradersOpinion: [76, 24]
    withdrawalNetworkId: null
    wwSignature: string
  }
  user: {
    AccountType: string
  }
}

export interface UserSettings {
  id: string
  quickPurchaseTrade: number[]
  quickSaleTrade: number[]
  quickBuyAmount: number
  quickSellAmount: number
  portfolioQuickBuy: number
  portfolioQuickSellPercent: number
  sniperSlippage: number
  sniperTipAmount: number
  isSniperTipEnabled: boolean
  sniperPriorityFee: number
  isSniperPriorityFeeEnabled: boolean
  antiMevSniper: boolean
  buySellSlippage: number
  buySellTipAmount: number
  isBuySellTipEnabled: boolean
  buySellPriorityFee: number
  isBuySellPriorityFeeEnabled: boolean
  antiMevBuySell: boolean
  userId: string
  updatedAt: string
  createdAt: string
}

export interface Wallet {
  id: number
  publicKey: string
  secretKey: string
  createdAt: string
  label: string
  isActive: boolean
  isArchived: boolean
  userId: string
  balance: string
}

export interface Session {
  id: string
  userId: string
  token: string
  ip: string
  ua: string
  lastOnline: string
  expiresIn: number
  createdAt: string
  updatedAt: string
  RefreshSessionId: string
  isOnline: boolean
}

export interface User {
  id: string
  telegramId: number
  tgUsername: string
  language: string
  referrerId: string | null
  refCode: string
  deletedAt: string | null
  createdAt: string
  updatedAt: string
  fullName: string
  email: string | null
  password: string | null
  phone: string | null
  isActive: boolean | null
  isDelete: boolean
  blockedUpTo: string | null
  isBlockedForever: boolean
  blockedReason: string | null
  is2FA: boolean
  code2FA: string | null
  balance: string
  demoBalance: string
  tournamentBalance: string
  nId: number
  lastLoggedIn: string
  passwordStrength: string | null
  version: number
  isAdvertising: boolean
  partnerCompanyCodeId: string | null
  registrationIp: string | null
  lastDocumentsRequested: string
  isWithdrawalAvailable: boolean
  partnerId: string | null
  countryCode: string
  watchlist: string[]
  level: number
  xp: number
  copyTradingAiMode: boolean
  hideTokens: string[]
  fee: string
  isConfirmTrades: boolean
  isChartPreviews: boolean
  sellPriorityFeeOverride: string
  secureActionPassword: string | null
  secureActionPasswordHint: string | null
  secureActionPasswordCreatedAt: string | null
  referralLevelId: string
  userSettingsId: string | null
  settings: UserSettings
  wallets: Wallet[]
  Sessions: Session[]
}
