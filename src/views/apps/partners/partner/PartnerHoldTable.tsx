'use client'

import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const CustomCellRenderer = () => {
  return (
    <div className='flex items-center justify-start gap-2'>
      <img src='/images/icons/verify.svg' alt='success' />
      <p>Партнерские начисление на баланс</p>
    </div>
  )
}

const columns: GridColDef[] = [
  { sortable: true, field: 'transactionID', headerName: 'ID', align: 'center' },
  { sortable: true, field: 'date', headerName: 'Дата создания', align: 'center', headerAlign: 'center', minWidth: 170 },
  {
    sortable: true,
    field: 'actions',
    headerName: 'Все действие',
    minWidth: 300,
    flex: 1,
    renderCell: CustomCellRenderer
  },
  { sortable: true, field: 'amount', headerName: 'Сумма,$', align: 'center', headerAlign: 'center', minWidth: 150 },
  { sortable: true, field: 'hold', headerName: 'Холд,$', align: 'center', headerAlign: 'center' },
  {
    sortable: true,
    field: 'balance',
    headerName: 'Баланс,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 130
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      transactionID: 42424224 + i,
      date: '2023/04/27 09:44:07',
      actions: '',
      amount: '$424.34',
      hold: '$424.34',
      balance: '$424.34'
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const PartnerHoldTable = () => {
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

export default PartnerHoldTable
