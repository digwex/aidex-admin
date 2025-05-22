import { Button, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import { useUserToBanMutation } from '@/api/endpoints/users/users-api'
import ModalButton from '@/components/ModalButton'

interface Props {
  uId: string
  children: ({ openModal }: { openModal: () => void }) => React.ReactNode
}

export const BlockModal = ({ uId, children }: Props) => {
  const [userToBan] = useUserToBanMutation()

  const handleBanUser = async () => {
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
  }

  return (
    <ModalButton
      maxWidth='xs'
      fullWidth
      openButton={({ openModal }) => children({ openModal })}
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
            <Button
              variant='contained'
              color='error'
              className='w-full'
              onClick={() => {
                handleBanUser()
                closeModal()
              }}
            >
              Заблокировать
            </Button>
          </div>
        </div>
      )}
    />
  )
}
