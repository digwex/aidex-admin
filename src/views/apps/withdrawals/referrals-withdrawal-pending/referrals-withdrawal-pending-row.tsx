import clsx from 'clsx'

import { Link } from 'react-router'

import { useCheckAccess } from '@/hooks/useCheckAccess'
import { calcDate } from '@/utils/calcDate'
import { formatCurrency } from '@/utils/formatCurrency'
import { ReferralsWithdrawalPendingApprove } from './referrals-withdrawal-pending-approve'
import { ReferralsWithdrawalPendingCancel } from './referrals-withdrawal-pending-cancel'

export const ReferralsWithdrawalPendingRow = ({
  id,
  createdAt,
  nId,
  withdrawalsTotal,
  withdrawalsSum,
  amount,
  balanceAfter
}: any) => {
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
      <td>{withdrawalsTotal}</td>
      <td>${formatCurrency(Number(withdrawalsSum), 6)}</td>
      <td className='w250'>${amount}</td>
      <td className='w250'>${formatCurrency(Number(balanceAfter), 6)}</td>
      <td>
        <div className='flex h-full justify-start items-center gap-4'>
          <ReferralsWithdrawalPendingApprove id={id} />
          <ReferralsWithdrawalPendingCancel id={id} />
        </div>
      </td>
    </tr>
  )
}
