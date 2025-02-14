'use client'

import { usePathname } from 'next/navigation'

import { DepositSorts } from './DepositSorts'
import { DefaultSorts } from './DefaultSorts'

interface Props {
  withdrawalsSortTabs: Array<{ value: string; label: React.ReactNode }>
}

export const WithdrawalSorts = ({ withdrawalsSortTabs }: Props) => {
  const pathname = usePathname()

  const isDepositPage = pathname.includes('/withdrawals/deposits')

  // if (isDepositPage) {
  //   return <DepositSorts />
  // }

  return <DefaultSorts tabs={isDepositPage ? [] : withdrawalsSortTabs} />
}
