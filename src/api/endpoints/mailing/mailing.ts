import { API } from '@/api'

const mailingApi = API.injectEndpoints({
  endpoints: build => ({
    getMailings: build.query({
      query: params => ({ url: 'mailing', params })
    })
  })
})

export const { useLazyGetMailingsQuery } = mailingApi
