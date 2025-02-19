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
  transactionID: number
  email: string
  ftd: string
  ctr: string
  rtd: string
  deposits: string
  withdrawals: string
  tariff: string
  profit: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      transactionID: 4245346545 + i,
      email: `alexsandr.tkachuk18@gmail.com`,
      ftd: '425',
      ctr: '13.43%',
      rtd: '13.43%',
      deposits: '$275.74',
      withdrawals: '$275.74',
      tariff: '',
      profit: '$ 55 484,42'
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const PartnerSubAffiliateTable = () => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('transactionID', {
        header: 'ID',
        cell: ({ row }) => <div className='text-center'> {row.original.transactionID}</div>
      }),

      columnHelper.accessor('email', {
        header: 'Электронная почта',

        cell: ({ row }) => <div className='text-center'>{row.original.email}</div>
      }),

      columnHelper.accessor('ftd', {
        header: 'FTD',
        cell: ({ row }) => <div className='text-center'> {row.original.ftd}</div>
      }),

      columnHelper.accessor('ctr', {
        header: '%,CTR',
        cell: ({ row }) => <div className='text-center'> {row.original.ctr}</div>
      }),

      columnHelper.accessor('rtd', {
        header: 'RTD',
        cell: ({ row }) => <div className='text-center flex-1'> {row.original.rtd}</div>
      }),

      columnHelper.accessor('deposits', {
        header: 'Депозиты,$',
        cell: ({ row }) => <div className='text-center'> {row.original.deposits}</div>
      }),

      columnHelper.accessor('withdrawals', {
        header: 'Выводы,$',
        cell: ({ row }) => <div className='text-center'> {row.original.withdrawals}</div>
      }),

      columnHelper.accessor('tariff', {
        header: 'Бонусы,$',
        cell: () => (
          <div className='flex items-center justify-center gap-2'>
            <img className='w-[18px] h-[18px] min-w-[18px]' src='/images/tariff/super-nova-ellite.svg' alt='success' />
            <p>Super Nova Elite</p>
          </div>
        )
      }),

      columnHelper.accessor('profit', {
        header: 'Профит от суб-партнера,$',
        cell: ({ row }) => <div className='text-center'> {row.original.profit}</div>
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

export default PartnerSubAffiliateTable
