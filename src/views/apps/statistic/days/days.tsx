'use client'

import CustomTable from '@/views/table/CustomTable'

import { useLazyByDaysQuery } from '@/api/endpoints/statistics/statistics'
import { SORT_DIRECTION } from '@/api/types'
import DaysFooterRow from './days-footer-row'
import DaysRow from './days-row'
import { daysTitles } from './days-titles'

const Days = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyByDaysQuery}
      DataItem={DaysRow}
      DataFooter={DaysFooterRow}
      sortTitles={daysTitles}
      order={{ field: '_date_only', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default Days
