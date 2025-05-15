'use client'

import { usePathname } from 'next/navigation'

import { Paper } from '@mui/material'

import Tabs from '@/views/sorts/Tabs'
import { BannersSort } from './BannersSort'
import { PromoSort } from './PromoSort'

export const Sorts = () => {
  const pathname = usePathname()

  const tabs = [
    {
      value: `/content`,
      label: 'Баннеры',
      icon: 'tabler-photo'
    },
    {
      value: `/content/promo`,
      label: 'Промоматериалы',
      icon: 'tabler-cast'
    }
  ]

  const showBannerSorts = pathname === tabs[0].value
  const showPromoSorts = pathname === tabs[1].value

  return (
    <Paper className='flex items-center justify-between gap-3 flex-wrap p-4'>
      <Tabs tabs={tabs} />
      {showBannerSorts && <BannersSort />}
      {showPromoSorts && <PromoSort />}
    </Paper>
  )
}
