'use client'

import { Box, Button, Divider, MenuItem, Typography } from '@mui/material'

import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

import * as yup from 'yup'

import { toast } from 'react-toastify'

import CustomTextField from '@/@core/components/mui/TextField'
import { useAddPairMutation } from '@/api/endpoints/pairs'
import { Error } from '@/components/Error'
import ModalButton from '@/components/ModalButton'
import { handleRTKError } from '@/utils/handleRTKError'

const enum TYPE {
  NEW = 'new',
  HOT = 'hot',
  TREND = 'trends'
}

const enum TIME {
  '5m' = '5m',
  '1h' = '1h',
  '6h' = '6h',
  '24h' = '24h'
}

interface AddPAirFormValue {
  address: string
  type: TYPE
  position: number
  time: TIME
}

const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/

export const addPairFormSchema = yup.object({
  type: yup.mixed<TYPE>().oneOf([TYPE.NEW, TYPE.HOT, TYPE.TREND]).required('Тип обязателен'),

  position: yup
    .number()
    .typeError('Введите целое число')
    .integer('Позиция должна быть целым числом')
    .min(1, 'Позиция не может быть меньше 1')
    .required('Позиция обязательна'),

  time: yup.mixed<TIME>().oneOf([TIME['5m'], TIME['1h'], TIME['6h'], TIME['24h']]).required('Время обязательно'),

  address: yup.string().matches(solanaAddressRegex, 'Не валидный адрес').required('Адрес обязателен')
})

export const AddPairForm = () => {
  const [addPair] = useAddPairMutation()

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<AddPAirFormValue>({
    defaultValues: {
      time: TIME['24h'],
      type: TYPE.NEW,
      position: 1
    },

    resolver: yupResolver<AddPAirFormValue>(addPairFormSchema)
  })

  const onSubmit = (close: () => void) => async (data: AddPAirFormValue) => {
    const toastId = toast.loading('Добавление пары...')

    try {
      await addPair({
        chain: 'solana',
        ...data
      }).unwrap()

      reset()
      toast.update(toastId, {
        render: 'Пара успешно добавлена',
        type: 'success',
        isLoading: false,
        autoClose: 3000
      })
      close()
    } catch (error) {
      console.log(`Error add pair: ${error}`)
      const message = handleRTKError(error)

      toast.update(toastId, {
        render: message,
        type: 'error',
        isLoading: false,
        autoClose: 3000
      })
    }
  }

  return (
    <ModalButton
      maxWidth='sm'
      fullWidth
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='contained' color='success' className='min-w-fit max700:w-full'>
          Добавить
        </Button>
      )}
      contentClassName='w-full'
      modalContent={({ closeModal }) => (
        <form className='space-y-3 w-full max-w-[660px]' onSubmit={handleSubmit(onSubmit(closeModal))}>
          <Typography className='font-semibold w-full text-center text-2xl' variant='h2'>
            Добавление пары
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

          <div className='space-y-1 w-full'>
            <Controller
              name='position'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomTextField
                  {...field}
                  error={!!error}
                  type='text'
                  label='Позиция'
                  fullWidth
                  inputMode='numeric'
                  onChange={e => {
                    const val = e.target.value

                    if (/^\d*$/.test(val)) {
                      field.onChange(val)
                    }
                  }}
                />
              )}
            />

            <Error error={errors.position} />
          </div>

          <Controller
            control={control}
            name='type'
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <div className='space-y-1 w-full'>
                  <CustomTextField
                    error={!!error}
                    value={value}
                    onChange={onChange}
                    select
                    fullWidth
                    label='Раздел'
                    placeholder='Hi4uKaAIsa2s1Js3sA...'
                  >
                    <MenuItem value={TYPE.TREND}>Trends</MenuItem>
                    <MenuItem value={TYPE.NEW}>New</MenuItem>
                    <MenuItem value={TYPE.HOT}>Hot</MenuItem>
                  </CustomTextField>
                  <Error error={error} />
                </div>
              )
            }}
          />

          <Controller
            control={control}
            name='time'
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <div className='space-y-1 w-full'>
                  <CustomTextField
                    error={!!error}
                    value={value}
                    onChange={onChange}
                    select
                    fullWidth
                    label='Время топа'
                  >
                    <MenuItem value={TIME['5m']}>5m</MenuItem>
                    <MenuItem value={TIME['1h']}>1h</MenuItem>
                    <MenuItem value={TIME['6h']}>6h</MenuItem>
                    <MenuItem value={TIME['24h']}>24h</MenuItem>
                  </CustomTextField>
                  <Error error={error} />
                </div>
              )
            }}
          />

          <Divider />

          <Box className='flex items-center gap-3 w-full max700:flex-col-reverse max700:w-full'>
            <Button type='button' onClick={closeModal} className='w-full' variant='outlined' color='error'>
              Отмена
            </Button>
            <Button
              onClick={() => handleSubmit(closeModal)}
              type='submit'
              className='w-full'
              variant='contained'
              color='success'
            >
              Добавить
            </Button>
          </Box>
        </form>
      )}
    />
  )
}
