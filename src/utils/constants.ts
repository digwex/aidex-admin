export const API_URL = import.meta.env.VITE_REACT_APP_API_URL ?? ''
export const FRONT_API_URL = new URL(API_URL).origin + '/v1'
export const BOT_URL = import.meta.env.VITE_REACT_APP_BOT_URL ?? ''

export const NAVIGATION_LINKS = {
  DASHBOARD: '/dashboard',
  STATISTIC: '/statistic',
  USERS: '/users',
  USER_DETAILS: '/users/:id',
  WALLETS: '/wallets',
  REFERRALS: '/referrals',
  WITHDRAWALS: '/withdrawals/pending',
  SECURITY: '/security',
  SECURITY_LOGINS: '/security/logins',
  EDIT: '/edit',
  EDIT_HOT: '/edit/hot',
  EDIT_NEW: '/edit/new'
}

export const hiddenIds = ['508440400', '485512202']
