import type { IReferralsData } from '@/api/endpoints/referrals/referrals-types'
import { CopyRefLink } from './copy-ref-link'

import { EditSpending } from './edit-spending'

export const Row = (props: IReferralsData) => {
  const {
    id,
    telegramId,
    link,
    code,
    spending,
    pressStart,
    commissions,
    invitedUsers,
    maxActiveUsers,
    totalSolAmount,
    totalTrades,
    uniqueTradersCount
  } = props

  return (
    <tr>
      <td>{code}</td>
      <td>{telegramId}</td>
      <CopyRefLink refLink={link} />
      <EditSpending id={id} defaultValue={spending} />
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
