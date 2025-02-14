import type { ThemeColor } from '@/@core/types'

export type DashboardCardProps = {
  title: string
  stats: number | string

  avatarIcon: string
  color?: ThemeColor
}
