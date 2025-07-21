'use client'

import CustomTable from '@/views/table/CustomTable'
import { useLazyGetAllUsersQuery } from '../../../../api/endpoints/users/users-api'
import { SORT_DIRECTION } from '../../../../api/types'

import { UserRow } from '@/views/apps/users/UsersTable/UserRow'
import { userSortTitles } from './userSortTitles'

function UsersCustomTable() {
  return (
    <div className='space-y-6'>
      <CustomTable
        isSearchBar
        isDate
        query={useLazyGetAllUsersQuery}
        DataItem={UserRow}
        sortTitles={userSortTitles}
        fetchParams={{ isBlocked: false }}
        order={{ field: 'balance', direction: SORT_DIRECTION.DESC }}
      />
    </div>
  )
}

export default UsersCustomTable
