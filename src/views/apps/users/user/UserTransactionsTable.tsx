'use client'

import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const CustomCellRenderer = () => {
  return (
    <Button variant='outlined' color='error'>
      Отменить
    </Button>
  )
}

const columns: GridColDef[] = [
  { sortable: true, field: 'transactionID', headerName: 'ID', align: 'center' },
  { sortable: true, field: 'date', headerName: 'Дата', align: 'center', headerAlign: 'center', minWidth: 170 },
  {
    sortable: true,
    field: 'coin',
    align: 'center',
    headerAlign: 'center',
    headerName: 'Монета',
    minWidth: 100
  },
  { sortable: true, field: 'amount', headerName: 'Кол-во', align: 'center', headerAlign: 'center', minWidth: 150 },
  { sortable: true, field: 'balance', headerName: 'Баланс', align: 'center', headerAlign: 'center', flex: 1 },
  {
    sortable: false,
    field: 'description',
    headerName: 'Описание',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 330
  },
  {
    sortable: false,
    field: 'actions',
    headerName: '',
    align: 'center',
    headerAlign: 'center',
    minWidth: 230,
    renderCell: CustomCellRenderer
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      transactionID: 42424224 + i,
      date: '2023/04/27 09:44:07',
      coin: 'USDT',
      amount: '$424.34',
      balance: '$424.34',
      description: 'Зачислено на баланс',
      actions: ''
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const UserTransactionsTable = () => {
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

export default UserTransactionsTable
