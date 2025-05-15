import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'
import { Sorts } from '@/views/apps/security/Sorts'
import { SecurityProvider } from './Admins/security-provider'

export const Security = ({ children }: PropsWithChildren) => {
  return (
    <SecurityProvider>
      <div className='space-y-4'>
        <Title icon='tabler-shield-lock' title='Безопасность' />

        <Sorts />

        <div>{children}</div>
      </div>
    </SecurityProvider>
  )
}
