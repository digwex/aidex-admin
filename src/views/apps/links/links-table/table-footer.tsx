import type { IReferralStatistic } from '@/api/endpoints/referrals/referrals-types'

export const Footer = (props: IReferralStatistic) => {
  const { totalPressStartAllTime, totalInvitedPeople, totalCommissionSol, totalCommissionUsd } = props

  return (
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>{totalPressStartAllTime ?? 0}</td>
      <td>-</td>
      <td>-</td>
      <td>{totalInvitedPeople}</td>
      <td>
        {totalCommissionUsd ?? 0} $ / {totalCommissionSol ?? 0} SOL
      </td>
      <td>-</td>
    </tr>
  )
}
