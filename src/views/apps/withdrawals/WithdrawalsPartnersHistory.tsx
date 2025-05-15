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

import { Status } from '@/components/Status'

interface Columns {
  date: `2023-04-11, 15:39:48`
  traderId: number
  email: string
  withdrawalId: string
  amount: string
  network: string
  address: string
  txid: string
  notes: string
  status: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      date: `2023-04-11, 15:39:48`,
      traderId: 532556542 + i,
      email: 'alexsandr.tkachuk18@gmail.com',
      withdrawalId: '536363',
      amount: '$575.74',
      network: 'TRC20',
      address: 'ouwefghw[o[btgw]tg]qoerbgqr[gobq',
      txid: 'ouwefghw[o[btgw]tg]qoerbgqr[gobq',
      notes: 'Свяжитесь с технической поддержкой для прохождения финансового мониторинга',
      status: ''
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const WithdrawalsPartnersHistory = () => {
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
            <Link href={'/users/' + row.original.traderId}>{row.original.traderId}</Link>
          </div>
        )
      }),

      columnHelper.accessor('withdrawalId', {
        header: 'ID Вывода',
        cell: ({ row }) => <div className='text-center'> {row.original.withdrawalId}</div>
      }),

      columnHelper.accessor('amount', {
        header: 'Сумма вывода,$',
        cell: ({ row }) => <div className='text-center'> {row.original.amount}</div>
      }),

      columnHelper.accessor('network', {
        header: 'Сеть вывода',
        cell: ({ row }) => <div className='text-center'> {row.original.network}</div>
      }),

      columnHelper.accessor('address', {
        header: () => 'Адрес',
        cell: ({ row }) => <div className='text-center'> {row.original.address}</div>
      }),

      columnHelper.accessor('txid', {
        header: 'TXID',
        cell: ({ row }) => <div className='text-center'> {row.original.txid}</div>
      }),

      columnHelper.accessor('notes', {
        header: 'Примечание',
        cell: ({ row }) => <div className='text-center'> {row.original.notes}</div>
      }),

      columnHelper.accessor('status', {
        header: 'Статус',
        cell: () => <Status variant='processing' />,
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

export default WithdrawalsPartnersHistory
