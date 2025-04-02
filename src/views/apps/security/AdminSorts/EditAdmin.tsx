'use client'

import { useState } from 'react'

import { Button, Stack, MenuItem } from '@mui/material'

import { toast } from 'react-toastify'

import CustomTextField from '@/@core/components/mui/TextField'
import ModalButton from '@/components/ModalButton'

import { useEditAccessLevelMutation } from '@/api/endpoints/admins/admins'

import { useSecurityContext } from '../Admins/security-provider'

export const EditAdmin = () => {
  const [editAccessLevel] = useEditAccessLevelMutation()
  const { selectedAdmins, setSelectedAdmins } = useSecurityContext()
  const [accessLevel, setAccessLevel] = useState('5 уровень')

  const handleEditAccessLevel = async (close: () => void) => {
    const ids = selectedAdmins.map(admin => admin.id)

    void toast.promise(
      editAccessLevel({
        ids,
        accessLevel: `LEVEL_${accessLevel.split(' ')[0]}`
      }).unwrap(),
      {
        pending: 'Изменение прав...',
        success: 'Права успешно изменены',
        error: 'Ошибка при изменении прав'
      }
    )

    setSelectedAdmins([])
    close()
  }

  return (
    <ModalButton
      title='Изменить права'
      maxWidth='xs'
      fullWidth
      openButton={({ openModal }) => (
        <Button
          disabled={selectedAdmins.length === 0}
          onClick={openModal}
          variant='outlined'
          color='warning'
          className='max800:w-full'
        >
          Изменить права
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <Stack direction='column' spacing={3}>
          <CustomTextField
            onChange={e => setAccessLevel(e.target.value)}
            select
            value={accessLevel}
            fullWidth
            label='Уровень'
          >
            {['5 уровень', '4 уровень', '3 уровень', '2 уровень', '1 уровень'].map(role => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </CustomTextField>

          <div className='flex items-center gap-3 max600:flex-col'>
            <Button onClick={closeModal} type='button' variant='outlined' color='secondary' className='w-full'>
              Назад
            </Button>
            <Button
              onClick={() => {
                handleEditAccessLevel(closeModal)
              }}
              variant='contained'
              color='success'
              className='w-full'
            >
              Сохранить
            </Button>
          </div>
        </Stack>
      )}
    />
  )
}
