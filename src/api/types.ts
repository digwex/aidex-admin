export interface ApiResponse<T = any> {
  code: number
  message: string
  count: number
  total: number
  result: T
  data: T
}

export interface IQuery {
  skip?: number
  take?: number
  orderBy?: string
  isBlocked?: boolean | null
  isActive?: boolean | null
  dateStart?: string | null
  dateEnd?: string | null
  searchBar?: string
}

export enum SORT_DIRECTION {
  ASC = 'asc',
  DESC = 'desc',
}

export interface IUserToBanBody {
  uId?: string
  nId?: number
}

export type PartnerPlan =
  | 'STAR'
  | 'REGULAR'
  | 'PREMIUM'
  | 'VIP'
  | 'AMBASSADOR'
  | 'TRAFFIC_OWNER'
