import { API, Tag } from '../..'
import {
  type WithdrawalCancelBody,
  type WithdrawalChangeAddressBody,
  type WithdrawalCompleteBody,
  type WithdrawalParams,
  type WithdrawalResponse,
  type WithdrawalResponseData
} from './withdrawals.interface'

const withdrawalsApi = API.injectEndpoints({
  endpoints: builder => ({
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
  useLazyGetWithdrawalsQuery,
  useWithdrawalsCompleteMutation,
  useWithdrawalsCancelMutation,
  useWithdrawalsChangeMutation
} = withdrawalsApi
