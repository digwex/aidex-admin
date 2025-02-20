import { Title } from '@/components/Title'
import type { Locale } from '@/configs/i18n'
import { Sorts } from '@/views/sorts/Sorts'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export const metadata = {
  title: 'Статистика'
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  const tabs = [
    { value: `/${lang}/statistic`, label: 'По дням', icon: 'tabler-clock-hour-4-filled' },
    { value: `/${lang}/statistic/months`, label: 'По месяцам', icon: 'tabler-calendar' },
    { value: `/${lang}/statistic/traders`, label: 'По трейдерам', icon: 'tabler-chart-candle' },
    { value: `/${lang}/statistic/web`, label: 'По Web мастерам', icon: 'tabler-file-code' }
  ]

  return (
    <div className='space-y-4'>
      <Title icon='tabler-chart-histogram' title='Статистика' />
      <div>
        <Sorts
          tabs={{
            tabs
          }}
        />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
