import type { PropsWithChildren } from 'react'

import type { TabItem } from '@/views/sorts/Tabs'
import { Title } from '@/components/Title'
import { Sorts } from '@/views/sorts/Sorts'

interface Props {
  tabs: TabItem[]
}

export const Verification = ({ tabs, children }: PropsWithChildren<Props>) => {
  return (
    <div className='space-y-4'>
      <Title icon='tabler-checklist' title='Верификация' />
      <div>
        <Sorts tabs={{ tabs }} />
      </div>
      <div>{children}</div>
    </div>
  )
}
