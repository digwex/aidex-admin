import { Withdrawals } from '@/views/apps/withdrawals/Withdrawals'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Ввод/Вывод'
}

const Layout = async ({ children }: Props) => {
  const tabs = [
    { value: `/withdrawals`, label: 'Ожидаемые выводы трейдера' },
    { value: `/withdrawals/partners`, label: 'Ожидаемые выводы партнера' },
    { value: `/withdrawals/trader-history`, label: 'История трейдера' },
    { value: `/withdrawals/partner-history`, label: 'История партнера' },
    { value: `/withdrawals/fake-withdraw`, label: 'Фейк вывода' }
  ]

  return <Withdrawals tabs={tabs}>{children}</Withdrawals>
}

export default Layout
