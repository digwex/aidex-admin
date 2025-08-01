'use client'

import { useLazyGetTrendingQuery } from '@/api/endpoints/pairs/pairs'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'

import { EditRow } from './edit-row'
import { editTitles } from './edit-titles'

export const Trends = () => {
  return (
    <CustomTable
      order={{ field: 'priceChange.m5', direction: SORT_DIRECTION.DESC }}
      query={useLazyGetTrendingQuery}
      DataItem={EditRow}
      sortTitles={editTitles}
      fetchParams={{ take: '100', skip: 0, type: 'trends', chain: 'solana' }}
    />
  )
}
