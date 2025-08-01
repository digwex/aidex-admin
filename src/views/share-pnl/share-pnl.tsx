import { memo, useMemo } from 'react'

import { Button, IconButton } from '@mui/material'

import cn from 'classnames'

import { Clock } from 'lucide-react'

import { SharePnlInMedia } from './share-pnl-in-media'
import styles from './share-pnl.module.scss'
import { QrCode } from '../qr-code'
import { CopyButton } from '@/hooks/useCopy'
import { useDownloadElementAsImage } from '@/hooks/useDownloadElementAsImage'
import { generateRandomInteger } from '@/utils/generateRandomInteger'
import { formatCurrency } from '@/utils/formatCurrency'
import ModalButton from '@/components/ModalButton'

interface Props {
  pnl?: number
  asset?: string
  reflink: string
}

const processDecorations = (percent: number) => {
  const isLose = percent < 0

  const decorations = [
    {
      min: 0,
      max: 20,
      bg: '/images/pnl/profit-bg-1.png',
      decoration: '/images/pnl/profit-1.png'
    },
    {
      min: 20,
      max: 50,
      bg: '/images/pnl/profit-bg-2.png',
      decoration: '/images/pnl/profit-2.png'
    },
    {
      min: 50,
      max: 150,
      bg: '/images/pnl/profit-bg-3.png',
      decoration: '/images/pnl/profit-3.png'
    },
    {
      min: 150,
      max: 220,
      bg: '/images/pnl/profit-bg-4.png',
      decoration: '/images/pnl/profit-4.png'
    },
    {
      min: 220,
      max: 500,
      bg: '/images/pnl/profit-bg-5.png',
      decoration: '/images/pnl/profit-5.png'
    },
    {
      min: 500,
      max: +Infinity,
      bg: '/images/pnl/profit-bg-6.png',
      decoration: '/images/pnl/profit-6.png'
    },
    {
      min: -20,
      max: 0,
      bg: '/images/pnl/lose-bg-1.png',
      decoration: '/images/pnl/lose-1.png'
    },
    {
      min: -50,
      max: -20,
      bg: '/images/pnl/lose-bg-2.png',
      decoration: '/images/pnl/lose-2.png'
    },
    {
      min: -90,
      max: -50,
      bg: '/images/pnl/lose-bg-3.png',
      decoration: '/images/pnl/lose-3.png'
    },
    {
      min: -Infinity,
      max: -90,
      bg: '/images/pnl/lose-bg-4.png',
      decoration: '/images/pnl/lose-4.png'
    }
  ]

  const decoration = decorations.find(d => {
    if (isLose) {
      return percent >= d.min && percent < d.max
    }

    return percent > d.min && percent <= d.max
  })

  return decoration
    ? { ...decoration, color: isLose ? '#f7475d' : '#0dcb81' }
    : {
        bg: isLose ? '/img/pnl/lose-bg-1.png' : '/img/pnl/profit-bg-1.png',
        decoration: isLose ? '/img/pnl/lose-1.png' : '/img/pnl/profit-1.png',
        color: isLose ? '#f7475d' : '#0dcb81'
      }
}

export const SharePnl = memo(({ asset = 'SOL', reflink }: Props) => {
  const pnl = useMemo(() => generateRandomInteger(-600, 800), [])

  const { ref, isLoading, saveImage } = useDownloadElementAsImage<HTMLDivElement>({
    fileName: `apedex-ai-pnl-(${formatCurrency(pnl)}%)`
  })

  const text = 'New AI DEX bot — unique algorithms to find profitable coins! 🚀'

  const { bg, decoration, color } = processDecorations(pnl)

  const clipboardText =
    reflink + '\n\n' + `${asset} PNL: ${formatCurrency(pnl)}%` + '\n' + '+0.0456 SOL ≈ 1.92 USD' + '\n\n' + text

  const shareMediaText =
    '\n' + `${asset} PNL: ${formatCurrency(pnl)}%` + '\n' + '+0.0456 SOL ≈ 1.92 USD' + '\n\n' + text

  return (
    <ModalButton
      openButton={({ openModal }) => (
        <IconButton onClick={openModal} color='secondary'>
          <i className='tabler-share-3 text-success' />
        </IconButton>
      )}
      modalContent={({}) => (
        <div className={styles.wrapper}>
          <div ref={ref} style={{ backgroundImage: `url(${bg})` }} className={styles.banner}>
            <div className={styles.logo}>
              <img src='/images/share/logo.svg' alt='Logo' />
              <p>APEDEX.AI</p>
            </div>

            <div className={styles.pnl}>
              <div className={styles.pnl_header}>
                <p className={styles.pnl_header_number}>№3242424</p>
                <p className={styles.asset_title}>{asset}</p>
                <p style={{ color }} className={styles.pnl_header_title}>
                  {formatCurrency(pnl)}%
                </p>
                <div className={styles.pnl_header_time}>
                  <Clock size={14} />
                  <span>5h 10m</span>
                </div>
              </div>

              <div className={styles.pnl_current}>
                <p className={styles.pnl_current_pnl}>CURRENT PNL:</p>
                <div className={styles.pnl_current_value}>
                  <p>+0.0456 SOL</p>
                  <span>≈1.92 USD</span>
                </div>
              </div>

              <div className={styles.pnl_boxes}>
                <div className={styles.pnl_box}>
                  <h3 className={styles.pnl_box_title}>Total Invest</h3>
                  <p className={styles.pnl_box_amount}>0.01 SOL</p>
                  <p className={styles.pnl_box_profit}>≈1.92 USD</p>
                </div>

                <div className={styles.pnl_box}>
                  <h3 className={styles.pnl_box_title}>Worth</h3>
                  <p className={styles.pnl_box_amount}>0.01 SOL</p>
                  <p className={styles.pnl_box_profit}>≈1.92 USD</p>
                </div>
              </div>
            </div>

            <div className={styles.qr}>
              <div className={styles.qr_code}>
                <QrCode value={reflink} />
              </div>
              <div className={styles.qr_info}>
                <p className={styles.qr_info_title}>Access by Qr code</p>
                <h4 className={cn(styles.qr_info_text, 'max-w-[80px]')}>Join the best AI Dex exchange!</h4>
              </div>
            </div>

            <h1 className={styles.title}>AI Trade with ApeDex!</h1>

            <img className={styles.decoration} src={decoration} alt='decoration' />
          </div>

          <div className={styles.links}>
            <a className={styles.links_link} href={reflink} target='_blank'>
              {reflink}
            </a>
            <p className={styles.links_text}>{text}</p>
          </div>

          <div className={styles.buttons}>
            <SharePnlInMedia refSiteLink={reflink} text={shareMediaText} />
            <Button className='w-full' onClick={saveImage} disabled={isLoading} variant='contained' color='primary'>
              Скачать
            </Button>
            <CopyButton text={clipboardText} />
          </div>
        </div>
      )}
    />
  )
})

SharePnl.displayName = 'SharePnl'
