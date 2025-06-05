import type { IReferralLink } from '@/api/endpoints/referrals/referrals-types'

import { CopyButton } from '@/hooks/useCopy'
import { EditSpending } from '@/views/apps/links/links-table/edit-spending'

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
      <td>
        <div className='flex gap-2 items-center'>
          <a href={link} target='_blank' className='hover:text-primary transition-all duration-300 truncate w-[200px]'>
            {link}
          </a>
          <CopyButton text={link} />
        </div>
      </td>
      <EditSpending id={id} defaultValue={spending} />
      <td>{subscribed}</td>
      <td>{unsubscribed}</td>
      <td>{pressStart}</td>
      {/* <td>{botBlocked}</td> */}
      <td>{commissions}</td>
      {/* <td>-</td> */}
      <td>{invitedUsers}</td>
      <td>{maxActiveUsers}</td>
    </tr>
  )
}
