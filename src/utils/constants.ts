export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''
export const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL ?? ''

export const NAVIGATION_LINKS = {
  DASHBOARD: '/dashboard',
  STATISTIC: '/statistic',
  USERS: '/users',
  USER_DETAILS: '/users/:id',
  WALLETS: '/wallets',
  REFERRALS: '/referrals',
  WITHDRAWALS: '/withdrawals',
  SECURITY: '/security',
  SECURITY_LOGINS: '/security/logins',
  EDIT: '/edit',
  EDIT_HOT: '/edit/hot',
  EDIT_NEW: '/edit/new'
}

export const hiddenIds = ['508440400', '485512202']
