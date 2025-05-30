import { Button, Typography } from '@mui/material'

import ModalButton from '@/components/ModalButton'

export const EditLinkModal = () => {
  return (
    <ModalButton
      openButton={({ openModal }) => (
        <Button className='max800:w-full' variant='outlined' color='warning' onClick={openModal} disabled={true}>
          Изменить
        </Button>
      )}
      modalContent={() => (
        <Typography variant='h5' className='text-center mb-3 text-2xl font-bold'>
          Изменить ссылку
        </Typography>
      )}
    />
  )
}
