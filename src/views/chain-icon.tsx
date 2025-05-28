import cn from 'classnames'

export const ChainIcon = ({ src, className }: { src?: string; className?: string }) => {
  return (
    <div className={cn('h-5 w-5 min-w-5 overflow-hidden rounded-full', className)}>
      {src ? <img className='h-full w-full' src={src} alt='dex' /> : null}
    </div>
  )
}

export const chainIcons = {
  solana: '/images/chain-id/solana.svg'
}
