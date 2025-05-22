'use client'

import { useParams } from 'next/navigation'

import { useGetUserByIdQuery } from '@/api/endpoints/users/users-api'
import { Loader } from '@/components/Loader'
import { Actions } from '@/views/apps/users/user/Actions'
import { Head } from '@/views/apps/users/user/Head'
import { PersonalData } from '@/views/apps/users/user/PersonalData'
import { Sessions } from '@/views/apps/users/user/Sessions'
import UserTableSorts from '@/views/apps/users/user/UserTableSorts'

interface Props {
  children: React.ReactNode
}

const PartnerLayout = ({ children }: Props) => {
  const { id } = useParams()

  const { data, isLoading } = useGetUserByIdQuery(String(id as string))

  if (!data || isLoading) {
    return <Loader />
  }

  return (
    <div className='space-y-4'>
      <Head />
      <Actions isBlockedForever={data.isBlockedForever} isDelete={data.isDelete} userId={data.id} />

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

export default PartnerLayout
