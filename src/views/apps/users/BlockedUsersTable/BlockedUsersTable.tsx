'use client'

import CustomTable from '@/views/table/CustomTable'
import { useLazyGetAllUsersQuery } from '../../../../api/endpoints/users/users-api'
import { SORT_DIRECTION } from '../../../../api/types'

import { BlockedUserRow } from './BlockedUserRow'
import { userSortTitles } from './userSortTitles'

function BlockedUsersTable() {
  return (
    <CustomTable
      isSearchBar
      isDate
      query={useLazyGetAllUsersQuery}
      DataItem={BlockedUserRow}
      sortTitles={userSortTitles}
      fetchParams={{ isBlocked: true }}
      order={{ field: 'balance', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default BlockedUsersTable
