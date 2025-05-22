'use client'
import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useBoolean } from 'usehooks-ts'

import { Loader } from '@/components/Loader'
import { useAuth } from '@/hooks/useAuth'
import { useUser } from '@/hooks/useUser'
import { getItemFromLocalStorage } from '@/utils/localStorageService'
import type { ChildrenType } from '@core/types'

export default function AuthGuard({ children }: ChildrenType) {
  const { isLogged } = useUser()
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
      void verifySession(setFalse, () => router.replace(`/login`))
    } else {
      router.replace(`/login`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
