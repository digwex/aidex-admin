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
  pressStart: number
  commissions: string
  invitedUsers: number
  maxActiveUsers: number
  tgPartnerId: string
}
