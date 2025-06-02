export interface StatisticResponse<T> {
  code: number
  data: T[]
  message: string
  total: number
}

export interface StatisticDay {
  date: string
  registrations: number
  referralRegistrations: number
  deals: number
  dealsCount: number
  trades: number
  maxOnline: number
  ftd: number
  withdrawals: number
  withdrawalsCount: number
}

export interface StatisticTrader {
  balance: number
  id: string
  nId: number
  profit: number
  trades: number
  withdrawals: number
  withdrawalsCount: number
  createdAt: string
}
