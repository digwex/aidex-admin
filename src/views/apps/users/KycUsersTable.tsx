'use client'
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

import { UnblockModal } from './UnblockModal'

const CustomCellRenderer = () => {
  return (
    <div className='flex h-full w-full justify-end items-center gap-4'>
      <Button variant='outlined' color='secondary'>
        Больше
      </Button>
      <Button variant='outlined' color='warning'>
        Торговля
      </Button>
      <Button variant='outlined' color='success'>
        Изменить
      </Button>
      <UnblockModal />
    </div>
  )
}

const columns: GridColDef[] = [
  { sortable: true, field: 'traderId', headerName: 'ID', align: 'center', headerAlign: 'center' },
  {
    sortable: true,
    minWidth: 200,
    field: 'balance',
    headerName: 'Баланс,$',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    sortable: true,
    minWidth: 250,
    field: 'email',
    headerName: 'E-mail',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    sortable: true,
    minWidth: 200,
    field: 'password',
    headerName: 'Пароль',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    sortable: true,
    minWidth: 250,
    field: 'name',
    headerName: 'Имя Фамилия',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  {
    sortable: true,
    minWidth: 100,
    field: 'status',
    headerName: 'Статус',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  { sortable: true, field: 'kyc', headerName: 'KYC', align: 'center', flex: 1, headerAlign: 'center' },
  {
    sortable: true,
    minWidth: 100,
    field: 'documents',
    headerName: 'Документы',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  {
    sortable: true,
    minWidth: 100,
    field: '2fa',
    headerName: '2ФА',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  {
    sortable: true,
    minWidth: 100,
    field: 'ip',
    headerName: 'IP',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },

  {
    sortable: false,
    field: 'actions',
    headerName: 'Опции',
    align: 'center',
    minWidth: 500,
    headerAlign: 'center',
    renderCell: CustomCellRenderer
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      traderId: i,
      balance: '$2,575.74',
      email: 'alexa...@gmail.com',
      password: '793jd879334r',
      name: 'Ткачук Александр',
      status: 'Фото',
      kyc: '2fa',

      documents: 'PDF',
      '2fa': 'х',
      ip: '66.249.95.255',
      actions: ''
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const KycUsersTable = () => {
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

export default KycUsersTable
