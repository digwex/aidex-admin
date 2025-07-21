import { Button } from '@mui/material'

import cn from 'classnames'

import { Link } from 'react-router'

import type { User } from '@/api/endpoints/users/users-types'

import { UnblockModal } from './UnblockModal'
import { useCheckAccess } from '@/hooks/useCheckAccess'
import { ACTION_ACCESS } from '@/utils/accessActions'
import { WalletsInfo } from '../UsersTable/wallets-info'

type Props = User & { referralsCount: number }

export const BlockedUserRow = (props: Props) => {
  const user = props
  const { checkAction } = useCheckAccess()

  return (
    <>
      <tr>
        <td>
          <Link
            className={cn('transition-all duration-300 hover:text-primary', {
              'pointer-events-none': !checkAction(ACTION_ACCESS.VIEW_USER_DETAIL)
            })}
            to={`/users/${user.nId}`}
          >
            <span className='color_green td_active'>{user.nId}</span>
          </Link>
        </td>
        <td>
          <a
            target='_blank'
            className='transition-all duration-300 hover:text-primary'
            href={`https://t.me/${user.tgUsername}`}
          >
            {user.telegramId}
          </a>
        </td>
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
        <td>
          <div className='flex h-full w-full justify-center items-center gap-4'>
            <Link
              className={cn({
                'pointer-events-none': !checkAction(ACTION_ACCESS.VIEW_USER_DETAIL)
              })}
              to={`${user.nId}`}
            >
              <Button variant='outlined' color='secondary'>
                Больше
              </Button>
            </Link>

            <UnblockModal uId={user.id} nId={user.nId} />
          </div>
        </td>
      </tr>
    </>
  )
}
