'use client'

import { useParams } from 'next/navigation'

import { useLazyGetUserTransactionsQuery } from '@/api/endpoints/user/user-api'
import { TransactionRow } from '@/views/apps/users/user/TransactionRow'
import CustomTable from '@/views/table/CustomTable'
import { fakeData, TRANSACTION_TYPE } from '@/api/endpoints/user/user-types'
import { SORT_DIRECTION } from '@/api/types'

const Withdrawals = () => {
  const { id } = useParams()

  const transactionSortTitles = [
    { label: 'ID', sort: 'nId' },
    { label: 'Дата', sort: 'createdAt' },
    { label: 'Монета', sort: 'symbolCoin' },
    { label: 'Кол-во', sort: 'amount' },
    { label: 'Зачислено на баланс', sort: 'toUSDT' },
    { label: 'Баланс', sort: 'balance' },
    { label: 'Описание', sort: null },
    { label: 'Транзакция', sort: null },
    { label: 'Перевод', sort: null }
  ]

  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetUserTransactionsQuery}
      DataItem={TransactionRow}
      sortTitles={transactionSortTitles}
      fetchParams={{ type: TRANSACTION_TYPE.WITHDRAWAL, uid: id }}
      fakeData={[fakeData]}
      order={{ field: 'createdAt', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default Withdrawals
