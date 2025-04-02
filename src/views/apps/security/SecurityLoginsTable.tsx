'use client'

import { useLazyAdminLoginsQuery } from '@/api/endpoints/admins/admins'
import { SORT_DIRECTION } from '@/api/types'
import CustomTable from '@/views/table/CustomTable'
import LoginsItem from './Logins/LoginsItem'
import { loginsSortTitles } from './Logins/loginsSortTitles'

const SecurityLoginsTable = () => {
  return (
    <CustomTable
      isSearch
      isDate
      query={useLazyAdminLoginsQuery}
      DataItem={LoginsItem}
      sortTitles={loginsSortTitles}
      order={{ field: 'createdAt', direction: SORT_DIRECTION.DESC }}
      fetchParams={{ take: '20' }}
    />
  )
}

export default SecurityLoginsTable
