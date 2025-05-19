'use client'

import { useLazyByMonthsQuery } from '@/api/endpoints/statistics/statistics'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import MonthsFooterRow from './months-footer-row'
import MonthsRow from './months-row'
import { monthsTitles } from './months-titles'

const Months = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyByMonthsQuery}
      DataItem={MonthsRow}
      DataFooter={MonthsFooterRow}
      sortTitles={monthsTitles}
      order={{ field: '_date_only', direction: SORT_DIRECTION.ASC }}
    />
  )
}

export default Months
