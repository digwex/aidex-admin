import { Title } from '@/components/Title'
import WalletsTable from './mailing-table'
import { MailingSorts } from './mailing-sorts'

export const Mailing = () => {
  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <Title icon='tabler-wallet' title='Кошельки' />
        <MailingSorts />
      </div>
      <WalletsTable />
    </div>
  )
}
