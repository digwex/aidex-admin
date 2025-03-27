import type { Locale } from '@/configs/i18n'
import { Security } from '@/views/apps/security/security'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export const metadata = {
  title: 'Защита'
}

const Layout = async ({ children, params }: Props) => {
  const lang = (await params).lang

  return <Security lang={lang}>{children}</Security>
}

export default Layout
