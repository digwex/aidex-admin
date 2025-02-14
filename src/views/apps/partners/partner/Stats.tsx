import Grid from '@mui/material/Grid2'

import { Card, CardContent, Typography } from '@mui/material'

import classnames from 'classnames'

import CustomAvatar from '@/@core/components/mui/Avatar'
import type { ThemeColor } from '@/@core/types'

interface Props {
  avatarIcon: string
  title: string
  color?: ThemeColor
  stats: React.ReactNode
}

const data: Props[] = [
  {
    avatarIcon: 'tabler-users',
    stats: 3,
    title: 'Посетителей за все время'
  },
  {
    avatarIcon: 'tabler-users',
    stats: '154 852',
    title: 'Регистрации за все время '
  },
  {
    avatarIcon: 'tabler-users',
    stats: '20',
    title: 'FTD '
  },
  {
    avatarIcon: 'tabler-users',
    stats: '$ 7 365',
    title: 'Депозиты за все время'
  },
  {
    avatarIcon: 'tabler-users',
    stats: '$ 365',
    title: 'Депозиты сегодня'
  },
  {
    avatarIcon: 'tabler-users',
    stats: '$ 1665',
    title: 'Выводы за все время'
  },
  {
    avatarIcon: 'tabler-users',
    stats: '$ 65',
    title: 'Выводы за сегодня'
  },
  {
    avatarIcon: 'tabler-users',
    stats: 11,
    title: 'Холд'
  }
]

export const Stats = () => {
  return (
    <Grid container spacing={2} columns={{ xl: 8, lg: 4, xs: 2 }}>
      {data.map(({ stats, title, color, avatarIcon }, index) => (
        <Grid
          size={1}
          key={index}
          sx={{
            display: 'flex'
          }}
        >
          <Card key={index} color={color || 'primary'} sx={{ width: '100%' }}>
            <CardContent className='flex flex-col gap-1 p-4'>
              <div className='flex items-center gap-2 '>
                <CustomAvatar sx={{ width: 34, height: 34 }} color={color} skin='light' variant='rounded'>
                  <i className={classnames(avatarIcon, 'text-[18px]')} />
                </CustomAvatar>
                <Typography variant='h6'>{title}</Typography>
              </div>
              <Typography>{stats}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
