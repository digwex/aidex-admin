'use client'
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const CustomCellRenderer = () => {
  return (
    <div className='flex h-full w-full justify-end items-center gap-4'>
      <Button variant='outlined' color='error'>
        Отклонить
      </Button>
      <Button variant='outlined' color='success'>
        Одобрить
      </Button>
    </div>
  )
}

const columns: GridColDef[] = [
  { sortable: true, field: 'traderId', headerName: 'ID трейдера', align: 'center', headerAlign: 'center', flex: 1 },
  { sortable: true, field: 'name', headerName: 'Имя Фамилия', align: 'center', headerAlign: 'center', flex: 1 },
  {
    sortable: true,
    field: 'documentNumber',
    headerName: 'Номер документа',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  { sortable: true, field: 'address', headerName: 'Адресс', align: 'center', headerAlign: 'center', flex: 1 },
  { sortable: true, field: 'photo', headerName: 'Файл/Фото', align: 'center', flex: 1, headerAlign: 'center' },
  {
    sortable: true,
    field: 'document',
    headerName: 'Документ',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  {
    sortable: false,
    field: 'actions',
    headerName: '',
    align: 'center',
    width: 250,
    headerAlign: 'center',
    renderCell: CustomCellRenderer
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      traderId: 532556542 + i,
      name: 'Ткачук Александр',
      documentNumber: 'alexsandr.tkachuk18@gmail.com',
      address: 'г.Киев, ул. Хрещатика 57, кв74',
      photo: 'Фото',
      document: 'PDF',
      actions: ''
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const VerificationTable = () => {
  return (
    <Paper sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20, 30]}
        sx={{ border: 0 }}
      />
    </Paper>
  )
}

export default VerificationTable
