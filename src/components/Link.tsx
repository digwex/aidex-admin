// React Imports
import { forwardRef } from 'react'
import type { ComponentProps, ForwardedRef, MouseEvent } from 'react'

import { Link as RouterLink } from 'react-router'

type Props = Omit<ComponentProps<typeof RouterLink>, 'href' | 'onClick'> & {
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

const Link = (props: Props, ref: ForwardedRef<HTMLAnchorElement>) => {
  // Props
  const { href, onClick, ...rest } = props

  return (
    <RouterLink
      ref={ref}
      {...rest}
      to={href || '/'}
      onClick={onClick ? e => onClick(e) : !href ? e => e.preventDefault() : undefined}
    />
  )
}

export default forwardRef(Link)
