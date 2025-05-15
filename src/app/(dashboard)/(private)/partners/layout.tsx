import { Partners } from '@/views/apps/partners/Partners'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'Партнёры'
}

const Layout = async ({ children }: Props) => {
  const tabs = [
    { value: `/partners`, label: 'Лист ожидания', icon: 'tabler-clock-hour-4-filled' },
    { value: `/partners/active`, label: 'Активные партнеры', icon: 'tabler-circle-check' },
    { value: `/partners/rejected`, label: 'Неодобренные заявки', icon: 'tabler-info-triangle' },
    { value: `/partners/blocked`, label: 'Заблокированные партнеры', icon: 'tabler-circle-x' }
  ]

  return <Partners tabs={tabs}>{children}</Partners>
}

export default Layout
