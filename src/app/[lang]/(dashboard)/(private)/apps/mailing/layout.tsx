import type { PropsWithChildren } from 'react'

import { Divider, Paper } from '@mui/material'

import Tabs from '@/views/sorts/Tabs'
import type { Locale } from '@/configs/i18n'
import { Title } from '@/components/Title'
import { MailingControls } from '@/views/apps/mailing/MailingControls'
import { MailingEditor } from '@/views/apps/mailing/MailingEditor'
import MailingTable from '@/views/apps/mailing/MailingTable'

interface Props extends PropsWithChildren {
  params: Promise<{ lang: Locale }>
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  const tabs = [
    { label: 'На почту', value: `/${lang}/apps/mailing` },
    { label: 'Сайт / Поп ап', value: `/${lang}/apps/mailing/site` },
    { label: 'В бот', value: `/${lang}/apps/mailing/bot` }
  ]

  return (
    <div className='grid h-full grid-rows-[auto_1fr] gap-4'>
      <Title title='Рассылка' icon='tabler-mail' />

      <div className='grid grid-cols-2 h-full gap-4 max1400:grid-cols-1'>
        <Paper className='p-4 grid gap-4 grid-rows-[auto_auto_auto_1fr]'>
          <Tabs tabs={tabs} />

          <Divider />

          <MailingControls />

          <MailingEditor />
        </Paper>

        <Paper className='p-4'>
          <MailingTable />
        </Paper>
      </div>
      {children}
    </div>
  )
}

export default Layout
