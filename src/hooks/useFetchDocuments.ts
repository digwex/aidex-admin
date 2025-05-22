'use client'

import { useCallback } from 'react'

import { usePathname } from 'next/navigation'

import { documentsFetchActions } from '@/redux-store/slices'
import { useAppDispatch } from './useRedux'

export const useFetchDocuments = () => {
  const dispatch = useAppDispatch()
  const pathname = usePathname()

  const processFetch = useCallback(
    (isFetch: boolean) => {
      if (pathname.includes('/admin/user/') && isFetch) {
        dispatch(documentsFetchActions.setShouldFetch(true))
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  )

  return processFetch
}
