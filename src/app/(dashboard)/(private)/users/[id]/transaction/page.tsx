'use client'

import { useParams } from 'next/navigation'

import CustomTable from '@/views/table/CustomTable'
import { useLazyGetUserTransactionsQuery } from '@/api/endpoints/user/user-api'
import { TransactionRow } from '@/views/apps/users/user/TransactionRow'
import { SORT_DIRECTION } from '@/api/types'
import { TRANSACTION_TYPE } from '@/api/endpoints/user/user-types'

const Transaction = () => {
  const { id } = useParams()

  const transactionSortTitles = [
    { label: 'ID', sort: 'nId' },
    { label: 'Дата', sort: 'createdAt' },
    { label: 'Монета', sort: 'symbolCoin' },
    { label: 'Кол-во', sort: 'amount' },
    { label: 'Зачислено на баланс', sort: 'toUSDT' },
    { label: 'Баланс', sort: 'balance' },
    { label: 'Описание', sort: null },
    { label: null, sort: null }
  ]

  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetUserTransactionsQuery}
      DataItem={TransactionRow}
      sortTitles={transactionSortTitles}
      fetchParams={{ type: TRANSACTION_TYPE.DEPOSIT, uid: id }}
      order={{ field: 'createdAt', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default Transaction
