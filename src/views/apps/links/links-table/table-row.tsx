import type { IReferralLink } from '@/api/endpoints/referrals/referrals-types'
import { CopyRefLink } from './copy-ref-link'

import { EditSpending } from './edit-spending'

type Props = IReferralLink

export const Row = ({
  id,
  code,
  link,
  spending,
  subscribed,
  unsubscribed,
  pressStart,
  commissions,
  invitedUsers,
  maxActiveUsers,
  telegramId
}: Props) => {
  return (
    <tr>
      <td>{code}</td>
      <td>{telegramId}</td>
      <CopyRefLink refLink={link} />
      <EditSpending id={id} defaultValue={spending} />
      <td>{pressStart}</td>
      <td>{unsubscribed}</td>
      <td>{subscribed}</td>

      {/* <td>{botBlocked}</td> */}
      <td>{commissions}</td>
      {/* <td>-</td> */}
      <td>{invitedUsers}</td>
      <td>-</td>
      <td>-</td>
      <td>{maxActiveUsers}</td>
    </tr>
  )
}
