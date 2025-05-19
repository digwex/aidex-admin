'use client'

import { useLazyByTraderQuery } from '@/api/endpoints/statistics/statistics'
import TradersFooterRow from './traders-footer-row'
import TradersRow from './traders-row'
import { tradersTitles } from './traders-titles'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'

const Traders = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyByTraderQuery}
      DataItem={TradersRow}
      DataFooter={TradersFooterRow}
      sortTitles={tradersTitles}
      order={{ field: '_registered', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default Traders
