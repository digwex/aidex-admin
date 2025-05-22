import { API } from '../..'
import type { IReferralLevel, IReferralLevelChangePercent } from './referral-levels-types'

export const referralLevelsApi = API.injectEndpoints({
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
            referralLevelsApi.util.updateQueryData('getReferralLevels', undefined, prev => {
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
            referralLevelsApi.util.updateQueryData('getReferralLevels', undefined, prev => {
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
    })
  })
})

export const { useGetReferralLevelsQuery, useChangePercentMutation, useChangeSubPercentMutation } = referralLevelsApi
