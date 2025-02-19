'use client'

import Card from '@mui/material/Card'
import type { FilterFn, Table as ITable } from '@tanstack/react-table'
import { flexRender } from '@tanstack/react-table'

import classnames from 'classnames'

import TablePagination from '@mui/material/TablePagination'

import { rankItem } from '@tanstack/match-sorter-utils'

import TablePaginationComponent from '@components/TablePaginationComponent'

import tableStyles from '@core/styles/table.module.css'

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({
    itemRank
  })

  return itemRank.passed
}

const Table = ({ table }: { table: ITable<any> }) => {
  return (
    <Card>
      <div className='overflow-x-auto'>
        <table className={classnames(tableStyles.table, 'table-auto w-full border-collapse')}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th className='w-fit text-center' key={header.id}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          className={classnames('flex items-center justify-center gap-1', {
                            'cursor-pointer select-none': header.column.getCanSort()
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getCanSort() && (
                            <div className='flex flex-col -mt-1'>
                              <i
                                className={classnames('tabler-chevron-up block -mb-[3px] text-sm', {
                                  'text-primary': header.column.getIsSorted() === 'asc'
                                })}
                              />
                              <i
                                className={classnames('tabler-chevron-down block -mt-[3px] text-sm', {
                                  'text-primary': header.column.getIsSorted() === 'desc'
                                })}
                              />
                            </div>
                          )}
                          {/* {{
                            asc: <i className='tabler-chevron-up text-xl' />,
                            desc: <i className='tabler-chevron-down text-xl' />
                          }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null} */}
                        </div>
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                  No data available
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map(row => {
                  return (
                    <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  )
                })}
            </tbody>
          )}
        </table>
      </div>
      <TablePagination
        component={() => <TablePaginationComponent table={table} />}
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
      />
    </Card>
  )
}

export default Table
