import Link from 'next/link'

import type { IWallet } from '@/api/endpoints/wallets/wallets'
import { CopyButton } from '@/hooks/useCopy'

export const WalletsTableRow = ({ publicKey, balance, openedTrades, pnl, nId, tgUsername, winRate }: IWallet) => {
  return (
    <tr>
      <td className='text-left w-[220px]'>
        <div className='flex items-center gap-2'>
          <CopyButton text={publicKey} />
          <a
            target='_blank'
            className='transition-all truncate block w-full duration-300 hover:text-primary'
            href={`https://solscan.io/account/${publicKey}`}
          >
            {publicKey}
          </a>
        </div>
      </td>

      <td>
        <Link className='transition-all duration-300 hover:text-primary' href={`/users/${nId}`}>
          {nId}
        </Link>
      </td>
      <td>
        <a
          target='_blank'
          className='transition-all  duration-300 hover:text-primary'
          rel='noreferrer'
          href={`https://t.me/${tgUsername}`}
        >
          {tgUsername}
        </a>
      </td>
      <td className='whitespace-nowrap'>{balance} SOL</td>
      <td>{openedTrades}</td>
      <td>{pnl}%</td>
      <td>
        <div className='flex items-center gap-3 justify-center'>
          <p className='text-success'>W: {winRate.positive}%</p>
          <p className='text-error'>L: {winRate.negative}%</p>
          <p className='text-warning'>B: {winRate.zero}%</p>
        </div>
      </td>
    </tr>
  )
}
