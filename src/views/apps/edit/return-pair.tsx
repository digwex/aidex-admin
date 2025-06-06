import { Box, Button, Stack, Typography } from '@mui/material'

import ModalButton from '@/components/ModalButton'

interface Props {
  isDisabled?: boolean
  handleOpen?: (openModal: () => void) => void
  handleSubmit: (closeModal: () => void) => void
}

export const ReturnPair = ({ handleSubmit, handleOpen, isDisabled }: Props) => {
  return (
    <ModalButton
      maxWidth='sm'
      openButton={({ openModal }) => (
        <Button
          onClick={() => {
            if (handleOpen) return handleOpen(openModal)

            openModal()
          }}
          variant='outlined'
          color='success'
          className='min-w-fit'
        >
          Вернуть
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <Stack spacing={3} justifyContent='center' alignItems={'center'} p={6} textAlign='center'>
          <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/reject.svg' alt='' />
          <Typography variant='h4' className='font-medium'>
            Вы уверены, что хотите вернуть пару?
          </Typography>

          <Box className='flex items-center gap-3 w-full max700:flex-col-reverse max700:w-full'>
            <Button onClick={closeModal} className='w-full' variant='outlined' color='error' disabled={isDisabled}>
              Отмена
            </Button>
            <Button
              onClick={() => handleSubmit(closeModal)}
              className='w-full'
              variant='contained'
              color='success'
              disabled={isDisabled}
            >
              Вернуть
            </Button>
          </Box>
        </Stack>
      )}
    />
  )
}
