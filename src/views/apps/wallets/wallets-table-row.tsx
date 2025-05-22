import type { IWallet } from '@/api/endpoints/wallets/wallets'

export const WalletsTableRow = ({ publicKey, balance }: IWallet) => {
  return (
    <tr>
      <td>{publicKey}</td>
      <td>{balance} SOL</td>
    </tr>
  )
}
