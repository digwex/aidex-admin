'use client'

import { Button } from '@mui/material'

import { Title } from '@/components/Title'

import { LinksHeader, LinksTable } from '../links'

import { EditReferralsPercent } from './edit-referrals-percent'
import { Search } from '@/views/sorts/Search'

export const Referrals = () => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-3 flex-wrap max700:flex-col'>
        <Title icon='tabler-wallet' title='Реферальная программа' />
        <div className='flex items-center gap-3 max700:flex-col max700:w-full'>
          <Button className='max700:w-full' variant='contained' color='success'>
            Создание ссылки
          </Button>
          <Button className='max700:w-full' variant='outlined' color='warning'>
            Рефералы
          </Button>
          <Search placeholder='Поиск по ID, Реф коду' />
        </div>
      </div>

      <EditReferralsPercent />

      <LinksHeader />

      <LinksTable />
    </div>
  )
}
