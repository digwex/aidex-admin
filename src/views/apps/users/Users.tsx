'use client'

import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'

import { UsersSortsWrapper } from './UsersSortsWrapper'

import { Sorts } from '@/views/sorts/Sorts'

const tabs = [
  {
    label: 'Пользователь',
    value: `/users`,
    icon: 'tabler-user'
  },
  {
    label: 'Рекламные пользователи',
    value: `/users/advertisement`,
    icon: 'tabler-align-box-left-bottom'
  },
  {
    label: 'Список заблокированых',
    value: `/users/blocked`,
    icon: 'tabler-lock-filled'
  }
]

export const Users = ({ children }: PropsWithChildren) => {
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
