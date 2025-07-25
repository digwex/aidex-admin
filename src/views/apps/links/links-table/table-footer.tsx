import type { IReferralStatistic } from '@/api/endpoints/referrals/referrals-types'

export const Footer = (props: IReferralStatistic) => {
  const {
    commissions,
    invitedUsers,
    maxActiveUsers,
    pressStart,
    spending,
    totalSolAmount,
    totalTrades,
    uniqueTradersCount
  } = props

  return (
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>{spending}</td>
      <td>{pressStart}</td>
      <td>{totalTrades}</td>
      <td>{uniqueTradersCount}</td>
      <td>{invitedUsers}</td>
      <td>{totalSolAmount} SOL</td>
      <td>{commissions} SOL</td>
      <td>{maxActiveUsers}</td>
    </tr>
  )
}
