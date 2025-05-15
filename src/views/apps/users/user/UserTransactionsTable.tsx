'use client'

import { useParams } from 'next/navigation'

import CustomTable from '@/views/table/CustomTable'
import { useLazyGetUserTransactionsQuery } from '@/api/endpoints/user/user-api'
import { SORT_DIRECTION } from '@/api/types'
import { TransactionRow } from './TransactionRow'

export const allSortTitles = [
  { label: 'ID', sort: 'nId' },
  { label: 'Дата', sort: 'createdAt' },
  { label: 'Монета', sort: 'coinName' },
  { label: 'Кол-во', sort: 'amount' },
  { label: 'Зачислено на баланс', sort: 'toUSDT' },
  { label: 'Баланс', sort: 'balance' },
  { label: 'Описание', sort: 'note' },
  { label: null, sort: null }
]

const UserTransactionsTable = () => {
  const { id } = useParams()

  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetUserTransactionsQuery}
      DataItem={TransactionRow}
      sortTitles={allSortTitles}
      fetchParams={{ uid: id }}
      order={{ field: 'createdAt', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default UserTransactionsTable
