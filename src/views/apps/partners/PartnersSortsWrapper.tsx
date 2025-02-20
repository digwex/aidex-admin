'use client'

import { usePathname } from 'next/navigation'

import type { Locale } from '@/configs/i18n'

interface Props {
  children: React.ReactNode
  lang: Locale
}

export const PartnersSortsWrapper = ({ children, lang }: Props) => {
  const pathname = usePathname()

  const regex = new RegExp(`^/${lang}/partners/\\d+(/.*)?$`)
  const isPartnerPage = regex.test(pathname || '')

  if (isPartnerPage) return null

  return <div className='space-y-4'>{children}</div>
}
