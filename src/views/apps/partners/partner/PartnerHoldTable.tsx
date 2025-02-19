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
  transactionID: number
  deposits: string
  depositsAmount: string
  withdrawals: string
  withdrawalsAmount: string
  orders: string
  ordersAmount: string
  profit: string
  bonuses: string
  balance: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      date: '2023/04/27',
      transactionID: i,
      deposits: '9',
      depositsAmount: '$275.74',
      withdrawals: '425',
      withdrawalsAmount: '$2,575.74',
      orders: '6',
      ordersAmount: '$0.00',
      profit: '$45.74',
      bonuses: '$25.74',
      balance: '$0.00'
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const PartnerHoldTable = () => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('date', {
        header: 'Дата',
        cell: ({ row }) => <div className='text-center'> {row.original.date}</div>
      }),

      columnHelper.accessor('transactionID', {
        header: 'ID трейдера',

        cell: ({ row }) => <div className='text-center'>{row.original.transactionID}</div>
      }),

      columnHelper.accessor('deposits', {
        header: 'Депозиты',
        cell: ({ row }) => <div className='text-center'> {row.original.deposits}</div>
      }),

      columnHelper.accessor('depositsAmount', {
        header: 'Депозиты,$',
        cell: ({ row }) => <div className='text-center'> {row.original.depositsAmount}</div>
      }),

      columnHelper.accessor('withdrawals', {
        header: 'Выводы',
        cell: ({ row }) => <div className='text-center flex-1'> {row.original.withdrawals}</div>
      }),

      columnHelper.accessor('withdrawalsAmount', {
        header: 'Выводы,$',
        cell: ({ row }) => <div className='text-center'> {row.original.withdrawalsAmount}</div>
      }),

      columnHelper.accessor('orders', {
        header: 'Сделки',
        cell: ({ row }) => <div className='text-center'> {row.original.orders}</div>
      }),

      columnHelper.accessor('ordersAmount', {
        header: 'Сделки,$',
        cell: ({ row }) => <div className='text-center'> {row.original.ordersAmount}</div>
      }),

      columnHelper.accessor('profit', {
        header: 'Прибыть / Убыток,$',
        cell: ({ row }) => <div className='text-center'> {row.original.profit}</div>
      }),

      columnHelper.accessor('bonuses', {
        header: 'Бонусы,$',
        cell: ({ row }) => <div className='text-center'> {row.original.bonuses}</div>
      }),

      columnHelper.accessor('balance', {
        header: 'Баланс,$',
        cell: ({ row }) => <div className='text-center'> {row.original.balance}</div>
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

export default PartnerHoldTable
