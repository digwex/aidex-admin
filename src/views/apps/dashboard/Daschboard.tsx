'use client'

import Grid from '@mui/material/Grid2'

import { useDashboardOverallQuery } from '@/api/endpoints/dashboard/dashboard-api'
import { Loader } from '@/components/Loader'
import DashboardChart from '@/views/apps/dashboard/DaschboardChart'
import DashboardCard from '@/views/apps/dashboard/DashboardCard'
import DashboardSubCard from '@/views/apps/dashboard/DashboardSubCard'
import type { DashboardCardProps } from './types'

const data: DashboardCardProps[] = [
  {
    title: 'Сегодня открыли сделок $',
    prefix: '$',
    avatarIcon: 'tabler-arrows-exchange',
    color: 'primary',
    row: 'todayOpenTrades'
  },
  {
    title: 'Комиссии за сегодня $',
    prefix: '$',
    avatarIcon: 'tabler-currency-dollar',
    color: 'success',
    row: 'commissionsToday'
  },
  {
    title: 'Максимальный online сегодня',
    avatarIcon: 'tabler-users',
    color: 'warning',
    row: 'maxOnline'
  },
  {
    title: 'Online сейчас',
    avatarIcon: 'tabler-users-group',
    color: 'info',
    row: 'currOnline'
  }
]

const secondData: DashboardCardProps[] = [
  {
    title: 'Посетителей за все время',
    avatarIcon: 'tabler-user',
    row: 'visitorsTotal'
  },
  {
    title: 'Регистрации за все время ',
    avatarIcon: 'tabler-user-edit',
    row: 'registrationsTotal'
  },
  {
    title: 'Комиссии $',
    prefix: '$',
    avatarIcon: 'tabler-currency-dollar',
    row: 'commissions'
  },
  {
    title: 'Выводы за все время',
    prefix: '$',
    avatarIcon: 'tabler-credit-card-pay',
    row: 'withdrawalsTotal'
  },
  {
    title: 'Выводы за сегодня',
    prefix: '$',
    avatarIcon: 'tabler-currency-dollar',
    row: 'withdrawalsToday'
  },
  {
    title: 'Ожидают вывода',
    prefix: '$',
    avatarIcon: 'tabler-refresh',
    row: 'withdrawalsPending'
  }
]

const DashboardPage = () => {
  const { data: dataDashboard, isLoading, isError, error } = useDashboardOverallQuery()

  if (isError) {
    return <div>Overall произошла ошибка: {JSON.stringify(error, null, 2)}</div>
  }

  if (!dataDashboard || isLoading) {
    return <Loader />
  }

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
            <DashboardCard {...item} value={dataDashboard[item.row]} />
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
            <DashboardSubCard {...item} value={dataDashboard[item.row]} />
          </Grid>
        ))}
      </Grid>

      <DashboardChart />
    </div>
  )
}

export default DashboardPage
