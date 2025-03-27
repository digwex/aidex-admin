import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'
import { Sorts } from '@/views/apps/content/Sort'

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <Title icon='tabler-align-box-left-top' title='Контент' />
        <Sorts />
      </div>

      <div>{children}</div>
    </div>
  )
}
