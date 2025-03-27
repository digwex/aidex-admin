import type { PropsWithChildren } from 'react'

import { Divider, Paper } from '@mui/material'

import type { TabItem } from '@/views/sorts/Tabs'
import MailingTable from './MailingTable'
import Tabs from '@/views/sorts/Tabs'
import { Title } from '@/components/Title'

interface Props {
  tabs: TabItem[]
}

export const Mailing = ({ tabs, children }: PropsWithChildren<Props>) => {
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
