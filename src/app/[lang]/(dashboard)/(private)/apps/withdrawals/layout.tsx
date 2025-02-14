import type { Locale } from '@/configs/i18n'
import { WithdrawalSorts } from '@/views/apps/withdrawals/Sorts/WithdrawalSorts'
import { WithdrawalsTitle } from '@/views/apps/withdrawals/WithdrawalsTitle'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  const tabs = [
    { value: `/${lang}/apps/withdrawals`, label: 'Ожидаемые выводы трейдера' },
    { value: `/${lang}/apps/withdrawals/partners`, label: 'Ожидаемые выводы партнера' },
    { value: `/${lang}/apps/withdrawals/trader-history`, label: 'История трейдера' },
    { value: `/${lang}/apps/withdrawals/partner-history`, label: 'История партнера' },
    { value: `/${lang}/apps/withdrawals/fake-withdraw`, label: 'Фейк вывода' }
  ]

  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <WithdrawalsTitle lang={lang} />
        <WithdrawalSorts withdrawalsSortTabs={tabs} />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
