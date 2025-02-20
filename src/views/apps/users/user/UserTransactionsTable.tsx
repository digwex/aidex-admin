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

import { Button } from '@mui/material'

import Table, { fuzzyFilter } from '@/components/Table'

interface Columns {
  transactionID: number
  date: string
  coin: string
  amount: string
  balance: string
  description: string
  actions: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      transactionID: 42424224 + i,
      date: '2023/04/27 09:44:07',
      coin: 'USDT',
      amount: '$424.34',
      balance: '$424.34',
      description: 'Зачислено на баланс',
      actions: ''
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const UserTransactionsTable = () => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('transactionID', {
        header: 'ID',
        cell: ({ row }) => <div className='text-center'>{row.original.transactionID}</div>
      }),

      columnHelper.accessor('date', {
        header: 'Дата',
        cell: ({ row }) => <div className='text-center'> {row.original.date}</div>
      }),

      columnHelper.accessor('coin', {
        header: 'Монета',
        cell: ({ row }) => <div className='text-center'> {row.original.coin}</div>
      }),

      columnHelper.accessor('amount', {
        header: 'Кол-во',
        cell: ({ row }) => <div className='text-center'> {row.original.amount}</div>
      }),

      columnHelper.accessor('description', {
        header: 'Описание',
        cell: ({ row }) => <div className='text-center flex-1'> {row.original.description}</div>
      }),

      columnHelper.accessor('actions', {
        header: '',
        cell: () => (
          <Button variant='outlined' color='error' className='ml-auto block'>
            Отменить
          </Button>
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

export default UserTransactionsTable
