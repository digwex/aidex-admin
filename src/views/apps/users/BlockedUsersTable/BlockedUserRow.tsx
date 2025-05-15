import Link from 'next/link'

import { Button } from '@mui/material'

import { determineBalance } from '@/utils/determineBalance'
import { HandledFlag } from '@/utils/HandledFlag'

import { UnblockModal } from './UnblockModal'
import type { User } from '@/api/endpoints/users/users-types'
import { DeleteModal } from '../UsersTable/DeleteModal'

type Props = User

export const BlockedUserRow = (props: Props) => {
  const user = props

  return (
    <>
      <tr>
        <td>
          <Link href={`/users/${user.nId}`}>
            <HandledFlag className='w-5' flag={user.CountryCode} />
            <span>{user.nId}</span>
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
          <div className='flex h-full w-full justify-center items-center gap-4'>
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
            <DeleteModal uid={user.id} />
            <UnblockModal uId={user.id} nId={user.nId} />
          </div>
        </td>
      </tr>
    </>
  )
}
