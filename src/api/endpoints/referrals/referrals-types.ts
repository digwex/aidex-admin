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
  totalPressStartSpecificDay: number | null
  totalOpenedDeals: number
  uniquePeopleOpenedDeals: number
  totalSolInDeals: number
  period: {
    from: null | string
    to: null | string
    specificDate: null | string
  }

  totalPressStartAllTime: number
  totalInvitedPeople: number
  totalCommissionSol: number
  totalCommissionUsd: number

  totalSpending: number
  totalSubscribed: number
  totalUnsubscribed: number
  totalMaxActiveUsers: number
}
