import clsx from 'clsx'

import { Link } from 'react-router'

import type { IWithdrawal } from '@/api/endpoints/withdrawals/withdrawals.interface'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import { calcDate } from '@/utils/calcDate'
import CopyHash from '@/utils/CopyHash'
import { formatCurrency } from '@/utils/formatCurrency'
import { getStatusPaymentHistory } from '@/utils/getStatusPaymentHistory'
import { shortIdTooltip } from '@/utils/shortIdTooltip'

type Props = IWithdrawal

const TradeHistoryItem = ({ createdAt, userNid, id, withdrawalAmount, address, signature, status }: Props) => {
  const { checkRoute } = useCheckAccess()

  return (
    <tr>
      <td className='w-[100px]'>{calcDate(createdAt)}</td>
      <td>
        <Link
          to={`/users/${userNid}`}
          className={clsx('flex items-center justify-center gap-2', {
            'pointer-events-none': !checkRoute('/admin/user/:nId')
          })}
        >
          <span className='text-success'>{userNid}</span>
        </Link>
      </td>
      <td>{shortIdTooltip(id)}</td>
      <td>${formatCurrency(Number(withdrawalAmount))}</td>
      <td>{shortIdTooltip(address)}</td>
      <td>
        <CopyHash hash={signature} />
      </td>
      <td>{getStatusPaymentHistory({ status })}</td>
    </tr>
  )
}

export default TradeHistoryItem
