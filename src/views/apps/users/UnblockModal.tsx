import { Button, Typography } from '@mui/material'

import ModalButton from '@/components/ModalButton'

export const UnblockModal = () => {
  return (
    <ModalButton
      maxWidth='xs'
      fullWidth
      openButton={({ openModal }) => (
        <Button
          onClick={openModal}
          className='!w-[38px] !h-[38px] !p-0 min-w-min grid place-content-center'
          variant='contained'
          color='success'
        >
          <img src='/images/icons/lock.svg' alt='unlock' />
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <div className='flex justify-center flex-col items-center gap-6'>
          <img src='/images/icons/verify.svg' alt='close' className='w-16 h-16' />

          <Typography className='text-center' variant='h4'>
            Вы уверены что хотите <br /> заблокировать трейдера?
          </Typography>

          <div className='w-full flex items-center gap-3 max600:flex-col'>
            <Button variant='outlined' color='secondary' className='w-full' onClick={closeModal}>
              Нет
            </Button>
            <Button variant='contained' color='success' className='w-full' onClick={closeModal}>
              Разблокировать
            </Button>
          </div>
        </div>
      )}
    />
  )
}
