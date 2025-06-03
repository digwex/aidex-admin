'use client'

import type { CardProps } from '@mui/material/Card'
import MuiCard from '@mui/material/Card'

import { styled } from '@mui/material/styles'

import type { ThemeColor } from '@core/types'

type Props = CardProps & {
  color: ThemeColor
}

export const DashboardCard = styled(MuiCard)<Props>(({ color }) => ({
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
