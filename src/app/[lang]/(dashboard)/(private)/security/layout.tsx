import { Title } from '@/components/Title'
import type { Locale } from '@/configs/i18n'
import { Sorts } from '@/views/apps/security/Sorts'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export const metadata = {
  title: 'Защита'
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  return (
    <div className='space-y-4'>
      <Title icon='tabler-shield-lock' title='Безопасность' />

      <Sorts lang={lang} />

      <div>{children}</div>
    </div>
  )
}

export default Layout
