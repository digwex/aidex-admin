import { Button, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import ModalButton from '@/components/ModalButton'
import { useUserToBanMutation } from '@/api/endpoints/users/users-api'

interface Props {
  uId: string
}

export const BlockModal = ({ uId }: Props) => {
  const [userToBan] = useUserToBanMutation()

  const handleBanUser = async (close: () => void) => {
    await toast.promise(
      userToBan({
        uId
      }).unwrap(),
      {
        pending: 'Блокировка...',
        success: 'Аккаунт успешно заблокирован',
        error: 'Ошибка при блокировке аккаунта'
      }
    )
    close()
  }

  return (
    <ModalButton
      maxWidth='xs'
      fullWidth
      openButton={({ openModal }) => (
        <Button
          onClick={openModal}
          variant='contained'
          color='error'
          className='!w-[38px] !h-[38px] !p-0 min-w-min grid place-content-center'
        >
          <img src='/images/icons/lock.svg' alt='unlock' />
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
            <Button variant='contained' color='error' className='w-full' onClick={() => handleBanUser(closeModal)}>
              Заблокировать
            </Button>
          </div>
        </div>
      )}
    />
  )
}
