import { API, Tag } from '../..'
import { type ApiResponse, type IQuery, type IUserToBanBody } from '../../types'
import { type ApiResponseTrades, type IUserOrdersParams, type User } from './users-types'

export const usersApi = API.injectEndpoints({
  endpoints: builder => ({
    getAllUsers: builder.query<ApiResponse<User[]>, IQuery>({
      query: params => ({ url: 'users', params }),

      providesTags: result => {
        console.log('result', result)

        return result
          ? [
              // @ts-expect-error type
              ...result.data.data.map(({ nId }) => ({ type: Tag.User, id: nId })),
              { type: Tag.Users, id: 'USERS' },
              { type: Tag.User, id: 'USER' }
            ]
          : [
              { type: Tag.Users, id: 'USERS' },
              { type: Tag.User, id: 'USER' }
            ]
      }
    }),
    getAdvertisingUsers: builder.query<ApiResponse<User[]>, IQuery>({
      query: (params: IQuery) => ({ url: 'users/advertising', params }),
      providesTags: result =>
        result
          ? [
              // @ts-expect-error type
              ...result.data.data.map(({ nId }) => ({ type: Tag.User, id: nId })),
              { type: Tag.UsersAdvertisements, id: 'USERS-ADVERTISEMENT' },
              { type: Tag.UsersAdvertisements, id: 'USERS-ADVERTISEMENT' }
            ]
          : [
              { type: Tag.UsersAdvertisements, id: 'USERS-ADVERTISEMENT' },
              { type: Tag.UsersAdvertisements, id: 'USERS-ADVERTISEMENT' }
            ]
    }),

    getDeletedUsers: builder.query({
      query: (params: IQuery) => ({ url: 'users/deleted', params }),
      providesTags: result =>
        result
          ? [
              // @ts-expect-error type
              ...result.data.data.map(({ nId }) => ({ type: Tag.User, id: nId })),
              { type: Tag.UsersDeleted, id: 'USERS-DELETED' },
              { type: Tag.UsersDeleted, id: 'USERS-DELETED' }
            ]
          : [
              { type: Tag.UsersDeleted, id: 'USERS-DELETED' },
              { type: Tag.UsersDeleted, id: 'USERS-DELETED' }
            ]
    }),
    userToBan: builder.mutation({
      query: (body: IUserToBanBody) => ({
        url: 'users/ban',
        method: 'POST',
        body
      }),
      invalidatesTags: [Tag.User, Tag.Users, Tag.UsersAdvertisements, Tag.UsersDeleted]
    }),
    userToUnban: builder.mutation({
      query: (body: IUserToBanBody) => ({
        url: 'users/unban',
        method: 'POST',
        body
      }),
      invalidatesTags: [Tag.User, Tag.Users, Tag.UsersAdvertisements, Tag.UsersDeleted]
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
    getUserById: builder.query({
      query: (id: string) => ({
        url: `users/${id}`
      }),
      transformResponse: (response: ApiResponse<User>) => response.data,
      providesTags: [Tag.User]
    }),
    updateTrade: builder.mutation({
      query: (body: any) => ({
        url: 'users/trades',
        method: 'PUT',
        body
      }),
      transformResponse: (response: unknown) => response,
      invalidatesTags: [Tag.Users, Tag.User, Tag.User]
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
  useGetUserByIdQuery
} = usersApi
