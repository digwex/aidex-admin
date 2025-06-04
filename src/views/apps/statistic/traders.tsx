'use client'

import { useLazyByTraderQuery } from '@/api/endpoints/statistics/statistics'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'

import StatisticFooterRow from './footer'
import StatisticRow from './row'
import { StatisticTitles } from './titles'

const Traders = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyByTraderQuery}
      DataItem={StatisticRow}
      DataFooter={StatisticFooterRow}
      sortTitles={StatisticTitles}
      order={{ field: 'nId', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default Traders
