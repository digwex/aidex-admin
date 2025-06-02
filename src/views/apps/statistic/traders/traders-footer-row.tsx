import type { StatisticTrader } from '@/api/endpoints/statistics/statistics.interface'
import { formatCurrency } from '@/utils/formatCurrency'

type Props = StatisticTrader

const TradersFooterRow = (props: Props) => {
  const data = Object.values(props) as StatisticTrader[]

  const totalId = data.length

  const totalWithdrawals = data?.reduce((acc, item) => acc + Number(item.withdrawals), 0)
  const totalWithdrawalsCount = data?.reduce((acc, item) => acc + Number(item.withdrawalsCount), 0)
  const totalTrades = data?.reduce((acc, item) => acc + Number(item.trades), 0)
  const totalProfit = data?.reduce((acc, item) => acc + Number(item.profit), 0)
  const totalBalance = data?.reduce((acc, item) => acc + Number(item.balance), 0)

  return (
    <tr>
      <td>Итого</td>
      <td>{totalId}</td>
      <td>{totalWithdrawals}</td>
      <td>${totalWithdrawalsCount}</td>
      <td>{totalTrades}</td>
      <td>
        {String(totalProfit).includes('-') ? '-$' : '$'}
        {formatCurrency(Number(String(totalProfit).replace('-', '')))}
      </td>
      <td>${formatCurrency(Number(totalBalance))}</td>
    </tr>
  )
}

export default TradersFooterRow
