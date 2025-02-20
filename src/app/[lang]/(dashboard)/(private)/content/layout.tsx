import { Title } from '@/components/Title'
import { Sorts } from '@/views/apps/content/Sort'

interface Props {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <Title icon='tabler-align-box-left-top' title='Контент' />
        <Sorts />
      </div>

      <div>{children}</div>
    </div>
  )
}

export default Layout
