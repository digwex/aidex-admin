import { NAVIGATION_LINKS } from '@/utils/constants'
import { AccessRouteGuard } from '@/views/access-route-guard'
import DashboardPage from '@/views/apps/dashboard/daschboard'

export const metadata = {
  title: 'Главная'
}

const Dashboard = () => {
  return (
    <AccessRouteGuard route={NAVIGATION_LINKS.DASHBOARD}>
      <DashboardPage />
    </AccessRouteGuard>
  )
}

export default Dashboard
