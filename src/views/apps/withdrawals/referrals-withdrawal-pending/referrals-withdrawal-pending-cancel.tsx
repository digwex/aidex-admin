import { Box, Button, Stack, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import { useCancelReferralWithdrawalMutation } from '@/api/endpoints/withdrawals/withdrawals'
import ModalButton from '@/components/ModalButton'

interface IProps {
  id: string
}

export const ReferralsWithdrawalPendingCancel = ({ id }: IProps) => {
  const [mutation, { isLoading }] = useCancelReferralWithdrawalMutation()

  const handleConfirm = async (closeModal: () => void) => {
    if (isLoading) {
      return
    }

    await toast.promise(mutation(id).unwrap(), {
      pending: 'Отмена...',
      success: 'Успешно отменено',
      error: 'Ошибка при отмене'
    })

    closeModal()
  }

  return (
    <ModalButton
      onClose={() => {
        if (isLoading) {
          return
        }
      }}
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='outlined' color='error' className='min-w-fit'>
          Отменить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <Stack spacing={3} justifyContent='center' alignItems={'center'}>
          <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/reject.svg' alt='' />
          <Typography variant='h3' className='font-medium' textAlign='center'>
            Вы действительно хотите отменить вывод средств?
          </Typography>
          <Box className='flex items-center gap-3 max700:flex-col-reverse max700:w-full'>
            <Button
              onClick={isLoading ? () => {} : closeModal}
              variant='outlined'
              color='secondary'
              className='max700:w-full'
              disabled={isLoading}
            >
              Нет
            </Button>
            <Button
              onClick={() => handleConfirm(closeModal)}
              variant='contained'
              color='error'
              className='max700:w-full'
              disabled={isLoading}
            >
              Да
            </Button>
          </Box>
        </Stack>
      )}
    />
  )
}
