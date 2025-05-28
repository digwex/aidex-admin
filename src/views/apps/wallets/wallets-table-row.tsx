import type { IWallet } from '@/api/endpoints/wallets/wallets'
import { CopyButton } from '@/hooks/useCopy'

export const WalletsTableRow = ({ publicKey, balance }: IWallet) => {
  return (
    <tr>
      <td className='text-left'>
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
      <td className='text-left whitespace-nowrap'>{balance} SOL</td>
    </tr>
  )
}
