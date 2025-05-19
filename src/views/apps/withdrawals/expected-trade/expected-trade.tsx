'use client'

import { useLazyGetWithdrawalsQuery } from '@/api/endpoints/withdrawals/withdrawals'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import ExpectedTradeItem from './expected-trade-item'
import { expectedTradeSortTitles } from './expected-trade-sort-titles'

const ExpectedTrade = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetWithdrawalsQuery}
      DataItem={ExpectedTradeItem}
      sortTitles={expectedTradeSortTitles}
      fetchParams={{ type: 'WAITING' }}
      order={{ field: 'createdAt', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default ExpectedTrade
