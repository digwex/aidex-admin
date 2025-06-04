import { API, Tag } from '../..'
import type { IReferralLevel, IReferralLevelChangePercent, TReferralLevelName } from './referrals-types'

export const referralsApi = API.injectEndpoints({
  endpoints: builder => ({
    getReferralLevels: builder.query<IReferralLevel[], void>({
      query: () => '/referral-levels',
      transformResponse: (response: { data: IReferralLevel[] }) => response.data
    }),
    changePercent: builder.mutation<void, IReferralLevelChangePercent>({
      query: body => ({
        url: 'referral-levels/percent',
        method: 'PUT',
        body
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(
            referralsApi.util.updateQueryData('getReferralLevels', undefined, prev => {
              return prev.map(level => {
                if (level.id === args.id) {
                  level.percent = args.percent
                }

                return level
              })
            })
          )
        } catch (error) {
          console.log(`Error on changePercent`, error)
        }
      }
    }),
    changePartnerReferralLvl: builder.mutation<void, { id: string; percent: string; lvl: TReferralLevelName }>({
      query: body => ({
        url: 'referral-levels/change-partner-lvl',
        method: 'POST',
        body
      }),
      invalidatesTags: [Tag.User]
    }),
    changeSubPercent: builder.mutation<void, IReferralLevelChangePercent>({
      query: body => ({
        url: 'referral-levels/sub-percent',
        method: 'PUT',
        body
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(
            referralsApi.util.updateQueryData('getReferralLevels', undefined, prev => {
              return prev.map(level => {
                if (level.id === args.id) {
                  level.parentPercent = args.percent
                }

                return level
              })
            })
          )
        } catch (error) {
          console.log(`Error on changePercent`, error)
        }
      }
    }),
    getReferralLinks: builder.query<any, void>({
      query: (params: any) => ({ url: '/referral-links', params }),
      transformResponse: (response: { data: any }) => response.data,
      providesTags: result =>
        result
          ? [...result.data.map(({ id }: any) => ({ type: Tag.Links, id })), { type: Tag.Links, id: 'LIST' }]
          : [{ type: Tag.Links, id: 'LIST' }]
    }),
    getReferrals: builder.query<any, void>({
      query: (params: any) => ({ url: '/referrals', params }),
      transformResponse: (response: { data: any }) => response.data,
      providesTags: result =>
        result
          ? [...result.data.map(({ id }: any) => ({ type: Tag.Referrals, id })), { type: Tag.Referrals, id: 'LIST' }]
          : [{ type: Tag.Referrals, id: 'REFERRALS_LIST' }]
    }),
    editReferralTariffPercent: builder.mutation<any, { id: string; percent: string }>({
      query: body => ({
        url: '/referrals/update-tariff-percent',
        method: 'PUT',
        body
      }),
      invalidatesTags: [Tag.Referrals]
    }),
    createReferralLink: builder.mutation<any, any>({
      query: body => ({
        url: '/referral-links',
        method: 'POST',
        body
      }),
      invalidatesTags: [Tag.Links]
    }),
    editReferralLink: builder.mutation<any, any>({
      query: body => ({
        url: '/referral-links',
        method: 'PUT',
        body
      }),
      invalidatesTags: [Tag.Links]
    }),
    deleteReferralLink: builder.mutation<any, any>({
      query: body => ({
        url: '/referral-links',
        method: 'DELETE',
        body
      }),
      invalidatesTags: [Tag.Links]
    })
  })
})

export const {
  useGetReferralLevelsQuery,
  useChangePercentMutation,
  useChangePartnerReferralLvlMutation,
  useChangeSubPercentMutation,
  useEditReferralTariffPercentMutation,
  useLazyGetReferralLinksQuery,
  useLazyGetReferralsQuery,
  useCreateReferralLinkMutation,
  useEditReferralLinkMutation,
  useDeleteReferralLinkMutation
} = referralsApi
