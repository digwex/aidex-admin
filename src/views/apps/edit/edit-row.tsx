import cn from 'classnames'

import { toast } from 'react-toastify'

import { PRICE_CHANGE_TIME } from '@/api/endpoints/trending'
import { ChainIcon, chainIcons } from '@/views/chain-icon'
import { DexIcon, dexIcons } from '@/views/dex-icon'
import { PairIcon } from '@/views/pair-icon'
import { formatLargeNumber } from '@/utils/format-large-number'
import { formatPairPrice } from '@/utils/format-pair-price'
import { timestampToReadableText } from '@/utils/timestamp-to-readable-text'
import { DeletePair } from './delete-pair'
import { isValidSolanaAddress } from '@/utils/is-valid-solana-address'

const getConvertLastTime = (time?: string): PRICE_CHANGE_TIME => {
  switch (time) {
    case '5m':
      return PRICE_CHANGE_TIME.m5
    case '1h':
      return PRICE_CHANGE_TIME.h1
    case '6h':
      return PRICE_CHANGE_TIME.h6
    case '24h':
      return PRICE_CHANGE_TIME.h24
    default:
      return PRICE_CHANGE_TIME.m5
  }
}

const getColor = (val: number | undefined) => {
  if (val === undefined) return 'text-[var(--mui-palette-secondary-main)]'

  if (val > 0) return 'text-success'

  return 'text-error'
}

export const EditRow = (props: any) => {
  const Symbol = () => {
    const symbol = props?.baseToken?.symbol || props.symbol
    const sybSymbol = props?.quoteToken?.symbol
    const name = props?.baseToken?.name

    if (!symbol || !sybSymbol)
      return (
        <div className='text-left'>
          <div className='flex '>
            <p>{symbol || 'N/A'}</p>
            <span>/{sybSymbol || 'N/A'}</span>
          </div>
          <p className='whitespace-nowrap font-light '>{name}</p>
        </div>
      )

    return (
      <a target='_blank' className='text-left' href={`https://apedex.ai/trade/solana/${props.pairAddress}`}>
        <div className='flex'>
          <p>{symbol || 'N/A'}</p>
          <span>/{sybSymbol || 'N/A'}</span>
        </div>
        <p className='whitespace-nowrap  font-light'>{name}</p>
      </a>
    )
  }

  const lastTime = getConvertLastTime(PRICE_CHANGE_TIME.m5)

  const txns = Number(props.txns[lastTime].buys) + Number(props.txns[lastTime].sells)

  const volume = props.volume[lastTime]

  const handleDelete = (close: () => void) => {
    const address = props.pairAddress

    if (!isValidSolanaAddress(address)) {
      toast.error('Не валидный адрес')

      return
    }

    toast.success('Пара удалена')
    close()
  }

  return (
    <tr>
      <td>
        <div className={cn('flex items-center gap-2 pl-4')}>
          <p className='mr-2 w-5'>#{props.index}</p>
          <div className='flex w-full'>
            <div className='justify-left flex items-center gap-1.5 px-2 mw1450:px-10 mw1200:px-8 mw1024:px-6 mw900:px-4 mw768:px-0'>
              <ChainIcon className='h-6 w-6 min-w-6' src={chainIcons[props.chainId as keyof typeof chainIcons]} />
              <DexIcon className='h-6 w-6 min-w-6' src={dexIcons[props.dexId as keyof typeof dexIcons]} />
              <PairIcon
                className='h-9 w-9 min-w-9 rounded-full'
                letterClassName='text-[10px]'
                src={props.info?.imageUrl}
                name={props?.baseToken?.symbol || props.symbol || 'N/A'}
              />
              <div>
                <div className='mb-1 flex font-medium'>{Symbol()}</div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <DeletePair handleSubmit={handleDelete} />
      </td>

      <td data-is-na={!props.mcap || !props.marketCap}>
        <div className='flex flex-col items-center justify-center gap-0.5'>
          <p>{props.mcap || props.marketCap ? `$${formatLargeNumber(props.mcap || props.marketCap || 0)}` : 'N/A'}</p>
          {/* <span>$0.00932</span> */}
        </div>
      </td>
      <td data-is-na={!props.priceUsd}>
        <div className='grid place-items-center'>
          <p>
            {props.priceUsd && '$'}
            {props.priceUsd ? formatPairPrice(String(props.priceUsd)) : 'N/A'}
          </p>
        </div>
      </td>
      <td data-is-na={!props.creationTime}>
        <div className='grid place-content-center text-center '>
          {(props.creationTime ?? props.pairCreatedAt)
            ? timestampToReadableText(new Date(props.creationTime ?? props.pairCreatedAt).getTime())
            : 'N/A'}
        </div>
      </td>
      <td data-is-na={!txns}>
        <div className='grid place-items-center'>{formatPairPrice(txns ? String(txns) : 'N/A')}</div>
      </td>
      <td data-is-na={!volume}>
        <div className='grid place-items-center'>{formatPairPrice(volume ? '$' + String(volume) : 'N/A')}</div>
      </td>
      <td data-is-na={!props?.priceChange?.m5}>
        <div className={cn('grid place-items-center', getColor(props.priceChange?.m5))}>
          {props?.priceChange?.m5 ? formatLargeNumber(props.priceChange.m5) + '%' : 'N/A'}
        </div>
      </td>
      <td data-is-na={!props?.priceChange?.h1}>
        <div className={cn('grid place-items-center', getColor(props.priceChange?.h1))}>
          {props?.priceChange?.h1 ? formatLargeNumber(props.priceChange.h1) + '%' : 'N/A'}
        </div>
      </td>
      <td data-is-na={!props?.priceChange?.h6}>
        <div className={cn('grid place-items-center', getColor(props.priceChange?.h6))}>
          {props?.priceChange?.h6 ? formatLargeNumber(props.priceChange.h6) + '%' : 'N/A'}
        </div>
      </td>
      <td data-is-na={!props?.priceChange?.h24}>
        <div className={cn('grid place-items-center', getColor(props.priceChange?.h24))}>
          {props?.priceChange?.h24 ? formatLargeNumber(props.priceChange.h24) + '%' : 'N/A'}
        </div>
      </td>
      <td data-is-na={!props?.liquidity?.usd}>
        <div className={cn('flex flex-col items-center justify-center gap-1 pl-4')}>
          <div className='flex items-center gap-2'>
            <p>
              {formatPairPrice(props?.liquidity?.usd ? '$' + String(formatLargeNumber(props.liquidity.usd)) : 'N/A')}
            </p>
          </div>
        </div>
      </td>
    </tr>
  )
}
