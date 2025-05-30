import { yupResolver } from '@hookform/resolvers/yup'

import { Controller, useForm } from 'react-hook-form'

import * as yup from 'yup'

import { Button, Divider, MenuItem, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import { Error } from '@/components/Error'

import ModalButton from '@/components/ModalButton'

import CustomTextField from '@/@core/components/mui/TextField'

import { useCreateReferralLinkMutation } from '@/api/endpoints/referrals/referrals-api'

const DOMAINS = [
  { label: '@ApeDex_bot', value: 'ApeDex_bot' },
  { label: '@DexTrade', value: 'dextrade' }
]

interface FormSchema {
  name: string
  domain: string
  telegramId: string
  tgUsername: string
}

const schema = yup.object({
  name: yup.string().min(4, 'Имя должно содержать не менее 4 символов')
})

export const AddLinkModal = () => {
  const [mutate, { isLoading }] = useCreateReferralLinkMutation()

  const {
    register,
    formState: { errors },
    control,
    handleSubmit
  } = useForm<FormSchema>({
    defaultValues: {
      name: '',
      telegramId: '',
      tgUsername: '',
      domain: DOMAINS[0].value
    },

    // @ts-expect-error fix
    resolver: yupResolver(schema)
  })

  const handleAdd = (close: () => void) => async (data: FormSchema) => {
    if (isLoading) {
      return
    }

    const body = {
      code: data.name,
      link: `https://t.me/${data.domain}?start=ref-${data.name}`,
      telegramId: data.telegramId.length > 0 ? +data.telegramId : undefined,
      tgUsername: data.tgUsername
    }

    if (data.telegramId.length === 0 && data.tgUsername.length === 0) {
      toast.error('Введите Telegram ID или Telegram username')

      return
    }

    const toastId = toast.loading('Создание ссылки...')

    try {
      await mutate(body).unwrap()
      toast.update(toastId, {
        render: 'Ссылка успешно создана',
        type: 'success',
        isLoading: false,
        delay: 3000
      })
      close()
    } catch (e) {
      console.log(`Error add link: ${e}`)
      toast.update(toastId, {
        render: 'Не удалось создать ссылку',
        type: 'error',
        isLoading: false,
        delay: 3000
      })
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
            <Controller
              name='domain'
              control={control}
              render={({ field: { value, onChange } }) => (
                <CustomTextField
                  label='Бот'
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  className='max700:w-full [&>div>i]:right-[6px]'
                  select
                >
                  {DOMAINS.map(domain => (
                    <MenuItem key={domain.value} value={domain.value}>
                      {domain.label}
                    </MenuItem>
                  ))}
                </CustomTextField>
              )}
            />
            <CustomTextField {...register('name')} label='Название' required />
            <CustomTextField {...register('telegramId')} label='Telegram ID' />
            <CustomTextField {...register('tgUsername')} label='Telegram Username' />

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
