'use client'

import CustomTable from '@/views/table/CustomTable'
import { useLazyGetAllUsersQuery } from '../../../../api/endpoints/users/users-api'
import { SORT_DIRECTION } from '../../../../api/types'

import { userSortTitles } from './userSortTitles'
import { UserRow } from '@/views/table/rows/users/UserRow'

function UsersCustomTable() {
  return (
    <CustomTable
      isSearchBar
      isDate
      query={useLazyGetAllUsersQuery}
      DataItem={UserRow}
      sortTitles={userSortTitles}
      fetchParams={{ isBlocked: false }}
      order={{ field: 'balance', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default UsersCustomTable

// import { useMemo, useState } from 'react'

// import Link from 'next/link'

// import { usePathname } from 'next/navigation'

// import type { ColumnDef } from '@tanstack/react-table'
// import {
//   createColumnHelper,
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel
// } from '@tanstack/react-table'

// import { Button } from '@mui/material'

// import Table, { fuzzyFilter } from '@/components/Table'
// import { BlockModal } from './BlockModal'
// import { useGetAllUsersQuery } from '@/api/endpoints/users/users-api'

// interface Columns {
//   id: number
//   balance: string
//   email: string
//   password: string
//   name: string
//   status: string
//   kyc: string
//   doc: string
//   '2fa': string
//   ip: string
//   options: any
// }

// const data = [
//   ...Array(50)
//     .fill(null)
//     .map((_, i) => ({
//       id: 53255654 + i,
//       balance: '$2,575.74',
//       email: 'alexa@gmail.com',
//       password: '793jd879334r',
//       name: 'Ткачук Александр',
//       status: 'ok',
//       kyc: 'i',
//       doc: 'pdf',
//       '2fa': 'x',
//       ip: '66.249.95.255',
//       options: ''
//     }))
// ] as Columns[]

// const columnHelper = createColumnHelper<Columns>()

// const UsersTable = () => {
//   const pathname = usePathname()
//   const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([])
//   const { data: users } = useGetAllUsersQuery()

//   console.debug('users', users)

//   const columns = useMemo<ColumnDef<Columns, any>[]>(
//     () => [
//       columnHelper.accessor('id', {
//         header: 'ID',

//         cell: ({ row }) => (
//           <div className='text-center'>
//             <Link href={pathname + '/' + row.original.id}>{row.original.id}</Link>
//           </div>
//         )
//       }),

//       columnHelper.accessor('balance', {
//         header: 'Баланс,$',
//         cell: ({ row }) => <div className='text-center'> {row.original.balance}</div>
//       }),

//       columnHelper.accessor('email', {
//         header: 'E-mail',
//         cell: ({ row }) => <div className='text-center'> {row.original.email}</div>
//       }),

//       columnHelper.accessor('password', {
//         header: 'Пароль',
//         cell: ({ row }) => <div className='text-center'> {row.original.password}</div>
//       }),

//       columnHelper.accessor('name', {
//         header: 'Имя Фамилия',
//         cell: ({ row }) => <div className='text-center flex-1'> {row.original.name}</div>
//       }),

//       columnHelper.accessor('status', {
//         header: () => <div className=''>Статус</div>,
//         cell: ({ row }) => <div className='text-center'> {row.original.status}</div>
//       }),

//       columnHelper.accessor('kyc', {
//         header: 'KYC',
//         cell: ({ row }) => <div className='text-center'> {row.original.kyc}</div>
//       }),

//       columnHelper.accessor('doc', {
//         header: 'Документы',
//         cell: ({ row }) => <div className='text-center'> {row.original.doc}</div>
//       }),

//       columnHelper.accessor('2fa', {
//         header: '2ФА',
//         cell: ({ row }) => <div className='text-center'> {row.original['2fa']}</div>
//       }),

//       columnHelper.accessor('ip', {
//         header: 'IP',
//         cell: ({ row }) => <div className='text-center'> {row.original.ip}</div>
//       }),

//       columnHelper.accessor('options', {
//         header: 'Опции',
//         cell: () => (
//           <div className='flex items-center justify-center gap-4'>
//             <Button variant='outlined' color='secondary'>
//               Больше
//             </Button>
//             <Button variant='outlined' color='warning'>
//               Торговля
//             </Button>
//             <Button variant='outlined' color='success'>
//               Изменить
//             </Button>
//             <BlockModal />
//           </div>
//         ),
//         enableSorting: false
//       })
//     ],
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     []
//   )

//   const table = useReactTable({
//     data,
//     columns,
//     filterFns: {
//       fuzzy: fuzzyFilter
//     },
//     state: {
//       sorting
//     },
//     initialState: {
//       pagination: {
//         pageSize: 15
//       }
//     },

//     onSortingChange: setSorting,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel()
//   })

//   return <Table table={table} />
// }

// export default UsersTable
