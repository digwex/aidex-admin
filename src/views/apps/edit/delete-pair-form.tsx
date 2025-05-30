'use client'

import { Box, Button, Divider, Typography } from '@mui/material'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { toast } from 'react-toastify'

import CustomTextField from '@/@core/components/mui/TextField'
import ModalButton from '@/components/ModalButton'
import { Error } from '@/components/Error'

interface AddPAirFormValue {
  address: string
}

const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/

export const deletePairFormSchema = yup.object({
  address: yup.string().matches(solanaAddressRegex, 'Не валидный адрес').required('Адрес обязателен')
})

export const DeletePairForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AddPAirFormValue>({
    resolver: yupResolver<AddPAirFormValue>(deletePairFormSchema)
  })

  const onSubmit = (close: () => void) => (data: AddPAirFormValue) => {
    console.log(data)
    reset()
    toast.success(`Пара удалена`)
    close()
  }

  return (
    <ModalButton
      maxWidth='sm'
      fullWidth
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='contained' color='error' className='min-w-fit max700:w-full'>
          Удалить
        </Button>
      )}
      contentClassName='w-full'
      modalContent={({ closeModal }) => (
        <form className='space-y-3 w-full max-w-[660px]' onSubmit={handleSubmit(onSubmit(closeModal))}>
          <Typography className='font-semibold w-full text-center text-2xl' variant='h2'>
            Удаление пары
          </Typography>
          <div className='space-y-1 w-full'>
            <CustomTextField
              error={!!errors.address}
              fullWidth
              label='Адрес пары'
              {...register('address')}
              placeholder='Hi4uKaAIsa2s1Js3sA...'
            />
            <Error error={errors.address} />
          </div>

          <Divider />

          <Box className='flex items-center gap-3 w-full max700:flex-col-reverse max700:w-full'>
            <Button type='button' onClick={closeModal} className='w-full' variant='outlined' color='success'>
              Отмена
            </Button>
            <Button
              onClick={() => handleSubmit(closeModal)}
              type='submit'
              className='w-full'
              variant='contained'
              color='error'
            >
              Удалить
            </Button>
          </Box>
        </form>
      )}
    />
  )
}
