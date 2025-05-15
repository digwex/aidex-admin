import type { UserTransaction } from '@/api/endpoints/user/user-types'
import CopyHash from '@/utils/CopyHash'

type Props = UserTransaction

export const TransactionDetails = ({ additionalData, wallet, coin, note }: Props) => {
  return (
    <tr className='transaction_active'>
      <td>
        <div className='transaction_active_column'>
          <p>Адрес</p>
          <CopyHash hash={additionalData?.request?.address ?? wallet} />
        </div>
      </td>
      <td />
      <td>
        {coin.type === 'P2P' ? (
          <div className='transaction_active_column'>
            <p>ID</p>
            <span>{additionalData.id ?? '-'}</span>
          </div>
        ) : (
          <div className='transaction_active_column'>
            <p>TXID</p>
            <CopyHash
              hash={additionalData?.request?.blockchain_hash ?? additionalData?.blockchain_hash}
              network={coin.network ?? coin.symbol}
            />
          </div>
        )}
      </td>
      <td />
      <td />
      <td>
        <div className='transaction_active_column'>
          <p>Примечание</p>
          <div className='transaction_active_row'>
            <span>{note ?? '-'}</span>
          </div>
        </div>
      </td>
      <td />
    </tr>
  )
}
