import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'
import { Sorts } from '@/views/sorts/Sorts'
import { PartnersSortsWrapper } from './PartnersSortsWrapper'
import type { TabItem } from '@/views/sorts/Tabs'

interface Props {
  tabs: TabItem[]
}

export const Partners = ({ tabs, children }: PropsWithChildren<Props>) => {
  return (
    <div className='space-y-4'>
      <div>
        <PartnersSortsWrapper>
          <Title icon='tabler-users-group' title='Партнеры' />
          <Sorts tabs={{ tabs }} />
        </PartnersSortsWrapper>
      </div>

      <div>{children}</div>
    </div>
  )
}
