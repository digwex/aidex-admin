import { useLayoutEffect } from 'react'

import { useDispatch } from 'react-redux'

import { useLocation } from 'react-router'

import { setSearchByDate, setSearchByDateTime, setSearchByTake, setSearchTerm } from '@/redux-store/slices'

export const useClearStateSearch = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (pathname.startsWith('/admin/statistics')) {
      const startDate = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)

      startDate.setHours(0, 0, 0, 0)
      const endDate = new Date()

      endDate.setHours(23, 59, 59, 999)

      if (pathname.includes('/admin/statistics/month')) {
        const newStartDate = new Date(2023, 0, 1)

        newStartDate.setHours(0, 0, 0, 0)

        dispatch(setSearchByDate([newStartDate.getTime(), endDate.getTime()]))
      } else {
        dispatch(setSearchByDate([startDate.getTime(), endDate.getTime()]))
      }
    } else if (pathname.includes('by-days') || pathname.includes('by-months') || pathname.includes('by-trader')) {
      const startDate = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)

      startDate.setHours(0, 0, 0, 0)
      const endDate = new Date()

      endDate.setHours(23, 59, 59, 999)

      dispatch(setSearchByDate([startDate.getTime(), endDate.getTime()]))
    } else if (pathname.includes('/admin/partners')) {
      dispatch(setSearchTerm(''))
      dispatch(setSearchByDate([null, null]))
      dispatch(setSearchByDateTime('Все'))
      dispatch(setSearchByTake('25 записей'))

      return
    } else {
      dispatch(setSearchByDate([null, null]))
    }

    dispatch(setSearchTerm(''))
    dispatch(setSearchByDateTime('Все'))
    dispatch(setSearchByTake('10 записей'))
  }, [dispatch, pathname])
}
