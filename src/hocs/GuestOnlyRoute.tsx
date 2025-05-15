'use client'

import { redirect } from 'next/navigation'

import type { ChildrenType } from '@core/types'

import { useUser } from '@/hooks/useUser'

import themeConfig from '@configs/themeConfig'

const GuestOnlyRoute = ({ children }: ChildrenType) => {
  const { isLogged } = useUser()

  if (isLogged) {
    redirect(themeConfig.homePageUrl)
  }

  return <>{children}</>
}

export default GuestOnlyRoute
