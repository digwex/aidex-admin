'use client'
import { useEffect } from 'react'

import { useParams, useRouter } from 'next/navigation'

import { useBoolean } from 'usehooks-ts'

import type { Locale } from '@configs/i18n'
import type { ChildrenType } from '@core/types'
import { getItemFromLocalStorage } from '@/utils/localStorageService'
import { useAuth } from '@/hooks/useAuth'
import { useUser } from '@/hooks/useUser'
import { Loader } from '@/components/Loader'

export default function AuthGuard({ children }: ChildrenType & { locale: Locale }) {
  const { isLogged } = useUser()
  const { lang } = useParams()
  const { value: isLoading, setFalse } = useBoolean(true)
  const { verifySession } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLogged) {
      setFalse()

      return
    }

    const accessToken = getItemFromLocalStorage('accessToken')

    if (accessToken) {
      void verifySession(setFalse, () => router.replace(`/${lang}/login`))
    } else {
      router.replace(`/${lang}/login`)
    }
  }, [isLogged])

  if (isLoading) {
    return (
      <div className='w-screen min-h-screen flex items-center justify-center'>
        <Loader />
      </div>
    )
  }

  return <>{children}</>
}
