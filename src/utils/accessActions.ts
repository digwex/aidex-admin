export enum ACCESS_LEVELS {
  LEVEL_5 = 5,
  LEVEL_4 = 4,
  LEVEL_3 = 3,
  LEVEL_2 = 2,
  LEVEL_1 = 1
}

export enum ACTION_ACCESS {
  VIEW_USERS = 1 << 0,
  VIEW_USER_DETAIL = 1 << 1,
  VIEW_WALLETS = 1 << 2,
  VIEW_SECURITY = 1 << 3,
  VIEW_REFERRAL_LEVELS = 1 << 4,
  ADD_ADMIN = 1 << 5,
  DELETE_ADMIN = 1 << 6,
  EDIT_ADMIN_PERMISSIONS = 1 << 7,
  EDIT_ADMIN_LEVEL = 1 << 8,
  EDIT_REFERRAL_LEVEL_PERCENT = 1 << 9,
  VIEW_DASHBOARD = 1 << 10,
  VIEW_STATISTICS = 1 << 11,
  VIEW_WITHDRAWALS = 1 << 12
}

export const ALLOWED_PERMISSIONS = Object.keys(ACTION_ACCESS).filter(key => isNaN(Number(key)))

export function canPerformAction(
  userAccessLevel: ACCESS_LEVELS,
  permissions: number,
  requiredPermission: ACTION_ACCESS
): boolean {
  return (permissions & requiredPermission) === requiredPermission
}
