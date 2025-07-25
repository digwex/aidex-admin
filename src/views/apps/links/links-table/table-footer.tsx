import type { IReferralStatistic } from '@/api/endpoints/referrals/referrals-types'

export const Footer = (props: IReferralStatistic) => {
  const { totalPressStartAllTime, totalInvitedPeople, totalCommissionSol, totalCommissionUsd } = props

  return (
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>{totalPressStartAllTime ?? '-'}</td>
      <td>-</td>
      <td>-</td>
      <td>{totalInvitedPeople ?? '-'}</td>
      <td>
        {totalCommissionUsd ?? '-'} $ / {totalCommissionSol ?? '-'} SOL
      </td>
      <td>-</td>
    </tr>
  )
}
