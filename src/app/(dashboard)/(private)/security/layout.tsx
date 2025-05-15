import { Security } from '@/views/apps/security/security'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Защита'
}

const Layout = async ({ children }: Props) => {
  return <Security>{children}</Security>
}

export default Layout
