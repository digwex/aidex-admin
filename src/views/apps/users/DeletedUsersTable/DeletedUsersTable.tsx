'use client'

import { useLazyGetDeletedUsersQuery } from '@/api/endpoints/users/users-api'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import { userSortTitles } from '../UsersTable/userSortTitles'
import { UserDeletedRow } from './UserDeletedRow'

const DeletedUsers = () => {
  return (
    <CustomTable
      isSearchBar
      isDate
      query={useLazyGetDeletedUsersQuery}
      DataItem={UserDeletedRow}
      sortTitles={userSortTitles}
      order={{ field: 'balance', direction: SORT_DIRECTION.DESC }}
    />
  )
}

export default DeletedUsers
