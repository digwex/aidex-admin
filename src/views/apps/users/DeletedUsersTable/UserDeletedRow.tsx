'use client'

import Link from 'next/link'

import { Button } from '@mui/material'

import cn from 'classnames'

import { type User } from '../../../../api/endpoints/users/users-types'

import { ACTION_ACCESS } from '@/utils/accessActions'

import { useCheckAccess } from '@/hooks/useCheckAccess'
import { WalletsInfo } from '../UsersTable/wallets-info'
import { ReturnModal } from '../UsersTable/ReturnModal'

type Props = User & { referralsCount: number; updateTable: () => void }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserDeletedRow = ({ updateTable, ...user }: Props) => {
  const { checkAction } = useCheckAccess()

  return (
    <>
      <tr>
        <td>
          <Link
            className={cn('transition-all duration-300 hover:text-primary', {
              'pointer-events-none': !checkAction(ACTION_ACCESS.VIEW_USER_DETAIL)
            })}
            href={`/users/${user.nId}`}
          >
            {/* <HandledFlag className='w-5' flag={user.countryCode} /> */}
            <span className='color_green td_active'>{user.nId}</span>
          </Link>
        </td>
        <td>{user.telegramId}</td>
        <td>-</td>
        <td>{user.referralsCount || '0'}</td>
        <td>-</td>
        <td>
          <a
            target='_blank'
            className='transition-all duration-300 hover:text-primary'
            href={`https://t.me/${user.tgUsername}`}
          >
            {user.tgUsername}
          </a>
        </td>
        <td>-</td>
        <td>{user.balance}</td>
        <td>-</td>
        <td>-</td>
        <td>
          <WalletsInfo wallets={user.wallets} />
        </td>

        {/* <td>
          {user.isActive ? (
            <img className='w-4 h-4' src='/images/icons/success.svg' alt='' />
          ) : (
            <img className='w-4 h-4' src='/images/icons/cancelled.svg' alt='' />
          )}
        </td> */}

        {/* <td>{user.registrationIp ?? '-'}</td> */}
        <td>
          <div className='flex items-center justify-center gap-3'>
            <Link
              className={cn('transition-all duration-300 hover:text-primary', {
                'pointer-events-none': !checkAction(ACTION_ACCESS.VIEW_USER_DETAIL)
              })}
              href={`/users/${user.nId}`}
            >
              <Button variant='outlined' color='secondary'>
                Больше
              </Button>
            </Link>

            <ReturnModal uid={user.id}>
              {({ openModal }) => (
                <Button
                  color='success'
                  variant='outlined'
                  className='max700:w-full whitespace-nowrap'
                  onClick={openModal}
                >
                  Восстановить аккаунт
                </Button>
              )}
            </ReturnModal>
          </div>
        </td>
      </tr>
    </>
  )
}
