import type { StatisticDay } from '@/api/endpoints/statistics/statistics.interface'

type Props = StatisticDay

const StatisticRow = ({ maxOnline, date }: Props) => {
  return (
    <tr>
      <td>{date}</td>
      <td>0 $ / 0 SOL</td>
      <td>0 $ / 0 SOL</td>
      <td>{maxOnline ?? 0}</td>
      <td>0</td>
      <td>0</td>
      <td>0 $ / 0 SOL</td>
      <td>0 $ / 0 SOL</td>
      <td>0</td>
    </tr>
  )
}

export default StatisticRow
