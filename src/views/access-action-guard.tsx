'use client'

import type { PropsWithChildren } from 'react'

import { Chip } from '@mui/material'

import { useCheckAccess } from '@/hooks/useCheckAccess'
import type { ACTION_ACCESS } from '@/utils/accessActions'

export const AccessActionGuard = ({ children, action }: PropsWithChildren<{ action: ACTION_ACCESS }>) => {
  const { checkAction } = useCheckAccess()
  const isAvailableAction = checkAction(action)

  if (!isAvailableAction)
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
