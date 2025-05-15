import type { PropsWithChildren } from 'react'

import type { TabItem } from '@/views/sorts/Tabs'
import { WithdrawalsTitle } from './WithdrawalsTitle'
import { WithdrawalSorts } from './Sorts/WithdrawalSorts'

interface Props {
  tabs: TabItem[]
}

export const Withdrawals = ({ children, tabs }: PropsWithChildren<Props>) => {
  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <WithdrawalsTitle />
        <WithdrawalSorts withdrawalsSortTabs={tabs} />
      </div>
      <div>{children}</div>
    </div>
  )
}
