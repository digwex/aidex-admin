'use client'

import { useState, useMemo } from 'react'

import { Button, ButtonGroup, Typography } from '@mui/material'

import type { ColumnDef } from '@tanstack/react-table'
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel
} from '@tanstack/react-table'

import Table, { fuzzyFilter } from '@/components/Table'

import DataPickerRange from '@/views/DataPickerRange'
import MailingContentPreview from './MailingContentPreview'

const StatusRender = () => {
  return (
    <div className='text-center'>
      <img src='/images/icons/verify.svg' alt='sended' />
    </div>
  )
}

interface Columns {
  sendId: string
  date: string
  theme: string
  show: string
  status: string
}

const data: Columns[] = [
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      id: i,
      sendId: 'asdsa23312341234123' + i,
      date: '24/12/2022',
      theme: 'Рассылка',
      show: '',
      status: 'success'
    }))
]

const columnHelper = createColumnHelper<Columns>()

const TableMailing = () => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])

  const columns = useMemo<ColumnDef<Columns, any>[]>(
    () => [
      columnHelper.accessor('date', {
        header: 'Дата',
        cell: ({ row }) => <div className='text-center'> {row.original.date}</div>
      }),

      columnHelper.accessor('sendId', {
        header: 'ID',

        cell: ({ row }) => <div className='text-center'>{row.original.sendId}</div>
      }),

      columnHelper.accessor('theme', {
        header: 'Тема письма',
        cell: ({ row }) => <div className='text-center'> {row.original.theme}</div>
      }),

      columnHelper.accessor('show', {
        header: 'Просмотр',
        enableSorting: false,
        cell: () => (
          <MailingContentPreview
            content={'<div style="color:green;">test content</div>'}
            mailingMethod={'SITE'}
            header={'Тестовое письмо'}
          />
        )
      }),

      columnHelper.accessor('status', {
        header: 'Статус',
        cell: () => <StatusRender />
      })
    ], // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const tableProps = useReactTable({
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
        pageSize: 12
      }
    },

    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return <Table table={tableProps} />
}

const MailingTable = () => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-4 max700:flex-col'>
        <Typography variant='h5' className='mr-auto'>
          История рассылок
        </Typography>
        <ButtonGroup className='max700:w-full' variant='tonal'>
          <Button variant='contained' color='success' className='max700:w-full'>
            Трейдерам
          </Button>
          <Button variant='tonal' color='secondary' className='max700:w-full'>
            Партнерам
          </Button>
        </ButtonGroup>
        <DataPickerRange />
      </div>

      <TableMailing />
    </div>
  )
}

export default MailingTable
