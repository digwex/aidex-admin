'use client'

import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const CustomCellRenderer = () => {
  return (
    <div className='flex items-center justify-start gap-2'>
      <img className='w-[18px] h-[18px] min-w-[18px]' src='/images/tariff/super-nova-ellite.svg' alt='success' />
      <p>Super Nova Elite</p>
    </div>
  )
}

const columns: GridColDef[] = [
  { sortable: true, field: 'transactionID', headerName: 'ID', align: 'center', minWidth: 120 },
  {
    sortable: true,
    field: 'email',
    headerName: 'Электронная почта',
    align: 'center',
    headerAlign: 'center',
    minWidth: 170
  },
  {
    sortable: true,
    field: 'ftd',
    headerName: 'FTD',
    align: 'center',
    headerAlign: 'center',
    minWidth: 170
  },
  { sortable: true, field: 'ctr', headerName: '%,CTR', align: 'center', headerAlign: 'center', minWidth: 150 },
  { sortable: true, field: 'rtd', headerName: 'RTD', align: 'center', headerAlign: 'center', flex: 1 },
  {
    sortable: true,
    field: 'deposits',
    headerName: 'Депозиты,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 230
  },
  {
    sortable: true,
    field: 'withdrawals',
    headerName: 'Выводы,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 230
  },
  {
    sortable: true,
    field: 'tariff',
    headerName: 'Тарифный план',

    minWidth: 230,
    renderCell: CustomCellRenderer
  },
  {
    sortable: true,
    field: 'profit',
    headerName: 'Профит от суб-партнера,$',
    align: 'center',
    headerAlign: 'center',
    minWidth: 230
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      transactionID: 4245346545 + i,
      email: `alexsandr.tkachuk18@gmail.com`,
      ftd: 425,
      ctr: '13.43%',
      rtd: '13.43%',
      deposits: '$275.74',
      withdrawals: '$275.74',
      tariff: '',
      profit: '$ 55 484,42'
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const PartnerSubAffiliateTable = () => {
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

export default PartnerSubAffiliateTable
