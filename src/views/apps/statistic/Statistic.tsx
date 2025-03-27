import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'
import { Sorts } from '@/views/sorts/Sorts'
import type { TabItem } from '@/views/sorts/Tabs'

interface Props {
  tabs: TabItem[]
}

export const Statistic = ({ tabs, children }: PropsWithChildren<Props>) => {
  return (
    <div className='space-y-4'>
      <Title icon='tabler-chart-histogram' title='Статистика' />
      <div>
        <Sorts
          tabs={{
            tabs
          }}
        />
      </div>
      <div>{children}</div>
    </div>
  )
}
