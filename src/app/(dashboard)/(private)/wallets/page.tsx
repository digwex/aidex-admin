import { ACTION_ACCESS } from '@/utils/accessActions'
import { AccessActionGuard } from '@/hocs/access-action-guard'
import { Wallets } from '@/views/apps/wallets'

export const metadata = {
  title: 'Кошельки'
}

const Page = () => {
  return (
    <AccessActionGuard action={ACTION_ACCESS.VIEW_WALLETS}>
      <Wallets />
    </AccessActionGuard>
  )
}

export default Page
