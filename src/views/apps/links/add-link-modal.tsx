import { yupResolver } from '@hookform/resolvers/yup'

import { useForm } from 'react-hook-form'

import * as yup from 'yup'

import { Button, Divider, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import { Error } from '@/components/Error'

import ModalButton from '@/components/ModalButton'

import CustomTextField from '@/@core/components/mui/TextField'

import { handleRTKError } from '@/utils/handleRTKError'
import { useAddLinkMutation } from '@/api/endpoints/links'

interface FormSchema {
  name: string
}

const schema = yup.object().shape({
  name: yup.string().min(4, 'Имя должно содержать не менее 4 символов')
})

export const AddLinkModal = () => {
  const [mutate, { isLoading }] = useAddLinkMutation()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormSchema>({
    // @ts-expect-error type
    resolver: yupResolver(schema)
  })

  const handleAdd = (close: () => void) => async (data: FormSchema) => {
    if (isLoading) {
      return
    }

    try {
      await mutate({ name: data.name }).unwrap()
      toast.success('Ссылка успешно создана')
      close()
    } catch (e) {
      console.log(`Error add link: ${e}`)
      toast.error((handleRTKError(e), 'Не удалось создать ссылку'))
    }
  }

  return (
    <ModalButton
      fullWidth
      maxWidth='xs'
      openButton={({ openModal }) => (
        <Button className='max800:w-full' variant='contained' color='success' onClick={openModal}>
          Добавить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <>
          <Typography variant='h5' className='text-center mb-7  text-2xl font-bold'>
            Создание ссылки
          </Typography>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleAdd(closeModal))}>
            <CustomTextField {...register('name')} label='Название' />
            <Error error={errors?.name} />

            <Divider />

            <div className='flex gap-3 max600:flex-col'>
              <Button
                fullWidth
                type='button'
                onClick={() => {
                  if (isLoading) return
                  closeModal()
                }}
                color='primary'
                variant='outlined'
              >
                Назад
              </Button>
              <Button fullWidth type='submit' variant='contained' color='success'>
                Добавить
              </Button>
            </div>
          </form>
        </>
      )}
    />
  )
}
