'use client'

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import Grid from '@mui/material/Grid2'

import CustomAvatar from '@core/components/mui/Avatar'
import { DashboardCard } from './dashboard-card'

// import { useDashboardOverallQuery } from '@/api/endpoints/dashboard/dashboard-api'

export const DashboardMainCards = () => {
  // const { data } = useDashboardOverallQuery()

  return (
    <Grid container spacing={2} columns={{ xl: 4, lg: 2, xs: 1 }}>
      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'primary'} sx={{ width: '100%' }}>
          <CardContent className='flex flex-col gap-1 p-4'>
            <div className='flex items-center gap-2 '>
              <CustomAvatar sx={{ width: 34, height: 34 }} color={'primary'} skin='light' variant='rounded'>
                <i className={'tabler-arrows-exchange text-[18px]'} />
              </CustomAvatar>
              <Typography variant='h6'>Торговый оборот</Typography>
            </div>
            <div className='flex items-start gap-[2px] flex-col flex-wrap'>
              <Typography>В $ = 0</Typography>
              <Typography>В SOL = 0 </Typography>
            </div>
          </CardContent>
        </DashboardCard>
      </Grid>
      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'success'} sx={{ width: '100%' }}>
          <CardContent className='flex flex-col gap-1 p-4'>
            <div className='flex items-center gap-2 '>
              <CustomAvatar sx={{ width: 34, height: 34 }} color={'success'} skin='light' variant='rounded'>
                <i className={'tabler-currency-dollar text-[18px]'} />
              </CustomAvatar>
              <Typography variant='h6'>Комиссии за сегодня</Typography>
            </div>
            <div className='flex items-start gap-[2px] flex-col flex-wrap'>
              <Typography>Общая ком.: 0 SOL/ 0 $</Typography>
              <Typography>Чистыми без партнёрских: 0 SOL / 0 $</Typography>
            </div>
          </CardContent>
        </DashboardCard>
      </Grid>

      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'warning'} sx={{ width: '100%' }}>
          <CardContent className='flex flex-col gap-1 p-4'>
            <div className='flex items-center gap-2 '>
              <CustomAvatar sx={{ width: 34, height: 34 }} color={'warning'} skin='light' variant='rounded'>
                <i className={'tabler-users'} />
              </CustomAvatar>
              <Typography variant='h6'>Максимальный online сегодня</Typography>
            </div>
            <div className='flex items-start gap-[2px] flex-col flex-wrap'>
              <Typography>Нажали старт: 0</Typography>
              <Typography>Открыли сделку: 0</Typography>
            </div>
          </CardContent>
        </DashboardCard>
      </Grid>

      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'info'} sx={{ width: '100%' }}>
          <CardContent className='flex flex-col gap-1 p-4'>
            <div className='flex items-center gap-2 '>
              <CustomAvatar sx={{ width: 34, height: 34 }} color={'info'} skin='light' variant='rounded'>
                <i className={'tabler-users-group'} />
              </CustomAvatar>
              <Typography variant='h6'>Online сейчас</Typography>
            </div>
            <div className='flex items-start gap-[2px] flex-col flex-wrap'>
              <Typography>На сайте: 0</Typography>
              <Typography>В боте: 0</Typography>
            </div>
          </CardContent>
        </DashboardCard>
      </Grid>
    </Grid>
  )
}
