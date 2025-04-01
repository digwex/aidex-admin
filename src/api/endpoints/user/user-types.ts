import { type IQuery, type IUserToBanBody } from '../../types'
import { type User } from '../users/users-types'
import { type KYCLevel } from './../users/users-types'

export interface MainUserStats {
  personalData: null
  documents: {
    documents: any[]
    proofOfIncome: null
  }
}

export type ApiResponseUserStats = MainUserStats & {
  code: number
  message: string
  user: User & {
    UserFreeze: Array<{
      frozenUpTo: string
      userFreezeType: string
    }>
  }
  plainPassword: string
}

export interface ApiResponseUserSessions {
  code: number
  message: string
  data: Session[]
}

export interface Session {
  id: string
  UserId: string
  token: string
  ip: string
  ua: string
  lastOnline: Date | null
  expiresIn: string
  createdAt: Date
  updatedAt: Date
  partnerRefreshSessionId: null
  isOnline: boolean
}

export interface IQueryTransactions extends IQuery {
  uid: string
  dateEnd?: string
  dateStart?: string
  search?: string
  type?: TRANSACTION_TYPE
}

export enum TRANSACTION_TYPE {
  PENDING = 'PENDING',
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
}

export interface ApiResponseTransactions {
  code: number
  message: string
  total: number
  data: UserTransaction[]
}

export interface UserTransaction {
  id: string
  createdAt: Date
  updatedAt: Date
  UserId: string
  PaymentType: TRANSACTION_TYPE
  PaymentStatus: string
  coinId: string
  wallet: string | null
  amount: string
  balance: string
  toUSDT: string
  additionalData: {
    id?: string
    type?: string
    request?: {
      address: string
      nId: number
      amount: number
      wwCoinSignature: string
      wallet: string
      blockchain_hash?: string
    }
    blockchain_hash?: string
  }
  txId: string | null
  isFake: boolean
  note: string | null
  nId: number | null
  coin: {
    id: string
    coinName: string
    type: string
    network: string | null
    wwSignature: string
    toUSDTCoefficient: string
    symbol: string
    isWestWallet: boolean
    isCanCreate: boolean
    isAvailableInTrade: boolean
    withdrawalNetworkId: string | null
    maxLeverage: number
  }
  user: {
    nId: number
    email: string
    balance: string
    fullname: string
  }
}

export interface UserPersonalDataParams {
  uid: string
  name: string
  surname: string
  country: string
  address: string
  documentNo: string
  verifiedWithDocument: VerifiedWithDocumentTypes | string
  email: string
  password: string
  partnerId?: number
}

export type VerifiedWithDocumentTypes =
  | 'ID_CARD'
  | 'PASSPORT'
  | 'DRIVERS'
  | 'SELFIE'

export interface ApiResponseUserPersonalData {
  code: number
  message: string
  user: {
    name: string
    surname: string
    country: string
    address: string
    verifiedWithDocument: VerifiedWithDocumentTypes
    documentNo: string
    userId: string
  } | null
}

export interface ApiResponseUserDocuments {
  code: number
  message: string
  documents: UserDocument[]
  proofOfIncome: null
}

export interface UserDocument {
  Document: Document[]
  KYCIndex: number
  KYCLevel: KYCLevel
  UserId: string
  address: string
  countryCode: string
  created_at: Date
  docNumber: string
  id: string
  name: string
  reason: null
  surname: string
  verificationRequestStatus: string
}

export interface Document {
  UserId: string
  content: string
  createdAt: Date
  deletedAt: Date | null
  id: string
  isAdminUpload: boolean
  type: string
  image: string
  thumb: string
  docType: string
  updatedAt: Date
  verificationRequestId: string
  filePath: string
}

export interface UploadDocumentsParams {
  content: string[]
  type: string
  uid: string
}

export interface DepositFakeParams {
  uid: string
  amount: number
  wwCoinSignature: string
  isFake: boolean
}
export interface WithdrawalFakeParams {
  uid: string
  amount: number
  wallet?: string
  hash?: string
}

export interface IUserToBanBodyWithDays extends IUserToBanBody {
  days: number
  reason: string
}

export interface DeclineRequestBody {
  ids: string[]
  reason?: string
}

export interface UserVerificationParams {
  uid: string
  orderBy: {
    field: string
    direction: string
  }
  skip: number
  take: number
  dateStart: string
  dateEnd: string
  search: string
}

export interface UserVerificationResponse {
  code: number
  data: UserVerification[]
  message: string
  total: 2
}

export interface UserToggleTwoFa {
  uid: string
  isEnabled: boolean
}

export interface UserVerification {
  id: string
  created_at: string
  reason: string
  Document: Document[]
  verificationRequestStatus: 'PENDING' | 'ACCEPTED' | 'DECLINED'
}

export interface UserSetPersonalDataResponse {
  code: number
  message: string
  name: string
  surname: string
  country: string
  address: string
  verifiedWithDocument: VerifiedWithDocumentTypes
  documentNo: string
  userId: string
}

export interface InvisibleSessionBody {
  id: string | number
  type: 'user' | 'partner'
}

export interface InvisibleSessionResponse {
  link: string
}
