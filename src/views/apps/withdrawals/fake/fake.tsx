'use client'

import { useLazyGetWithdrawalsQuery } from '@/api/endpoints/withdrawals/withdrawals'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import FakeItem from './fake-item'
import { fakeSortTitles } from './fake-sort-titles'

const FakeHistory = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetWithdrawalsQuery}
      DataItem={FakeItem}
      sortTitles={fakeSortTitles}
      fetchParams={{ type: 'FAKE' }}
      order={{ field: 'createdAt', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default FakeHistory
