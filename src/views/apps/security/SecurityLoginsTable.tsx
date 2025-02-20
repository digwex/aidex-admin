'use client'

import { useMemo, useState } from 'react'

import type { ColumnDef } from '@tanstack/react-table'
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel
} from '@tanstack/react-table'

import Table, { fuzzyFilter } from '@/components/Table'
import CustomIconButton from '@/@core/components/mui/IconButton'

interface Columns {
  time: string
  login: string
  name: string
  role: string
  lastActivity: string
  tineInSite: string
  permission: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map(() => ({
      time: '2023/04/27  09:44:07',
      login: '@bijdgfsdkfbsekufsekfbskekbf',
      name: 'Ткачук Александр',
      role: 'Suport alex',
      lastActivity: '2023/04/27 09:44:07',
      tineInSite: '267 дней',
      permission: ''
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const SecurityLoginsTable = () => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('time', {
        header: 'Время',
        cell: ({ row }) => <div className='text-center'> {row.original.time}</div>
      }),

      columnHelper.accessor('login', {
        header: 'Логин',
        cell: ({ row }) => <div className='text-center'>{row.original.login}</div>
      }),

      columnHelper.accessor('name', {
        header: 'Имя Фамилия',
        cell: ({ row }) => <div className='text-center'> {row.original.name}</div>
      }),

      columnHelper.accessor('role', {
        header: 'Роль',
        cell: ({ row }) => <div className='text-center'> {row.original.role}</div>
      }),

      columnHelper.accessor('lastActivity', {
        header: 'Последняя активность',
        cell: ({ row }) => <div className='text-center flex-1'> {row.original.lastActivity}</div>
      }),

      columnHelper.accessor('tineInSite', {
        header: 'Время на сайте',
        cell: ({ row }) => <div className='text-center'> {row.original.tineInSite}</div>
      }),

      columnHelper.accessor('permission', {
        header: 'Доступ',
        cell: () => (
          <div className='flex justify-center'>
            <CustomIconButton variant='outlined' color='error'>
              <i className='tabler-x'></i>
            </CustomIconButton>
          </div>
        ),
        enableSorting: false
      })
    ],
    []
  )

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      sorting
    },
    initialState: {
      pagination: {
        pageSize: 15
      }
    },

    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return <Table table={table} />
}

export default SecurityLoginsTable
