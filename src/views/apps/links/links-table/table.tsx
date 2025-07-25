import { Footer } from './table-footer'
import { tableHeaders } from './table-headers'

import { Row } from './table-row'

import { useLazyGetReferralLinksQuery } from '@/api/endpoints/referrals/referrals-api'
import CustomTable from '@/views/table/CustomTable'

export const LinksTable = () => {
  return (
    <CustomTable
      isSearch
      isDate
      fetchParams={{ includeStatistics: true }}
      query={useLazyGetReferralLinksQuery}
      sortTitles={tableHeaders}
      DataItem={Row}
      DataFooter={Footer}
      footerDataKey='statistics'
    />
  )
}
