'use client'

import { useLazyGetWalletsQuery } from '@/api/endpoints/wallets/wallets'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import { WalletsTableRow } from './wallets-table-row'

const WalletsTable = () => {
  const transactionSortTitles = [
    { label: 'Кошелёк', sort: 'publicKey' },
    { label: 'ID', sort: 'nId' },
    { label: 'TG', sort: 'tgUsername' },
    { label: 'Баланс', sort: 'balance' },
    { label: 'Кол. сделок', sort: 'openedTrades' },
    { label: 'PNL', sort: 'pnl' },
    { label: 'Винрейт', sort: null }
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
