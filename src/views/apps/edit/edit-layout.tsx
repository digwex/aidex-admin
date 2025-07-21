import { Outlet } from 'react-router'

import { Title } from '@/components/Title'
import { Sorts } from './sorts'

export const EditLayout = () => {
  return (
    <div className='space-y-4'>
      <Title icon='tabler-edit' title='Редактирование пар' />

      <Sorts />

      <div>
        <Outlet />
      </div>
    </div>
  )
}
