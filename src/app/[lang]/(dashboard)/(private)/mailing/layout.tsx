import type { PropsWithChildren } from 'react'

import { Divider, Paper } from '@mui/material'

import Tabs from '@/views/sorts/Tabs'
import type { Locale } from '@/configs/i18n'
import { Title } from '@/components/Title'
import MailingTable from '@/views/apps/mailing/MailingTable'

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

  return (
    <div className='grid h-full grid-rows-[auto_1fr] gap-4'>
      <Title title='Рассылка' icon='tabler-mail' />

      <div className='grid grid-cols-2 h-full gap-4 max1400:grid-cols-1'>
        <Paper className='p-4 grid gap-4 grid-rows-[auto_auto_1fr]'>
          <Tabs tabs={tabs} />

          <Divider />

          {children}
        </Paper>

        <Paper className='p-4'>
          <MailingTable />
        </Paper>
      </div>
    </div>
  )
}

export default Layout
