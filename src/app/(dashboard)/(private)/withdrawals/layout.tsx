import { Withdrawals } from '@/views/apps/withdrawals/Withdrawals'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Вывод'
}

const Layout = async ({ children }: Props) => {
  const tabs = [
    { value: `/withdrawals`, label: 'Ожидаемые выводы трейдера' },

    { value: `/withdrawals/trader-history`, label: 'История трейдера' },

    { value: `/withdrawals/fake-withdraw`, label: 'Фейк вывода' }
  ]

  return <Withdrawals tabs={tabs}>{children}</Withdrawals>
}

export default Layout
