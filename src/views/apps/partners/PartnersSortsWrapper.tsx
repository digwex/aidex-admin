'use client'

import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
}

export const PartnersSortsWrapper = ({ children }: Props) => {
  const pathname = usePathname()

  const regex = new RegExp(`^/partners/\\d+(/.*)?$`)
  const isPartnerPage = regex.test(pathname || '')

  if (isPartnerPage) return null

  return <div className='space-y-4'>{children}</div>
}
