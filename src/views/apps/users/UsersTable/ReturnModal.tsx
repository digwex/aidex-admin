import { Button, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import ModalButton from '@/components/ModalButton'

import { useRevertDeletingUserMutation } from '@/api/endpoints/user/user-api'

interface Props {
  uid: string
  children: ({ openModal }: { openModal: () => void }) => React.ReactNode
}

export const ReturnModal = ({ uid, children }: Props) => {
  const [revertDelete] = useRevertDeletingUserMutation()

  const handleRevertDelete = async (closeModal: () => void) => {
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
    closeModal()
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
            Вы уверены что хотите <br /> восстановить аккаунт?
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
                handleRevertDelete(closeModal)
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
