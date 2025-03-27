import { Users } from '@/views/apps/users/Users'

import type { Locale } from '@configs/i18n'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export const metadata = {
  title: 'Пользователи'
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  const tabs = [
    {
      label: 'Пользователь',
      value: `/${lang}/users`,
      icon: 'tabler-user'
    },
    {
      label: 'Партнеры',
      value: `/${lang}/users/partners`,
      icon: 'tabler-users-group'
    },
    {
      label: 'Верификация',
      value: `/${lang}/users/verification`,
      icon: 'tabler-checklist'
    },
    {
      label: 'KYC',
      value: `/${lang}/users/kyc`,
      icon: 'tabler-file-barcode'
    },
    {
      label: 'Список заблокированых',
      value: `/${lang}/users/blocked`,
      icon: 'tabler-circle-x'
    }
  ]

  return (
    <Users lang={lang} tabs={tabs}>
      {children}
    </Users>
  )
}

export default Layout
