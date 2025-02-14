import { Title } from '@/components/Title'
import type { Locale } from '@/configs/i18n'
import { PartnersSortsWrapper } from '@/views/apps/partners/PartnersSortsWrapper'
import { Sorts } from '@/views/sorts/Sorts'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

const Layout = async ({ children, params }: Props) => {
  const { lang } = await params

  const tabs = [
    { value: `/${lang}/apps/partners`, label: 'Лист ожидания', icon: 'tabler-clock-hour-4-filled' },
    { value: `/${lang}/apps/partners/active`, label: 'Активные партнеры', icon: 'tabler-circle-check' },
    { value: `/${lang}/apps/partners/rejected`, label: 'Неодобренные заявки', icon: 'tabler-info-triangle' },
    { value: `/${lang}/apps/partners/blocked`, label: 'Заблокированные партнеры', icon: 'tabler-circle-x' }
  ]

  return (
    <div className='space-y-4'>
      <div>
        <PartnersSortsWrapper lang={lang}>
          <Title icon='tabler-users-group' title='Партнеры' />
          <Sorts tabs={{ tabs }} />
        </PartnersSortsWrapper>
      </div>

      <div>{children}</div>
    </div>
  )
}

export default Layout
