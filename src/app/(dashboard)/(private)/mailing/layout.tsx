import type { PropsWithChildren } from 'react'

import { Mailing } from '@/views/apps/mailing/Mailing'

export const metadata = {
  title: 'Рассылка'
}

const Layout = async ({ children }: PropsWithChildren) => {
  const tabs = [
    { label: 'На почту', value: `/mailing` },
    { label: 'Сайт / Поп ап', value: `/mailing/site` },
    { label: 'В бот', value: `/mailing/bot` }
  ]

  return <Mailing tabs={tabs}>{children}</Mailing>
}

export default Layout
