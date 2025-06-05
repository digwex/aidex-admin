'use client'

import { useParams } from 'next/navigation'

import CustomTable from '@/views/table/CustomTable'
import { Row } from './row'
import { titles } from './titles'

import { useLazyGetUserReferralLinksQuery } from '@/api/endpoints/user/user-api'

export const PartnersLinks = () => {
  const { id } = useParams()

  return (
    <CustomTable
      isSearch
      isDate
      query={useLazyGetUserReferralLinksQuery}
      fetchParams={{ uid: id }}
      sortTitles={titles}
      DataItem={Row}
    />
  )
}
