'use client'

import type { PropsWithChildren } from 'react'

import { Paper } from '@mui/material'

import { Title } from '@/components/Title'

import { Search } from '@/views/sorts/Search'
import Tabs from '@/views/sorts/Tabs'

const tabs = [
  {
    label: 'Создание ссылки',
    value: '/referrals'
  },
  {
    label: 'Рефералы',
    value: '/referrals/table'
  }
]

export const ReferralsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='space-y-4'>
      <Title icon='tabler-wallet' title='Реферальная программа' />

      <Paper className='flex p-4 items-center justify-between gap-3 max800:flex-col max800:w-full'>
        <Tabs tabs={tabs} />

        <Search placeholder='Поиск по ID, Реф коду' className='max-w-[440px]  max800:max-w-full w-full' />
      </Paper>

      {children}
    </div>
  )
}
