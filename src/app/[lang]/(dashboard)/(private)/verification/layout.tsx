import type { Locale } from '@/configs/i18n'
import { Verification } from '@/views/apps/verification/Verification'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export const metadata = {
  title: 'Верификация'
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  const tabs = [
    { value: `/${lang}/verification`, label: 'Ожидания', icon: 'tabler-clock-hour-4-filled' },
    { value: `/${lang}/verification/accepted`, label: 'Одобренные', icon: 'tabler-circle-check' },
    { value: `/${lang}/verification/rejected`, label: 'Не одобренные', icon: 'tabler-circle-x' }
  ]

  return <Verification tabs={tabs}>{children}</Verification>
}

export default Layout
