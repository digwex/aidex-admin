'use client'

import { useLazyGetWalletsQuery } from '@/api/endpoints/wallets/wallets'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import { WalletsTableRow } from './wallets-table-row'

const WalletsTable = () => {
  const transactionSortTitles = [
    { label: 'Кошелёк', sort: 'publicKey' },
    { label: 'ID', sort: null },
    { label: 'TG', sort: null },
    { label: 'Баланс', sort: 'balance' },
    { label: 'Кол. сделок', sort: 'trades' }
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
