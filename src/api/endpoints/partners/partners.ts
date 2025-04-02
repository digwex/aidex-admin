import { Tag, API } from '../..'
import {
  type PartnerResponse,
  type PartnerResponseData,
  type PartnersParams,
  type PartnersResponse,
  type PartnersResponseData,
  type PaymentsPartnerParams
} from './partners.interface'

const partnersApi = API.injectEndpoints({
  endpoints: builder => ({
    // partners
    getAllPartners: builder.query<PartnersResponseData, PartnersParams>({
      query: params => ({ url: 'partners', params }),
      transformResponse: (response: PartnersResponse) => response.data,
      providesTags: result =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: Tag.AdminPartners, id })),
              { type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }
            ]
          : [{ type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }]
    }),
    banAdminPartner: builder.mutation({
      query: ({ id }: { id: number }) => ({
        url: 'partners',
        method: 'DELETE',
        body: { id }
      }),
      invalidatesTags: [
        { type: Tag.Partners, id: 'PARTNERS' },
        { type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }
      ]
    }),
    activateAdminPartner: builder.mutation({
      query: ({ id, partnerPlan }: { id: number; partnerPlan: string }) => ({
        url: 'partners',
        method: 'PUT',
        body: { id, partnerPlan }
      }),
      invalidatesTags: [
        { type: Tag.Partners, id: 'PARTNERS' },
        { type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }
      ]
    }),
    activePartners: builder.query<PartnersResponseData, PartnersParams>({
      query: params => ({ url: 'partners/active', params }),
      transformResponse: (response: PartnersResponse) => response.data,
      providesTags: result =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: Tag.AdminPartners, id })),
              { type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }
            ]
          : [{ type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }]
    }),

    // payments partners
    getPartners: builder.query<PartnerResponseData, PaymentsPartnerParams>({
      query: params => ({
        url: 'payments/partners/withdrawals',
        params
      }),
      transformResponse: (response: PartnerResponse) => response.data,
      providesTags: result =>
        result
          ? [...result.data.map(({ id }) => ({ type: Tag.Partners, id })), { type: Tag.Partners, id: 'PARTNERS' }]
          : [{ type: Tag.Partners, id: 'PARTNERS' }]
    }),
    completePartner: builder.mutation({
      query: body => ({
        url: 'payments/partner/complete',
        method: 'POST',
        body
      }),
      invalidatesTags: [
        { type: Tag.Partners, id: 'PARTNERS' },
        { type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }
      ]
    }),
    cancelPartner: builder.mutation({
      query: body => ({
        url: 'payments/partner/cancel',
        method: 'POST',
        body
      }),
      invalidatesTags: [
        { type: Tag.Partners, id: 'PARTNERS' },
        { type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }
      ]
    }),
    changePartner: builder.mutation({
      query: body => ({
        url: 'payments/partner/address',
        method: 'POST',
        body
      }),
      invalidatesTags: [
        { type: Tag.Partners, id: 'PARTNERS' },
        { type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }
      ]
    }),
    banPartner: builder.mutation({
      query: body => ({ url: 'partners/ban', method: 'POST', body }),
      invalidatesTags: [
        { type: Tag.Partners, id: 'PARTNERS' },
        { type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }
      ]
    }),
    unBanPartner: builder.mutation({
      query: ({ id }: { id: number }) => ({
        url: 'partners/unban',
        method: 'POST',
        body: { id }
      }),
      invalidatesTags: [
        { type: Tag.Partners, id: 'PARTNERS' },
        { type: Tag.AdminPartners, id: 'ADMIN-PARTNERS' }
      ]
    })
  })
})

export const {
  useLazyGetAllPartnersQuery,
  useBanAdminPartnerMutation,
  useLazyActivePartnersQuery,
  useActivateAdminPartnerMutation,
  useGetAllPartnersQuery,
  useLazyGetPartnersQuery,
  useCompletePartnerMutation,
  useCancelPartnerMutation,
  useChangePartnerMutation,
  useBanPartnerMutation,
  useUnBanPartnerMutation
} = partnersApi
