import { Button, Paper } from '@mui/material'

import { BlockModal } from '../UsersTable/BlockModal'
import { DeleteModal } from '../UsersTable/DeleteModal'
import { UnblockModal } from '../UsersTable/UnblockModal'
import { ReturnModal } from '../UsersTable/ReturnModal'
import { MakeAdvertisementAccount } from './MakeAdvertisementAccount'
import { ChangePartnerTariff } from './change-partner-tariff'
import type { User } from '@/api/endpoints/users/users-types'

interface IProps {
  isBlockedForever: boolean
  isDelete: boolean
  userId: string
  userData?: User
}

export const Actions = ({ isBlockedForever, isDelete, userId, userData }: IProps) => {
  return (
    <>
      <Paper className='p-4 flex flex-wrap gap-4'>
        <MakeAdvertisementAccount />
        {userData && <ChangePartnerTariff {...userData} />}
        {isBlockedForever ? (
          <UnblockModal uId={userId}>
            {({ openModal }) => (
              <Button color='success' variant='outlined' className='max700:w-full' onClick={openModal}>
                Разблокировать аккаунт
              </Button>
            )}
          </UnblockModal>
        ) : (
          <BlockModal uId={userId}>
            {({ openModal }) => (
              <Button color='error' variant='outlined' className='max700:w-full' onClick={openModal}>
                Деактивировать аккаунт
              </Button>
            )}
          </BlockModal>
        )}
        {isDelete ? (
          <ReturnModal uid={userId}>
            {({ openModal }) => (
              <Button color='success' variant='outlined' className='max700:w-full' onClick={openModal}>
                Восстановить аккаунт
              </Button>
            )}
          </ReturnModal>
        ) : (
          <DeleteModal uid={userId}>
            {({ openModal }) => (
              <Button color='error' variant='outlined' className='max700:w-full' onClick={openModal}>
                Удалить аккаунт
              </Button>
            )}
          </DeleteModal>
        )}
      </Paper>
    </>
  )
}
