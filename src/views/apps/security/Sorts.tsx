'use client'

import { usePathname } from 'next/navigation'

import { Paper } from '@mui/material'

import type { Locale } from '@/configs/i18n'
import Tabs from '@/views/sorts/Tabs'

import { AdminSorts } from './AdminSorts/AdminSorts'
import { LoginsSorts } from './LoginsSorts'

interface Props {
  lang: Locale
}

export const Sorts = ({ lang }: Props) => {
  const pathname = usePathname()

  const tabs = [
    {
      value: `/${lang}/security`,
      label: 'Админы',
      icon: 'tabler-user-hexagon'
    },
    {
      value: `/${lang}/security/logins`,
      label: 'Логины безопасности',
      icon: 'tabler-square-key'
    }
  ]

  const showLoginsSorts = pathname.includes(tabs[1].value)
  const showAminSorts = pathname.includes(tabs[0].value) && !showLoginsSorts

  return (
    <Paper className='p-4 flex items-center gap-3 justify-between flex-wrap max800:flex-col'>
      <Tabs tabs={tabs} />
      {showAminSorts && <AdminSorts />}
      {showLoginsSorts && <LoginsSorts />}
    </Paper>
  )
}
