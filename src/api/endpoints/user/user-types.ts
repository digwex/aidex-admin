import { type IQuery, type IUserToBanBody } from '../../types'
import { type KYCLevel, type User } from '../users/users-types'

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
  WITHDRAWAL = 'WITHDRAWAL'
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

export const fakeData: UserTransaction = {
  id: '123',
  createdAt: new Date(),
  updatedAt: new Date(),
  UserId: '123',
  PaymentType: TRANSACTION_TYPE.DEPOSIT,
  PaymentStatus: 'PENDING',
  coinId: 'BTC',
  wallet: '15q6m9v3q6m9v8q6m9v',
  amount: '0.0001',
  balance: '0.0001',
  toUSDT: '10',
  additionalData: {
    id: '123',
    type: 'DEPOSIT',
    request: {
      address: '15q6m9v3q6m9v8q6m9v',
      nId: 1,
      amount: 0.0001,
      wwCoinSignature: '123',
      wallet: '15q6m9v3q6m9v8q6m9v',
      blockchain_hash: '123'
    }
  },
  txId: '123',
  isFake: true,
  note: '123',
  nId: 1,
  coin: {
    id: 'BTC',
    coinName: 'Bitcoin',
    type: 'COIN',
    network: 'Bitcoin',
    wwSignature: '123',
    toUSDTCoefficient: '1',
    symbol: 'BTC',
    isWestWallet: true,
    isCanCreate: true,
    isAvailableInTrade: true,
    withdrawalNetworkId: '123',
    maxLeverage: 10
  },
  user: {
    nId: 1,
    email: 'test@test.com',
    balance: '0.0001',
    fullname: 'Test Test'
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

export type VerifiedWithDocumentTypes = 'ID_CARD' | 'PASSPORT' | 'DRIVERS' | 'SELFIE'

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
