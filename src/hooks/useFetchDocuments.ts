import { useCallback } from 'react'

import { usePathname } from 'next/navigation'

import { useAppDispatch } from './useRedux'
import { documentsFetchActions } from '@/redux-store/slices'

export const useFetchDocuments = () => {
  const dispatch = useAppDispatch()
  const pathname = usePathname()

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
