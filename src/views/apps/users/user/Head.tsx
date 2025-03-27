import type { StackProps } from '@mui/material'

import { Avatar, Box, Button, Chip, Divider, Paper, Stack, Typography } from '@mui/material'

import { EditInput } from '@/components/EditInput'

const stackProps: StackProps = {
  direction: 'column',
  className: 'mr-2',
  spacing: 1
}

export const Head = () => {
  return (
    <Paper className='flex items-center gap-3 justify-between p-4 flex-wrap'>
      <Box className='flex justify-start flex-wrap flex-1 gap-4'>
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

        {/* <Stack {...stackProps}>
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
          <Typography color='secondary'>Верификация:</Typography>
          <Chip
            className='w-fit'
            icon={<Avatar src='/images/icons/verify-red.svg' />}
            label='Подтверждено'
            variant='tonal'
            color='error'
          />
        </Stack> */}
      </Box>

      <Divider className='w-full max600:block hidden' />

      <Box className='flex items-center gap-3 max1000:flex-col max600:justify-center max600:w-full'>
        <Stack direction='column'>
          <Typography variant='h5'>964.34 USDT</Typography>
          <Typography className='text-xs text-right' color='secondary'>
            ≈0.03524242 BTC
          </Typography>
        </Stack>
        <Button variant='contained' color='success' className='w-fit max600:w-full'>
          Общий баланс пользователя
        </Button>
      </Box>
    </Paper>
  )
}
