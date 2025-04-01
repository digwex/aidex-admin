import Link from 'next/link'

// import { toast } from 'react-toastify'

// import { useDeleteUserMutation, useUserToBanMutation } from '../../../../api/endpoints/user/user-api'
// import { useUserToUnbanMutation } from '../../../../api/endpoints/users/users-api'
import { type KYCLevel, type User } from '../../../../api/endpoints/users/users-types'

import { ACTION_ACCESS } from '@/utils/accessActions'
import { kycLevels } from '@/utils/helpers'
import { HandledFlag } from '@/utils/HandledFlag'
import { determineBalance } from '@/utils/determineBalance'
import { shortUserEmail } from '@/utils/shortUserEmail'
import { capitalize } from '@/utils/capitalize'
import { useCheckAccess } from '@/hooks/useCheckAccess'

// import { HandledFlag } from '../../../utils/HandledFlag'
// import { ACTION_ACCESS } from '../../../utils/accessActions'
// import { capitalize } from '../../../utils/capitalize'
// import { determineBalance } from '../../../utils/determineBalance'
// import { kycLevels } from '../../../utils/helpers'
// import { shortUserEmail } from '../../../utils/shortUserEmail'

type Props = User & { updateTable: () => void }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserRow = ({ updateTable, ...user }: Props) => {
  // const [userToBan] = useUserToBanMutation()
  // const [deleteUser] = useDeleteUserMutation()
  // const [unbanUser] = useUserToUnbanMutation()

  const { checkAction } = useCheckAccess()

  const isShowPassword = checkAction(ACTION_ACCESS.VIEW_PASSWORD_USER)
  const accessAnyAction = checkAction(ACTION_ACCESS.ANY_ACTION_USER)

  const handleBanUser = async () => {
    // void toast.promise(
    //   userToBan({
    //     uId: user.id
    //   }).unwrap(),
    //   {
    //     loading: 'Блокировка...',
    //     success: () => {
    //       return 'Аккаунт успешно заблокирован'
    //     },
    //     error: error => {
    //       if (typeof error?.data?.message === 'string') {
    //         return error.data.message
    //       }

    //       return 'Ошибка при блокировке аккаунта'
    //     }
    //   }
    // )
  }

  const handleDeleteUser = async () => {
    // void toast.promise(
    //   deleteUser({
    //     uid: user.id
    //   }).unwrap(),
    //   {
    //     loading: 'Удаление...',
    //     success: () => {
    //       return 'Аккаунт успешно удален'
    //     },
    //     error: error => {
    //       if (typeof error?.data?.message === 'string') {
    //         return error.data.message
    //       }

    //       return 'Ошибка при удалении аккаунта'
    //     }
    //   }
    // )
  }

  const handleUserToUnban = async () => {
    // void toast.promise(
    //   unbanUser({
    //     uId: user.id,
    //     nId: user.nId
    //   }).unwrap(),
    //   {
    //     loading: 'Разблокировка...',
    //     success: () => {
    //       return 'Пользователь успешно разблокирован'
    //     },
    //     error: error => {
    //       if (typeof error?.data?.message === 'string') {
    //         return error.data.message
    //       }

    //       return 'Ошибка при разблокировке пользователя'
    //     }
    //   }
    // )
  }

  const userKycLevel: KYCLevel = user.KYCLevel
  const kycLevelNumber: number = kycLevels[userKycLevel]

  const documents =
    user.needDocuments?.length > 0
      ? user.needDocuments.map(document => capitalize(document.replace('_', ' '))).join(', ')
      : '-'

  return (
    <>
      <tr>
        <td>
          <Link href={`/admin/user/${user.nId}`} className='td_row'>
            <HandledFlag className='w20' flag={user.CountryCode} />
            <span className='color_green td_active'>{user.nId}</span>
          </Link>
        </td>
        <td>{determineBalance(user.balance)}</td>
        <td>{shortUserEmail(user.email)}</td>
        <td>{isShowPassword ? user.UserPlainPassword : '*******'}</td>
        <td>{user.fullname}</td>
        <td>
          {user.isActive ? (
            <img className='w18' src='/img/success.svg' alt='' />
          ) : (
            <img className='w18' src='/img/no.svg' alt='' />
          )}
        </td>
        <td>
          {kycLevelNumber >= 1 ? (
            <img src={'/img/success.svg'} alt='Success' />
          ) : (
            <img src={'/img/warning.svg'} alt='No success' />
          )}
        </td>
        <td>{documents}</td>
        <td>
          <img className='w18' src={user.isTwoFactorEnabled ? '/img/success.svg' : '/img/no.svg'} alt='' />
        </td>
        <td>{user.registrationIp ?? '-'}</td>
        <td>
          {accessAnyAction ? (
            <div className='td_btns'>
              {user.isBlockedForever ? (
                <div className='td_btn td_btn3' onClick={handleUserToUnban}>
                  <span>Восстановить</span>
                </div>
              ) : (
                <>
                  <div className='td_btn td_btn_cancel' onClick={handleBanUser}>
                    <span>Заблокировать</span>
                  </div>
                  <div className='td_btn td_btn_cancel' onClick={handleDeleteUser}>
                    <span>Удалить</span>
                  </div>
                </>
              )}
            </div>
          ) : (
            '-'
          )}
        </td>
      </tr>
    </>
  )
}
