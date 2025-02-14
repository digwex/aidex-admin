'use client'
import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { sortable: true, field: 'date', headerName: 'Дата', align: 'center', headerAlign: 'center', minWidth: 120 },
  { sortable: true, field: 'email', headerName: 'Почта', align: 'center', headerAlign: 'center', minWidth: 180 },
  {
    sortable: true,
    field: 'webmasterId',
    headerName: 'ID Вебмастера',
    align: 'center',
    headerAlign: 'center',
    minWidth: 120
  },
  {
    sortable: true,
    field: 'transitions',
    headerName: 'Переходов',
    align: 'center',
    headerAlign: 'center',
    minWidth: 100
  },
  {
    sortable: true,
    field: 'registrations',
    headerName: 'Регистраций',
    align: 'center',
    headerAlign: 'center',
    minWidth: 100
  },
  { sortable: true, field: 'ftd', headerName: 'FTD', align: 'center', flex: 1, headerAlign: 'center', minWidth: 50 },
  {
    sortable: true,
    field: 'tradersDeposits',
    headerName: 'Депозиты трейд.',
    align: 'center',
    flex: 1,
    headerAlign: 'center',
    minWidth: 160
  },
  {
    sortable: true,
    field: 'tradersDepositsAmount',
    headerName: 'Депозиты трейд.,$',
    align: 'center',
    flex: 1,
    headerAlign: 'center',
    minWidth: 160
  },
  {
    sortable: true,
    field: 'tradersWithdrawals',
    headerName: 'Выводы трейд.',
    align: 'center',
    flex: 1,

    headerAlign: 'center',
    minWidth: 120
  },
  {
    sortable: true,
    field: 'tradersWithdrawalsAmount',
    headerName: 'Выводы трейд.,$',
    align: 'center',
    flex: 1,
    headerAlign: 'center',
    minWidth: 130
  },
  {
    sortable: true,
    field: 'activeTradersToday',
    headerName: 'Активные трейд. сегодня',
    align: 'center',
    headerAlign: 'center',
    minWidth: 180
  },
  {
    sortable: true,
    field: 'dynamic',
    headerName: 'Динамика по всем,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 150
  },
  { sortable: true, field: 'tariff', headerName: 'Тарифы', align: 'center', headerAlign: 'center', minWidth: 100 },
  {
    sortable: true,
    field: 'sybEarn',
    headerName: 'Суб начисление,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 150
  },
  {
    sortable: true,
    field: 'partnersEarn',
    headerName: 'Парнерское начисление,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 200
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      date: `2023/04/2${i}`,
      email: 'alexa@gmail.com',
      webmasterId: 73 + i,
      transitions: 6 + i,
      registrations: 0,
      ftd: 0,
      tradersDeposits: 32,
      tradersDepositsAmount: '$275.74',
      tradersWithdrawals: 32,
      tradersWithdrawalsAmount: '$275.74',
      activeTradersToday: 10,
      dynamic: '$275.74',
      tariff: 'Silver UP',
      sybEarn: '$275.74',
      partnersEarn: '$275.74'
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const StatisticWebTable = () => {
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

export default StatisticWebTable
