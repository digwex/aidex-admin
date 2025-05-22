export interface IDashboardOverall {
  maxOnline: number
  currOnline: number
  todayOpenTrades: number
  commissionsToday: number
  commissions: number
  withdrawalsTotal: number
  withdrawalsToday: number
  withdrawalsPending: number
  registrationsTotal: number
  visitorsTotal: number
}

export interface IDashboardGraph {
  _date_only: string
  _delivery: number
  _shipment: number
}
