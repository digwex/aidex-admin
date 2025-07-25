import type { IReferralStatistic } from '@/api/endpoints/referrals/referrals-types'

export const Footer = (props: IReferralStatistic) => {
  const {
    totalPressStartAllTime,
    totalInvitedPeople,
    totalCommissionSol,
    totalCommissionUsd,
    totalSubscribed,
    totalUnsubscribed,
    totalMaxActiveUsers,
    totalSpending
  } = props

  return (
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>{totalSpending}</td>
      <td>{totalPressStartAllTime ?? '-'}</td>
      <td>{totalSubscribed ?? '-'}</td>
      <td>{totalUnsubscribed ?? '-'}</td>
      <td>{totalInvitedPeople ?? '-'}</td>
      <td>
        {totalCommissionUsd ?? '-'} $ / {totalCommissionSol ?? '-'} SOL
      </td>
      <td>{totalMaxActiveUsers ?? '-'}</td>
    </tr>
  )
}
