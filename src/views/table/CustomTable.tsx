'use client'

import { memo, useLayoutEffect, useState } from 'react'

import { Chip } from '@mui/material'

import { useFetchDocuments } from '@/hooks/useFetchDocuments'
import { usePagination } from '@/hooks/usePagination'
import { useTableSortHeader } from '@/hooks/useTableSortHeader'
import { SORT_DIRECTION } from '../../api/types'
import CustomPagination from './CustomPagination'
import EmptyDataTitle from './EmptyDataTitle'
import TableLoader from './TableLoader/TableLoader'

interface Props {
  query: any
  DataItem: React.ComponentType<any>
  DataFooter?: React.ComponentType<any>
  dataItemsProps?: any
  fetchParams?: any
  sortTitles: any
  isSearch?: boolean
  isSearchBar?: boolean
  isDate?: boolean
  order?: {
    field: string
    direction?: string
  }
  customTableClass?: string
  fakeData?: any[]
  queryProps?: string
}

const getKey = (key: string, index: number) => key ?? index

const getError = (error: any) => {
  if (typeof error?.data?.message === 'string') {
    return error.data.message
  }

  return ''
}

const CustomTable = ({
  query,
  DataItem,
  DataFooter,
  dataItemsProps,
  fetchParams,
  sortTitles,
  isSearch = false,
  isSearchBar = false,
  isDate = false,
  order,
  customTableClass = '',
  fakeData,
  queryProps
}: Props) => {
  const [orderBy, setOrderBy] = useState({
    field: order?.field,
    direction: order?.direction ?? SORT_DIRECTION.DESC
  })

  const processFetch = useFetchDocuments()

  const [refetch, { data: realData, isFetching, isLoading, isSuccess: isRealSuccess, isError, error }] = query()

  const data = fakeData
    ? {
        data: fakeData
      }
    : realData

  const isSuccess = fakeData ? true : isRealSuccess

  const { tableSortTitles } = useTableSortHeader({
    sortTitles,
    orderBy,
    setOrderBy
  })

  const { currentPage, totalPage, handlePageChange } = usePagination({
    refetch,
    data,
    error,
    fetchParams,
    isSearch,
    isSearchBar,
    isDate,
    orderBy
  })

  useLayoutEffect(() => {
    processFetch(isFetching)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching])

  const resultData = fakeData ?? data?.data?.data ?? data?.result ?? []

  const errorText = getError(error)

  if (errorText === 'Permission denied')
    return (
      <div className='w-full flex justify-center  h-full items-center'>
        <Chip variant='tonal' label={errorText} color='error' className='text-center' />
      </div>
    )

  return (
    <>
      <div className='table_wrap'>
        <div className='table_wrap_scroll'>
          <div className='table_wrap_border'>
            <table cellSpacing='0' className={`table_reduce ${customTableClass}`}>
              <thead>{tableSortTitles}</thead>
              <tbody className='relative'>
                {!isSuccess && <TableLoader isLoading={isLoading || isFetching} />}
                {isSuccess &&
                  resultData.map((item: any, index: number) => (
                    <DataItem
                      index={index}
                      key={getKey(item?.id ?? item?.partner?.id, index)}
                      updateTable={refetch}
                      queryProps={data.data?.[queryProps || '']}
                      {...item}
                      {...dataItemsProps}
                    />
                  ))}
              </tbody>
              {!!DataFooter && isSuccess && resultData.length > 0 && (
                <tfoot>
                  <DataFooter {...resultData} />
                </tfoot>
              )}
            </table>
          </div>
          {isError && <EmptyDataTitle title={getError(error)} />}
          {isSuccess && resultData?.length === 0 && <EmptyDataTitle />}
        </div>
      </div>
      <CustomPagination
        isFetching={isFetching}
        isView={!isLoading}
        totalPage={totalPage}
        currentPage={currentPage}
        onChange={handlePageChange}
      />
    </>
  )
}

export default memo(CustomTable)
