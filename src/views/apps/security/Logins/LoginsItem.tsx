import { type Login } from '@/api/endpoints/admins/admins.interface'
import { calcDate } from '@/utils/calcDate'
import { capitalize } from '@/utils/capitalize'

import DeleteAdmin from './DeleteAdmin'
import { lastLogin as fnLastLogin } from './lastLogin'

type Props = Login

const LoginsItem = ({ createdAt, name, role, isOnline, lastLogin, id, tgLogin }: Props) => {
  const hiddenIds = ['@Ostapchela', '@selivestru']

  if (hiddenIds.includes(tgLogin)) {
    return null
  }

  return (
    <tr>
      <td>{calcDate(createdAt)}</td>
      <td>{tgLogin}</td>
      <td>{name}</td>
      <td>{capitalize(role)}</td>
      <td>{isOnline ? <span className='color_green'>Онлайн</span> : calcDate(lastLogin)}</td>
      <td>{fnLastLogin(createdAt)}</td>
      <td>
        <DeleteAdmin id={id} login={tgLogin} />
      </td>
    </tr>
  )
}

export default LoginsItem
