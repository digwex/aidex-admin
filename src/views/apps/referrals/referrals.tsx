'use client'

import { Title } from '@/components/Title'

import { LinksHeader, LinksTable } from '../links'

import { EditReferralsPercent } from './edit-referrals-percent'

export const Referrals = () => {
  return (
    <div className='space-y-4'>
      <Title icon='tabler-wallet' title='Реферальная программа' />

      <EditReferralsPercent />

      <LinksHeader />

      <LinksTable />
    </div>
  )
}
