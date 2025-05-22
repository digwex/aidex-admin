import type { ThemeColor } from '@/@core/types'
import type { IDashboardOverall } from '@/api/endpoints/dashboard/dashboard-types'

export type DashboardCardProps = {
  title: string
  avatarIcon: string
  color?: ThemeColor
  row: keyof IDashboardOverall
  prefix?: string
}
