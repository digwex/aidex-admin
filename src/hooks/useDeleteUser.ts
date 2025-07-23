import { toast } from 'react-toastify'

import { useDeleteUserMutation } from '@/api/endpoints/user/user-api'
import { handleRTKError } from '@/utils/handleRTKError'

export const useDeleteUser = () => {
  const [deleteUser] = useDeleteUserMutation()

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Deletes a user account
   *
   * @param {string} uid user id
   *
   * @throws {Error} if error occurs during deletion
   */
  /*******  52e0bde4-6008-44b3-9082-a95f42868dc3  *******/ const handleDeleteUser = async (uid: string) => {
    try {
      void toast.promise(
        deleteUser({
          uid
        }).unwrap(),
        {
          pending: 'Удаление...',
          success: 'Аккаунт успешно удален',
          error: {
            render({ data }) {
              return `Ошибка при удалении аккаунта: ${handleRTKError(data)}`
            }
          }
        }
      )
    } catch (error) {
      console.error(error)
    }
  }

  return { handleDeleteUser }
}
