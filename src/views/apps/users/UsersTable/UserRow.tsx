import { Button } from '@mui/material'

import cn from 'classnames'

import { Link } from 'react-router'

import { type User } from '../../../../api/endpoints/users/users-types'

import { ACTION_ACCESS } from '@/utils/accessActions'

import { useCheckAccess } from '@/hooks/useCheckAccess'
import { capitalize } from '@/utils/capitalize'
import { BlockModal } from './BlockModal'
import { DeleteModal } from './DeleteModal'
import { UnblockModal } from './UnblockModal'
import { WalletsInfo } from './wallets-info'

type Props = User & {
  updateTable: () => void
  referralsCount: number
  subReferralsCount: number
  openedTrades: number
  commissions: number
  referralLevel?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserRow = ({ updateTable, ...user }: Props) => {
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
        <td>
          {user.referrerId ? (
            <Link
              className={cn('transition-all duration-300 hover:text-primary', {
                'pointer-events-none': !checkAction(ACTION_ACCESS.VIEW_USER_DETAIL)
              })}
              to={`/users/${user.referrerId}`}
            >
              <span className='color_green td_active'>{user.referrerId}</span>
            </Link>
          ) : (
            '-'
          )}
        </td>
        <td>{user.referralsCount}</td>
        <td>{user.subReferralsCount}</td>
        <td>
          <a
            target='_blank'
            className='transition-all duration-300 hover:text-primary'
            href={`https://t.me/${user.tgUsername}`}
          >
            {user.tgUsername}
          </a>
        </td>
        <td>{user.openedTrades}</td>
        <td>{user.balance}</td>
        <td>{user.commissions}</td>
        <td>{capitalize(user.referralLevel)}</td>
        <td>
          <WalletsInfo wallets={user.wallets} />
        </td>

        <td>
          <div className='flex items-center justify-center gap-3'>
            <Link
              className={cn('transition-all duration-300 hover:text-primary', {
                'pointer-events-none': !checkAction(ACTION_ACCESS.VIEW_USER_DETAIL)
              })}
              to={`/users/${user.nId}`}
            >
              <Button variant='outlined' color='secondary'>
                Больше
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
                <DeleteModal uid={user.id}>
                  {({ openModal }) => (
                    <Button onClick={openModal} variant='outlined' color='error'>
                      Удалить
                    </Button>
                  )}
                </DeleteModal>
                <BlockModal uId={user.id}>
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
        </td>
      </tr>
    </>
  )
}
