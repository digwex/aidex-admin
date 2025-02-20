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

import { Checkbox } from '@mui/material'

import Table, { fuzzyFilter } from '@/components/Table'

interface Columns {
  check: string
  tgId: number
  tgLogin: string
  role: string
  name: string
  lvl: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      check: '',
      tgId: i,
      tgLogin: '@bijdgfsdkfbsekufsekfbskekbf',
      role: 'Главный админ',
      name: 'Сергей',
      lvl: '5 урвоень'
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const SecurityAdminTable = () => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('check', {
        header: '',
        enableSorting: false,
        cell: () => <Checkbox />
      }),
      columnHelper.accessor('tgId', {
        header: 'Телеграм  ID',
        cell: ({ row }) => <div className='text-center'> {row.original.tgId}</div>
      }),
      columnHelper.accessor('tgLogin', {
        header: 'Логин телеграм',
        cell: ({ row }) => <div className='text-center'>{row.original.tgLogin}</div>
      }),
      columnHelper.accessor('role', {
        header: 'Роль',
        cell: ({ row }) => <div className='text-center'> {row.original.role}</div>
      }),
      columnHelper.accessor('name', {
        header: 'Имя',
        cell: ({ row }) => <div className='text-center'> {row.original.name}</div>
      }),
      columnHelper.accessor('lvl', {
        header: 'Уровень доступа',
        cell: ({ row }) => <div className='text-center flex-1'> {row.original.lvl}</div>
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

export default SecurityAdminTable
