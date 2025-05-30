import { Button, Typography } from '@mui/material'

import ModalButton from '@/components/ModalButton'

export const DeleteLinkModal = () => {
  return (
    <ModalButton
      openButton={({ openModal }) => (
        <Button className='max800:w-full' variant='outlined' color='error' onClick={openModal} disabled={true}>
          Удалить
        </Button>
      )}
      modalContent={() => (
        <Typography variant='h5' className='text-center mb-3 text-2xl font-bold'>
          Вы уверены что хотите удалить ссылку?
        </Typography>
      )}
    />
  )
}
