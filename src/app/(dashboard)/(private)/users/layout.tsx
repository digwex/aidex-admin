import { ACTION_ACCESS } from '@/utils/accessActions'

import { AccessActionGuard } from '@/hocs/access-action-guard'

import { Users } from '@/views/apps/users/Users'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Пользователи'
}

const Layout = ({ children }: Props) => {
  return (
    <AccessActionGuard action={ACTION_ACCESS.VIEW_USERS}>
      <Users>{children}</Users>
    </AccessActionGuard>
  )
}

export default Layout
