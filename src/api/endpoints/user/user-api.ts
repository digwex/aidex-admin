import { Tag, API } from '../..'
import type {
  ApiResponseTransactions,
  ApiResponseUserDocuments,
  ApiResponseUserPersonalData,
  ApiResponseUserSessions,
  ApiResponseUserStats,
  DeclineRequestBody,
  DepositFakeParams,
  IQueryTransactions,
  InvisibleSessionBody,
  InvisibleSessionResponse,
  UserPersonalDataParams,
  UserSetPersonalDataResponse,
  UserToggleTwoFa,
  UserVerificationParams,
  UserVerificationResponse,
  WithdrawalFakeParams
} from './user-types'

export const userApi = API.injectEndpoints({
  endpoints: builder => ({
    getMainUserStats: builder.query({
      query: (params: { uid: string }) => ({ url: 'user/total', params }),
      transformResponse: (response: ApiResponseUserStats) => response,
      providesTags: [Tag.User, Tag.UserMainStats]
    }),
    getUserSessions: builder.query({
      query: (params: { uid: string }) => ({
        url: 'user/sessions',
        params
      }),
      transformResponse: (response: ApiResponseUserSessions) => response,
      providesTags: [Tag.User]
    }),
    getUserTransactions: builder.query({
      query: (params: IQueryTransactions) => ({
        url: 'users/transactions',
        params
      }),
      transformResponse: (response: ApiResponseTransactions) => response,
      providesTags: [Tag.User]
    }),
    setEmailUser: builder.mutation({
      query: (body: { uid: string; email: string }) => ({
        url: 'users/email',
        method: 'POST',
        body
      }),
      transformResponse: (response: ApiResponseTransactions) => response,
      invalidatesTags: [Tag.User]
    }),
    setUserName: builder.mutation({
      query: (body: { uid: string; username: string }) => ({
        url: 'users/username',
        method: 'POST',
        body
      }),
      transformResponse: (response: ApiResponseTransactions) => response,
      invalidatesTags: [Tag.User]
    }),
    stopUserSession: builder.mutation({
      query: (body: { sessionId: string }) => ({
        url: 'user/sessions',
        method: 'DELETE',
        body
      }),
      transformResponse: (response: ApiResponseTransactions) => response,
      invalidatesTags: [Tag.User]
    }),
    upgradeKYCLevel: builder.mutation({
      query: (body: { uid: string }) => ({
        url: 'users/kyc/upgrade',
        method: 'POST',
        body
      }),
      transformResponse: (response: ApiResponseTransactions) => response,
      invalidatesTags: [Tag.User]
    }),
    downgradeKYCLevel: builder.mutation({
      query: (body: { uid: string }) => ({
        url: 'users/kyc/downgrade',
        method: 'POST',
        body
      }),
      transformResponse: (response: ApiResponseTransactions) => response,
      invalidatesTags: [Tag.User]
    }),
    deleteUser: builder.mutation({
      query: (body: { uid: string }) => ({
        url: 'users/delete',
        method: 'DELETE',
        body
      }),
      transformResponse: (response: unknown) => response,
      invalidatesTags: [Tag.User, Tag.Users]
    }),
    revertDeletingUser: builder.mutation({
      query: (body: { uid: string }) => ({
        url: 'users/revert-deleting',
        method: 'POST',
        body
      }),
      transformResponse: (response: unknown) => response,
      invalidatesTags: [Tag.User, Tag.Users]
    }),
    setPersonalUserData: builder.mutation<UserSetPersonalDataResponse, Partial<UserPersonalDataParams>>({
      query: body => ({
        url: 'users/personalData',
        method: 'POST',
        body
      }),

      async onQueryStarted(willSendData: UserPersonalDataParams, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedData } = await queryFulfilled

          dispatch(
            userApi.util.updateQueryData(
              'getUserPersonalData',
              { uid: willSendData.uid ?? '' },
              (cachePersonalData: ApiResponseUserPersonalData) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { message, code, ...restUpdateData } = updatedData

                cachePersonalData.user = restUpdateData

                return cachePersonalData
              }
            )
          )
          dispatch(
            userApi.util.updateQueryData(
              'getMainUserStats',
              { uid: willSendData.uid ?? '' },
              (cacheMainUserData: ApiResponseUserStats) => {
                const { email, password, partnerId } = willSendData

                if (password) cacheMainUserData.plainPassword = password
                if (email) cacheMainUserData.user.email = email
                if (partnerId) cacheMainUserData.user.partnerId = partnerId?.toString() ?? ''

                return cacheMainUserData
              }
            )
          )
        } catch (error) {
          console.error('setPersonalUserData onQueryStarted error ', error)
        }
      }

      //  invalidatesTags: [Tag.User],
    }),
    getUserPersonalData: builder.query({
      query: (params: { uid: string }) => ({
        url: 'users/personalData',
        params
      }),
      transformResponse: (response: ApiResponseUserPersonalData) => response,
      providesTags: [Tag.User]
    }),
    setUserPassword: builder.mutation({
      query: (body: { uid: string; password: string }) => ({
        url: 'users/password',
        method: 'POST',
        body
      }),
      transformResponse: (response: unknown) => response,
      invalidatesTags: [Tag.User]
    }),
    getUserDocuments: builder.query({
      query: (params: { uid: string }) => ({
        url: 'users/personalData/documents',
        params
      }),
      transformResponse: (response: ApiResponseUserDocuments) => response,
      providesTags: [Tag.UserDocs]
    }),
    setUserDocuments: builder.mutation<void, FormData>({
      query: body => ({
        url: 'users/personalData/documents',
        method: 'POST',
        body
      }),
      invalidatesTags: [Tag.UserDocs, Tag.UserVerification]
    }),
    setDepositFake: builder.mutation({
      query: (body: DepositFakeParams) => ({
        url: 'users/deposit/fake',
        method: 'POST',
        body
      }),
      transformResponse: (response: unknown) => response,
      invalidatesTags: [Tag.User]
    }),
    setWithdrawalFake: builder.mutation({
      query: (body: WithdrawalFakeParams) => ({
        url: 'users/withdrawal/fake',
        method: 'POST',
        body
      }),
      transformResponse: (response: unknown) => response,
      invalidatesTags: [Tag.User]
    }),

    deletePersonalDataDocuments: builder.mutation({
      query: (body: { ids: string[] }) => ({
        url: 'users/personalData/documents',
        method: 'DELETE',
        body
      }),
      transformResponse: (response: unknown) => response,
      invalidatesTags: [Tag.User, Tag.UserDocs]
    }),
    setDeclineRequest: builder.mutation({
      query: (body: DeclineRequestBody) => ({
        url: 'verification/decline',
        method: 'POST',
        body
      }),
      transformResponse: (response: unknown) => response,
      invalidatesTags: [Tag.User]
    }),
    getUserVerifications: builder.query<UserVerificationResponse, UserVerificationParams>({
      query: params => ({
        url: 'users/verifications',
        params
      }),
      providesTags: result =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: Tag.UserVerification,
                id
              })),
              { type: Tag.UserVerification, id: 'USER-VERIFICATIONS' }
            ]
          : [{ type: Tag.UserVerification, id: 'USER-VERIFICATIONS' }]
    }),
    toggleTwoFa: builder.mutation({
      query: (body: UserToggleTwoFa) => ({
        url: 'users/2fa',
        method: 'PUT',
        body
      }),
      invalidatesTags: [Tag.User]
    }),
    unfreeze: builder.mutation({
      query: (body: { uid: string }) => ({
        url: 'users/unfreeze',
        method: 'DELETE',
        body
      }),
      transformResponse: (response: ApiResponseTransactions) => response,
      invalidatesTags: [Tag.User]
    }),
    freeze: builder.mutation({
      query: (body: { uid: string; days: number }) => ({
        url: 'users/freeze',
        method: 'POST',
        body
      }),
      transformResponse: (response: ApiResponseTransactions) => response,
      invalidatesTags: [Tag.User]
    }),
    invisibleSession: builder.query<InvisibleSessionResponse, InvisibleSessionBody>({
      query: params => ({
        url: 'auth/invisible-session',
        params
      })
    }),
    changeAccountType: builder.mutation<void, { uid: string; type: string }>({
      query: body => ({
        url: 'user/account-type',
        method: 'PUT',
        body
      })
    }),
    editBalance: builder.mutation({
      query: (body: { uid: string; newBalance: number; isDemo: boolean }) => ({
        url: 'users/balance',
        method: 'PUT',
        body
      }),
      invalidatesTags: [Tag.User]
    }),
    getUserTransactionsRate: builder.query<
      { deposits: number; withdrawals: number; cancel: number; bonus: number },
      { uid: string }
    >({
      query: params => ({
        url: 'users/transactions-rate',
        params
      }),
      providesTags: [Tag.User]
    })
  })
})

export const {
  useGetMainUserStatsQuery,
  useGetUserSessionsQuery,
  useGetUserTransactionsQuery,
  useLazyGetUserTransactionsQuery,
  useSetEmailUserMutation,
  useSetUserNameMutation,
  useStopUserSessionMutation,
  useDeleteUserMutation,
  useDowngradeKYCLevelMutation,
  useUpgradeKYCLevelMutation,
  useGetUserPersonalDataQuery,
  useSetPersonalUserDataMutation,
  useSetUserPasswordMutation,
  useGetUserDocumentsQuery,
  useLazyGetUserDocumentsQuery,
  useSetUserDocumentsMutation,
  useSetDepositFakeMutation,
  useSetWithdrawalFakeMutation,
  useDeletePersonalDataDocumentsMutation,
  useSetDeclineRequestMutation,
  useLazyGetUserVerificationsQuery,
  useToggleTwoFaMutation,
  useUnfreezeMutation,
  useRevertDeletingUserMutation,
  useFreezeMutation,
  useInvisibleSessionQuery,
  useChangeAccountTypeMutation,
  useEditBalanceMutation,
  useGetUserTransactionsRateQuery
} = userApi
