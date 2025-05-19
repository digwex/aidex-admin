import { Title } from '@/components/Title'
import WalletsTable from './wallets-table'

export const Wallets = () => {
  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <Title icon='tabler-wallet' title='Кошельки' />
      </div>
      <WalletsTable />
    </div>
  )
}
