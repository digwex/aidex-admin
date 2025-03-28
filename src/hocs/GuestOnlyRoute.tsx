'use client'

import { redirect } from 'next/navigation'

import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

import { getLocalizedUrl } from '@/utils/i18n'
import { useUser } from '@/hooks/useUser'

import themeConfig from '@configs/themeConfig'

const GuestOnlyRoute = ({ children, lang }: ChildrenType & { lang: Locale }) => {
  const { isLogged } = useUser()

  if (isLogged) {
    redirect(getLocalizedUrl(themeConfig.homePageUrl, lang))
  }

  return <>{children}</>
}

export default GuestOnlyRoute
