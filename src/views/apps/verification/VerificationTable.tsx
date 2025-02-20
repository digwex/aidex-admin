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
import { UnblockModal } from '../users/UnblockModal'

interface Columns {
  traderId: number
  name: string
  documentNumber: string
  address: string
  photo: string
  document: string
  options: any
}

const data = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      traderId: 532556542 + i,
      name: 'Ткачук Александр',
      documentNumber: 'alexsandr.tkachuk18@gmail.com',
      address: 'г.Киев, ул. Хрещатика 57, кв74',
      photo: 'Фото',
      document: 'PDF',
      options: ''
    }))
] as Columns[]

const columnHelper = createColumnHelper<Columns>()

export const VerificationTable = () => {
  const pathname = usePathname()
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('traderId', {
        header: 'ID трейдера',

        cell: ({ row }) => (
          <div className='text-center'>
            <Link href={pathname + '/' + row.original.traderId}>{row.original.traderId}</Link>
          </div>
        )
      }),

      columnHelper.accessor('name', {
        header: 'Имя Фамилия',
        cell: ({ row }) => <div className='text-center'> {row.original.name}</div>
      }),

      columnHelper.accessor('documentNumber', {
        header: 'Номер документа',
        cell: ({ row }) => <div className='text-center'> {row.original.documentNumber}</div>
      }),

      columnHelper.accessor('address', {
        header: 'Адресс',
        cell: ({ row }) => <div className='text-center'> {row.original.address}</div>
      }),

      columnHelper.accessor('photo', {
        header: () => 'Файл/Фото',
        cell: ({ row }) => <div className='text-center'> {row.original.photo}</div>
      }),

      columnHelper.accessor('document', {
        header: 'Документ',
        cell: ({ row }) => <div className='text-center'> {row.original.document}</div>
      }),

      columnHelper.accessor('options', {
        header: 'Опции',
        cell: () => (
          <div className='flex justify-center items-center gap-4'>
            <Button variant='outlined' color='secondary'>
              Больше
            </Button>
            <Button variant='outlined' color='warning'>
              Торговля
            </Button>
            <Button variant='outlined' color='success'>
              Изменить
            </Button>
            <UnblockModal />
          </div>
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

export default VerificationTable
