import { ACTION_ACCESS } from '@/utils/accessActions'
import { AccessActionGuard } from '@/hocs/access-action-guard'

import { TablePage } from '@/views/apps/referrals/table-page'

export const metadata = {
  title: 'Реферальная программа'
}

const Page = () => {
  return (
    <AccessActionGuard action={ACTION_ACCESS.VIEW_REFERRAL_LEVELS}>
      <TablePage />
    </AccessActionGuard>
  )
}

export default Page
