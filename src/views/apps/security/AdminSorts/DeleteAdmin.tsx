'use client'

import { Button, Stack, Typography } from '@mui/material'

import { toast } from 'react-toastify'

import ModalButton from '@/components/ModalButton'

import { useDeleteAdminMutation } from '@/api/endpoints/admins/admins'

import { useSecurityContext } from '../Admins/security-provider'

export const DeleteAdmin = () => {
  const { selectedAdmins, setSelectedAdmins } = useSecurityContext()
  const [deleteAdmins] = useDeleteAdminMutation()
  const ids = selectedAdmins.map(({ id }) => id)

  const isSingle = ids.length === 1

  const handleDeleteAdmins = async (close: () => void) => {
    await toast.promise(deleteAdmins({ ids }).unwrap(), {
      pending: `Удаление ${isSingle ? 'администратора' : `администраторов`}...`,
      success: {
        render: () => {
          close()

          setSelectedAdmins([])

          return `${isSingle ? 'Администратор' : `Администраторы`} успешно ${isSingle ? 'удален' : `удалены`}`
        }
      },
      error: `Ошибка при удалении ${isSingle ? 'администратора' : `администраторов`}`
    })
    close()
  }

  return (
    <ModalButton
      title={`Удаление ${isSingle ? 'администратора' : `администраторов`}`}
      maxWidth='xs'
      fullWidth
      openButton={({ openModal }) => (
        <Button
          disabled={selectedAdmins.length === 0}
          onClick={openModal}
          variant='outlined'
          color='error'
          className='max800:w-full'
        >
          Удалить
        </Button>
      )}
      modalContent={({ closeModal }) => (
        <Stack direction='column' spacing={3}>
          <div className='flex w-full justify-center'>
            <img
              className='w-[72px] h-[72px] block mx-auto'
              width={72}
              height={72}
              src='/images/icons/reject.svg'
              alt='Close'
            />
          </div>
          <Typography>
            Вы уверены что хотите удалить{' '}
            {Array.isArray(selectedAdmins) && selectedAdmins.length > 1 ? 'администраторов' : 'администратора'}?
          </Typography>
          <div className='input_wrap_main_text'>
            Выбранные админы:
            {Array.isArray(selectedAdmins) ? (
              selectedAdmins?.map(({ login }) => (
                <div key={login} style={{ marginLeft: '5px' }}>
                  - {login}
                </div>
              ))
            ) : (
              <div style={{ marginLeft: '5px' }}>- {selectedAdmins}</div>
            )}
          </div>

          <div className='flex items-center gap-3 max600:flex-col'>
            <Button onClick={closeModal} type='button' variant='outlined' color='secondary' className='w-full'>
              Назад
            </Button>
            <Button onClick={() => handleDeleteAdmins(closeModal)} variant='contained' color='error' className='w-full'>
              Удалить
            </Button>
          </div>
        </Stack>
      )}
    />
  )
}
