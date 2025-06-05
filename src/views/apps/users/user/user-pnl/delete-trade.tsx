import { toast } from 'react-toastify'

import { Button, Divider, Typography } from '@mui/material'

import { useDeleteTradeMutation } from '@/api/endpoints/users/users-api'
import ModalButton from '@/components/ModalButton'

interface Props {
  tradeId: string
}

export const DeleteTrade = ({ tradeId }: Props) => {
  const [deleteOrder, { isLoading }] = useDeleteTradeMutation()

  const handleDeleteOrder = (close: () => void) => {
    return async () => {
      if (isLoading) return

      toast.promise(
        deleteOrder({
          id: tradeId
        }).unwrap(),
        {
          pending: 'Удаление трейда...',
          success: {
            render: () => {
              close()

              return 'Трейд успешно удален'
            }
          },
          error: {
            render: ({ data }: { data: any }) => {
              const message = data?.message

              if (typeof message === 'string') {
                return message
              }

              return 'Ошибка при удалении трейда'
            }
          }
        }
      )
    }
  }

  return (
    <ModalButton
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='contained' color='error'>
          Удалить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <div className='flex flex-col gap-4'>
          <Typography variant='h4'>Вы уверены что хотите удалить трейд?</Typography>
          <Divider />
          <div className='flex items-center gap-3'>
            <Button disabled={isLoading} variant='contained' color='primary' onClick={closeModal} className='w-full'>
              Нет
            </Button>
            <Button
              disabled={isLoading}
              variant='contained'
              color='error'
              className='w-full'
              onClick={handleDeleteOrder(closeModal)}
            >
              Да
            </Button>
          </div>
        </div>
      )}
    />
  )
}
