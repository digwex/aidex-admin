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
  id: string
  telegramId: number
  link: string
  code: string
  spending: number
  subscribed: number
  unsubscribed: number
  pressStart: number
  commissions: number
  invitedUsers: number
  maxActiveUsers: number
}

export interface IReferralStatistic {
  totalPressStartAllTime: number
  totalPressStartSpecificDay: number | null // null if 'date' not provided
  totalOpenedDeals: number
  uniquePeopleOpenedDeals: number
  totalInvitedPeople: number
  totalSolInDeals: number
  totalCommissionSol: number
  totalCommissionUsd: number
  period: {
    from: null | string // '2024-01-01T00:00:00.000Z' // null if not provided
    to: null | string // '2024-12-31T23:59:59.999Z' // null if not provided
    specificDate: null | string // '2024-07-25T00:00:00.000Z' // null if not provided
  }
}
