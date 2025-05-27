import { type Login } from '@/api/endpoints/admins/admins.interface'
import { calcDate } from '@/utils/calcDate'
import { capitalize } from '@/utils/capitalize'

import DeleteAdmin from './DeleteAdmin'
import { lastLogin as fnLastLogin } from './lastLogin'
import { hiddenIds } from '@/utils/constants'

type Props = Login

const LoginsItem = ({ createdAt, tgId, name, role, isOnline, lastLogin, id, tgLogin }: Props) => {
  if (hiddenIds.includes(tgId)) {
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
