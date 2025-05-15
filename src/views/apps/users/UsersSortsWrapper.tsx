'use client'

import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
}

export const UsersSortsWrapper = ({ children }: Props) => {
  const pathname = usePathname()

  const regex = new RegExp(`^/users/\\d+(/.*)?$`)
  const isPartnerPage = regex.test(pathname || '')

  if (isPartnerPage) return null

  return children
}
