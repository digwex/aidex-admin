import type { PropsWithChildren } from 'react'

import type { Locale } from '@/configs/i18n'

import { Mailing } from '@/views/apps/mailing/Mailing'

interface Props extends PropsWithChildren {
  params: Promise<{ lang: Locale }>
}

export const metadata = {
  title: 'Рассылка'
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  const tabs = [
    { label: 'На почту', value: `/${lang}/mailing` },
    { label: 'Сайт / Поп ап', value: `/${lang}/mailing/site` },
    { label: 'В бот', value: `/${lang}/mailing/bot` }
  ]

  return <Mailing tabs={tabs}>{children}</Mailing>
}

export default Layout
