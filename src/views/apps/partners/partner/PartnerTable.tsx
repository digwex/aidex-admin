'use client'
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const CustomCellRenderer = () => {
  return (
    <div className='flex h-full w-full justify-end items-center gap-4'>
      <Button variant='contained' color='primary'>
        Активировать
      </Button>
      <Button variant='tonal' className='!px-2 !w-10 min-w-10' color='error'>
        X
      </Button>
    </div>
  )
}

const columns: GridColDef[] = [
  { sortable: true, field: 'date', headerName: 'Дата', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'partnerId', headerName: 'ID Партнера', align: 'center', headerAlign: 'center', flex: 1 },
  { sortable: true, field: 'mail', headerName: 'Почта', align: 'center', headerAlign: 'center', flex: 1 },
  { sortable: true, field: 'telegram', headerName: 'Телеграм', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'trafic', headerName: 'Источники трафика', align: 'center', flex: 1, headerAlign: 'center' },
  {
    sortable: true,
    field: 'subaffiliates',
    headerName: 'Суб-аффилиат',
    align: 'center',
    flex: 1,
    headerAlign: 'center'
  },
  {
    sortable: true,
    field: 'tarif',
    headerName: 'Тарифный план',
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
      date: `2023/04/2${i}`,
      partnerId: i,
      mail: 'placeholder@gmail.com',
      telegram: '@telegram',
      trafic: 'YouTube',
      subaffiliates: 'alexa@gmail.com',
      tarif: 'Super Nova Elite',
      actions: ''
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const PartnerTable = () => {
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

export default PartnerTable
