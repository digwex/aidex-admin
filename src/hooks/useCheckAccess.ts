import { canAccessRoute } from '@/utils/canAccessRoute'
import { type ACTION_ACCESS, canPerformAction } from '../utils/accessActions'

import { useAppSelector } from './useRedux'

export const useCheckAccess = () => {
  const permissions = useAppSelector(state => state.user.permissions)

  const accessLevelNumber = useAppSelector(state => state.user.accessLevelNumber)

  const checkRoute = (path: string) => canAccessRoute(path, accessLevelNumber, permissions)

  const checkAction = (action: ACTION_ACCESS) => canPerformAction(accessLevelNumber, permissions, action)

  return { checkRoute, checkAction }
}
