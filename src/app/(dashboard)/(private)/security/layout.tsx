import { ACTION_ACCESS } from '@/utils/accessActions'
import { AccessActionGuard } from '@/hocs/access-action-guard'
import { Security } from '@/views/apps/security/security'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Защита'
}

const Layout = async ({ children }: Props) => {
  return (
    <AccessActionGuard action={ACTION_ACCESS.VIEW_SECURITY}>
      <Security>{children}</Security>
    </AccessActionGuard>
  )
}

export default Layout
