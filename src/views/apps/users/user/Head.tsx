'use client'

import { useParams } from 'next/navigation'

import type { StackProps } from '@mui/material'

import { Avatar, Box, Button, Divider, Paper, Stack, Typography } from '@mui/material'

import { format } from 'date-fns'

import { useGetUserByIdQuery } from '@/api/endpoints/users/users-api'
import { CopyButton } from '@/hooks/useCopy'
import { getUserRefLink } from '@/utils/get-user-ref-link'
import WinRateUser from './WinRateUser'

const stackProps: StackProps = {
  direction: 'column',
  className: 'mr-2',
  spacing: 1
}

export const Head = () => {
  const { id } = useParams()
  const { data } = useGetUserByIdQuery(String(id as string))

  const totalSol = data?.wallets.reduce((acc: number, wallet: any) => acc + Number(wallet.balance), 0) || 0
  const refLink = getUserRefLink(data)

  return (
    <Paper className='flex items-center gap-3 justify-between p-4 flex-wrap'>
      <Box className='flex justify-start flex-wrap flex-1 gap-4'>
        <Stack direction='row' spacing={4}>
          <Avatar sx={{ width: 60, height: 60 }} src='/images/avatars/1.png' />
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>ID пользователя:</Typography>
          <Typography variant='h5'>{data?.nId}</Typography>
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>Время последнего входа:</Typography>
          <Typography variant='h5'>
            {data?.lastLoggedIn ? format(data?.lastLoggedIn, 'yyyy-MM-dd HH:mm') : 'N/A'}
          </Typography>
        </Stack>

        <Stack {...stackProps}>
          <Typography color='secondary'>Реферальная ссылка:</Typography>
          <div className='flex items-center gap-2'>
            <a target='_blank' href={refLink} className='transition-all hover:text-primary duration-300'>
              {refLink}
            </a>
            <CopyButton text={refLink} />
          </div>
        </Stack>
        <Stack {...stackProps}>
          <WinRateUser uid={String(id)} />
        </Stack>
      </Box>

      <Divider className='w-full max600:block hidden' />

      <Box className='flex items-center gap-3 max1000:flex-col max600:justify-center max600:w-full'>
        <Stack direction='column'>
          <Typography variant='h5'>{totalSol} SOL</Typography>
        </Stack>
        <Button variant='contained' color='success' className='w-fit max600:w-full'>
          Общий баланс пользователя
        </Button>
      </Box>
    </Paper>
  )
}
