import { Button, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import { useUserToUnbanMutation } from '@/api/endpoints/users/users-api'
import ModalButton from '@/components/ModalButton'

interface Props {
  uId: string
  children: ({ openModal }: { openModal: () => void }) => React.ReactNode
}

export const UnblockModal = ({ uId, children }: Props) => {
  const [unBan] = useUserToUnbanMutation()

  const handleUnBan = async () => {
    await toast.promise(
      unBan({
        uId
      }).unwrap(),
      {
        pending: 'Разблокировка...',
        success: 'Успешно разблокирован',
        error: 'Ошибка при разблокировке'
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
                handleUnBan()
                closeModal()
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
