import Link from 'next/link'

import clsx from 'clsx'

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
          href={`/users/${nId}`}
          className={clsx('td_row', {
            'pointer-events-none': !checkRoute('/admin/user/:nId')
          })}
        >
          <span className='text-success'>{nId}</span>
        </Link>
      </td>
      <td>{withdrawalsTotal}</td>
      <td>${formatCurrency(Number(withdrawalsSum))}</td>
      <td className='w250'>${formatCurrency(Number(amount))}</td>
      <td className='w250'>${formatCurrency(Number(balanceAfter))}</td>
      <td>
        <div className='flex h-full justify-start items-center gap-4'>
          <ReferralsWithdrawalPendingApprove id={id} />
          <ReferralsWithdrawalPendingCancel id={id} />
        </div>
      </td>
    </tr>
  )
}
