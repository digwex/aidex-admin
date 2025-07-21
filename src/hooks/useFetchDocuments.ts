import { useCallback } from 'react'

import { useLocation } from 'react-router'

import { documentsFetchActions } from '@/redux-store/slices'
import { useAppDispatch } from './useRedux'

export const useFetchDocuments = () => {
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  const processFetch = useCallback(
    (isFetch: boolean) => {
      if (pathname.includes('/admin/user/') && isFetch) {
        dispatch(documentsFetchActions.setShouldFetch(true))
      }
    },

    [pathname]
  )

  return processFetch
}
