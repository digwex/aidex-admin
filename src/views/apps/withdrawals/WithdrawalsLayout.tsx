import { Outlet } from 'react-router'

import { AccessActionGuard } from '@/hocs/access-action-guard'
import { ACTION_ACCESS } from '@/utils/accessActions'
import { Withdrawals } from '@/views/apps/withdrawals/Withdrawals'

export const WithdrawalsLayout = () => {
  const tabs = [
    { value: `/withdrawals/pending`, label: 'Партнёрские выводы' },

    { value: `/withdrawals/history`, label: 'История выводов' }
  ]

  return (
    <AccessActionGuard action={ACTION_ACCESS.VIEW_WITHDRAWALS}>
      <Withdrawals tabs={tabs}>
        <Outlet />
      </Withdrawals>
    </AccessActionGuard>
  )
}
