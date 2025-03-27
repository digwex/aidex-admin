'use client'

import Grid from '@mui/material/Grid2'

import DashboardChart from '@/views/apps/dashboard/DaschboardChart'
import DashboardCard from '@/views/apps/dashboard/DashboardCard'
import DashboardSubCard from '@/views/apps/dashboard/DashboardSubCard'
import type { DashboardCardProps } from './types'

const data: DashboardCardProps[] = [
  {
    title: 'Сегодня открыли сделок $',
    stats: '+$12 537 365.43',
    avatarIcon: 'tabler-arrows-exchange',
    color: 'primary'
  },
  {
    title: 'Профит трейдеров сегодня',
    stats: '-$2 537 365.43',
    avatarIcon: 'tabler-currency-dollar',
    color: 'success'
  },
  {
    title: 'Максимальный online сегодня',
    stats: '12 537',
    avatarIcon: 'tabler-users',
    color: 'warning'
  },
  {
    title: 'Online сейчас',
    stats: '24 545',
    avatarIcon: 'tabler-users-group',
    color: 'info'
  },
  {
    title: 'Расходы за все время',
    stats: '$ 7 364 / 435',
    avatarIcon: 'tabler-credit-card-pay',
    color: 'warning'
  }
]

const secondData: DashboardCardProps[] = [
  {
    title: 'Посетителей за все время',
    stats: '3',
    avatarIcon: 'tabler-user'
  },
  {
    title: 'Регистрации за все время ',
    stats: '154 852',
    avatarIcon: 'tabler-user-edit'
  },
  {
    title: 'FTD',
    stats: '20',
    avatarIcon: 'tabler-wallet'
  },
  {
    title: 'Депозиты за все время',
    stats: '$ 7 365',
    avatarIcon: 'tabler-credit-card-refund'
  },
  {
    title: 'Депозиты сегодня',
    stats: '$356',
    avatarIcon: 'tabler-currency-dollar'
  },
  {
    title: 'Реальные депозиты',
    stats: '$ 7 365',
    avatarIcon: 'tabler-cash-banknote'
  },
  {
    title: 'Выводы за все время',
    stats: '$ 7 365',
    avatarIcon: 'tabler-credit-card-pay'
  },
  {
    title: 'Выводы за сегодня',
    stats: '$ 7 365',
    avatarIcon: 'tabler-currency-dollar'
  },
  {
    title: 'Ожидают вывода',
    stats: '$ 7 365',
    avatarIcon: 'tabler-refresh'
  }
]

const DashboardPage = () => {
  return (
    <div className='grid h-full grid-rows-[auto_auto_1fr] gap-2 overflow-y-auto'>
      <Grid container spacing={2} columns={{ xl: 5, lg: 2, xs: 1 }}>
        {data.map((item, index) => (
          <Grid
            size={1}
            key={index}
            sx={{
              display: 'flex'
            }}
          >
            <DashboardCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} columns={{ xl: 9, lg: 5, xs: 2 }}>
        {secondData.map((item, index) => (
          <Grid
            size={1}
            key={index}
            sx={{
              display: 'flex'
            }}
          >
            <DashboardSubCard {...item} />
          </Grid>
        ))}
      </Grid>

      <DashboardChart />
    </div>
  )
}

export default DashboardPage
