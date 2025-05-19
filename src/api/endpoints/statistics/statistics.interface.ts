export interface StatisticResponse<T> {
  code: number
  data: T[]
  message: string
  total: number
}

export interface StatisticDay {
  _clicks: string | undefined
  _date_only: string
  _deals_count: string | undefined
  _withdrawals: string | undefined
  _withdrawals_count: string | undefined
  _ftd_count: string | undefined
  _ftd_percent: string | undefined
  _online: string | undefined
  _registrations: string | undefined
  _registrations_percent: number | undefined
  _traders: string | undefined
  _traders_percent: string | undefined
}

export interface StatisticTrader {
  id: string
  _balance: string | undefined
  _createdat: string | undefined
  _deals_count: string | undefined
  _withdrawals: string | undefined
  _withdrawals_count: string | undefined
  _nid: number
  _pnl: string | undefined
  _registered: string | undefined
  _bonus: string | undefined
}
