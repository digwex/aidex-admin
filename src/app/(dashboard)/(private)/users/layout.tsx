import { Users } from '@/views/apps/users/Users'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Пользователи'
}

const Layout = async ({ children }: Props) => {
  const tabs = [
    {
      label: 'Пользователь',
      value: `/users`,
      icon: 'tabler-user'
    },
    {
      label: 'Рекламные пользователи',
      value: `/users/advertisement`,
      icon: 'tabler-align-box-left-bottom'
    },
    {
      label: 'Список заблокированых',
      value: `/users/blocked`,
      icon: 'tabler-lock-filled'
    },
    {
      label: 'Список удаённых',
      value: `/users/deleted`,
      icon: 'tabler-circle-x'
    }
  ]

  return <Users tabs={tabs}>{children}</Users>
}

export default Layout
