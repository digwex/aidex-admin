import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'

import { useDebounceValue } from 'usehooks-ts'

import { addDays } from 'date-fns'

import { useLocation } from 'react-router'

import { store } from '@/redux-store'
import { getInitialSearchDate } from '@/utils/getInitialSearchDate'
import { useAppSelector } from './useRedux'

interface Props {
  refetch: any
  data: any
  fetchParams?: any
  isSearch?: boolean
  isSearchBar?: boolean
  isDate?: boolean
  error?: any
  orderBy?: any
}

const getTake = (take: string | number | undefined) => parseInt(take as string) || undefined

const isBadPathName = (pathname: string, date: [number | null, number | null]) => {
  if (
    (pathname.startsWith('/admin/statistics') ||
      pathname.includes('by-days') ||
      pathname.includes('by-months') ||
      pathname.includes('by-trader')) &&
    date.length !== 2
  ) {
    return true
  }

  return false
}

// const parseOrderBy = (orderBy: any) => {
//   if (!orderBy?.field) {
//     return undefined
//   }

//   const keys = orderBy.field.split('.')
//   const direction = orderBy.direction

//   const nestedOrder = {}
//   let currentLevel: any = nestedOrder

//   keys.forEach((key: string, index: number) => {
//     if (index === keys.length - 1) {
//       currentLevel[key] = direction
//     } else {
//       currentLevel[key] = {}
//       currentLevel = currentLevel[key]
//     }
//   })

//   return JSON.stringify(nestedOrder)
// }

export const usePagination = ({
  refetch,
  data,

  // error,
  fetchParams,
  isSearch = false,
  isSearchBar = false,
  isDate = false,
  orderBy
}: Props) => {
  const { pathname } = useLocation()

  const [skip, setSkip] = useState(0)
  const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const takeState = useAppSelector(state => state.search.take)
  const date = useAppSelector(state => state.search.date)
  const searchValue = useAppSelector(state => state.search.value)

  const [storeDate, setStoreDate] = useState<[number | null, number | null] | undefined>(undefined)

  useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newDate = store.getState().search.date

      setStoreDate(newDate)
    })

    return () => unsubscribe()
  }, [])

  const [debouncedSearchValue] = useDebounceValue(searchValue, 500)

  const { type, take: takeParam, uid, withHash, ...rest } = fetchParams || {}

  const take = useMemo(() => getTake(takeParam ?? takeState), [takeParam, takeState])

  const pages = useCallback((total: number) => (take ? Math.ceil(total / take) : 1), [take])

  const fetchAdmins = useCallback(async () => {
    const willSendDate = storeDate === undefined ? store.getState().search.date : storeDate
    const [seconds10YearsAgo, endOfDaySeconds] = getInitialSearchDate()

    const from = isDate
      ? willSendDate?.[0]
        ? Math.floor(new Date(willSendDate[0]).getTime() / 1000)
        : undefined
      : Math.floor(seconds10YearsAgo / 1000)

    const to = isDate
      ? willSendDate?.[1]
        ? Math.floor(new Date(willSendDate[1]).getTime() / 1000)
        : willSendDate[0]
          ? Math.floor(addDays(new Date(willSendDate[0]), 1).getTime() / 1000)
          : undefined
      : Math.floor(endOfDaySeconds / 1000)

    await refetch({
      skip,
      take,
      from: isDate ? from : undefined,
      to: isDate ? to : undefined,
      search: isSearch ? debouncedSearchValue || undefined : undefined,
      searchBar: isSearchBar ? debouncedSearchValue || undefined : undefined,
      uid,
      type,
      withHash,
      orderBy: orderBy.field,
      direction: orderBy.direction,
      ...rest
    })
  }, [skip, take, storeDate, debouncedSearchValue, type, withHash, pages, uid, orderBy])

  useEffect(() => {
    if (!isBadPathName(pathname, storeDate ?? date ?? [])) void fetchAdmins()
  }, [fetchAdmins, pathname, storeDate])

  useEffect(() => {
    if (data) {
      const countPages = pages(data?.data?.total ?? data?.data?.count ?? data?.data?.totalPages)

      if (countPages !== totalPage) {
        setTotalPage(countPages)
      }

      if (currentPage > countPages && countPages !== 0) {
        setCurrentPage(countPages)
        setSkip((countPages - 1) * (take ?? 1))
      }
    }
  }, [data])

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber)
      setSkip((pageNumber - 1) * (take ?? 1))
    },
    [take]
  )

  return { totalPage, currentPage, handlePageChange, skip }
}
