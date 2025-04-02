import type { ACCESS_LEVELS } from './accessActions'
import { ACTION_ACCESS } from './accessActions'

export const accessRouteMap: Record<string, ACTION_ACCESS[]> = {
  '/admin/dashbord': [ACTION_ACCESS.VIEW_DASHBOARD],

  // security
  '/admin/security': [ACTION_ACCESS.VIEW_SECURITY],
  '/admin/security/logins': [ACTION_ACCESS.VIEW_SECURITY],

  // statistics
  '/admin/statistics': [ACTION_ACCESS.VIEW_STATISTICS],
  '/admin/statistics/month': [ACTION_ACCESS.VIEW_STATISTICS],
  '/admin/statistics/traders': [ACTION_ACCESS.VIEW_STATISTICS],
  '/admin/statistics/web-masters': [ACTION_ACCESS.VIEW_STATISTICS],

  // partners
  '/admin/partners': [ACTION_ACCESS.APPROVE_PARTNER],
  '/admin/partners/active': [ACTION_ACCESS.VIEW_PARTNERS],
  '/admin/partners/unactive': [ACTION_ACCESS.VIEW_PARTNERS],
  '/admin/partners/banned': [ACTION_ACCESS.VIEW_PARTNERS],
  '/admin/partner/:id': [ACTION_ACCESS.VIEW_PARTNERS],
  '/admin/partner/:id/stats': [ACTION_ACCESS.VIEW_PARTNERS],
  '/admin/partner/:id/sub': [ACTION_ACCESS.VIEW_PARTNERS],
  '/admin/partner/:id/hold': [ACTION_ACCESS.VIEW_PARTNERS],

  // verification
  '/admin/verification': [ACTION_ACCESS.VIEW_VERIFICATIONS],
  '/admin/verification/success': [ACTION_ACCESS.VIEW_VERIFICATIONS],
  '/admin/verification/unsuccess': [ACTION_ACCESS.VIEW_VERIFICATIONS],

  // user
  '/admin/users': [ACTION_ACCESS.VIEW_USERS],
  '/admin/users/fake': [ACTION_ACCESS.VIEW_USERS],
  '/admin/users/banned': [ACTION_ACCESS.VIEW_USERS],
  '/admin/users/deleted': [ACTION_ACCESS.VIEW_USERS],
  '/admin/user/:nId': [ACTION_ACCESS.VIEW_USERS],
  '/admin/user/:nId/transaction': [ACTION_ACCESS.VIEW_USERS],
  '/admin/user/:nId/withdrawal': [ACTION_ACCESS.VIEW_USERS],
  '/admin/user/:nId/orders': [ACTION_ACCESS.VIEW_USERS],
  '/admin/user/:nId/verification': [ACTION_ACCESS.VIEW_USERS],

  // payments
  '/admin/payments/deposit': [ACTION_ACCESS.VIEW_PAYMENTS],
  '/admin/payments/withdrawals': [ACTION_ACCESS.VIEW_PAYMENTS],
  '/admin/payments/withdrawals/partners': [ACTION_ACCESS.PARTNER_WITHDRAWAL_HISTORY],
  '/admin/payments/withdrawals/trader-history': [ACTION_ACCESS.VIEW_PAYMENTS],
  '/admin/payments/withdrawals/partner-history': [ACTION_ACCESS.PARTNER_WITHDRAWAL_HISTORY],

  // distribution
  '/admin/distribution': [ACTION_ACCESS.VIEW_MAILING],
  '/admin/distribution/partners': [ACTION_ACCESS.VIEW_MAILING],
  '/admin/distribution/site': [ACTION_ACCESS.VIEW_MAILING],
  '/admin/distribution/bot': [ACTION_ACCESS.VIEW_MAILING],
  '/admin/settings': [ACTION_ACCESS.VIEW_SETTINGS],

  // pairs
  '/admin/pairs': [ACTION_ACCESS.VIEW_PAIRS],
  '/admin/pairs/refill': [ACTION_ACCESS.VIEW_PAIRS],

  // news
  '/admin/news': [ACTION_ACCESS.VIEW_NEWS],
  '/admin/expenses': [ACTION_ACCESS.VIEW_EXPENSES],

  // bonuses
  '/admin/promobonuses': [ACTION_ACCESS.VIEW_BONUSES]
}

export function canAccessRoute(path: string, userLevel: ACCESS_LEVELS, permissions: ACTION_ACCESS) {
  const routePath = accessRouteMap[path]

  if (routePath) {
    const requiredPermission = routePath[0]

    if ((permissions & requiredPermission) === requiredPermission) {
      return true
    }

    return requiredPermission <= userLevel
  }

  return false
}
