import Link from 'next/link'

import type { StatisticTrader } from '@/api/endpoints/statistics/statistics.interface'
import { calcDate } from '@/utils/calcDate'
import { determineBalance } from '@/utils/determineBalance'
import { formatCurrency } from '@/utils/formatCurrency'

type Props = StatisticTrader

const TradersRow = ({ nId, profit, trades, withdrawals, withdrawalsCount, balance, createdAt }: Props) => {
  return (
    <tr>
      <td>{calcDate(createdAt)}</td>
      <td>
        <Link href={`/users/${nId}`} className='td_row'>
          <span className='text-success'>{nId}</span>
        </Link>
      </td>

      <td>{withdrawalsCount}</td>
      <td>${formatCurrency(Number(withdrawals))}</td>
      <td>{trades}</td>

      <td>{determineBalance(profit)}</td>
      <td>{determineBalance(balance)}</td>
    </tr>
  )
}

export default TradersRow
