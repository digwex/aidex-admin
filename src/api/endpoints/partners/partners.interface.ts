// partners

export interface PartnersParams {
  skip: number
  take: number
  dateStart: string
  dateEnd: string
  searchBar: string
  partnerStatus: 'WAITING' | 'BLOCKED' | 'DECLINED'
}

export interface PartnersResponse {
  code: number
  data: PartnersResponseData
  message: string
}

export interface PartnersResponseData {
  data: AdminPartner[]
  total: number
}

export interface AdminPartner {
  CountryCode: string
  balance: string
  createdAt: string
  email: string
  hold: string
  id: number
  isBlocked: boolean
  isTwoFactorEnabled: boolean
  lastBalanceRecalculation: string
  lastHoldRecalculation: string
  nick: string | null
  otpAuthUrl: string | null
  partnerId: number | null
  partnerPartnerCode: string | null
  partnerPlan: string
  partnerStatus: string
  password: string
  paymentBEP: string | null
  paymentERC: string | null
  paymentTRC: string | null
  paymentTradingNId: number | null
  referralClicks: number
  twoFAOptionLogin: boolean
  twoFAOptionWithdraw: boolean
  twoFactorAuthenticationCode: string | null
  userPartnerCode: string | null
}

export interface ActivePartner {
  CTR: number
  FTD: number
  FTDS: number
  RTD: number
  balance: string
  deposits: string
  CountryCode: string
  createdAt: string
  email: string
  hold: string
  id: number
  isBlocked: boolean
  isTwoFactorEnabled: boolean
  lastBalanceRecalculation: string
  lastHoldRecalculation: string
  nick: string | null
  otpAuthUrl: string | null
  partnerId: number | null
  partnerPartnerCode: string | null
  partnerPlan: string
  partnerStatus: string
  password: string
  paymentBEP: string | null
  paymentERC: string | null
  paymentTRC: string | null
  paymentTradingNId: number | null
  referralClicks: number
  twoFAOptionLogin: boolean
  twoFAOptionWithdraw: boolean
  twoFactorAuthenticationCode: string | null
  userPartnerCode: string | null
  tradersWithdrawals: number
  partnerWithdrawals: string
  registrations: number
  subPartners: number
  withdrawals: string
}

// payments partners
export interface PaymentsPartnerParams {
  skip: number
  take: number
  dateStart: string
  dateEnd: string
  search: string
  type: 'WAITING' | ''
}

export interface PartnerResponse {
  code: number
  data: PartnerResponseData
  message: string
}

export interface PartnerResponseData {
  data: Partner[]
  total: number
}

export interface Partner {
  additionalData: AdditionalData | null
  amount: string
  balance: string | null
  balanceLeft: string
  createdAt: string
  id: string
  method: string | undefined
  note: string | null
  partner: PartnerBody
  partnerId: number
  status: string
  updatedAt: string
  traders: string | null
  nId: string | null
  depositsFTD: string | null
  deposits: string | null
  depositsTotal: string | null
  wallet: string
}

export interface AdditionalData {
  blockchain_hash: string
}

export interface PartnerBody {
  CountryCode: string
  balance: string
  email: string
  id: number
  isBlocked: boolean
  partnerPlan: string
}
