import { Outlet } from 'react-router'

import { Title } from '@/components/Title'
import { Sorts } from '@/views/apps/security/Sorts'
import { SecurityProvider } from './Admins/security-provider'

export const Security = () => {
  return (
    <SecurityProvider>
      <div className='space-y-4'>
        <Title icon='tabler-shield-lock' title='Безопасность' />

        <Sorts />

        <div>
          <Outlet />
        </div>
      </div>
    </SecurityProvider>
  )
}
