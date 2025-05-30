import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'
import { Sorts } from './sorts'

export const EditLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='space-y-4'>
      <Title icon='tabler-edit' title='Редактирование пар' />

      <Sorts />

      <div>{children}</div>
    </div>
  )
}
