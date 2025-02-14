'use client'

import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

import { TradersModals } from './TradersModals'

const columns: GridColDef[] = [
  {
    sortable: true,

    field: 'date',
    headerName: 'Дата',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 150
  },
  {
    sortable: true,
    field: 'traderId',
    headerName: 'ID трейдера',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 150
  },
  {
    sortable: true,
    field: 'email',
    headerName: 'E-mail',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 250
  },
  {
    sortable: true,
    field: 'deposits',
    headerName: 'Депозиты',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 150
  },
  {
    sortable: true,
    field: 'depositsAmount',
    headerName: 'Депозиты,$',
    align: 'center',
    flex: 1,
    headerAlign: 'center',
    minWidth: 150
  },
  {
    sortable: true,
    field: 'withdrawals',
    headerName: 'Выводы',
    align: 'center',
    flex: 1,
    headerAlign: 'center',
    minWidth: 100
  },
  {
    sortable: false,
    field: 'withdrawalsAmount',
    headerName: 'Выводы,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 130
  },
  {
    sortable: false,
    field: 'method',
    headerName: 'Метод платежа',
    align: 'center',
    headerAlign: 'center',
    minWidth: 150
  },
  {
    sortable: false,
    field: 'withdrawalsCalls',
    headerName: 'Запрос на вывод,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 150
  },
  {
    sortable: false,
    field: 'balance',
    headerName: 'Остаток по балансу,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 170
  },
  {
    sortable: false,
    field: 'actions',
    headerName: '',
    minWidth: 520,
    renderCell: TradersModals
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      date: `2023-04-11, 15:39:48`,
      traderId: 532556542 + i,
      email: 'alexsandr.tkachuk18@gmail.com',
      deposits: 452,
      depositsAmount: '$2,575.74',
      withdrawals: 32,
      withdrawalsAmount: '$575.74',
      method: 'TRC20: 4972h42n-f42-f42-4f24f72g7g2-fg',
      withdrawalsCalls: '$5.74',
      balance: '$75.74',
      actions: ''
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const WithdrawalsTraders = () => {
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

export default WithdrawalsTraders
