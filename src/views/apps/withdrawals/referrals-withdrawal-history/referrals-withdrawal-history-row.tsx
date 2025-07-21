import clsx from 'clsx'

import { Link } from 'react-router'

import { useCheckAccess } from '@/hooks/useCheckAccess'
import { calcDate } from '@/utils/calcDate'
import { shortIdTooltip } from '@/utils/shortIdTooltip'

const capitalizeStatus = (status: string) => {
  switch (status) {
    case 'WITHDRAWAL_APPROVED':
      return 'Одобрен'
    case 'WITHDRAWAL_CANCELED':
      return 'Отменен'
    default:
      return status
  }
}

export const ReferralsWithdrawalHistoryRow = ({ id, createdAt, nId, walletTo, amount, signature, status }: any) => {
  const { checkRoute } = useCheckAccess()

  return (
    <tr>
      <td>{calcDate(createdAt)}</td>
      <td>
        <Link
          to={`/users/${nId}`}
          className={clsx('td_row', {
            'pointer-events-none': !checkRoute('/admin/user/:nId')
          })}
        >
          <span className='text-success'>{nId}</span>
        </Link>
      </td>
      <td>{shortIdTooltip(id)}</td>
      <td>${amount}</td>
      <td>{shortIdTooltip(walletTo)}</td>
      <td>
        <a
          href={`https://solscan.io/tx/${signature}`}
          target='_blank'
          rel='noreferrer'
          className='transition-all duration-300 hover:text-primary'
        >
          {shortIdTooltip(signature)}
        </a>
      </td>
      <td
        className={clsx({
          'text-success': status === 'WITHDRAWAL_APPROVED',
          'text-error': status === 'WITHDRAWAL_CANCELED'
        })}
      >
        {capitalizeStatus(status)}
      </td>
    </tr>
  )
}
