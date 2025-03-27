import type { Locale } from '@/configs/i18n'
import { Withdrawals } from '@/views/apps/withdrawals/Withdrawals'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export const metadata = {
  title: 'Ввод/Вывод'
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  const tabs = [
    { value: `/${lang}/withdrawals`, label: 'Ожидаемые выводы трейдера' },
    { value: `/${lang}/withdrawals/partners`, label: 'Ожидаемые выводы партнера' },
    { value: `/${lang}/withdrawals/trader-history`, label: 'История трейдера' },
    { value: `/${lang}/withdrawals/partner-history`, label: 'История партнера' },
    { value: `/${lang}/withdrawals/fake-withdraw`, label: 'Фейк вывода' }
  ]

  return (
    <Withdrawals tabs={tabs} lang={lang}>
      {children}
    </Withdrawals>
  )
}

export default Layout
