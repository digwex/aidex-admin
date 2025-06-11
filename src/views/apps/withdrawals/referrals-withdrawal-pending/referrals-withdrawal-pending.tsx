'use client'

import { useLazyGetReferralWithdrawalsQuery } from '@/api/endpoints/withdrawals/withdrawals'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import { ReferralsWithdrawalPendingRow } from './referrals-withdrawal-pending-row'
import { referralsWithdrawalPendingSortTitles } from './referrals-withdrawal-pending-sort-titles'

export const ReferralsWithdrawalPending = () => {
  return (
    <CustomTable
      isDate
      isSearch
      query={useLazyGetReferralWithdrawalsQuery}
      DataItem={ReferralsWithdrawalPendingRow}
      sortTitles={referralsWithdrawalPendingSortTitles}
      fetchParams={{ type: 'WITHDRAWAL_PENDING' }}
      order={{ field: 'createdAt', direction: SORT_DIRECTION.DESC }}
    />
  )
}
