'use client'

import Paper from '@mui/material/Paper'

import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'

import CustomIconButton from '@/@core/components/mui/IconButton'

const ActionsCell = () => {
  return (
    <CustomIconButton variant='outlined' color='error'>
      <i className='tabler-x'></i>
    </CustomIconButton>
  )
}

const columns: GridColDef[] = [
  { sortable: true, field: 'time', headerName: 'Время', minWidth: 200 },
  {
    sortable: true,
    field: 'login',
    headerName: 'Логин',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 250
  },
  {
    sortable: true,
    field: 'name',
    headerName: 'Имя Фамилия',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 200
  },
  { sortable: true, field: 'role', headerName: 'Роль', align: 'center', headerAlign: 'center', flex: 1, minWidth: 200 },
  {
    sortable: true,
    field: 'lastActivity',
    headerName: 'Последняя активность',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 200
  },
  {
    sortable: true,
    field: 'tineInSite',
    headerName: 'Время на сайте',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    minWidth: 200
  },
  {
    field: 'permission',
    headerName: 'Доступ',
    align: 'center',
    headerAlign: 'center',
    minWidth: 40,
    renderCell: ActionsCell
  }
]

const rows = [
  ...Array(80)
    .fill(null)
    .map((_, i) => ({
      id: i,
      time: '2023/04/27  09:44:07',
      login: '@bijdgfsdkfbsekufsekfbskekbf',
      name: 'Ткачук Александр',
      role: 'Suport alex',
      lastActivity: '2023/04/27 09:44:07',
      tineInSite: '267 дней',
      permission: ''
    }))
]

const paginationModel = { page: 0, pageSize: 20 }

const SecurityLoginsTable = () => {
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

export default SecurityLoginsTable
