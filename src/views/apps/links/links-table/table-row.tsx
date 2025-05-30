import { BOT_URL } from '@/utils/constants'
import { CopyRefLink } from './copy-ref-link'

import { EditSpending } from './edit-spending'

import type { ILink } from '@/api/endpoints/links'

type Props = ILink

export const Row = ({
  id,
  name,
  refCode,
  spending,
  earned,
  pressStartCount,
  subscribed,
  unsubscribed,
  maxActiveUsers,
  botBlocked,
  invitedFriends
}: Props) => {
  const refLink = `https://t.me/${BOT_URL}?start=ref-${refCode}`

  return (
    <tr>
      <td>{name}</td>
      <CopyRefLink refLink={refLink} />
      <EditSpending id={id} defaultValue={spending} />
      <td>{subscribed}</td>
      <td>{unsubscribed}</td>
      <td>{pressStartCount}</td>
      <td>{botBlocked}</td>
      <td>{earned.toString()}</td>
      <td>-</td>
      <td>{invitedFriends}</td>
      <td>{maxActiveUsers}</td>
    </tr>
  )
}
