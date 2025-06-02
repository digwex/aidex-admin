'use client'

import { useLazyByTraderQuery } from '@/api/endpoints/statistics/statistics'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import TradersFooterRow from './traders-footer-row'
import TradersRow from './traders-row'
import { tradersTitles } from './traders-titles'

const Traders = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyByTraderQuery}
      DataItem={TradersRow}
      DataFooter={TradersFooterRow}
      sortTitles={tradersTitles}
      order={{ field: 'nId', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default Traders
