import { ACTION_ACCESS } from '@/utils/accessActions'
import { AccessActionGuard } from '@/hocs/access-action-guard'
import { Withdrawals } from '@/views/apps/withdrawals/Withdrawals'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Вывод'
}

const Layout = async ({ children }: Props) => {
  const tabs = [
    { value: `/withdrawals`, label: 'Партнёрские выводы' },

    { value: `/withdrawals/trader-history`, label: 'История выводов' }
  ]

  return (
    <AccessActionGuard action={ACTION_ACCESS.VIEW_WITHDRAWALS}>
      <Withdrawals tabs={tabs}>{children}</Withdrawals>
    </AccessActionGuard>
  )
}

export default Layout
