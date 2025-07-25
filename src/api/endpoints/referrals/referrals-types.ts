export interface IReferralLevel {
  id: string
  name: TReferralLevelName
  percent: number
  parentPercent: number
  minCount: number
  maxCount: number | null
  createdAt: string
}

export type TReferralLevelName = 'BRONZE' | 'SILVER' | 'GOLD'

export interface IReferralLevelChangePercent {
  id: string
  percent: number
}

export interface IReferralLink {
  id: string
  link: string
  code: string
  spending: number
  subscribed: number
  unsubscribed: number
  openedTrades: number
  pressStart: number
  commissions: string
  invitedUsers: number
  maxActiveUsers: number
  telegramId: string
}

export interface IReferrals {
  data: IReferralsData[]
  total: number
  statistic?: IReferralStatistic
}

export interface IReferralsData {
  code: string
  commissions: number
  id: string
  invitedUsers: number
  link: string
  maxActiveUsers: number
  pressStart: number
  spending: number
  subscribed: number
  telegramId: number
  totalSolAmount: number
  totalTrades: number
  uniqueTradersCount: number
  unsubscribed: number
}

export interface IReferralStatistic {
  commissions: number
  invitedUsers: number
  maxActiveUsers: number
  pressStart: number
  spending: number
  subscribed: number
  totalSolAmount: number
  totalTrades: number
  uniqueTradersCount: number
  unsubscribed: number
}
