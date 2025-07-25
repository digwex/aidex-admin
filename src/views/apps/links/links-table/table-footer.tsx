import type { IReferralStatistic } from '@/api/endpoints/referrals/referrals-types'

export const Footer = (props: IReferralStatistic) => {
  const {
    totalCommissionSol,
    totalCommissionUsd,
    totalInvitedPeople,
    totalOpenedDeals,
    totalPressStartAllTime,
    totalPressStartSpecificDay,
    totalSolInDeals,
    uniquePeopleOpenedDeals
  } = props

  return (
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>
        {totalPressStartAllTime}
        {totalPressStartSpecificDay && <>/ {totalPressStartSpecificDay}</>}
      </td>
      <td>{totalOpenedDeals}</td>
      <td>{uniquePeopleOpenedDeals}</td>
      <td>-</td>
      <td>-</td>
      <td>{totalInvitedPeople}</td>
      <td>{totalSolInDeals} SOL</td>
      <td>
        ${totalCommissionUsd} / {totalCommissionSol} SOL
      </td>
      <td>-</td>
    </tr>
  )
}
