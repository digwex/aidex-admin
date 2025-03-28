import { userActions } from '@/redux-store/slices'
import { API } from '..'
import { getItemFromLocalStorage } from '@/utils/localStorageService'

const authApi = API.injectEndpoints({
  endpoints: builder => ({
    verifySession: builder.query<any, void>({
      query: () => ({ url: 'auth/verify-session' }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(
            userActions.setTokens({
              id: data.id,
              accessLevel: data.accessLevel,
              permissions: data.permissions,
              accessToken: getItemFromLocalStorage('accessToken'),
              refreshTokenId: getItemFromLocalStorage('refreshTokenId')
            })
          )
        } catch (error) {
          console.log(error)
        }
      }
    }),
    getTicket: builder.query<any, void>({
      query: () => ({ url: 'auth/ticket' })
    })
  })
})

export const { useLazyVerifySessionQuery, useLazyGetTicketQuery } = authApi
