import type { StackProps } from '@mui/material'

import { Avatar, Box, Button, Chip, Divider, MenuItem, Paper, Stack, Typography } from '@mui/material'

import { EditInput } from '@/components/EditInput'
import CustomTextField from '@/@core/components/mui/TextField'

const stackProps: StackProps = {
  direction: 'column',
  className: 'mr-auto',
  spacing: 3
}

export const Head = () => {
  return (
    <Paper>
      <Box
        sx={{
          p: 4,
          display: 'flex',
          justifyContent: 'start',
          flexWrap: 'wrap',
          gap: 4
        }}
      >
        <Stack direction='row' spacing={4}>
          <Avatar sx={{ width: 60, height: 60 }} src='/images/avatars/1.png' />
          <Stack direction='column'>
            <EditInput
              input={{
                sx: {
                  width: '115px'
                },
                defaultValue: 'GOSHA2027'
              }}
            />
            <Chip
              className='w-fit'
              icon={<Avatar src='/images/icons/verify.svg' />}
              label='Подтверждено'
              variant='outlined'
              color='success'
            />
          </Stack>
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>ID пользователя:</Typography>
          <Typography variant='h5'>212121212</Typography>
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>Время последнего входа:</Typography>
          <Typography variant='h5'>2023-04-06 16:41</Typography>
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>E-mail:</Typography>
          <EditInput
            input={{
              sx: {
                width: '100%',
                maxWidth: 280
              },
              defaultValue: 'alexsandr.tkachuk18@gmail.com'
            }}
          />
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>Тарифный план</Typography>
          <EditInput
            input={{
              sx: {
                maxWidth: 160
              },
              defaultValue: 'Super Nova Elite'
            }}
          />
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>Источник трафика:</Typography>
          <Typography variant='h5' className='break-all'>
            https://www.youtube.com/shorts/1Vy3mj5XPT4
          </Typography>
        </Stack>
      </Box>
      <Divider orientation='horizontal' />
      <Box className='flex items-start flex-wrap gap-4 p-4 max1200:flex-col'>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'end', justifyContent: 'start', flexWrap: 'wrap', gap: 4 }}>
          <CustomTextField
            label='Старый пароль'
            defaultValue='asdfoi893429r8h1r'
            placeholder='Placeholder'
            className='max800:w-full min800:flex-1'
            id='form-props-full-width'
          />

          <CustomTextField
            label='Новый пароль'
            className='max800:w-full min800:flex-1'
            placeholder='Введите новый пароль'
            id='form-props-full-width'
          />

          <Button className='max800:w-full max-h-11' variant='outlined' color='secondary'>
            Сохранить пароль
          </Button>
          <Button className='max800:w-full max-h-11' variant='outlined' color='error'>
            Отключить 2ФА
          </Button>
        </Box>
        <Divider orientation='vertical' className='h-[90px] -my-4 w-[1.5px] max1200:hidden'></Divider>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'start',
            flexWrap: 'wrap',
            gap: 4
          }}
        >
          <CustomTextField
            select
            fullWidth
            defaultValue='tg'
            className='max-w-[180px] max800:max-w-full'
            label='Ваша соц. сеть'
            id='custom-select'
          >
            <MenuItem value='tg'>Телеграм</MenuItem>
            <MenuItem value='youtube'>Youtube</MenuItem>
          </CustomTextField>

          <CustomTextField
            label='Ваш никнейм'
            className='min800:flex-1  max800:w-full'
            defaultValue='@sfvsr68vrsr'
            id='form-props-full-width'
          />
          <CustomTextField
            label='Ваш никнейм'
            className='min800:flex-1 max800:w-full'
            placeholder='Введите @никнейм'
            id='form-props-full-width'
          />

          <Button className='max800:w-full max-h-11' variant='outlined' color='success'>
            Изменить
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
