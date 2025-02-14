import { Button, Typography, Box, Paper } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'

export const Addresses = () => {
  return (
    <Paper className='p-4'>
      <Typography className='font-medium mb-3' variant='h3'>
        Адрес кошельков
      </Typography>

      <Box className='grid grid-cols-[1fr_1fr] gap-y-5 gap-x-8 max700:grid-cols-1'>
        <Box className='flex items-end gap-4 max600:flex-col'>
          <CustomTextField
            fullWidth
            value='TBu1UMw8mogxqzfmYAJRAPGpCRV7XWj1cP'
            id='uncontrolled-text-field'
            label='Tether TRC20'
          />
          <Button variant='outlined' className='max600:w-full' color='success'>
            Сохранить
          </Button>
        </Box>
        <Box className='flex items-end gap-4 max600:flex-col'>
          <CustomTextField
            fullWidth
            placeholder='Введите адрес кошелька'
            id='uncontrolled-text-field'
            label='Tether ERC20'
          />
          <Button variant='outlined' className='max600:w-full' color='success'>
            Сохранить
          </Button>
        </Box>

        <Box className='flex items-end gap-4 max600:flex-col'>
          <CustomTextField
            fullWidth
            placeholder='Введите адрес кошелька'
            id='uncontrolled-text-field'
            label='Tether BEP20'
          />
          <Button variant='outlined' className='max600:w-full' color='success'>
            Сохранить
          </Button>
        </Box>
        <Box className='flex items-end gap-4 max600:flex-col'>
          <CustomTextField
            fullWidth
            placeholder='Введите адрес кошелька'
            id='uncontrolled-text-field'
            label='Tether SOL'
          />
          <Button variant='outlined' className='max600:w-full' color='success'>
            Сохранить
          </Button>
        </Box>

        <Box className='flex items-end gap-4 max600:flex-col'>
          <CustomTextField
            fullWidth
            placeholder='Введите ID торгового аккаунта'
            id='uncontrolled-text-field'
            label='Торговый аккаунт'
          />
          <Button variant='outlined' className='max600:w-full' color='success'>
            Сохранить
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
