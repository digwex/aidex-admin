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

interface Columns {
  date: string
  transitions: string
  registrations: string
  traders: string
  orders: string
  deposits: string
  depositsAmount: string
  withdrawals: string
  withdrawalsAmount: string
  dynamic: string
  ordersAmount: string
  online: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      date: `2023/04/2${i}`,
      transitions: '73',
      registrations: '0(0.00%)',
      traders: '0(0.00%)',
      orders: '6',
      deposits: '2',
      depositsAmount: '$275.74',
      withdrawals: '1',
      withdrawalsAmount: '$25.74',
      dynamic: '$45.74',
      ordersAmount: '$25.74',
      online: '73'
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const StatisticTradersTable = () => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('date', {
        header: 'Дата',
        cell: ({ row }) => <div className='text-center'>{row.original.date}</div>
      }),
      columnHelper.accessor('transitions', {
        header: 'Переходы',
        cell: ({ row }) => <div className='text-center'>{row.original.transitions}</div>
      }),

      columnHelper.accessor('registrations', {
        header: 'Регистрации',
        cell: ({ row }) => <div className='text-center'> {row.original.registrations}</div>
      }),

      columnHelper.accessor('traders', {
        header: 'Трейдеры',
        cell: ({ row }) => <div className='text-center'> {row.original.traders}</div>
      }),

      columnHelper.accessor('orders', {
        header: 'Сделки',
        cell: ({ row }) => <div className='text-center'> {row.original.orders}</div>
      }),

      columnHelper.accessor('deposits', {
        header: () => 'Депозиты',
        cell: ({ row }) => <div className='text-center'> {row.original.deposits}</div>
      }),

      columnHelper.accessor('depositsAmount', {
        header: 'Депозиты,$',
        cell: ({ row }) => <div className='text-center'> {row.original.depositsAmount}</div>
      }),

      columnHelper.accessor('withdrawals', {
        header: 'Выводы',
        cell: ({ row }) => <div className='text-center'> {row.original.withdrawals}</div>
      }),

      columnHelper.accessor('withdrawalsAmount', {
        header: 'Выводы,$',
        cell: ({ row }) => <div className='text-center'> {row.original.withdrawalsAmount}</div>
      }),

      columnHelper.accessor('dynamic', {
        header: 'Динамика,$',
        cell: ({ row }) => <div className='text-center'> {row.original.dynamic}</div>
      }),

      columnHelper.accessor('ordersAmount', {
        header: 'Открыли сделок,$',
        cell: ({ row }) => <div className='text-center'> {row.original.ordersAmount}</div>
      }),

      columnHelper.accessor('online', {
        header: 'Макс Online',
        cell: ({ row }) => <div className='text-center'> {row.original.online}</div>
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

export default StatisticTradersTable
