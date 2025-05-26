import { ACTION_ACCESS } from '@/utils/accessActions'
import { AccessActionGuard } from '@/views/access-action-guard'
import { Referrals } from '@/views/apps/referrals'

export const metadata = {
  title: 'Реферальная программа'
}

const Page = () => {
  return (
    <AccessActionGuard action={ACTION_ACCESS.VIEW_REFERRAL_LEVELS}>
      <Referrals />
    </AccessActionGuard>
  )
}

export default Page
