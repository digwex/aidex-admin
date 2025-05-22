export interface WithdrawalParams {
  skip: number
  take: number
  dateStart: string
  dateEnd: string
  search: string
  orderBy: string
  type: 'WAITING' | 'FAKE' | ''
}

export interface WithdrawalResponse {
  code: number
  data: WithdrawalResponseData
  message: string
}

export interface WithdrawalResponseData {
  data: Withdrawal[]
  total: number
}

export interface Withdrawal {
  PaymentStatus: 'PENDING' | 'COMPLETED' | 'CANCELLED'
  PaymentType: 'DEPOSIT' | 'WITHDRAWAL'
  UserId: string
  additionalData: AdditionalData
  amount: string
  balance: string
  balanceLeft: string
  coin: Coin
  coinId: string
  createdAt: string
  isBlocked: boolean
  id: string
  isFTD: boolean
  nId: string | null
  isFake: boolean
  note: string | null
  toUSDT: string
  txId: string | null
  updatedAt: string
  user: User
  wallet: string | null
  withdrawals: string
  withdrawalsTotal: string
}

interface AdditionalData {
  blockchain_hash: string
}

interface Coin {
  coinName: string
  id: string
  isAvailableInTrade: boolean
  isCanCreate: boolean
  isWestWallet: boolean
  maxLeverage: number
  network: string | null
  symbolCoin: string
  toUSDTCoefficient: string
  withdrawalNetworkId: string | null
  wwSignature: string
}

interface User {
  CountryCode: string
  balance: string
  nId: number
}

export interface WithdrawalCompleteBody {
  id: string
}

export interface WithdrawalCancelBody {
  id: string
  note: string
}

export interface WithdrawalChangeAddressBody {
  id: string
  note: string | undefined
  wallet: string | undefined
  wwSignature: string | undefined
}

export interface IWithdrawal {
  id: string
  amount: string
  status: string
  signature: string | null
  userId: string
  walletId: number
  address: string
  isFake: boolean
  createdAt: string
  userNid: number
  wallet: {
    publicKey: string
  }
  totalWithdrawals: number
  withdrawalsSum: number
  withdrawalAmount: number
}
