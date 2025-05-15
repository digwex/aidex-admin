import { useState } from 'react'

interface Props {
  hash: string | undefined | null
  network?: string | undefined | null
}

const needNetwork = [
  'BEP-20',
  'TRC-20',
  'ERC-20',
  'BEP',
  'ERC',
  'TRC',
  'TON',
  'ETH',
  'BCH',
  'ETC',
  'XRP',
  'LTC',
  'ADA',
  'DASH',
  'DOGE',
  'XMR',
  'TON',
  'XTZ',
  'XLM',
  'EOS',
  'BTG',
  'TRX',
  'BEP-2',
  'ZEC',
  'SOL'
]

const CopyHash = ({ hash, network }: Props) => {
  const [isCopied, setIsCopied] = useState(false)

  if (!hash?.trim().length) {
    return '-'
  }

  const isHasNetwork = network && needNetwork.includes(network)

  const handleClick = () => {
    switch (network) {
      case 'BEP-20':
        return `https://bscscan.com/tx/${hash}`
      case 'TRC-20':
        return `https://tronscan.org/#/transaction/${hash}`
      case 'ERC-20':
        return `https://etherscan.io/tx/${hash}`
      case 'ERC':
        return `https://etherscan.io/tx/${hash}`
      case 'ETH':
        return `https://etherscan.io/tx/${hash}`
      case 'BEP':
        return `https://bscscan.com/tx/${hash}`
      case 'BCH':
        return `https://bscscan.com/tx/${hash}`
      case 'ETC':
        return `https://bscscan.com/tx/${hash}`
      case 'XRP':
        return `https://bscscan.com/tx/${hash}`
      case 'LTC':
        return `https://bscscan.com/tx/${hash}`
      case 'ADA':
        return `https://bscscan.com/tx/${hash}`
      case 'DASH':
        return `https://tonscan.org/tx/${hash}`
      case 'DOGE':
        return `https://tonscan.org/tx/${hash}`
      case 'XMR':
        return `https://tonscan.org/tx/${hash}`
      case 'TON':
        return `https://tonscan.org/tx/${hash}`
      case 'XTZ':
        return `https://bscscan.com/tx/${hash}`
      case 'XLM':
        return `https://bscscan.com/tx/${hash}`
      case 'TRX':
        return `https://tonscan.org/tx/${hash}`
      case 'BEP-2':
        return `https://bscscan.com/tx/${hash}`
      case 'EOS':
        return `https://tronscan.org/#/transaction/${hash}`
      case 'BTG':
        return `https://tronscan.org/#/transaction/${hash}`
      case 'ZEC':
        return `https://tronscan.org/#/transaction/${hash}`
      case 'SOL':
        return `https://tronscan.org/#/transaction/${hash}`
      case 'TRC':
        return `https://tronscan.org/#/transaction/${hash}`
      default:
        return ``
    }
  }

  const handleCopy = async () => {
    if (!isCopied) {
      if (navigator) await navigator.clipboard.writeText(hash)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(prev => !prev)
      }, 1000)
    }
  }

  return (
    <div className='td_tx_row'>
      {isHasNetwork ? (
        <a href={handleClick?.()} className='color_blue' target='_blank' rel='noreferrer'>
          {String(hash).slice(0, 8)}
        </a>
      ) : (
        <span style={{ fontSize: '14px' }} className='color_blue'>
          {String(hash).slice(0, 8)}
        </span>
      )}
      {isCopied ? (
        <img src='/img/success.svg' alt='Success' />
      ) : (
        <img style={{ cursor: 'pointer' }} src='/img/copy.svg' alt='Copy' onClick={handleCopy} />
      )}
    </div>
  )
}

export default CopyHash
