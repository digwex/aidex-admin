'use client'

import { useMemo, useState } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

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
  date: string
  partnerId: number
  mail: string
  telegram: string
  trafic: string
  subaffiliates: string
  tarif: string
  actions: string
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      date: `2023/04/2${i}`,
      partnerId: i,
      mail: 'placeholder@gmail.com',
      telegram: '@telegram',
      trafic: 'YouTube',
      subaffiliates: 'alexa@gmail.com',
      tarif: 'Super Nova Elite',
      actions: ''
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

const PartnerTable = () => {
  const pathname = usePathname()
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('date', {
        header: 'Дата',
        cell: ({ row }) => <div className='text-center'> {row.original.date}</div>
      }),

      columnHelper.accessor('partnerId', {
        header: 'ID Партнера',

        cell: ({ row }) => (
          <div className='text-center'>
            <Link href={pathname + '/' + row.original.partnerId}>{row.original.partnerId}</Link>
          </div>
        )
      }),

      columnHelper.accessor('mail', {
        header: 'Почта',
        cell: ({ row }) => <div className='text-center'> {row.original.mail}</div>
      }),

      columnHelper.accessor('telegram', {
        header: 'Телеграм',
        cell: ({ row }) => <div className='text-center'> {row.original.telegram}</div>
      }),

      columnHelper.accessor('trafic', {
        header: 'Источники трафика',
        cell: ({ row }) => <div className='text-center flex-1'> {row.original.trafic}</div>
      }),

      columnHelper.accessor('subaffiliates', {
        header: 'Суб-аффилиат',
        cell: ({ row }) => <div className='text-center'> {row.original.subaffiliates}</div>
      }),

      columnHelper.accessor('tarif', {
        header: 'Тарифный план',
        cell: ({ row }) => <div className='text-center'> {row.original.tarif}</div>
      }),

      columnHelper.accessor('actions', {
        header: '',
        cell: () => (
          <div className='flex h-full w-full justify-end items-center gap-4'>
            <Button variant='contained' color='primary'>
              Активировать
            </Button>
            <Button variant='tonal' className='!px-2 !w-10 min-w-10' color='error'>
              X
            </Button>
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default PartnerTable
