'use client'

import { useRef } from 'react'

import { Button, Divider, Paper } from '@mui/material'

import { toast } from 'react-toastify'

import CustomTextField from '@/@core/components/mui/TextField'
import { isValidSolanaAddress } from '@/utils/is-valid-solana-address'
import { DeletePair } from './delete-pair'

export const EditForm = () => {
  const ref = useRef<HTMLInputElement>(null)

  const processAddress = () => {
    const element = ref.current

    if (!element) return
    const value = element.value.trim()

    if (value.length === 0) {
      toast.error('Введите адрес')

      return
    }

    if (!isValidSolanaAddress(value)) {
      toast.error('Не валидный адрес')

      return
    }

    return value
  }

  const handleAdd = () => {
    const address = processAddress()

    if (!address) return

    if (ref.current) ref.current.value = ''
    toast.success('Пара добавлена')
  }

  const handleDelete = (close: () => void) => {
    const address = processAddress()

    if (!address) return

    if (ref.current) ref.current.value = ''
    toast.success('Пара удалена')
    close()
  }

  const handleOpenDeleteModal = (open: () => void) => {
    const address = processAddress()

    if (!address) return

    open()
  }

  return (
    <Paper className='p-4'>
      <div className='flex items-end gap-5 max600:flex-col'>
        <CustomTextField ref={ref} className='max-w-[550px] w-full' label='Адрес пары' placeholder='Hi4uKaAIsa2s1Js3sA...' />
        <div className='flex items-center gap-5 max600:flex-col max600:w-full'>
          <Divider orientation='vertical' flexItem className='max600:hidden' />
          <Divider orientation='horizontal' flexItem className='max600:block hidden' />
          <Button className='max600:w-full' onClick={handleAdd} color='success' variant='contained'>
            Добавить
          </Button>
          <DeletePair handleOpen={handleOpenDeleteModal} handleSubmit={handleDelete} />
        </div>
      </div>
    </Paper>
  )
}
