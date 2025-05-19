import type { StatisticTrader } from '@/api/endpoints/statistics/statistics.interface'
import { formatCurrency } from '@/utils/formatCurrency'

type Props = StatisticTrader

const TradersFooterRow = (props: Props) => {
  const data = Object.values(props)

  const totalId = data.length

  const depositsCountClicks = data?.reduce((acc, item) => acc + Number(item._deposits_count ?? 0), 0)

  const withdrawalsCountClicks = data?.reduce((acc, item) => acc + Number(item._withdrawals_count ?? 0), 0)

  const withdrawalsClicks = data?.reduce((acc, item) => acc + Number(item._withdrawals ?? 0), 0)

  const dealsCountClicks = data?.reduce((acc, item) => acc + Number(item._deals_count ?? 0), 0)

  const totalPnl = data?.reduce((acc, item) => acc + Number(item._pnl ?? 0), 0)

  const totalBalance = data?.reduce((acc, item) => acc + Number(item._balance ?? 0), 0)?.toString()

  return (
    <tr>
      <td>Итого</td>
      <td>{totalId}</td>
      <td>{depositsCountClicks}</td>
      <td>{withdrawalsCountClicks}</td>
      <td>${formatCurrency(withdrawalsClicks)}</td>
      <td>{dealsCountClicks}</td>
      <td>
        {String(totalPnl).includes('-') ? '-$' : '$'}
        {formatCurrency(Number(String(totalPnl)?.replace('-', '')))}
      </td>
      <td>-</td>
      <td>
        {totalBalance
          ? `${totalBalance.includes('-') ? '-$' : '$'}${formatCurrency(Number(totalBalance.replace('-', '')))}`
          : '-'}
      </td>
    </tr>
  )
}

export default TradersFooterRow
