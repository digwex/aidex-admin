import { Box, Button, Stack, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import CustomIconButton from '@/@core/components/mui/IconButton'
import { useCancelReferralWithdrawalMutation } from '@/api/endpoints/withdrawals/withdrawals'
import ModalButton from '@/components/ModalButton'

interface IProps {
  id: string
}

export const ReferralsWithdrawalPendingCancel = ({ id }: IProps) => {
  const [mutation] = useCancelReferralWithdrawalMutation()

  const handleConfirm = async (closeModal: () => void) => {
    await toast.promise(mutation(id).unwrap(), {
      pending: 'Отмена...',
      success: 'Успешно отменено',
      error: 'Ошибка при отмене'
    })

    closeModal()
  }

  return (
    <ModalButton
      openButton={({ openModal }) => (
        <CustomIconButton onClick={openModal} variant='contained' color='error'>
          <img src='/images/icons/lock-white.svg' alt='block' />
        </CustomIconButton>
      )}
      modalContent={({ closeModal }) => (
        <Stack spacing={3} justifyContent='center' alignItems={'center'} p={6}>
          <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/reject.svg' alt='' />
          <Typography variant='h3' className='font-medium'>
            Вы действительно хотите отменить вывод средств?
          </Typography>
          <Box className='flex items-center gap-3 max700:flex-col-reverse max700:w-full'>
            <Button onClick={closeModal} variant='outlined' color='secondary' className='max700:w-full'>
              Нет
            </Button>
            <Button
              onClick={() => handleConfirm(closeModal)}
              variant='contained'
              color='error'
              className='max700:w-full'
            >
              Да
            </Button>
          </Box>
        </Stack>
      )}
    />
  )
}
