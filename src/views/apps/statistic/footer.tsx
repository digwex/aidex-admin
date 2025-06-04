import type { StatisticDay } from '@/api/endpoints/statistics/statistics.interface'

// import { formatCurrency } from '@/utils/formatCurrency'

type Props = StatisticDay

const StatisticFooterRow = (props: Props) => {
  const data = Object.values(props) as StatisticDay[]

  // const totalReferralRegistrations = data?.reduce((acc, item) => acc + Number(item.referralRegistrations), 0)

  // const totalRegistrations = data?.reduce((acc, item) => acc + Number(item.referralRegistrations), 0)

  // const totalFTD = data?.reduce((acc, item) => acc + Number(item.ftd), 0)

  // const totalTrades = data?.reduce((acc, item) => acc + Number(item.trades), 0)

  // const totalDeals = data?.reduce((acc, item) => acc + Number(item.deals), 0)

  // const totalDealsCount = data?.reduce((acc, item) => acc + Number(item.dealsCount), 0)

  // const totalWithdrawals = data?.reduce((acc, item) => acc + Number(item.withdrawals), 0)

  // const totalWithdrawalsCount = data?.reduce((acc, item) => acc + Number(item.withdrawalsCount), 0)

  const totalMaxOnline = data?.reduce((acc, item) => acc + Number(item?.maxOnline), 0) || 0

  return (
    <tr>
      <td>0 $ / 0 SOL</td>
      <td>0 $ / 0 SOL</td>
      <td>{totalMaxOnline}</td>
      <td>0</td>
      <td>0</td>
      <td>0 $ / 0 SOL</td>
      <td>0</td>
    </tr>
  )
}

export default StatisticFooterRow
