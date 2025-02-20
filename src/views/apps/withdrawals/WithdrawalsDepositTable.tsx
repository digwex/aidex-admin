'use client'

import { useMemo, useState } from 'react'

import Link from 'next/link'

import { useParams } from 'next/navigation'

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
  depositId: string
  depositIn: string
  tokenAmount: number
  enrolled: number
  txid: string
  balance: string
  status: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      date: `2023-04-11, 15:39:48`,
      traderId: 532556542 + i,
      email: 'alexsandr.tkachuk18@gmail.com',
      depositId: '536363',
      depositIn: 'BTC',
      tokenAmount: 0.2343453,
      enrolled: 5425,
      txid: 'ouwefghw[o[btgw]tg]qoerbgqr[gobq',
      balance: '$575.74',
      status: ''
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const WithdrawalsDepositTable = () => {
  const params = useParams()

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
            <Link href={'/' + (params?.lang || '') + '/users/' + row.original.traderId}>{row.original.traderId}</Link>
          </div>
        )
      }),

      columnHelper.accessor('email', {
        header: 'E-mail',
        cell: ({ row }) => <div className='text-center'> {row.original.email}</div>
      }),

      columnHelper.accessor('depositId', {
        header: 'ID Транзакции',
        cell: ({ row }) => <div className='text-center'> {row.original.depositId}</div>
      }),

      columnHelper.accessor('depositIn', {
        header: 'Пополнял в',
        cell: ({ row }) => <div className='text-center'> {row.original.depositIn}</div>
      }),

      columnHelper.accessor('tokenAmount', {
        header: () => 'Кол-во токенов',
        cell: ({ row }) => <div className='text-center'> {row.original.tokenAmount}</div>
      }),

      columnHelper.accessor('enrolled', {
        header: 'Зачисленно',
        cell: ({ row }) => <div className='text-center'> {row.original.enrolled}</div>
      }),

      columnHelper.accessor('txid', {
        header: 'TXID',
        cell: ({ row }) => <div className='text-center'> {row.original.txid}</div>
      }),

      columnHelper.accessor('balance', {
        header: 'Баланс,$',
        cell: ({ row }) => <div className='text-center'> {row.original.balance}</div>
      }),

      columnHelper.accessor('status', {
        header: 'Статус',
        cell: () => <Status variant='success' />,
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

export default WithdrawalsDepositTable
