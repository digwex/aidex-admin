// import { Link } from 'react-router-dom'
// import { type Withdrawal } from '../../../../../../api/endpoints/withdrawals/withdrawals.interface'
// import CopyHash from '../../../../../../utils/CopyHash'
// import { HandledFlag } from '../../../../../../utils/HandledFlag'
// import { calcDate } from '../../../../../../utils/calcDate'
// import { formatCurrency } from '../../../../../../utils/formatCurrency'
// import { getStatusPaymentHistory } from '../../../../../../utils/getStatusPaymentHistory'
// import { shortIdTooltip } from '../../../../../../utils/shortIdTooltip'
// import { shortUserEmail } from '../../../../../../utils/shortUserEmail'

import Link from 'next/link'

import type { Withdrawal } from '@/api/endpoints/withdrawals/withdrawals.interface'
import { calcDate } from '@/utils/calcDate'
import { formatCurrency } from '@/utils/formatCurrency'
import { HandledFlag } from '@/utils/HandledFlag'
import { shortIdTooltip } from '@/utils/shortIdTooltip'
import { getStatusPaymentHistory } from '@/utils/getStatusPaymentHistory'
import CopyHash from '@/utils/CopyHash'

type Props = Withdrawal

const FakeItem = ({
  PaymentStatus,
  toUSDT,
  coin,
  additionalData,
  wallet,
  id,
  coin: { network, symbolCoin },
  createdAt,
  user,
  nId,
  note
}: Props) => {
  return (
    <tr>
      <td className='w-[100px]'>{calcDate(createdAt)}</td>
      <td>
        <Link href={`/users/${user.nId}`} className='flex items-center gap-2'>
          <HandledFlag flag={user.CountryCode} />
          <span className='text-success'>{user.nId}</span>
        </Link>
      </td>

      <td>{nId ?? shortIdTooltip(id)}</td>
      <td>${formatCurrency(Number(toUSDT))}</td>
      <td>{coin.network ?? '-'}</td>
      <td>{shortIdTooltip(wallet)}</td>
      <td>
        <CopyHash hash={additionalData?.blockchain_hash} network={network ?? symbolCoin} />
      </td>
      <td className='w-[250px]'>{note ?? '-'}</td>
      <td>{getStatusPaymentHistory({ status: PaymentStatus })}</td>
    </tr>
  )
}

export default FakeItem
