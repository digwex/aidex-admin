import { API, Tag } from '../..'
import type { IReferralLevel, IReferralLevelChangePercent } from './referrals-types'

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
      query: () => '/referral-links',
      transformResponse: (response: { data: any }) => response.data,
      providesTags: result =>
        result
          ? [...result.data.map(({ id }: any) => ({ type: Tag.Links, id })), { type: Tag.Links, id: 'LIST' }]
          : [{ type: Tag.Links, id: 'LIST' }]
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
  useChangeSubPercentMutation,
  useLazyGetReferralLinksQuery,
  useCreateReferralLinkMutation,
  useEditReferralLinkMutation,
  useDeleteReferralLinkMutation
} = referralsApi
