'use client'

import { usePathname } from 'next/navigation'

import type { Locale } from '@/configs/i18n'

interface Props {
  children: React.ReactNode
  lang: Locale
}

export const UsersSortsWrapper = ({ children, lang }: Props) => {
  const pathname = usePathname()

  const regex = new RegExp(`^/${lang}/apps/users/\\d+(/.*)?$`)
  const isPartnerPage = regex.test(pathname || '')

  if (isPartnerPage) return null

  return children
}
