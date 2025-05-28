'use client'

import { memo, useEffect, useState } from 'react'

import cn from 'classnames'

interface Props {
  src?: string
  name?: string
  className?: string
  letterClassName?: string
  style?: React.CSSProperties
}

export const PairIcon = memo(({ src, name, className, letterClassName, style }: Props) => {
  const derivedSrc = src || (name ? `/images/coins/${name}.svg` : '')
  const [isIconExist, setIsIconExist] = useState(Boolean(derivedSrc))

  useEffect(() => {
    setIsIconExist(Boolean(derivedSrc))
  }, [derivedSrc])

  if (isIconExist) {
    return (
      <img
        style={style}
        className={cn('h-9 w-9 min-w-9 rounded-full', className)}
        src={derivedSrc}
        alt={name}
        onError={() => {
          setIsIconExist(false)
        }}
      />
    )
  }

  return (
    <div
      style={style}
      className={cn('flex h-9 w-9 min-w-9 items-center justify-center rounded-full bg-secondary-color', className)}
    >
      <span className={cn('text-lg font-semibold uppercase', letterClassName)}>{name ? name.slice(0, 1) : 'A'}</span>
    </div>
  )
})

PairIcon.displayName = 'PairIcon'
