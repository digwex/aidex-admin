import { memo } from 'react'

import { useToggle } from 'usehooks-ts'

import { Button, Checkbox } from '@mui/material'

import { type Admin } from '@/api/endpoints/admins/admins.interface'

import { capitalize } from '@/utils/capitalize'
import { AdminsPermissions } from './AdminsPermissions'

interface SelectAdmin {
  id: string
  tgLogin: string
  accessLevel: string
}

type Props = Admin & {
  handleSelect: (id: string, tgLogin: string, accessLevel: string) => void
  selectedAdmins: SelectAdmin[]
  queryProps: string[]
}

const reformatLevel = (level: string) => {
  return level.split('_')[1]
}

const AdminItem = ({
  id,
  tgId,
  tgLogin,
  role,
  name,
  accessLevel,
  selectedAdmins,
  handleSelect,
  permissions,
  queryProps = []
}: Props) => {
  const [isOpen, toggle] = useToggle()
  const isActive = selectedAdmins.some(admin => admin.id === id)

  const hiddenIds = ['@Ostapchela', '@selivestru']

  if (hiddenIds.includes(tgLogin)) {
    return null
  }

  return (
    <>
      <tr>
        <td className='w50'>
          <Checkbox value={isActive} onClick={() => handleSelect(id, tgLogin, accessLevel)} />
        </td>
        <td>{tgId}</td>
        <td>{tgLogin}</td>
        <td>{capitalize(role)}</td>
        <td>{name}</td>
        <td>{reformatLevel(accessLevel)} уровень</td>
        <td>
          <Button variant='contained' color='success' onClick={toggle} disabled={queryProps.length === 0}>
            Открыть
          </Button>
        </td>
      </tr>
      {isOpen && queryProps.length > 0 && (
        <AdminsPermissions id={id} allPermissions={queryProps} permissions={permissions} />
      )}
    </>
  )
}

export default memo(AdminItem)
