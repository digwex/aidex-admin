export interface AdminParams {
  skip: number
  take: number
}

export interface AdminResponse {
  code: number
  data: AdminResponseData
  message: string
}

export interface AdminResponseData {
  data: {
    data: Admin[]
    permissions: string[]
    total: number
  }
}

export interface Admin {
  accessLevel: string
  createdAt: string
  id: string
  isBanned: boolean
  lastLogin: string
  name: string
  permissions: string[]
  role: string
  spentInAppSecs: number
  tgId: string
  tgLogin: string
}

export type LoginParams = AdminParams & { search: string }

export interface LoginResponse {
  code: number
  data: LoginResponseData
  message: string
}

export interface LoginResponseData {
  data: Login[]
  total: number
}

export type Login = Admin & { isOnline: boolean }
