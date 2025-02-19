'use client'

import { Button, ButtonGroup, Typography } from '@mui/material'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

import DataPickerRange from '@/views/DataPickerRange'

const showRender = () => {
  return (
    <div>
      <img src='/images/icons/eye.svg' alt='eye' />
    </div>
  )
}

const statusRender = () => {
  return (
    <div>
      <img src='/images/icons/verify.svg' alt='sended' />
    </div>
  )
}

const columns: GridColDef[] = [
  { sortable: true, field: 'sendId', headerName: 'ID', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'date', headerName: 'Дата', align: 'center', headerAlign: 'center' },
  { sortable: true, field: 'theme', headerName: 'Тема письма', align: 'center', headerAlign: 'center', flex: 1 },
  {
    sortable: true,
    field: 'show',
    headerName: 'Просмотр',

    align: 'center',
    headerAlign: 'center',
    maxWidth: 100,
    renderCell: showRender
  },
  {
    sortable: true,
    field: 'status',
    headerName: 'Статус',
    align: 'center',
    flex: 1,
    headerAlign: 'center',
    maxWidth: 100,
    renderCell: statusRender
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      sendId: i,
      date: `2023-04-11, 15:39:48`,
      theme: 'Час спливає! Binance P2P: Здійснюй регулярні покупки, щоб розділити 7 BNB у токен-ваучерах',
      show: '',
      status: ''
    }))
]

const paginationModel = { page: 0, pageSize: 10 }

const MailingTable = () => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-4 max700:flex-col'>
        <Typography variant='h5' className='mr-auto'>
          История рассылок
        </Typography>
        <ButtonGroup className='max700:w-full' variant='tonal'>
          <Button variant='contained' color='success' className='max700:w-full'>
            Трейдерам
          </Button>
          <Button variant='tonal' color='secondary' className='max700:w-full'>
            Партнерам
          </Button>
        </ButtonGroup>
        <DataPickerRange />
      </div>

      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20, 30]}
        sx={{ border: 0 }}
      />
    </div>
  )
}

export default MailingTable
