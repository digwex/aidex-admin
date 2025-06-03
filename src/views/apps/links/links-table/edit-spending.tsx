'use client'

import { useState } from 'react'

import { toast } from 'react-toastify'

import { Button, Divider, IconButton, Typography } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'
import { useEditReferralLinkMutation } from '@/api/endpoints/referrals/referrals-api'
import ModalButton from '@/components/ModalButton'
import { handleRTKError } from '@/utils/handleRTKError'

interface Props {
  id: string
  defaultValue: number
}

export const EditSpending = ({ id, defaultValue }: Props) => {
  const [spending, setSpending] = useState(String(defaultValue))

  const [mutate, { isLoading }] = useEditReferralLinkMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replace(/[^0-9]/g, '') || '0')

    if (value > 1_000_000_000) {
      setSpending(String(1_000_000_000))

      return
    }

    if (String(value)[0] === '0' && String(value).length > 1) {
      setSpending(String(value).slice(1))

      return
    }

    setSpending(String(value))
  }

  const handleClose = (close: () => void) => () => {
    if (isLoading) {
      return
    }

    if (defaultValue !== +spending) {
      setSpending(String(defaultValue))
    }

    close()
  }

  const onSubmit = (close: () => void) => async () => {
    if (isLoading) {
      return
    }

    try {
      await mutate({ id, spending: +spending }).unwrap()
      toast.success('Сумма успешно изменена')
      close()
    } catch (e) {
      console.log(`Error edit spending: ${e}`)
      toast.error(`${handleRTKError(e)}: Не удалось изменить сумму`)
    }
  }

  return (
    <>
      <td>
        <div className='flex gap-2 items-center justify-center'>
          <span className='text-base font-semibold'>{spending}</span>
          <ModalButton
            fullWidth
            openButton={({ openModal }) => (
              <IconButton onClick={openModal}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  height='20px'
                  width='20px'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0V0z'></path>
                  <path d='m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'></path>
                </svg>
              </IconButton>
            )}
            modalContent={({ closeModal }) => (
              <div className='space-y-4'>
                <Typography variant='h5' className='text-center text-2xl font-bold'>
                  Изменение расходов
                </Typography>
                <CustomTextField fullWidth label='Расходы' value={spending} onChange={handleChange} />

                <Divider />

                <div className='flex gap-3 max600:flex-col'>
                  <Button
                    fullWidth
                    className='w-full'
                    onClick={handleClose(closeModal)}
                    variant='outlined'
                    disabled={isLoading}
                  >
                    Назад
                  </Button>

                  <Button
                    fullWidth
                    color='success'
                    variant='outlined'
                    onClick={onSubmit(closeModal)}
                    disabled={isLoading}
                  >
                    Изменить
                  </Button>
                </div>
              </div>
            )}
          />
        </div>
      </td>
    </>
  )
}
