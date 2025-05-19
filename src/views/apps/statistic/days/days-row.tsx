import type { StatisticDay } from '@/api/endpoints/statistics/statistics.interface'
import { calcDate } from '@/utils/calcDate'
import { formatCurrency } from '@/utils/formatCurrency'

type Props = StatisticDay

const DaysRow = ({
  _date_only: date,
  _clicks: clicks,
  _ftd_count: ftd,
  _ftd_percent: ftdPercent,
  _registrations: registrations,
  _registrations_percent: registrationsPercent,
  _traders: traders,
  _deals_count: dealsCount,
  _withdrawals: withdrawals,
  _withdrawals_count: withdrawalsCount
}: Props) => {
  return (
    <tr>
      <td>{calcDate(date)}</td>
      <td>{clicks ?? '0'}</td>
      <td>
        {registrations ?? '0'}
        {registrationsPercent && `(${formatCurrency(Number(registrationsPercent))}%)`}
      </td>
      <td>
        {ftd ?? '0'}
        {ftdPercent ? `(${formatCurrency(Number(ftdPercent))}%)` : '(0%)'}
      </td>
      <td>
        {traders ?? '0'}
        {/* {tradersPercent && `(${formatCurrency(Number(tradersPercent))}%)`} */}
      </td>
      <td>{dealsCount ?? '0'}</td>
      <td>{withdrawalsCount ?? '0'}</td>
      <td>{withdrawals ? `$${formatCurrency(Number(withdrawals))}` : '$0'}</td>
    </tr>
  )
}

export default DaysRow
