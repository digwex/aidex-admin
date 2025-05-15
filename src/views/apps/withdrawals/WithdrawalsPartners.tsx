'use client'

import { useMemo, useState } from 'react'

import Link from 'next/link'

import type { ColumnDef } from '@tanstack/react-table'
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel
} from '@tanstack/react-table'

import Table, { fuzzyFilter } from '@/components/Table'

import { TradersModals } from './TradersModals'

interface Columns {
  date: string
  traderId: number
  email: string
  deposits: string
  depositsAmount: string
  withdrawals: string
  withdrawalsAmount: string
  method: string
  withdrawalsCalls: string
  balance: string
  status: string
  options: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      date: `2023-04-11, 15:39:48`,
      traderId: 532556542 + i,
      email: 'alexsandr.tkachuk18@gmail.com',
      deposits: '452',
      depositsAmount: '$2,575.74',
      withdrawals: '32',
      withdrawalsAmount: '$575.74',
      method: 'TRC20: 4972h42n-f42-f42-4f24f72g7g2-fg',
      withdrawalsCalls: '$5.74',
      balance: '$75.74',
      status: '',
      options: ''
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const WithdrawalsPartners = () => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('date', {
        header: 'Дата',
        cell: ({ row }) => <div className='text-center'>{row.original.date}</div>
      }),
      columnHelper.accessor('traderId', {
        header: 'ID трейдера',
        cell: ({ row }) => (
          <div className='text-center'>
            <Link href={'/partners/' + row.original.traderId}>{row.original.traderId}</Link>
          </div>
        )
      }),

      columnHelper.accessor('email', {
        header: 'E-mail',
        cell: ({ row }) => <div className='text-center'> {row.original.email}</div>
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
        header: () => 'Выводы',
        cell: ({ row }) => <div className='text-center'> {row.original.withdrawals}</div>
      }),

      columnHelper.accessor('withdrawalsAmount', {
        header: 'Выводы,$',
        cell: ({ row }) => <div className='text-center'> {row.original.withdrawalsAmount}</div>
      }),

      columnHelper.accessor('method', {
        header: 'Метод платежа',
        cell: ({ row }) => <div className='text-center'> {row.original.method}</div>
      }),

      columnHelper.accessor('withdrawalsCalls', {
        header: 'Запрос на вывод,$',
        cell: ({ row }) => <div className='text-center'> {row.original.withdrawalsCalls}</div>
      }),

      columnHelper.accessor('balance', {
        header: 'Остаток по балансу,$',
        cell: ({ row }) => <div className='text-center'> {row.original.balance}</div>
      }),

      columnHelper.accessor('status', {
        header: 'Статус',
        cell: () => (
          <div className='flex h-full justify-center items-center gap-3'>
            <img className='w-[18px] h-[18px] min-w-[18px]' src='/images/tariff/light.svg' alt='light' />
            <p>Light</p>
          </div>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('options', {
        header: '',
        cell: () => <TradersModals />,
        enableSorting: false
      })
    ], // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default WithdrawalsPartners
