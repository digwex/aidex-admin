'use client'

import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { sortable: true, field: 'date', headerName: 'Дата', minWidth: 110 },
  { sortable: true, field: 'transactionID', headerName: 'ID трейдера', align: 'center' },
  {
    sortable: true,
    field: 'deposits',
    headerName: 'Депозиты',
    align: 'center',
    headerAlign: 'center',
    minWidth: 170
  },
  {
    sortable: true,
    field: 'depositsAmount',
    headerName: 'Депозиты,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 150
  },
  { sortable: true, field: 'withdrawals', headerName: 'Выводы', align: 'center', headerAlign: 'center', flex: 1 },
  {
    sortable: true,
    field: 'withdrawalsAmount',
    headerName: 'Выводы,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 150
  },
  {
    sortable: true,
    field: 'orders',
    headerName: 'Сделки',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    sortable: true,
    field: 'ordersAmount',
    headerName: 'Сделки',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    sortable: true,
    field: 'profit',
    headerName: 'Прибыть / Убыток,$',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    sortable: true,
    field: 'bonuses',
    headerName: 'Бонусы,$',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    sortable: true,
    field: 'balance',
    headerName: 'Баланс,$',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      date: '2023/04/27',
      transactionID: i,
      deposits: 9,
      depositsAmount: '$275.74',
      withdrawals: 425,
      withdrawalsAmount: '$2,575.74',
      orders: 6,
      ordersAmount: '$0.00',
      profit: '$45.74',
      bonuses: '$25.74',
      balance: '$0.00'
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const PartnerStatisticTable = () => {
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

export default PartnerStatisticTable
