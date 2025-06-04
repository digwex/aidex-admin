import Link from 'next/link'

import type { IWallet } from '@/api/endpoints/wallets/wallets'
import { CopyButton } from '@/hooks/useCopy'

export const WalletsTableRow = ({ publicKey, balance, userId, telegram, trades }: IWallet) => {
  return (
    <tr>
      <td className='text-left max-w-[200px]'>
        <div className='flex items-center gap-2'>
          <CopyButton text={publicKey} />
          <a
            target='_blank'
            className='transition-all duration-300 hover:text-primary'
            href={`https://solscan.io/account/${publicKey}`}
          >
            {publicKey}
          </a>
        </div>
      </td>

      <td>
        {userId ? (
          <Link className='transition-all duration-300 hover:text-primary' href={`/users/${userId}`}>
            {userId}
          </Link>
        ) : (
          '-'
        )}
      </td>
      <td>
        {telegram ? (
          <a
            target='_blank'
            className='transition-all  duration-300 hover:text-primary'
            rel='noreferrer'
            href={`https://t.me/${telegram}`}
          >
            {telegram}
          </a>
        ) : (
          '-'
        )}
      </td>
      <td className='whitespace-nowrap'>{balance} SOL</td>
      <td>{trades ?? '0'}</td>
    </tr>
  )
}
