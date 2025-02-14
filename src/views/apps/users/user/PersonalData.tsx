import { Button, Typography, Box, Paper, Divider, Stack } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'

export const PersonalData = () => {
  return (
    <Paper className='p-4'>
      <Stack spacing={4}>
        <Typography className='font-medium mb-3' variant='h3'>
          Адрес кошельков
        </Typography>

        <Box className='grid grid-cols-[1fr_1fr_1fr] gap-4 max700:grid-cols-1'>
          <CustomTextField fullWidth defaultValue='Александр' label='Имя' />
          <CustomTextField fullWidth defaultValue='Ткачук' label='Фамилия' />
          <CustomTextField fullWidth defaultValue='Украина' label='Страна' />
          <CustomTextField fullWidth defaultValue='г.Киев, ул. Хрещатика 57, кв74' label='Адрес проживание' />
          <CustomTextField fullWidth defaultValue='Паспорт' label='Тип документа' />
          <CustomTextField fullWidth defaultValue='АО 42424624' label='Номер документа' />
        </Box>

        <Divider variant='fullWidth' className='border-dashed' />

        <Box className='grid grid-cols-[1fr_1fr_1fr] gap-4 max700:grid-cols-1'>
          <CustomTextField fullWidth defaultValue='alexsandr.tkachuk18@gmail.com' label='E-mail' />
          <CustomTextField fullWidth defaultValue='77f3hvrn3853' label='Пароль' />
          <CustomTextField fullWidth defaultValue='42424624' label='ID Партнера' />
        </Box>
        <Button className='w-fit max700:w-full' variant='contained' color='success'>
          Сохранить изменение
        </Button>
      </Stack>
    </Paper>
  )
}
