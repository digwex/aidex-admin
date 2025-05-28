import { EditLayout } from '@/views/apps/edit/edit-layout'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Редактирование пар'
}

const Layout = async ({ children }: Props) => {
  return <EditLayout>{children}</EditLayout>
}

export default Layout
