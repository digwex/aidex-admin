'use client'

import { Button, Stack, MenuItem } from '@mui/material'

import { toast } from 'react-toastify'

import { Controller, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import CustomTextField from '@/@core/components/mui/TextField'
import ModalButton from '@/components/ModalButton'
import type { AddAdminFormValue } from '../Admins/add-admin-form-values'
import { useCreateAdminMutation } from '@/api/endpoints/admins/admins'
import { ROLES } from '@/utils/helpers'
import { addAdminSchema } from '../Admins/addAdminSchema'
import { Error } from '@/components/Error'

export const AddAmin = () => {
  const [createAdmin] = useCreateAdminMutation()

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<AddAdminFormValue>({
    mode: 'onChange',
    defaultValues: {
      tgId: '',
      tgLogin: '',
      name: '',
      role: 'Support',
      accessLevel: '1 уровень'
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    resolver: yupResolver<AddAdminFormValue>(addAdminSchema)
  })

  const handleCreateAdmin = async (data: AddAdminFormValue) => {
    const { tgId, tgLogin, name, accessLevel } = data

    void toast.promise(
      createAdmin({
        tgId,
        tgLogin,
        name,
        role: 'ADMIN',
        accessLevel: `LEVEL_${accessLevel.split(' ')[0]}`
      }).unwrap(),
      {
        pending: 'Добавление админа...',
        success: 'Админ успешно добавлен',
        error: {
          render: ({ data }: { data: any }) => {
            if ('message' in data && data?.message.includes('already exists')) {
              return 'Такой админ уже существует'
            }

            if (typeof data?.message === 'string') {
              return data.message
            }

            return 'Ошибка при добавлении админа'
          }
        }
      }
    )
  }

  return (
    <ModalButton
      title='Добавить админа'
      maxWidth='xs'
      fullWidth
      openButton={({ openModal }) => (
        <Button onClick={openModal} variant='outlined' color='success' className='max800:w-full'>
          Добавить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <form
          onSubmit={handleSubmit(async data => {
            await handleCreateAdmin(data)
            closeModal()
          })}
        >
          <Stack direction='column' spacing={3}>
            <CustomTextField error={!!errors.tgId} {...register('tgId')} label='ID Телеграм' />
            <Error error={errors.tgId} />

            <CustomTextField {...register('tgLogin')} error={!!errors.tgLogin} label='Логин в Телеграм' />
            <Error error={errors.tgLogin} />

            <CustomTextField {...register('name')} error={!!errors.name} label='Имя' />
            <Error error={errors.name} />

            <Controller
              name='role'
              control={control}
              render={({ field }) => {
                return (
                  <CustomTextField {...field} error={!!errors.role} select fullWidth label='Роль'>
                    {ROLES.map(role => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                )
              }}
            />
            <Error error={errors.role} />
            <Controller
              name='accessLevel'
              control={control}
              render={({ field }) => {
                return (
                  <CustomTextField {...field} error={!!errors.accessLevel} select fullWidth label='Роль'>
                    {['5 уровень', '4 уровень', '3 уровень', '2 уровень', '1 уровень'].map(role => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </CustomTextField>
                )
              }}
            />
            <Error error={errors.accessLevel} />

            <div className='flex items-center gap-3 max600:flex-col'>
              <Button
                onClick={() => {
                  reset()
                  closeModal()
                }}
                type='button'
                variant='outlined'
                color='secondary'
                className='w-full'
              >
                Назад
              </Button>
              <Button type='submit' variant='contained' color='success' className='w-full'>
                Добавить
              </Button>
            </div>
          </Stack>
        </form>
      )}
    />
  )
}
