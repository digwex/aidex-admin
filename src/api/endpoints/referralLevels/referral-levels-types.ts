export interface IReferralLevel {
  id: string
  name: string
  percent: number
  parentPercent: number
  minCount: number
  maxCount: number | null
  createdAt: string
}

export interface IReferralLevelChangePercent {
  id: string
  percent: number
}
