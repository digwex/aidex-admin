'use client'

import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'

import { useLazyGetTrendingQuery } from '@/api/endpoints/pairs/pairs'
import { EditRow } from './edit-row'
import { editTitles } from './edit-titles'

export const Hot = () => {
  return (
    <CustomTable
      order={{ field: 'priceChange.m5', direction: SORT_DIRECTION.DESC }}
      query={useLazyGetTrendingQuery}
      DataItem={EditRow}
      sortTitles={editTitles}
      fetchParams={{ take: '100', skip: 0, type: 'hot', chain: 'solana' }}
    />
  )
}
