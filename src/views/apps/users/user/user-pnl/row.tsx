import { calcDate } from '@/utils/calcDate'
import { determineBalance } from '@/utils/determineBalance'
import { formatCurrency } from '@/utils/formatCurrency'
import { shortIdTooltip } from '@/utils/shortIdTooltip'
import type { ITrade } from '@/api/endpoints/users/users-types'

import { DeleteTrade } from './delete-trade'
import { ChangeOrder } from './change-order'
import { SharePnl } from '@/views/share-pnl'

type Props = ITrade & { pair: { wwSignature: string } }

export const Row = (trade: Props) => {
  return (
    <>
      <tr>
        <td>{shortIdTooltip(trade.id)}</td>
        <td>{trade.pair.wwSignature}/USDT</td>
        <td>${formatCurrency(Number(trade.openPrice))}</td>
        <td>${formatCurrency(Number(trade.closingPrice))}</td>
        <td>{trade.tradeType}</td>
        <td>{trade.tradeStatus}</td>
        <td>{calcDate(trade.openTime)}</td>
        <td>{trade.isDemo ? 'D' : 'R'}</td>
        <td>{calcDate(trade.closingTime)}</td>
        <td className='text-success'>
          <div className='flex items-center justify-center gap-2'>
            <span>{determineBalance(trade.PnLStatistics.pnl)}</span>
            <SharePnl reflink={'https://fake-link.com'} />
          </div>
        </td>
        <td className='flex items-center gap-3'>
          <DeleteTrade tradeId={trade.id} />
          <ChangeOrder trade={trade} />
        </td>
      </tr>
    </>
  )
}
