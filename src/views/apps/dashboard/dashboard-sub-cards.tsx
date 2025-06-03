'use client'

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import Grid from '@mui/material/Grid2'

import CustomAvatar from '@core/components/mui/Avatar'
import { DashboardCard } from './dashboard-card'

// import { useDashboardOverallQuery } from '@/api/endpoints/dashboard/dashboard-api'

export const DashboardSubCards = () => {
  // const {data} = useDashboardOverallQuery()

  return (
    <Grid container spacing={2} columns={{ xl: 7, lg: 4, xs: 2 }}>
      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'success'} className='w-full'>
          <CardContent className='flex p-2 flex-col h-full justify-between gap-1'>
            <div className='flex items-center gap-2'>
              <CustomAvatar sx={{ width: 32, height: 32 }} color='success' skin='light' variant='rounded'>
                <i className={'tabler-arrows-exchange text-[26px]'} />
              </CustomAvatar>
              <Typography variant='h6' color='text.secondary' className='text-xs'>
                Торговый оборот за всё время
              </Typography>
            </div>
            <Typography>0 $ / 0 SOL</Typography>
          </CardContent>
        </DashboardCard>
      </Grid>
      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'success'} className='w-full'>
          <CardContent className='flex p-2 flex-col h-full justify-between gap-1'>
            <div className='flex items-center gap-2'>
              <CustomAvatar sx={{ width: 32, height: 32 }} color='success' skin='light' variant='rounded'>
                <i className={'tabler-user text-[26px]'} />
              </CustomAvatar>
              <Typography variant='h6' color='text.secondary' className='text-xs'>
                Нажали старт за всё время
              </Typography>
            </div>
            <Typography>0</Typography>
          </CardContent>
        </DashboardCard>
      </Grid>

      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'success'} className='w-full'>
          <CardContent className='flex p-2 flex-col h-full justify-between gap-1'>
            <div className='flex items-center gap-2'>
              <CustomAvatar sx={{ width: 32, height: 32 }} color='success' skin='light' variant='rounded'>
                <i className={'tabler-user-edit text-[26px]'} />
              </CustomAvatar>
              <Typography variant='h6' color='text.secondary' className='text-xs'>
                Открыли хотя бы 1 сделку
              </Typography>
            </div>
            <Typography>0</Typography>
          </CardContent>
        </DashboardCard>
      </Grid>

      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'success'} className='w-full'>
          <CardContent className='flex p-2 flex-col h-full justify-between gap-1'>
            <div className='flex items-center gap-2'>
              <CustomAvatar sx={{ width: 32, height: 32 }} color='success' skin='light' variant='rounded'>
                <i className={'tabler-currency-dollar text-[26px]'} />
              </CustomAvatar>
              <Typography variant='h6' color='text.secondary' className='text-xs'>
                Комиссии за всё время
              </Typography>
            </div>
            <Typography>0 $ / 0 SOL</Typography>
          </CardContent>
        </DashboardCard>
      </Grid>

      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'success'} className='w-full'>
          <CardContent className='flex p-2 flex-col h-full justify-between gap-1'>
            <div className='flex items-center gap-2'>
              <CustomAvatar sx={{ width: 32, height: 32 }} color='success' skin='light' variant='rounded'>
                <i className={'tabler-credit-card-pay text-[26px]'} />
              </CustomAvatar>
              <Typography variant='h6' color='text.secondary' className='text-xs'>
                Партнёрские выводы за все время
              </Typography>
            </div>

            <Typography>0 $ / 0 SOL</Typography>
          </CardContent>
        </DashboardCard>
      </Grid>

      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'success'} className='w-full'>
          <CardContent className='flex p-2 flex-col h-full justify-between gap-1'>
            <div className='flex items-center gap-2'>
              <CustomAvatar sx={{ width: 32, height: 32 }} color='success' skin='light' variant='rounded'>
                <i className={'tabler-currency-dollar text-[26px]'} />
              </CustomAvatar>
              <Typography variant='h6' color='text.secondary' className='text-xs'>
                Выводы за сегодня
              </Typography>
            </div>

            <Typography>0 $ / 0 SOL</Typography>
          </CardContent>
        </DashboardCard>
      </Grid>

      <Grid
        size={1}
        sx={{
          display: 'flex'
        }}
      >
        <DashboardCard color={'success'} className='w-full'>
          <CardContent className='flex p-2 flex-col h-full justify-between gap-1'>
            <div className='flex items-center gap-2'>
              <CustomAvatar sx={{ width: 32, height: 32 }} color='success' skin='light' variant='rounded'>
                <i className={'tabler-refresh text-[26px]'} />
              </CustomAvatar>
              <Typography variant='h6' color='text.secondary' className='text-xs'>
                Партнёрские
              </Typography>
            </div>

            <Typography>0</Typography>
          </CardContent>
        </DashboardCard>
      </Grid>
    </Grid>
  )
}
