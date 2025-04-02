'use client'

import Link from 'next/link'

import { useParams } from 'next/navigation'

import { Button } from '@mui/material'

import { type User } from '../../../../api/endpoints/users/users-types'

import { ACTION_ACCESS } from '@/utils/accessActions'

import { HandledFlag } from '@/utils/HandledFlag'
import { determineBalance } from '@/utils/determineBalance'

import { useCheckAccess } from '@/hooks/useCheckAccess'
import { BlockModal } from './BlockModal'
import { UnblockModal } from './UnblockModal'
import { DeleteModal } from './DeleteModal'

type Props = User & { updateTable: () => void }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserRow = ({ updateTable, ...user }: Props) => {
  const { checkAction } = useCheckAccess()
  const { lang } = useParams()

  const accessAnyAction = checkAction(ACTION_ACCESS.ANY_ACTION_USER)

  return (
    <>
      <tr>
        <td>
          <Link href={`/${lang}/users/${user.nId}`}>
            <HandledFlag className='w-5' flag={user.CountryCode} />
            <span className='color_green td_active'>{user.nId}</span>
          </Link>
        </td>
        <td>{determineBalance(user.balance)}</td>

        <td>
          {user.isActive ? (
            <img className='w-4' src='/img/success.svg' alt='' />
          ) : (
            <img className='w-4' src='/img/no.svg' alt='' />
          )}
        </td>

        <td>{user.registrationIp ?? '-'}</td>
        <td>
          {accessAnyAction ? (
            <div className='flex items-center justify-center gap-3'>
              <Link href={`${user.nId}`}>
                <Button variant='outlined' color='secondary'>
                  Больше
                </Button>
              </Link>
              <Link href={`${user.nId}`}>
                <Button variant='outlined' color='warning'>
                  Торговля
                </Button>
              </Link>
              <Link href={`${user.nId}`}>
                <Button variant='outlined' color='success'>
                  Изменить
                </Button>
              </Link>
              {user.isBlockedForever ? (
                <UnblockModal />
              ) : (
                <>
                  <DeleteModal uid={String(user.nId)} />
                  <BlockModal />
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
