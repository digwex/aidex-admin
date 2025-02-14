'use client'

import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

import { Status } from '@/components/Status'

const StatusRenderer = () => {
  return <Status variant='processing' />
}

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
    minWidth: 130
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
    field: 'withdrawalId',
    headerName: 'ID Вывода',
    align: 'center',
    headerAlign: 'center',
    minWidth: 120
  },
  {
    sortable: true,
    field: 'amount',
    headerName: 'Сумма вывода,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 140
  },
  {
    sortable: true,
    field: 'network',
    headerName: 'Сеть вывода',
    align: 'center',
    headerAlign: 'center',
    minWidth: 110
  },
  {
    sortable: false,
    field: 'address',
    headerName: 'Адрес',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 130
  },
  {
    sortable: false,
    field: 'txid',
    headerName: 'TXID',
    align: 'center',
    headerAlign: 'center',
    minWidth: 150
  },
  {
    sortable: false,
    field: 'notes',
    headerName: 'Примечание',
    align: 'center',
    headerAlign: 'center',
    minWidth: 350
  },
  {
    field: 'status',
    headerName: 'Статус',
    align: 'center',
    headerAlign: 'center',
    minWidth: 200,
    renderCell: StatusRenderer
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
      withdrawalId: '536363',
      amount: '$575.74',
      network: 'TRC20',
      address: 'ouwefghw[o[btgw]tg]qoerbgqr[gobq',
      txid: 'ouwefghw[o[btgw]tg]qoerbgqr[gobq',
      notes: 'Свяжитесь с технической поддержкой для прохождения финансового мониторинга',
      status: ''
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const WithdrawalsTradersHistory = () => {
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

export default WithdrawalsTradersHistory
