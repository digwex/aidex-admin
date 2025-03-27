import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'
import type { TabItem } from '@/views/sorts/Tabs'

import { UsersSortsWrapper } from './UsersSortsWrapper'
import type { Locale } from '@/configs/i18n'
import { Sorts } from '@/views/sorts/Sorts'

interface Props {
  lang: Locale
  tabs: TabItem[]
}

export const Users = ({ lang, tabs, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <div className='space-y-4 mb-4'>
        <UsersSortsWrapper lang={lang}>
          <Title icon='tabler-user' title='Пользователи' />
          <Sorts tabs={{ tabs }} />
        </UsersSortsWrapper>
      </div>
      <div>{children}</div>
    </div>
  )
}
