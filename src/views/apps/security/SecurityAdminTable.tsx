'use client'

import { useCallback } from 'react'

import { useLazyGetAllAdminsQuery } from '@/api/endpoints/admins/admins'
import { SORT_DIRECTION } from '@/api/types'

import AdminItem from './Admins/AdminItem'
import { adminsSortTitles } from './Admins/adminsSortTitles'

import CustomTable from '@/views/table/CustomTable'
import { useSecurityContext } from './Admins/security-provider'

function SecurityAdminTable() {
  const { selectedAdmins, setSelectedAdmins } = useSecurityContext()

  const handleSelect = useCallback(
    (id: string, login: string, level: string) => {
      if (selectedAdmins.some(admin => admin.id === id)) {
        setSelectedAdmins(selectedAdmins.filter(item => item.id !== id))
      } else {
        setSelectedAdmins(prev => [...prev, { id, login, level }])
      }
    },
    [selectedAdmins, setSelectedAdmins]
  )

  return (
    <CustomTable
      query={useLazyGetAllAdminsQuery}
      isDate
      isSearch
      DataItem={AdminItem}
      dataItemsProps={{ handleSelect, selectedAdmins }}
      queryProps='permissions'
      sortTitles={adminsSortTitles}
      order={{ field: 'tgId', direction: SORT_DIRECTION.DESC }}
      fetchParams={{ take: '20' }}
    />
  )
}

export default SecurityAdminTable
