'use client'

import { useLazyByMonthsQuery } from '@/api/endpoints/statistics/statistics'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'

import StatisticFooterRow from './footer'
import StatisticRow from './row'
import { StatisticTitles } from './titles'

const Months = () => {
  return (
    <CustomTable
      customTableClass='[&_th]:whitespace-nowrap'
      isDate
      isSearch
      query={useLazyByMonthsQuery}
      DataItem={StatisticRow}
      DataFooter={StatisticFooterRow}
      sortTitles={StatisticTitles}
      order={{ field: 'date', direction: SORT_DIRECTION.ASC }}
    />
  )
}

export default Months
