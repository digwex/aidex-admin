'use client'
import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { sortable: true, field: 'date', headerName: 'Дата', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'traderId', headerName: 'ID трейдера', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'deposits', headerName: 'Депозиты,$', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'depositsAmount', headerName: 'Трейдеры', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'withdrawals', headerName: 'Выводы', align: 'center', flex: 1, headerAlign: 'center' },
  { sortable: true, field: 'withdrawalsAmount', headerName: 'Выводы', align: 'center', flex: 1, headerAlign: 'center' },
  {
    sortable: true,
    field: 'orders',
    headerName: 'Сделки',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  {
    sortable: true,
    field: 'ordersAmount',
    headerName: 'Сделки,$',
    align: 'center',
    flex: 1,

    headerAlign: 'center'
  },
  {
    sortable: true,
    field: 'profit',
    headerName: 'Прибыть / Убыток,$',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  { sortable: true, field: 'bonuses', headerName: 'Бонусы,$', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'balance', headerName: 'Баланс,$', align: 'center', headerAlign: 'center' }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      date: `2023/04/2${i}`,
      traderId: 73 + i,
      deposits: 6 + i,
      depositsAmount: '$275.74',
      withdrawals: 6 + i,
      withdrawalsAmount: '$2,575.74',
      orders: 2 + i,
      ordersAmount: '$275.74',
      profit: '$45.74',
      bonuses: '$25.74',
      dynamic: '$45.74',
      balance: '$25.74'
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const StatisticTradersTable = () => {
  return (
    <Paper sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20, 30]}
        sx={{ border: 0 }}
      />
    </Paper>
  )
}

export default StatisticTradersTable
