import { memo } from 'react'

import { toast } from 'react-toastify'

import { Button, Typography } from '@mui/material'

import { useDeleteAdminMutation } from '@/api/endpoints/admins/admins'
import ModalButton from '@/components/ModalButton'

interface Props {
  id: string
  login: string
}

const DeleteAdmin = ({ id, login }: Props) => {
  const [deleteAdmin] = useDeleteAdminMutation()

  const handleDelete = async (close: () => void) => {
    void toast.promise(deleteAdmin({ ids: [id] }).unwrap(), {
      pending: 'Удаление администратора...',
      success: 'Администратор успешно удален',
      error: 'Ошибка при удалении администратора'
    })
    close()
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
          <img src='/images/icons/reject.svg' alt='close' className='w-16 block mx-auto h-16' />

          <Typography className='text-center' variant='h4'>
            Вы уверены что хотите удалить <br /> {login}?
          </Typography>

          <div className='w-full flex items-center gap-3 max600:flex-col'>
            <Button variant='outlined' color='secondary' className='w-full' onClick={closeModal}>
              Нет
            </Button>
            <Button variant='contained' color='error' className='w-full' onClick={() => handleDelete(closeModal)}>
              Удалить
            </Button>
          </div>
        </div>
      )}
    />
  )
}

export default memo(DeleteAdmin)
