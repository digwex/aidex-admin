import Link from 'next/link'

import type { StatisticTrader } from '@/api/endpoints/statistics/statistics.interface'
import { calcDate } from '@/utils/calcDate'
import { determineBalance } from '@/utils/determineBalance'
import { formatCurrency } from '@/utils/formatCurrency'

type Props = StatisticTrader

const TradersRow = ({
  _registered: registered,
  _nid: nid,
  _balance: balance,
  _deals_count: dealsCount,
  _withdrawals: withdrawals,
  _withdrawals_count: withdrawalsCount,
  _pnl: pnl
}: Props) => {
  return (
    <tr>
      <td>{calcDate(registered)}</td>
      <td>
        <Link href={`/users/${nid}`} className='td_row'>
          <span className='text-success'>{nid}</span>
        </Link>
      </td>

      <td>{withdrawalsCount ?? '0'}</td>
      <td>{withdrawals ? `$${formatCurrency(Number(withdrawals))}` : '$0'}</td>
      <td>{dealsCount ?? '0'}</td>

      <td>{determineBalance(pnl)}</td>
      <td>-</td>
      <td>{determineBalance(balance)}</td>
    </tr>
  )
}

export default TradersRow
