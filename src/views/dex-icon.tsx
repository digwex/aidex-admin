import cn from 'classnames'

export const DexIcon = ({ src, className }: { src?: string; className?: string }) => {
  return (
    <div className={cn('h-4 w-4 min-w-4 overflow-hidden rounded-full', className)}>
      {src ? <img className='h-full w-full' src={src} alt='dex' /> : null}
    </div>
  )
}

export const dexIcons = {
  meteora: '/images/dex-id/meteora.webp',
  orca: '/images/dex-id/orca.webp',
  pumpswap: '/images/dex-id/pumpswap.webp',
  raydium: '/images/dex-id/raydium.webp'
}
