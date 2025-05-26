import type { ACCESS_LEVELS } from './accessActions'
import { ACTION_ACCESS } from './accessActions'

export const accessRouteMap: Record<string, ACTION_ACCESS[]> = {
  '/dashboard': [ACTION_ACCESS.VIEW_DASHBOARD],

  // security
  '/security': [ACTION_ACCESS.VIEW_SECURITY],
  '/security/logins': [ACTION_ACCESS.VIEW_SECURITY],

  // statistics
  '/statistic': [ACTION_ACCESS.VIEW_STATISTICS],
  '/statistic/month': [ACTION_ACCESS.VIEW_STATISTICS],
  '/statistic/traders': [ACTION_ACCESS.VIEW_STATISTICS],
  '/statistic/web-masters': [ACTION_ACCESS.VIEW_STATISTICS],

  // // partners
  // '/partners': [ACTION_ACCESS.APPROVE_PARTNER],
  // '/partners/active': [ACTION_ACCESS.VIEW_PARTNERS],
  // '/partners/unactive': [ACTION_ACCESS.VIEW_PARTNERS],
  // '/partners/banned': [ACTION_ACCESS.VIEW_PARTNERS],
  // '/partner/:id': [ACTION_ACCESS.VIEW_PARTNERS],
  // '/partner/:id/stats': [ACTION_ACCESS.VIEW_PARTNERS],
  // '/partner/:id/sub': [ACTION_ACCESS.VIEW_PARTNERS],
  // '/partner/:id/hold': [ACTION_ACCESS.VIEW_PARTNERS],

  // user
  '/users': [ACTION_ACCESS.VIEW_USERS],
  '/users/advertisement': [ACTION_ACCESS.VIEW_USERS],
  '/users/blocked': [ACTION_ACCESS.VIEW_USERS],
  '/users/deleted': [ACTION_ACCESS.VIEW_USERS],
  '/users/:id': [ACTION_ACCESS.VIEW_USER_DETAIL],

  '/user/:nId': [ACTION_ACCESS.VIEW_USERS],
  '/user/:nId/transaction': [ACTION_ACCESS.VIEW_USERS],
  '/user/:nId/withdrawal': [ACTION_ACCESS.VIEW_USERS],
  '/user/:nId/orders': [ACTION_ACCESS.VIEW_USERS],
  '/user/:nId/verification': [ACTION_ACCESS.VIEW_USERS],

  wallets: [ACTION_ACCESS.VIEW_WALLETS],
  referrals: [ACTION_ACCESS.VIEW_REFERRAL_LEVELS],
  withdrawals: [ACTION_ACCESS.VIEW_WITHDRAWALS]
}

export function canAccessRoute(path: string, userLevel: ACCESS_LEVELS, permissions: ACTION_ACCESS) {
  const routePath = accessRouteMap[path]

  console.log('routePath', { routePath, path, permissions })

  if (routePath) {
    const requiredPermission = routePath[0]

    if ((permissions & requiredPermission) === requiredPermission) {
      return true
    }

    return requiredPermission <= userLevel
  }

  return false
}
