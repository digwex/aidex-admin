'use client'
import { Chip } from '@mui/material'
import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const CustomCellRenderer = () => {
  return (
    <div className='grid place-content-center h-full'>
      <Chip
        label='Завершенный'
        icon={<img src='/images/icons/verify.svg' alt='success' />}
        variant='tonal'
        color='success'
        className='flex w-fit  justify-center items-center gap-2'
      />
    </div>
  )
}

const columns: GridColDef[] = [
  { sortable: true, field: 'transactionID', headerName: 'ID', align: 'center' },
  { sortable: true, field: 'date', headerName: 'Дата создания', align: 'center', headerAlign: 'center', minWidth: 170 },
  {
    sortable: true,
    field: 'dateUpdate',
    headerName: 'Дата обновления',
    align: 'center',
    headerAlign: 'center',
    minWidth: 170
  },
  { sortable: true, field: 'amount', headerName: 'Сумма,$', align: 'center', headerAlign: 'center', minWidth: 150 },
  { sortable: true, field: 'method', headerName: 'Метод платежу', align: 'center', headerAlign: 'center', flex: 1 },
  {
    sortable: true,
    field: 'status',
    headerName: 'Статус',
    align: 'center',
    headerAlign: 'center',
    minWidth: 230,
    renderCell: CustomCellRenderer
  },
  {
    sortable: true,
    field: 'hash',
    headerName: 'Хеш транзакции',

    flex: 1
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      transactionID: i,
      date: `2023/04/27 09:44:07`,
      dateUpdate: '2023/04/27 09:44:07',
      amount: '$424.34',
      method: 'TRC20: 4972h42n-f42-f42-4f24f72g7g2-fg',
      status: '',
      hash: 'bf8250fg2c587n1049c8y34btqv'
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const PartnerWithdrawalsTable = () => {
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

export default PartnerWithdrawalsTable
