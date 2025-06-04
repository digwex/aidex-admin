import { createApi, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

import { baseQuery } from './base'

export const Tag = {
  Admins: 'Admins',
  Logins: 'Logins',
  Users: 'Users',
  UsersAdvertisements: 'UsersAdvertisements',
  UsersDeleted: 'UsersDeleted',
  Pairs: 'Pairs',
  Deposits: 'Deposits',
  Withdrawals: 'Withdrawals',
  Verification: 'Verification',
  Partners: 'Partners',
  User: 'User',
  Deposites: 'Deposites',
  AdminPartners: 'AdminPartners',
  Orders: 'Orders',
  Partner: 'Partner',
  PartnerSessions: 'PartnerSessions',
  PartnerWallet: 'PartnerWallet',
  Mailing: 'Mailing',
  UserVerification: 'UserVerification',
  UserDocs: 'UserDocs',
  PromoMaterial: 'PromoMaterial',
  PromoBonus: 'PromoBonus',
  Bonus: 'Bonus',
  UserMainStats: 'UserMainStats',
  ReferralLevels: 'ReferralLevels',
  Links: 'Links',
  Referrals: 'Referrals'
}

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  return await baseQuery(args, api, extraOptions)
}

export const API = createApi({
  reducerPath: 'API',
  tagTypes: [
    Tag.Admins,
    Tag.Logins,
    Tag.Users,
    Tag.User,
    Tag.Pairs,
    Tag.Deposits,
    Tag.Withdrawals,
    Tag.Verification,
    Tag.Partners,
    Tag.AdminPartners,
    Tag.Orders,
    Tag.Partner,
    Tag.PartnerSessions,
    Tag.PartnerWallet,
    Tag.Mailing,
    Tag.UserVerification,
    Tag.PromoBonus,
    Tag.UserMainStats,
    Tag.ReferralLevels,
    Tag.UsersAdvertisements,
    Tag.UsersDeleted,
    Tag.Links,
    Tag.Referrals
  ],
  baseQuery: (args, api, extraOptions) => baseQueryWithReauth(args, api, extraOptions),
  endpoints: () => ({})
})
