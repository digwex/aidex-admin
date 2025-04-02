import { Button, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import ModalButton from '@/components/ModalButton'
import { useUserToUnbanMutation } from '@/api/endpoints/users/users-api'

interface Props {
  uId: string
  nId: number
}

export const UnblockModal = ({ uId, nId }: Props) => {
  const [unbanUser] = useUserToUnbanMutation()

  const handleUserToUnban = async (close: () => void) => {
    try {
      void toast.promise(
        unbanUser({
          uId,
          nId
        }).unwrap(),

        {
          pending: 'Разблокировка...',
          success: 'Пользователь успешно разблокирован',
          error: 'Ошибка при разблокировке пользователя'
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
        <Button
          onClick={openModal}
          className='!w-[38px] !h-[38px] !p-0 min-w-min grid place-content-center'
          variant='contained'
          color='success'
        >
          <img src='/images/icons/lock.svg' alt='unlock' />
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <div className='flex justify-center flex-col items-center gap-6'>
          <img src='/images/icons/verify.svg' alt='close' className='w-16 h-16' />

          <Typography className='text-center' variant='h4'>
            Вы уверены что хотите <br /> разблокировать трейдера?
          </Typography>

          <div className='w-full flex items-center gap-3 max600:flex-col'>
            <Button variant='outlined' color='secondary' className='w-full' onClick={closeModal}>
              Нет
            </Button>
            <Button
              variant='contained'
              color='success'
              className='w-full'
              onClick={() => {
                handleUserToUnban(closeModal)
              }}
            >
              Разблокировать
            </Button>
          </div>
        </div>
      )}
    />
  )
}
