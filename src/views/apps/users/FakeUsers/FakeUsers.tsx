'use client'

import { useLazyGetAdvertisingUsersQuery } from '@/api/endpoints/users/users-api'
import { SORT_DIRECTION } from '@/api/types'

import CustomTable from '@/views/table/CustomTable'
import { userSortTitles } from '../UsersTable/userSortTitles'
import { UserRow } from '../UsersTable/UserRow'

const FakeUsers = () => {
  return (
    <CustomTable
      isSearchBar
      isDate
      query={useLazyGetAdvertisingUsersQuery}
      DataItem={UserRow}
      sortTitles={userSortTitles}
      order={{ field: 'balance', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default FakeUsers
