import type { PropsWithChildren } from 'react'

import type { Locale } from '@/configs/i18n'
import type { TabItem } from '@/views/sorts/Tabs'
import { WithdrawalsTitle } from './WithdrawalsTitle'
import { WithdrawalSorts } from './Sorts/WithdrawalSorts'

interface Props {
  tabs: TabItem[]
  lang: Locale
}

export const Withdrawals = ({ children, lang, tabs }: PropsWithChildren<Props>) => {
  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <WithdrawalsTitle lang={lang} />
        <WithdrawalSorts withdrawalsSortTabs={tabs} />
      </div>
      <div>{children}</div>
    </div>
  )
}
