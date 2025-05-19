import Link from 'next/link'

import clsx from 'clsx'

import type { Withdrawal } from '@/api/endpoints/withdrawals/withdrawals.interface'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import { calcDate } from '@/utils/calcDate'
import CopyHash from '@/utils/CopyHash'
import { formatCurrency } from '@/utils/formatCurrency'
import { getStatusPaymentHistory } from '@/utils/getStatusPaymentHistory'
import { HandledFlag } from '@/utils/HandledFlag'
import { shortIdTooltip } from '@/utils/shortIdTooltip'

type Props = Withdrawal

const TradeHistoryItem = ({
  PaymentStatus,
  additionalData,
  coin,
  wallet,
  toUSDT,
  id,
  createdAt,
  nId,
  user,
  note
}: Props) => {
  const { checkRoute } = useCheckAccess()

  return (
    <tr>
      <td className='w-[100px]'>{calcDate(createdAt)}</td>
      <td>
        <Link
          href={`/users/${user.nId}`}
          className={clsx('flex items-center gap-2', {
            'pointer-events-none': !checkRoute('/admin/user/:nId')
          })}
        >
          <HandledFlag flag={user.CountryCode} />
          <span className='text-success'>{user.nId}</span>
        </Link>
      </td>
      <td>{nId ?? shortIdTooltip(id)}</td>
      <td>${formatCurrency(Number(toUSDT))}</td>
      <td>{coin.network ?? '-'}</td>
      <td>{shortIdTooltip(wallet)}</td>
      <td>
        <CopyHash hash={additionalData?.blockchain_hash} network={coin.network ?? coin.symbolCoin} />
      </td>
      <td className='w-[250px]'>{note ?? '-'}</td>
      <td>{getStatusPaymentHistory({ status: PaymentStatus })}</td>
    </tr>
  )
}

export default TradeHistoryItem
