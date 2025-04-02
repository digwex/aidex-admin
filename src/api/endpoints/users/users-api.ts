import { API, Tag } from '../..'
import { type ApiResponse, type IQuery, type IUserToBanBody } from '../../types'
import { type ApiResponseTrades, type IUserOrdersParams, type User } from './users-types'

const usersApi = API.injectEndpoints({
  endpoints: builder => ({
    getAllUsers: builder.query<ApiResponse<User[]>, IQuery>({
      query: params => ({ url: 'users', params })

      // providesTags: result =>
      //   result
      //     ? [
      //         ...result.result.map(({ nId }) => ({ type: Tag.User, id: nId })),
      //         { type: Tag.Users, id: 'USERS' },
      //         { type: Tag.User, id: 'USER' }
      //       ]
      //     : [
      //         { type: Tag.Users, id: 'USERS' },
      //         { type: Tag.User, id: 'USER' }
      //       ]
    }),
    getAdvertisingUsers: builder.query({
      query: (params: IQuery) => ({ url: 'users/advertising', params })
    }),
    getDeletedUsers: builder.query({
      query: (params: IQuery) => ({ url: 'users/deleted', params })
    }),
    userToBan: builder.mutation({
      query: (body: IUserToBanBody) => ({
        url: 'users/ban',
        method: 'POST',
        body
      }),
      invalidatesTags: (result, error, body) => [
        { type: Tag.User, id: body.nId },
        { type: Tag.Users, id: body.nId }
      ]
    }),
    userToUnban: builder.mutation({
      query: (body: IUserToBanBody) => ({
        url: 'users/unban',
        method: 'POST',
        body
      }),
      invalidatesTags: [Tag.Users, Tag.User, Tag.Withdrawals, Tag.Partners]
    }),
    getAllUserTrades: builder.query({
      query: (params: IUserOrdersParams) => ({
        url: 'users/trades',
        params
      }),
      transformResponse: (response: ApiResponseTrades) => response.data,
      providesTags: [Tag.Users, Tag.User, Tag.Orders]
    }),
    deleteTrade: builder.mutation({
      query: (body: { id: string }) => ({
        url: 'users/trades',
        method: 'DELETE',
        body
      }),
      invalidatesTags: [Tag.Users, Tag.User, Tag.Orders]
    }),
    updateTrade: builder.mutation({
      query: (body: any) => ({
        url: 'users/trades',
        method: 'PUT',
        body
      }),
      transformResponse: (response: unknown) => response,
      invalidatesTags: [Tag.Users, Tag.User, Tag.User]
    }),
    getConvertedNIdToUId: builder.query({
      query: (params: { nid: string }) => ({
        url: 'users/uid',
        params
      })
    })
  })
})

export const {
  useLazyGetAllUsersQuery,
  useGetAllUsersQuery,
  useLazyGetAdvertisingUsersQuery,
  useUserToBanMutation,
  useLazyGetDeletedUsersQuery,
  useUserToUnbanMutation,
  useGetAllUserTradesQuery,
  useLazyGetAllUserTradesQuery,
  useDeleteTradeMutation,
  useUpdateTradeMutation,
  useGetConvertedNIdToUIdQuery
} = usersApi
