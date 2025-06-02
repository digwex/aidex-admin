import type { StatisticDay } from '@/api/endpoints/statistics/statistics.interface'
import { formatCurrency } from '@/utils/formatCurrency'

type Props = StatisticDay

const DaysRow = ({
  date,
  deals,
  registrations,
  dealsCount,
  trades,
  referralRegistrations,
  maxOnline,
  ftd,
  withdrawals,
  withdrawalsCount
}: Props) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{referralRegistrations}</td>
      <td>{registrations}</td>
      <td>{ftd}</td>
      <td>{trades}</td>
      <td>
        {dealsCount} (${formatCurrency(Number(deals))})
      </td>
      <td>${formatCurrency(withdrawals)}</td>
      <td>{withdrawalsCount}</td>
      <td>{maxOnline}</td>
    </tr>
  )
}

export default DaysRow
