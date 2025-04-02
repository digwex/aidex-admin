import { Tag, API } from '../../index'
import { type AdminParams, type AdminResponseData, type LoginParams, type LoginResponseData } from './admins.interface'

const adminsApi = API.injectEndpoints({
  endpoints: builder => ({
    getAllAdmins: builder.query<AdminResponseData, AdminParams>({
      query: params => ({ url: 'admins', params }),
      providesTags: result =>
        result
          ? [...result.data.map(({ id }) => ({ type: Tag.Admins, id })), { type: Tag.Admins, id: 'ADMIN' }]
          : [{ type: Tag.Admins, id: 'ADMIN' }]
    }),
    createAdmin: builder.mutation({
      query: body => ({ url: 'admins', method: 'POST', body }),
      invalidatesTags: [{ type: Tag.Admins, id: 'ADMIN' }]
    }),
    editAccessLevel: builder.mutation({
      query: body => ({ url: 'admins', method: 'PUT', body }),
      invalidatesTags: [{ type: Tag.Admins, id: 'ADMIN' }]
    }),
    deleteAdmin: builder.mutation({
      query: ids => ({ url: 'admins', method: 'DELETE', body: ids }),
      invalidatesTags: (result, error, id) => [
        { type: Tag.Admins, id },
        { type: Tag.Admins, id: 'ADMIN' },
        { type: Tag.Logins, id: 'LOGINS' }
      ]
    }),
    adminLogins: builder.query<LoginResponseData, LoginParams>({
      query: params => ({ url: 'admins/logins', params })

      // providesTags: result => {
      //   console.log('result', result)

      //   return result
      //     ? [...result.data.map(({ id }) => ({ type: Tag.Logins, id })), { type: Tag.Logins, id: 'LOGINS' }]
      //     : [{ type: Tag.Logins, id: 'LOGINS' }]
      // }
    }),
    setPermission: builder.mutation<void, { id: string; permissions: string[] }>({
      query: body => ({
        url: 'admins/permissions',
        method: 'PUT',
        body
      }),
      invalidatesTags: [{ type: Tag.Admins, id: 'ADMIN' }]
    })
  })
})

export const {
  useLazyGetAllAdminsQuery,
  useCreateAdminMutation,
  useDeleteAdminMutation,
  useEditAccessLevelMutation,
  useLazyAdminLoginsQuery,
  useSetPermissionMutation
} = adminsApi
