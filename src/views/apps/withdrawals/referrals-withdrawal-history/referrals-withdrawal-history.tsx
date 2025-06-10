'use client'

import { useLazyGetReferralWithdrawalsQuery } from '@/api/endpoints/withdrawals/withdrawals'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import { ReferralsWithdrawalHistoryRow } from './referrals-withdrawal-history-row'
import { referralsWithdrawalHistorySortTitles } from './referrals-withdrawal-history-sort-titles'

export const ReferralsWithdrawalHistory = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetReferralWithdrawalsQuery}
      DataItem={ReferralsWithdrawalHistoryRow}
      sortTitles={referralsWithdrawalHistorySortTitles}
      fetchParams={{ type: ['WITHDRAWAL_APPROVED', 'WITHDRAWAL_CANCELED'] }}
      order={{ field: 'createdAt', direction: SORT_DIRECTION.DESC }}
    />
  )
}
