import { memo } from 'react'

import Link from 'next/link'

import clsx from 'clsx'

import type { IWithdrawal } from '@/api/endpoints/withdrawals/withdrawals.interface'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import { calcDate } from '@/utils/calcDate'
import { formatCurrency } from '@/utils/formatCurrency'
import { ApproveTrade } from './approve-trade'
import { CancelTrade } from './cancel-trade'

type Props = IWithdrawal

const ExpectedTradeItem = ({ id, createdAt, userNid, totalWithdrawals, withdrawalAmount, withdrawalsSum }: Props) => {
  const { checkRoute } = useCheckAccess()

  return (
    <tr>
      <td className='w100'>{calcDate(createdAt)}</td>
      <td>
        <Link
          href={`/users/${userNid}`}
          className={clsx('td_row', {
            'pointer-events-none': !checkRoute('/admin/user/:nId')
          })}
        >
          <span className='text-success'>{userNid}</span>
        </Link>
      </td>

      <td>{totalWithdrawals}</td>
      <td>${formatCurrency(Number(withdrawalsSum))}</td>

      <td className='w250'>${formatCurrency(Number(withdrawalAmount))}</td>
      <td>
        <div className='flex h-full justify-start items-center gap-4'>
          <ApproveTrade id={id} />
          <CancelTrade id={id} />
          {/* <BlockTrade /> */}
        </div>
      </td>
    </tr>
  )
}

export default memo(ExpectedTradeItem)
