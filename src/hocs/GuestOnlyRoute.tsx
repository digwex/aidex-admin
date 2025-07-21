import { Navigate } from 'react-router'

import type { ChildrenType } from '@core/types'

import { useUser } from '@/hooks/useUser'

import themeConfig from '@configs/themeConfig'

const GuestOnlyRoute = ({ children }: ChildrenType) => {
  const { isLogged } = useUser()

  if (isLogged) {
    return <Navigate to={themeConfig.homePageUrl} replace />
  }

  return <>{children}</>
}

export default GuestOnlyRoute
