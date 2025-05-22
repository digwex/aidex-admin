import { toast } from 'react-toastify'

import { useDeleteUserMutation } from '@/api/endpoints/user/user-api'

export const useDeleteUser = () => {
  const [deleteUser] = useDeleteUserMutation()

  const handleDeleteUser = async (uid: string) => {
    try {
      void toast.promise(
        deleteUser({
          uid
        }).unwrap(),
        {
          pending: 'Удаление...',
          success: 'Аккаунт успешно удален',
          error: 'Ошибка при удалении аккаунта'
        }
      )
    } catch (error) {
      console.error(error)
    }
  }

  return { handleDeleteUser }
}
