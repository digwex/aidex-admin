import { Title } from '@/components/Title'
import { UsersSortsWrapper } from '@/views/apps/users/UsersSortsWrapper'
import { Sorts } from '@/views/sorts/Sorts'

import type { Locale } from '@configs/i18n'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  const tabs = [
    {
      label: 'Пользователь',
      value: `/${lang}/apps/users`,
      icon: 'tabler-user'
    },
    {
      label: 'Партнеры',
      value: `/${lang}/apps/users/partners`,
      icon: 'tabler-users-group'
    },
    {
      label: 'Верификация',
      value: `/${lang}/apps/users/verification`,
      icon: 'tabler-checklist'
    },
    {
      label: 'KYC',
      value: `/${lang}/apps/users/kyc`,
      icon: 'tabler-file-barcode'
    },
    {
      label: 'Список заблокированых',
      value: `/${lang}/apps/users/blocked`,
      icon: 'tabler-circle-x'
    }
  ]

  return (
    <div>
      <div className='space-y-4 mb-4'>
        <UsersSortsWrapper lang={lang}>
          <Title icon='tabler-user' title='Пользователи' />
          <Sorts tabs={{ tabs }} />
        </UsersSortsWrapper>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
