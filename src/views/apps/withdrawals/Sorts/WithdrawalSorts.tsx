import { useLocation } from 'react-router'

import { DefaultSorts } from './DefaultSorts'

interface Props {
  withdrawalsSortTabs: Array<{ value: string; label: React.ReactNode }>
}

export const WithdrawalSorts = ({ withdrawalsSortTabs }: Props) => {
  const { pathname } = useLocation()

  const isDepositPage = pathname.includes('/withdrawals/deposits')

  return <DefaultSorts tabs={isDepositPage ? [] : withdrawalsSortTabs} />
}
