import { Button, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import ModalButton from '@/components/ModalButton'
import { useDeleteUserMutation } from '@/api/endpoints/user/user-api'

interface Props {
  uid: string
}

export const DeleteModal = ({ uid }: Props) => {
  const [deleteUser] = useDeleteUserMutation()

  const handleDeleteUser = async (close: () => void) => {
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
      close()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ModalButton
      maxWidth='xs'
      fullWidth
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='contained' color='error'>
          Удалить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <div className='flex justify-center flex-col items-center gap-6'>
          <img src='/images/icons/reject.svg' alt='close' className='w-16 h-16' />

          <Typography className='text-center' variant='h4'>
            Вы уверены что хотите <br /> заблокировать трейдера?
          </Typography>

          <div className='w-full flex items-center gap-3 max600:flex-col'>
            <Button variant='outlined' color='secondary' className='w-full' onClick={closeModal}>
              Нет
            </Button>
            <Button variant='contained' color='error' className='w-full' onClick={() => handleDeleteUser(closeModal)}>
              Заблокировать
            </Button>
          </div>
        </div>
      )}
    />
  )
}
