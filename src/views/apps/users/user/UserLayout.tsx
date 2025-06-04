'use client'

import type { PropsWithChildren } from 'react'

import { useParams } from 'next/navigation'

import { Chip } from '@mui/material'

import { useGetUserByIdQuery } from '@/api/endpoints/users/users-api'
import { Loader } from '@/components/Loader'
import { Actions } from '@/views/apps/users/user/Actions'
import { Head } from '@/views/apps/users/user/Head'
import { PersonalData } from '@/views/apps/users/user/PersonalData'
import { Sessions } from '@/views/apps/users/user/Sessions'
import UserTableSorts from '@/views/apps/users/user/UserTableSorts'
import { handleRTKError } from '@/utils/handleRTKError'

export const UserLayout = ({ children }: PropsWithChildren) => {
  const { id } = useParams()

  const { data, isLoading, isError, error } = useGetUserByIdQuery(String(id as string))

  if (isError) {
    return (
      <div className='flex h-full items-center justify-center'>
        <Chip variant='tonal' label={handleRTKError(error)} color='error' className='text-center w-fit mx-auto' />
      </div>
    )
  }

  if (!data || isLoading) {
    return <Loader />
  }

  return (
    <div className='space-y-4'>
      <Head />
      <Actions userData={data} isBlockedForever={data.isBlockedForever} isDelete={data.isDelete} userId={data.id} />

      <div className='grid grid-cols-2 gap-4 max1300:grid-cols-1'>
        <PersonalData />
        <Sessions />
      </div>

      {/* <Documents /> */}

      <div className='space-y-4'>
        <UserTableSorts id={id as string} />
        {children}
      </div>
    </div>
  )
}
