import { Button, Stack, Typography, Box } from '@mui/material'

import { toast } from 'react-toastify'

import ModalButton from '@/components/ModalButton'
import { useWithdrawalsCompleteMutation } from '@/api/endpoints/withdrawals/withdrawals'

export const ApproveTrade = ({ id }: { id: string }) => {
  const [mutation] = useWithdrawalsCompleteMutation()

  const handleConfirm = async (closeModal: () => void) => {
    void toast.promise(mutation({ id }).unwrap(), {
      pending: 'Одобрение...',
      success: {
        render: () => {
          closeModal()

          return 'Успешно одобрено'
        }
      },
      error: {
        render: ({ data }) => {
          closeModal()

          // @ts-expect-error type
          if (data?.data?.message?.includes('Insufficient balance for withdrawal')) {
            return 'Не хватка баланса'
          }

          // @ts-expect-error type
          if (typeof data?.data?.message === 'string') {
            // @ts-expect-error type
            return data.data.message
          }

          return 'Ошибка одобрения'
        }
      }
    })
  }

  return (
    <ModalButton
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='outlined' color='success' className='min-w-fit'>
          Одобрить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <Stack spacing={3} justifyContent='center' alignItems={'center'} p={6}>
          <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/info.svg' alt='' />
          <Typography variant='h3' className='font-medium'>
            Уверены в выводе?
          </Typography>

          <Box className='flex items-center gap-3 max700:flex-col-reverse max700:w-full'>
            <Button onClick={closeModal} variant='outlined' color='secondary' className='max700:w-full'>
              Отменить
            </Button>
            <Button
              onClick={() => handleConfirm(closeModal)}
              variant='contained'
              color='success'
              className='max700:w-full'
            >
              Подтвердить
            </Button>
          </Box>
        </Stack>
      )}
    />
  )
}
