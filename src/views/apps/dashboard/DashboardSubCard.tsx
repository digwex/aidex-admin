'use client'

import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import type { CardProps } from '@mui/material/Card'

import classnames from 'classnames'

import type { ThemeColor } from '@core/types'

import CustomAvatar from '@core/components/mui/Avatar'
import type { DashboardCardProps } from '@/types/pages/dashboardTypes'

type Props = CardProps & {
  color: ThemeColor
}

const Card = styled(MuiCard)<Props>(({ color }) => ({
  height: '100%',
  transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out, margin 0.3s ease-in-out',
  borderBottomWidth: '2px',
  borderBottomColor: `var(--mui-palette-${color}-darkerOpacity)`,
  '[data-skin="bordered"] &:hover': {
    boxShadow: 'none'
  },
  '&:hover': {
    borderBottomWidth: '3px',
    borderBottomColor: `var(--mui-palette-${color}-main) !important`,
    boxShadow: 'var(--mui-customShadows-lg)',
    marginBlockEnd: '-1px'
  }
}))

const DashboardSubCard = (props: DashboardCardProps) => {
  const { title, stats, avatarIcon, color } = props

  return (
    <Card color={color || 'primary'} sx={{ width: '100%' }}>
      <CardContent className='flex p-2 flex-col h-full justify-between gap-1'>
        <div className='flex items-center gap-2'>
          <CustomAvatar sx={{ width: 32, height: 32 }} color='success' skin='light' variant='rounded'>
            <i className={classnames(avatarIcon, 'text-[26px]')} />
          </CustomAvatar>
          <Typography variant='h6' color='text.secondary' className='text-sm'>
            {title}
          </Typography>
        </div>
        <Typography color='text.primary' className='text-lg'>
          {stats}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DashboardSubCard
