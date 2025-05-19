import type { StatisticDay } from '@/api/endpoints/statistics/statistics.interface'
import { formatCurrency } from '@/utils/formatCurrency'

type Props = StatisticDay

const DaysFooterRow = (props: Props) => {
  const data = Object.values(props)

  const totalClicks = data?.reduce((acc, item) => acc + Number(item._clicks ?? 0), 0)

  const totalRegistrations = data?.reduce((acc, item) => acc + Number(item._registrations ?? 0), 0)

  const totalFTD = data?.reduce((acc, item) => acc + Number(item._ftd_count ?? 0), 0)

  const tradersClicks = data?.reduce((acc, item) => acc + Number(item._traders ?? 0), 0)

  const dealsCountClicks = data?.reduce((acc, item) => acc + Number(item._deals_count ?? 0), 0)

  const withdrawalsCountClicks = data?.reduce((acc, item) => acc + Number(item._withdrawals_count ?? 0), 0)

  const withdrawalsClicks = data?.reduce((acc, item) => acc + Number(item._withdrawals ?? 0), 0)

  const onlineClicks = data?.reduce((acc, item) => acc + Number(item._online ?? 0), 0)

  return (
    <tr>
      <th>Итого</th>
      <td>{totalClicks}</td>
      <td>{totalRegistrations}</td>
      <td>{totalFTD}</td>
      <td>{tradersClicks}</td>
      <td>{dealsCountClicks}</td>

      <td>{withdrawalsCountClicks}</td>
      <td>${formatCurrency(withdrawalsClicks)}</td>

      <td>{onlineClicks}</td>
    </tr>
  )
}

export default DaysFooterRow
