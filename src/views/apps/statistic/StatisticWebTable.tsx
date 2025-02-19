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
  email: string
  webmasterId: number
  transitions: number
  registrations: string
  ftd: string
  tradersDeposits: string
  tradersDepositsAmount: string
  tradersWithdrawals: string
  tradersWithdrawalsAmount: string
  activeTradersToday: string
  dynamic: string
  tariff: string
  sybEarn: string
  partnersEarn: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      date: `2023/04/2${i}`,
      email: 'alexa@gmail.com',
      webmasterId: 73 + i,
      transitions: 6 + i,
      registrations: '0',
      ftd: '0',
      tradersDeposits: '32',
      tradersDepositsAmount: '$275.74',
      tradersWithdrawals: '32',
      tradersWithdrawalsAmount: '$275.74',
      activeTradersToday: '10',
      dynamic: '$275.74',
      tariff: 'Silver UP',
      sybEarn: '$275.74',
      partnersEarn: '$275.74'
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const StatisticWebTable = () => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('date', {
        header: 'Дата',
        cell: ({ row }) => <div className='text-center'>{row.original.date}</div>
      }),
      columnHelper.accessor('email', {
        header: 'Почта',
        cell: ({ row }) => <div className='text-center'>{row.original.email}</div>
      }),

      columnHelper.accessor('webmasterId', {
        header: 'ID Вебмастера',
        cell: ({ row }) => <div className='text-center'> {row.original.webmasterId}</div>
      }),

      columnHelper.accessor('transitions', {
        header: 'Переходов',
        cell: ({ row }) => <div className='text-center'> {row.original.transitions}</div>
      }),

      columnHelper.accessor('registrations', {
        header: 'Регистраций',
        cell: ({ row }) => <div className='text-center'> {row.original.registrations}</div>
      }),

      columnHelper.accessor('ftd', {
        header: () => 'FTD',
        cell: ({ row }) => <div className='text-center'> {row.original.ftd}</div>
      }),

      columnHelper.accessor('tradersDeposits', {
        header: 'Депозиты трейд.',
        cell: ({ row }) => <div className='text-center'> {row.original.tradersDeposits}</div>
      }),

      columnHelper.accessor('tradersDepositsAmount', {
        header: 'Депозиты трейд.,$',
        cell: ({ row }) => <div className='text-center'> {row.original.tradersDepositsAmount}</div>
      }),

      columnHelper.accessor('tradersWithdrawals', {
        header: 'Выводы трейд.',
        cell: ({ row }) => <div className='text-center'> {row.original.tradersWithdrawals}</div>
      }),

      columnHelper.accessor('tradersWithdrawalsAmount', {
        header: 'Выводы трейд.,$',
        cell: ({ row }) => <div className='text-center'> {row.original.tradersWithdrawalsAmount}</div>
      }),

      columnHelper.accessor('activeTradersToday', {
        header: 'Активные трейд. сегодня',
        cell: ({ row }) => <div className='text-center'> {row.original.activeTradersToday}</div>
      }),

      columnHelper.accessor('dynamic', {
        header: 'Динамика по всем,$',
        cell: ({ row }) => <div className='text-center'> {row.original.dynamic}</div>
      }),

      columnHelper.accessor('sybEarn', {
        header: 'Суб начисление,$',
        cell: ({ row }) => <div className='text-center'> {row.original.sybEarn}</div>
      }),

      columnHelper.accessor('partnersEarn', {
        header: 'Парнерское начисление,$',
        cell: ({ row }) => <div className='text-center'> {row.original.partnersEarn}</div>
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

export default StatisticWebTable
