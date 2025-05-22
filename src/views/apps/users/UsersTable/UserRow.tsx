'use client'

import Link from 'next/link'

import { Button } from '@mui/material'

import { type User } from '../../../../api/endpoints/users/users-types'

import { ACTION_ACCESS } from '@/utils/accessActions'

import { HandledFlag } from '@/utils/HandledFlag'
import { determineBalance } from '@/utils/determineBalance'

import { useCheckAccess } from '@/hooks/useCheckAccess'
import { BlockModal } from './BlockModal'
import { DeleteModal } from './DeleteModal'
import { UnblockModal } from './UnblockModal'

type Props = User & { updateTable: () => void }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserRow = ({ updateTable, ...user }: Props) => {
  const { checkAction } = useCheckAccess()

  console.debug('user', user)

  const accessAnyAction = checkAction(ACTION_ACCESS.ANY_ACTION_USER)

  return (
    <>
      <tr>
        <td>
          <Link href={`/users/${user.nId}`}>
            <HandledFlag className='w-5' flag={user.CountryCode} />
            <span className='color_green td_active'>{user.nId}</span>
          </Link>
        </td>
        <td>{determineBalance(user.balance)}</td>

        <td>
          {user.isActive ? (
            <img className='w-4 h-4' src='/images/icons/success.svg' alt='' />
          ) : (
            <img className='w-4 h-4' src='/images/icons/cancelled.svg' alt='' />
          )}
        </td>

        <td>{user.registrationIp ?? '-'}</td>
        <td>
          {accessAnyAction ? (
            <div className='flex items-center justify-center gap-3'>
              <Link href={`/users/${user.nId}`}>
                <Button variant='outlined' color='secondary'>
                  Больше
                </Button>
              </Link>
              <Link href={`/users/${user.nId}`}>
                <Button variant='outlined' color='warning'>
                  Торговля
                </Button>
              </Link>
              <Link href={`/users/${user.nId}`}>
                <Button variant='outlined' color='success'>
                  Изменить
                </Button>
              </Link>
              {user.isBlockedForever ? (
                <UnblockModal uId={String(user.nId)}>
                  {({ openModal }) => (
                    <Button
                      onClick={openModal}
                      className='!w-[38px] !h-[38px] !p-0 min-w-min grid place-content-center'
                      variant='contained'
                      color='success'
                    >
                      <img src='/images/icons/lock.svg' alt='unlock' />
                    </Button>
                  )}
                </UnblockModal>
              ) : (
                <>
                  <DeleteModal uid={String(user.nId)}>
                    {({ openModal }) => (
                      <Button onClick={openModal} variant='outlined' color='error'>
                        Удалить
                      </Button>
                    )}
                  </DeleteModal>
                  <BlockModal uId={String(user.nId)}>
                    {({ openModal }) => (
                      <Button
                        onClick={openModal}
                        variant='contained'
                        color='error'
                        className='!w-[38px] !h-[38px] !p-0 min-w-min grid place-content-center'
                      >
                        <img src='/images/icons/lock.svg' alt='unlock' />
                      </Button>
                    )}
                  </BlockModal>
                </>
              )}
            </div>
          ) : (
            '-'
          )}
        </td>
      </tr>
    </>
  )
}
