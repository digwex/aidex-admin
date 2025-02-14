'use client'
import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { sortable: true, field: 'tgId', headerName: 'Телеграм  ID', minWidth: 200 },
  {
    sortable: true,
    field: 'tgLogin',
    headerName: 'Логин телеграм',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 250
  },
  { sortable: true, field: 'role', headerName: 'Роль', align: 'center', headerAlign: 'center', flex: 1, minWidth: 200 },
  { sortable: true, field: 'name', headerName: 'Имя', align: 'center', headerAlign: 'center', flex: 1, minWidth: 200 },
  {
    sortable: true,
    field: 'lvl',
    headerName: 'Уровень доступа',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 200
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      tgId: i,
      tgLogin: '@bijdgfsdkfbsekufsekfbskekbf',
      role: 'Главный админ',
      name: 'Сергей',
      lvl: '5 урвоень'
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const SecurityAdminTable = () => {
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

export default SecurityAdminTable
