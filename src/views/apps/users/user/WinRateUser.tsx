import { Typography } from '@mui/material'

import { useGetAllUserTradesQuery } from '@/api/endpoints/users/users-api'

interface WinRateUserProps {
  uid: string
}

const WinRateUser = ({ uid }: WinRateUserProps) => {
  const { data } = useGetAllUserTradesQuery(
    {
      uid,
      orderBy: JSON.stringify({ date: 'desc' })
    },
    {
      refetchOnMountOrArgChange: true
    }
  )

  let totalOrders = 0
  let successfulOrders = 0
  let unsuccessfulOrders = 0
  let breakevenOrders = 0

  if (data?.data) {
    for (const order of data.data) {
      if (order.tradeStatus === 'CLOSED') {
        totalOrders++

        const profit = Number(order.PnLStatistics.pnl)

        if (profit > 0) {
          successfulOrders++
        } else if (profit < 0) {
          unsuccessfulOrders++
        } else {
          breakevenOrders++
        }
      }
    }
  }

  const winRate = (successfulOrders / totalOrders) * 100
  const lossRate = (unsuccessfulOrders / totalOrders) * 100
  const breakevenRate = (breakevenOrders / totalOrders) * 100

  const rows = [
    { label: 'W', rate: winRate, color: 'var(--mui-palette-success-main)' },
    { label: 'L', rate: lossRate, color: 'var(--mui-palette-error-main)' },
    { label: 'B', rate: breakevenRate, color: 'var(--mui-palette-warning-main)' }
  ]

  return (
    <>
      <Typography color='secondary'>Винрейт:</Typography>
      <div className='flex items-center gap-2'>
        {rows.map(({ label, rate, color }) => (
          <Typography variant='h5' style={{ color }} key={label}>
            {label}: {isNaN(rate) ? '0' : rate.toFixed(2)}%
          </Typography>
        ))}
      </div>
    </>
  )
}

export default WinRateUser
