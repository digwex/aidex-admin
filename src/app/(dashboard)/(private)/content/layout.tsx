import { Content } from '@/views/apps/content/Content'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return <Content>{children}</Content>
}

export default Layout
