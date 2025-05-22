import { API } from '@/api'
import type { IDashboardGraph, IDashboardOverall } from './dashboard-types'

const dashboardApi = API.injectEndpoints({
  endpoints: build => ({
    dashboardOverall: build.query<IDashboardOverall, void>({
      query: () => ({ url: '/dashboard/overall' }),
      transformResponse: (response: { data: IDashboardOverall }) => response.data
    }),
    dashboardGraph: build.query<IDashboardGraph[], { from: string; to: string }>({
      query: ({ from, to }) => ({ url: `/dashboard/graph?from=${from}&to=${to}` }),
      transformResponse: (response: { data: IDashboardGraph[] }) => response.data
    })
  })
})

export const { useDashboardOverallQuery, useDashboardGraphQuery } = dashboardApi
