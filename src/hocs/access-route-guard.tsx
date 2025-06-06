'use client'

import type { PropsWithChildren } from 'react'

import { Chip } from '@mui/material'

import { useCheckAccess } from '@/hooks/useCheckAccess'

export const AccessRouteGuard = ({ children, route }: PropsWithChildren<{ route: string }>) => {
  const { checkRoute } = useCheckAccess()
  const isAvailableRout = checkRoute(route)

  if (!isAvailableRout)
    return (
      <div className='flex h-full items-center justify-center'>
        <Chip
          variant='tonal'
          label='Permission denied'
          color='error'
          className='text-center uppercase text-xl w-fit mx-auto'
        />
      </div>
    )

  return children
}
