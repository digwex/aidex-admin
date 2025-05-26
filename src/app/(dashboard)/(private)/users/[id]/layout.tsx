'use client'

import { UserLayout } from '@/views/apps/users/user/UserLayout'
import { AccessActionGuard } from '@/views/access-action-guard'
import { ACTION_ACCESS } from '@/utils/accessActions'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <AccessActionGuard action={ACTION_ACCESS.VIEW_USER_DETAIL}>
      <UserLayout>{children}</UserLayout>
    </AccessActionGuard>
  )
}

export default Layout
