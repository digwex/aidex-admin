import { Button, Divider, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import ModalButton from '@/components/ModalButton'

export const MakeAdvertisementAccount = () => {
  const handleSubmit = () => {
    toast.success('Аккаунт стал рекламным')
  }

  return (
    <ModalButton
      maxWidth='xs'
      openButton={({ openModal }) => (
        <Button color='warning' variant='outlined' className='max700:w-full' onClick={openModal}>
          Сделать рекламным
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <div className='flex flex-col gap-4'>
          <Typography variant='h5' className='text-center mb-3 text-2xl font-bold'>
            Вы уверены что хотите сделать аккаунт рекламным?
          </Typography>

          <Divider />

          <div className='flex items-center gap-3 max700:flex-col'>
            <Button onClick={closeModal} className='w-full' variant='outlined' color='success'>
              Назад
            </Button>
            <Button
              onClick={() => {
                handleSubmit()
                closeModal()
              }}
              className='w-full'
              variant='contained'
              color='error'
            >
              Сделать рекламным
            </Button>
          </div>
        </div>
      )}
    />
  )
}
