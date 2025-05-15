import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'
import type { TabItem } from '@/views/sorts/Tabs'

import { UsersSortsWrapper } from './UsersSortsWrapper'

import { Sorts } from '@/views/sorts/Sorts'

interface Props {
  tabs: TabItem[]
}

export const Users = ({ tabs, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <div className='space-y-4 mb-4'>
        <UsersSortsWrapper>
          <Title icon='tabler-user' title='Пользователи' />
          <Sorts tabs={{ tabs }} />
        </UsersSortsWrapper>
      </div>
      <div>{children}</div>
    </div>
  )
}
