import type { PropsWithChildren } from 'react'

import { Title } from '@/components/Title'
import { Sorts } from '@/views/apps/security/Sorts'
import type { Locale } from '@/configs/i18n'

export const Security = ({ children, lang }: PropsWithChildren<{ lang: Locale }>) => {
  return (
    <div className='space-y-4'>
      <Title icon='tabler-shield-lock' title='Безопасность' />

      <Sorts lang={lang} />

      <div>{children}</div>
    </div>
  )
}
