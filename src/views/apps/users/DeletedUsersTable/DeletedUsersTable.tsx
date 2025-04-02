'use client'

import { useLazyGetDeletedUsersQuery } from '@/api/endpoints/users/users-api'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import { UserRow } from '../UsersTable/UserRow'
import { userSortTitles } from '../UsersTable/userSortTitles'

const DeletedUsers = () => {
  return (
    <CustomTable
      isSearchBar
      isDate
      query={useLazyGetDeletedUsersQuery}
      DataItem={UserRow}
      sortTitles={userSortTitles}
      order={{ field: 'balance', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default DeletedUsers
