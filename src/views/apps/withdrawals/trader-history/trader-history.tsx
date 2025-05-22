'use client'

import { useLazyGetHistoryWithdrawalsQuery } from '@/api/endpoints/withdrawals/withdrawals'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import TradeHistoryItem from './trade-history-item'
import { tradeHistorySortTitles } from './trade-history-sort-titles'

const TraderHistory = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetHistoryWithdrawalsQuery}
      DataItem={TradeHistoryItem}
      sortTitles={tradeHistorySortTitles}
      order={{ field: 'createdAt', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default TraderHistory
