import { Title } from '@/components/Title'
import type { Locale } from '@/configs/i18n'
import { Sorts } from '@/views/sorts/Sorts'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  const tabs = [
    { value: `/${lang}/apps/verification`, label: 'Ожидания', icon: 'tabler-clock-hour-4-filled' },
    { value: `/${lang}/apps/verification/accepted`, label: 'Одобренные', icon: 'tabler-circle-check' },
    { value: `/${lang}/apps/verification/rejected`, label: 'Не одобренные', icon: 'tabler-circle-x' }
  ]

  return (
    <div className='space-y-4'>
      <Title icon='tabler-checklist' title='Верификация' />
      <div>
        <Sorts tabs={{ tabs }} />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
