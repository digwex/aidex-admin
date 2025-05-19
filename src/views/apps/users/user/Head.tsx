'use client'

import { useParams } from 'next/navigation'

import type { StackProps } from '@mui/material'

import { Avatar, Box, Button, Divider, Paper, Stack, Typography } from '@mui/material'

import { useGetConvertedNIdToUIdQuery } from '@/api/endpoints/users/users-api'

const stackProps: StackProps = {
  direction: 'column',
  className: 'mr-2',
  spacing: 1
}

export const Head = () => {
  const { id } = useParams()

  useGetConvertedNIdToUIdQuery(
    {
      nid: String(id) ?? ''
    },
    {
      refetchOnMountOrArgChange: true
    }
  )

  return (
    <Paper className='flex items-center gap-3 justify-between p-4 flex-wrap'>
      <Box className='flex justify-start flex-wrap flex-1 gap-4'>
        <Stack direction='row' spacing={4}>
          <Avatar sx={{ width: 60, height: 60 }} src='/images/avatars/1.png' />
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>ID пользователя:</Typography>
          <Typography variant='h5'>212121212</Typography>
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>Время последнего входа:</Typography>
          <Typography variant='h5'>2023-04-06 16:41</Typography>
        </Stack>
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
