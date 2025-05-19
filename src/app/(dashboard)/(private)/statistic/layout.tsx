import { Statistic } from '@/views/apps/statistic/Statistic'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Статистика'
}

const Layout = async ({ children }: Props) => {
  const tabs = [
    { value: `/statistic`, label: 'По дням', icon: 'tabler-clock-hour-4-filled' },
    { value: `/statistic/months`, label: 'По месяцам', icon: 'tabler-calendar' },
    { value: `/statistic/traders`, label: 'По трейдерам', icon: 'tabler-chart-candle' }
  ]

  return <Statistic tabs={tabs}>{children}</Statistic>
}

export default Layout
