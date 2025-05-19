'use client'

import { useRef } from 'react'

import { toast } from 'react-toastify'

import { Button, Stack, Typography, Box } from '@mui/material'

import { useWithdrawalsCancelMutation } from '@/api/endpoints/withdrawals/withdrawals'

import CustomTextField from '@/@core/components/mui/TextField'
import ModalButton from '@/components/ModalButton'

export const CancelTrade = ({ id }: { id: string }) => {
  const noteRef = useRef<null | HTMLInputElement>(null)

  const [mutation] = useWithdrawalsCancelMutation()

  const handleCancel = async (closeModal: () => void) => {
    const input = noteRef.current

    if (!input) return

    const value = input.value

    if (value.length === 0) {
      toast.error('Введите причину')

      return
    }

    void toast.promise(mutation({ id, note: value }).unwrap(), {
      pending: 'Отклонение...',
      success: {
        render: () => {
          closeModal()

          return 'Успешно отклонено'
        }
      },
      error: {
        render: ({ data }) => {
          closeModal()

          // @ts-expect-error type
          if (typeof data?.data?.message === 'string') {
            // @ts-expect-error type
            return data.data.message
          }

          return 'Ошибка отклонения'
        }
      }
    })
  }

  return (
    <ModalButton
      maxWidth='sm'
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='outlined' color='error' className='min-w-fit'>
          Отклонить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <Stack spacing={3} justifyContent='center' alignItems={'center'} p={6} textAlign='center'>
          <img className='w-[72px] h-[72px] min-w-[72px]' src='/images/icons/info.svg' alt='' />
          <Typography variant='h3' className='font-medium'>
            Причина отмены уйдет в примечание в аккаунт трейдеру
          </Typography>

          <CustomTextField placeholder='Введите примечание' fullWidth />

          <Box className='flex items-center gap-3 w-full max700:flex-col-reverse max700:w-full'>
            <Button onClick={closeModal} className='w-full' variant='outlined' color='secondary'>
              Отменить
            </Button>
            <Button onClick={() => handleCancel(closeModal)} className='w-full' variant='contained' color='success'>
              Подтвердить отмену
            </Button>
          </Box>
        </Stack>
      )}
    />
  )
}
