import { Box, Button, Stack, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import { useApproveReferralWithdrawalMutation } from '@/api/endpoints/withdrawals/withdrawals'
import ModalButton from '@/components/ModalButton'

interface IProps {
  id: string
}

export const ReferralsWithdrawalPendingApprove = ({ id }: IProps) => {
  const [mutation, { isLoading }] = useApproveReferralWithdrawalMutation()

  const handleConfirm = async (closeModal: () => void) => {
    if (isLoading) {
      return
    }

    await toast.promise(mutation(id).unwrap(), {
      pending: 'Вывод...',
      success: 'Успешно выведено',
      error: 'Не удалось вывести'
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
        <Button onClick={openModal} variant='outlined' color='success' className='min-w-fit'>
          Одобрить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <Stack spacing={3} justifyContent='center' alignItems={'center'} p={2}>
          <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/info.svg' alt='' />
          <Typography variant='h3' className='font-medium'>
            Уверены в выводе?
          </Typography>

          <Box className='flex items-center gap-3 max700:flex-col-reverse max700:w-full'>
            <Button
              onClick={isLoading ? () => {} : closeModal}
              variant='outlined'
              color='secondary'
              className='max700:w-full'
              disabled={isLoading}
            >
              Отменить
            </Button>
            <Button
              onClick={() => handleConfirm(closeModal)}
              variant='contained'
              color='success'
              className='max700:w-full'
              disabled={isLoading}
            >
              Подтвердить
            </Button>
          </Box>
        </Stack>
      )}
    />
  )
}
