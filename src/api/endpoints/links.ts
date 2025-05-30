import { API, Tag } from '..'

export interface Response<T> {
  data: T
  status: number
  message: string
}

export interface ILink {
  id: string
  name: string
  spending: number
  createdAt: string
  earned: number
  refCode: string
  pressStartCount: number
  subscribed: number
  unsubscribed: number
  maxActiveUsers: number
  botBlocked: number
  invitedFriends: number
}

export const linksApi = API.injectEndpoints({
  endpoints: builder => ({
    getLinks: builder.query<Response<ILink[]>, void>({
      query: () => '/admins/links',
      providesTags: result =>
        result
          ? [...result.data.map(({ id }) => ({ type: Tag.Links, id })), { type: Tag.Links, id: 'LIST' }]
          : [{ type: Tag.Links, id: 'LIST' }]
    }),
    addLink: builder.mutation<void, { name: string }>({
      query: body => ({
        url: '/admins/links',
        method: 'POST',
        body
      }),
      invalidatesTags: [Tag.Links]
    }),
    editSpending: builder.mutation<void, { id: string; spending: number }>({
      query: body => ({
        url: '/admins/links/spending',
        method: 'PUT',
        body
      }),
      invalidatesTags: [Tag.Links]
    })
  })
})

export const { useLazyGetLinksQuery, useAddLinkMutation, useEditSpendingMutation } = linksApi
