// import type { StatisticDay } from '@/api/endpoints/statistics/statistics.interface'

// import { formatCurrency } from '@/utils/formatCurrency'

// type Props = StatisticDay

const StatisticFooterRow = () => {
  // const data = Object.values(props) as StatisticDay[]

  // const totalReferralRegistrations = data?.reduce((acc, item) => acc + Number(item.referralRegistrations), 0)

  // const totalRegistrations = data?.reduce((acc, item) => acc + Number(item.referralRegistrations), 0)

  // const totalFTD = data?.reduce((acc, item) => acc + Number(item.ftd), 0)

  // const totalTrades = data?.reduce((acc, item) => acc + Number(item.trades), 0)

  // const totalDeals = data?.reduce((acc, item) => acc + Number(item.deals), 0)

  // const totalDealsCount = data?.reduce((acc, item) => acc + Number(item.dealsCount), 0)

  // const totalWithdrawals = data?.reduce((acc, item) => acc + Number(item.withdrawals), 0)

  // const totalWithdrawalsCount = data?.reduce((acc, item) => acc + Number(item.withdrawalsCount), 0)

  // const totalMaxOnline = data?.reduce((acc, item) => acc + Number(item?.maxOnline), 0) || 0

  return (
    <tr>
      <th>Суммарно:</th>
      <td>0 $ / 0 SOL</td>
      <td>0 $ / 0 SOL</td>
      <td>0 $ / 0 SOL</td>
      <td className='whitespace-nowrap text-center'>0 $ / 0 SOL</td>
      <td>0%</td>
      <td>
        <div className='flex items-center gap-3 justify-center'>
          <p className='text-success whitespace-nowrap'>W: 0%</p>
          <p className='text-error whitespace-nowrap'>L: 0%</p>
          <p className='text-warning whitespace-nowrap'>B: 0%</p>
        </div>
      </td>
      <td className='flex justify-center items-center gap-2'>
        <span>0 </span>
        <p>
          <span className='text-success'>0</span> / <span className='text-error'>0</span>
        </p>
      </td>
      <td>0</td>
      <td>0</td>
      <td>0 $ / 0 SOL</td>
      <td>0 $ / 0 SOL</td>
    </tr>
  )
}

export default StatisticFooterRow
