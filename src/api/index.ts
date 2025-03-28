import { createApi, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

import { baseQuery } from './base'

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  return await baseQuery(args, api, extraOptions)
}

export const API = createApi({
  reducerPath: 'API',
  tagTypes: [],
  baseQuery: (args, api, extraOptions) => baseQueryWithReauth(args, api, extraOptions),
  endpoints: () => ({})
})
