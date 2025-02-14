'use client'

import { Button, Stack, MenuItem } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'
import ModalButton from '@/components/ModalButton'

export const AddAmin = () => {
  return (
    <ModalButton
      title='Добавить админа'
      maxWidth='xs'
      fullWidth
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='outlined' color='success' className='max800:w-full'>
          Добавить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <Stack direction='column' spacing={3}>
          <CustomTextField label='ID Телеграм' />
          <CustomTextField label='Логин в Телеграм' />
          <CustomTextField label='Имя' />
          <CustomTextField label='Роль' />

          <CustomTextField select fullWidth defaultValue='5' label='Уровень доступа'>
            <MenuItem value={1}>1 уровень</MenuItem>
            <MenuItem value={2}>2 уровень</MenuItem>
            <MenuItem value={3}>3 уровень</MenuItem>
            <MenuItem value={4}>4 уровень</MenuItem>
            <MenuItem value={5}>5 уровень</MenuItem>
          </CustomTextField>

          <div className='flex items-center gap-3 max600:flex-col'>
            <Button onClick={closeModal} variant='outlined' color='secondary' className='w-full'>
              Назад
            </Button>
            <Button onClick={closeModal} variant='contained' color='success' className='w-full'>
              Добавить
            </Button>
          </div>
        </Stack>
      )}
    />
  )
}
