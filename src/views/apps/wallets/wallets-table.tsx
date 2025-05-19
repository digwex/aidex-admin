'use client'

import CustomTable from '@/views/table/CustomTable'
import { SORT_DIRECTION } from '@/api/types'
import { WalletsTableRow } from './wallets-table-row'
import { useLazyGetWalletsQuery } from '@/api/endpoints/wallets/wallets'

const WalletsTable = () => {
  const transactionSortTitles = [
    { label: 'Кошелёк', sort: 'wallet' },
    { label: 'Баланс', sort: 'balance' }
  ]

  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetWalletsQuery}
      DataItem={WalletsTableRow}
      sortTitles={transactionSortTitles}
      order={{ field: 'balance', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default WalletsTable
