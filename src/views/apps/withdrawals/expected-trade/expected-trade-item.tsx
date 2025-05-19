import { memo } from 'react'

import Link from 'next/link'

import clsx from 'clsx'

import type { Withdrawal } from '@/api/endpoints/withdrawals/withdrawals.interface'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import { calcDate } from '@/utils/calcDate'
import { formatCurrency } from '@/utils/formatCurrency'
import { HandledFlag } from '@/utils/HandledFlag'
import { ApproveTrade } from './approve-trade'
import { CancelTrade } from './cancel-trade'
import { ChangeTrade } from './change-trade'
import { BlockTrade } from './block-trade'

type Props = Withdrawal

const ExpectedTradeItem = ({
  id,
  withdrawals,
  withdrawalsTotal,
  coin,
  amount,
  wallet,
  balanceLeft,
  createdAt,
  user
}: Props) => {
  const { checkRoute } = useCheckAccess()

  return (
    <tr>
      <td className='w100'>{calcDate(createdAt)}</td>
      <td>
        <Link
          href={`/users/${user.nId}`}
          className={clsx('td_row', {
            'pointer-events-none': !checkRoute('/admin/user/:nId')
          })}
        >
          <HandledFlag flag={user.CountryCode} />
          <span className='text-success'>{user.nId}</span>
        </Link>
      </td>

      <td>{withdrawals}</td>
      <td>${formatCurrency(Number(withdrawalsTotal))}</td>

      <td className='w250'>${formatCurrency(Number(amount))}</td>
      <td>${formatCurrency(Number(balanceLeft))}</td>
      <td>
        <div className='flex h-full justify-start items-center gap-4'>
          <ApproveTrade id={id} />

          <CancelTrade id={id} />

          <ChangeTrade id={id} network={coin.network} wallet={wallet} />

          <BlockTrade />
        </div>
      </td>
    </tr>
  )
}

export default memo(ExpectedTradeItem)
