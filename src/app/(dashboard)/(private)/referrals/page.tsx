import { ACTION_ACCESS } from '@/utils/accessActions'
import { AccessActionGuard } from '@/hocs/access-action-guard'

import { LinksPage } from '@/views/apps/referrals/links-page'

export const metadata = {
  title: 'Реферальная программа'
}

const Page = () => {
  return (
    <AccessActionGuard action={ACTION_ACCESS.VIEW_REFERRAL_LEVELS}>
      <LinksPage />
    </AccessActionGuard>
  )
}

export default Page
