'use client'
import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { sortable: true, field: 'date', headerName: 'Дата', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'transitions', headerName: 'Переходы', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'registrations', headerName: 'Регистрации', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'traders', headerName: 'Трейдеры', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'orders', headerName: 'Сделки', align: 'center', flex: 1, headerAlign: 'center' },
  { sortable: true, field: 'deposits', headerName: 'Депозиты', align: 'center', flex: 1, headerAlign: 'center' },
  {
    sortable: true,
    field: 'depositsAmount',
    headerName: 'Депозиты,$',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  { sortable: true, field: 'withdrawals', headerName: 'Выводы', align: 'center', flex: 1, headerAlign: 'center' },
  { sortable: true, field: 'withdrawalsAmount', headerName: 'Выводы,$', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'dynamic', headerName: 'Динамика,$', align: 'center', headerAlign: 'center' },
  {
    sortable: true,
    field: 'ordersAmount',
    headerName: 'Открыли сделок,$',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  { sortable: true, field: 'online', headerName: 'Макс Online', align: 'center', headerAlign: 'center' }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      date: `2023/04/2${i}`,
      transitions: 73,
      registrations: '0(0.00%)',
      traders: '0(0.00%)',
      orders: 6,
      deposits: 2,
      depositsAmount: '$275.74',
      withdrawals: 1,
      withdrawalsAmount: '$25.74',
      dynamic: '$45.74',
      ordersAmount: '$25.74',
      online: 73
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const StatisticTable = () => {
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

export default StatisticTable
