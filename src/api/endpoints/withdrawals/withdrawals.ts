import { API, Tag } from '../..'
import {
  type WithdrawalCancelBody,
  type WithdrawalChangeAddressBody,
  type WithdrawalCompleteBody,
  type WithdrawalParams,
  type WithdrawalResponse,
  type WithdrawalResponseData
} from './withdrawals.interface'

const argsToString = (args: { [key: string]: string }) =>
  Object.entries(args)
    .filter(([, value]) => typeof value !== 'undefined')
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

const withdrawalsApi = API.injectEndpoints({
  endpoints: builder => ({
    getPendingWithdrawals: builder.query<any, any>({
      query: args => `/withdrawals/pending?${argsToString(args)}`
    }),
    getHistoryWithdrawals: builder.query<any, any>({
      query: args => `/withdrawals/history?${argsToString(args)}`
    }),
    getFakeWithdrawals: builder.query<any, any>({
      query: args => `/withdrawals/fake?${argsToString(args)}`
    }),
    getWithdrawals: builder.query<WithdrawalResponseData, WithdrawalParams>({
      query: params => ({ url: 'payments/withdrawals', params }),
      transformResponse: (response: WithdrawalResponse) => response.data,
      providesTags: result =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: Tag.Withdrawals, id })),
              { type: Tag.Withdrawals, id: 'WITHDRAWALS' }
            ]
          : [{ type: Tag.Withdrawals, id: 'WITHDRAWALS' }]
    }),
    withdrawalsComplete: builder.mutation({
      query: (body: WithdrawalCompleteBody) => ({
        url: 'payments/complete',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: Tag.Withdrawals, id: 'WITHDRAWALS' }]
    }),
    withdrawalsCancel: builder.mutation({
      query: (body: WithdrawalCancelBody) => ({
        url: 'payments/cancel',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: Tag.Withdrawals, id: 'WITHDRAWALS' }]
    }),
    withdrawalsChange: builder.mutation({
      query: (body: WithdrawalChangeAddressBody) => ({
        url: 'payments/address',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: Tag.Withdrawals, id: 'WITHDRAWALS' }]
    })
  })
})

export const {
  useLazyGetPendingWithdrawalsQuery,
  useLazyGetHistoryWithdrawalsQuery,
  useLazyGetFakeWithdrawalsQuery,
  useLazyGetWithdrawalsQuery,
  useWithdrawalsCompleteMutation,
  useWithdrawalsCancelMutation,
  useWithdrawalsChangeMutation
} = withdrawalsApi
