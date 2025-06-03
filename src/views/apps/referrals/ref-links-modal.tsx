import { Button, Divider, InputAdornment, Typography } from '@mui/material'

import ModalButton from '@/components/ModalButton'
import CustomTextField from '@/@core/components/mui/TextField'
import { CopyButton } from '@/hooks/useCopy'

export const RefLinksModal = () => {
  return (
    <ModalButton
      fullWidth
      modalContent={({ closeModal }) => (
        <div>
          <Typography variant='h5' className='text-center mb-3 text-xl'>
            Реферальные ссылки
          </Typography>

          <div className='flex flex-col gap-2 '>
            {[1, 2, 3].map(index => (
              <CustomTextField
                key={index}
                fullWidth
                value={'https://www.google.com'}
                slotProps={{
                  input: {
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position='end'>
                        <CopyButton text={'https://www.google.com'} />
                      </InputAdornment>
                    )
                  }
                }}
              />
            ))}
          </div>

          <Divider orientation='horizontal' className='my-4' />

          <Button variant='contained' onClick={closeModal} className='w-full'>
            Закрыть
          </Button>
        </div>
      )}
      openButton={({ openModal }) => (
        <Button variant='tonal' onClick={openModal}>
          3
        </Button>
      )}
    />
  )
}
