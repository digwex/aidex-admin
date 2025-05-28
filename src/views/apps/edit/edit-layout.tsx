import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'
import { Sorts } from './sorts'
import { EditForm } from './edit-form'

export const EditLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='space-y-4'>
      <Title icon='tabler-edit' title='Редактирование пар' />

      <Sorts />

      <EditForm />
      <div>{children}</div>
    </div>
  )
}
