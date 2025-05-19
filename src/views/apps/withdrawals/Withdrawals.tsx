import type { PropsWithChildren } from 'react'

import type { TabItem } from '@/views/sorts/Tabs'
import { WithdrawalSorts } from './Sorts/WithdrawalSorts'
import { Title } from '@/components/Title'

interface Props {
  tabs: TabItem[]
}

export const Withdrawals = ({ children, tabs }: PropsWithChildren<Props>) => {
  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <Title icon='tabler-wallet' title='Выводы' />

        <WithdrawalSorts withdrawalsSortTabs={tabs} />
      </div>
      <div>{children}</div>
    </div>
  )
}
