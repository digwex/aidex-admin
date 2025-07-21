import { forwardRef } from 'react'

// Type Imports
import { Link, type LinkProps } from 'react-router'

import type { ChildrenType } from '../types'

type RouterLinkProps = LinkProps &
  Partial<ChildrenType> & {
    className?: string
  }

export const RouterLink = forwardRef((props: RouterLinkProps, ref: any) => {
  // Props
  const { to, className, ...other } = props

  return (
    <Link ref={ref} to={to} className={className} {...other}>
      {props.children}
    </Link>
  )
})
