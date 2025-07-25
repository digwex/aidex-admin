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
    subscribed,
    unsubscribed,
    pressStart,
    commissions,
    invitedUsers,
    maxActiveUsers
  } = props

  return (
    <tr>
      <td>{code}</td>
      <td>{telegramId}</td>
      <CopyRefLink refLink={link} />
      <EditSpending id={id} defaultValue={spending} />
      <td>{pressStart}</td>
      <td>{subscribed}</td>
      <td>{unsubscribed}</td>
      <td>{invitedUsers}</td>
      <td>{commissions}</td>
      <td>{maxActiveUsers}</td>
    </tr>
  )
}
