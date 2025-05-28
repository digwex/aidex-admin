import { Box, Button, Stack, Typography } from '@mui/material'

import ModalButton from '@/components/ModalButton'

interface Props {
  handleOpen?: (openModal: () => void) => void
  handleSubmit: (closeModal: () => void) => void
}

export const DeletePair = ({ handleSubmit, handleOpen }: Props) => {
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
          color='error'
          className='min-w-fit'
        >
          Удалить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <Stack spacing={3} justifyContent='center' alignItems={'center'} p={6} textAlign='center'>
          <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/reject.svg' alt='' />
          <Typography variant='h4' className='font-medium'>
            Вы уверены, что хотите удалить пару?
          </Typography>

          <Box className='flex items-center gap-3 w-full max700:flex-col-reverse max700:w-full'>
            <Button onClick={closeModal} className='w-full' variant='outlined' color='success'>
              Отмена
            </Button>
            <Button onClick={() => handleSubmit(closeModal)} className='w-full' variant='contained' color='error'>
              Удалить
            </Button>
          </Box>
        </Stack>
      )}
    />
  )
}
