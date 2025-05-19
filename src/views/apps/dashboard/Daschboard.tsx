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
    title: 'Комиссии за сегодня $',
    stats: '$2 537 365.43',
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
    title: 'Комиссии $',
    stats: '$3 564 344',
    avatarIcon: 'tabler-currency-dollar'
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
      <Grid container spacing={2} columns={{ xl: 4, lg: 2, xs: 1 }}>
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

      <Grid container spacing={2} columns={{ xl: 6, lg: 3, xs: 2 }}>
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
