import { API } from '@/api'

const statisticsApi = API.injectEndpoints({
  endpoints: build => ({
    byDays: build.query({
      query: params => ({ url: 'statistics/by-days', params })
    }),
    byMonths: build.query({
      query: params => ({ url: 'statistics/by-months', params })
    }),
    byTrader: build.query({
      query: params => ({ url: 'statistics/by-trader', params })
    }),
    byPartner: build.query({
      query: params => ({ url: 'statistics/by-partner', params })
    })
  })
})

export const { useLazyByDaysQuery, useLazyByMonthsQuery, useLazyByPartnerQuery, useLazyByTraderQuery } = statisticsApi
