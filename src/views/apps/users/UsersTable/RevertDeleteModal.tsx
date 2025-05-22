import { Button, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import { useRevertDeletingUserMutation } from '@/api/endpoints/user/user-api'
import ModalButton from '@/components/ModalButton'

interface Props {
  uid: string
  children: ({ openModal }: { openModal: () => void }) => React.ReactNode
}

export const RevertDeleteModal = ({ uid, children }: Props) => {
  const [revertDelete] = useRevertDeletingUserMutation()

  const handleRevertDelete = async () => {
    await toast.promise(
      revertDelete({
        uid
      }).unwrap(),
      {
        pending: 'Восстановление...',
        success: 'Успешно восстановлен',
        error: 'Ошибка при восстановлении'
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
            Вы уверены что хотите <br /> восстановить аккаунт?
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
                handleRevertDelete()
                closeModal()
              }}
            >
              Восстановить
            </Button>
          </div>
        </div>
      )}
    />
  )
}
