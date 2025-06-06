import { NAVIGATION_LINKS } from '@/utils/constants'
import { AccessRouteGuard } from '@/hocs/access-route-guard'
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
