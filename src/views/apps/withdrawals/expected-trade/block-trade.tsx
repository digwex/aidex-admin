import { Button, Stack, Typography, Box } from '@mui/material'

import CustomIconButton from '@/@core/components/mui/IconButton'
import ModalButton from '@/components/ModalButton'

export const BlockTrade = () => {
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
            Нажал по ошибке?
          </Typography>

          <Box className='flex items-center gap-3 max700:flex-col-reverse max700:w-full'>
            <Button onClick={closeModal} variant='outlined' color='secondary' className='max700:w-full'>
              Отменить
            </Button>
            <Button onClick={closeModal} variant='contained' color='error' className='max700:w-full'>
              Заблокировать
            </Button>
          </Box>
        </Stack>
      )}
    />
  )
}
