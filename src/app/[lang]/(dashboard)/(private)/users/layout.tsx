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
      label: 'Рекламные пользователи',
      value: `/${lang}/users/advertisement`,
      icon: 'tabler-align-box-left-bottom'
    },
    {
      label: 'Список заблокированых',
      value: `/${lang}/users/blocked`,
      icon: 'tabler-lock-filled'
    },
    {
      label: 'Список удаённых',
      value: `/${lang}/users/deleted`,
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
